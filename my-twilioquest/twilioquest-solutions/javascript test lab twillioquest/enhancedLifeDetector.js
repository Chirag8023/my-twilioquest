const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

if (treeLifeStatus  === 0) {
  console.log('alive');
} 

else if (treeLifeStatus  === 1) {
  console.log('flowering');
} 

else if (treeLifeStatus  === 2) {
  console.log('shedding');
} 

else {
  console.log('other');
}
