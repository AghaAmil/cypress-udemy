//conditional statement

// if (condition) {
//   //execute some code here
// } else {
//   //execute some code here
// }

// if hour between 6 and 12 print "Good Morning"
// if hour between 12 and 18 print "Good Afternoon"
// Otherwise: Good Evening

let hour = 5;

if (6 <= hour > 12) {
  console.log("Good Morning");
} else if (12 <= hour > 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

let ageIsMoreThanEighteen = true;
let isUSCitizen = true;

if (ageIsMoreThanEighteen && isUSCitizen) {
  console.log("Person is eligible for US DL");
} else {
  console.log("Person is not eligible for US DL");
}
