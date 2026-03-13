const axios = require('axios');
const config = require('../config/config.json');

let memeCache = [];

async function fetchMemes() {
  try {
    const response = await axios.get(config.MEME_API_URL);
    memeCache = response.data.memes || [];
    console.log("✅ Memes fetched and cached.");
  } catch (error) {
    console.error("❌ Error fetching memes:", error.message);
  }
}

function getMemes() {
  return memeCache;
}

function findMemesByName(searchTerm) {
  return memeCache.filter(meme =>
    meme.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

module.exports = {
  fetchMemes,
  getMemes,
  findMemesByName
};
