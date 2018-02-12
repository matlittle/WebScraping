/* Dependencies */
const articles = require('./articles');

module.exports = (app) => {
  app.post('/api/save', async (req, res) => {
    const result = await articles.saveArticle(req.body);

    res.send(result);
  });

  app.get('/api/retrieve', async (req, res) => {
    const savedArticles = await articles.retreiveArticles();
    
    res.json(savedArticles);
  });
}
