/// <reference path = "../Button.ts"/>

class UnlockSwamp extends Button {

    public constructor(xPos: number, yPos: number, canvas:HTMLCanvasElement){
        super(xPos, yPos, canvas);
        this.name = "UnlockSwamp";
        this.image = Utility.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}