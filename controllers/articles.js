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
  const articles = await db.Articles.find({})
  
  console.log(articles);
  return articles;
}

module.exports.getArticle = async (id) => {
  const article = db.Article.findOne({_id: id}).populate('note');

  console.log(article);
  return article;
}

module.exports.saveNote = async (note, id) => {
  const noteResult = await db.Note.create(note);

  console.log(noteResult);

  const articleResult = await 
    db.Article.findOneAndUpdate(
      {_id: id}, 
      {note: noteResult._id}, 
      {new: true}
    );

  console.log(articleResult);

  return articleResult;
}
