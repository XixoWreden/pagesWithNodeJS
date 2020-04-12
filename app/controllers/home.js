const express = require('express');
const router = express.Router();
const countries = require('../models/countries');
const palabras = require('../models/lorem');

/* Route - /  PAGE PRINCIPAL */
router.get('/', (req, res) => {
	
	res.render('home', {
		titlePage: ' GRID BOOTSTRAP 4',
		pageHeader: 'HEADER',
		parra1Section: palabras.textoLorem(),
		parra2Section: palabras.textoLorem(),
		parraPuppy: palabras.textoLoremPuppy(),
		footer: "FOOTER"
	});
});

// /* Route - About */
// router.get('/about', function(req, res) {
// 	res.render('about', {
// 		pageTitle: 'About',
// 		pageID: 'about'
// 	});
// });

module.exports = router;