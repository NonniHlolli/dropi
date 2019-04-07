const express = require("express");
const app = express();

const path = require("path");
const bodyParser = require("body-parser");


app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

require('./app/get.js')(app);
require('./app/post.js')(app);

var port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log("listening on port " + port);
});
