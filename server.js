// Set-up ===============================================================================
	var express = require('express');
	var app = express();
	var compression = require('compression');
	var oneDay = 86400000;
	/*var mongoose = require('mongoose');
	var db = require('./config/db');*/
	var port = process.env.PORT || 8080;
	var path = require('path');
	var morgan = require('morgan');
	var bodyParser = require('body-parser');
	var methodOverride = require('method-override');
	var nodemailer = require('nodemailer');
// ======================================================================================





// Configuration ========================================================================
	/*mongoose.connect(db.url);*/
	/*app.use(compression());*/
	/*app.use(express.static(__dirname + '/public'));*/
	app.use(express.static(path.join(__dirname, '/public')));
	app.use(morgan('dev')); // Log every request to the console
	app.use(bodyParser.urlencoded({'extended':'true'}));
	app.use(bodyParser.json());
	app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
	app.use(methodOverride());
// ======================================================================================



	var transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: {
	    	user: "whymynameisalexisbertin@gmail.com",
	    	pass: ""
		}
	});
	app.post('/sendMessage', function(req, res) {
		var mailOptions = {
		    from: req.body.mail,
		    to: 'whymynameisalexisbertin@gmail.com',
		    subject: 'Portfolio | Contact from: '+req.body.name,
		    html: '<p style="font-size: 16px; line-height: 24px;"><span style="font-weight:bold">Name: </span> <span style="color: #15c">'+req.body.name+'</span> <br /><span style="font-weight:bold">Mail: </span> <span style="color: #15c">'+req.body.mail+'</span> <br /><span style="font-weight:bold">Message: </span> <br /><span style="color: #15c">'+req.body.message+'</span></p>',
		    text: req.body.name + ' | ' + req.body.mail + ' | ' + req.body.message
		};
		transporter.sendMail(mailOptions, function (error, info) {
		    if (error) {
		        res.send('NOPENOPEN: '+error);
		    } else {
		        res.send('Message sent: ' + info.response);
		    }
		});
	});
	app.get('*', function(req, res){
		res.sendfile('./public/index.html');
	});	



// Listen ===============================================================================
	app.listen(port);
	console.log('App listening on port **'+port+'**');
// ======================================================================================

