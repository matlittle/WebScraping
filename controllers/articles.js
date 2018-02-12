/* Dependencies */
const scraper = require('./scraper');
const db = require('../models');


module.exports.getNewArticles = async () => {
  const newArticles = await scraper.scrapeCurrentArticles();

  return newArticles;
}


module.exports.saveArticle = async article => {
  const result = await db.Articles.create(article);

  console.log(result);
  return result;
}

module.exports.retreiveArticles = async () => {
  const articles = db.Articles.find({})
  
  console.log(articles);
  return articles;
}
