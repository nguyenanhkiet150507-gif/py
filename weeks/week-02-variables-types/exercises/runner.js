/* Phòng Code: đọc file .py, hiển thị code và chạy bằng Pyodide.
   Dùng lại $, win() từ games.js */
let curBT = null, srcBT = '', py = null;
const outEl = document.getElementById('out');

BAI_TAP.forEach((b, i) => {
  const btn = document.createElement('button');
  btn.textContent = b.icon + ' ' + b.file;
  btn.onclick = () => chonBT(i);
  document.getElementById('bnav').appendChild(btn);
});

async function chonBT(i) {
  curBT = BAI_TAP[i];
  document.querySelectorAll('#bnav button').forEach((x, j) => x.classList.toggle('on', j === i));
  $('#file').textContent = curBT.file;
  $('#title').textContent = curBT.title;
  $('#desc').textContent = curBT.desc;
  outEl.textContent = '';
  $('#code').textContent = 'Đang tải…';
  try {
    const r = await fetch(curBT.file + '?v=' + Date.now());
    if (!r.ok) throw new Error(r.status);
    srcBT = await r.text();
    $('#code').textContent = srcBT;
  } catch (e) {
    srcBT = '';
    $('#code').textContent = 'Không đọc được ' + curBT.file + '. Hãy mở trang qua máy chủ: python -m http.server 8000';
  }
}

// Gọi từ các nút "Xem & chạy code" ở các khu khác
function openCode(file) {
  document.querySelector('#nav button[data-t="s5"]').click();
  const i = BAI_TAP.findIndex(b => b.file === file);
  chonBT(i < 0 ? 0 : i);
  window.scrollTo({top: 0, behavior: 'smooth'});
}

async function khoiDongPy() {
  if (py) return py;
  outEl.textContent = '⏳ Đang đánh thức Python (lần đầu hơi lâu)…\n';
  if (!window.loadPyodide) await new Promise((ok, no) => {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
    s.onload = ok; s.onerror = () => no(new Error('Không tải được Python. Hãy kiểm tra kết nối mạng.'));
    document.head.appendChild(s);
  });
  py = await loadPyodide();
  py.setStdout({batched: s => { outEl.textContent += s + '\n'; }});
  py.setStderr({batched: s => { outEl.textContent += '⚠️ ' + s + '\n'; }});
  window.hoiNguoiDung = q => {
    const v = prompt(q || 'Nhập giá trị:');
    outEl.textContent += (q || '') + (v ?? '') + '\n';
    return v ?? '';
  };
  await py.runPythonAsync('import builtins\nfrom js import hoiNguoiDung\nbuiltins.input = lambda p="": hoiNguoiDung(p)');
  return py;
}

$('#run').onclick = async () => {
  if (!srcBT) return;
  const btn = $('#run'); btn.disabled = true;
  try {
    const p = await khoiDongPy();
    outEl.textContent = '';
    await p.runPythonAsync(srcBT);
    outEl.textContent += '\n✅ Xong rồi!';
    win('run:' + curBT.file, 2, 'Bạn đã chạy ' + curBT.file + '!');
  } catch (e) {
    outEl.textContent += '\n❌ Có lỗi: ' + e.message;
  }
  btn.disabled = false;
};
$('#clear').onclick = () => { outEl.textContent = ''; };

chonBT(0);
