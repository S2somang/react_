class Human {
    constructor(){
        this.gender = 'male';
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor(){
        super();
        this.name ='somang';
    }

    printMyName () {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName(); //somang
person.printGender(); //male
