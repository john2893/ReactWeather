var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(3010,function(){
  console.log('express server is up on port 3010');

});
