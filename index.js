/* Q 1. Convert the string "123" to a number and add 7. (0.5 Grade) • Output Example: 130 

let number = "123";
number = Number(number);
number += 7;
console.log(number);


#end   */
/* Q 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade) • Input Example: 0 •  Output Example: "Invalid 

let x = 0;
if (!Boolean(x)) {
  return console.log(`Invalid`);
}


#end   */
/* Q 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade) • Output Example:1, 3, 5, 7, 9 

let result = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    result.push(i);
  }
}
console.log(result);

#end   */
/* Q  4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade) • Input Example: [1, 2, 3, 4, 5]  • Output Example: [2,4] 

const numbers = [1, 2, 3, 4, 5];
const result = numbers.filter((n) => {
  if (n % 2 === 0) {
    return n;
  }
});
console.log(result);

#end   */
/* Q  5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade) • Input Example: [1, 2, 3], [4, 5, 6] • Output Example: [1, 2, 3, 4, 5, 6] 

let arr01 = [1, 2, 3];
let arr02 = [4, 5, 6];
let result = [...arr01, ...arr02];
console.log(result);


#end   */
/**Q 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade) • Input Example: 2  • Output Example: “Monday”
 * 
 * let day = 1;
switch (day) {
  case 1:
    console.log(`Sunday `);
    break;
  case 2:
    console.log(`Monday `);
    break;
  case 3:
    console.log(`Tuesday  `);
    break;
  case 4:
    console.log(`Wednesday`);
    break;
  case 5:
    console.log(`Thursday `);
    break;
  case 7:
    console.log(`Friday `);
    break;
  case 2:
    console.log(`Saturday `);
    break;

  default:
    console.log(`Enter valid day`);

    break;
}

 end */
/**Q 7. Create an array of strings and return their lengths using map method (0.5 Grade) • Input: ["a", "ab", "abc"]  • Output Example: [1, 2, 3] 
 * let chars = ["a", "ab", "abc"];
let result = chars.map((el) => {
  return el.length;
});
console.log(result);

 end */
/**Q 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade) • Input Example: 15 • Output Example: “Divisible by both” 
 * function checkDivisibleNumber(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return console.log(`Divisible by both`);
  }
}
checkDivisibleNumber(15);

 end */

/**Q 9. Write a function using arrow syntax to return the square of a number (0.5 Grade) • Input Example: 5 • Output Example: 25
 * let number = 5;
let result = number ** 2;
console.log({ result });
 * 
 end */

/**Q 10. Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade) • Input Example: const person = {name: 'John', age: 25} • Output Example: 'John is 25 years old' 
 * const person = { name: "John", age: 25 };
let { name, age } = person;
console.log(`${name} is ${age} years old`);

 end */
/**Q 11. Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade) • Input Example: 1, 2, 3, 4, 5 • Output Example: 15 
 * 
function sumNumbers(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumNumbers(1, 2, 3, 4, 5));
 end */
/**Q 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade) • Output Example: “Success”
 * 
 end */
/**Q 13. Write a function to find the largest number in an array. (0.5 Grade) •  Input Example: [1, 3, 7, 2, 4] • Output Example: 7 
 * 
 end */

/**Q 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade) •  Input Example: name: "John", age: 30}  •  Output Example: ["name", "age"]
 * const person = { name: "John", age: 30 };
console.log(Object.keys(person));
 end */

/**Q 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade) • Input: "The quick brown fox" • Output: ["The", "quick", "brown", "fox"] 
 * let statement = `The quick brown fox`;
function words(statement) {
  return statement.split(" ");
}
console.log(words(statement));
 end */

var x = 5;
x = 10;
console.log(x);
