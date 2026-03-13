const express = require('express');
const router = express.Router();
const passport = require('passport');

// Redirect "/" to login (unless logged in)
router.get('/', (req, res) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    res.redirect('/memes');
  } else {
    res.redirect('/login');
  }
});

// GET login form
router.get('/login', function(req, res) {
  res.render('login', {
    error: req.query.error ? 'Invalid username or password' : null
  });
});

// POST login
router.post('/login', passport.authenticate('local', {
  failureRedirect: '/login?error=true'
}), function(req, res) {
  req.session.user = req.user;
  res.redirect('/memes');
});

// POST logout
router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) return next(err);
    req.session.destroy();
    res.redirect('/login');
  });
});

module.exports = router;
