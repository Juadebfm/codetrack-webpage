const a = 10000;
const b = 50;

function add2Values() {
  console.log(a + b);
}

add2Values();

// resuable
function add2Values(a, b) {
  console.log(a + b);
}

add2Values(100, 100);
add2Values(1000, 100);
add2Values(100, 100);
add2Values(100, 100);
// parameters = placeholders we use after the func name in expectant of value
// arguments = this are actual values we add to the func call (excute, invoke)
// a
function addTwoNumbers(a, b) {
  console.log(a + b);
}

const added = addTwoNumbers(10, 100);
console.log("where", added);

// 10,000
const newValue = added;
console.log("new where", newValue);

// better method - god mode
function add(a, b) {
  return a + b; // sends back the value to the program/code/logic
}

const sum = add(100, 3);
console.log("here", sum);

const newValue2 = sum;
console.log("new here", newValue2);
