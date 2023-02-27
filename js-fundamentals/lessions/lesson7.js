// loops

console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");

//for loop (for i loop)

// for(statement1; statement2; statement3){
//     // code execution
// }

for (let i = 0; i < 5; i++) {
  console.log(`This is a loop ${i}`);
}

let cars = ["Volvo", "Toyota", "Tesla", "Mercedes-Benz", "BWM", "Audi"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// for of loop
for (let car of cars) {
  console.log(car);
  if (car == "Tesla") {
    break;
  }
}

// ES6 syntax for each loop
cars.forEach(car => {
    console.log(car);
})