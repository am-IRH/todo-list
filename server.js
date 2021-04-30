const express = require("express");
const bodyParser = require("body-parser");

const { setStatic } = require("./utils/static");
const adminRouter = require("./router/admin");
const indexRouter = require("./router/index");
const connectDatabase = require("./model/todo");

const app = express();


// bodyParser option
app.use(bodyParser.urlencoded({ extended: false}));

// set template engine 
app.set("view engine", "ejs");

// static page (css&font);
setStatic(app, express);

//? router
// show page📄 and send data to ejs
app.get("/", indexRouter);

//* this router -> add-todo / deleteTodo / completed
app.use("/admin", adminRouter);

connectDatabase.sync().then(result => {
    app.listen(300, () => console.log("-------Server run-----"));
}).catch(err => console.log(err));