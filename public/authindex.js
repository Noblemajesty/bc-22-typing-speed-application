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

	var user = firebase.auth().currentUser;
	  // Get elements from HTML
	const mail = document.getElementById('email');
	
	const btnLogout = document.getElementById('logout');

	
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
		window.location.href = "http://localhost:3000";
		//alert('Log out successful');
		console.log('Logged out successful');
		
	})
	

	// Add a realtime listener
	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			console.log(user);
			console.log(user.email);
		} else {
			console.log('not logged in');
			window.location.href = "http://localhost:3000";
			
		}
	});



	//})
}());