alert("JavaScript works!");

/*
//Desire Revon
//Project 2
//Story 2 
*/

//Set Variables
var bartender = "Gia";
var costPerDrink = 14;
var drinkChoice = new Array("cucumber martinis", "victoria secret martinis", "cotton candy martinis");

//Procedure
//Find bartender.
var reachBar = function (bartender) {
		if (bartender === true) {

			console.log("There is our bartender now we can order drinks!");

		} else {

			console.log("Our bartender must be at another bar tonight!");

		};
	};

//Boolean Function.
//We need to get the bartender's attention so we can order drinks.
var getAttention = function (callName, waveHand) {
		var getAttention = callName || waveHand;
		if (getAttention === true) {
			orderDrinks = true;
			console.log("Hey guys, what would you like to drink?!");

		} else {
			orderDrinks = false;
			console.log("I have no idea where are bartender is maybe we are on the wrong side.");
		};
		return orderDrinks
	};


//Array Function 
// The drinks were so good so decided to get another round, but what flavor?
var pickDrink = function (numDrinks, flavors) {
		var numDrinks;
		for (var i = 0; i < flavors.length; i++) {

			console.log("I think I will have " + numDrinks + " " + flavors[i] + "! \n");

		};

		return flavors;

	};


//Number Function
// We ordered our drinks and now we need to pay.
var buyDrink = function (qtyDrink) {
		var costPerDrink = 14;
		var qtyDrink;
		var totalCost = 0;
		var i = 0;


		while (i < 3) {
			totalCost += qtyDrink * costPerDrink;
			console.log("The total cost for the drinks is $" + totalCost + " dollars.");
			i++;
		}

		return totalCost;

	};


//String Function
// After getting our drinks we decided to chat with the bartender her name is Gia.
var bartenderInfo = function (position, name) {

		var position = "I am the lead bartender!";
		var name = " My name is Gia.";
		var convo = "Are you the manager" + "? " + position + " What is your name" + "? " + name;
		return convo;
	};


//Outputs
var orderDrinks = getAttention(true, true);
console.log(pickDrink(2, drinkChoice));
console.log(buyDrink(2));
console.log(bartenderInfo());