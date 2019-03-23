const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('서버 실행');
  fs.readFile('./server2.html', (err, data) => {
    if (err) {
      throw err;
    }
    res.end(data);
  });
}).listen(8081);

server.on('listening', () => {
  console.log('8081번 포트에서 서버 대기중입니다.');
});
server.on('error', (error) => {
  console.error(error);
});


// const http = require('http');

// http.createServer((req, res) => {
//   res.write('<h1>Hello Node!</h1>');
//   res.end('<p>Hello Server!</p>');
// }).listen(8080, () => {
//   console.log('8080번 포트에서 서버 대기중입니다!');
// });