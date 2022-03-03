// 윤년을 구하는 조건
// 1. 대조건 4로 나누어 떨어지는 해는 윤년을
// 다음에 처리할 조건들
//  하지만 100으로 나누어 떨어지는 해는 윤년이 아님
//  그러나 400으로 나누어 떨어진느 해는 윤년이다.


 const isLeapYear=function(연도){
    return (연도%4===0)
     &&(연도%100!==0)
     ||(연도%400===0)
 }

 console.log(`2020은? ${isLeapYear(2020)}`);
 console.log(`2010은? ${isLeapYear(2010)}`);
 console.log(`2000은? ${isLeapYear(2000)}`);
 console.log(`1900은? ${isLeapYear(1900)}`);
 