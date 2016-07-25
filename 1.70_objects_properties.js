//objects

var people = {
	//properties
	name	: "",
	city	: ""
};

var ryan = Object.create(people);
ryan.name = "Ryan";
ryan.city = "Fishers";

console.log(ryan);

var james = Object.create(people);
james.name = "James";
james.city = "Fishers";

console.log(james);

var folks = [ryan, james];
console.log(folks);

//objects with arrays inside

var tvShows = {
	//PROPERTIES
	showId			: 1,
	name 			: "James Land",
	description 	: "James land is a fantastic place of fun.",
	seasonInfo		: {
		seasonNumber	: 1,



		episodes 		: [
			{ episodeNumber: 1, episodeName: "Happy Stuff"},
			{ episodeNUmber: 2, episodeName: "The real happy story of James"},
			{ episodeNumber: 3, episodeName: "Even happier than before"}
		]
	},
};

//This section drills the data down so we can find it
// console.log(tvShows);
// console.log(tvShows.seasonInfo);
// console.log(tvShows.seasonInfo.episodes[0].episodeName);
for(var episode in tvShows.seasonInfo.episodes){
	console.log(tvShows.seasonInfo.episodes[episode].episodeName);
}

//object prototyping - reduces initialization time and memory consumption
//only modify personel objects not built in javascript ones

//create a person object

function Person(firstName, lastName, age, eyeColor, hairColor) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.eyeColor = eyeColor;
	this.hairColor = hairColor;
}

//create two instances of Person

var me = new Person("James", "Handshoe", 36, "dirty blond");
var wife = new Person("Jenny", "Handshoe", 35, "dirty blond");

//this allows you to add a new property to an existing object
me.language = "english";
console.log(me.language);
console.log(wife.language); //this is undefined because I only set the language for the instance of me

//this allows you to add a method to an existing object
me.sayHello = function() {
	return "Hello my name is " + this.firstName + " " + this.lastName;
};

//this method will then return 'hello my name is James Handshoe'
//again this will not work for wife because it hasn't been declared
console.log(me.sayHello());

//this portion will add properties to the prototype use the .prototype to change it
Person.prototype.nationality = "American";
console.log(me.nationality);
console.log(wife.nationality);

//you can also add methods using .prototype

Person.prototype.sayHello = function() {
	return "Hello my name is " + this.firstName + " " + this.lastName;
};

console.log(me.sayHello());
console.log(wife.sayHello());