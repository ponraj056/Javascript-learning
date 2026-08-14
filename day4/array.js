let arr=[10,20,30];
arr[10]=100;
console.log(arr);
for (let i = 0; i < arr.length; i++) {   // for loop using to print
    console.log(arr[i]);
}

arr1=[10,20,30,40,50,60];
arr1.forEach((val) => {   // it stores the data from using foreach print
    console.log(val);
});

arr1=[10,20,30,40,50,60];
arr1.forEach((val,index) => {   // it stores the data from using foreach print with tha index also.
    console.log(val,index);
}); 

console.log(arr1.join(' ')); // seperate by space to print

for(let i of arr1){
    console.log(i);   // using for of to print it.
}

arr1.push(50); // insert at the end
console.log(arr1.join(' '));
arr1.pop(); // delet at end

arr1.unshift(5);    // insert at the starting or begin of the array.
console.log(arr1.join(' ')); 

arr1.shift();         // delete at the starting of array.
console.log(arr1.join(' ')); 

// push and pop operation is fast 

// shift and unshift is might slow and then it is re-indexing.

// map transformation

nums=[1,2,3,4];
let res=nums.map(n => n+1);
console.log(res);
console.log(nums);

//filter - selection using some condition
let res1=nums.filter(n => n%2==0);
console.log(res1);

// reduce() - using some operation to perform to provide final result
let res2=nums.reduce((acc,n) => acc+n,0);
console.log(res2);

//acc - accumulator - it stores the result of the previous operation and then it is used in the next operation.
// n - current value of the array
//0- initial value of the accumulator.

//slice() - it is used to extract a portion of an array and return a new array.
let arr2=[1,2,3,4,5];
let res3=arr2.slice(1,4);

//splice() - it is used to add or remove elements from an array.
let arr3=[1,2,3,4,5];
arr3.splice(2,1);
console.log(arr3);  

// deconstructuring - it is used to extract values from an array and assign them to variables.
let arr4=[1,2,3,4,5];
let [a,b,c,d,e]=arr4;
console.log(a,b,c,d,e);


let arr5 = [1, 2, 3];

let res9 = arr5.map(x => {
    if (x > 2) return x;
});

console.log(res9);


let arr6 = [1, 2, 3];

let res8 = arr6.reduce((acc, curr) => {
    acc[curr] = curr * 2;
    return acc;
}, {});

console.log(res8);