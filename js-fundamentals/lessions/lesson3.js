//objects
let customer = {
  firstName: "John",
  lastName: "Smith",
  customerCars: ["Volvo", "BMW", "Mercedes-Benz"],
};

console.log(customer);
console.log(customer.firstName);
console.log(customer["lastName"]);
console.log(customer.customerCars[2]);

customer.firstName = "Mike";
customer["lastName"] = "Silver";

console.log(customer);

//arrays
let cars = ["Volvo", "Toyota", "Tesla"];

console.log(cars[0]);
console.log(cars[2]);

cars[1] = "BMW";
console.log(cars);
