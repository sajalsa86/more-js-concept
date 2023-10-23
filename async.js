//Asynchronous
console.log(1);
console.log(2);
//console.log(3);
//doSomtThing();
//setTimeout(doSomtThing);
//setTimeout(doSomtThing, 4000);
setTimeout(() => {
    console.log('lazy Logged')
}, 5000);

console.log(4);
console.log(5);
console.log(6);

function doSomtThing() {
    console.log(3);
}

//Single-threaded/Synchronous
function one() {
    console.log('A');
    two();
    console.log('C')
};
function two() {
    console.log('B');
}
one();

