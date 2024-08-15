let bottleCount = 99
for(let i = 0; i <= 99; i++){
const message = 'erm ' + bottleCount + ' bottles' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)
bottleCount--
}