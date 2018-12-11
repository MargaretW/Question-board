$(document).ready(function() {

  $("form#Questions").submit(function(event) {
    var quizOne = $("input:radio[name=choice1]:checked").val();
    var quizTwo = $("input:radio[name=choice2]:checked").val();
    var quizThree = $("input:radio[name=choice3]:checked").val();
    var quizFour = $("input:radio[name=choice4]:checked").val();
    var quizFive = $("input:radio[name=choice5]:checked").val();
    var quizSix = $("input:radio[name=choice6]:checked").val();
    var quizSeven = $("input:radio[name=choice7]:checked").val();

    var totalScore = parseInt(quizOne) + parseInt(quizTwo) + parseInt(quizThree) + parseInt(quizFour) + parseInt(quizFive) + parseInt(quizSix) + parseInt(quizSeven);
    $("#results").text("Your total score is: " + totalScore + " out of 30");

    $("form#Questions").slideUp(3000);

    $("#results").show(2800);

    if (totalScore < 20) {
      alert("need more study then retry another day")
    } else {
      alert("good but can do better")
    }

    event.preventDefault();
  });

});
