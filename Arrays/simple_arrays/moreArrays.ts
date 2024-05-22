//Assign type into an array
//-----Example1 -----//
let studentNames1 :string[]=[
    "Talha khan",
    "Mubeen khan",
    "Ali haider",
    "Sana Junejo",
]
//if we assign number into string array it will thrown an error
console.log("studentsNames",studentNames1);

//-----Example 2 --------//
const numbers:number[]=[1,3,5,6,7,7]
//similarly if we will assign string into numbers arrays it will thrown an error
console.log("numbers",numbers);

//----Example 3 -------//
const mixedArrays:(string|number)[]=[
1,
2,
5,
"Apples",
"Mango",
"banana",
]
console.log("mixed Arrays",mixedArrays);

