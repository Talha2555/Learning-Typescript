//array.splice (start,deleteCount ,item1, item2,...)
//first parameter is start count means the index you want to start
//second parameter is delete count means how many items you want to delete
//third parameter is n number of items you want to add
var fruits1 = ['apple', 'banana', 'orange', 'cherry', 'pomegranate'];
fruits1.splice(1, 0, "watermelon", "strawbery");
console.log("fruits", fruits1);
var cities = ['lahore', 'hyderabad', 'multan', 'peshawar', 'larkana'];
console.log("original array", cities);
cities.splice(3, 2, "Karachi");
console.log("Array after splice", cities);
