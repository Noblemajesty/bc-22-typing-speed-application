const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
let app = express();
const firebase = require('firebase');
require('firebase/auth');
require('firebase/database');

const config = {
	    apiKey: "AIzaSyBPGYA9kSi-XG6eiiHEWc2bdZNGNQNiKJc",
	    authDomain: "typcastic.firebaseapp.com",
	    databaseURL: "https://typcastic.firebaseio.com",
	    projectId: "typcastic",
	    storageBucket: "typcastic.appspot.com",
	    messagingSenderId: "993313392998"
	  };
firebase.initializeApp(config);

const auth = firebase.auth();
const user = firebase.auth().currentUser;
// Set View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static path
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/views/home.html');
})

app.post('/index', function(req,res) {
	auth.signInWithEmailAndPassword(req.body.email, req.body.password).then((resp)=>{
                if(resp.uid){
                        res.sendFile(__dirname + '/views/index.html');                        
                }
        }).catch((e)=>{
                console.log(e)
                res.redirect('/');
        });
	
});

app.post('/signup', function(req,res) {
	auth.createUserWithEmailAndPassword(req.body.email, req.body.body).then((resp) => {
		if(resp){
			res.sendFile(__dirname + '/views/index.html');
		}
	}).catch((e) =>{
		console.log(e.message);
		res.redirect('/');
	})
})

app.get('/leader', function(req,res) {
	if(user) {
		res.render('/leader');
	} else {
		res.redirect('/');
	}
})

app.get('/logout', function(req,res) {
	auth.singOut();
	res.redirect('/views/index.html');
});



app.listen(process.env.PORT || 3000, e => {
	console.log('Server running on port 3000...');
});