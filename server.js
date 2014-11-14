// Set-up ===============================================================================
	var express = require('express');
	var app = express();
	var mongoose = require('mongoose'); // mongodb
	var morgan = require('morgan'); // log requests for the console
	var bodyParser = require('body-parser'); // pull information from HTML POST
	var methodOverride = require('method-override'); // simulate DELETE and PUT
	var port = process.env.PORT || 8080;
// ======================================================================================





// Configuration ========================================================================
	mongoose.connect('mongodb://localhost/');

	app.use(express.static(__dirname + '/public')); // static files location
	app.use(morgan('dev')); // Log every request to the console
	app.use(bodyParser.urlencoded({'extended':'true'}));
	app.use(bodyParser.json());
	app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
	app.use(methodOverride());
// ======================================================================================






// Define Model =========================================================================
	var Todo = mongoose.model('Todo', function(){
		text: String,
		done: Boolean
	});
// ======================================================================================






// Routes ===============================================================================
	// api ------------------------------------------------------------------------------
		// get all Todos
		api.get('/api/todos',function(req, res){

		});

		// get all Todos
		api.get('/api/todos',function(req, res){
			
		});

		// get all Todos
		api.get('/api/todos',function(req, res){
			
		});

		// get all Todos
		api.get('/api/todos',function(req, res){
			
		});

		// get all Todos
		api.get('/api/todos',function(req, res){
			
		});
	// ----------------------------------------------------------------------------------


	// application ----------------------------------------------------------------------
		app.get('*', function(req, res){
			res.sensfile('index.html'); // load the view file (Angular will handle the page chnges)
		});	
	// ----------------------------------------------------------------------------------
// ======================================================================================








// Listen ===============================================================================
	app.listen(port);
	console.log('App listening on port **'+port+'**');
// ======================================================================================











