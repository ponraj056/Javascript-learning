// function add(){
//     console.log(10+20);
//     return;
// }
// let ans=add();
// console.log(ans);

// 30 , undefined. the function declaration is an fully function.

let ans=add();
console.log(ans);
function add(){
    console.log(10+20);
    return;
}

// that execute the function and call before the function definition.

//function declaration used for utility function.

//Function Expression

//ans1();// function expression throws the type error because it not a fully function it should be a variable.

let ans1=function(){
    console.log(10);
}
ans1();
 
// it not able to use the hoisted and before calls
// it is used for the event handlers,call backs and function assignment side it will be used.

// const app=() =>{
//     return <h1>Hello</h1>
// };

// used why in react means the components are stored in the variable.

