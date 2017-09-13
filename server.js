var express = require('express');
var app = express();
var server = app.listen(3000,function(){
	console.log("connected port 3000");
});

var router = require('./router/main')(app);
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser.urlencoded({extended:false}));
app.set('views',__dirname+'/views');
app.set('view engine', 'jade');
app.use(express.static('public'));

var conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'1113',
  database:'public'
});
conn.connect();

