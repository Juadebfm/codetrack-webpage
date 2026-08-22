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
const logoutButton = document.getElementById("logoutButton");

// ----
const productStatus = document.querySelector("#productStatus");
const productContainer = document.querySelector("#productContainer");
const productForm = document.querySelector("#productForm");
const productTitle = document.querySelector("#productTitle");
const productPrice = document.querySelector("#productPrice");
const productFormStatus = document.querySelector("#productFormStatus");
const products = document.getElementById("products");

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
    passwordError.classList.add("passwordError");

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

// To get the user details and prints the info
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
  <h2>${user.firstName} ${user.lastName}</h2>
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
    saveSession(loginData.accessToken, user); // to be created

    loginSection.hidden = true;
    dashboard.hidden = false;

    await loadProducts(); // to be created
  } catch (error) {
    loginStatus.textContent = "Login Failed";
  }
};

// Save session so that the user information persists on the page
const saveSession = (accessToken, user) => {
  const session = {
    accessToken,
    ...user,
  };

  localStorage.setItem("productPracticeSession", JSON.stringify(session));
};

// Restore
const restoreSession = async () => {
  const savedSession = localStorage.getItem("productPracticeSession");

  if (!savedSession) {
    return;
  }

  try {
    const session = JSON.parse(savedSession);
    const { accessToken, ...user } = session;

    if (!accessToken) {
      return;
    }

    renderProfile(user);
    loginSection.hidden = true;
    dashboard.hidden = false;

    await loadProducts();
  } catch (error) {
    localStorage.removeItem("productPracticeSession");
    console.log(error);
  }
};

// Render products
const renderProducts = (productsToRender) => {
  products.innerHTML = productsToRender
    .map(({ title, price, category, rating, thumbnail }) => {
      return `
      <div class="product-card">
          <p>${category || "New Product"}</p>
          <img src=${thumbnail} alt={${title} class="product-img"/>
          <h3>${title}</h3>
          <strong>$${price}</strong>
          <!--<span>${rating}</span>-->
      </div>
    `;
    })
    .join(""); // lacram lapour
};

// Load products
const loadProducts = async () => {
  productStatus.textContent = "Loading Products ...";

  try {
    const response = await fetch(
      "https://dummyjson.com/products?limit=6&select=title,price,category,rating,thumbnail",
    );

    if (!response.ok) {
      throw new Error("Products could not be loaded");
    }

    const { products: apiProducts } = await response.json();

    allProducts = apiProducts;

    renderProducts(allProducts);

    productStatus.textContent = `${allProducts.length} products loaded`;
  } catch (error) {
    productStatus.textContent = `Products could not be loaded`;
    console.log(error);
  }
};

// Search bar -- add debouncing
const handleSearch = (event) => {
  event.preventDefault();

  const searchValue = searchInput.value.trim().toLowerCase();
  const filteredProduct = allProducts.filter(({ title }) =>
    title.toLowerCase().includes(searchValue),
  );

  renderProducts(filteredProduct);
  productStatus.textContent = `${filteredProduct.length} products found`;
};

// adding products
const handleAddProduct = async (event) => {
  event.preventDefault();

  const title = productTitle.value.trim();
  const price = productPrice.value.trim();

  if (!title || !price) {
    productFormStatus.textContent = "Enter a product name and price";
    return;
  }

  productFormStatus.textContent = "Adding product ......";

  try {
    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price }),
    });

    if (!response.ok) {
      throw new Error("Product could not be added");
    }

    const newProduct = await response.json();

    allProducts = [newProduct, ...allProducts];

    renderProducts(allProducts);

    productForm.reset();

    productFormStatus.textContent = "Product added successfully";
  } catch (error) {
    productFormStatus.textContent = "Product could not be added";
    console.log(error);
  }
};

// handle logout
const handleLogout = () => {
  localStorage.removeItem("productPracticeSession");

  loginForm.reset();

  usernameError.textContent = "";
  passwordError.textContent = "";
  loginStatus.textContent = "";
  productStatus.textContent = "";
  productFormStatus.textContent = "";
  products.innerHTML = "";

  dashboard.hidden = true;
  loginSection.hidden = false;
};

// call some of this big function
loginForm.addEventListener("submit", handleLogin);
searchForm.addEventListener("submit", handleSearch);
productForm.addEventListener("submit", handleAddProduct);
logoutButton.addEventListener("click", handleLogout);

// Persist session
restoreSession();
