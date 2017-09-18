$(document).ready(function(){
let list = {}
    $.get('https://lit-fortress-6467.herokuapp.com/object', function(data){

      let albums = []
      for (let i = 0;i<(data.results.length);i++){
          // console.log(data.results[i].title)
      let img = $('<img class="test">');
      let image = `images/${data.results[i].cover_art}`
          img.attr('src', image);
          img.appendTo(`.minion${i+1}`);
          $(`#link${i+1}`).click(function(){
            let dryMyAss = $("#out1 p").append(data.results[i].title+"<br>")
            $(this).off("click").attr('href', "javascript: void(0);");
            albums.push(data.results[i].title);
            list.title = albums
            console.log(list)
          })

          $(`#clear`).click(function(){
            $("#out1 p").html("")
            $(`#link${i+1}`).click(function(){
              $("#out1 p").append(data.results[i].title+"<br>")
              $(this).off("click").attr('href', "javascript: void(0);");
            })

          })

      }
    })

    $("#submit").click(function(){
    $.post("https://lit-fortress-6467.herokuapp.com/post",
      list
    ,
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});
  })

//     $.post("https://lit-fortress-6467.herokuapp.com/post", function(data){
//       data = list
//     }, 'xml');
// })



// function clickFunc(ev){
//   let dry1 = $("#out1 p").append(data.results[i].title+"<br>")
//   let dry2 = $(this).off("click").attr('href', "javascript: void(0);");
//
// }
