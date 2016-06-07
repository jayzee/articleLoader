$(document).ready(function(){

  app.articleInfo.adapter.getBy().then(function(data){
    app.articleInfo.controller.render(data);
    
   })




})
