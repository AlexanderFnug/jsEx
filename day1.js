function add(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
const f1 = function(a, b, callback) {
    return "Result using the numbers: " + a + " and " + b + " = " + callback(a, b);
}
console.log(f1(add(1,2),add(1,2), sub));