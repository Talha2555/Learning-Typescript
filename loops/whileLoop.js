// ile loop is same as forloop it do same things what for loop does but the syntax is different
//syntex
//  for( i=0 ;i<=10;i++)
// let i=0 
// while(i<=10){
//     i++
// }
//simple example
// let i=0 
// while(i<=10){
//     console.log(i);
//     i++
// }
var c = 0;
var cities = ["karachi", 'faislabad', 'sukker'];
while (c < cities.length) {
    console.log(c);
    console.log(cities[c]);
    c++;
}
var sumOfN = function (num) {
    var totalSum = 0;
    var s = 0;
    while (s <= num) {
        totalSum = totalSum + s;
        s++;
    }
    console.log(totalSum, "total sum");
};
sumOfN(3);
