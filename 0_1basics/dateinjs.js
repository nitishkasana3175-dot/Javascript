//dates
let myDate= new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let mycreateddate=new Date(2023,0,23)
// // let mycreateddate=new Date(2023,0,23,5,3)
// let mycreateddate=new Date("2023-01-14")
let mycreateddate=new Date("01-14-2023")
console.log(mycreateddate.toLocaleDateString());

let mytimestamp=Date.now()
console.log(mytimestamp);
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));
let newdate=new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());
//`${newDate.getDay()} and the time`
newdate.toLocaleDateString('default',{weekday:"long"})





