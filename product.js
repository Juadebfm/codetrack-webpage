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
const loginWithFetch = async (credentials) => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...credentials, // username and password
      expiresInMins: 30,
    }),
    credentials: "include",
  });
  // If the data actually comes very well this is skipped
  if (!response.ok) {
    throw new Error("Invalid Login");
  }
  // Get info
  const data = await response.json(); //Fullname, add, gender, dob, auth key/token

  return data;
};

// // Axios
// const loginWithAxios = async (credentials) => {
//   const response = await axios.post(
//     "https://dummyjson.com/auth/login",
//     {
//       ...credentials,
//       expiresInMins: 30,
//     },
//     { withCredentials: true },
//   );

//   return response.data;
// };

// To confirm the user and prints the info
const getAuthUserWithFetch = async (accessToken) => {
  const response = await fetch("https://dummyjson.com/auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Invalid Login");
  }

  return await response.json();
};
// // To confirm the user and prints the info : axios
// const getAuthUserWithAxios = async (accessToken) => {
//   const response = await axios("https://dummyjson.com/auth/me", {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//     withCredentials: true,
//   });

//   return response.data;
// };

// Render user profile
const renderProfile = (user) => {
  profile.innerHTML = `
  <img src="${user.image}" width="80" alt="${user.firstname}"/>
  <h2>${user.firstname} ${user.lastName}</h2>
  <p>${user.email}</p>
  `;
};

// actual login trigger
const handleLogin = async (event) => {
  event.preventDefault();

  if (!validateLogin()) {
    return; // intentionally breaking the code
  }

  const credentials = {
    username: usernameInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  loginStatus.textContent = "Logging in ....";

  try {
    const loginData = await loginWithFetch(credentials);
    const user = await getAuthUserWithFetch(loginData.accessToken);

    renderProfile(user);
    saveSession(loginData.accessToken, user);

    loginSection.hidden = true;
    dashboard.hidden = false;

    await loadProducts();
  } catch (error) {
    loginStatus.textContent = "Login Failed";
  }
};
