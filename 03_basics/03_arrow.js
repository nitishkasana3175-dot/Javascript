const user={
    username:"nitish",
    price:999,
    welecomeMessage:function()
    {
        console.log(`${this.username},welcome to the website`);
        console.log(this); 
    }
}
user.welecomeMessage()
user.username="sam"
user.welecomeMessage()
console.log(this);

function chai()
{
    let username="nitish"
    console.log(this.username);
}
// const chai=()=>{
//     let username="nitish"
//     console.log(this.username);
// }
//chai()
// //const addTwo=(num1,num2)=>{
//     return num1+num2
// const addTwo=(num1,num2)=>num1+num2
// cosnt addTwo=(num1,num2)=>(num1+mum2)
// const addTwo=(num1,num2)=>(num1+num2)
// const addTwo=(num1,num2)=>(num1+num2)
const addTwo=(num1,num2)=>({username:"nitish"})
console.log(addTwo(3,4));
const myarray=[2,5,3,7,8]
myArray.forEach()