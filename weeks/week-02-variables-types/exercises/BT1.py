
"""
Bài tập 01: Biến trong Python
Mục tiêu: Hiểu cách khai báo và sử dụng biến
"""

# TODO 1: Tạo 4 biến lưu thông tin cá nhân
ten = "Nguyễn Anh Kiệt"
tuoi = 19
diem_tb = 8.5
dang_hoc = True

print("=== THÔNG TIN CÁ NHÂN ===")
print("Tên:", ten, type(ten))
print("Tuổi:", tuoi, type(tuoi))
print("Điểm trung bình:", diem_tb, type(diem_tb))
print("Đang học:", dang_hoc, type(dang_hoc))


# TODO 2: Hoán đổi giá trị 2 biến không dùng biến tạm
a = 10
b = 20

print("\n=== HOÁN ĐỔI GIÁ TRỊ ===")
print("Trước khi hoán đổi:")
print("a =", a)
print("b =", b)

a, b = b, a

print("Sau khi hoán đổi:")
print("a =", a)
print("b =", b)


# TODO 3: Augmented assignment
x = 100

print("\n=== AUGMENTED ASSIGNMENT ===")

x += 50
print("Sau += 50:", x)

x -= 20
print("Sau -= 20:", x)

x *= 2
print("Sau *= 2:", x)

x //= 5
print("Sau //= 5:", x)


# TODO 4: Multiple assignment
ho, ten, tuoi = "Nguyễn", "Anh Kiệt", 19

print("\n=== MULTIPLE ASSIGNMENT ===")
print(f"Họ tên: {ho} {ten}, {tuoi} tuổi")
