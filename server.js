var express = require('express');
var app = express();

var port = process.env.PORT || 4200;

app.use(express.static(__dirname));

app.get('*', function(request, response){
  response.sendfile('./index.html');
});

app.listen(port, function() {
 console.log('Chat app is running on http://localhost:' + port);
});