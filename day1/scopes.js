//global scope

let n=10;
function add(){
    let b=n+n;
    console.log(b);
}
 add();
console.log(n);

//Function scope

function mul(){
    const a=10;
    const b=20;
    const c=a*b;
    console.log(c);
}
mul();
//console.log(c);//occurs error because c is  defined in function scope

//Block scope

if(n!=null){
    n+=55;
    var name="let";
    console.log(n);
}
//console.log(name);//occurs error because name is defined in block scope
console.log(n);//modified n is possible with in block.but new variable is not possible to access out of block scope.