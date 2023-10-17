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

let substract = function (subtract1, subtract2){
    return subtract1 - subtract2;
}

let subtractNumbers = function(){
    let subtractNumber1 = Number(document.querySelector(`#subtract1`).value);
    let subtractNumber2 = Number(document.querySelector(`#bustract2`).value);
    //let subtractNumbers = Number( document.querySelector(`#subtractNumbers`).value);
    document.querySelector(`#subtractNumbers`).value = substract(subtractNumber1, subtractNumber2);
}
    document.querySelector(`#diferrence`).addEventListener(`click`,subtractNumbers);



const multiply = (factor1, factor2) => factor1 * factor2;


const multiplyNumbers = (factor1, factor2)=>{
return factor1*factor2;
}

const product = multiply(2,3);

console.log(product);


function divide(dividend, divisor){
    return dividend / divisor;
}

function divideNumbers(){
    let divideNumber1 = Number(document.querySelector(`#dividend`).value);
    let divideNumber2 = Number(document.querySelector(`#divisor`).value);
    document.querySelector(`#divideNumbers`).value = divide(divideNumber1, dividenumber2);

}

documentquerySelector(`#quotient`).addEventListener(`click`, divideNumbers);