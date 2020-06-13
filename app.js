var express = require('express');
var app = express();
var router = require('./router/main')(app);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.engine('html', require('ejs').renderFile)

app.use(express.static(__dirname + '/views'));

var port = process.env.PORT || 3000; 
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
