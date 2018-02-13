
	// process.env.DATABASE_URL = "postgres://ctmxewqtqedlaz:7f83d52b2444d4997a626a8f2b01db46465f7cdd1c25d29fe5ee0839fb98b2f5@ec2-54-235-64-195.compute-1.amazonaws.com:5432/d2nt9iemhre1ki?ssl=true"; // URL HerokuPostgres
	process.env.DATABASE_URL = "mysql://krog0dpqd1383eik:hw143mt6oir2605g@cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/w1kv7h817y7haju4"; // URL MySQL
//	process.env.DATABASE_STORAGE = "quiz.sqlite";
	process.env.PASSWORD_ENCRYPTION_KEY= "asdfghjklzxcvbnmqwertyuiop";

	process.env.MAILGUN_API_KEY = "key-db0413b3afe5e3cd793112e0cb4afb33";
	process.env.MAILGUN_DOMAIN = "inbarasset.es";
	process.env.MAILGUN_PUBLIC_KEY = "pubkey-c4122fd1237ed9a25032acb322a8114d";
	process.env.MAILGUN_SMTP_LOGIN = "postmaster@sandbox856d043fe05c4b488ad63ac2197c";
	process.env.MAILGUN_SMTP_PASSWORD = "ceebda42005ae8440121baa581d25ed0";
	process.env.MAILGUN_SMTP_PORT = "587";
	process.env.MAILGUN_SMTP_SERVER = "smtp.mailgun.org";


	var express = require('express');
	var busboy = require('connect-busboy'); //middleware for form/file upload
	var path = require('path');
	var favicon = require('serve-favicon');
	var logger = require('morgan');
	var cookieParser = require('cookie-parser');
	var bodyParser = require('body-parser');
	var partials = require('express-partials');             // paquete para manejar vistas parciales del layout.ejs
	var methodOverride = require('method-override');
	var session = require('express-session');
	var routes = require('./routes/index');


	var app = express();

	// view engine setup
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'ejs');
	app.use(partials());                                    	// instala el middleware que da soporte a vistas parciales
	app.use(favicon(__dirname + '/public/favicon.ico'));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(cookieParser('inbar'));								// semilla que llevara la cookie
	app.use(session());
	app.use(methodOverride('_method'));				// para utilizar en edit.ejs y encapsular el post como put
	app.use(busboy());
	app.use(express.static(path.join(__dirname, 'public')));

	// Helpers dinamicos:
	app.use(function(req, res, next) {
		if (!req.session.redir) {								// si no existe lo inicializa
			req.session.redir = '/';
		}
		if (!req.path.match(/\/login|\/logout|\/user/)) { 		// guardar path en session.redir para despues de logout volver a la misma vista del login
			req.session.redir = req.path;						// req.path es le path de donde se hizo el login
		}
		res.locals.session = req.session;						// Hacer visible req.session en las vistas
		next();
	});

	app.use(function(req, res, next) {
		if (req.session.user) {
			if (Date.now() - req.session.user.lastRequestTime > 4*60*1000) {
				delete req.session.user;
			} else {
				req.session.user.lastRequestTime = Date.now();
			}
		}
		next();
	});

	app.use('/', routes);
	//app.use('/users', users);

	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	// error handlers

	// development error handler
	// will print stacktrace
	if (app.get('env') === 'development') {
		app.use(function(err, req, res, next) {
			res.status(err.status || 500);
			res.render('error', {
				message: err.message,
				error: err,
				errors: []
			});
		});
	};

	// production error handler
	// no stacktraces leaked to user
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {},
			errors: []
		});
	});

	module.exports = app;
	// app.listen(3000);
