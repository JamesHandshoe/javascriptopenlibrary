//for loops

var name = "James Handshoe";

//print my name 5 times
for(i=0; i<5; i++){
	console.log(name);
}

//print my name letter by letter forwards

for (i=0; i<(name.length); i++){
	console.log(name[i]);
}

//use a for loop to print a string backwards

for(i=name.length; i>-1; i -= 1){
	console.log(name[i]);
}

//use for to loop through an array

var names = ["mike", "joey", "paul", "james", "ryan"];
for(var name in names){
	console.log(names[name]);
}
