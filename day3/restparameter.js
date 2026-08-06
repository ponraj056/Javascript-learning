function add(a,b, ...c){
    console.log(c);  // remaining value are expanded into an array
    return a + b ;
}
console.log(add(1,2,3,4,5));

// the rest is a function parameter.

function my(...ab,a){
    // this type occurs error because rest parameter must be the last parameter in the function definition.
}