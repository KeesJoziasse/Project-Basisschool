/// <reference path="Player.ts" />

class Girl extends Player {
  private walk1: HTMLImageElement;
  private walk2: HTMLImageElement;
  private walk3: HTMLImageElement;

  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.walk1 = Utility.loadNewImage(
      "./assets/img/Characters/GirlCharacter/girl-walk-1.png"
    );
    this.walk2 = Utility.loadNewImage(
      "./assets/img/Characters/GirlCharacter/girl-walk-2.png"
    );
    this.walk3 = Utility.loadNewImage(
      "./assets/img/Characters/GirlCharacter/girl-walk-3.png"
    );
  }

  public characterAnimation() {
    const ctx = this.canvas.getContext("2d");
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
    ctx.drawImage(this.image, this.xPos, this.yPos);
  }
}
