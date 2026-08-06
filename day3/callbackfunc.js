function add(a,b,add1){
    return a+b+add1;
}
function myfunc(add1){
    return add1;
}

myfunc(add(1,2,3));

// output is 6 because add1 is 3 and a is 1 and b is 2.