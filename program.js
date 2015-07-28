var fs      = require('fs')
var path    = require('path')
var through = require('through2')
var split   = require('split')

// Exercise 5
var
  stream = through(write),
  count = 1
;

function write(line, encoding, next) {
  this.push('\n' + (((count % 2) === 0)
    ? line.toString().toUpperCase()
    : line.toString().toLowerCase()
  ));
  count++;
  next();
}

process.stdin
  .pipe(split())
  .pipe(stream)
  .pipe(process.stdout)
;

// Exercise 4
// var stream = through(write, end);
//
// function write(buffer, encoding, next) {
//   this.push(buffer.toString().toUpperCase());
//   next();
// }
//
// function end(done) {
//   done();
// }
//
// process.stdin.pipe(stream).pipe(process.stdout);

// Exercise 3
// process.stdin.pipe(process.stdout)

// Exercise 2
// file = path.resolve(process.argv[2])
//
// input = fs.createReadStream(file)
// input.pipe(process.stdout)

// Exercise 1
// console.log('beep boop');
