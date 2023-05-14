//Normal function with 2 parameters
function sum(a,b) {
    return a + b
}

let sum2 = (a,b) => {
    return a + b
}


//Normal function with 1 parameter
function isPositive(number) {
    return number >= 0
}

let isPositive2 = number => number >= 0


//Normal function with no parameters
function randomNumber() {
    return Math.random
}

let randomNumber2 = () => {Math.random}


// Anonymous function with 2 parameters
document.addEventListener('click', function() {
    console.log('Click')
})

document.addEventListener('click', () => console.log('Click'))