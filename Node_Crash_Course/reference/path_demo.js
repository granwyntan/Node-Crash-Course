const path = require("path");

// Base File Name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename)); //console.log(__dirname);

// Extension name
console.log(path.extname(__filename));

// Create Path Object
console.log(path.parse(__filename)/* name of any property*/);

// Concatenate paths
//../test/demo.html
console.log(path.join(__dirname, 'test', 'hello.html'));