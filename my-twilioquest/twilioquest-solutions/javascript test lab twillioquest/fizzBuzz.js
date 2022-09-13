const numberInput = Number(process.argv[2]);
let output = '';

if (numberInput%3===0) {
  output += 'Java';
}

if (numberInput%5===0) {
  output += 'Script';
}

if (numberInput%3 > 0 && numberInput%5 > 0) {
  output = String(numberInput);
}

console.log(output);
