function calculateVolume(length) {
    console.log(length);
    return function (breadth) {
        console.log(length,breadth);
        return function (height) {
            console.log(length,breadth,height); 
            return length * breadth * height;
        }
    }
}

let result = calculateVolume(4)(5);
console.dir(result);