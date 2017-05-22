const express = require('express');
const app = express();

const port = process.env.PORT || 4200;

app.use('*', function (req, res, next) {
  next();
});

app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res, next) {
   res.sendfile('./index.html');
});

app.listen(port, function() {
 console.log('Chat app is running on http://localhost:' + port);
});