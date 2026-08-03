console.log(a);
var a=10;  // undefined because of hoisting concept. var a is hoisted to top but not the value. so it will be undefined.

let b=a+10;
console.log(b); // 20 because b is assigned after a is declared and assigned value.
console.log(c);
let c=20; // ReferenceError: Cannot access 'c' before initialization because let and const are not hoisted like var. They are in temporal dead zone until they are declared.

//same like const also will give ReferenceError if accessed before initialization.