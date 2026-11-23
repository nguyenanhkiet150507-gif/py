
const $=s=>document.querySelector(s);
let S={stars:0,done:{}};
try{S=JSON.parse(localStorage.getItem('lpv'))||S}catch(e){}
function save(){try{localStorage.setItem('lpv',JSON.stringify(S))}catch(e){}$('#stars').textContent=S.stars}
let tm;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(tm);tm=setTimeout(()=>t.classList.remove('show'),2200)}
function win(k,n=1,m='Giỏi quá!'){if(!S.done[k]){S.done[k]=1;S.stars+=n;save();toast('⭐ +'+n+' '+m)}}

// Section 1
function mkBoxes(){
 const d=[['ten',$('#ten').value,'str (chữ)','var(--a)'],['tuoi',parseInt($('#tuoi').value)||0,'int (số nguyên)','var(--c)'],
 ['diem_tb',parseFloat($('#diem').value)||0,'float (số thực)','#a56cf0'],['dang_hoc',$('#hoc').value==='1'?'True':'False','bool (đúng/sai)','#2f9c80']];
 $('#boxes').innerHTML=d.map(x=>`<div class="box" style="background:${x[3]}"><small>${x[0]}</small><b></b><small>${x[2]}</small></div>`).join('');
 document.querySelectorAll('#boxes .box b').forEach((b,i)=>b.textContent=d[i][1]);
 win('box',1,'Bạn đã tạo 4 hộp biến!')}
let a=10,b=20;
function swap(){[a,b]=[b,a];$('#va').textContent=a;$('#vb').textContent=b;win('swap',1,'Hoán đổi thành công!')}
let x=100;
function cal(o,n){const old=x;x=o=='+'?x+n:o=='-'?x-n:o=='*'?x*n:Math.floor(x/n);
 $('#x').textContent=x;$('#xl').textContent=`${old} ${o=='/'?'//':o} ${n} = ${x}`;win('aug',1,'Phép tính biến đổi!')}

// Section 2
function txt(){$('#r2a').innerHTML='Ghép chữ: "'+$('#st').value+'" + "8" = <b>"'+$('#st').value+'8"</b> 😮'}
function num(){const n=parseInt($('#st').value);$('#r2a').innerHTML=isNaN(n)?'Ơ, đây không phải số rồi! 🙈 (Python sẽ báo lỗi)':`int("${$('#st').value}") + 8 = <b>${n+8}</b> 🎉`;if(!isNaN(n))win('int',1,'Phép thuật int()!')}
function cut(){const v=parseFloat($('#pi').value);$('#r2b').innerHTML=isNaN(v)?'Hãy nhập một số':`int(${v}) = <b>${Math.trunc(v)}</b>`;if(!isNaN(v))win('cut',1,'Cắt đuôi thành công!')}
const T=[['0',0],['1',1],['""',0],['"hello"',1],['[]',0],['[1, 2]',1]];let g={};
$('#tf').innerHTML=T.map((t,i)=>`<div class="row"><span class="chip">${t[0]}</span><button class="btn g" data-i="${i}" data-v="1">True</button><button class="btn" data-i="${i}" data-v="0">False</button></div>`).join('');
$('#tf').onclick=e=>{const bt=e.target.closest('button');if(!bt)return;g[bt.dataset.i]=+bt.dataset.v;
 bt.parentNode.querySelectorAll('button').forEach(o=>o.style.outline='');bt.style.outline='4px solid var(--d)'};
function chkTF(){let ok=0;T.forEach((t,i)=>{if(g[i]===t[1])ok++});const r=$('#r2c');r.style.display='block';
 r.textContent=ok==6?'🎉 Tuyệt vời! Đúng cả 6 câu!':`Đúng ${ok}/6. Nhớ nhé: 0, rỗng là False. Thử lại nào!`;if(ok==6)win('bool',2,'Bậc thầy bool!')}
function sc(){const t=parseInt($('#sec').value);if(isNaN(t)||t<0){$('#r2d').textContent='Hãy nhập số giây từ 0 trở lên';return}
 $('#r2d').innerHTML=`<b>${Math.floor(t/3600)}</b> giờ <b>${Math.floor(t%3600/60)}</b> phút <b>${t%60}</b> giây`;win('sec',1,'Bạn là chuyên gia thời gian!')}

