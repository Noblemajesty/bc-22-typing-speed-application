
// Form Validation
 validate = () => {
 	var email = document.getElementById('email').value;
 	var password = document.getElementById('password').value;
 	var error = document.getElementById('message');


 	let atpos = email.lastIndexOf("@");
	let dotpos = email.lastIndexOf(".");
	let result;
	if (!(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) && (password.length > 5)) {
		alert("Welcome");
		document.getElementById('myForm').submit();
		return true;
		} else {
			error.innerHTML = '<h2> Ensure a valid e-mail and Password is at least 6 characters </h2>';
			return false;
		};
	}

	register = () => {
		let first = document.getElementById('first').value;
		let last = document.getElementById('last').value;
		let contact = document.getElementById('contact').value;
		let pass = document.getElementById('passw').value;
		let atpos = email.lastIndexOf("@");
		let dotpos = email.lastIndexOf(".");

		if((first.length < 1 ) || (last.length < 1) ) {
			alert('Name fields are currently empty');
			return false;
		} else if ((atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) && (password.length > 5)) {
			alert('Enter a valid Email address');
			return false;
		} else {
			alert('correct');
			return true;
			document.getElementById('signup').submit();
		}

	}
/
const btnLogout = document.getElementById('logout');