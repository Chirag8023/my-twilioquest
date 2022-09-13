function scan(freightItems) {
  let contrabandIndexes = [];

  freightItems.forEach(function(element, index){
	 if(element == "contraband"){
	  contrabandIndexes.push(index);
	}

	})

  return contrabandIndexes;
}

