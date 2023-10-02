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

const Result = add(7, 14);
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

    const name = "victoria a";

    function adder(num1, num2){
        console.log(num1 + num2);
    }

    adder (7,14);


    let Name = "Mikala";
    let age = 26;
    let occupation = "premise health receptionist";
    
    let concatenatedString = `My name is ${Name}, I am ${age} years old, and I work as a ${occupation}.`;
    
    console.log(concatenatedString);
    
    let temperature = 100;

if (temperature > 85) {
    console.log("It's hot outside.");
} else if (temperature > 70) {
    console.log("It's a pleasant day.");
} else {
    console.log("It's cold outside.");
}

let day = "Sunday";

switch (day) {
    case "Monday":
        console.log("It's the start of the school day.");
        break;
    case "Friday":
        console.log("TGIF! It's Friday!");
        break;
    case "Sunday":
        console.log("I have the sunday scaries");
        break;
            default:
        console.log("It's a regular day.");
}
let text = "hello world";
let uppercasedText = text.toUpperCase();
console.log(uppercasedText);

let num = 10.051999;
let formattedNum = num.toFixed(2); 
console.log(formattedNum);
var colorValue = 0;

function changeBackgroundColor() {
    var colorDiv = document.getElementById("colorDiv");
    

    colorValue = Math.floor(Math.random() * 16777216);
    
   
    var colorHex = '#' + colorValue.toString(16).padStart(6, '0');
    
 
    colorDiv.style.backgroundColor = colorHex;
    colorDiv.innerHTML = colorHex;
}
for (var i = 0; i < 5; i++) {
    changeBackgroundColor();
}
var counter = 0;
while (counter < 3) {
    changeBackgroundColor();
    counter++;
}
