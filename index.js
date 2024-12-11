"use strict";

let userNameInput = prompt("Your Name:");

if (userNameInput === null || !userNameInput.trim()) {
  userNameInput = '[noname]';
} 
  
alert(`Hello, ${userNameInput}! How are you?`); 