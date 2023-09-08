// bài 1: In số từ 1 -> 500
/*
for (let i = 1; i <= 500; i++) {
    console.log(i);
}*/
// bài 2: In ra các số chia hết cho 2 và 3 từ 1 đến 300.
/* 
for (let i = 1; i <= 300; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log(i);
  }
}
*/
// bài 12: trò chơi đoán số 

const correctNumber = Math.floor(Math.random() * 20) + 1; // Tạo số ngẫu nhiên từ 1 đến 20
let attempts = 0;

function guessNumber() {
    const answer = parseInt(prompt("Hãy đoán số từ 1 đến 20:"));

    if (isNaN(answer) || answer < 1 || answer > 20) {
        alert("Vui lòng nhập số từ 1 đến 20.");
    } else {
        attempts++;

        if (answer === correctNumber) {
            alert("Đoán đúng!");
        } else {
            alert("Đoán sai.");
            if (attempts >= 5) {
                alert("Bạn đã thua cuộc. Số đúng là " + correctNumber);
            } else {
                guessNumber(); // Yêu cầu nhập lại nếu đoán sai
            }
        }
    }
}

guessNumber();

// Bài 16 : Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n

/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nhập vào số n (n >= 3): ", function(n) {
  n = parseInt(n);

  if (isNaN(n) || n < 3) {
    console.log("Vui lòng nhập số nguyên lớn hơn hoặc bằng 3.");
    rl.close();
    return;
  }

  // In hình tam giác vuông cân
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }

  rl.close();
});
*/
// Bài  17: Tính chỉ số BMI
/* console.log("\n17. Tính chỉ số BMI.");
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
*/