
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
/*
 	if (password.length < 1){
 		alert('just a letter');
 	} else {
 		alert(password.length + ' letters');
 	}
*/


/*$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='loginReg']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      //name: "required",
      password: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    // Specify validation error messages
    messages: {
      //name: "Please enter your name",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 6 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
*/





/*// Handle form data Validation here

const mail = document.getElementById('userEmail').value;
const password = document.getElementById('entryOne').value;

validate = () => {
	validateMail = () => {
		let atpos = mail.lastIndexOf("@");
		let dotpos = mail.lastIndexOf(".");
		if (mail.length < 1) {
			alert('Email field is empty!');
			} else if (atpos <1 || dotpos < atpos + 2 || dotpos + 2 >= mail.length) {
				alert("Not a valid e-mail address")
			}
		}
	validateMail();
	validatePassword();
}



/*const btnLogin = document.getElementById('logIn');
const btnSignup = document.getElementById('signUp');
const btnLogout = document.getElementById('logout');*///*/