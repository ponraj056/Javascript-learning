

// async function run(){
//     console.log("Inside");
//     await Promise.resolve();
//     console.log("After await");
// }
// run();
// console.log("End");

// console.log("Start");
// setTimeout(()=>{
//     console.log("Event Task");
// });
// console.log("End");

// console.log("A");
// setTimeout(()=>console.log("B"),0);
// Promise.resolve().then(()=> console.log("C"));
// console.log("D");

/* 
async function test(){
    console.log("Start");
    setTimeout(()=>{
        console.log("Event 3");
    });
    await Promise.resolve();
    console.log("Event 1");
    await Promise.resolve();
    console.log("Event 2");
}
test();                                                //async/await process
console.log("Event end"); */


console.log("A");
setTimeout(()=>console.log("Enevt Start"));            //set time out properties
console.log("B"); 

console.log("Event Start");
setTimeout(()=>console.log("A"),0);

Promise.resolve().then(()=>{
    console.log("B");
    setTimeout(()=>console.log("C"),0);      //resolve pattern
});

console.log("Event End");

console.log("event");
Promise.resolve().then(()=>{
    console.log("A");
    return Promise.resolve("B");
}).then(res=>{
    console.log(res);
});

