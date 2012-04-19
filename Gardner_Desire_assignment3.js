alert("JavaScript works!");

//Desire Revon
//Date Night: Assignment 3
//Revealing Module Pattern
//Date Night 2: Surprise Engagement (One year later)
//The story in Davids perspective. 




// Global variables------------------------------------------------------------
var myfiance = "Desire";
costPerPlate = 5;
ringLocation = new Array("pocket", "coat", "car");
timeToPropose = true;
guestCar = {
	  type: "Limo",
	 color: "white",
	   gas: true,
	  make: ["Benz", "Cadillac", "Lexus"],
	 doors: 3,
	driver: "John",
//Getter and Accessor
	getColor: function(){
		this.color = color;
	},
//Setter and Mutator
    setColor: function(newColor){
    this.color = newColor;
    return newColor; 
    },
//Method Function 
    pumpGas: function(gasType){
    var gasType;
    return "The driver had to get " + gasType + " gas.";
    },

//Method Procedure
   driveTo: function () {  
		console.log("The car should pick us up in ten minutes.")
	},
	   address: {
		street: 1234,
		  city: "San Antonio"
	}
};

//JSON DATA As AN ARRAY------------------------------------------------------     
var json = {
	"waiters": [{
		"table": 123,
		"name": "Chris",
		"job": "champagne"
	}, {
		"table": 456,
		"name": "Linda",
		"job": "food"
	}, {
		"table": 789,
		"name": "Tracy",
		"job": "dessert"
	}

	]

};

//Object: JSON---------------------------------------------------------------
var handleData = function (json) {
		for (var i = 0; i < json.waiters.length; i++) {
			var waiter = json.waiters[i];
			console.log("When the waiter " + waiter.name + " brings the " + waiter.job + " to table " + waiter.table + " we will all make a toast!");
		};
	};

//Procedure-------------------------------------------------------------------
//Propose.
var proposeTo = function (fiance) {
		if (fiance === true) {

			console.log("Now that we have made a toast I have something to say to Desire, Will you marry me Desire'?!");
			if (fiance = true) {
				console.log("She said yes!!! Now it's time for the after party!");
			}

		} else {

			console.log("I can't propose until she is sitting down.");
		};
	};

//Boolean Function----------------------------------------------------------
// Are all the guests present and seated?
var seatGuests = function (checkList, callGuests) {
		var seatGuests = checkList || callGuests;
		if (seatGuests === true) {
			guestsPresent = true;
			console.log("Everyone is seated it's almost time for me to propose. I'm a little nervous.");

		} else {
			guestsPresent = false;
			console.log(" A few guests called and said they are running a few minutes late, but are ten minutes away.");
		};
		return guestsPresent
	};


//Array Function-----------------------------------------------------------
// Where is the ring?
var findRing = function (location) {
		var davidsVariable = "";
		for (var i = 0; i < location.length - 1; i++) {
			davidsVariable += "my " + location[i] + ", ";
		};
		davidsVariable += "or my " + location[i];
		console.log("OMG!  Where is the ring?  Is it in " + davidsVariable + "?");
		return "I found the ring it was in my " + location[i] + ".";

	};


//Number Function----------------------------------------------------------
// Cost for each dinner plate.
var buyPlate = function (qtyPlate) {
		var costPerPlate = 5;
		var qtyPlate = 1;
		var totalCost = 0;
		var i = 0;

		// I woould like to repeat the cost per plat but also say how many plates. How would I do this?
		while (i < 1) {
			totalCost += qtyPlate * costPerPlate;
			console.log("The cost for one plate is " + totalCost + " dollars.");
			i++;

		}
		return "The total tab per person will be " + totalCost + " dollars.";
	};

//String Function---------------------------------------------------------
//My fiance. 
var fiance = function (age, name) {

		var age = 25;
		var name = "Desire";
		var convo = "I cant wait to marry " + name + "! " + "She is also turning " + age + " it's her birthday too! I wonder how much the dinner plates cost?!";
		return convo;
	};

//Property Object Function------------------------------------------------
//Which car will pick us up from the Olive Garden? 
//This is where I am lost?
var limoMake = function (makeCar) {
		if (makeCar === "Benz") {
			console.log("She is going to be so excited when the stretch Benz pulls up!");
		if (makeCar === "Lexus") 
			console.log("I don't think she would mind driving in a Lexus.")

		} else {
			console.log("They brought the wrong car I did not ask for a Cadillac!");

			return makeCar;
		};
	};




//Outputs-----------------------------------------------------------------
var guestsPresent = seatGuests(true, true);
console.log(findRing(ringLocation));
console.log(fiance());
console.log(buyPlate());
handleData(json);
(proposeTo(true));
(limoMake("Benz"));

myvar = guestCar.driver;
console.log("The driver " + myvar + " may be running a few minutes late because he stopped to get gas.");
console.log(guestCar.pumpGas("regular"));
guestCar.driveTo();
carVar = "The car is " + guestCar.color + " so it shouldn't be hard to find.";
console.log(carVar);
var whatColor = guestCar.setColor("black"); 
console.log("I hope the car is not " + whatColor + ".");