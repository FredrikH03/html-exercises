let userInput = prompt("please enter number");

let result = 1
function factorial(result, userInput) {
  for (let i = 1; i <= userInput; i++) {
    result *= i
  }

  const message = 'result: ' + result // Try edit me

  // Update header text
  document.querySelector('#header').innerHTML = message

  // Log to console
  console.log(message)
}
factorial(result, userInput);