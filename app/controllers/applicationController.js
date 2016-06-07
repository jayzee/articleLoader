$(document).ready(function(){

  var numberDisplayed = 9;

  app.articleInfo.adapter.getBy().then(function(data){
    app.articleInfo.controller.render(data);
   })


   $('.load-button').on('click', function(e){
     e.preventDefault();
      console.log('clicked');
      if (numberDisplayed < 29) {

          var arrayToPrint = app.articleInfo.adapter.getMore(numberDisplayed);
          app.articleInfo.controller.renderMore(arrayToPrint);
          numberDisplayed = numberDisplayed + 10;
      }

      else
      {  // dyanimcally load from other file.
      }
   })




})
