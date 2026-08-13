const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#usernameInput");
const passwordInput = document.querySelector("#passwordInput");
const usernameError = document.querySelector("#usernameError");
const passwordError = document.querySelector("#passwordError");
const loginStatus = document.querySelector("#loginStatus");
const loginSection = document.querySelector("#loginSection");
const dashboard = document.querySelector("#dashboard");
const profile = document.querySelector("#profile");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");

// ----
const productStatus = document.querySelector("#productStatus");
const productContainer = document.querySelector("#productContainer");
const productForm = document.querySelector("#productForm");
const productTitle = document.querySelector("#productTitle");
const productPrice = document.querySelector("#productPrice");
const productFormStatus = document.querySelector("#productFormStatus");

let allProducts = [];

// form validation
const validateLogin = () => {
  // Condition Checker
  let isValid = true;

  // Set Username Error to empty string
  usernameError.textContent = "";
  passwordError.textContent = "";

  // We now collect the inputs (username and password) from the users
  // value is the key that allows us to collect the actual written input of the user and trim helps us to cut off white spaces
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Conditions 1 - if the username has empty value at submit
  if (!username) {
    usernameError.textContent = "Username is required";

    isValid = false;
  }
  // Conditions 2 - if the password has empty value at submit
  if (!password) {
    passwordError.textContent = "Password is required";

    isValid = false;
  }

  // Condition 3 - password checks for lenght and it's value
  if (password && password.length < 6) {
    passwordError.textContent = "Password is too short";

    isValid = false;
  }

  return isValid;
};

// Fetch the actual data
const loginWithFetch = async (credentials) => {};


// FE(client) <-----> fetch / axios (messenger) <---> BE(server) <-> DB


Promise.reject
Promise.resolve