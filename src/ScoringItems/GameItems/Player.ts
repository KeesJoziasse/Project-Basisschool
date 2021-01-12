/// <reference path = "../GameItem.ts"/>

abstract class Player extends GameItem {
  private keyboardListener: KeyboardListener;

  protected animationFrame: number;
  protected yPos: number;
  protected xPos: number;
  protected image: HTMLImageElement;
  protected characterName: string;

  constructor(canvas: HTMLCanvasElement, charactername: string) {
    super(canvas);
    this.keyboardListener = new KeyboardListener();
    this.yPos = this.canvas.height / 2;
    this.xPos = this.canvas.width / 7;
    this.animationFrame = 0;
    this.characterName = charactername;

    if (this.characterName === "AmongUs") {
    }
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

  // public draw(ctx: CanvasRenderingContext2D) {
  //   // ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  //   //Animationframe goes to 1 if its 76
  //   this.playerAnimation();
  //   ctx.drawImage(this.image, this.xPos, this.yPos);
  // }

  //Walking animation of the player
  // private playerAnimation() {
  //   //Adds 1 to the frame counter.
  //   this.animationFrame++;
  // }

  //Will be overwritten by AmongUs class
  public AmongUsAnimation(){}
  
  public draw(ctx: CanvasRenderingContext2D) {
    //Checks characterName for the right CharacterAnimation
    if (this.characterName === "AmongUs") {
      this.AmongUsAnimation();
    }

    ctx.drawImage(this.image, this.xPos, this.yPos);
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
