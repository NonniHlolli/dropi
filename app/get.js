var path = require("path");
const db = require("../config/database.js");

module.exports = function(app){
    app.get('/user', db.getUsers)

    app.get('/boats', db.getBoats)


}
