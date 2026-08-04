//const add=()=>{return 10+20};
const mul=(a,b)=>{a*b};// this make undefined but belo line make clear output.
const add=(a,b)=>a+b; 
const div=(a,b)=>{return a/b};
const mod=(a,b)=>{return a%b};
const square=a=>{return a*a};// single value no need for parenthesis.
console.log(mul(10,20));
console.log(div(50,25));
console.log(mod(25,2));
console.log(square(5));
console.log(`Adition of two value is ${add(10,20)}.`);

// before Js ES6 the normal function are used in the lot of places.

//but now the let,const, arrow function are established in 2015 onwards the developers using the arroe function to works the function in react components are stored in the variable.so that variables should be used to store the component for each function.

// arrow function is cleaner syntax and better readability and lexical this then bettr fit with functional programming.
