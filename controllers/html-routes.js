/* Dependencies */
const articles = require('./articles');


module.exports = (app) => {

  app.get('/', async (req, res) => {
    const newArticles = await articles.getNewArticles();

    res.render('index.ejs', {articles: newArticles});
  });

  app.get('/saved', (req, res) => {
    res.render('saved.ejs');
  });


}