// bài 1: In số từ 1 -> 500
/*
for (let i = 1; i <= 500; i++) {
    console.log(i);
}*/

// Bài 17: Tính chỉ số BMI
console.log("\n17. Tính chỉ số BMI.");
// Nhập chiều cao (w) và cân nặng (h)
const w = parseFloat(prompt("Nhập chiều cao (m):"));
const h = parseFloat(prompt("Nhập cân nặng (kg):"));

// Tính chỉ số BMI
const bmi = h / (w * w);

// Kiểm tra và in ra kết quả
if (bmi < 18.5) {
    console.log("Nhẹ cân");
} else if (bmi >= 18.5 && bmi < 23) {
    console.log("Bình thường");
} else if (bmi >= 23 && bmi < 25) {
    console.log("Thừa cân");
} else {
    console.log("Béo phì");
}