let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76];

const odd=numbers.filter(function (value) {
    return value % 2 === 1;}
);

console.log(odd);

//let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76];

const under=numbers.filter(function (value) {
  return value < 100;
});

console.log(under);

//let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76];

const mutipl=numbers.filter(function (value) {
  return value % 5 === 0;
});

console.log(mutipl);

//let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76];

// numbers.filter(function (value) {
//     return value % 2 === 1;}
// );

// console.log(numbers);

// //let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76];

// numbers.filter(function (value) {
//   return value < 100;
// });

// console.log(numbers);

// //let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76];

// numbers.filter(function (value) {
//   return value % 5 === 0;
// });

// console.log(numbers);







// 선생님 코드
// let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76];
// numbers=numbers.filter((value)=>
// value%2==1)//위에 적은거랑 차이는 펑션이랑 리턴지운거!
// //그런데 변수 선언 안해줘도 되나?
// console.log(numbers);

// numbers=numbers.filter((value)=>
// value<=100)
// console.log(numbers);

// numbers=numbers.filter((value)=>
// value%5==0)
// console.log(numbers);
