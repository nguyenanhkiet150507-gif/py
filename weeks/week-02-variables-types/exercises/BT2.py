
"""
Bài tập 02: Chuyển đổi kiểu dữ liệu
Mục tiêu: Thành thạo int(), float(), str(), bool()
"""

# TODO 1: Chuyển chuỗi thành số nguyên
so_text = "42"

so_nguyen = int(so_text)
ket_qua = so_nguyen + 8

print("=== TODO 1 ===")
print("Kết quả:", ket_qua)


# TODO 2: Chuyển số thực thành số nguyên
pi = 3.14159

pi_nguyen = int(pi)

print("\n=== TODO 2 ===")
print("Giá trị sau chuyển đổi:", pi_nguyen)


# TODO 3: Kiểm tra bool()
print("\n=== TODO 3 ===")
print("bool(0):", bool(0))
print("bool(1):", bool(1))
print('bool(""):', bool(""))
print('bool("hello"):', bool("hello"))
print("bool([]):", bool([]))
print("bool([1, 2]):", bool([1, 2]))


# TODO 4: Tính BMI
print("\n=== TODO 4 ===")

chieu_cao = float(input("Nhập chiều cao (m): "))
can_nang = float(input("Nhập cân nặng (kg): "))

if chieu_cao > 0:
    bmi = can_nang / (chieu_cao ** 2)
    print(f"Chỉ số BMI của bạn là: {bmi:.1f}")
else:
    print("Chiều cao phải lớn hơn 0!")


# TODO 5: Chuyển đổi giây thành giờ, phút, giây
print("\n=== TODO 5 ===")

tong_giay = int(input("Nhập số giây: "))

gio = tong_giay // 3600
phut = (tong_giay % 3600) // 60
giay = tong_giay % 60

print(f"{gio} giờ {phut} phút {giay} giây")
