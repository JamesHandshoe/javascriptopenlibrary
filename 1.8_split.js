//the split function allows you to split strings on a certain character

var emails = ["jhandshoe@sbcglobal.net", "jennyhandshoe@sbcglobal.net", "paul@hotmail.com", "matt@att.com", "joey@hotmail.com", "evan@gmail.com", "james@gmail.com"];
var extensions = [];
for (var email in emails){
	//console.log(emails[email]);
	emailExt = emails[email].split('@');
	console.log(emailExt);
	extensions.push(emailExt[1]);
}

console.log(extensions);
//now we can take the extensions array and count the instances of entries
var extCount = extensions.reduce(function(prev, cur){
	prev[cur] = (prev[cur] || 0) + 1;
	return prev;
}, {});

console.log(extCount);