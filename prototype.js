let animal = {
    animalEats: "yes",
};
 
let rabbit = {
    rabbitJumps: "yess",
};
 
// Sets rabbit.[[Prototype]] = animal;

Object.setPrototypeOf(animal,rabbit);
console.log(animal.rabbitJumps);
function* fetchData() {
    try {
      const response = yield fetch('https://reqres.in/api/users/2');
      const data = yield response.json()
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  const generator = fetchData();
  const fetchPromise =generator.next().value;
  
  fetchPromise
    .then((response) => generator.next(response))
    .then((jsonData) => generator.next(jsonData))
    .catch((error) => generator.throw(error));
  