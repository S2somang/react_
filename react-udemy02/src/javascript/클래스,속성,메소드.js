// 프로퍼티 : 클래스와 객체에 추가되는 변수같은 것. 
// 메소드 : 클래스와 객체에 추가되는 함수같은 것 
// 생성자 함수 사용하는 것보다 더 괜찮은 구문 (ES7)
// 클래스에 바로 프로퍼티를 할당 할 수 있음 
// ex) myProperty = 'value'

//ES6 - property
// constructor(){
//     this.myProperty = 'value';
// }

//ES7 - property
// myProperty = 'value'


//ES6 - function 
// myMethod(){...}

//ES7 - function 
// myMethod = () => {...}
//화살표 함수쓰면서 this키워드 사용하지 않아도 됨

class Human {
   gender = 'male';
    
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human{
    name ='somang';
    gender = 'male';
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName(); //somang
person.printGender(); //male
