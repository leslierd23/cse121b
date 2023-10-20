/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
/* Function Expression - Subtract Numbers */
/* Arrow Function - Multiply Numbers */
/* Open Function Use - Divide Numbers */
/* Decision Structure */

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
/* Output Odds Only Array */
/* Output Evens Only Array */
/* Output Sum of Org. Array */
/* Output Multiplied by 2 Array */
/* Output Sum of Multiplied by 2 Array */

function add(number1, number2){
   //const sum = number1 + number2
   return number1 + number2;
}

function addNumbers(){ 
let addNumber1 = Number (document.querySelector(`#add1`).value);
let addNumber2 = Number (document.querySelector(`#add2`).value);
document.querySelector(`#sum`).value = add(addNumber1, addNumber2);
}

document.querySelector(`#addNumbers`).addEventListener(`click`, addNumbers);

let subtract = function (subtract1, subtract2){
    return subtract1 - subtract2;
}

const subtractNumbers = function(){
    const subtract1 = Number(document.querySelector(`#subtract1`).value);
    const subtract2 = Number(document.querySelector(`#subtract2`).value);
    //let subtractNumbers = Number( document.querySelector(`#subtractNumbers`).value);
    document.querySelector(`#difference`).value = subtract(subtract1, subtract2);
}
document.querySelector(`#subtractNumbers`).addEventListener(`click`, subtractNumbers);



const multiply = (factor1, factor2) => {return factor1 * factor2;}


const multiplyNumbers = () =>{
    const factor1 = Number(document.querySelector(`#factor1`).value);
    const factor2 = Number(document.querySelector(`#factor2`).value);
document.querySelector(`#product`).value = multiply(factor1, factor2);
}
document.querySelector(`#multiplyNumbers`).addEventListener(`click`, multiplyNumbers);

const divide = (divide1, divide2) => {return divide1/divide2;}
const divideNumbers =function(){
    const dividend = Number(document.querySelector(`#dividend`).value);
    const divisor = Number(document.querySelector(`#divisor`).value);
    document.querySelector(`#quotient`).value = divide(dividend, divisor);
}
document.querySelector(`#divideNumbers`).addEventListener(`click`, divideNumbers);

const date = new Date();
let year;
year = date.getFullYear();
document.querySelector(`#year`).append(year);

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector(`#array`).append(array);
document.querySelector(`#odds`).append(array.filter(number=> number % 2 != 0));
document.querySelector(`#evens`).innerHTML = numbersArray.filter(number => number % 2===0);
document.querySelector(`#sumOfArray`).append(array.reduce((sum, number)=> sum + number));
document.querySelector(`#multiplied`).append(array.map((number)=> number*2));
document.querySelector(`#sumOfMultiplied`).append(array.map((number)=> number*2).reduce((sum,number)=> sum+number));