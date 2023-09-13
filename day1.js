function add(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function mul(a, b) {
    return a * b
}

const cb = function(a, b, callback) {
    return "Result using the numbers: " + a + " and " + b + " = " + callback(a, b);
}

//opg 1 og 2
console.log( add(1,2) )     //  ## result 3
console.log( add )          //  ## result [Function: add]
console.log( add(1,2,3) ) ; // ## result 3
console.log( add(1) );	  //  ## result NaN
console.log( cb(3,3,add) ); // ## result 6
console.log( cb(4,3,sub) ); //    ## result 1
//console.log(cb(3,3,add())); //  ## result Fails callback is not a function
console.log(cb(3, "hh", add));//   ## result 3hh

//opg 4
console.log(cb(6, 6, mul)) // ## result 2
//opg 5

console.log(cb(1, 2, ()=> 1/2)) // ## result 0.5
//Callbacks (with map, filter and forEach)
console.log()
console.log("-->Callbacks (with map, filter and forEach)<--")
console.log("opg 1")
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]
console.log("First list")
names.forEach(name => {
    console.log(name)
});
console.log("Second list")
names.filter(name => name.length <= 3).forEach(name => {
    console.log(name)
});
console.log("OPG. 2")
console.log("Uppercase list")
names.map(name => name.toUpperCase()).forEach(name => {
    console.log(name)
});
console.log("OPG. 3")
const namesToHtml = function (names) {
    return `<ul>${names.map(name => `<li>${name}</li>`).join('')}</ul>`;
}
console.log("Names to HTML: ", namesToHtml(names))
// OPg. 4
console.log("OPG. 4")
const cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
console.log("Cars newer than 1999: ", cars.filter(car => car.year > 1999))
console.log("All Volvos: ", cars.filter(car => car.make === "Volvo"))
console.log("All with price below 5000 DOLLARS: ", cars.filter(car => car.price < 5000))
