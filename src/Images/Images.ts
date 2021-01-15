abstract class Images {
  protected xPos: number;
  protected yPos: number;
  protected image: HTMLImageElement;
  protected name: string;
  protected xVelocity: number;
  protected canvas: HTMLCanvasElement;

  constructor(xPos: number, yPos: number) {
    this.xPos = xPos;
    this.yPos = yPos;
  }

  public move(canvas: HTMLCanvasElement) {}

  public reloadImage(canvas: HTMLCanvasElement) {}

  public getImageName(): string {
    return this.name;
  }

  public getImageXPos(): number {
    return this.xPos;
  }

  public getImageYPos(): number {
    return this.yPos;
  }

  public getImageImage(): HTMLImageElement {
    return this.image;
  }

  /**
   * Returns the width of the image
   * @returns {number} - image width
   */
  public getImageImageWidth(): number {
    return this.image.width;
  }

  /**
   * Returns the height of the image
   * @returns {number} - image height
   */
  public getImageImageHeight(): number {
    return this.image.height;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.xPos, this.yPos);
    //console.log(this.getImageName());
  }
}
