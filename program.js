fs      = require('fs')
path    = require('path')
through = require('through2')

// Exercise 4
var stream = through(write, end);

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

process.stdin.pipe(stream).pipe(process.stdout);

// Exercise 3
// process.stdin.pipe(process.stdout)

// Exercise 2
// file = path.resolve(process.argv[2])
//
// input = fs.createReadStream(file)
// input.pipe(process.stdout)

// Exercise 1
// console.log('beep boop');
