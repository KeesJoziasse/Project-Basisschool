/// <reference path = "../Button.ts"/>

class UnlockDesert extends Button {

    public constructor(xPos: number, yPos: number, canvas:HTMLCanvasElement){
        super(xPos, yPos, canvas);
        this.name = "UnlockDesert";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}