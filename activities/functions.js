let firstName = `Antonia`;
let lastName = `Francesca`;

//Write a function declaration / definition named fullName that has two parameters named first and last. The function's purpose is to combine those two string parameters together to return one combined string (a 'full' name) with a space between the first and last variables.

function fullName(first ,last) {
    return `${first} ${last}`;
}

//Now use an anonymous function expression to do the same thing where the function is assigned to a variable named fullName.
const fullName = function (first, last){
    return `${first} ${last}`;
}

//Now use an arrow function expression to do the same thing where the function is assigned to a variable named fullName.

const fullName = (first, last) => `${firstName} ${lastName}`;

//Write an expression that calls the fullName function declaration and writes the result to an existing HTML element's text node with the ID of fullName

document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);

//Using the array.filter() method, create an array named namesB with only those names from the name array that start with the character 'B'.
Array.filter()

let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter(name=> name.charAt (0)=== `B`);

//Using the array.map() method, create a new array named namesLength that contains the length of each name in the names array. Expected output is [5, 8, 5, 8, 3].
let namesLength = names.map((name) => name.lenght);


//Using the names.reduce() method, create an expression that returns the average string length of the names in the names array. Expected output is 5.8
names.reduce((total, name)=> total + name.lenght, 0) / names.length;