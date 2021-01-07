/// <reference path = "../Button.ts"/>

class UnlockArctic extends Button {

    public constructor(xPos: number, yPos: number){
        super(xPos, yPos);
        this.name = "UnlockArctic";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}