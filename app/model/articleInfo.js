app.articleInfo ={
  all: [],
  new: (function(){
      var counter = 0;
      var numberDisplayed = 0
      var articleInfo = function ArticleInfo(id, image,profileFirstName, profileLastName, publishDate, words, title, url) {
        this.id = id;
        this.image = image;
        this.profileFirstName = profileFirstName;
        this.profileLastName = profileLastName;
        this.publishDate = publishDate
        this.words = words;
        this.title = title;
        this.url = url;
        var self = this;

        function initialize() {
          counter++;
          self.id = counter;
          app.articleInfo.all.push(self);
        }
        initialize();
      }
      return articleInfo;
  }())

}
