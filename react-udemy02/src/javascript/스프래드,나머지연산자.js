// 스프래드 : 배열의 원소나 객체의 프로퍼티를 나누는데 사용됨
//          배열이나 객체를 펼쳐놓음

const numbers = [1,2,3];
const newNumbers = [...numbers, 4];
console.log(newNumbers); // [1,2,3,4]

const persion = {
    name :'somang'
};
const newPerson = {
    ...person,
    age : 28
}
console.log(newPerson); 
/*
[object Object]{
    age : 28, 
    name:'somang'
}
*/


// 레스트(나머지연산자) : 함수의 인수목록을 배열로 합치는데 사용됨

const filter = (...args) => {
    return args.filter(el => el === 1);
}
console.log(filter(1,2,3)); // [1]