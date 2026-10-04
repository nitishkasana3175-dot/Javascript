function sayMyName() {
    console.log("N");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("S");
    console.log("H"); 
}
//sayMyName()
// function addTwoNumbers(number1,number2)
// {
//     console.log(number1+number2);
    
// }
// //This only tells JavaScript:

// "Whenever addTwoNumbers() is called, add the two numbers."

// It doesn't actually run yet.
function addTwoNumbers(number1,number2)
{
    let result=number1+number2
    // return result
    return number1+number2
}
addTwoNumbers(2,3);
console.log(addTwoNumbers(2, 3));
function loginusermeassage(username="sam")
{
    if(!username)
    {
        console.log("please enter a username");
        return  
    }
    return `${username} just logged in`
}
    console.log(loginusermeassage("nitish"));
    console.log(loginusermeassage("nitish"));