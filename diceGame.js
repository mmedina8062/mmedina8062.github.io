
function startGame(){         //master function
	let displayName = prompt("Player1 please enter your name");
	let fourSidedResult = doFourSidedTurn(); 
	let twelveSidedResult = doTwelveSidedTurn(); 
	let twentySidedResult = doTwentySidedTurn(); 
	let sixSidedResult = doSixSidedTurn(); 
	let tenSidedResult = doTenSidedTurnDescriptionClueDie(); 
	let eightSidedResult = doEightSidedTurnWeaponUsedClueDie();
	let endGameResult = solveTheMysteryWhoseTheKiller(); 
	return; 
}

function rollDie(numberOfSides) {     //create a generic "rollDie" so that you can use the same function instead of creating a new one
	// generate and return random number
	let die = Math.floor(Math.random() * numberOfSides)	+ 1;
	console.log("The roll was: " + die)
	return die;
}

function doFourSidedTurn() {
	let fourSidedDie = ['I Spy deck', 'Mystery Riddle deck', 'Action deck', 'Pictionary deck'];
	let roll = rollDie(4) - 1;
	let result = fourSidedDie[roll];
	console.log("Draw from " + result);
	return result;
}

function doTwelveSidedTurn() {
	let twelveSidedDie = ['OUCH!! You only have 20 secs', '25 secs', '30 secs', '35 secs', '40 secs', '45 secs', '50 secs', '55 secs', '60 secs', '65 secs', '70 secs', '75 secs'];
	let roll = rollDie(12) - 1;
	let result = twelveSidedDie[roll];
	console.log("You have" + " " + result + " " + "(if answered correctly within time roll 20 sided die, if NOT roll 6 sided die)");
	return result;
}

function doTwentySidedTurn(){
	let twentySidedDie = ['spot 1: "roll eightSidedDie"', 'spot 2: "roll tenSidedDie"', 'spot 3: "roll eightSidedDie"', 'spot 4: "roll tenSidedDie"', 'spot 5: "roll eightSidedDie"', 'spot 6: "roll tenSidedDie"', 'spot 7: "roll eightSidedDie"', 'spot 8: "roll tenSidedDie"', 'spot 9: "roll eightSidedDie"', 'spot 10: "roll tenSidedDie"', 'spot 11: "roll eightSidedDie"', 'spot 12: "roll tenSidedDie"', 'spot 13: "roll eightSidedDie"', 'spot 14: "roll tenSidedDie"', 'spot 15: "roll eightSidedDie"', 'spot 16: "roll tenSidedDie"', 'spot 17: "roll eightSidedDie"', 'spot 18: "roll tenSidedDie"', 'spot 19: "roll eightSidedDie"', 'spot 20: "roll tenSidedDie"'];
	let roll = rollDie(20) - 1;
	let result = twentySidedDie[roll];
	console.log("move to " + result);
	return result;

}

function doSixSidedTurn(){
	let sixSidedDie = ["You've been injuried your turn is skipped", "You've been caught & held hostage your turn is skipped next 2 rounds", "Bonus!!! Roll 20 sided die", "Go back 3 spaces", "Oh shucks go back to start", "Draw a Riddle card"];
	let roll = rollDie(6) - 1;  //need to subtract 1 because an array starts with 0 and to avoid undefines
	let result = sixSidedDie[roll];
	console.log(result);
	return result;
}

function doTenSidedTurnDescriptionClueDie(){
	let tenSidedDie = ['purple T-shirt', 'size 12 black boots', 'black jean pants', 'short brown hair', 'gray eyes', "height 6'5", 'spider tattoo on left wrist', 'goatee beard', 'left earring', 'male'];
	let roll = rollDie(10) - 1;
	let result = tenSidedDie[roll];
	console.log(result);
	return result;
}

function doEightSidedTurnWeaponUsedClueDie(){
	let eightSidedDie = ['metal', 'brown wooden handle', '15 inches long', 'razor sharp', 'red tassle', 'wide blade', 'lion symbol', 'curved'];
	let roll = rollDie(8) - 1;
	let result = eightSidedDie[roll];
	console.log(result);
	return result;
}

function solveTheMysteryWhoseTheKiller(){
	let weaponChoice = ["A. Machete", "B. Butcher knife", "C. Sword", "D. Gun", "E. Tire rod"];
	let playerWeaponChoiceAnswer = prompt("Type in which weapon the killer use");
	if(playerWeaponChoiceAnswer === 0){
		console.log("You got it");
	}
	else{
		console.log("Too bad that's the wrong answer");
	}
	let correctWeapon = weaponChoice[0];
	
	let killerOptions = ["A. Male 6'5, red hair, black shoes, dark navy pants, green eyes, violet shirt, beard, size 12 brown shoes", "B. male, 6'5, long brown hair, gray eyes, purple collar shirt, size 12 black boots", "c. male, 6'7, short brown hair, blue eyes, goatee beard, earrings both ears", "D. male, 6'5, gray eyes, short brown hair, goatee, left earring, spider tattoo left wrist"];
	let playerKillerPersonAnswer = prompt("Type in your option: Choose wisely...");
	if(playerKillerPersonAnswer === 3){
		console.log("YOU'RE A HERO!!! YOU CAUGHT THE KILLER");
	}
	else{
		console.log("WOMP, WOMP, WOMP...LOSER!!!! YOU GOT CAUGHT AND KILLED");
	}
	let correctKiller = killerOptions[3];
	
}

startGame();



