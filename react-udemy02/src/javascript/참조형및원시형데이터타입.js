const number = 1; // 기본형
const num2 = number; // number의 복사본을 생성한다

// 객체와 배열은 참조형 자료타입임

const person = {
    name : 'somang'
}

const secondPerson = person;
console.log(secondPerson); 
// 값이 복사하는게 아닌 주소를 저장함