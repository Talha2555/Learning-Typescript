//nested objects
//we can add objects inside another objects .It is called nested objects
type DepartmentInfo ={
    depName:string,
    totalDevelopers:number,
    productsName?:string
}

type Employee ={
  designation:string,
    personelInfo:{
        name:string,
        dateOfBirth:number,
        age:number,
        contactno :number,
        email:string,
       religon:string,
       gender:"male"|"female",

    }
    departmentInfo:DepartmentInfo;
}
const employee:Employee ={
designation:"Softwere Developers",
personelInfo:{
    name:"talha khan",
    dateOfBirth:12-22-33,
    age:19,
    contactno:1997239,
    email:"chcccjj@mail.com",
    religon:"islam",
    gender:"male"
},
departmentInfo:{
depName:"web development",
totalDevelopers:19,

}
}
console.log(employee.personelInfo.name,"employee.personelInfo.name");
console.log(employee.departmentInfo);








type House ={
     houseDetails:{
        houseNo:number,
        houseColor:string,
        streetName:string,
        houseLocation:"corner"|"center",
     }
    location:string,
    town:string,
    city:string

}
const myHouse:House ={
    houseDetails:{
        houseColor:"peach & brown",
        houseLocation:"corner",
        houseNo:1096,
        streetName:"L8 Market"
        
    },
    location:"Johr town",
    town:"BinQasim",
    city:"karachi"
}
console.log(myHouse.houseDetails);
console.log(myHouse.location);

