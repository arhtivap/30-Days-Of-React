//This is a JavaScript refresher. 

//Arrays with initial values and using length property to find the length of an array.

//Example 1:
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; //Array of numbers.

//Example 2:
const fruits = ['Banana', 'Orange', 'Mango', 'Lemon']; //Array of strings, fruits.

//Example 3:
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']; //Array of strings, vegetables.

//Example 4:
const animalProducts = ['Milk', 'Meat', 'Butter', 'Yogurt']; //Array of strings, products.

//Example 5:
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB']; //Array of strings, web technologies.

//Example 6:
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']; //Array of strings, countries.

//Printing the arrays and its length.

console.log('Numbers:', numbers);
console.log('Numbers in Length:', numbers.length);

console.log('Fruits:', fruits);
console.log('Fruits in Length:', fruits.length);

console.log('Vegetables:', vegetables);
console.log('Vegetables in Length:', vegetables.length);

console.log('Animal Products:', animalProducts);
console.log('Animal Products in Length:', animalProducts.length);

console.log('Web Technologies:', webTechs);
console.log('Web Technologies in Length:', webTechs.length);

console.log('Countries:', countries);
console.log('Countries in Length:', countries.length);

//An array holding different datatypes.

const arr = ['John Doe', 250, true, {country: 'Finland', city: 'Helsinki'}, {skills: ['HTML', 'CSS', 'JS', 'React', 'Python']},];

//Printing the arr.

console.log('Array with different datatypes: ', arr);

//Using array split method.

//Example 1:
let js = 'JavaScript';
const charsInJavaScript = js.split('');

//Example 2:
let companiesName = 'Facebook, Google, Microsoft, Apple, Amazon';
const companies = companiesName.split(',');

//Example 3:
let text = 'I love to learn new things. I learned HTML, CSS, JS, React all by myself.'
const splitTheText = text.split(' ');

//Printing the arrays 
console.log(charsInJavaScript);

console.log(companies);

console.log(splitTheText);

//Accessing arrays using index.

const cities = ['Toronto', 'Ottawa', 'Mississauga', 'Hamilton', 'Kitchener'];

//Declaring the indexes for the above array.
let firstCity = cities[0];

let lastCity = cities[4];

let lastIndexCity = cities.length - 1;

lastCity = cities[lastIndexCity];

//Printing the arrays for the above indexes.

console.log(firstCity);

console.log(lastCity);

//Modifying array elements using index.

//Example 1:

const number = [1, 2, 3, 4, 5];
number[2] = 6;
number[4] = 10;

//Example 2:

const alphabets = ['a', 'b', 'c', 'd', 'e'];
alphabets[2] = 'f';
alphabets[4] = 'g';

//Printing those modified arrays.

console.log(number);
console.log(alphabets);

//Array methods.

const array = Array(); //Creates a new array.
console.log(array);

const fiveFooValues = Array(5).fill('Foo'); //Fills the array with some static values.
console.log(fiveFooValues);

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const thirdArray = firstArray.concat(secondArray); //Concatenates both arrays and gives a new array.
console.log(thirdArray);

const person = ['John', 'Jane', 'Jill', 'Jack'];
console.log(person.length); //Returns the size of the array.

const newArray = ['Large', 'Medium', 'Small'];
console.log(newArray.indexOf('Small')); //Returns the index of the element in the array.

const myArray = [1, 2, 3, 4, 5, 6, 7];
const myArray1 = [1, 2, 3];
console.log(myArray.includes(5)); //It checks whether the given item is present or not and gives the value true or false.
console.log(myArray1.includes(8));

const Array1 = [1, 2, 3, 4];
const Array2 = 100;
console.log(Array.isArray(Array1)); //It returns true if the given array is a array, otherwise it returns false.
console.log(Array.isArray(Array2));

const nameList = ['John', 'Jack', 'Jill'];
console.log(nameList.toString()); //It converts the array to string.




