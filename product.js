const container = document.getElementById("container");

console.dir(container);

// We have 2 ways to take data from server and bring it to the Client
// FE sends request and the Backend responds to the request

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Api implementation - frontend and backend extensively
//   JSON vs Object
//   Form Validation
//.  Manipulating the FE with data from the BE
