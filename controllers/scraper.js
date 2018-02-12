/* Dependencies */
const request   = require('request');
const cheerio   = require('cheerio');
const schema = require('../models/htmlSchemas');



module.exports.scrapeCurrentArticles = () => {

  return new Promise( (resolve, reject) => {
    request(`https://www.nytimes.com/`, (err, res, body) => {
      if(err) reject(err);

      resolve( getArticlesFromHtml(body) );
    });
  });
  
}



function getArticlesFromHtml(html) {
  $ = cheerio.load(html);

  const articles = [];

  $(schema.topContainer).each( (i, el) => {
    articles.push({
      headline: getHeadline(el),
      summary: getSummary(el),
      link: getLink(el),
      byline: getByline(el)
    });
  }); 

  console.log(articles);

  return articles.filter( x => x.summary.length > 0);
}

function getHeadline(el) {
  return $(el).children(schema.headline.element).text().trim();
}

function getSummary(el) {
  return $(el).children(schema.summary.element).text().trim();
}

function getLink(el) {
  if(typeof schema.link.element === 'string') {
    return $(el).children(schema.link.element).attr(schema.link.attribute);
  }

  let childEl = $(el);
  for(let i = 0; i < schema.link.element.length; i++) {
    childEl = $(childEl).children(schema.link.element[i]);
  }
  return $(childEl).attr(schema.link.attribute);
}

function getByline(el) {
  return $(el).children(schema.byline.element).text().trim();
}
