//1. promise을 만든걸 좀더 보기 좋게(또는 사용하기 편하게) 만들어 주는 역할 = async.await
//간편한 api를 제공 기존의 있는 코드에 감싸서 사용 이걸 syntactic sugar라고 한데 
//비슷한 예로 class가 있는데 프로토 타입을 베이스로 한 그 위에 보여주는 것!과 같데 ㅋㅋㅋ 뭐소리지

//1.async-promise으로 하는 사용법 
// function fetchUser(){
//     //백엔드에서 10초정도 걸리는 자료를 다운 받는 중 
//     //return 'hana';
//     return new Promise((resolve, reject) => {
//         resolve('hana');
//     });
// }

// const user=fetchUser();
// user.then (console.log);
// console.log(user);

// console.log('──────────────────────────────────');


//1.async로 정리해서 사용
//앞에 async를 붙여주면 위에 프로미스처럼 복잡하지 않아도 가능 
async function fetchUser(){
    //백엔드에서 10초정도 걸리는 자료를 다운 받는 중 
   return 'hana';
}

const user=fetchUser();
user.then (console.log);
console.log(user);


//2.await 더욱 간단하게 사용
function delay(ms)
{return new Promise(resolve => setTimeout(resolve, ms));}

async function getApple()
{await delay(2000); 
return '🍎';
}

async function getBanana(){
    await delay(1000);//아래 프로미스처럼 딜레이가 될때까지 await(기다려!) 그다음에 반환한다
    return'🍌';
}

function getSalad()
{return delay(1000)
    .then(()=> '🥗');
}


async function pickFruits(){
        const applePromise=getApple();
        const bannaPromise=getBanana();
        const saladPromise=getSalad();//병렬적으로 가지고 왔다가 한번에 출력


    const apple=await getApple();
    const banana =await getBanana();
    const salad =await getSalad();
    
    return `${apple} + ${banana} = ${salad}`;} 
    
pickFruits().then(console.log);

console.log('────────────────────────');

//3. useful Promise APIs
function pickAllFruit(){
return Promise.all([getApple(), getBanana(), getSalad()])
.then(fruits => fruits.join('+'));
}

pickAllFruit()
.then(console.log);

//4.순서가 빠른것 출력
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne()
.then(console.log);

