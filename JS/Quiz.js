class Quiz{
    constructor(){

        
    }

    // function getGameState .. reads the gameState from DB
    getState () {
        //refer to gameState location in DB
        var gameStateRef = database.ref ("/gameState");
        // listen to gameState changes in DB
        gameStateRef.on ("value", 
                        function(data){
                            gameState = data.val ();
                        }
        );
    }

    // function updateGameState .. updates gameState in the DB
    update (state) {
        var gameStateRef = database.ref ("/");
        gameStateRef.update ({"gameState" : state}) ;
    }

    async start() {
      if(gameState === 0) {
        contestant = new Contestant();
        var contestantCountRef = await database.ref("contestantCount").once("value");
        if(contestantCountRef.exsits()){
           contestantCount = contestantCountRef.val();
           contestant.getCount();
        }
        question = new Question();
        question.display();
      }
    
    play()
      this.title.hide ();
        this.input1.hide ();
        this.button.hide ();
        change.background("yellow");
        var title1 = createElement ("h2");
        title1.html ("Result of the Quiz");
        title1.position (130,0);
        contestant.getContestantInfo();
        if (allContestants != undefined) {
          text("Contestant who ansewered correct are highlited in green colour!", 120, 100);
        for(var players in allContestants){
          var correctAns = "2";
          if (correctAns === allContestants[players].answer)
            fill("green");
        else
            fill("red");
    }
  }
}
