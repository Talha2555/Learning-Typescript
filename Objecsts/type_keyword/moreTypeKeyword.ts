//---------More typeKeyword with optional property and type alias-----------//
type CarData ={
    name:string,
    modelNo:number,
    horsePower:number,
    color:string,
    powerStaring?:boolean,
    carType:"Automatic"|"Manual"//---This is a pipe sign called union operator .Here the user can select only one value.

}
const car1 :CarData ={
    name:"mehran",
    modelNo:2017,
    powerStaring:false,
    color:"blue",
    horsePower:600,
    carType:"Manual",

}
console.log("My old car details",car1);

const car2 :CarData={
    name:"alto",
    modelNo:2022,
    carType:"Automatic",
    horsePower:600,
    color:"white"
}
console.log("My new car details",car2);

