/* Dependencies */
const articles = require('./articles');

module.exports = (app) => {
  app.post('/api/save', async (req, res) => {
    const result = await articles.saveArticle(req.body);

    res.send(result);
  });

  app.post("/api/article/:id", async (req, res) => {
    const result = await articles.saveNote(req.body, req.params.id);

    res.send(result);
  });

  app.delete('/api/article/:id', async (req, res) => {
    const result = await articles.deleteArticle(req.params.id);

    res.send(result);
  });

  app.delete('/api/note/:id', async (req, res) => {
    const result = await articles.deleteNote(req.params.id);

    res.send(result);
  })
}
