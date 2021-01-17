/// <reference path = "../Button.ts"/>

class UnlockAmongUs extends Button {

    public constructor(xPos: number, yPos: number, canvas:HTMLCanvasElement){
        super(xPos, yPos, canvas);
        this.name = "UnlockAmongUs";
        this.image = Utility.loadNewImage(
            "./assets/img/buttons/unlock.png"
        );
        this.canvas = canvas;
    }

    public drawUnlockedAmongUs(){
        const ctx = this.canvas.getContext("2d"); 
        ctx.drawImage(Utility.loadNewImage("./assets/img/players/YellowAUUnlocked.png"), this.canvas.width / 2.9, this.canvas.height / 6 );
    }

    
}