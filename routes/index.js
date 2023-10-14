// Import the Express framework
var express = require('express');
// Create a router instance
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Render the 'index' page with a title parameter set to 'Express'
  res.render('index', { title: 'Express' });
});

// GET about me page
router.get('/about', function(req, res, next) {
  // Render the 'aboutme' page
  res.render('aboutme');
});

// GET projects page
router.get('/projects', function(req, res, next) {
  // Render the 'projects' page
  res.render('projects');
});

// GET contact page
router.get('/contact', function(req, res, next) {
  // Extract the 'user' parameter from the request body
  const user = req.body.user;
  // Render the 'contactme' page with the 'user' parameter
  res.render('contactme', {user: user});
});

// Handle POST request to /contact
router.post('/contact', function(req, res, next) {
  // Extract the 'name' parameter from the request body
  const user = req.body.name;
  // Log the 'user' to the console
  console.log(user);
  // Render the 'contactme' page with the 'user' parameter
  res.render('contactme', {user: user});
});

// Export the router for use in other modules
module.exports = router;
