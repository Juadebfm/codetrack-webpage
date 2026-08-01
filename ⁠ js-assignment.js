// 1. Three Variables
const fullName = "Julius A Adebowale Gabriel";
const age = 36;
const isMentor = true;

console.log(fullName, age, isMentor);

// 2. walletBalance
let walletBalance = 5000;
console.log("Before It changes", walletBalance);
walletBalance = 7500;
console.log("A It changes", walletBalance);

// 3. whole(integer) and float - numbers
const itemsInCart = 3;
const itemPrice = 1999.9;
console.log(itemPrice, itemsInCart);

// 4.
const price = 2500;
const quantity = 4;
const result = price * quantity;
console.log(result);

// 5.
const a = 17;
const b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// 6.
const jerseyPrice = 12000;
const jerseyQty = 3;
const deliveryFee = 2000;
const total = jerseyPrice * jerseyQty + deliveryFee;
console.log(total);

// 7
const studentScore = 68;
const passMark = 50;
console.log(studentScore > passMark);
console.log(studentScore >= 70);

//8
const priceA = 8000;
const priceB = 12000;

console.log(priceA < priceB); //true
console.log(priceA > priceB); //false
console.log(priceA <= priceB); //true
console.log(priceA >= priceB); //false

// 9
const num = 7;
const str = "7";
console.log(typeof num);
console.log(typeof str);
console.log(num === str); //false
console.log(num == str); //true

// 10
console.log(num != str); // negLoose = false
console.log(num !== str); // true

// 12
const isRaining = true;
const isWeekend = false;
console.log(!isRaining); //false
console.log(!isWeekend); // true

// 12
const correctPin = 1234;
const enteredPin = "1234";

console.log("12", correctPin === enteredPin);
