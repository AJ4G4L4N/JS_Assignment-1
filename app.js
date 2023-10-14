// Import required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');

// Import the index router module
var indexRouter = require('./routes/index');

// Create an Express application
var app = express();

// Configure view engine and partials
hbs.registerPartials(path.join(__dirname, 'views/partials'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Set up middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use the index router for the root path
app.use('/', indexRouter);

// Middleware for handling 404 errors
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler middleware
app.use(function(err, req, res, next) {
  // Set locals for error handling
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Export the app for use in other modules
module.exports = app;
