class Form{
    constructor(){
        var title = createElement ("h2");
        title.html ("My Quiz Game");
        title.position (130,0);

        this.input1 = createInput("Enter you name here...");
        this.input1.position(100,650);
    
        this.input2 = createInput("Enter the correct option here...");
        this.input2.position(300,650);
      
        
    }

    display(){
       this.title.html("My Quiz Game");
       this.title.position(350,0);

       this.question.html(" Question : What starts and ends with the letter 'E'  but has only has one letter? ");
       this.question.position(150,80);
       this.option1.html(" 1. Everyone ");
       this.option1.position(150,80);
       this.option2.html(" 2. Envelope ");
       this.option2.position(150,100);
       this.option3.html(" 3. Estimate ");
       this.option3.position(150,120);
       this.option4.html(" 4. Example ");
       this.option4.position(150,140);

    hide ();{
        this.input1.hide();
        this.input2.hide ();
        this.button.hide ();
    }




    }










}