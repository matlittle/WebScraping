$('.save-article-btn').click(function(e) {
  e.preventDefault();

  $(this).attr('disabled', 'disabled');
  const articleEl = $(this).parent().parent().children('.article-col');

  const article = {
    headline: $(articleEl).children('h4').text().trim(),
    link: $(articleEl).children('h4').children('a').attr('href'),
    summary: $( $(articleEl).children('p')[0] ).text().trim(),
    byline: $( $(articleEl).children('p')[1] ).text().trim()
  }

  $(this).parent().parent().parent().remove();

  console.log(article);

  saveArticle(article);
});


function saveArticle(article) {
  $.post('./api/save', article, function(res) {
    console.log(res);
  });
}


$('.new-note-btn').click(function(e) {
  e.preventDefault();

  $('#note-modal')
    .find('.save-note-btn')
    .attr('data-article-id', $(this).attr('data-article-id'));

  $('#note-modal').modal('show');
});

$('.save-note-btn').click(function(e) {
  e.preventDefault();

  const id = $(this).attr('data-article-id');

  const note = $('#note-text').val().trim();

  console.log(note);
  console.log(id);

  $.post(`./api/article/${id}`, {body: note}, function(res) {
    console.log(res);
    location.reload();
  });

});

$('.delete-article-btn').click(function(e) {
  e.preventDefault();

  const id = $(this).attr('data-article-id');

  $(this).parent().parent().parent().parent().remove();

  $.ajax({
    url: `./api/article/${id}`,
    method: 'DELETE'
  }).then( function(res) {
    console.log(res);
  });
});

$('.delete-note-btn').click(function(e) {
  e.preventDefault();

  const id = $(this).attr('data-note-id');

  const ulElement = $(this).parent().parent();
  console.log(ulElement);

  $(this).parent().remove();

  if ( $(ulElement).children().length === 0 ) {
    $(ulElement).parent().parent().remove();
  }

  $.ajax({
    url: `./api/note/${id}`,
    method: 'DELETE'
  }).then( function(res) {
    console.log(res);
  });
})
