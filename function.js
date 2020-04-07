const myInfo = {name: "chris", age:30};

function changeAgeTo100(myObj){
  myObj.age = 100;
}

//console.log(myInfo);
//changeAgeTo100(myInfo);
console.log(myInfo);

////////////////////////////////////
const myNumbers = [1,2,3,4,5];

function addToArray(myArr){
  myArr.push(6);
}
console.log(myNumbers);
addToArray(myNumbers);
console.log(myNumbers);

/////////////////////////////////

function squareAndmultiply(num1, num2) {
  function squarer(x) {
    return x*x;
  }
  return squarer(num1)*squarer(num2);
}

console.log(squareAndmultiply(10,60));

////////////////////////////

function squareAndmultiply(num1, num2) {
  function squarer(x) {
    return x*x;
  }
 
function multiplyBy10(y) {
  return y * 10;
}
return squarer(num1)* multiplyBy10(num2);
}

console.log(squareAndmultiply(2,5));
///////////////////////////
function personFormatter(firstName, lastName, age){
  function formatNames(arg1, arg2){
    return arg1 + " " + arg2;
  }
  const formattedName = formatNames(firstName, lastName);
  return formattedName;
}

console.log(personFormatter("Chris", "Jones", 20));