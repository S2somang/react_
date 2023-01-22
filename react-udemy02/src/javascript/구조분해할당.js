//구조분해할당
// 배열의 원소나 객체의 프로퍼티르 추출해서 변수에 저장할 수 있도록 해주는 것
// 원소나 프로퍼티를 하나만 가져와서 변수에 저장
const numbers = [1,2,3];
// 배열
[num1, , num3] = numbers;
console.log(num1 ,num3); //1 3
// 객체
// {name} = {name :'somang', age :28}
// console.log(name) // somang
// console.log(age) // nudefines