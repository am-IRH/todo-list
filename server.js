const express = require("express");
const bodyParser = require("body-parser");

const { setStatic } = require("./utils/static");
const adminRouter = require("./router/admin");
const indexRouter = require("./router/index");

const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: false}));

// set template engine 
app.set("view engine", "ejs");

// static page (css&font);
setStatic(app, express);

/// router
app.get("/", indexRouter);

app.use("/admin", adminRouter);

app.listen(300, () => console.log("run server"));