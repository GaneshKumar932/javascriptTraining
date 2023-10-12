// function outerFunction() {
//     const outerVariable = "I am from outerFunction";
//     let x=0;
  
//     function innerFunction() {
//         x=+1;
//       console.log(outerVariable,x); 
//        // innerFunction has access to outerVariable
//     }
  
//     return innerFunction;
//   }
  
//   const closure = outerFunction();
//   closure(); 
  
  const add = (function () {
    let counter = 0;
    console.log(counter);
    return function () {counter += 1;console.log(counter); return counter}
  })();
  
  add();
  add();
  add();
  add();
  add();
  