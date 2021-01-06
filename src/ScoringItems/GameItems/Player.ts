/// <reference path = "../GameItem.ts"/>

class Player extends GameItem {
  private keyboardListener: KeyboardListener;
  private image: HTMLImageElement;
  private yPos: number;
  private xPos: number;
  private animationFrame: number;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.name = "Player";
    this.image = GameItem.loadNewImage(
      "./assets/img/Characters/Amongus/among-us-walk-1.png"
    );
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
    //Animationframe goes to 1 if its 76
    this.animationFrame++;
    if (this.animationFrame >= 40) {
      this.animationFrame -= 39;
    }

    //animated so the images will change at a certain amount of frames
    if (this.animationFrame <= 10) {
      ctx.drawImage(
        GameItem.loadNewImage(
          "./assets/img/Characters/AmongUsa/among-us-walk-1.png"
        ),
        this.xPos,
        this.yPos
      );
    } else if (this.animationFrame >= 10 && this.animationFrame <= 20) {
      ctx.drawImage(
        GameItem.loadNewImage(
          "./assets/img/Characters/Amongus/among-us-walk-2.png"
        ),
        this.xPos,
        this.yPos
      );
    } else if (this.animationFrame >= 20 && this.animationFrame <= 30) {
      ctx.drawImage(
        GameItem.loadNewImage(
          "./assets/img/Characters/AmongUs/among-us-walk-3.png"
        ),
        this.xPos,
        this.yPos
      );
    } else if (this.animationFrame >= 30 && this.animationFrame <= 40) {
      ctx.drawImage(
        GameItem.loadNewImage(
          "./assets/img/Characters/AmongUs/among-us-walk-2.png"
        ),
        this.xPos,
        this.yPos
      );
    }
  }

  /**
   * Method that checks if a gameItem collides with the player
   * #TODO wordt nog niet aangesproken
   * @param GameItem
   */
  public collidesWithScoringItem(ScoringItem: ScoringItem): boolean {
    if (
      this.xPos < ScoringItem.getPositionX() + ScoringItem.getImageWidth() &&
      this.xPos + this.image.width > ScoringItem.getPositionX() &&
      this.canvas.width - 200 <
        ScoringItem.getPositionY() + ScoringItem.getImageHeight() &&
      this.canvas.width - 200 + this.image.width > ScoringItem.getPositionY()
    ) {
      return true;
    }
    return false;
  }
}
