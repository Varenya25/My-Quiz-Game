var canva;
var contestantCount;
var database;
var quiz;
var question;
var contestant;
var gameState = 0;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz ();
  quiz.getState ();
  quiz.start ();
}

function draw(){
  background("pink");

  if (playerCount == 4){
    game.updateGameState (1);
  }

  if(gameState == 1){
    clear ();
    game.play();
    drawSprites();
   }

}
