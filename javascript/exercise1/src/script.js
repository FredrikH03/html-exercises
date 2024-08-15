let int = prompt("please enter number");

let message = ""; // Try edit me

for (let i = 0; i <= int; i++) {
  if(i % 5 === 0){
    message += i;
  }
  else if(i % 3 === 0){
    message += i;
  }
  message += " ";
} 
// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)
