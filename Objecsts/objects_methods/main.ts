// This is a simple arrow function we used in typescript
const greet =()=>{
    console.log("Hello Function");
    
}
greet()
const student ={
    name:"talha khan",
     greetings:()=>{
console.log("helo talha ,How are You");

    },
    age:19,
}
 student.greetings()
 console.log(student);
 

 type Fan ={
    greet,
    name:string,
    modelno:number,
    color:string,
    companyName:string,
   
    fanFeatures:{
        electricityConsumption:string,
        volt:number,
        remoteControl:boolean
    }
    warrenty:string
 }
 const fan1:Fan ={
    greet:function(){
       console.log("Hello Everyone we have recived our new shipment of lahore fans with 5 year of warrenty.");
       
    },
    name:"lahore Fan",
    modelno:2019,
    color:"Grey & black",
    companyName:"Lahore Fans Limited",
    fanFeatures:{
        electricityConsumption:"43 watts",
        volt:220,
        remoteControl:true
    },
warrenty:"5 Years motor warranty & 2 years card warranty", 
}
console.log(fan1);
console.log(fan1.greet());
