const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

//Checking if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const indexOfEthiopia = countries.indexOf('Ethiopia');

if (indexOfEthiopia !== -1) {
  // 'Ethiopia' exists in the array, so print it in uppercase
  console.log('ETHIOPIA');
} else {
  // 'Ethiopia' does not exist in the array, so add it
  countries.push('Ethiopia');
  console.log('Added Ethiopia to the countries list.');
  console.log('Updated countries array:', countries);
}
