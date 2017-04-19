// automatically hide error message
document.getElementById('errorMessage').style.display = 'none';

// fizzBuzzFunction click functionality
function fizzBuzzFunction() {
	var x = document.getElementById('number').value;
	x = parseInt(x);
		
	if(x <= 0) {
		var errMsg = document.getElementById('errorMessage');
		errMsg.style.display = 'block';
		errMsg.style.color = '#e74c3c';
		
		var numInput = document.getElementById('number');
		numInput.focus();
	} else {
		var newArray = []
		var i = 1;
		while(i <= x) {
			newArray.push(i);
			i++;
		}
	}
	
	var resultArray = []
	for(i = 0; newArray[i] <= newArray.length; i++) {
		if(newArray[i] % 3 === 0 && newArray[i] % 5 === 0) {
			resultArray.push('FizzBuzz');
		} else if(newArray[i] % 3 === 0) {
			resultArray.push('Fizz');
		} else if(newArray[i] % 5 === 0) {
			resultArray.push('Buzz');
		} else {
			resultArray.push(newArray[i]);
		}
	}
	
	document.getElementById('inputContainer').style.display = 'none';
	document.getElementById('tryContainer').style.display = 'block';
	document.getElementById('result').innerHTML = resultArray.join(", ")
	document.getElementById('result').style.display = 'block';
	document.getElementById('tryAgain').focus();
}

function tryAgain() {
	document.getElementById('errorMessage').style.display = 'none';
	document.getElementById('number').value = '';
	document.getElementById('result').style.display = 'none';
	document.getElementById('tryContainer').style.display = 'none';
	document.getElementById('inputContainer').style.display = 'block';
	document.getElementById('number').focus();
}