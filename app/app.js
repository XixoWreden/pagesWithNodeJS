// /////////////////////////////////////////
// LLAMAR MODULOS REQUERIDOS EN NUESTRA APP
// ////////////////////////////////////////
// Express un servidor web para generara peticiones
const express = require('express');
// PATH modulo para generar el PATH correcto tanto en Windows como POXIS
const path = require('path');
// Manejador completo de Logs
const logger = require('morgan');
// Entender o manejar peticiones POST
const bodyParser = require('body-parser');
// //////////////////////////////////////////////////
// app del Servidor Web que genera el modulo Express
// //////////////////////////////////////////////////
const app = express();
// /////////////////////////////////////////////////////////
// Variable de localización de archivos publicos, CSS, HTML
// -- PATH, se usa para no estar modificando la ruta tanto para
//    Windows como POXIS
// **La ruta de --dirname, depende en donde se encuentre el app.js
// staticFilesDir:: /Users/neroxixo/Documentos/nodejs_workspace/pagina_node/app/public
// views:: /Users/neroxixo/Documentos/nodejs_workspace/pagina_node/app/views
// ////////////////////////////////////////////////////////
const staticFilesDir = path.join(__dirname,'public'); 
const views = path.join(__dirname,'views')
// /////////////////////////////////////////////////////////
// Set some Global Variables
// - Se especifican el motor de las plantillas como pug(Jade),Handlebars,Vue,Mustache,EJS,React
// https://www.slant.co/topics/51/~best-javascript-templating-engines
// - Se establece la ruta relativa de donde se tomarán las plantillas 
//   para el motor de plantillas establecido anteriormente
// ////////////////////////////////////////////////////////
app.set('port', process.env.PORT || 8000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');
// app.set('template',app.get('views'))

// /////////////////////////////////
// CONFIGURACIONES Y OPCIONES
// ////////////////////////////////
app.locals.siteTitle = 'NodeJS App';
// USAR MORGAN PARA ESTAR LOGEANDO ERRORES
app.use(logger('dev'));
// USAR BODY PARSER Y TRADUCIR PETICIONES POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// ///////////////////////////
// List Controllers or Routes
// ///////////////////////////
app.use(express.static('app/public'));
app.use(require('./controllers/home'));
// app.use(require('./controllers/example'));


// ////////////////////////////////
// Setup Server to start listening.
// ////////////////////////////////
// --- V1.0
var server = app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});

// --- V2.0 - https://www.npmjs.com/package/reload
// Recargar automaticamente tu página web
// const reload = require('reload');
// const http = require('http');
// var server = http.createServer(app);
// reload(app).then((reloadReturned)=>{
//     watch.watchTree(__dirname + "./", function (f, curr, prev) {
//         // Fire server-side reload event
//         reloadReturned.reload();
//     });
//     server.listen(app.get('port'), function () {
//         console.log('Web server listening on port ' + app.get('port'))
//     });
// }).catch((err)=>{
//     logger(':method :url :status :res[content-length] - :response-time ms');
//     logger('HORROR RELOAD:::',err)
// })