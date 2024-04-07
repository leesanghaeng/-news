var http = require('http');
var url = require('url');
var qs = require('querystring');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var pathname = url.parse(_url, true).pathname;
  if (pathname === '/') {
    response.writeHead(200);
    response.end(`
      <!doctype html>
      <html>
      <head>
        <title>POST</title>
        <meta charset="utf-8">
      </head>
      <body>
        <form action="/post_test" method="post">
          <p>공지1 제목<input type="text" name="notice" placeholder="title"></p>
          <p>공지2 제목<input type="text" name="notice" placeholder="title"></p>
          <p>공지3 제목<input type="text" name="notice" placeholder="title"></p>
          <p>공지4 제목<input type="text" name="notice" placeholder="title"></p>
          <p><input type="submit"></p>
        </form>
      </body>
      </html>
      `);
  } else if (pathname === '/post_test') {
    var body = '';
    request.on('data', function (data) {
      body = body + data;
    });
    request.on('end', function () {
      var post = qs.parse(body);
      console.log(post);
      var title = post.notice;
      var description = post.notice;

      response.end(`
          <!doctype html>
          <html>
          <head>
            <title>POST</title>
            <meta charset="utf-8">
          </head>
          <body>
            <p>title : ${title[n]}</p>
            <p>description : ${description[n]}</p>
          </body>
          </html>
          `);
    });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3001);