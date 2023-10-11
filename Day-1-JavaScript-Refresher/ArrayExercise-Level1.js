//Task: Remove all the punctuations and change the string to array and count the number of words in the array.
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

const stringWithoutPunctuation = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""); //Removes the punctuations.

const wordArray = stringWithoutPunctuation.split(' '); //Splits the words.
console.log(wordArray);

const numberOfWords = wordArray.length; //Returns the size of the array.
console.log(numberOfWords);

//Shopping cart example to add, remove or edit items.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//Adding 'Meat' in the beginning of the shopping cart.
const newShoppingCartItem = 'Meat';
shoppingCart.unshift(newShoppingCartItem);
console.log(shoppingCart); 

//Adding Sugar at the end of the shopping cart.
const addNewItem = shoppingCart.push('Sugar');
console.log(shoppingCart);

//Removing 'Honey'.
const removeAnotherItem = shoppingCart.splice(4,1);
console.log(shoppingCart);

//Modifying Tea to 'Green Tea'.
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

//Concatenating the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);