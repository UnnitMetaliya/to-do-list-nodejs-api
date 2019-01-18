var express = require("express");

(app = express()),
  (port = process.env.PORT || 3000),
  (mongoose = require("mongoose"));
(Task = require("./api/models/todoListModel")), //creating a model loading here
  (bodyParser = require("body-parser"));

// mongoose instance connection using uri
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/todoListRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("todo list RESTful API server started on: " + port);

// mongodb://<dbuser>:<dbpassword>@ds161074.mlab.com:61074/todolistapi
