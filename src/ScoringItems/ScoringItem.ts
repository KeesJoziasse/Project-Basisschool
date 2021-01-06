abstract class ScoringItem {
  private canvas: HTMLCanvasElement;

  private topLane: number;
  private middleLane: number;
  private lowerLane: number;

  protected points: number;
  protected image: HTMLImageElement;
  protected speed: number;
  protected lives: number;
  private xPosition: number;
  private yPosition: number;

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
<<<<<<< Updated upstream
    this.speed = -(this.canvas.width / 100);
=======
    this.speed = -8;
>>>>>>> Stashed changes

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

  /**
   * Moves the scoring items
   */
  public move() {
    this.xPosition += this.speed;
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
