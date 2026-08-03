const s=3.14;
console.log(s);

//Occurs Error beacuse same variable name but different  type
// const s=50;
// console.log(s);//no redeclare and reassign in scopes

let k="Ponraj";
k="bihar";
console.log(k);//reassgning is possible in scope

var c="Ponraj";
var c=10;
console.log(c); //noe output is 10 out because that should be redeclared for var and reassign in single scope.