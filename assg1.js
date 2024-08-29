/////Declaring variables and Assigning appropriate values

const Name = "Yogitha";
const Age = 19;
const City = "nellore";
const isStudent = true;
const nullvalue = null;
const undefinedvalue = undefined;
//////Creating variables
const pi = 3.14159;
const greeting = "Hello, world!";
const isSunny = false;
const favoriteNumber = 8;

// Printing the datatype using typeof operator

console.log(typeof Name);           // string
console.log(typeof Age);            // number
console.log(typeof City);           // string
console.log(typeof isStudent);      // boolean
console.log(typeof nullvalue);      // object (quirk in JavaScript)
console.log(typeof undefinedvalue); // undefined
console.log(typeof pi);             // number
console.log(typeof greeting);       // string
console.log(typeof isSunny);        // boolean
console.log(typeof favoriteNumber); // number

let mixedvalue = [Name, Age, isStudent];

console.log(mixedvalue);       // ["Yogitha", 19, true]
console.log(typeof mixedvalue); // object (arrays are objects in JavaScript)

// Arithmetic operations
const value1 = 5;
const value2 = 6;

console.log(value1 + value2);  // 11
console.log(value1 - value2);  // -1
console.log(value1 * value2);  // 30
console.log(value1 / value2);  // 0.8333...
console.log(value1 % value2);  // 5
console.log(value1 ** value2); // 15625

// Comparison operations
console.log(value1 == value2);  // false
console.log(value1 != value2);  // true
console.log(value1 > value2);   // false
console.log(value1 < value2);   // true
console.log(value1 >= value2);  // false
console.log(value1 <= value2);  // true

// Logical operations
const valuep = true;
const valueq = false;

console.log(valuep && valueq); // false
console.log(valuep || valueq); // true
console.log(!valueq);          // true
/////////Ternary operator
let temp = 45; 

let ishot = temp >= 40 ? "hot" : "not too hot";
console.log(ishot);            // hot(Assined value is 45)
/////Additional tasks
///Creating a variable Temperature in Fahrenheit
const TemperatureF=65;
///// converting Temperature into celsius using Formula
const FahrenheitTemp = 75;
console.log(FahrenheitTemp-32)* 5/9.
/////Creating a variable age and assingning a value to it
let Ages = 18; 

// Determine if the person is a minor, adult, or senior citizen
if (Age < 18) {
  console.log("The person is a minor");
} else if (Age === 18) {
  console.log("The person is an adult");
} else {
  console.log("The person is a major");
}