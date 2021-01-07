/// <reference path = "../GameItem.ts"/>
class Player extends GameItem {
  private keyboardListener: KeyboardListener;
  private yPos: number;
  private xPos: number;
  private animationFrame: number;
  private image: HTMLImageElement;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.name = "Player";
    this.keyboardListener = new KeyboardListener();
    this.yPos = this.canvas.height / 2;
    this.xPos = this.canvas.width / 7;
    this.animationFrame = 0;
  }

  /**
   * method to move the player between the lanes
   */
  public move() {
    //IF up key is pressed the player will go down if possible
    if (
      this.keyboardListener.isKeyDown(KeyboardListener.KEY_UP) &&
      this.yPos === this.middleLane
    ) {
      this.yPos = this.topLane;
    } else if (
      this.keyboardListener.isKeyDown(KeyboardListener.KEY_UP) &&
      this.yPos === this.lowerLane
    ) {
      this.yPos = this.middleLane;
    }

    //IF down key is pressed the player will go down if possible
    if (
      this.keyboardListener.isKeyDown(KeyboardListener.KEY_DOWN) &&
      this.yPos === this.topLane
    ) {
      this.yPos = this.middleLane;
    } else if (
      this.keyboardListener.isKeyDown(KeyboardListener.KEY_DOWN) &&
      this.yPos === this.middleLane
    ) {
      this.yPos = this.lowerLane;
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    // ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
    //Animationframe goes to 1 if its 76
    this.playerAnimation();
    ctx.drawImage(this.image, this.xPos, this.yPos);
  }

  //Walking animation of the player
  private playerAnimation() {
    //Adds 1 to the frame counter.
    this.animationFrame++;

<<<<<<< Updated upstream
    if (this.animationFrame >= 20) {
      this.animationFrame -= 19;
    }
    if (this.animationFrame <= 5) {
      this.image = GameItem.loadNewImage(
        "./assets/img/Characters/AmongUs/among-us-walk-1.png"
=======
    //animated so the images will change at a certain amount of frames
    if (this.animationFrame <= 10) {
      ctx.drawImage(
        GameItem.loadNewImage(
          "./assets/img/Characters/AmongUs/among-us-walk-1.png"
        ),
        this.xPos,
        this.yPos
>>>>>>> Stashed changes
      );
    } else if (this.animationFrame > 5 && this.animationFrame <= 10) {
      this.image = GameItem.loadNewImage(
        "./assets/img/Characters/AmongUs/among-us-walk-2.png"
      );
    } else if (this.animationFrame > 10 && this.animationFrame <= 15) {
      this.image = GameItem.loadNewImage(
        "./assets/img/Characters/AmongUs/among-us-walk-3.png"
      );
    } else if (this.animationFrame > 15 && this.animationFrame <= 20) {
      this.image = GameItem.loadNewImage(
        "./assets/img/Characters/AmongUs/among-us-walk-2.png"
      );
    }
  }

  /**
   * Method that checks if a gameItem collides with the player
   * @param ScoringItem
   */
  public collidesWithScoringItem(ScoringItem: ScoringItem): boolean {
    if (
      this.xPos + this.image.width > ScoringItem.getPositionX() &&
      this.yPos <
        ScoringItem.getPositionY() + ScoringItem.getImageHeight() / 2 && 
      this.yPos + this.image.height >
        ScoringItem.getPositionY() + ScoringItem.getImageHeight() / 2
    ) {
      return true;
    }
    return false;
  }
}
