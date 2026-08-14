//Entry control loop
let num=1;
while(num<=10){
    console.log(num);
    num+=2;
}

//do-while is the exit control lopp it is execute atleast one time.

console.log("do-while statement");
let b=1;
do{
    console.log(b);
    b+=3;
}while(b<=10);

// for-loop is known iteration that should used on the avoid infinite loop

console.log("for-loop statement");
let sum=0;
for(let i=1;i<10;i+=2){
   sum+=i;
}
console.log(sum);

// jump statement

// break statement - the condition is statisfied immedietly the loop ends.
console.log("Break statement");
for(let i=0;i<10;i++){
    if(i===2){
        break;
    }
    console.log(i);
}

// continue statement - this statement is used for skip the value that particular statement is true only that can be skipped.
console.log("Continue statement");
for(let i=0;i<10;i++){
    if(i==5) continue;
    console.log(i);
}

