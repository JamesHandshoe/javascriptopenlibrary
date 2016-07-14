//looping through arrays

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//loop through and console log number in numbers
for(var num in numbers){
	console.log(numbers[num]);
}

//loop through and print even or odd
for(var num in numbers){
	if(numbers[num]%2===0){
		console.log("Even Number");
	} else{
		console.log("Odd Number");
	}
}

//loop through and console log this:
//divisable by 2 - fizz
//divisable by 3 - buzz
//divisable by 5 - fizz buzz
//if not these console log the number

for(var num in numbers){
	if((numbers[num]%2===0) && !(numbers[num]%5===0)){
		console.log("fizz");
	} else if ((numbers[num]%3===0) && !(numbers[num]%5===0)){
		console.log("buzz");
	} else if (numbers[num]%5===0){
		console.log("fizz buzz");
	} else {
		console.log(numbers[num]);
	}
}