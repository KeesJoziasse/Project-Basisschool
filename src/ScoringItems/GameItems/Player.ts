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

  /*** Method that checks if a gameItem collides with the player    
  ** @param ScoringItem    
  **/ public collidesWithScoringItem(
    ScoringItem: ScoringItem
  ): boolean {
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
