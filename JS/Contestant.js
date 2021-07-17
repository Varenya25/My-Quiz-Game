class Contestant{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    
        this.button = createButton("SUBMIT")
        this.button = (200,750);
    
    }

    
        getContestantCount () {
        //refer to gameState location in DB
        var ContestantCountRef = database.ref ('/ContestantCount');
        // listen to gameState changes in DB
        ContestantCountRef.on ("value", 
                        function(data){
                            ContestantCount = data.val ();
                        }
        );        
    }
    updateContestantCount (count) {
         
    var ContestantCountRef = database.ref ("/");
        ContestantCountRef.update ({"ContestantCount" : count}) ;
    }
    
    updateContestantNameAndDistance () {
        
        var ContestantIndex = "Contestants/Contestant"+this.index;
        database.ref (ContestantIndex).set ({Name : this.name, distance : this.distance});
    }
    
    static getContestantInfo (){
        //fetch all Contestants info to global var allContestantss
        var ContestantInfoRef = database.ref("/Contestants")
        ContestantInfoRef.on("value", (data)=>{allContestants = data.val ();});


    }

    display(){
         this.button.mousePressed (()=> {
          this.title.hide ();
          this.input1.hide ();
          this.button.hide ();
          contestant.name = this.input.value();
          contestantCount+=1;
          contestant.index = contestantCount;
          contestant.update();
          contestant.updateCount(contestantCount);
         });