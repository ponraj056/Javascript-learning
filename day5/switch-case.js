// switch statement - evaluate an expression and executes a specific block of code that matches the evaluation result.

console.log("Switch statement");
 let op='+';

 let a1=1, b1=5;

 switch(op){
    case '+':
        console.log(a1+b1);
        break;
    case '-':
        console.log(a1-b1);
        break;
    case '*':
        console.log(a1*b1);
        break;
    default:
        console.log("Invalid operation");
        break;
 }

 // User defined input

 const prompt=require("prompt-sync") ();
 let age=prompt("Enter the age");
 console.log(age);
 console.log(typeof age);
 age=Number(age);
 console.log(typeof age);
 console.log(age);