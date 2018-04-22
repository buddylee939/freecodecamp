// dealer and a player

// deal 2 cards each
// based on the rules the player either stands or hits
// player plays 3 rounds then collects the money
// player has a starting account

var deckOfCards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
var dealer = '';
var player = '';

var dealerCards = [];
var playerCards = [];
function pickCard(num){
	return deckOfCards[num];
}

function randomNumber(){
	var randomNumber = Math.floor( Math.random() * deckOfCards.length);	
	return pickCard(randomNumber);
}

var i = 0;
while (i < 2){
	playerCards.push(randomNumber());
	dealerCards.push(randomNumber());
	i++;
}

var x=0;
var dealerSum = 0;
var cardValue = 0;
while (x < dealerCards.length){
	switch (dealerCards[x]){
		case "A":
			cardValue = 11;
			break;
		case "J":
		case "Q":
		case "K":
			cardValue = 10;
			break;	
		default:
			cardValue = dealerCards[x];		
	}	
	dealerSum += cardValue;
	x++;
}

var y=0;
var playerSum = 0;
cardValue = 0;
while (y < playerCards.length){
	switch (playerCards[y]){
		case "A":
			cardValue = 11;
			break;
		case "J":
		case "Q":
		case "K":
			cardValue = 10;
			break;	
		default:
			cardValue = playerCards[y];		
	}
	playerSum += cardValue;
	y++;
}


document.getElementById("dealer").innerText = dealerSum;
console.log(dealerCards);
document.getElementById("player").innerText = playerSum;
console.log(playerCards);


/*
****process for one hand****

player gets one card
dealer gets on card face down
player gets second card
dealer gets second card face up
check to see if dealer has 21; if so hand ends, player loses

if not
player sees what the face up card is, if it is 2 to 6 player stays
	dealer test to see if they have 17 or over, if so stays if not keeps getting cards until between 17 and 21

if dealer face card has a 7 or higher, player hits until between 17 and 21

I have to see the rule if the dealer face card is an A
*/