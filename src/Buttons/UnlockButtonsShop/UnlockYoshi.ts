/// <reference path = "../Button.ts"/>

class UnlockYoshi extends Button {

    public constructor(xPos: number, yPos: number, canvas:HTMLCanvasElement){
        super(xPos, yPos, canvas);
        this.name = "UnlockYoshi";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
        );
    }
}