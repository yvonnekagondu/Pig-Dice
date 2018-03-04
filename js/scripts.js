$(document).ready(function() {
  $(".start").click(function() {

    $(".rules").toggle();
  });
});

$(document).ready(function() {
  $(".next").click(function() {

    $(".section1").toggle();

  });
});

$(document).ready(function() {
  $(".save").click(function() {

    $(".game").toggle();
    $(".Dice").toggle();
    $(".res").toggle();
  });
});

// business logic

var playersArray = []
var turnRollArray = []

function Player(playerName, score) {
  this.playerName = playerName;
  this.score = score;
  playersArray.push(this);
}

Array.prototype.sum= function() {
  return this.reduce(function(a,b) { return a + b
  });
}

// user interface logic
$(document).ready(function() {
  $("form#player-details").submit(function(event) {
    event.preventDefault();

    var inputtedplayer1 = $("input#player1").val();
    var inputtedplayer2 = $("input#player2").val();
    var player1 = new Player(inputtedplayer1, 0);
    var player2 = new Player(inputtedplayer2, 0);
    $("#plaayer1Display").text(playersArray[0].playerName).show();
    showNamesAndScores();
    $("form").hide();
    $(".game").show();
  });

  $("#diceRoll").click(function(event) {
    event.preventDefault();
    $("#result").show();
    $(".showTurnTotal").show();
    var randomRoll = (1+ Math.floor(Math.random() * 6));
    $("result").text(randomRoll);
    if (randomRoll >= 2) {
      turnRollArray.push(randomRoll);
      $("#totaltotal").text(turnRollArray.sum());
    }else {
      rollOneChangePlayers();
    }
  });
})
// <h1 class="test">78</h1>
// $(document).ready(function() {
//   var v = $('.test')
//   var x = parseInt(v.text()) + 1;
//   v.text(x)
//   console.log(x)
//
//
// });
