app.articleInfo.controller = {
  render: function(data){
      console.log("render")

      var articles = app.articleInfo.all;

      for (i = 0; i < 10; i++) {

          $('#first-row').append(
              `<tr><td><img src="` + articles[i].image + `" width="45" height="45"></td>
              <td>` + articles[i].title + `</td>
              <td>` + articles[i].profileFirstName + ` ` + articles[i].profileLastName + `</td>
              <td>` + articles[i].words + `</td>
              <td>6 minutes ago</td></tr>`
          );
      }

  }

}
