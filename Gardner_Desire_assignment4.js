alert("JavaScript works!");

//Desire Revon
//Project 4 
//Code Library 

var desLibrary = function(){

//My Variables-------------------------------------------------------------
//var phoneNumber 
//var emailAddress
//var url 
//var title
//var strSeperator 
//var numToDecimal 
//var percent
//var numDays 
//var value 
//var smallValue
//var totalValue
//var sortArray 


//String Function-------------------------------------------------------------
//Does a string follow a 123-456-7890 pattern like a phone number?
var verifyNum = function(number){
   var regEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
   // ^ Matches the beginning of a line.
   // \ ? Creates the parenthesis around the area code.
   // [0-9] This states that the numbers can be ANY numbers between 0 and 9.
   // {3} This tells Javascript that there will be ONLY three numbers within the parenthesis.
   //[-. ] This tells javascript what type of seperators are being used. 
   // $ Show the end of the line.
     if (regEx.test(number)) {
      var verify = "This is a valid phone number";
     
     }else{
      var verify = "This number is invalid"

	return verify;
}; 

}; 

//Does a string follow an aaa@bbb.ccc pattern like an email address?




//Is the string a URL? (Does it start with http: or https:?)
//Title-case a string (split into words, then uppercase the first letter of each word)
//Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
//Fuzzy-match a number: is the number above or below a number within a certain percent?
//Find the number of hours or days difference between two dates.
//Given a string version of a number such as "42", return the value as an actual Number, such as 42.
//Find the smallest value in an array that is greater than a given number
//Find the total value of just the numbers in an array, even if some of the items are not numbers.
//Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].

};