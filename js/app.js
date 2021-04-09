request = require('request-json');
var client = request.createClient('http://localhost:8888/');
 
var data = {
  title: 'my title',
  content: 'my content'
};
client.post('posts/', data, function(err, res, body) {
  return console.log(res.statusCode);
});
 
client.get('posts/', function(err, res, body) {
  return console.log(body.rows[0].title);
});
 
data = {
  title: 'my new title'
};
client.put('posts/123/', data, function(err, res, body) {
  return console.log(res.statusCode);
});
 
client.del('posts/123/', function(err, res, body) {
  return console.log(res.statusCode);
});
 
data = {
  title: 'my patched title'
};
client.patch('posts/123/', data, function(err, res, body) {
  return console.log(res.statusCode);
});;