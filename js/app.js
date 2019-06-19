"use strict";
var par = document.getElementsByClassName("deck");
/*
 * Create a list that holds all of your cards
 */
var chi = document.getElementsByClassName("card")
var chiList = [...chi];
let timer = 0;
var timerSection = document.getElementById("time");
var move = 0;
var storingCard = [];
var moverSection = document.getElementById("moves");
var starsNum = 3;
var starsArray = [...document.getElementsByClassName("fa-star")];
var time;
var sec = 0;
var min = 0;
var hrs = 0;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
window.onload = initializeGame();
/* function for initializeGame */
function initializeGame() {
	var manipulatedCards = shuffle(chiList);
	var i = 0;
	while (i < manipulatedCards.length) {
		par[0].append(manipulatedCards[i]);
		i++;
		console.log(manipulatedCards[i]);
		console.log(par);
	}
}
for (var i in chiList) {
	chiList[i].addEventListener("click", revealCard);
}
/* revealing card function*/
function revealCard() {
	if (timer == 0) {
		beginTimer();
		timer = timer + 1;
	}
	starsRating();
	this.classList.add("card", "disable");
	this.classList.add("open");
	this.classList.add("show");
	storingCard.push(this);
	if (storingCard.length == 2) {
		move = move + 1;
		moverSection.innerHTML = move;
		if (storingCard[0].children[0].classList.item(1) == storingCard[1].children[0].classList.item(1)) {
			storingCard[0].classList.add("match", "disable");
			storingCard[1].classList.add("match", "disable");
			console.log("matched");
			console.log(sameCards.length);
			if (sameCards.length == 16) {
				clearInterval(time);
				Swal.fire({
					title: "Congratulations!!",
					html: 'You have earned   ' + '<strong style="color:#0000e0">' + starsNum + '   <i class="fa fa-star"> </i> </strong> <br> And You finished the game in  <br>' + hrs + "  hours  :  " + min + "  minutes  :  " + sec + "  seconds",
					confirmButtonText: '<i class="fa fa-thumbs-up"></i> Restart',
				}).then(() => {
					document.location.reload();
				});
			}
			storingCard = [];
		} else {
			storingCard[0].classList.add("unmatch");
			storingCard[1].classList.add("unmatch");
			storingCard.map((item) => {
				setTimeout(() => {
					item.classList.remove("unmatch", "open", "show", "disable");
				}, 250);
			})
			storingCard = [];
			console.log("unmatched");
		}
	}
}
var sameCards = document.getElementsByClassName("match");
//function for beginTimer
function beginTimer() {
	time = setInterval(() => {
		sec = sec + 1;
		if (sec == 60) {
			sec = 0;
			min = min + 1;
		}
		if (min == 60) {
			min = 0;
			hrs = hrs + 1;
		}
		timerSection.innerHTML = hrs + " : " + min + " : " + sec;
	}, 1000)
	if (sameCards.length == 16) {
		clearInteval(time);
	}
}
//Function for refreshing the Game
function revive() {
	document.location.reload();
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
/*function for starsRating*/
function starsRating() {
	if (move >= 14 && move < 18) {
		starsNum = 2;
		starsArray[2].style.display = "none";
	}
	if (move >= 21) {
		starsNum = 1;
		starsArray[1].style.display = "none";
	}
}
