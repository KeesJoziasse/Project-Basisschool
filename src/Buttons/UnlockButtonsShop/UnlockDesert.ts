/// <reference path = "../Button.ts"/>

class UnlockDesert extends Button {

    public constructor(xPos: number, yPos: number){
        super(xPos, yPos);
        this.name = "UnlockDesert";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}