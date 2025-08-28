// ================================
// Part 1: Variables & Conditionals
// ================================
function askName() {
  let name = prompt("Enter your name:");
  
  if (name) {
    document.getElementById("greeting").textContent = "Hello, " + name + "! Welcome to JavaScript.";
  } else {
    document.getElementById("greeting").textContent = "You didn’t enter a name!";
  }
}

// ================================
// Part 2: Functions
// ================================
// Function to calculate total cost
function calculateTotal() {
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;

  let total = price * quantity;
  document.getElementById("totalResult").textContent = "Total: $" + total;
}

// Function to format a string (example of reusable logic)
function formatText(text) {
  return text.toUpperCase() + "!";
}
console.log(formatText("javascript is fun"));

// ================================
// Part 3: Loops
// ================================
// Loop to show numbers 1–10
function showNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear previous results
  for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// While loop for countdown
function countdown() {
  let count = 5;
  let result = "";
  while (count >= 1) {
    result += count + " ";
    count--;
  }
  document.getElementById("countdownResult").textContent = "Countdown: " + result;
}

// ================================
// Part 4: DOM Manipulation
// ================================
function changeText() {
  document.getElementById("changeMe").textContent = "🎉 The text has been changed!";
}

function toggleColor() {
  document.getElementById("highlight").classList.toggle("highlight");
}

function addNewItem() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New item added!";
  list.appendChild(newItem);
}
