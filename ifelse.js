// const score = prompt();

// // Conditional logic
// if (score > 70) {
//   console.log("Excellent");
// } else if (score === 70) {
//   console.log("Very Good");
// } else {
//   console.log("Try Again");
// }

// switch
const status = "refund";

switch (status) {
  case "paid":
    console.log("Show Your Reciept");
    break;
  case "refund":
    console.log("Please Visit Your Branch, There has been an issue");
    break;
  default:
    console.log("Check Status, Because we are not sure");
}
