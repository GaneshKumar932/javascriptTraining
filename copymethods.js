
//shallow copy

//spread operator
let a =[1,2,3,4,5,6];
let box ={
    name: "ganesh",
};
let a2 =[...a];
let box2={...box};
console.log("copy array using spread operator --->",a2);
console.log("copy object using spread operator --->",box2);

//object.assaign

let student ={
    name: "ganesh",
};
let profile = Object.assign({},student);
console.log("object.assign method ---->",profile);
//deep copy

let worker = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}

let upload = JSON.stringify(worker);
let get = JSON.parse(upload);

console.log("json-copy ---->" ,get);
//Lodash
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
};
let newemployee = _.clone(employee);
console.log("lodash copying --->",newemployee);