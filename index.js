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
//console.log(user);

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
//app.use('/static', express.static('public'));
app.use(express.static(path.join(__dirname + '/public')));

app.get('/register', (req, res) => {
	res.render('home');
});

/*app.post('/register', (req,res) => {
	console.log(req.body.email);
	let promise = auth.signInWithEmailAndPassword(req.body.email, req.body.password);
	promise.catch(e => {
		res.redirect('/');
		//console.log('Oops, an error occurred');
		
	})
	promise.then(success = (resp) => {
		if (user) {
			console.log('Log in successful!');
			//console.log(user);
		//alert('Log in successful!');
			res.render('index');
		} else {
			res.redirect('/');
		}
	})

});
*/
app.post('/', (req,res) => {
	console.log(1234);
	let promise = auth.signInWithEmailAndPassword(req.body.email, req.body.password);
	promise.catch(e => {
		res.redirect('/');
		//res.end();
		//console.log('Oops, an error occurred');
		
	})
	promise.then((user) => {
		if (user) {
			console.log('Log in successful!');
			console.log(1234);
			//alert('Log in successful!');
			res.render('index');
		} else {
			res.redirect('/');
			res.end();
		}
	})
});

app.get ('/', (req,res) => {
	res.sendFile(__dirname + '/views/home.html');
});

app.get('/index', (req,res) => {
		if (user) {
			res.render('index', {
				name: user.email
			});

		} else {
			res.redirect('/');
		}
			//console.log('not logged in');
	//res.redirect('/');
});

/*app.get("/leader",(req,res)=>{
	auth.onAuthStateChanged((user)=>{
		if(user){
			res.send("leader")
		}
		res.redirect("/");
	})
})*/
app.get('/leader', (req,res) => {
	if (user) {
		res.render('leader');
	}  else {
		res.redirect('/');
	}
})

firebase.auth().onAuthStateChanged(user => {
	if (user) {
		console.log(user);
	} else {
		console.log('not logged in');
	}
});



 /*// Get elements from HTML
	const mai
	l = document.getElementById('userEmail');
	const password = document.getElementById('entryOne');
	const btnLogin = document.getElementById('logIn');
	const btnSignup = document.getElementById('signUp');
	const btnLogout = document.getElementById('logout');

	// Add Login Event
	btnLogin.addEventListener('click', e => {

		// Get Email and password
		const email = mail.value;
		const pass = password.value;
		const auth = firebase.auth();

		// Sign In 
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => {
			alert(e.message);
			console.log(e.message);
			})
		
		promise.then(success => {
			alert('Log in successful!');
				app.get ('/leader', (req,res) => {
				res.render('index', {
					name: "Fred Adewole"
				});
				console.log('Log in successful!');
			});
		});
	});

	// Add Sign Up EVent
	btnSignup.addEventListener('click', e => {

		// Get Email and password
		const email = mail.value;
		const pass = password.value;
		const auth = firebase.auth();

		// Sign In 
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		promise.catch(e => {
			alert(e.message);
			console.log(e.message);
		});
		promise.then(success => {
			alert('Sign up successful');
			console.log('Sign up successful');
		});
	});

	// Add Log out Event
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
		alert('Log out successful');
		console.log('Logged out successful');
	})

	// Add a realtime listener
	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			console.log(user);
		} else {
			console.log('not logged in');
		}
	});*/

// Set server port
app.listen(process.env.PORT || 3000, e => {
	console.log('Server running on port 3000...');
});
module.exports = app