/// <reference path="Player.ts" />

class AmongUs extends Player {
    public constructor(canvas:HTMLCanvasElement){
        super(canvas);
    }

    public AmongUsAnimation(){
    //Adds 1 to the frame counter.
    this.animationFrame++;
        
    if (this.animationFrame >= 20) {
        this.animationFrame -= 19;
      }
      if (this.animationFrame <= 10) {
        this.image = GameItem.loadNewImage(
          "./assets/img/Characters/AmongUs/among-us-walk-1.png"
        );
      } else if (this.animationFrame > 10 && this.animationFrame <= 20) {
        this.image = GameItem.loadNewImage(
          "./assets/img/Characters/AmongUs/among-us-walk-2.png"
        );
      } else if (this.animationFrame > 20 && this.animationFrame <= 30) {
        this.image = GameItem.loadNewImage(
          "./assets/img/Characters/AmongUs/among-us-walk-3.png"
        );
      } else if (this.animationFrame > 30 && this.animationFrame <= 40) {
        this.image = GameItem.loadNewImage(
          "./assets/img/Characters/AmongUs/among-us-walk-2.png"
        );
      }
    }
}