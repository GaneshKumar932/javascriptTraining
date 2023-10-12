// //callbacks

function myDisplayer(some) {
    console.log(some);
  }
  
//   function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myFirst();
//     myDisplayer("Goodbye");
//   }
//   mySecond();

// //settimeout
// setTimeout(myFunction, 3000);

// function myFunction() {
//   console.log("I love You !!");
// }
// //setinterval

// const myinterval = setInterval(myFunction2, 1000);

// function myFunction2() {
//   let d = new Date();
//   console.log(d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds());
  
// };
// function myStop() {
//     clearInterval(myinterval);
//     console.log("Timer Stopped");
//   }
// setTimeout(myStop,2000)
//promises

let myPromise = new Promise(function(myResolve, myReject) {
 let x=10;
  // The producing code (this may take some time)
  
    if (x == 10) {
      myResolve();
    } else {
      myReject();
    }
  });
  
  myPromise.then(
    function() {myDisplayer("hi");console.log("win");},
    function() {myDisplayer("bye");console.log("fail")}
  );