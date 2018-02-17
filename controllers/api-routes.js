/* Dependencies */
const articles = require('./articles');

module.exports = (app) => {
  app.post('/api/save', async (req, res) => {
    const result = await articles.saveArticle(req.body);

    res.send(result);
  });

  app.get("/api/article/:id", function(req, res) {
    const result = await articles.getArticle(req.params.id);

    res.send(result);
  });

  app.post("/api/article/:id", function(req, res) {
    const result = await articles.saveNote(req.body, req.params.id);

    res.send(result);
  });


}
