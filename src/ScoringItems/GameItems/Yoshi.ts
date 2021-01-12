/// <reference path="Player.ts" />

class Yoshi extends Player {
  private walk1: HTMLImageElement;

  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.walk1 = GameItem.loadNewImage(
      "./assets/img/Characters/Yoshi/yoshi.png"
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
        this.image = this.walk1
        this.xPos =  this.xPos = this.canvas.width / 84 * 12;
    } else if (this.animationFrame > 10 && this.animationFrame <= 20) {
        this.image = this.walk1
        this.xPos =  this.xPos = this.canvas.width / 84 * 13;
    } else if (this.animationFrame > 20 && this.animationFrame <= 30) {
        this.image = this.walk1
        this.xPos =  this.xPos = this.canvas.width / 84 * 14;
    } else if (this.animationFrame > 30 && this.animationFrame <= 40) {
        this.image = this.walk1
        this.xPos =  this.xPos = this.canvas.width / 84 * 13;
    }
    ctx.drawImage(this.image, this.xPos, this.yPos);
  }
}
