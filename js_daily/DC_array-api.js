//1.배열을 스트링으로 묶기
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' & ');
    console.log(result);
    
    //조인: 모든 값을 더하여 스트링으로 변환 전달해준 값을 구분자를 넣어서 스트링을 만듬
    //세퍼레이터를 받기도 않받기도 함
}
console.log('────────────────────────────');



//2. 스트링을 배열로 만들기
{const fruits= '🍕, 🍔, 🍟, 🌭';
    const result=fruits.split(',', 3);
    console.log(result);
    //스플릿은 구분자(,)을 쓰지 않으면 통으로 배열을 가지고 오기 때문에 꼭 구분자 써주기
  }

console.log('────────────────────────────');
  


  // 3. 배열의 순서를 거꾸로
  {
      const array=[1,2,3,4,5];
      const result=array.reverse();
    console.log(result);
    console.log(array);
    //리벌스같은 경우 전체적으로 배열의 순서까지 바뀜! 사용할때 주의      
  }

console.log('────────────────────────────');

// 4. 배열에서 1,2외 제외하고 새로운 배열 만들기
{const array=[1,2,3,4,5];
//const result=array.splice(0)
//스플라이스배열자체에서 데이터값이 삭제되는것!! 
const result=array.slice(2, 5)
console.log(result);
console.log(array);
}
console.log('────────────────────────────');


// 5. 학생찾기 90점 이상
class Student{
    constructor(name, age, enrolled, score){
        this.name=name;
        this.age=age;
        this.enrolled=enrolled;
        this.score=score;

    }
}

const student=[
    new Student('hana', 29, true, 45),
    new Student('ellie', 28, false, 80),
    new Student('sunny', 30, true, 90),
    new Student('mickey', 40, false, 66),
    new Student('sato', 18, true, 88),
];
// {const result= student.find(function(student, index){
//     return student.score===90;
// });
// console.log(result);

{//위의 펑션을 줄여서 쓴것! =>
    const result= student.find((student)=> student.score=== 90);
console.log(result);
}


// 6. 수업에 등록한 학생들만 골라서 추출
{
const result= student.filter((student)=> student.enrolled);
console.log(result);

}

//7.배열에서 점수만 들어 있는배열
const reselt= student.map((student)=> student.score);
console.log(reselt);

//8. 50점 보다 작은 학생 추출
//some은 만족되는것이 있는지 없는지만 확인한다면 썸(1개 이상 있다면 투루로 출력)

const reselt2 =student.some((student)=> student.score < 50);
console.log(reselt2);

//모든조건이 만족되야할때는 에브리 
const reselt3= student.every((student)=> student.score>= 50)
console.log(reselt3);

//9.학생들의 평균값 
// 리듀스(reduce) 배열각각을 돌면서 값을 누적할 때 사용 
{const reselt4= student.reduce((prev, curr) =>{
    console.log('--------------------');
    console.log(prev);
    console.log(curr);
    return prev+curr.score;  

},0);
console.log(reselt4/student.length);//위의 결과에 렝스(모든 스튜던트의 갯수)을 나누면 평균간으

}


//10. 모든 학생의 점수를 스트링으로 변환 필터는 그중에 50점 이상인 사람만 조인으로 묶음
console.log('--------------------');

{
    const result =student.map((student)=> student.score)
    .filter((score) => score>=50)
    .join();
    console.log(result);
    
}

//11. 낮은 순서대로 정렬 a-b/ b-a는 높은순서대로 정렬
console.log('--------------------');
{
    const reselt=student
    .map(student=> student.score)
    .sort((a,b)=> a-b)
    .join();
    console.log(reselt);
    
}

