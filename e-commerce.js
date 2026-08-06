// Example of how data shows from an api (BE)
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log("Data from JSON Placeholder BE", data))
//   .then((error) => console.log(error));

// Array discussion
// const arr = ["juadeb", { id: "01" }, 1, true, [1, 2]];

// 2 important concepts
// a. How to know, count or take note of the items in an Array and the position of the item(s)
// -  Counting how many items/values are in that array
// ***** console.log("the length of the array is:", arr.length);
// - Printing out 1 item from this list(arr), i.e from the position of the particular item, math: length(n) - 1 is how we calculate the position of that item
// ***** console.log("The last item in the 'arr' array is:", arr[0]);
// b. How to add, remove or delete items in an array
// - pop, push, unshift and shift,
// if i want to add a value to the array (arr) above
// ***** console.log(arr.push("New Value")); // push adds value from the last item
// ***** console.log(arr);
// ***** console.log(arr.pop()); // pop removes value from the last item
// ***** console.log(arr);
// ***** console.log(arr.unshift("New First Value")); // unshift adds value before the first item
// ***** console.log(arr);
// ***** console.log(arr.length);
// ***** console.log(arr.shift()); // unshift adds value before the first item
// ***** console.log(arr);

// Simulate users and users data
const users = [
  {
    id: "user_001",
    name: "Juadeb Gabriel",
    role: "admin",
    emailVerified: true,
    accountStatus: "active",
  },
  {
    id: "user_002",
    name: "Adaeze Okafor",
    role: "user",
    emailVerified: true,
    accountStatus: "active",
  },
  {
    id: "user_003",
    name: "Tunde Balogun",
    role: "moderator",
    emailVerified: false,
    accountStatus: "pending",
  },
  {
    id: "user_004",
    name: "Fatima Bello",
    role: "user",
    emailVerified: true,
    accountStatus: "active",
  },
  {
    id: "user_005",
    name: "Chinedu Eze",
    role: "user",
    emailVerified: false,
    accountStatus: "suspended",
  },
  {
    id: "user_006",
    name: "Ibrahim Musa",
    role: "admin",
    emailVerified: true,
    accountStatus: "active",
  },
  {
    id: "user_007",
    name: "Kemi Ogunleye",
    role: "user",
    emailVerified: true,
    accountStatus: "inactive",
  },
  {
    id: "user_008",
    name: "Sadiq Abdullahi",
    role: "moderator",
    emailVerified: false,
    accountStatus: "pending",
  },
  {
    id: "user_009",
    name: "Ngozi Nwankwo",
    role: "user",
    emailVerified: true,
    accountStatus: "active",
  },
  {
    id: "user_010",
    name: "Samuel Olatunji",
    role: "user",
    emailVerified: false,
    accountStatus: "suspended",
  },
];

users.push(
  {
    id: "user_011",
    name: "Zainab",
    role: "manager",
    emailVerified: true,
    accountStatus: "suspended",
  },
  {
    id: "user_012",
    name: "Chidi Emma",
    role: "customer",
    emailVerified: true,
    accountStatus: "inactive",
  },
);

const currentUser = users[1];

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "computers",
    price: 850_000,
    stock: 12,
    active: true,
  },
  {
    id: 2,
    name: "Smartphone",
    category: "electronics",
    price: 450_000,
    stock: 25,
    active: true,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "accessories",
    price: 120_000,
    stock: 40,
    active: true,
  },
  {
    id: 4,
    name: "Office Chair",
    category: "furniture",
    price: 200_000,
    stock: 8,
    active: true,
  },
  {
    id: 5,
    name: "Gaming Console",
    category: "gaming",
    price: 600_000,
    stock: 15,
    active: true,
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "electronics",
    price: 95_000,
    stock: 30,
    active: true,
  },
  {
    id: 7,
    name: "Smart Watch",
    category: "wearables",
    price: 180_000,
    stock: 20,
    active: true,
  },
  {
    id: 8,
    name: "External Hard Drive",
    category: "computers",
    price: 75_000,
    stock: 18,
    active: true,
  },
  {
    id: 9,
    name: "Tablet",
    category: "electronics",
    price: 320_000,
    stock: 10,
    active: false,
  },
  {
    id: 10,
    name: "Mechanical Keyboard",
    category: "accessories",
    price: 65_000,
    stock: 22,
    active: true,
  },
];

// Real life use case of if/else statements
// Dashboard with users (access) and products values
// Before opening the dashboard to anyone, we verify if the person should have access, account status, role (RBAC)

//   {
//     id: "user_002",
//     name: "Adaeze Okafor",
//     role: "user",
//     emailVerified: true,
//     accountStatus: "active",
//   },

// Conditional - truthy / falsey - if/else
if (!currentUser.emailVerified) {
  console.log("Verify Your email");
} else if (currentUser.accountStatus !== "active") {
  console.log("Account cannot access this dashboard");
} else if (currentUser.role === "admin" || currentUser.role === "manager") {
  console.log("Access Granted");
} else {
  console.log("User Access Denied");
}

// Switch
if (!currentUser.emailVerified) {
  console.log("Verify Your email");
} else if (currentUser.accountStatus !== "active") {
  console.log("Account cannot access this dashboard");
} else {
  switch (currentUser.role) {
    case "admin":
      console.log("Open admin dahsboard");
      break;
    case "manager":
      console.log("Open manager dahsboard");
      break;
    case "user":
      console.log("Open normal customer dahsboard");
      break;
    default:
      console.log("Role Not Recognized");
  }
}

//   {
//     id: "user_002",
//     name: "Adaeze Okafor",
//     role: "user",
//     emailVerified: true,
//     accountStatus: "active",
//   },

// Function in real

//   {
//     id: "user_002",
//     name: "Adaeze Okafor",
//     role: "user",
//     emailVerified: true,
//     accountStatus: "active",
//   },

//   {
//     id: "user_001",
//     name: "Juadeb Gabriel",
//     role: "admin",
//     emailVerified: true,
//     accountStatus: "active",
//   },

function canAccessDashboard(user) {
  // user.emailVerified === false
  if (!user.emailVerified) {
    return false;
  }

  if (user.accountStatus !== "active") {
    return false;
  }

  return user.role === "admin" || user.role === "manager";
}
const adaCanAccess = canAccessDashboard(users[1]); // false
const juadCanAccess = canAccessDashboard(users[0]);

//  {
//     id: "user_010",
//     name: "Samuel Olatunji",
//     role: "user",
//     emailVerified: false,
//     accountStatus: "suspended",
//   },

const lastCanAccess = canAccessDashboard(users[11]);
console.log(lastCanAccess);
console.log("function response:", adaCanAccess, juadCanAccess);
