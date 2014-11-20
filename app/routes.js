// Define Model =========================================================================
	var Todo = require('./models/todo');
// ======================================================================================


	
	module.exports = function(app){

		// get all Todos
		app.get('/api/todos',function(req, res){
			console.log('test');
		});

		/*api.get('/api/todos',function(req, res){
			
		});

		api.get('/api/todos',function(req, res){
			
		});

		api.get('/api/todos',function(req, res){
			
		});

		api.get('/api/todos',function(req, res){
			
		});*/
	


	
		app.get('*', function(req, res){
			res.sendfile('./public/index.html'); // load the view file (Angular will handle the page chnges)
		});	
	

	};
	
