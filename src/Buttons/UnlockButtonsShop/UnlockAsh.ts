/// <reference path = "../Button.ts"/>

class UnlockAsh extends Button {

    public constructor(xPos: number, yPos: number){
        super(xPos, yPos);
        this.name = "UnlockAsh";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}