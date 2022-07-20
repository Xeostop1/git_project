//let output = "";
// for (let i = 0; i < 9; i++) {
//   for (let j = 0; j < i + 1; j++) {
//     //output += "*";
//     return "*";
//   }
//   //output += "\n";
//   return "\n";
// }

//익명함수를 사용
const loop = function () {
  let output = "";
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < i + 1; j++) {
      output += "*";
    }
    output += "\n";
  }
  return output;
};
//loop();
console.log(`loop의 타입은 ${typeof loop}`);
//console.log("-------------------------");

console.log(loop());
//어떻게 작동 된거지!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//???????????????????????????????뭐지?!
//이것도 에로우 펑션이 되나?
