/// <reference path = "../Button.ts"/>

class UnlockMorty extends Button {

    public constructor(xPos: number, yPos: number){
        super(xPos, yPos);
        this.name = "UnlockMorty";
        this.image = Start.loadNewImage(
            "./assets/img/buttons/unlock.png"
          );
    }
}
