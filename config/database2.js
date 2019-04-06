const mongoose = require('mongoose');

// Map global promise
mongoose.Promise = global.Promise;

//connect mongo
mongoose.connect('mongodb://hugi123:hugibesti123@ds052968.mlab.com:52968/reboot', {useNewUrlParser: true})
.then(() => console.log('Mongodb connected'))
.catch((err) => console.log(err));
