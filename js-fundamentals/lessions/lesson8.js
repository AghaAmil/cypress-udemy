// declerative fucntion
function helloOne() {
  console.log("Hello One!");
}
helloOne();
helloOne();

// anonymous function
let helloTwo = function () {
  console.log("Hello Two!");
};
helloTwo();

//ES6 function syntax or arrow function
let helloThree = () => {
  console.log("Hello Three!");
};
helloThree();

//function with aguments
let printName = (name, lastname) => {
  console.log(`Welcome to our course, ${name} ${lastname}.`);
};
printName("Amir", "Moravveji");
printName("Mike", "Tyson");

//function with return
let multiplyByTwo = (number) => {
  return (number *= 2);
};
console.log(multiplyByTwo(2));

//import function
import { printAge } from "../external-functions/age-function.js";
printAge(20);

//import everything
import * as externalFunc from "../external-functions/age-function.js";
externalFunc.printTel("+989123004487");
