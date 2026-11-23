
"""
Bài tập 03: Máy tính nhận input
Mục tiêu: Kết hợp input() với tính toán
"""

# TODO 1: Nhập 2 số và tính tổng, hiệu, tích, thương
print("=== TODO 1: MÁY TÍNH CƠ BẢN ===")

so_thu_nhat = float(input("Nhập số thứ nhất: "))
so_thu_hai = float(input("Nhập số thứ hai: "))

tong = so_thu_nhat + so_thu_hai
hieu = so_thu_nhat - so_thu_hai
tich = so_thu_nhat * so_thu_hai

print("Tổng:", tong)
print("Hiệu:", hieu)
print("Tích:", tich)

if so_thu_hai != 0:
    thuong = so_thu_nhat / so_thu_hai
    print("Thương:", thuong)
else:
    print("Không thể chia cho 0!")


# TODO 2: Tính diện tích và chu vi hình tròn
print("\n=== TODO 2: HÌNH TRÒN ===")

pi = 3.14159
ban_kinh = float(input("Nhập bán kính hình tròn: "))

if ban_kinh >= 0:
    dien_tich = pi * ban_kinh ** 2
    chu_vi = 2 * pi * ban_kinh

    print("Diện tích:", dien_tich)
    print("Chu vi:", chu_vi)
else:
    print("Bán kính không được âm!")


# TODO 3: Tính giá sau khi giảm giá
print("\n=== TODO 3: TÍNH GIẢM GIÁ ===")

gia_goc = float(input("Nhập giá gốc: "))
phan_tram_giam = float(input("Nhập phần trăm giảm giá: "))

if gia_goc >= 0 and 0 <= phan_tram_giam <= 100:
    tien_giam = gia_goc * phan_tram_giam / 100
    gia_sau_giam = gia_goc - tien_giam

    print("Số tiền được giảm:", tien_giam)
    print("Giá sau khi giảm:", gia_sau_giam)
else:
    print("Giá gốc hoặc phần trăm giảm không hợp lệ!")


# TODO 4: Máy đổi tiền VNĐ sang USD
print("\n=== TODO 4: MÁY ĐỔI TIỀN ===")

tien_vnd = float(input("Nhập số tiền VNĐ: "))
ty_gia = float(input("Nhập tỷ giá USD/VNĐ: "))

if tien_vnd >= 0 and ty_gia > 0:
    tien_usd = tien_vnd / ty_gia
    print(f"Số tiền USD: {tien_usd:.2f} USD")
else:
    print("Số tiền hoặc tỷ giá không hợp lệ!")
