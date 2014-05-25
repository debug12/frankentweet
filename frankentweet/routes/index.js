var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(function(req, res, next){
	console.log(req.method, req.url, req.host);
	next();
})

router.param('name', function(req, res, next, name){
	console.log('doing name validation on ' + req.params.name);
	req.name = name;
	next();
})

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/hello/:name', function(req, res){
	res.send('hello ' + req.name + '!');
})

router.post('/', function(req, res){
	res.redirect('/');
})

module.exports = router;
