console.log("hello mrs.escobar!");

// This is a global variable
let globalVariable = 7;

  // This is a block variable
  let blockVariable = 14;
  console.log("Block variable:", blockVariable);


let num1 = 20;
let num2 = 30;
let result = num1 + num2;
console.log("Result of addition:", result);

let myString = "This is a string variable.";

console.log(myString);

const myObject = {
  key1: "value1",
  key2: "value2",
};

console.log("Object variable:", myObject);

function add(x, y) {
    return x + y;
}

const result = add(7, 14);
console.log(result); 

const person = {
    name: "Mary",
    age: 30,
    greet: function() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
};

person.greet(); 



    const button = document.getElementById("firstButton");

    function handleClick(event) {
        console.log("Button clicked!");
    }

    button.addEventListener("click", handleClick);







