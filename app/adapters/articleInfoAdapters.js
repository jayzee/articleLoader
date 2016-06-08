app.articleInfo.adapter = {
  getBy: function() {
    return  $.getJSON( "data/articles.json", function(data) {

    }).done(function(data) {

        var articles = data;

        articles.forEach(function(article){

        var articleInfo = new app.articleInfo.new(article.id, article.image, article.profile.first_name, article.profile.last_name, article.publish_at, article.words, article.title, article.url, article.tags);

        })

      })
      .fail(function() {
        console.log( "error" );
      });
  },

  loadSecondFile: function() {

    return $.getJSON( "data/more-articles.json", function(moreData) {
    }).done(function(moreData){
        var moreArticles = moreData;


        moreArticles.forEach(function(article){
            new app.articleInfo.new(article.id, article.image, article.profile.first_name, article.profile.last_name, article.publish_at, article.words, article.title, article.url, article.tags);
        })


    });
  },

  getMore: function(startingNumber){
    //if app.adapter.articleInfo.
    var arrayToPrint = [];
    var articles = app.articleInfo.all;
    for(i = 1; i <= 10; i++  ) {
          arrayToPrint.push(articles[startingNumber + i ]);
          }

    return arrayToPrint;

  }

}
