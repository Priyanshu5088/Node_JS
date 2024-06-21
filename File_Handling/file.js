const { constants } = require("buffer");
const { log } = require("console");
const fs = require("fs");


//Sync - Synchronous
//fs.writeFileSync("./test.txt", "eee saalaa cup namde");

//Asynchrnous
//fs.writeFileSync("./test.txt", "eee saalaa cup namdu");'


//Difference:-

//Synchronous (Blocking Request or Operation):-
//const result = fs.readFileSync("./contacts.txt", "utf-8")
//console.log(result);

//Asynchronous(Non-Blocking Request or Operation):-
//fs.readFileSync("./contacts.txt", "utf-8", (err, result) =>{
//    if(err){
//        console.log("Error",err)
//    }else{
//        console.log(result);
//    }
//})

//More function :-
//fs.appendFileSync("./test.txt", `Hey There\n`)

//copy file
//fs.cpSync("./test.txt", "./copy.txt");

//delete file
//fs.unlinkSync("./copy.txt");

//stats
//console.log(fs.statSync("./test.txt"));