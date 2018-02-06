/* Dependencies */
const scraper = require('./scraper');
const db = require('../models');


module.exports.getNewArticles = async () => {
  const newArticles = await scraper.scrapeCurrentArticles();

  return newArticles;
}
