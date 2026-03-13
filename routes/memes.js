const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const allMemes = req.app.locals.getMemes ? req.app.locals.getMemes() : [];
  const viewedMemes = req.session.viewedMemes || [];
  const loggedIn = req.session.user ? true : false;

  const searchQuery = req.query.search?.trim().toLowerCase() || '';
  const memes = searchQuery
    ? allMemes.filter(meme => meme.name.toLowerCase().includes(searchQuery))
    : allMemes;

  res.render('overview', {
    memes,
    viewedMemes,
    loggedIn,
    user: req.session.user || { username: 'Guest' },
    searchQuery
  });
});

module.exports = router;
