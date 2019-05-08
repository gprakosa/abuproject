var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	brand: 'ABU',
  	about: 'PROJECT',
  	title: 'ABU Project', 
  	person1: 'ABU SHAKEIL',
  	person2: 'ABU GHAIDA',
  	tagline: 'DELIVER SOLUTION',
  	message: 'We will help your problem with a solution that meet with the original of syariat Islam, that means our solution is based on Al Quran and Assunnah. Choose us to be your Ikhtiar and let\'s we tawakal together ',
  });
});

module.exports = router;
