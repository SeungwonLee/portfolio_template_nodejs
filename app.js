var express = require('express');
var app = express();
var router = require('./router/main')(app);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.engine('html', require('ejs').renderFile)

app.use(express.static(__dirname + '/views'));

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
})
