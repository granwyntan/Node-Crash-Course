const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => /*can be written as function(err)*/ { 
//     if (err) throw err;
//     console.log('Folder created...');
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', err => {
//     if (err) throw err;
//     console.log('File written to...');

//     //File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node.js', err => {
//         if (err) throw err;
//         console.log('Appended stuff');
//     });
// });

// Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => { 
    if (err) throw err;
    console.log(data);
});

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err, data) => { 
    if (err) throw err;
    console.log('File renamed... ');
}
);