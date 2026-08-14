// Objects
const user={
    name:"Naren",
    age:20,
    city:"chennai"
};
user.college='VSB';
console.log(user.city);
console.log(Object.values(user));
console.log(Object.keys(user));
const {name,age}=user;
console.log({name,age});