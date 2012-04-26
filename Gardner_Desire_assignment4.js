alert("JavaScript works!");

//Desire Revon
//Project 4 
//Creating a code Library Using Module Pattern


//My Code Library 
var desLibrary = function(){

//String Functions-------------------------------------------------------------
//Does a string follow a 123-456-7890 pattern like a phone number?   
   var validatePhoneNum = function(number){
    var regEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // ^ Matches the beginning of a line(Search beginning).
    // \ ? Creates the parenthesis around the area code.
    // [0-9] This states that the numbers can be ANY numbers between 0 and 9.
    // {3}  Amount of numbers allowed in each parenthesis.
    //[-. ] This tells javascript what type of seperators are being used. 
    // $ Show the end of the line(Find end).
      if(regEx.test(number)) {
      var validate = "This is a valid phone number.";
     
     }else{
      var validate = "This number is invalid.";
  };
     return validate;
  }; 


//Does a string follow an aaa@bbb.ccc pattern like an email address?
var validateEmail = function(email){
    var regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    // ^ Matches the beginning of the line(Search beginning).
    //[a-zA-Z0-9._-] Must began with Lower/Upper case letters, numbers between 0-9, special Characters allowed.
    // +@ There must be an @ sign between the characters.
    // +\. Tells Java to add,escape and input a . between the last second and last characters within the brackets.
    // [a-zA-Z] Lower/Upper case letters ONLY allowed.
    //{2,4} Address will end with two or four characters. This gives the min/max anywhere between 2-4 letters. (example: .com, .org. etc)
      if (regEx.test(email)){
       var validate = "This is a valid email address.";
       
       }else{
       var validate = "This is not a valid email address."; 
    };
       return validate;
    };
 
//Is the string a URL? (Does it start with http: or https:?)
var validateUrl = function(url){
     var regEx = /^(http|https):\/\/[\w.\-]+\.[A-Za-z]{2,6}?/
     // ^ Marks the beginning of the expression line.
     // (http|https) This may include either http(s). | Allows room for additional protocols.
     // \/\/ escapes the forward slashes.
     // [\w.\-] Word, special characters allowed.
     // +\. Tells js that there will be a period between characters.
     //[A-Za-z] Upper/Lower case letters allowed.
     //[2,6] Url will end in 2-6 characters. This shows the min/max amount.
     	if(regEx.test(url)){
     	 var validate = "This is a valid url.";
     	 
     	 }else{
         var validate = "This is not an invalid url.";
    };
       return validate;
    };
    
//Number Functions--------------------------------------------------------------
//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
var getDecimal = function(number){
  var roundNum = number.toFixed(2);
  return roundNum;

};

//Find the number of hours or days difference between two dates.
var diffInDays = function(days){
  var d1 = new Date(2012,00,14); 
  var d2 = new Date(2012,00,20);
  var diffDays = d2-d1;
  var convertMs = diffDays/1000/60/60/24
  
 return convertMs; 
};

//Given a string version of a number such as "42", return the value as an actual Number, such as 42.
var valueOfString = function(string){
    var getValue = Number(string);
    return getValue;
};

 

//Array Functions---------------------------------------------------------------
//Find the smallest value in an array that is greater than a given number


//Returns-----------------------------------------------------------------------
    return{
	   "phone"  : validatePhoneNum,
	   "email"  : validateEmail,
	   "url"    : validateUrl,
	   "decimal": getDecimal,
	   "days"   : diffInDays,
	   "value"  : valueOfString
	   };
	   
};

//Outputs
var mylib = desLibrary();
console.log(mylib.phone("(210)-525-2324"));
console.log(mylib.email("desirerevon1@google.com"));
console.log(mylib.url("http://sdiworld.com"));
console.log(mylib.decimal(5.1));
console.log(mylib.days());
console.log(mylib.value("42"));

