// This is a simple arrow function we used in typescript
var greet = function () {
    console.log("Hello Function");
};
greet();
var student = {
    name: "talha khan",
    greetings: function () {
        console.log("helo talha ,How are You");
    },
    age: 19,
};
student.greetings();
console.log(student);
var fan1 = {
    greet: function () {
        console.log("Hello Everyone we have recived our new shipment of lahore fans with 5 year of warrenty.");
    },
    name: "lahore Fan",
    modelno: 2019,
    color: "Grey & black",
    companyName: "Lahore Fans Limited",
    fanFeatures: {
        electricityConsumption: "43 watts",
        volt: 220,
        remoteControl: true
    },
    warrenty: "5 Years motor warranty & 2 years card warranty",
};
console.log(fan1);
console.log(fan1.greet());
