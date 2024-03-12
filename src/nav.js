const express = require("express");
const app = express();

app.get("/",(req,res)=>{

    // res.send("Welcome to my home page")

    // for sending the htmlcode

    res.write("<h1>Welcome to my home page</h2>");
    res.write("<h1>Welcome to my again home page</h2>");
    res.send();


})

app.get("/about",(req,res)=>{

    res.send("Welcome to my about page")
})

app.get("/contact",(req,res)=>{

    res.send("Welcome to my contact page")
})

// app.get("/temp",(req,res)=>{
//     res.send([
//         {
//             id:1,
//             name:"mahadev",
//         },
//         {
//             id:2,
//             name:"niraj",
//         },
//         {
//             id:3,
//             name:"lavyanya",
//         },
//         {
//             id:3,
//             name:"tulika",
//         },

//     ]);
// })

app.get("/temp",(req,res)=>{
    res.json([
        {
            id:1,
            name:"mahadev",
        },
        {
            id:2,
            name:"niraj",
        },
        {
            id:3,
            name:"lavyanya",
        },
        {
            id:3,
            name:"tulika",
        },

    ]);
})

app.listen(4000,()=>{
    console.log("listening the port at 4000");
})