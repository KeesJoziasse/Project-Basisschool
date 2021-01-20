abstract class ScoringItem {
  private canvas: HTMLCanvasElement;
  private topLane: number;
  private middleLane: number;
  private lowerLane: number;
  protected points: number;
  protected image: HTMLImageElement;
  protected speed: number;
  protected lives: number;
  protected name: string;
  protected earnedCoins: number;
  private xPosition: number;
  private yPosition: number;
  private frame: number;
  

  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    this.topLane = this.canvas.height / 4;
    this.middleLane = this.canvas.height / 2;
    this.lowerLane = (this.canvas.height / 4) * 3;

    const random = GameItem.randomInteger(1, 3);
    if (random === 1) {
      this.yPosition = this.topLane;
    }
    if (random === 2) {
      this.yPosition = this.middleLane;
    }
    if (random === 3) {
      this.yPosition = this.lowerLane;
    }

    //Speed of the scoring objects
    this.xPosition = this.canvas.width;
  }

  //Getters
  public getPositionX(): number {
    return this.xPosition;
  }
  public getPositionY(): number {
    return this.yPosition;
  }
  public getImageWidth(): number {
    return this.image.width;
  }
  public getImageHeight(): number {
    return this.image.height;
  }
  public getPoints(): number {
    return this.points;
  }
  public getLives(): number{
    return this.lives;
  }
  public getName(): string{
    return this.name;
  }

  public getCoinValue(): number{
    return this.earnedCoins;
  }
// test
  public getSpeed(): number{
    return this.speed;
  }

  /**
   * Moves the scoring items
   */
  public move(frame:number) {
    this.frame = frame;
    console.log(this.frame);
    //Speed changes based on the frames
    if(this.frame > 0 && this.frame < 500){
      this.xPosition -= 10;
    } else if(this.frame > 500 && this.frame < 1000){
      this.xPosition -= 11;
    } else if(this.frame > 1000 && this.frame < 1500){
      this.xPosition -= 12;
    } else if(this.frame > 1500 && this.frame < 2000){
      this.xPosition -= 13;
    } else if(this.frame > 2000 && this.frame < 2500){
      this.xPosition -= 14;
    } else if(this.frame > 2500 && this.frame < 3000){
      this.xPosition -= 14;
    } else if(this.frame > 3000 && this.frame < 3500){
      this.xPosition -= 15;
    } else if(this.frame > 3500 && this.frame < 4000){
      this.xPosition -= 15;
    } else if(this.frame > 4000 && this.frame < 4500){
      this.xPosition -= 16;
    } else if(this.frame > 4500 && this.frame < 5000){
      this.xPosition -= 16;
    } else if(this.frame > 5000 && this.frame < 5500){
      this.xPosition -= 17;
    } else if(this.frame > 5500 && this.frame < 6000){
      this.xPosition -= 18;
    } else if (this.frame > 6000){
      this.xPosition -= 19;
    }
    
  }

  /**
   * Render the objects
   * @param ctx The CanvasRenderingContext2D of the canvas to draw on
   */
  public draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image,
      // Center the image in the lane with the x coordinates
      this.xPosition,
      this.yPosition
    );
  }

  /**
   * Method that removes an scoringItem after it collides with the player or the left side of the canvas (out of screen);
   */
  public outOfCanvas(): boolean {
    if (this.xPosition + this.image.width < 0) {
      return true;
    }
    return false;
  }

  /**
   * Loads an image so it doesn't flicker
   * @param {HTMLImageElement} source
   * @return HTMLImageElement - returns an image
   */
  public loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }
}
