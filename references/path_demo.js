const path = require('path');

// Log Base filename with extension
console.log(path.basename(__filename));

// Log directory name
console.log(path.basename(__dirname));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Access the base
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));

