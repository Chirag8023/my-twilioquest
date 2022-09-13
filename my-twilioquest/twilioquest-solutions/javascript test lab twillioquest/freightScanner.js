function scan(freightItems) {
  let contrabandCount = 0;
	freightItems.forEach(function a(str)
	  {
 	     if(str === 'contraband') contrabandCount++;
	   })
  
  return contrabandCount;
}