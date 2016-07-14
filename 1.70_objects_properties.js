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
for(episode in tvShows.seasonInfo.episodes){
	console.log(tvShows.seasonInfo.episodes[episode].episodeName);
}