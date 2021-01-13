/// <reference path = "../Button.ts"/>

class UnlockArctic extends Button {

    public constructor(xPos: number, yPos: number, canvas:HTMLCanvasElement){
        super(xPos, yPos, canvas);
        this.name = "UnlockArctic";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}