    //Declare an empty array;
    const array1 = [];

    //Declare an array with more than 5 number of elements
    const array2 = [1, 2, 3, 4, 5, 6, 7];
    
    //Find the length of your array
    console.log(array2.length);
    
    //Get the first item, the middle item and the last item of the array
    const getArray = [1, 2, 3, 4, 5, 6, 7];
    const firstItem = getArray[0];
    const middleItem = getArray[Math.floor(getArray.length / 2)];
    const lastItem = getArray[getArray.length - 1];
    console.log(firstItem); //Prints the first item.
    console.log(middleItem); //Prints the middle item.
    console.log(lastItem); //Prints the last item.
    
    //Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
    const mixedDataTypes = [1, 2, 4.5, 'A', true, {country: 'Canada', city : 'Toronto'}];
    console.log(mixedDataTypes.length);
    
    //Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

    //Print the array using console.log()
    console.log(itCompanies);
    
    //Print the number of companies in the array
    console.log(itCompanies.length);

    //Print the first company, middle and last company
    const firstCompany = itCompanies[0];
    const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
    const lastCompany = itCompanies[itCompanies.length - 1];

    //Print out each company
    console.log(firstCompany);
    console.log(middleCompany);
    console.log(lastCompany);
    
    //Change each company name to uppercase one by one and print them out
    itCompanies.forEach(company => {
        const uppercasedCompany = company.toUpperCase();
        console.log(uppercasedCompany);
      });
    
    //Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    const printArray = itCompanies.slice(0, itCompanies.length - 1).join(', ') + ", and " + itCompanies.slice(-1) + ", are big IT companies.";
    console.log(printArray);

    //Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
    const companyNameToFind = 'Microsoft'; 
    if (itCompanies.includes(companyNameToFind)) {
    console.log(`${companyNameToFind} exists in the itCompanies array.`);
    } else {
    console.log(`${companyNameToFind} is not found in the itCompanies array.`);
    }

    //Filter out companies which have more than one 'o' without the filter method
    const filteredCompanies = [];

    for (const company of itCompanies) {
    let count = 0; // Initialize a count for 'o' characters

    for (const char of company) {
        if (char.toLowerCase() === 'o') {
        count++;
        }

        if (count > 1) {
        break; // No need to continue checking if we've found more than one 'o'
        }
    }

    if (count <= 1) {
        filteredCompanies.push(company);
    }
    }

    console.log(filteredCompanies);

    //Sort the array using sort() method
    const sortedCompanies = console.log(itCompanies.sort());
    
    //Reverse the array using reverse() method
    const reversedCompanies = console.log(itCompanies.reverse());
    
    //Slice out the first 3 companies from the array
    const slicedCompanies = console.log(itCompanies.slice(0,3));
    
    //Slice out the last 3 companies from the array
    const sliceLastCompanies = console.log(itCompanies.slice(4,7));
    
    //Slice out the middle IT company or companies from the array
    let middleCompanies = [];

    if (itCompanies.length % 2 === 0) {
    // If the array has an even number of elements, slice the two middle companies
    const startIndex = itCompanies.length / 2 - 1;

    middleCompanies = itCompanies.slice(startIndex, startIndex + 2);
    } else {
    // If the array has an odd number of elements, slice the single middle company
    const middleIndex = Math.floor(itCompanies.length / 2);

    middleCompanies = itCompanies.slice(middleIndex, middleIndex + 1);
    }

    console.log(middleCompanies);

    //Remove the first IT company from the array
    const removeFirstCompany = console.log(itCompanies.slice(1));
    
    //Remove the middle IT company or companies from the array
    const removeMiddleCompany = console.log(itCompanies.splice(4,1));

    //Remove the last IT company from the array
    const removeLastCompany = console.log(itCompanies.slice(0, -1));
    
    //Remove all IT companies

    const companiesToRemove = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

    for (const company of companiesToRemove) {
        const index = itCompanies.indexOf(company);
        if (index !== -1) {
          itCompanies.splice(index, 1);
        }
      }
      
      console.log(itCompanies);