// Section 3
const nf=v=>Number.isInteger(v)?v.toLocaleString('vi-VN'):(+v.toFixed(5)).toLocaleString('vi-VN');
function c1(){const p=parseFloat($('#n1').value),q=parseFloat($('#n2').value);if(isNaN(p)||isNaN(q)){$('#r3a').textContent='Hãy nhập đủ 2 số';return}
 $('#r3a').innerHTML=`Tổng: <b>${nf(p+q)}</b><br>Hiệu: <b>${nf(p-q)}</b><br>Tích: <b>${nf(p*q)}</b><br>Thương: <b>${q===0?'Không thể chia cho 0! 🚫':nf(p/q)}</b>`;win('c1',1,'Máy tính hoạt động!')}
function c2(){const r=parseFloat($('#rad').value);if(isNaN(r)||r<0){$('#r3b').textContent='Bán kính phải là số không âm!';return}
 $('#r3b').innerHTML=`Diện tích: <b>${nf(3.14159*r*r)}</b><br>Chu vi: <b>${nf(2*3.14159*r)}</b>`;win('c2',1,'Nhà hình học nhí!')}
function c3(){const g=parseFloat($('#gg').value),p=parseFloat($('#pt').value);if(isNaN(g)||isNaN(p)||g<0||p<0||p>100){$('#r3c').textContent='Giá hoặc phần trăm chưa hợp lệ (0 đến 100)!';return}
 $('#r3c').innerHTML=`Được giảm: <b>${nf(g*p/100)}</b> đồng<br>Còn phải trả: <b>${nf(g-g*p/100)}</b> đồng 🛍️`;win('c3',1,'Thánh săn sale!')}
function c4(){const m=parseFloat($('#vnd').value),r=parseFloat($('#tg').value);if(isNaN(m)||isNaN(r)||m<0||r<=0){$('#r3d').textContent='Số tiền hoặc tỷ giá chưa hợp lệ!';return}
 $('#r3d').innerHTML=`Bạn có <b>${(m/r).toFixed(2)} USD</b> 💵`;win('c4',1,'Nhà đổi tiền nhí!')}
c1();c2();c3();c4();cut();sc();

// Section 4: quiz
const Q=[['Kiểu dữ liệu của tuoi = 7 là gì?',['str','int','float'],1],
['a, b = b, a dùng để làm gì?',['Cộng hai số','Xoá biến','Hoán đổi hai biến'],2],
['int("42") + 8 bằng bao nhiêu?',['50','428','Báo lỗi'],0],
['bool("") cho kết quả nào?',['True','False','Không có'],1],
['int(3.99) bằng bao nhiêu?',['4','3','3.9'],1],
['Giây 3725 là mấy giờ?',['1 giờ 2 phút 5 giây','1 giờ 5 phút 2 giây','2 giờ 1 phút 5 giây'],0]];
let qi=0,qs=0;
function showQ(){
 if(qi>=Q.length){$('#qz').innerHTML=`<div class="big">🏆 ${qs}/${Q.length}</div><p style="text-align:center">${qs>=5?'Siêu giỏi! Bạn là nhà lập trình nhí!':'Cố lên, thử lại nhé!'}</p><button class="btn g" onclick="qi=0;qs=0;showQ()">Chơi lại</button>`;if(qs>=5)win('quiz',3,'Nhà vô địch đố vui!');return}
 const q=Q[qi];$('#qz').innerHTML=`<h3>Câu ${qi+1}/${Q.length}</h3><p>${q[0]}</p>`+q[1].map((o,i)=>`<button class="btn opt" data-i="${i}">${o}</button>`).join('')+'<div class="res" id="qf" style="display:none"></div>';
 $('#qz').querySelectorAll('.opt').forEach(bt=>bt.onclick=()=>{
  const ok=+bt.dataset.i===q[2];if(ok)qs++;bt.classList.add(ok?'t':'f');
  $('#qz').querySelectorAll('.opt').forEach(o=>o.onclick=null);
  const f=$('#qf');f.style.display='block';f.innerHTML=(ok?'🎉 Đúng rồi!':'😅 Chưa đúng, đáp án: <b>'+q[1][q[2]]+'</b>')+'<br><button class="btn b" onclick="qi++;showQ()">Câu tiếp ➡️</button>'})}
showQ();save();
