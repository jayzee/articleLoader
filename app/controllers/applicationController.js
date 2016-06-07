$(document).ready(function(){

  var numberDisplayed = 9;

  app.articleInfo.adapter.getBy().then(function(data){
    app.articleInfo.controller.render(data);
  });


   $('.load-button').on('click', function(e){
     e.preventDefault();
      console.log('clicked load more');
      if (numberDisplayed < 29) {
          var arrayToPrint = app.articleInfo.adapter.getMore(numberDisplayed);
          app.articleInfo.controller.renderMore(arrayToPrint);
          numberDisplayed = numberDisplayed + 10;

          var taste = localStorage.getItem('sortingType');
          console.log(taste)
      }
      else if (numberDisplayed < 59)
      {
      app.articleInfo.adapter.loadSecondFile().then(function(data){
        var arrayToPrint = app.articleInfo.adapter.getMore(numberDisplayed);
        app.articleInfo.controller.renderMore(arrayToPrint);
                numberDisplayed = numberDisplayed + 10;
        });
      }
      else {
        // change button
        $('.load-button').text('No more articles to load').css("background-color",'#AD3A4B');
      }
   });

            $('#words-box').on('click', function(e){
                e.preventDefault();
                $("#table-id > tbody").empty();

                localStorage.setItem('sortingType','Words');

                app.articleInfo.controller.sort(numberDisplayed);
            });






})
