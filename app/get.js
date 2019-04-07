var path = require("path");
const db = require("../config/database.js");

module.exports = function(app){
    app.get('/user', db.getUsers)

    app.get("/bottle", (req, res) => {
        res.sendFile(path.join(__dirname + './../public/bottle.html'))
    })

    app.get("/addCode", (req, res) => {
        res.sendFile(path.join(__dirname + './../public/addCode.html'))
    })
}
