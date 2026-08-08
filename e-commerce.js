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

const currentUser = users[2];



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
// if (!currentUser.emailVerified) {
//   console.log("Verify Your email");
// } else if (currentUser.accountStatus !== "active") {
//   console.log("Account cannot access this dashboard");
// } else if (currentUser.role === "admin" || currentUser.role === "manager") {
//   console.log("Access Granted");
// } else {
//   console.log("User Access Denied");
// }

// Switch
// if (!currentUser.emailVerified) {
//   console.log("Verify Your email");
// } else if (currentUser.accountStatus !== "active") {
//   console.log("Account cannot access this dashboard");
// } else {
//   switch (currentUser.role) {
//     case "admin":
//       console.log("Open admin dahsboard");
//       break;
//     case "manager":
//       console.log("Open manager dahsboard");
//       break;
//     case "user":
//       console.log("Open normal customer dahsboard");
//       break;
//     default:
//       console.log("Role Not Recognized");
//   }
// }

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

//  {
//     id: "user_010",
//     name: "Samuel Olatunji",
//     role: "user",
//     emailVerified: false,
//     accountStatus: "suspended",
//   },

// Build a readble access message
// Instead of if else statement we have another way of writing conditionals (not switch) called "ternary operators"

//  {
//     id: "user_010",
//     name: "Samuel Olatunji",
//     role: "user",
//     emailVerified: true,
//     accountStatus: "suspended",
//   },

// function canAccessDashboard(user) {
//   // user.emailVerified === false
//   if (!user.emailVerified) {
//     return false;
//   }

//   if (user.accountStatus !== "active") {
//     return false;
//   }

//   return user.role === "admin" || user.role === "manager";
// }

// const accessResult = canAccessDashboard(currentUser)
//   ? "Access Granted"
//   : "Access Denied";

// Ternary Operator - conditional statments

// const accessMessage = `${currentUser.name}: ${accessResult}`;

// console.log(accessMessage);



