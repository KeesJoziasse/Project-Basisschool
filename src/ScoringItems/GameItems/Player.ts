/// <reference path = "../GameItem.ts"/>

class Player extends GameItem {
  private keyboardListener: KeyboardListener;

  protected animationFrame: number;
  protected yPos: number;
  protected xPos: number;
  protected image: HTMLImageElement;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.keyboardListener = new KeyboardListener();
    // this.yPos = this.canvas.height / 2;
    // this.xPos = this.canvas.width / 7;
    this.animationFrame = 0;
  }

  /**
   * method to move the player between the lanes
   */
  public move() {
    //move from middlelane to toplane
    if (
      this.keyboardListener.isKeyDown(KeyboardListener.KEY_1) &&
      this.yPos === this.middleLane
    ) {
      this.yPos = this.topLane;
    }

    //move from toplane to middlelane + move from lowerlane to middlelane
    if (
      this.keyboardListener.isKeyDown(KeyboardListener.KEY_2) &&
      this.yPos === this.topLane
    ) {
      this.yPos = this.middleLane;
    } else if (
      this.keyboardListener.isKeyDown(KeyboardListener.KEY_2) &&
      this.yPos === this.lowerLane
    ) {
      this.yPos = this.middleLane;
    }

    //move from middlelane to lowerlane
    if (
      this.keyboardListener.isKeyDown(KeyboardListener.KEY_3) &&
      this.yPos === this.middleLane
    ) {
      this.yPos = this.lowerLane;
    }
  }

  //Will be overwritten by AmongUs class
  public characterAnimation(){}
  
  public draw() {
    console.log(this.image);
    this.characterAnimation();
  }


  //Walking animation of the player
  private playerAnimation() {
    const ctx = this.canvas.getContext("2d");
    //Adds 1 to the frame counter.
    this.animationFrame++;

    //animated so the images will change at a certain amount of frames
    if (this.animationFrame <= 10) {
      ctx.drawImage(
        GameItem.loadNewImage(
          "./assets/img/Characters/AmongUs/among-us-walk-1.png"
        ),
        this.xPos,
        this.yPos
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

  /*** Method that checks if a gameItem collides with the player    
  ** @param ScoringItem    
  **/ 
  public collidesWithScoringItem(ScoringItem: ScoringItem): boolean {
    if (
      this.xPos + this.image.width > ScoringItem.getPositionX() &&
      this.yPos <
        ScoringItem.getPositionY() + ScoringItem.getImageHeight() / 2 &&
      this.yPos + this.image.height >
        ScoringItem.getPositionY() + ScoringItem.getImageHeight() / 2 &&
      this.xPos < ScoringItem.getImageWidth() + ScoringItem.getPositionX()
    ) {
      return true;
    }
    return false;
  }
}
