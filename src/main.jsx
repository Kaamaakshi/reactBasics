// import React from "react";
// import ReactDOM from "react-dom/client";

// const myFirstElement = <h1>This is my first element</h1>;

// ReactDOM.createRoot(document.getElementById("root")).render(myFirstElement);

//var , let & const

function myFunction() {
  for (let i = 0; i < 2; i++) {
    console.log(i);
  }

  //   console.log("otside function " + i);
}

myFunction();

//arrow function

const greet = (lang) => console.log("welcome to  " + lang);

greet("REACT");

const user = {
  name: "yamini",
  email: "yamini@gmail.com",
};

console.log(user.name);
console.log(user["email"]);

//object destructuring

const users = {
  name: "yamini",
  email: "yamini@gmail.com",
  edu: "MCA",
};

// const name = users.name;
// const email = users.email;
// const edu = users.edu;

const { name: username, email, edu } = users;
console.log(username + " " + email + " " + edu);

//map methods

const products = ["product1", "product2", "prouct3"];

const displayItems = products.map(
  (product) =>
    // "<li>" + product + "</li>");
    `<li>${product}</li>`
);

console.log(displayItems);

// filter methods

const ages = [22, 45, 12, 10, 34, 50];
console.log(ages);

const adults = ages.filter((age) => {
  return age !== 45;
});
console.log(adults);

//spread operator

const arr1 = [1, 2, 3, 4];
const arr2 = [7, 8, 9];
const numbers = [0, ...arr1, 5, 6, ...arr2];
console.log(numbers);

const obj1 = {
  name: "yamini",
};
const obj2 = {
  email: "yamini@gmail.com",
  hobby: ["reading books", "sleping"],
};

// console.log([...obj1, ...obj2]);
const objs = { ...obj1, ...obj2, edu: "MCA" };
console.log(objs);

//ternry operator

let marks = 25;
marks = 40;
const res = marks > 35 ? "pass" : "fail";
console.log(res);

import feed, { another } from "./feed";
feed();
another();
