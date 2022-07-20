'use strict'
//1. promise

//js에서 제공하는 비동기를 간변하게 처리할 수 있도록 도와주는 오브젝트

//수행 후 제대로 실행되었다면 메세지와 결과값을 전달
//에러를 전달해줌
//js에 내장되어 있는 오브젝트 콜백대신에 유용하게 사용가능
//상태state 프로튜서와 컨슈머의 차이를 인지

//state는 프로미스가 많들어 져서 우리가 지정한 오퍼레이션이 진행중일때는 
//pending 상태이고 성공하면 fulfilted(완벽하게 완료)

//문제가 생기면 리젝트 스테이트 상태유지 
// prducer vs consumer 

//1. producer
//새로운 프로미스가 만들어질때는 우리가 전달한 엑시큐터라는 콜백함수가 바로 실행됨 자동적으로 
const promise = new Promise((resolve, reject)=>{
    //무거운 작업들에 이용함(네트워크, 파일을 읽어온다던지)
    console.log('doing something');
    setTimeout(()=>{
        //resolve('hana')
        reject(new Error('no network'))
    }, 2000);
});


//2. consumers: then, catch, finally 
promise.
then((value)=>{
console.log(value);
})

.catch(error => {
    console.log(error);
    
})
.finally(()=> {
    console.log('finally 마지막');
    
});



//3. prinuse chaining
const fetchNumber=new Promise((esolve, reject) =>{
    setTimeout(() => esolve(1), 1000);
});

fetchNumber
.then(num=>num*2)
.then(num=>num*3)
.then(num=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(num-1), 1000);
    });
})

.then(num=>console.log(num));



//4. error handling
const getHen =()=>
new Promise((resolve, reject) => {
    setTimeout(()=> resolve('🐓'),1000);
});


const getEgg = hen =>
new Promise((resolve, reject) => {
    setTimeout(()=> resolve(`error! ${hen}=> 🥚`),1000);
});

const cook =egg =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=> 🍳`),1000);
});


getHen()
.then(getEgg)//1개만 받아서 전달하는 경우 아래의 것을 생략해서 바로 쓸 수 있음
// .catch(error=>{
//     return'🧇'
// })
.then(cook)
.then(console.log)
.catch(console.log);

