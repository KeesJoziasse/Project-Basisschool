/// <reference path = "../Button.ts"/>

class UnlockGirlCharacter extends Button {

    public constructor(xPos: number, yPos: number, canvas:HTMLCanvasElement){
        super(xPos, yPos, canvas);
        this.name = "UnlockGirlCharacter";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}