$(document).ready(function(){


  var numberDisplayed = 9;

  app.articleInfo.adapter.getBy().then(function(data){
    app.articleInfo.controller.render(data);

    if (localStorage.getItem('sortingType') !== null)
        {
          $("#table-id > tbody").empty();
          app.articleInfo.controller.sort(numberDisplayed);
        }
  });

  $('#left-header').append( ` (` +  (numberDisplayed + 1) + `)`);


   $('.load-button').on('click', function(e){
     e.preventDefault();
      if (numberDisplayed < 29) {
          var arrayToPrint = app.articleInfo.adapter.getMore(numberDisplayed);
          app.articleInfo.controller.renderMore(arrayToPrint);
          numberDisplayed = numberDisplayed + 10;

          $('#left-header').text( `UNPUBLISHED ARTICLES (` +  (numberDisplayed + 1) + `)`);
      }
      else if (numberDisplayed < 59)
      {
      app.articleInfo.adapter.loadSecondFile().then(function(data){
        var arrayToPrint = app.articleInfo.adapter.getMore(numberDisplayed);
        app.articleInfo.controller.renderMore(arrayToPrint);
                numberDisplayed = numberDisplayed + 10;
      $('#left-header').text( `UNPUBLISHED ARTICLES (` +  (numberDisplayed + 1) + `)`);

      if (numberDisplayed === 59){
        $('.load-button').text('No more articles to load').css("background-color",'#AD3A4B');
      }
        });

      } // end of else if
   }); // end of .load-button

            $('#words-box').on('click', function(e){
                e.preventDefault();
                $("#table-id > tbody").empty();

                var sortStyle = localStorage.getItem('sortingType');
                if (sortStyle === null || sortStyle === 'words-up')
                  {localStorage.setItem('sortingType','words-down');}
                else if (sortStyle === 'words-down')
                {localStorage.setItem('sortingType','words-up'); }
                else { localStorage.setItem('sortingType','words-down'); }

                app.articleInfo.controller.sort(numberDisplayed);
            });

            $('#submitted-box').on('click', function(e){
                e.preventDefault();
                $("#table-id > tbody").empty();
                var sortStyle = localStorage.getItem('sortingType');

                if (sortStyle === null || sortStyle === 'time-up')
                    {localStorage.setItem('sortingType','time-down');}
                else if( sortStyle === 'time-down')
                    { localStorage.setItem('sortingType','time-up');}
                else { localStorage.setItem('sortingType','time-down'); }

                app.articleInfo.controller.sort(numberDisplayed);

            })






})
