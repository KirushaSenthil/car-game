class Form{
    constructor(){
        this.title=createElement('h2')
        this.input=createInput("").attribute("placeholder","name")
        this.button=createButton("Start")
        this.greeting=createElement('h3')
    }
    display(){
       
       this.title.html("Multiplayer Car Racing Game")
       this.title.position(360,100)
        
        this.input.position(360,150)
      
        this.button.position(360,180)
       this. button.mousePressed(()=>{
           this.input.hide()
            this.button.hide()
           
            player.name= this.input.value()
            playerCount=playerCount+1
            player.updateCount(playerCount)
            this.greeting.html("welcome"+player.name)
            this.greeting.position(360,190)
        })

    }

    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    
    

}