//setTimeOut method is used to execute a function after a specified number of milliseconds.
console.log("Starting");
setTimeout(() => {
    console.log("task Completed");
},1000);
console.log("Ending");
 
//promise() is used to handle asynchronous operations in JavaScript. It represents a value that may be available now, or in the future, or never.
let res=Promise.resolve("Done").then(()=> {
        console.log("Promise resolved");
    });