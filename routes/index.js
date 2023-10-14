var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET about me page
router.get('/about', function(req, res, next) {
  res.render('aboutme');
});

// GET projects page
router.get('/projects', function(req, res, next) {
  res.render('projects');
});

// GET contact page
router.get('/contact', function(req, res, next) {
  const user = req.body.user;
  res.render('contactme', {user: user});
});

router.post('/contact', function(req, res, next) {
  const user = req.body.name;
  console.log(user);
  res.render('contactme', {user: user});
});

module.exports = router;
