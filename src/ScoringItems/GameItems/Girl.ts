/// <reference path="Player.ts" />

class Girl extends Player {

    private walk1:HTMLImageElement;
    private walk2:HTMLImageElement;
    private walk3:HTMLImageElement;
  
    public constructor(canvas: HTMLCanvasElement, characterName: string) {
      super(canvas, characterName);
      this.walk1 = GameItem.loadNewImage(
        "./assets/img/Characters/GirlCharacter/girl-walk-1.png"
      );
      this.walk2 = GameItem.loadNewImage(
        "./assets/img/Characters/GirlCharacter/girl-walk-2.png"
      );
      this.walk3 = GameItem.loadNewImage(
        "./assets/img/Characters/GirlCharacter/girl-walk-3.png"
      );
    }
  
    public AmongUsAnimation() {
      //Adds 1 to the frame counter.
      this.animationFrame++;
  
      if (this.animationFrame >= 20) {
        this.animationFrame -= 19;
      }
      if (this.animationFrame <= 10) {
        this.image = this.walk1;
      } else if (this.animationFrame > 10 && this.animationFrame <= 20) {
        this.image = this.walk2;
      } else if (this.animationFrame > 20 && this.animationFrame <= 30) {
        this.image = this.walk3;
      } else if (this.animationFrame > 30 && this.animationFrame <= 40) {
        this.image = this.walk2;
      }
    }
  }