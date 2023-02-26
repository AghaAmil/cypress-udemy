// Concatination and Interpolation
let price = 80;
let itemName = "book";
let messageToPrint = "The price for your cup is 50 dollars";

console.log(messageToPrint);

//concatinatin
messageToPrint = "The price for your "+itemName+" is "+price+" dollars";
console.log(messageToPrint);

//Interpolation
messageToPrint = `The price for your ${itemName} is ${price} dollars`;
console.log(messageToPrint);
