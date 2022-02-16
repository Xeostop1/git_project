//const zodiacInput = Number(prompt("당신이 태어난 해를 입력해주세요", "")) % 12;

// if (zodiacInput === 0) {
//   alert("원숭이띠 입니다.");
// } else if (zodiacInput === 1) {
//   alert("닭띠 입니다.");
// } else if (zodiacInput === 2) {
//   alert("개띠 입니다.");
// } else if (zodiacInput === 3) {
//   alert("돼지띠 입니다.");
// } else if (zodiacInput === 4) {
//   alert("쥐띠 입니다.");
// } else if (zodiacInput === 5) {
//   alert("소띠 입니다.");
// } else if (zodiacInput === 6) {
//   alert("호랑이띠 입니다.");
// } else if (zodiacInput === 7) {
//   alert("토끼띠 입니다.");
// } else if (zodiacInput === 8) {
//   alert("용띠 입니다.");
// } else if (zodiacInput === 9) {
//   alert("뱀띠 입니다.");
// } else if (zodiacInput === 10) {
//   alert("말띠 입니다.");
// } else if (zodiacInput === 11) {
//   alert("양띠 입니다.");
// }

// switch (zodiacInput) {
//   case zodiacInput === 0:
//     alert("원숭이띠 입니다.");
//     break;
//   case zodiacInput === 1:
//     alert("닭띠 입니다.");
//     break;
//   case zodiacInput === 2:
//     alert("개띠 입니다.");
//     break;
//   case zodiacInput === 3:
//     alert("돼지띠 입니다.");
//     break;
//   case zodiacInput === 4:
//     alert("쥐띠 입니다.");
//     break;
//   case zodiacInput === 5:
//     alert("소띠 입니다.");
//     break;
//   case zodiacInput === 6:
//     alert("호랑이띠 입니다.");
//     break;
//   case zodiacInput === 7:
//     alert("토끼띠 입니다.");
//     break;
//   case zodiacInput === 8:
//     alert("용띠 입니다.");
//     break;
//   case zodiacInput === 9:
//     alert("뱀띠 입니다.");
//     break;
//   case zodiacInput === 10:
//     alert("말띠 입니다.");
//     break;
//   case zodiacInput === 11:
//     alert("양띠 입니다.");
//     break;
// }

// switch (zodiacInput) {
//   case 0:
//     alert("원숭이");
//     break;

//   case 1:
//     alert("닭");
//     break;

//   case 2:
//     alert("개");
//     break;

//   case 3:
//     alert("돼지");
//     break;

//   case 4:
//     alert("쥐");
//     break;

//   case 5:
//     alert("호랑이");
//     break;
// }

const rawInput = Number(prompt("태어난 해를 입력해 주세요", ""));

let result1;
const e1 = rawInput % 12;

if (e1 === 0) {
  result1 = "신";
} else if (e1 === 1) {
  result1 = "유";
} else if (e1 === 2) {
  result1 = "술";
} else if (e1 === 3) {
  result1 = "해";
} else if (e1 === 4) {
  result1 = "자";
} else if (e1 === 5) {
  result1 = "축";
} else if (e1 === 6) {
  result1 = "인";
} else if (e1 === 7) {
  result1 = "묘";
} else if (e1 === 8) {
  result1 = "진";
} else if (e1 === 9) {
  result1 = "사";
} else if (e1 === 10) {
  result1 = "오";
} else if (e1 === 11) {
  result1 = "미";
}

let result2;
const e2 = rawInput % 10;
if (e1 === 0) {
  result1 = "경";
} else if (e2 === 1) {
  result2 = "신";
} else if (e2 === 2) {
  result2 = "임";
} else if (e2 === 3) {
  result2 = "계";
} else if (e2 === 4) {
  result2 = "갑";
} else if (e2 === 5) {
  result2 = "을";
} else if (e2 === 6) {
  result2 = "병";
} else if (e2 === 7) {
  result2 = "정";
} else if (e2 === 8) {
  result2 = "무";
} else if (e2 === 9) {
  result2 = "기";
}

alert(`${rawInput}년은 ${result2}${result1}년 입니다.`);
