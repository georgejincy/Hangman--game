//global variables
var userTries;
var wordLength;
var wins;
var lettersGuessed = [];

// words array contains a list of words for user to guess.If
// you need to add a new word to the array use .push function
var words = [];

// Assigning words to the array
words[0] = "budgie";
words[1] = "dog";
words[2] = "iguana"

/*for (var i = words.length - 1; i >= 0; i--) {
	console.log(words[i]);
}*/

//global functions
function randomWordGenerator(){
	var randomWord = words[Math.floor(Math.random() * words.length)];
	console.log(randomWord);
	return randomWord;
}

//randomWordGenerator();

	var wordToGuess= randomWordGenerator();
	var placeholder = "-";
	var wordArray = [];
    var arrayofChars = wordToGuess.split("");

function setWordToBlanks(){
	
    for (var i = 0; i < arrayofChars.length; i++) {
   		wordArray[i] = placeholder;
    }
    console.log(wordArray);
    document.getElementById("word").innerHTML = wordArray.join("  ");
    document.getElementById("myButton").innerHTML = "Exit";
}

function initRoutine(){
	userTries = arrayofChars.length * 2;
	wordLength =  arrayofChars.length;
	wins = 0;
	lettersGuessed = [];
}
function updateStats(){
	document.getElementById("guessLeft").innerHTML = userTries;
	document.getElementById("wordLen").innerHTML = wordLength;
	document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("word").innerHTML = wordArray.join("  ");
}

/*var Game = {
        wins: 0,
        guessesLeft: 0,
        lettersGuessed: [],
        currWord: []
        };*/
var letter = "";

//displayWordBlanks();
document.getElementById("myButton").addEventListener("click", setWordToBlanks);
document.getElementById("myButton").addEventListener("click", exitGame);
initRoutine();
updateStats();

var doExit = false;

function exitGame(){
	doExit = true;
}

//while((userTries>=0) && (doExit === false)){

		// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
		document.onkeyup = function(event) {

			// Captures the key press, converts it to lowercase, and saves it to a variable.
			 letter = String.fromCharCode(event.keyCode).toLowerCase();

			if(arrayofChars.indexOf(letter) === -1){
			 	userTries--;
			 }
			 else{
				 for (var i = 0; i< arrayofChars.length; i++) {
				 	if (arrayofChars[i] === letter) {
				 		wordArray[i] = letter;
				 	}
				 }
				 wins++;
			 }
			 if(lettersGuessed.indexOf(letter) === -1){
				 lettersGuessed.push(letter);
				}
			 updateStats();
		}
//}
