
const express = require("express");
const app = express ();
const PORT = process.env.PORT ||3000;
const path = require("path");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const friends =[{
    name: "Boris",
    photo:"https://www.tvovermind.com/wp-content/uploads/2017/07/Boris-Kodjoe-640x360.jpg",
    email:"boris@bemyfriend.com",
    id:"Big Bor",
    phoneNumber: "202-121-1250",
    scores: ["5","6", "5", "5", "4"]
},
{
    name: "Nicole",
    photo: "https://pbs.twimg.com/profile_images/522077042347483136/NeoXpqvT.jpeg",
    email:"nikki@bemyfriend.com",
    id:"Gorg Nikki",
    phoneNumber: "203-121-1250",
    scores: ["8","8", "8", "7", "7"]
},
{
    name: "Nigel",
    photo: "http://totallyhistory.com/wp-content/uploads/2013/06/nigel-barker-5.jpg",
    email:"nigel@bemyfriend.com",
    id:"Nice Nigel",
    phoneNumber: "206-121-1250",
    scores: ["6","5", "4", "7", "3"]
},
{
    name: "Jason",
    photo: "https://i.pinimg.com/originals/bb/61/4a/bb614a9ea42c10ba84fb13e665545534.jpg",
    email:"Jason@bemyfriend.com",
    id:"Buff Jay",
    phoneNumber: "202-121-5550",
    scores: ["2","5", "1", "5", "5"]
}];


//   making friends a dependency to be required in necessary files by exporting.
  module.exports =friends;