function restaurant(food){
  console.log(`The ${food} is ready!`);
}
let food1=restaurant("Biriyani");
console.log(food1);
 
// without return type console.log() is only print the output and execute and debugging the output.
//It doesn't return any value in return type not mentioned so the default return value is rteurn to the program like "Undefined"

function square(n){
    return n*n;
}
let res=square(5);
console.log(res);

// in this statement is return value of that operation so  that res variable store the value then print it.

function add(a,b){
    return;
    console.log(a+b);

}
let ans=add(10,20);
console.log(ans);  //output is undefined

// why means the function is returned before execution of the operation that value should be returned so the function execution stopped.
// after return block the function fully terminated or stopped.


