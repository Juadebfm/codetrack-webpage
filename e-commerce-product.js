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
    stock: 0,
    active: false,
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
    stock: 0,
    active: false,
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
// console.log(products.length);
// // Template Literals
// console.log(
//   `The product is named: ${products[9].name} and the price of the product is: ${products[9].price}`,
// );
// // String Concatenation (Addition of values to string)
// console.log(
//   "The product is named:" +
//     " " +
//     products[9].name +
//     " " +
//     "and the price of the product is:" +
//     " " +
//     products[9].price,
// );

// ForEach which is actually a looping system but currently understood as an array method popular and very common use case in react
// Printing out every value in the array
// products.forEach((product) => {
//   console.log(product);
// });

const newProduct = {
  id: 11,
  name: "Lamp Stand",
  category: "accessories",
  price: 32_000,
  stock: 7,
  active: true,
};

products.push(newProduct);

// // We want to do a particular action to all the elements
// products.forEach((product) => {
//   console.log(`${product.name} - ` + `₦${product.price.toLocaleString()}`);
// });

// Map
// const productNames = products.map((product) => {
//   return product.price * 2;
// });

// filter
// const availableProducts = products.filter((product) => {
//   return !product.active && product.stock === 0;
// });

// Find (locate 1 particular value)
// const selectedProductId = 4;

// const selectedProduct = products.find((product) => {
//   return product.id === selectedProductId;
// });

// console.log(selectedProduct);
