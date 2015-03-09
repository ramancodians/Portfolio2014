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

	var nodemailer = require('nodemailer');
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
	

	/*app.get('/sendMessage', function(req,res){
		res.render('sendMessage', {
			title: 'Portfolio - Contact',
			page: 'sendMessage' 
		})
	});

	app.post('/sendMessage', function (req, res) {
		var mailOpts, smtpTrans;
		//Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
		smtpTrans = nodemailer.createTransport('SMTP', {
			service: 'Gmail',
			auth: {
	      		user: "whymynameisalexisbertin@gmail.com",
				pass: "yodapowa6120" 
			}
		});
		//Mail options
		mailOpts = {
	      	from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
	      	to: 'whymynameisalexisbertin@gmail.com',
			subject: 'Portfolio | Contact',
			text: req.body.message
		};
		smtpTrans.sendMail(mailOpts, function (error, response) {
	      	//Email not sent
	      	if (error) {
	          	res.render('sendMessage', { title: 'Portfolio - Contact', msg: 'Error occured, message not sent.', err: true, page: 'sendMessage' })
	      	}
	      	//Yay!! Email sent
	      	else {
	          	res.render('sendMessage', { title: 'Portfolio - Contact', msg: 'Message sent! Thank you.', err: false, page: 'sendMessage' })
	      	}
	  	});
	});*/



	//Create the reusable transport
	var transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: {
	    	user: "whymynameisalexisbertin@gmail.com",
	    	pass: ""
		}
	});
	 
	//Create the route that does all the magic when your contact form submit button is pressed

	app.post('/sendMessage', function(req, res) {


	            // setup e-mail data with unicode symbols
	            var mailOptions = {
	                from: req.query.mail, // sender address
	                to: 'whymynameisalexisbertin@gmail.com', // list of receivers. This is whoever you want to get the email when someone hits submit
	                subject: 'Portfolio | Contact from: '+req.query.name, // Subject line
	                text: req.query.name + ' You gg: ' + req.query.message // plaintext body
	 
	            };
	 
	            // send mail with defined transport object
	            transporter.sendMail(mailOptions, function (error, info) {
	                if (error) {
	                    console.log('NOPENOPEN: '+error);
	                } else {
	                    console.log('Message sent: ' + info.response);
	                }
	            });
	            //Success
	            res.send("Thanks! We have sent your message.");
	 

	 
	});


	app.get('*', function(req, res){
		/*res.sendFile(path.join(__dirname, '/public', 'index.html'));
		res.sendFile('index.html', { root: path.join(__dirname, '/public') });*/
		res.sendfile('./public/index.html');
	});	


// Listen ===============================================================================
	app.listen(port);
	console.log('App listening on port **'+port+'**');
// ======================================================================================











