const express = require('express');
var router = express.Router();

// Home page
router.set('view engine', 'ejs');
router.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', (req,res) => {
	res.render('home');
});

module.exports = router;