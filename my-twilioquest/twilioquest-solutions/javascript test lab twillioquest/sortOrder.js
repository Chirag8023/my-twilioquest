const firstValue = String(process.argv[2]).toLowerCase();
const secondValue = String(process.argv[3]).toLowerCase();

if(firstValue>secondValue)
{console.log("1");}

else if (firstValue=== secondValue)
{console.log("0");}

else if(firstValue<secondValue)
{console.log("-1");}