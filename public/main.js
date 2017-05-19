const getResult = function() {
	
		
		document.getElementById('userText').disabled = true;
		let userText = document.getElementById('userText').value;
		let main = document.getElementById('main').value;
		let result = document.getElementById('result');
		
		let wordList = userText.split(' ');
		let mainList = main.split(' ');
		let mainWord = userText.split(' ').length;
		let errors = 0;

		for (let i = 0; i < wordList.length; i++) {
			if( mainList[i] != wordList[i]) {
				errors++;
			} 
		}

		const GWPM = ((userText.length/5)/1);
		const NWPM = (GWPM - (errors/1));

		result = {
			"Number of words typed": mainWord,
			"Keyboard strokes": userText.length,
			"Gross Words per minute": GWPM,
			"Net Words per Minute": NWPM,
			"Number of Errors": errors
		};

		if(userText.length == 0){
			result['Number of words typed'] = 0;
			result['Number of Errors'] = 0;
		}

		let words = document.getElementById('words');
		let keystrokes = document.getElementById('keystrokes');
		let gross = document.getElementById('grossword');
		let error = document.getElementById('error');

		words.innerHTML = result['Number of words typed'];
		keystrokes.innerHTML = result['Keyboard strokes'];
		gross.innerHTML = result['Gross Words per minute'];
		error.innerHTML = result['Number of Errors'];

	}