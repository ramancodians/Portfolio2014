// Set-up ===============================================================================
	var express = require('express');
	var app = express();
	var compression = require('compression');

	var oneDay = 86400000;


	var mongoose = require('mongoose');
	var db = require('./config/db');
	var port = process.env.PORT || 8080;
	var path = require('path');

	var morgan = require('morgan'); // log requests for the console

	var bodyParser = require('body-parser'); // pull information from HTML POST
	var methodOverride = require('method-override'); // simulate DELETE and PUT

	
// ======================================================================================





// Configuration ========================================================================
	mongoose.connect(db.url);

	/*app.use(compression());*/
	/*app.use(express.static(__dirname + '/public'));*/

	
	
	
	app.use(express.static(path.join(__dirname, '/public')));
	

	


	app.use(morgan('dev')); // Log every request to the console
	app.use(bodyParser.urlencoded({'extended':'true'}));
	app.use(bodyParser.json());
	app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
	app.use(methodOverride());
// ======================================================================================




// Routes ===============================================================================
	/*require('./app/routes')(app);*/
// ======================================================================================





// Listen ===============================================================================
	
	app.get('*', function (req, res) {
	    res.sendFile(__dirname+'/public/index.html');
	});


	/*app.get('*', function(req, res){
		res.sendFile(path.join(__dirname, '/public', 'index.html'));
		res.sendFile('index.html', { root: path.join(__dirname, '/public') });
	});	*/

	app.listen(port);
	console.log('App listening on port **'+port+'**');
// ======================================================================================











