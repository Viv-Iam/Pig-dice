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
  this.turn = initial
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
}

  //WHEN PLAYER SCORES 100//
  PigD.prototype.scorehundred = function () {
    if (this.totalscore >= 100) {
      alert(this.pName + " is the WINNER!");
    }
  }
  //TO PLAY AGAIN//
  PigD.prototype.playAgain = function () {
    this.roll = 0;
    this.roundscore = 0;
    this.totalscore = 0;
    this.pName ="";
  }
  var clearValues = function(){
    $("firstplayer").val("");
    $(".secondplayer").val("");
  }
  //USER INTERFACE//
  $(document).ready(function() {
  $("button#play").click(function(event){
    pone = new PigD(true);
    ptwo =  new PigD(false);
    $(".game").show();
    $(".nameinput").hide();

    var firstplayer = $(".firstplayer").val();
    $("#firstplayer").text(firstplayer);

    var secondplayer = $(".secondplayer").val();
    $("#secondplayer").text(secondplayer);

    pone.pName=firstplayer;
    ptwo.pName=secondplayer;
    });

    $("button#play-again").click(function(event){
      $(".game").hide();
      clearValues();
      pone.playAgain();
      ptwo.playAgain();
      $("#turntotal-1").empty();
      $("#totalscore-1").empty();
      $("#rolldie-1").empty();
      $("#turntotal-2").empty();
      $("#totalscore-2").empty();
      $("#rolldie-2").empty();

      $(".nameinput").show();
    });

    $("button#roll-1").click(function(event){
      pone.roll = rollDie();
      $("#rolldie-1").text(pone.roll);
      pone.rollone();
      $("#turntotal-1").text(pone.roundscore);
    });

    $("button#roll-2").click(function(event){
      ptwo.roll = rollDie();
      $("#rolldie-2").text(ptwo.roll);
      ptwo.rollone();
      $("#turntotal-2").text(ptwo.roundscore);
    });

    $("button#hold-1").click(function(event){
      pone.hold();
      $("#totalscore-1").text(pone.totalscore);
      $("#turntotal-1").empty();
      $("#rolldie-1").empty();
      pone.scorehundred();
    });

    $("button#hold-2").click(function(event){
      ptwo.hold();
      $("#totalscore-2").text(ptwo.totalscore);
      $("#turntotal-2").empty();
      $("#rolldie-2").empty();
      ptwo.scorehundred();
    });

  });
