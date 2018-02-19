/* Dependencies */
const scraper = require('./scraper');
const db = require('../models');


module.exports.getNewArticles = async () => {
  const newArticles = await scraper.scrapeCurrentArticles();

  return newArticles;
}


module.exports.saveArticle = async article => {
  const findResult = await db.Articles.findOne({link: article.link});

  if (findResult) {
    return findResult;
  }

  const createResult = await db.Articles.create(article);
  return createResult;
}

module.exports.retreiveArticles = async () => {
  const articles = await db.Articles.find({}).populate('notes');
  
  return articles;
}

module.exports.saveNote = async (note, id) => {
  const noteResult = await db.Notes.create(note);

  const articleResult = await 
    db.Articles.findOneAndUpdate(
      { _id: id }, 
      { $push: {notes: noteResult._id} }, 
      { new: true }
    );

  return articleResult;
}

module.exports.deleteArticle = async (id) => {
  const result = await db.Articles.remove({_id: id});

  return result;
}

module.exports.deleteNote = async (id) => {
  const result = await db.Notes.remove({_id: id});

  return result;
}
