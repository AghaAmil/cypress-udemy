// logical "AND"
console.log(true && true); //all values have to be TRUE for expression to be TRUE

// Logical "OR"
console.log(true || true); //any value should be TRUE for the expression to be TRUE

let ageIsMoreThanEighteen = true;
let isUSCitizen = true;

let elighibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen;
console.log(`This customer is eligible for DL: ${elighibilityForDriversLicense}`);

// logical "NOT"
console.log(!true);
console.log(6 !== 10);
