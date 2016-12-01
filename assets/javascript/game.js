// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================
var placeholder = "-";
var doExit = "false";
var audio = new Audio("../images/alert.mp3");

//OBJECT
//===================================================================================================
var Hangman = {
	guessesLeft: 0,
	wins: 0,
    lettersGuessed: [],
    arrayOfChar: [],
    words: ["alabama","alaska","arizona","arkansas","california","colorado","delaware","kansas","iowa","missouri","montana"],
    wordToBeGuessed: "",
    wordLength: 0,
    guessDisplay: "",
    arrayOfDashes: [],

    //Updates all variables on the screen
    updateStats: function(){
		document.getElementById("guessLeft").innerHTML = this.guessesLeft;
		document.getElementById("wordLen").innerHTML = this.wordLength;
		document.getElementById("lettersGuessed").innerHTML = this.lettersGuessed;
		document.getElementById("wins").innerHTML = this.wins;
/*    for(i=0; i<this.arrayOfDashes.length;i++){
    console.log(this.arrayOfDashes[i]);
    }*/
		document.getElementById("word").innerHTML = this.arrayOfDashes.join("  ");
	 },

    //clear all variables at the beginning of the game
    //show new word to user with dashes
    clearVal: function(){
    	
    	//arrayOfChar = ["1","2"];
    	this.wordToBeGuessed = "";
    	this.guessesLeft = 0;
    	this.guessDisplay = "";
    	var dashesArray = [];
    	var newGuessesArray = [];
    	this.lettersGuessed = newGuessesArray;

    	//get random word to be guessed
    	var ranIndex = randomIndexGenerator(this.words.length);
    	this.wordToBeGuessed = this.words[ranIndex];
    	console.log(this.wordToBeGuessed);

    	//split word to be guessed into an array
    	this.arrayOfChar = this.wordToBeGuessed.split("");
		  console.log(this.arrayOfChar);
		  this.wordLength = this.arrayOfChar.length;

		  //calculate user guesses
		  this.guessesLeft = this.wordLength * 2;
		  //lettersGuessed = new Array(this.guessesLeft).fill(" ");

		  //Show word to user as blanks
		  for (var i = 0; i < this.wordLength; i++) {
   			dashesArray[i] = placeholder;
    	}
    	this.arrayOfDashes = dashesArray;

    	//update all fields to user
    	this.updateStats();
    },

	wordGuessed: function(){
		if (this.arrayOfDashes.indexOf(placeholder) === -1) {
				this.wins++;
        audio.play();
				return true;
		}else{
			return false;
		}
	},

	guess: function(ch){
		if(this.arrayOfChar.indexOf(ch) === -1){
			 		this.guessesLeft--;
			 		console.log(this.guessesLeft);
		}
		else{
				for (var i = 0; i< this.wordLength; i++) {
				 	if (this.arrayOfChar[i] === ch) {
				 		this.arrayOfDashes[i] = ch;
				 	}
				}
		}

		//Update the lettersGuessed array
		this.updLettersGuessed(ch);
	},

	updLettersGuessed: function(chr){
		if(this.lettersGuessed.indexOf(chr) === -1){
				 this.lettersGuessed.push(chr);
		}
	}
    
};

// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// ==================================================================================================
//Generates a random index using math.random function, for an array length
function randomIndexGenerator(length){
	var randomIndex = Math.floor(Math.random() * length);
	console.log(randomIndex);
	return randomIndex;
}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

//when user presses space bar, initialize the Game screen
document.addEventListener("keydown", function(event) {
  if (event.which === 32) {
  	Hangman.clearVal();
  }
});

//Plays hangman 
document.addEventListener("keypress", function(event) {
      var letter = String.fromCharCode(event.which).toLowerCase();
      console.log(letter);

      //call method guess() passing the letter pressed as argument
      Hangman.guess(letter);

      //Update screen
      console.log("hello");
      console.log(Hangman.arrayOfDashes.toString());
      Hangman.updateStats();

      //if word has been guessed or guessesLeft is zero, display a 
      //message and start a new game
      if (Hangman.guessesLeft <= 0) {
      	alert("You lose!!. Better luck next time. The word is " + Hangman.wordToBeGuessed);
      	Hangman.clearVal();
      }
      
      //Check if word has been guessed
      var isGuessCorrect = Hangman.wordGuessed();
      if(isGuessCorrect){
        audio.play();
        //document.getElementById("msg").innerHTML = "Good Job!"
      	alert("Good job! Try the next one");
      	Hangman.clearVal();
      }

});