// LOGICAL
// AND && - LOGICAL OPERATOR
// ******************************************
// LEFT           RIGHT           RESULT
// true.          false.          false
// false.         true.           false
// false.         false.          false
// true.          true.           true
// *****************************************

// OR - LOGICAL OPERATOR
// ******************************************
// LEFT           RIGHT           RESULT
// true.          false.          true
// false.         true.           true
// true.          true.           true
// false.         false.          false
// *****************************************

const a = true;
const b = false;
const c = true;

const resultAND = a && b && c; // false
const resultOR = a || b || c; // true

const negOR = !resultOR;
const negAND = !resultAND;

// Real life
const total = 5000 * 2; // true
const ageOfBuyer = 17;

// Gate: buyer must be at least 21
const isAdult = ageOfBuyer >= 21; // false

const canBuy = total || isAdult;

console.log(canBuy); // true
