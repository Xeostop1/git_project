function add(num1, num2){
    return num1 + num2;
}

// const doSomething =add;
// //const의 틀로 dosomething의 자리를 만들었는데 add;함수가 들어온거임
// // add의 값이 들어온게 아니라 add의 레퍼런스(주소)가 들어왔음 오브젝트 처럼  

// const result = doSomething(2, 3);
// console.log(result);


// const result2 = add(2, 3);
// console.log(result2);
console.log('────────────────────────────');



// function print(a, b){
//     console.log(`${a} ${b}`);
// }
// print(6, 33);

function superise(operator){
    const result = operator();
    console.log(result);   
}

superise();//여기보면 타입오류가 뜨고 오퍼레이터는 함수가 아니다를 나타냄
//값을 전달하지 않았기 때문에 undefind  