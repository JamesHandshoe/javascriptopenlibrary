//conditionals

var score = -9;

if(score === 100){
	console.log("solid try to score more");
}else if(score < 100 && score > 0){
	console.log("yo score more points");
}else if(score > 100 && score < 200){
	console.log("yeah now you're getting some points");
}else if(score < 0){
	console.log("invalid score...try again");
}else{
	console.log("wow that's a monster score!");
}
