function addFirstToLast(inputArray) {
  let firstAndLast = '';

 
  if (inputArray.length > 0) {
    
    firstAndLast = inputArray[0] + inputArray[inputArray.length - 1];
  }

  else
	{ firstAndLast = '';       }

  return firstAndLast;
}

console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));
