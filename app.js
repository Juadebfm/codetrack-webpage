// // console.log("Browser Console Check");

// // // Document Object Model - DOM
// // // Every element in HTML is an object
// // // body element/tag ----> "document"
// // // query selector helps to pick a lot at once
// // const headingOfPage = document.querySelector("h1");

// // // // Manipulated the object key called "textContent"
// // headingOfPage.textContent = "I Love Javascript";
// // console.dir(headingOfPage);
// // console.log(headingOfPage.textContent);

// // const heroPrimaryButton = document.getElementById("hero_pri");
// // heroPrimaryButton.textContent = "Ten Ten naira";
// // heroPrimaryButton.style.backgroundColor = "red";

// // console.dir(heroPrimaryButton);

// // // When you have a lot of things you want to change all at once
// // const allPtags = document.querySelectorAll("p"); // returns an array

// // allPtags.forEach((ptag) => {
// //   ptag.textContent = "Na me dey run am";
// //   console.log((ptag.textContent = "Na me dey run am"));
// // });
// // console.log(allPtags);

// // event driven manipulation
// const heroPrimaryButton = document.getElementById("hero_pri");
// const mainTitleOfThePage = document.getElementById("mainTitle");
// const heroImage = document.getElementById("heroImg");

// heroPrimaryButton.addEventListener("click", () => {
//   // Button that we clicked itself
//   heroPrimaryButton.textContent = "I have just been clicked";
//   heroPrimaryButton.style.backgroundColor = "red";
//   heroPrimaryButton.style.color = "brown";

//   // another element i.e the h1 on the page and this is also automatically manipulated immediately the user performs the action/event i.e "clicking"
//   mainTitleOfThePage.textContent = "I love javascript";

//   heroImage.style.display = "none";

//   // Alert the user
//   alert("Something has changed check the page");
// });
