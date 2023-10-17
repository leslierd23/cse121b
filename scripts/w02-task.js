/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = `Leslie Labastida`;
let currentYear = new Date().getFullYear();
let profilePicture= `images/profilePicture.jpg`;
//document.querySelector('img').src='images/picture.of.me.jpg';



/* Step 3 - Element Variables */

const nameElement = document.getElementById(`name`);

const foodElement = document.getElementById(`food`);

const yearElement = document.querySelector(`#year`);

const imageElement = document.querySelector(`img`);


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
currentYear.textContent = currentYear;
imageElement.setAttribute(`src`, profilePicture);
imageElement.setAttribute(`alt`, `Profile image of ${fullName}`);





/* Step 5 - Array */

const myFavFood =  [`Tacos`, `spaghetti`, `arroz`,`pozole`, 'tostadas', `charro beans`];
const my2FavFood = [`churros`, `chocoflan`];
myFavFood.push(my2FavFood);
foodElement.innerHTML += `<br>${myFavFood}`;
const removeFirst = myFavFood.shift();
myFavFood.push(my2FavFood);
foodElement.innerHTML += `<br>${myFavFood}`;
myFavFood.pop();
myFavFood.push(my2FavFood);








