app.articleInfo.controller = {
  render: function(data){

      var articles = app.articleInfo.all;

      for (i = 0; i < 10; i++) {

        var publishedTime = Date.parse(articles[i].publishDate);
        var timeNow = Date.now();
        var timeDifference = timeNow - publishedTime;
        var diffInMinutes = Math.round(((timeDifference % 86400000) % 3600000) / 60000);
        var diffHrs = Math.round((timeDifference % 86400000) / 3600000);
        //http://stackoverflow.com/questions/7709803/javascript-get-minutes-between-two-dates


          $('#first-row').append(
              `<tr><td class="image-box"><img src="` + articles[i].image + `" width="50" height="50"></td>
              <td class="title-box"><a href="` + articles[i].url + `">` + articles[i].title + `</a></td>
              <td class="name-box">` + articles[i].profileFirstName + ` `
              + articles[i].profileLastName + `</td>
              <td class="words-box">` + articles[i].words + `</td>
              <td class="time-box">` + diffInMinutes + ` hours ago` + `</td></tr>`
          );
      }

  },

  renderMore: function(dataToPrint) {
    for (j = 0; j < 10; j++){
      
      $('#first-row').append(
          `<tr><td class="image-box"><img src="` + dataToPrint[j].image + `" width="50" height="50"></td>
          <td class="title-box"><a href="` + dataToPrint[j].url + `">` + dataToPrint[j].title + `</a></td>
          <td class="name-box">` + dataToPrint[j].profileFirstName + ` `
          + dataToPrint[j].profileLastName + `</td>
          <td class="words-box">` + dataToPrint[j].words + `</td>
          <td class="time-box"> 6 hours ago` + `</td></tr>`
      );


    }


  }

}
