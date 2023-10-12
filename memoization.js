const memoize = (func) => {
    const results = {};
    return (...args) => {
      const argsKey = JSON.stringify(args);
      if (!results[argsKey]) {
        results[argsKey] = func(...args);
      }
      return results[argsKey];
    };
  };

  const age = memoize((num)=>{
    let d = new Date();
   
    const year = d.getFullYear();

    return console.log(year - num); 
  });
  console.time("First call");
  age(1996);
  console.timeEnd("First call");
  console.time("second call");
  age(2003);
  console.timeEnd("second call");
  console.time("third call");
  age(2003);
  console.timeEnd("third call");
  console.time("fourth call");
  age(1996);
  console.timeEnd("fourth call");