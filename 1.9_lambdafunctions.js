//lambda functions act like quick ways to define anonymous functions

var elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

//this creates an array of the length of each element string
var eles = elements.map(function(s){
	return s.length;
});
console.log(eles);

//same function but written in lambda

var eles2 = elements.map(s => s.length);
console.log(eles2);

