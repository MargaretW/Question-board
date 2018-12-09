var correctAnswer =["a","c","b","c","b","a","b"]














$(document).ready (function(){
  $("h1").mouseover (function(){
    alert("click start to begining the quiz")
  });
  $(".start").click (function(){
    $("#Questions").slideDown("3000")
  });
     $("#Questions").submit(function(event){

       $("#total-score").show ()

     });

 });
