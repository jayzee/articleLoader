app.articleInfo.controller = {
  render: function(data){

      var articles = app.articleInfo.all;

      for (i = 0; i < 10; i++) {

        var publishedTime = articles[i].publishedTime;

          $('#first-row').append(
              `<tr><td class="image-box"><img src="` + articles[i].image + `" width="50" height="50"></td>
              <td class="title-box"><a href="` + articles[i].url + `">` + articles[i].title + `</a></td>
              <td class="name-box">` + articles[i].profileFirstName + ` `
              + articles[i].profileLastName + `</td>
              <td class="words-box">` + articles[i].words + `</td>
              <td class="time-box">` + app.articleInfo.controller.parseTime(publishedTime) + `</td></tr>`
          );
      }

  },

  renderMore: function(dataToPrint) {
    for (j = 0; j < 10; j++){
      var publishedTime = dataToPrint[j].publishedTime;

      $('#first-row').append(
          `<tr><td class="image-box"><img src="` + dataToPrint[j].image + `" width="50" height="50"></td>
          <td class="title-box"><a href="` + dataToPrint[j].url + `">` + dataToPrint[j].title + `</a></td>
          <td class="name-box">` + dataToPrint[j].profileFirstName + ` `
          + dataToPrint[j].profileLastName + `</td>
          <td class="words-box">` + dataToPrint[j].words + `</td>
          <td class="time-box">` + app.articleInfo.controller.parseTime(publishedTime) + `</td></tr>`
      );
    }

  },

  sort: function(lastObject){

        var allArticles = app.articleInfo.all;
        var articlesToSort = [];

        for( k = 0; k <= lastObject; k++ ){
          articlesToSort.push(allArticles[k])
        }

        var sortedObj = [];
        var sortStyle = localStorage.getItem('sortingType');
        if (sortStyle === 'words-up'){
              sortedObj = _.sortBy(articlesToSort, 'words');
            }
        else if(sortStyle === 'words-down'){

              sortedObj = _.sortBy(articlesToSort, 'words').reverse();
            }
        else if (sortStyle === 'time-up'){
                sortedObj = _.sortBy(articlesToSort, 'publishedTime')
                }
        else if (sortStyle === 'time-down'){
                sortedObj = _.sortBy(articlesToSort, 'publishedTime').reverse();
                    }

          //app.articleInfo.controller.renderMore(sortedObj);
        for (l = 0; l < articlesToSort.length; l++){
          var publishedTime = sortedObj[l].publishedTime;

          $('#first-row').append(
              `<tr><td class="image-box"><img src="` + sortedObj[l].image + `" width="50" height="50"></td>
              <td class="title-box"><a href="` + sortedObj[l].url + `">` + sortedObj[l].title + `</a></td>
              <td class="name-box">` + sortedObj[l].profileFirstName + ` `
              + sortedObj[l].profileLastName + `</td>
              <td class="words-box">` + sortedObj[l].words + `</td>
              <td class="time-box">` + app.articleInfo.controller.parseTime(publishedTime) + `</td></tr>`
          );
        }


  },



  parseTime: function(publishedTime) {

   var publishedTime = new Date( publishedTime ).getTime();
   var now = new Date().getTime();


   if (publishedTime < now) {
       var milisec_diff = now - publishedTime;
   }
   else{
       var milisec_diff = publishedTime - now;
   }

   var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
   var date_diff = new Date( milisec_diff );

   if(days > 365){
     var years = Math.floor(days/365);
     return years + " years ago"}
   else if(days > 1 ) { return days + " days ago"}
   else if (hours >= 1) {return date_diff.getHours() + " hours ago"}
   else { return date_diff.getMinutes() + " minutes ago"}
 }

}
