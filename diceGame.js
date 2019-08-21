
function startGame(){         //master function
	let displayName = prompt("Player1 please enter your name");
	let fourSidedResult = doFourSidedTurn(); 
	let twelveSidedResult = doTwelveSidedTurn(); 
	let twentySidedResult = doTwentySidedTurn(); 
	let sixSidedResult = doSixSidedTurn(); 
	let tenSidedResult = doTenSidedTurnClueRoll(); 
	let eightSidedResult = doEightSidedTurn(); 
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
	let twentySidedDie = ['spot 1', 'spot 2', 'spot 3', 'spot 4', 'spot 5', 'spot 6', 'spot 7', 'spot 8', 'spot 9', 'spot 10', 'spot 11', 'spot 12', 'spot 13', 'spot 14', 'spot 15', 'spot 16', 'spot 17', 'spot 18', 'spot 19', 'spot 20'];
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

function doTenSidedTurnClueRoll(){
	let tenSidedDie = ['purple shirt ', 'black boots ', 'black jean pants ', 'brown hair ', 'grey eyes ', '' ];
}

function doEightSidedTurn(){
	let eightSidedDie = [""];
}

startGame();



