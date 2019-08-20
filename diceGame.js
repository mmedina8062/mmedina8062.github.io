//roll the fourSidedDie, if answered question before time runs out, then roll the sixSidedDie to move player piece, if not answered correctly roll the "killer player dice"
function startGame(){         //master function
	let displayName = prompt("Player1 please enter your name");
	let fourSidedResult = doFourSidedTurn(); //"draw from the "I Spy" deck, "draw from the "Mystery Riddle" deck, draw from the "Get a Clue" deck, "draw from the "Pictionary" deck
	let twelveSidedResult = doTwelveSidedTurn(); 
	let sixSidedResult = doSixSidedTurn(); 
	let twentySidedResult = doTwentySidedTurn(); //this die will be rolled if player runs out of time to answer the card picked
	let tenSidedResult = doTenSidedTurn(); //put this die option on every other spot
	let eightSidedResult = doEightSidedTurn(); //put on every other spot alternating with the tenSidedDie
	return;
}

function rollDie(numberOfSides) {     //create a generic "rollDie" so that you can use the same function instead of creating a new one
	// generate and return random number
	let die = Math.floor(Math.random() * numberOfSides)	+1;
	console.log("The roll was: " + die)
	return die;
}

function doFourSidedTurn() {
	let fourSidedDie = ['I Spy', 'Mystery Riddle', 'Action', 'Pictionary'];
	let roll = rollDie(4)
	let result = fourSidedDie[roll];
	console.log("1=draw from I Spy deck, 2=draw from Mystery Riddle deck, 3=draw from Action deck, 4=draw from Pictionary deck");
	return result;
}

function doTwelveSidedTurn() {
	let twelveSidedDie = ['20 secs', '25 secs', '30 secs', '35 secs', '40 secs', '45 secs', '50 secs', '55 secs', '60 secs', '65 secs', '70 secs', '75 secs'];
	let roll = rollDie(12);
	let result = twelveSidedDie[roll];
	console.log("1=20 secs, 2=25 secs (add 5 secs to time as number of roll goes up, this is the amount of time you have to answer your drawed card. If answered within time frame roll 6sidedDie, if NOT roll 20sidedDie");
	return result;
}

function doSixSidedTurn(){
	let sixSidedDie = ['spot1', 'spot2', 'spot3', 'spot4', 'spot5', 'spot6', 'spot7', 'spot8', 'spot9', 'spot10'];
	let roll = rollDie(6);
	let result = sixSidedDie[roll];
	console.log("move your player the amount of spaces rolled");
	return result;

}

function doTwentySidedTurn(){
	let twentySidedDie = ["You've been injuried, your turn is skipped", "You've been caught, your turn skipped next 2 rounds", "second chance "];

}

function doTenSidedTurn(){
	let tenSidedDie = [""];
}

function doEightSidedTurn(){
	let eightSidedDie = [""];
}

startGame();



