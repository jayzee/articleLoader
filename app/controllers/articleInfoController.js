app.articleInfo.controller = {
  render: function(data){
      console.log("render")

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

  }

}
