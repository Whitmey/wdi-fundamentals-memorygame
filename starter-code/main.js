var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


if (cardTwo === cardFour) {
	alert ("You found a match");
}
else {
	alert ("Sorry, try again");
}




var cards = ["king", "king", "queen", "queen"];
var cardsInPlay = []

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("div");
		cardElement.className = "card";
		gameBoard.appendChild(cardElement);
		cardElement.setAttribute("data-card", cards[i]);
		cardElement.addEventListener("click", isTwoCards);
	}
}

function isTwoCards() {
	for (var i=0; i<cards.length; i++) {
		cardElement.addEventListener('click', isTwoCards)
		// Put images of Queen and King in cardElement inner html
     }
}

function isMatch() {
	if (cards[0] === cards[1]) {
		alert("You found a match");
	}
		else if (cards[2] === cards[3]) {
			alert ("You found a match");
		}
		else if (card[0] === card[3]) {
			alert("No match");
		}
		else {
			alert("Sorry, try again");
		}
	}
	cards.innerHTML = "null";
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

createBoard();