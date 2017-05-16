const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();
/*
let logger = (req, res, next) => {
	console.log('Logging...');
	next();
}

app.use(logger);*/

// Set view Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get ('/', (req,res) => {
	res.render('home', {
		name: "Fred Adewole"
	});
})

// Set server port
app.listen(3000, e => {
	console.log('Server running on port 3000...');
})