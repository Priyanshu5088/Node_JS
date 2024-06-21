const fs = require("fs");

console.log("1");

//Blocking Operation:-
//const result = fs.readFileSync("./contacts.txt","utf-8");
//console.log(result);
//Ouput of Blocking:-
// 1
// Piyush Garg : +9111111111
// jOhn Garg : +922222222
// 2


//Non-Blocking Operation:-
fs.readFile("./contacts.txt","utf-8", (err,result)=>{
    console.log(result);
})
//Output of non-blocking:-
// 1
// 2
// Piyush Garg : +9111111111
// jOhn Garg : +922222222

console.log("2");
