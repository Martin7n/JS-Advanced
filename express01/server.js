
// modules setup:
require("dotenv").config()
const jwt = require("jsonwebtoken")  //session token
const marked = require("marked")
const sanitizeHTML = require("sanitize-html")
const bcrypt = require("bcrypt")  //passebcryption
const cookieParser = require("cookie-parser")
const express = require("express")
const { render } = require("ejs")
const db = require("better-sqlite3")("ourApp.db")

// const adminJs = require('./adminjsSetup'); 

db.pragma("journal_mode = WAL")


// initial/main setup:

const app = express()


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());
// app.use(adminJs.options.rootPath, adminJs.router);
// app.use(adminJs.options.rootPath, adminRouter);

// the disguisting middleware...
app.use(function (req, res, next) {
  
  res.locals.filterUserHTML = function (content) {
    return sanitizeHTML(marked.parse(content), {
      allowedTags: ["p", "br", "ul", "li", "ol", "strong", "bold", "i", "em", "h1", "h2", "h3", "h4", "h5", "h6"],
      allowedAttributes: {}
    })
  }

  res.locals.errors = []

  // try to decode incoming cookie
  try {
    const decoded = jwt.verify(req.cookies.express01, process.env.JWTSECRET)
    req.user = decoded
  } catch (err) {
    req.user = false
  }

  res.locals.user = req.user
  console.log(req.user)

  next()
})


//DB setup

const createTables = db.transaction(()=>{
      db.prepare(`
        CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username STRING NOT NULL UNIQUE,
        password STRING NOT NULL
      )`).run()
      db.prepare( `
        CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        createdDate TEXT,
        title STRING NOT NULL,
        content TEXT NOT NULL,
        authorid INTEGER,
        FOREIGN KEY (authorid) REFERENCES users (id)
        )
      `
      ).run()
      db.prepare( `
        CREATE TABLE IF NOT EXISTS usercategory (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category TEXT DEFAULT 'basic',
        authorid INTEGER,
        FOREIGN KEY (authorid) REFERENCES users (id)
        )
      `
      ).run()
  }
)
createTables()


// homepage test set
app.get("/", (req, res) => {
  

  const context = {greeting: "hello",
                  user: "user1234",
                  url: "<a href=#>AAAA</a>",
                  errors: []
                  
  }
  //  res.render("homepage", {context})
  //  return res.render("dash", { posts })
  res.render("homepage", {context})
})

app.post("/", (req, res) => {

  console.log(req.body.some)

   context = {greeting: "hello",
    user: "user1234",
    url: `<a href=#>${req.body.some}</a>`,
    errors: []
}
 
   res.render("homepage", {context})
})


// login set
app.get("/login", (req, res) => {
  let errors = []
  let context = {}
  context.errors = ["aa"]
  res.render("login", {errors})
})

app.post('/login', (req, res) => {
  let errors = []

  req.body.username = req.body.username.trim();
  if (
    typeof req.body.username !== "string" ||
    typeof req.body.password !== "string"  || 
    !req.body.username.match(/^[a-zA-Z0-9]+$/) ||
    req.body.password.length < 8 ||
    req.body.password.length > 20
  ) { errors.push("Choose different username/password")
    return res.render('login', {errors})
}
  
  //some basic validations2 - duplicate user
  const selectUsername = db.prepare("SELECT * FROM users WHERE username = ?");
  const slectedUser = selectUsername.get(req.body.username);
  //returns errors on main web
  if (errors.length) {
    return res.render('login', {errors})
  }

  const passCheck = bcrypt.compareSync(req.body.password, slectedUser.password)
  if (!passCheck){
    errors = ['check your user/password']
    return res.render("login", { errors })
  }

  const createdTokenValue = jwt.sign(
    { exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, whatever: "yep", userid: slectedUser.id, username: slectedUser.username },
    process.env.JWTSECRET
  )

  res.cookie("express01", createdTokenValue, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 6
  })
  res.redirect("posts")
});



//register set

app.get('/register', (req, res) => { 

  const regform = {
    username: "",
    password: ""
  }

  res.render("register", {regform})
  
});

app.post('/register', (req, res) => { 
  const errors = [];

  //some basic validations1
  req.body.username = req.body.username.trim();
  if (
    typeof req.body.username !== "string" ||
    typeof req.body.password !== "string"  || 
    !req.body.username.match(/^[a-zA-Z0-9]+$/) ||
    req.body.password.length < 8 ||
    req.body.password.length > 20
  ) { errors.push("Choose different username/password")
}
  
  //some basic validations2 - duplicate user
  const selectUsername = db.prepare("SELECT * FROM users WHERE username = ?");
  const usernameInUse = selectUsername.get(req.body.username);
  if (usernameInUse){errors.push("Choose different username!")};
  console.log("dublicate")

  //returns errors on main web
  if (errors.length) {
    context = {}
    context.errors = errors
    return res.render('homepage', {context})
  }

  const salt = bcrypt.genSaltSync(10);
  req.body.password = bcrypt.hashSync(req.body.password, salt);

  const registerStatement = db.prepare(
    "INSERT INTO users (username, password) VALUES (?, ?)");
  const registerUserExecution = registerStatement.run(req.body.username, req.body.password);

  const checkUser = db.prepare("SELECT * FROM users WHERE ROWID = ?");
  const ourUser = checkUser.get(registerUserExecution.lastInsertRowid)
  
  const ourTokenValue = jwt.sign(
    { exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, whatever: "yep", userid: ourUser.id, username: ourUser.username },
    process.env.JWTSECRET
  )

  res.cookie("express01", ourTokenValue, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 6
  })

  res.redirect("homepage")


});


app.get('/posts', (req, res) => { 

  context = {greeting: "hello",
    user: "user1234",
    title: `<a href=#>${req.body.title}</a>`,
    content: "none"
}
  res.render("posts", {context})
  
});

app.post('/posts', (req, res) => { 

  console.log(req.body.content)
  console.log(req.body.title)
  


  context = {
    greeting: "hello",
    user: "user123664",
    title: `<a href=#>${req.body.title}</a>`,
    content: `${req.body.content}`
}
  const user = req.session.user;
  res.render("posts", {context}, user)
  
});





app.listen(3000)
