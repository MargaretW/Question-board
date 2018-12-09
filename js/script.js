var correctAnswer =["a","c","b","c","b","a","b"]
var userChoices =[]














$(document).ready (function(){
  $("h1").mouseover (function(){
    alert("click start to begining the quiz")
  });
  $(".start").click (function(){
    $("#Questions").slideDown("3000")
    $(".start").hide()
  });
     $("#Questions").submit(function(event){
       if (isNaN(userChoices)){
         alert("please answer all question")
       }else $("this").submit();


       $("#total-score").show ()

     });

 });
