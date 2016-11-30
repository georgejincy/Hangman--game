// VARIABLES
// ==============================================================================

var placeholder = "-";
var guessesLeft = 0;
var wordArray = [];
var lettersGuessed = [];
/*var arrayofChars = [];
var userTries = 0;*/
var letter = "";
var doExit = false;
var wordToGuess = [];
var wordLength = 0;
document.getElementById("word").innerHTML = "Press Spacebar to start game";
// words array contains a list of words for user to guess.If
// you need to add a new word to the array use .push function
var words = [];

// Assigning words to the array
words[0] = "budgie";
words[1] = "dog";
words[2] = "iguana";

// OBJECT
// ==============================================================================
var Player = {
        wins: 0,
        /*guessesLeft: 0,
        lettersGuessed: [],*/
        /*wordToGuess: [],
        userTries: 0,
        wordLength: 0,*/

        /*// Calls randomWordgenerator function which returns a random word
        getWordToGuess: function() {
        	this.wordToGuess= randomWordGenerator();
        	console.log()
        },

        //Splits the word into an array
        splitWordToGuess: function(){
        	arrayofChars = this.wordToGuess.split("");
        	console.log(arrayofChars);
        },

        //Calculate number of guesses for the player and word length
        calcUserGuess: function(){
        	this.wordLength = arrayofChars.length;
        	this.guessesLeft = this.wordLength * 2;
        }
*/
        };

// FUNCTIONS
// ==============================================================================

//Generates a random word using math.random function
function randomWordGenerator(){
	var randomWord = words[Math.floor(Math.random() * words.length)];
	console.log(randomWord);
	return randomWord;
}

function initVariables(){
	
    guessesLeft = 0;
    var newArray1 = [];
    lettersGuessed = newArray1;
    var newArray2 = [];
    wordArray = newArray2;   
    console.log(lettersGuessed);
}

// Calls randomWordgenerator function which returns a random word
function getWordToGuess() {
    wordToGuess = randomWordGenerator();
    console.log(wordToGuess);
}

//Splits the word into an array
function splitWordToGuess(){
arrayofChars = wordToGuess.split("");
console.log(arrayofChars);
}

//Calculate number of guesses for the player and word length
function calcUserGuess(){
    wordLength = arrayofChars.length;
    guessesLeft = wordLength * 2;
}


//Initialises word to show dashes on screen and changes Play button to Exit button
function startNewGame(){

	//initialise variables
	initVariables();

   	//Gets random word and splits word to an array
   	getWordToGuess();
   	splitWordToGuess();

   	//Calculate word length and user Guesses
   	calcUserGuess();

   	//Replace word array with placeholder
    for (var i = 0; i < wordLength; i++) {
   		wordArray[i] = placeholder;
    }

    //Display the word array on screen
    console.log(wordArray);
    document.getElementById("word").innerHTML = wordArray.join("  ");

    //Updates stats screen
   	updateStats();
}

//Update stats to screen
function updateStats(){
	document.getElementById("guessLeft").innerHTML = guessesLeft;
	document.getElementById("wordLen").innerHTML = wordLength;
	document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
	document.getElementById("wins").innerHTML = Player.wins;
	document.getElementById("word").innerHTML = wordArray.join("  ");
}

// MAIN PROCESS
// ==============================================================================

//Updates stats screen
updateStats();

//when user presses space bar, initialize the Game screen
document.addEventListener("keydown", function(event) {
  console.log(event.which);
  if (event.which === 32) {
  	startNewGame();
  }
});

// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function(event) {

/*	//Run the game while Exit button is not pressed
	while(doExit === false){*/

			// Captures the key press, converts it to lowercase, and saves it to a variable.
			 letter = String.fromCharCode(event.keyCode).toLowerCase();

			if(arrayofChars.indexOf(letter) === -1){
			 		guessesLeft--;
			}
			else{
				 for (var i = 0; i< wordLength; i++) {
				 	if (arrayofChars[i] === letter) {
				 		wordArray[i] = letter;
				 	}
				 }
			}

			//Update the letters guessed array only if letter is not already present
			if(lettersGuessed.indexOf(letter) === -1){
				 lettersGuessed.push(letter);
			}

			//increment wins if word guessed correctly and load new game
			if (wordArray.indexOf(placeholder) === -1) {
				Player.wins++;
				startNewGame();
			}
			updateStats();

			if(guessesLeft<0){
			 	alert("Better luck next time");
			 	startNewGame();
			}

	/*}//end of while*/
} //end of document.onkeyup









