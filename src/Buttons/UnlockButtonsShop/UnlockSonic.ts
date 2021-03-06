/// <reference path = "../Button.ts"/>

class UnlockSonic extends Button {

    public constructor(xPos: number, yPos: number, canvas:HTMLCanvasElement){
        super(xPos, yPos, canvas);
        this.name = "UnlockSonic";
        this.image = Utility.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}
