
// modules setup:
require("dotenv").config()
const jwt = require("jsonwebtoken")  //session token
const marked = require("marked")
const sanitizeHTML = require("sanitize-html")
const bcrypt = require("bcrypt")  //passebcryption
const cookieParser = require("cookie-parser")
const express = require("express")
const db = require("better-sqlite3")("ourApp.db")
db.pragma("journal_mode = WAL")


// initial/main setup:

const app = express()

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());


app.get("/", (req, res) => {
  const context = {greeting: "hello",
                  user: "user1234",
                  url: "<a href=#>AAAA</a>"
  }
 
   res.render("homepage", {context})
})


app.post("/", (req, res) => {


  console.log(req.body.zzz)


   context = {greeting: "hello",
    user: "user1234",
    url: `<a href=#>${req.body.zzz}</a>`
}
 
   res.render("homepage", {context})
})


app.get('/login', (req, res) => { 

  context = {}

  res.render("login", {context})
  
});

app.post('/login', (req, res) => { 
  
});

app.get('/register', (req, res) => { 

  context = {}

  res.render("register", {context})
  
});


app.post('/register', (req, res) => { 
  
});


app.get('/posts', (req, res) => { 

  context = {greeting: "hello",
    user: "user1234",
    url: `<a href=#>${req.body.zzz}</a>`
}

  res.render("posts", {context})
  
});









app.listen(3000)
