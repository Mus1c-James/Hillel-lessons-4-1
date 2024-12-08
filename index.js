const userNameInput = prompt('Your Name');
const userAgeInput = prompt('Enter your Age');
const userAnimals = confirm('Do you have animals');


if (userAgeInput === null || userAgeInput.trim() === "") {
  alert('Error: Age is required');
} else if (isNaN(userAgeInput) || !Number.isInteger(+userAgeInput)) {
  alert('Error: Invalid Age');
} else {
  const age = Math.abs(+userAgeInput); 
  if (age < 16 || age > 110) {
    alert('Error: Age must be between 16 and 110');
  } 
}

if (userAnimals === true) {
   userAnimalInput = prompt('What is the name of your animal?');
}else{
   userAnimalInput = 'No pet';
}
 
console.log(`Name: ${userNameInput}, Age: ${userAgeInput},Confirm Pet? ${userAnimals}, Your animal: ${userAnimalInput}`);


document.getElementById("content").innerHTML =`
<p>Your Name: ${userNameInput}</p>
<p>Your Age: ${userAgeInput}</p>
<p>Your pet: ${userAnimalInput}</p>`;
   