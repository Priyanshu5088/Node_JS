const express = require("express");
const fs = require("fs")
const mongoose = require("mongoose");

const users = require("./MOCK_DATA.json");
const { type } = require("os");

const app = express();
const Port = 8000;

//Connecting Nodejs with MongoDB
mongoose
.connect("mongodb://127.0.0.1:27017/youtube-app-1")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("Mongo Err", err));

//Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    jobtitle:{
        type: String,
    },
    gender: {
        type: String,
    }
})

//Model
const User = mongoose.model("user", userSchema);

//Middleware - plugin
app.use(express.urlencoded({extended: false}));

app.use((req,res,next)=>{
    console.log("hey from middleware 1");
    next();
});


//Routes:-
//for browser users - html docs
app.get('/users', (req,res)=>{
    const html = `
    <ul>
    ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})

//for cross-platform users:-
//REST API-
//task 1 - list all users JSON
app.get('/api/users', (req,res)=>{
    return res.json(users);
})


//task 2 - get the user with id 2 
// colon(:) means the path is dynamic(we can enter any id during the execution of server)
app.get("/api/users/:id", (req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    return res.json(user);
});

//task 3 - create new user
app.post("/api/users", (req,res)=>{
    const body = req.body;
    users.push({...body, id:users.length + 1}); // pushing the json of body generated by json into users
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{
        return res.json({status: "success", id:users.length});
    });
});


// edit the user with id
app.patch("/api/users/:id", (req,res)=>{
    return res.json({status: "pending"});
});

// delete the user with id
app.delete("/api/users/:id", (req,res)=>{
    return res.json({status: "pending"});
});



app.listen(Port,()=>console.log(`Server started at port 8000`));