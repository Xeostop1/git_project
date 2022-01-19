//함수의 선언, 호출


//1. 함수 선언
function doSomething(add){
    console.log(add);
    // add(2, 3); 이렇게만 쓰면 값을 적기만 한거라서 꼭 이값을 쓸꺼라고 할당이 필요함
    const result = add(2,3);
console.log('────────────────────────────');

    console.log(result);
    
}

function add(a, b){
    const sum = a+b
    return sum;//은 아래 함수를 호출할 때 전달해 주는 역할 키워드!
}// add라는 함수는 ab라는 값을 통해 +하고 그 값을 리턴으로 전달함 



//2. 함수호출 함수를 부르는것 


const result = add(1, 2);// 결과를 가져온다 const 변수 선언방식! 
//result라는걸 변수로 삼아서 add 함수를 쓸꺼야 const틀을 이용한거임(var 같은것)
//const의 경우 기본이고(재할당이 필요없는 상수와 객체)
//let의 경우 재할당이 필요한 경우 사용 

console.log(result);
console.log('────────────────────────────');

doSomething(add);
//함수를 전달할때는 함수의 이름만 전달!
//add라는 함수 전체가 들어옴


//doSomething(add());의 경우 함수를 호출한게 아니라 add 함수안에 있는 결과값을 호출하게
//된것임 잘 이해는 않가지만 순서가 그렇게 됨!
// 호출의 하고나서 부르는것의 상태임


console.log('────────────────────────────');




