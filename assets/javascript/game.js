// Set Global Variables
var wins = 0;
var losses = 0;
var numberStorage = 0;


// Set initial randomized game values
function initializeGame(){
	// RandomNumber is between 120 and 19
	randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	console.log(randomNumber);

	// Crystals are between 1-12
	crystNumberRed = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	console.log(crystNumberRed);
	crystNumberBlue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	console.log(crystNumberBlue);
	crystNumberBlack = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	console.log(crystNumberBlack);
	crystNumberGreen = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	console.log(crystNumberGreen);
	
	// Pre-Set The User Stats
	$("#wins").html(" " + wins); 
	$("#losses").html(" " + losses); 
	$("#randomNumber").html("The random number to match is: " + randomNumber);
}
initializeGame();

// Run a function for winning and losing
function gameRules(){
	if (randomNumber === numberStorage){
		wins++;
		alert('You Win! Nice Work.');
		$("#wins").html(" " + wins);
		$("#numberStorage").empty(); // reset NumberStorage
		$("#numberStorage").html("Your score is: 0"); // Placeholder
		numberStorage = 0;
		initializeGame(); // reset initial randomized game values
	
	} else if (randomNumber < numberStorage){
		losses++;
		alert('Oops... You Went Over. Try Again!');
		$("#losses").html(" " + losses);
		$("#numberStorage").empty(); // reset NumberStorage
		$("#numberStorage").html("Your score is: 0"); // Placeholder
		numberStorage = 0;
		initializeGame(); // reset initial randomized game values
	}
};
gameRules();


// Create on-click functions for each crystal
$("#crystalOne").on("click",function(){
	numberStorage += crystNumberRed; // Add crystal's value to user's score
	$('#numberStorage').html("Your score is: " + numberStorage);
	gameRules(); // Call back on gameRules after the click to check if you win or lose
});

$("#crystalTwo").on("click",function(){
	numberStorage += crystNumberBlue; // Add crystal's value to user's score
	$('#numberStorage').html("Your score is: " + numberStorage);
	gameRules(); // Call back on gameRules after the click to check if you win or lose
});

$("#crystalThree").on("click",function(){
	numberStorage += crystNumberBlack; // Add crystal's value to user's score
	$('#numberStorage').html("Your score is: " + numberStorage);
	gameRules(); // Call back on gameRules after the click to check if you win or lose
});

$("#crystalFour").on("click",function(){
	numberStorage += crystNumberGreen; // Add crystal's value to user's score
	$('#numberStorage').html("Your score is: " + numberStorage);
	gameRules(); // Call back on gameRules after the click to check if you win or lose
});



