let p = new Promise((resolve, reject) => {
    let a = 1 + 3
    if (a == 1){
        resolve('Success')
    } else {
        reject('Failed')
    }
})

// If a promise is fulfilled, then log message. Else, catch rejection with message.
p.then((message) => {
    console.log('This is in the .then' + message)
}).catch((message) => {
    console.log('This is in the .catch' + message)
})
