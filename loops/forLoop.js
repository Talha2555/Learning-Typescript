// for loop is a traditional loop in typescript
// for loops takes three statements which is separated by semicolon ";"
// first statement is a initializer like we declare variable let number = 1
// second statement is a stopping condition where we want to stop the loop
// third one is updating condition where we update the condition variable or incremental variable
// the curly braces after the round brackets it is called body of the loop or in programming terms we can say
// it is a block of code this code will run till the condition variable is true
//Example
// for(let i=0;i<=10;i++){
//     console.log("Hello world");//This will print hello world 10 times
// }
// const cities=["KArachi",'lahore','larkana','multan','hyderabad']
// for (let i=0;i<cities.length;i++){
//     console.log(i,"i")
//   console.log(  cities[i],'cities');
//     ;
// }
//practicing sum n numbers
// const sumNnumbers =(num:number)=>{
//     let sum =0
//     for (let i=0;i<=num;i++){
//         sum =sum +i
//     }
//     console.log("total sum is" ,sum);
// }
// sumNnumbers(5)
var table = function (num) {
    for (var i = 1; i <= 10; i++) {
        console.log("".concat(num, " *").concat(i, " = ").concat(num * i));
    }
};
table(6);
