// Set Global Variables
var wins = 0;
var losses = 0;
var numberStorage = 0;


// Set initial randomized game values
function initializeGame(){
	randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	console.log(randomNumber);
	crystNumberRed = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	console.log(crystNumberRed);
	crystNumberBlue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	console.log(crystNumberBlue);
	crystNumberBlack = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	console.log(crystNumberBlack);
	crystNumberGreen = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	console.log(crystNumberGreen);
	$("#wins").html(" " + wins); 
	$("#losses").html(" " + losses); 
	$("#randomNumber").html("The random number to match is: " + randomNumber);
}
initializeGame();

function gameRules(){
	if (randomNumber === numberStorage){
		wins++;
		alert('You Win! Nice Work.');
		$("#wins").html(" " + wins);
		$("#numberStorage").empty();
		$("#numberStorage").html("Your score is: 0");
		numberStorage = 0;
		initializeGame();
	
	} else if (randomNumber < numberStorage){
		losses++;
		alert('Oops... You Went Over. Try Again!');
		$("#losses").html(" " + losses);
		$("#numberStorage").empty();
		$("#numberStorage").html("Your score is: 0");
		numberStorage = 0
		initializeGame();
	}
};
gameRules();

$("#crystalOne").on("click",function(){
	numberStorage += crystNumberRed;
	$('#numberStorage').html("Your score is: " + numberStorage);
	gameRules();
});

$("#crystalTwo").on("click",function(){
	numberStorage += crystNumberBlue;
	$('#numberStorage').html("Your score is: " + numberStorage);
	gameRules();
});

$("#crystalThree").on("click",function(){
	numberStorage += crystNumberBlack;
	$('#numberStorage').html("Your score is: " + numberStorage);
	gameRules();
});

$("#crystalFour").on("click",function(){
	numberStorage += crystNumberGreen;
	$('#numberStorage').html("Your score is: " + numberStorage);
	gameRules();
});



