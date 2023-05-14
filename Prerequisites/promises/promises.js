// let p = new Promise((resolve, reject) => {
//     let a = 1 + 3
//     if (a == 1){
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// })

// // If a promise is fulfilled, then log message. Else, catch rejection with message.
// p.then((message) => {
//     console.log('This is in the .then' + message)
// }).catch((message) => {
//     console.log('This is in the .catch' + message)
// })

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 recorded')
})

// Use Promise.all to let all promises run in parallel
Promise.all ([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})

// Use Promise.race to return once the first Promise is completed
Promise.race ([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(message)
})