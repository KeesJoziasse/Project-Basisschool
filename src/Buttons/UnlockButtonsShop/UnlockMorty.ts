/// <reference path = "../Button.ts"/>

class UnlockMorty extends Button {

    public constructor(xPos: number, yPos: number, canvas:HTMLCanvasElement){
        super(xPos, yPos, canvas);
        this.name = "UnlockMorty";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}
