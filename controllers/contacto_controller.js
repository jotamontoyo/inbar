
	var models = require('../models/models.js');
//	var sa = require('sweetalert');

	exports.load = function(req, res, next, contactoId) {			// autoload. solo se ejecuta si en la peticion GET existe un :proveedorId. ayuda a factorizar el codigo del resto de controladores
		models.Contacto.find({										// carga de registro proveedorId
			where: 		{id: Number(contactoId)}					// where indice principal id <-- proveedorId recibido del GET
			}).then(function(contacto) {
				if (contacto) {
					req.contacto = contacto;
					next();
				} else {
					next(new Error('No existe proveedorId=' + contacto[id]));
				}
			}
		).catch(function(error) {next(error);});
	};

	exports.index = function(req, res) {
		models.Contacto.findAll().then(function(contactos) {
			res.render('contactos/index.ejs', {contactos: contactos, errors: []});
		});
	};

	exports.new = function(req, res) {												// GET /proveedor/new, baja el formulario
		var contacto = models.Contacto.build( 															// crea el objeto proveedor, lo construye con buid() metodo de sequilize
			{nombre: "Nombre", alias: "Alias", email: "eMail", emailok: "eMailok", telefono: "Teléfono", marca: "Marca", ciudad: "Ciudad", provincia: "Provincia", comentario: "Comentario", lopd: false, revisado: false}				// asigna literales a los campos para que se vea el texto en el <input> cuando creemos el formulario
		);
		res.render('contactos/new', {contacto: contacto, errors: []});   		// renderiza la vista quizes/new
	};

	exports.create = function(req, res) {											// POST /quizes/create
		var contacto = models.Contacto.build( req.body.contacto );				// construccion de objeto quiz para luego introducir en la tabla
		var errors = contacto.validate();											// objeto errors no tiene then(
		if (errors) {
			var i = 0;
			var errores = new Array();												// se convierte en [] con la propiedad message por compatibilidad con layout
			for (var prop in errors) errores[i++] = {message: errors[prop]};
			res.render('contactos/new', {contacto: contacto, errors: errores});
		} else {
			contacto 																// save: guarda en DB campos
			.save({fields: ["nombre", "alias", "email", "emailok", "telefono", "marca", "ciudad", "provincia", "comentario", "revisado"]})
			.then(function() {res.redirect('/contactos')});
		};
	};

	exports.edit = function(req, res) {												// carga formulario edit.ejs
		var contacto = req.contacto;												// req.proveedor viene del autoload
		res.render('contactos/edit', {contacto: contacto, errors: []});   		// renderiza la vista proveedores/edit
	};

	exports.update = function(req, res) {											// modifica un proveedor
		req.contacto.nombre = req.body.contacto.nombre;
		req.contacto.alias = req.body.contacto.alias;
		req.contacto.email = req.body.contacto.email;
		req.contacto.emailok = req.body.contacto.emailok;
		req.contacto.telefono = req.body.contacto.telefono;
		req.contacto.marca = req.body.contacto.marca;
		req.contacto.ciudad = req.body.contacto.ciudad;
		req.contacto.provincia = req.body.contacto.provincia;
		req.contacto.comentario = req.body.contacto.comentario;
		req.contacto.revisado = req.body.contacto.revisado;
		var errors = req.contacto.validate();
		if (errors) {
			var i = 0;
			var errores = new Array();												// se convierte en [] con la propiedad message por compatibilidad con layout
			for (var prop in errors) errores[i++] = {message: errors[prop]};
			res.render('contactos/edit', {contacto: req.contacto, errors: errores});
		} else {
			req.contacto 															// save: guarda en DB campos
			.save({fields: ["nombre", "alias", "email", "emailok", "telefono", "marca", "ciudad", "provincia", "comentario", "revisado"]})
			.then(function() {res.redirect('/contactos')});
		};
	};

	exports.show = function(req, res) {											// GET /contactos/:id
		models.Contacto.find({
			where: 		{id: req.contacto.id}
		}).then(function(contacto) {
			res.render('contactos/show', {contacto: req.contacto, errors: []});				// renderiza la vista /quizes/show del quizId selecionado con load find()
		});																					// req.quiz: instancia de quiz cargada con autoload
	};

	exports.destroy = function(req, res) {
		req.contacto.destroy().then(function() {
			res.redirect('/contactos');
		}).catch(function(error) {next(error)});
	};

	exports.webcreate = function(req, res) {											// POST /contacto/webcreate

//		var aviso = req.body.aviso;

		var contacto = models.Contacto.build( 											// crea el objeto contacto, lo construye con buid() metodo de sequilize
			{nombre: "Nombre", alias: "Alias", email: "eMail", emailok: "eMailok", telefono: "Teléfono", marca: "Marca", ciudad: "Ciudad", provincia: "Provincia", comentario: "Comentario", lopd: false, revisado: false}		// asigna literales a los campos para que se vea el texto en el <input> cuando creemos el formulario
		);
		contacto.nombre = req.body.nombre;
		contacto.alias = req.body.alias;
		contacto.email = req.body.email;
		contacto.emailok = req.body.emailok;
		if (req.body.telefono) {
			contacto.telefono = req.body.telefono;
		} else {
			contacto.telefono = 0;
		};
		contacto.marca = req.body.marca;
		contacto.ciudad = req.body.ciudad;
		contacto.provincia = req.body.provincia;
		contacto.comentario = req.body.comentario;
		contacto.revisado = false;
		if (req.body.lopd) {contacto.lopd = true};
		var errors = contacto.validate();											// objeto errors no tiene then(
		if (errors) {
			var i = 0;
			var errores = new Array();												// se convierte en [] con la propiedad message por compatibilidad con layout
			for (var prop in errors) errores[i++] = {message: errors[prop]};
			res.render('contactos/new', {contacto: contacto, errors: errores});
		} else {
			contacto 																// save: guarda en DB campos
			.save({fields: ["nombre", "alias", "email", "emailok", "telefono", "marca", "ciudad", "provincia", "comentario", "lopd", "revisado"]})
			.then(function() {

//				res.redirect('/contactos/enviado');

//				res.aviso.className = 'show';

			var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
			sendgrid.send({
			  to:       'jotamontoyo@hotmail.es',
			  from:     'jotamontoyo@gmail.com',
			  subject:  'Hello World',
			  text:     'My first email through SendGrid.'
			}, function(err, json) {
			  if (err) { return console.error(err); }
			  console.log(json);
			});


				// Require
/*				var postmark = require("postmark");

				// Example request
				var client = new postmark.Client("08f8257f-32bc-4a2c-8492-05a217b1705d");

				client.sendEmail({
					"From": "jotamontoyo@gmail.com",
					"To": "jotamontoyo@hotmail.es",
					"Subject": "Test",
					"TextBody": "Hello from Postmark!"
				}); */

/*				var email = require('emailjs');

				var server = email.server.connect({
					user: 'jotamontoyo@gmail.com',
					password: 'tenerife2011',
					host: 'smtp.gmail.com',
					ssl: true
				});

				server.send({
					text: 'Te agradecemos la solicitud de contacto. En breve nos comunicaremos contigo.',
					from: 'Inbar Asset',
					to: 'contacto.nombre' + '<' + contacto.email + '>',
					cc: '',
					subject: 'El secreto del exito de los bares.'
					}, function (err, message) {
					console.log(err || message);
				}); */

				res.redirect('/');

			});
		};
	};

	exports.webform = function(req, res) {
		res.render('contactos/webform.ejs', {errors: []});
	};

	exports.enviado = function(req, res) {
//		res.redirect('/');
		res.render('contactos/enviado.ejs', {errors: []});

//		res.redirect('/');
//		res.render('/', {errors: []});
	};
