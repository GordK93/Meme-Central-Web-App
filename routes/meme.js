const express = require('express');
const router = express.Router();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

router.post('/', ensureAuthenticated, (req, res) => {
  const memes = req.app.locals.getMemes ? req.app.locals.getMemes() : [];
  const memeId = req.body.id;
  const meme = memes.find(m => m.id == memeId);

  if (!meme) return res.status(404).send("Meme not found");

  if (!req.session.viewedMemes) {
    req.session.viewedMemes = [];
  }
  if (!req.session.viewedMemes.includes(memeId)) {
    req.session.viewedMemes.push(memeId);
  }
  
  res.render('details', {
    meme,
    user: req.session.user || { username: 'Guest' }
  });
});

module.exports = router;
