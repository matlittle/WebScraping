$('.save-btn').click(function(e) {
  e.preventDefault();

  $(this).attr('disabled', 'disabled');
  const articleEl = $(this).parent().parent().children('.article-col');

  const article = {
    headline: $(articleEl).children('h4').text().trim(),
    link: $(articleEl).children('h4').children('a').attr('href'),
    summary: $( $(articleEl).children('p')[0] ).text().trim(),
    byline: $( $(articleEl).children('p')[1] ).text().trim()
  }

  console.log(article);

  saveArticle(article);
});


function saveArticle(article) {
  $.post('./api/save', article, function(res) {
    console.log(res);
  });
}
