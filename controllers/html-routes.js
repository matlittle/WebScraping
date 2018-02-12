/* Dependencies */
const articles = require('./articles');


module.exports = (app) => {

  app.get('/', async (req, res) => {
    const newArticles = await articles.getNewArticles();

    res.render('index.ejs', {articles: newArticles});
  });

  app.get('/saved', async (req, res) => {
    const savedArticles = await articles.retreiveArticles();

    res.render('saved.ejs', {articles: savedArticles});
  });


}