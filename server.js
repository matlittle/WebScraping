/* Dependencies */
const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const PORT        = process.env.PORT || 3000;

// Client side resources
app.use(express.static("./public"));

// Configure body parser as request body parsing middleware
app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json() );

// EJS view engine
app.set('view-engine', 'ejs');

// Add API routes
require('./controllers/api-routes')(app);
// Add routes that serve pages
require('./controllers/html-routes')(app); 
    

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`); 
});
