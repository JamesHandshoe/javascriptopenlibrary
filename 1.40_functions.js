//functons

var add = function(num1, num2){
	return num1 + num2;
}
console.log(add(5,4));

var addMood = function(name, mood){
	console.log(name + " is " + mood);
}
addMood("james", "mad");

//functions using other functions

var interest = function(debt){
	return debt = debt * 1.15;
}

var debt = function(amount){
	console.log("You borrowed " + "$" + amount);
	unPaidDebt = interest(amount);
	console.log("If you don't pay on time you'll owe: " + "$" + unPaidDebt);
}

debt(100);

//modulo math within a function

var checkEven = function(num){
	if(num % 2 === 0){
		console.log("even number");
	}else{
		console.log("not even");
	}
}

checkEven(100);
checkEven(101);