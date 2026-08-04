function demo(x = 100) {
    console.log(x);
}
demo();

// wihtout mention value the argument that time the js take to the default value insted of undefined.

function add(a=10,b=20){
    return a+b;
}
console.log(add(undefined,30)); // output should be 40 beacause a is undefined so, a=10 is default value taken to calculated.

function add1(a=10,b=20){
    return a+b;
}
console.log(add1(null,20));

// in javascript null value not replacable.

const val=(a=10)=>{a*a};
console.log(val(20)); // not support for arrow function

function add2(a=10){
    console.log(a);
}
add2(null); // null value not replaceable in this language(JS).


