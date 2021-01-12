/// <reference path = "../Button.ts"/>

class UnlockAsh extends Button {

    public constructor(xPos: number, yPos: number, canvas:HTMLCanvasElement){
        super(xPos, yPos, canvas);
        this.name = "UnlockAsh";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}