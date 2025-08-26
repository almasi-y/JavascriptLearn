"use strict";

// Day 31: JS Basics
console.log("JavaScript running!");

// Day 32: Embedding
document.getElementById('btn').onclick = () => alert("Hello!");

// Day 33: Prompt, Alert, Random
// Uncomment to practice:
// let user = prompt("What's your name?");
// alert("Welcome, " + user);
// let rand = Math.floor(Math.random()*10)+1;

// Day 34: Variables, Data Types
let greeting = "Hello";
const pi = 3.14159;
let enabled = true;

// Day 35: Converter
document.getElementById('convertBtn').onclick = () => {
  let miles = Number(document.getElementById('milesInput').value);
  let km = miles * 1.60934;
  document.getElementById('kmOutput').textContent = `${miles} miles = ${km.toFixed(2)} km`;
};

// Day 36: Conditionals
// Already present in converter, see above.

// Day 37: Loops
// See contact list and to-do list below.

// Day 38: Arrays and Objects: Contact List
let contacts = [];
document.getElementById('addContactBtn').onclick = () => {
  let name = document.getElementById('contactName').value;
  let phone = document.getElementById('contactPhone').value;
  contacts.push({name, phone});
  renderContacts();
};
function renderContacts() {
  let ul = document.getElementById('contactList');
  ul.innerHTML = '';
  contacts.forEach(contact => {
    let li = document.createElement('li');
    li.textContent = `${contact.name} (${contact.phone})`;
    ul.appendChild(li);
  });
}

// Day 39: Functions
function sum(a, b) { return a + b; }
const mult = (a, b) => a * b;

// Day 40: Closures
function makeCounter() {
  let count = 0;
  return () => ++count;
}
const counter = makeCounter();

// Day 41-43: DOM Manipulation/Creation: To-Do List
document.getElementById('addBtn').onclick = () => {
  let input = document.getElementById('todoInput');
  let li = document.createElement('li');
  li.textContent = input.value;
  document.getElementById('todo').appendChild(li);
  input.value = '';
  li.onclick = () => li.classList.toggle('active'); // Highlight on click
};

// Day 44: Event Handling: See above.

// Day 45: Mini Project: To-Do List (see above).

// Day 46: JSON & Local Storage: Form
document.getElementById('form').onsubmit = function(e) {
  e.preventDefault();
  let email = this.email.value;
  let password = this.password.value;
  // Day 49: Regex Validation
  let validEmail = /^[\w.-]+@[\w.-]+\.\w+$/.test(email);
  if (!validEmail || password.length < 6) {
    document.getElementById('formOutput').textContent = "Invalid email or password!";
    return;
  }
  // Save to local storage
  localStorage.setItem('user', JSON.stringify({email, password}));
  document.getElementById('formOutput').textContent = "Saved!";
};

// Day 47: Error Handling
try {
  // Simulated error
  // throw new Error("Test error");
} catch (err) {
  console.error("Caught error:", err);
}

// Day 48: Hoisting & Strict Mode (enabled at top)

// Day 50: Review
window.onload = () => {
  let user = localStorage.getItem('user');
  if (user) {
    let obj = JSON.parse(user);
    document.getElementById('formOutput').textContent = "Saved user: " + obj.email;
  }
};