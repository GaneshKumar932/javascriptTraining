const getQuote = async () => {
    return await fetch("https://reqres.in/api/users/2").then(res => res.json());
  };
  
  const throttle = (func, delay) => { 
    let toThrottle = false;
    return function(...args) { 
      if(!toThrottle) {
        toThrottle = true;
        func.apply(this, args)
        setTimeout(() => {
          toThrottle = false
        }, delay);
      }
    }; 
  };
  
  const throttledGetQuote = throttle(async () => {
    document.getElementById("demo").innerHTML = "";
    const quote = await getQuote();
    console.log("jjjjj");
    document.getElementById("demo").innerHTML = `<strong>${quote.data.id}</strong><br><br> - <em>${quote.data.email}</em>`;
  }, 3000);