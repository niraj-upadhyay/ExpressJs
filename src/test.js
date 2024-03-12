const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

// console.log(__dirname);

// const staticPath = path.join(__dirname,"../public");


// +++++++++

// Specify the path to the views directory
// const viewsPath = path.join(__dirname, "../views");

const templatePath = path.join(__dirname, "../template");

// Set the view engine and views directory
app.set("view engine", "hbs");
// to set the view engine
app.set("views", templatePath);

console.log(templatePath);

// +++++++++


// app.use(express.static(staticPath));
// console.log(staticPath);

// template engine route

app.get("/", (req, res) => {
    res.render('index',{
        Name : "Niraj",
    });
});

app.get("/about", (req, res) => {
    res.render('about');
});


app.get("/",(req,res)=>{
    res.send("hello from the express")
});

app.get("/about",(req,res)=>{
    res.send("About from the express")
});

app.listen(4000,()=>{
    console.log("listing the port at 4000")
})


// Note :- Node js me dynamic data add karna rahta hai to hum templete engine ka use karte hai