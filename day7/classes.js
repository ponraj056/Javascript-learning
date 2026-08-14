// Basic Class
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(this.name, this.age);
    }
}

const s1 = new Student("Ponraj", 20);
s1.display();


// Inheritance
class CollegeStudent extends Student {
    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }

    showDepartment() {
        console.log(this.department);
    }
}

const s2 = new CollegeStudent("Arun", 21, "IT");

s2.display();
s2.showDepartment();


// Method Overriding
class Animal {
    sound() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

const dog = new Dog();
dog.sound();


// Static Method
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

console.log(Calculator.add(10, 20));


// Getter and Setter
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

const p = new Person("Ponraj");

console.log(p.name);

p.name = "Raj";

console.log(p.name);