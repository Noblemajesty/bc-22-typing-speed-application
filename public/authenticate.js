(function() {

		const config = {
	    apiKey: "AIzaSyBPGYA9kSi-XG6eiiHEWc2bdZNGNQNiKJc",
	    authDomain: "typcastic.firebaseapp.com",
	    databaseURL: "https://typcastic.firebaseio.com",
	    projectId: "typcastic",
	    storageBucket: "typcastic.appspot.com",
	    messagingSenderId: "993313392998"
	  };

	  firebase.initializeApp(config);

	  // Get elements from HTML
	const mail = document.getElementById('email');
	const password = document.getElementById('password');
	const btnLogin = document.getElementById('logIn');
	const btnSignup = document.getElementById('signup');
	const message = document.getElementById('message');
	const btnLogout = document.getElementById('logout');
	const createEmail = document.getElementById('smail');
	const createPassword = document.getElementById('spassword');
	const error = document.getElementById('error');

	// Add Login Event
	btnLogin.addEventListener('click', e => {

		// Get Email and password
		const email = mail.value;
		const pass = password.value;
		const auth = firebase.auth();

		// Sign In 
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => {
			//alert(e.message);
			message.innerHTML = "<div class='alert alert-danger alert-dismissable'> "+ e.message + " </div>";
			console.log(e.message);
			})
		
		promise.then(success => {
			message.innerHTML = "<div class='alert alert-success alert-dismissable'>Log in successful</div>";
			
		});
	});

	// Add Sign Up EVent
	btnSignup.addEventListener('click', e => {

		// Get Email and password
		const email = createEmail.value;
		const pass = createPassword.value;
		const auth = firebase.auth();

		// Sign In 
		const promise = auth.createUserWithEmailAndPassword(email,pass);
		promise.catch(e => {
			//alert(e.message);
			error.innerHTML = "<div class='alert alert-danger alert-dismissable'> "+ e.message + " </div>";
			console.log(e.message);
		});
		promise.then(success => {
			alert('Sign up successful');
			error.innerHTML = "<div class='alert alert-success alert-dismissable'>Sign up successful</div>";
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
	});


}());