var express = require('express');
var app = express();
var json = require('./views/about.json');

app.set('view engine', 'ejs');

app.get('/', function(req, res) 
{
	res.render('index', {
		title: 'Home',
		subtitle: 'Homepage for the Mandatory Assignment',
		text: 'This is some text I choose to put in this paragraph'
	});
});

app.get('/about', function(req, res) 
{
	res.render('about.ejs', {
		title: json.title,
		subtitle: json.subtitle,
		text: json.text
	});
});

var server = app.listen(3000, function()
{
	console.log('Listening on port 3000');
});