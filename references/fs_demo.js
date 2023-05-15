const fs = require('fs');
const path = require('path'); 

// Create a folder
// fs.mkdir(path.join(__dirname, 'tests'), {}, err => {
//     if (err) throw err
//     console.log('Folder created...')
// })

// Create and write to a file
fs.writeFile(path.join(__dirname, '/tests','hello.txt'), 'Hello world!', err => {
    if (err) throw err
    console.log('File written to  created...')
})