//Several exercises for conditional statements.
//Getting user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are 
//old enough to drive' but if not 18 give another feedback stating to wait for the number of years he 
//needs to turn 18.
const userAge = prompt("Enter your age:");

const age = parseInt(userAge);

if (age >= 18) {
    console.log("You are old enough to drive.");
  } else {
    const yearsToWait = 18 - age;
    console.log(`You need to wait for ${yearsToWait} more year(s) to turn 18.`);
  }

  //Comparing the values of myAge and yourAge using if … else. Based on the comparison and log the 
  //result to console stating who is older (me or you).

  const myAge = prompt("Enter your age:");

  const newAge = parseInt(myAge);

  if(myAge >= yourAge){
    console.log('I am older than you.');
  } else {
    console.log(`You are older than me.`)
  }