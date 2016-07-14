//strings and string manipulation

var name = "James Handshoe";
console.log(name);

//manipulate casing
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name[0].toLowerCase());

//splitting strins
var email = "jhandshoe@sbcglobal.net";

var checkEmail = email.split("@")
console.log(checkEmail[1]);

//simple idea to split emails and count them
//this could be used to iterate through a list of emails
var count = 0;
if(checkEmail[1] === "sbcglobal.net"){
	count ++;
}

console.log(count);

