//프롬프트는 2개의 인수를 받을 수 있음
const name= prompt("예약일","날짜")
console.log(name);

//확인과 취소버튼이 같이 있음 프루와 펄스를 반환함
const isAdult=confirm("성인입니까?")
console.log(isAdult);


//이런 창을 사용한 스크립트는 일시정지됌 창을 닫기 전에는 이후의 프로그램이 실행되지 않는 제한
//만약 텍스트창이 아니고 얼럿으로 알려준다면 누르지 않으면 다음이 진행되지 않음! (일일이 확인을 눌러야함)
//경고같은 곳에는 쓰일수 있지만 알림으로는 적절하지 않음 
//스타일링을 할수 없고 브라우저 마다 위치와 모양이 다름 

//장점 빠르고 간단함

