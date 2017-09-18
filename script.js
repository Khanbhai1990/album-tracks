$(document).ready(function(){

    $.get('https://lit-fortress-6467.herokuapp.com/object', function(data){

      let arr = []

      for (let i = 0;i<data.results.length;i++){
         arr.push(i)
         if (arr.length === data.results.length){
                 for (let i = arr.length - 1; i > 0; i--) {
             let j = Math.floor(Math.random() * (i + 1));
             let temp  = arr[i];
             arr[i] = arr[j];
             arr[j] = temp;
         }

        }

//the random shuffle above is the Fisher–Yates Shuffle I got from the web
/*
here is my attempt(it works!) but one error on my part could make it a potential infinite loop, thus I used a safer option
let arr1 = [0,1,2,3,4]
function random(arr){
  let ogArr = arr
  let arr2 = []
  while(arr2.length<arr.length){
    console.log(arr2.length)
    let rand = Math.floor(Math.random() * ogArr.length)
    for (let i =0;i<ogArr.length;i++){
      if(rand === ogArr[i]){
        arr2.push(ogArr[i])
        delete ogArr[i]
        ogArr[i] = ogArr[ogArr.length-1]
        ogArr.pop()
      }
    }
 }
 return arr2
}
random(arr1)
*/

      }
      for (let i = 0;i<=(arr.length-2);i++){
      let image = `images/${data.results[arr[i]].cover_art}`
      var img = $('<img class="test">');
          img.attr('src', image);
          img.appendTo(`#minion${i+1}`);

          }

    })
})
