//function expression 
const square = function(num){
    return num * num;
}

// arrow function

const square = (num) => {
    return number * number;
}
// implicit retrn - one liner
const square = num => number * number;

//example-1 callback function 
const nums = [1,2,3,4,5];
nums.forEach(num=> console.log(num *num));
//example-2 map 
const nums = [1,2,3,4,5,6];
const squaerNums = nums.map(num=> num * num);
console.log(squaerNums);//[1,4,9,16,25,36]

//3.find()
const names = ['Leslie', 'Angel', 'Ivanna']
const result = names.find(names=>names.includes('ivanna'))
console.log(result);//'ivanna'

//example 2 find employee who earn more than 20,000
const employees = [
    {
        id: 101,
        name: 'Alex',
        sal: 10000
    },
    {
        id: 102,
        name: 'Clark',
        sal: 23000
    },
    {
        id: 103,
        name: 'John',
        sal: 22000
    },
    {
        id: 104,
        name: 'Tony',
        sal: 20000
    }
];

const emp = employees.find(e.sal>= 2000)
console.log(emp)//


function calculate(a,b, callback) {
    callback (a + b);

}

calculate = (2, 3, displayResult)

function displayResult(result) {
    console.log('The result is: ' + result);
}