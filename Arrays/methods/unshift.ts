// if you want to add data dynamically in an array you can use two methods
//Push: if you want to add data in the end of the array you can use push
//Unshift :if you want to add data in the first you can use unshift
const animalss:string[]=['cat','dog','tiger','elephant','cow']
console.log("original array",animalss);

animalss.unshift("lion","jaguar")//it will push the following two items at the begining of array
console.log("animals",animalss);