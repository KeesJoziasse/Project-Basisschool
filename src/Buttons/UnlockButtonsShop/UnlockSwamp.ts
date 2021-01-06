/// <reference path = "../Button.ts"/>

class UnlockSwamp extends Button {

    public constructor(xPos: number, yPos: number){
        super(xPos, yPos);
        this.name = "UnlockSwamp";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}