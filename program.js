var
  fs       = require('fs'),
  path     = require('path'),
  through  = require('through2').obj,
  split    = require('split'),
  concat   = require('concat-stream'),
  http     = require('http'),
  request  = require('request'),
  ws       = require('websocket-stream'),
  trumpet  = require('trumpet'),
  cp       = require('child_process'),
  duplexer = require('duplexer2'),
  combine  = require('stream-combiner'),
  zlib     = require('zlib'),
  crypto   = require('crypto')
;

// Exercise 14
var
  passkey = process.argv[2],
  encryption = 'aes256',
  stream  = crypto.createDecipher(encryption, passkey)
;
process.stdin.pipe(stream).pipe(process.stdout);


// Exercise 13
// module.exports = function () {
//   var
//     group = through(write, end),
//     current
//   ;
//
//   function write(line, _, next) {
//     if (line.length === 0) return next();
//     var row = JSON.parse(line);
//
//     if (row.type === 'genre') {
//       if (current) {
//         this.push(JSON.stringify(current) + '\n')
//       }
//       current = { name: row.name, books: [] };
//     } else if (row.type === 'book') {
//       current.books.push(row.name);
//     }
//     next();
//   }
//   function end(next) {
//     if (current) {
//       this.push(JSON.stringify(current) + '\n');
//     }
//     next();
//   }
//   return combine(split(), group, zlib.createGzip());
// }

// Exercise 12
// module.exports = function (counter) {
//   var
//     counts = {},
//     input = through(write, end)
//   ;
//   return duplexer(input, counter);
//
//   function write(buf, _, next) {
//     counts[buf.country] = (counts[buf.country] || 0) + 1;
//     next();
//   }
//
//   function end(done) {
//     counter.setCounts(counts);
//     done();
//   }
// }

// Exercise 11
// var spawn = cp.spawn;
//
// module.exports = function (cmd, args) {
//   var child = spawn(cmd, args);
//   return duplexer(child.stdin, child.stdout)
// }

// Exercise 10
// var
//   tr = trumpet(),
//   stream = tr.select('.loud').createStream(),
//   write = function (buf, _, next) {
//     this.push(buf.toString().toUpperCase());
//     next();
//   }
// ;
//
// stream.pipe(through(write)).pipe(stream);
//
// process.stdin.pipe(tr).pipe(process.stdout);

// Exercise 9
// var stream = ws('ws://localhost:8099');
//
// stream.write('hello\n');

// Exercise 8
// var req = request.post('http://localhost:8099');
//
// process.stdin.pipe(req).pipe(process.stdout);

// Exercise 7
// var
//   port         = Number(process.argv[2]),
//
//   server       = http.createServer(function (req, res) {
//     req.method != 'POST'
//       ? wrongMethod(res)
//       : pipeResponse(req, res)
//     ;
//   }),
//
//   write        = function (buf, _, next) {
//     this.push(buf.toString().toUpperCase());
//     next();
//   },
//
//   pipeResponse = function (req, res) {
//     res.writeHead(200, {
//       'Content-Type': 'text-plain'
//     });
//     req.pipe(through(write)).pipe(res);
//   },
//
//   wrongMethod  = function (res) {
//     res.writeHead(405, {
//       'Content-Type': 'text-plain',
//       'Allow': 'POST'
//     });
//     res.end('Plz send post');
//   }
//
// server.listen(port)

// Exercise 6
// function reverseStream(body) {
//   console.log(
//     body.toString()
//       .split('')
//       .reverse()
//       .join('')
//   );
// }
//
// process.stdin
//   .pipe(concat(reverseStream))
// ;

// Exercise 5
// var
//   stream = through(write),
//   count = 1
// ;
//
// function write(line, encoding, next) {
//   this.push('\n' + (((count % 2) === 0)
//     ? line.toString().toUpperCase()
//     : line.toString().toLowerCase()
//   ));
//   count++;
//   next();
// }
//
// process.stdin
//   .pipe(split())
//   .pipe(stream)
//   .pipe(process.stdout)
// ;

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
