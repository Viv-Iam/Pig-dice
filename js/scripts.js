//BUISNESS LOGIC//
var pone="";
var ptwo="";

//GENERATES RANDOM NUMBERS//
var rollDie = function () {
  return Math.floor(6*Math.random())+1;
}

//OBJECT INITIAL PLAY//
function PigD(initial) {
  this.roll = 0;
  this.roundscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.pName;
}

//WHEN PLAYER ROLLS 1//
PigD.prototype.rollone = function() {
  if (this.roll === 1) {
  this.roundscore = 0;
  alert(this.pName + ", you scored 0 Your turn is over!")

  //IF ROLL != 1 PLAYER KEEPS PLAYING//
} else {
this.roundscore += this.roll;
}
}

//WHEN PLAYER CHOOSES TO HOLD//
PigD.prototype.hold = function () {
  this.totalscore += this.roundscore;

  //ONCE HAVE SCORE ADDED ROUNDSCORE MADE 0 AGAIN//
  this.roundscore = 0;
  alert(this.pName + ", your turn is over");

  //WHEN PLAYER SCORES 100//
  Player.prototype.scorehundred = function () {
    if (this.totalscore >= 100) {
      alert(this.pName + " is the WINNER!");
    }
  }

  //TO PLAY AGAIN//
  Player.prototype.playAgain = function () {
    this.roll = 0;
    this.roundscore = 0;
    this.totalscore = 0;
    this.pName ="";
  }
  var clearValues = function(){
    $(".input1").val("");
    $(".input2").val("");
  }
  //USER INTERFACE//
  $("button#play").click(function(event){
    pone = new Player(true);
    ptwo =  new Player(false);
    $(".game").show();
    $(".nameinput").hide();

    var playerone = $(".input1").val();
    $("#span-pone").text(playerone);

    var playertwo = $(".input2").val();
    $("#span-ptwo").text(playertwo);

    pone.pName=playerone;
    ptwo.pName=playertwo;
    });

    $("button#play-again").click(function(event){
      $(".game").hide();
      clearValues();
      pone.playAgain();
      ptwo.nplayAgain();
      $("#turntotal1").empty();
      $("#totalscore1").empty();
      $("#roll-1").empty();
      $("#rturntotal2").empty();
      $("#totalscore2").empty();
      $("#roll-2").empty();

      $(".nameinput").show();
    });

    $("button#roll1").click(function(event){
      pone.roll = rollDie();
      $("#roll-1").text(pone.roll);
      pone.rollone();
      $("#turntotal1").text(pone.roundscore);
    });

    $("button#roll2").click(function(event){
      ptwo.roll = rollDie();
      $("#roll-2").text(ptwo.roll);
      player2.rollone();
      $("#turntotall2").text(ptwo.roundscore);
    });

    $("button#hold1").click(function(event){
      pone.hold();
      $("#totalscore1").text(pone.totalscore);
      $("#turntotal1").empty();
      $("#roll-1").empty();
      pone.scorehundred();
    });

    $("button#hold2").click(function(event){
      ptwo.hold();
      $("#totalscore2").text(ptwo.totalscore);
      $("#turntotal2").empty();
      $("#roll-2").empty();
      ptwo.scorehundred();
    });

  });
