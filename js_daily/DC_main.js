//1. 변수(variable 벨리어불 변동이 심한, 가변적인 vary가 다르다라느 뜻  )
//프로그래밍 언어에서 우리가 처리해야 하는 되는 데이터를 담은 것 
//데이터를 가진것! 변수를 통해서 데이터접근과 업데이트 가능 

//이런 데이터타입은 숫자(number), string(문자), boolean, null, undefined, symbol
//불린은 참거짓을 나타내는 논리적 데이터(true, false)
//null 널은 0이 아닌 그도적으로 값이 없는걸 나타냄
// 한마디로 변수는 가지고 있지만 값이 null(없다!)할당된 상태
//un+defined언디파인은 뜻처럼 정의되지 않은 상태. 이것도 변수는 있으나 어떠한 값으로도 할당되지 않아서 자료형이 정해지지 않은 상태!

let number=2;//let은 변수를 만들어주는 이름 number는 변수 number를 만들꺼야!(정의)
let number2=number;

console.log(number);
console.log(number2);


//let age=2;라고 하면 변수가 나이를 나타내는거구나 하고 인식 하기 쉬움!

number2=3;//위에는 number의 값을 그대로 받아와서 2, 2가 출력되지만
// 이경우는 number2에 값을 할당해 주었기 때문에 3으로 출력
console.log(number);
console.log(number2);



//2.object 위의 타입들을 제외한 것들은 모두다 오브젝트 (집합적인 물건이라는 뜻을 지님)
//1~2이상의 큰 데이터가 들어있기 때문에 변수에 다 담아놓을 수 없음 
//양이 너무 많아

let obj ={
    name: 'hanaseo',
    age: 5,
}
//교집합이라고 생각하면 됨 서로 가지고 있는 값을 obf가 크게 묶고 있는것

console.log(obj.name);//콘솔창에 오브젝트<name(안에있는)것을 부르고 싶어 

let obj2= obj;
//obj가 그대로 복사
console.log('────────────────────────────');
console.log(obj2.name);
//위의 벨리어블은 값이 그대로 들어오지만 오브젝트는 주소만이 복사됨 
//내 생각에는 너무 많은 값이 있으니 값을 가지고 오기에는 복잡하니 주소(레퍼런스)만 할당하는것 같음

obj.name ='james'
console.log('────────────────────────────');
console.log(obj.name);
console.log(obj2.name);

let a=2;
a=5;
//let은 가변적으로 값을 변할 수 있지만
//const는 값을 변경하기 불가
const b=2;
//b=2; 오류남

const obj3 ={
    name: 'seohana',
    age:5
};

//이렇게는 위의 const로 만든 오브젝트의 주소(레퍼런스를) 변경 하려고 하기 때문에
//const의 성격상 어려움 아래의 경우 레퍼런스자체를 바꾼식임

// obj={
//     name:'james',
//     age:7;
// }

//그러나 obj.name 이라고 가르키고 있는 레퍼렌스의 값을 바꾸는것은 가능함

obj3.name='ellie';

