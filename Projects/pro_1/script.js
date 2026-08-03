function calculateAge(){
const dob = document.getElementById("dob").value;
const birthYear = new Date(dob).getFullYear();
const currentYear=new Date().getFullYear();
const age=currentYear-birthYear;
document.getElementById("result").innerText=`Your age is ${age} `;
}