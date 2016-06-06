app.articleInfo.adapter = {
  getBy: function() {
    return  $.getJSON( "data/articles.json", function(data) {

    })
      .done(function(data) {
        var articles = data;
        // console.log(data );
        articles.forEach(function(article){

        var articleInfo = new app.articleInfo.new(article.id, article.image, article.profile.first_name, article.profile.last_name, article.publish_at, article.words, article.title);
        
        })

      })
      .fail(function() {
        console.log( "error" );
      });

  }

}
