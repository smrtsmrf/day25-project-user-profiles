var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var config = require('./config.json')
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');
var port = 4000;

var app = express();

var corsOptions = {
	origin: 'http://localhost:' + port
}

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({secret: config.sessionSecret}))
app.use(express.static(__dirname + '/public'));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);

app.put('/api/settings', userCtrl.changeLogin);



app.listen(port, function () {
	console.log('listening on port', port);
});