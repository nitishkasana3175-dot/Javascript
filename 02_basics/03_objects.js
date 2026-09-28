const mysym=Symbol("key1")
const jsuser={
    name:"nitish",
    "full name":"nitish kasana",
    [mysym]:"mykey1",
    age:18,
    location:"gzb",
    email:"nitish@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]
}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);
jsuser.email="nitish@chatgpt.com"
//Object.freeze(jsuser)
jsuser.email="nitish@microsoft.com"
console.log(jsuser["email"]);
//now lets make the function in the js
jsuser.greeting=function(){
    console.log("hello js user");
    
}
jsuser.greetingTWO=function(){
    console.log(`hello js user,${this.name}`);
    
jsuser.greeting();
jsuser.greetingTWO();

}
