const calculateMass = (ary) =>
  ary.reduce((acc, i) => {
    return acc + i.length;
  }, 0);