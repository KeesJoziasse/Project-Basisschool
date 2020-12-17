abstract class Button {
  // #MERGEFIX DIT OOK VOOR DE IMG DOEN , dan hoef je alleen de x en y pos te fixen.

  protected xPos: number;
  protected yPos: number;
  protected image: HTMLImageElement;
  protected name: string;
  protected xVelocity: number;

  constructor(xPos: number, yPos: number) {
    this.xPos = xPos;
    this.yPos = yPos;
  }

  public move(canvas: HTMLCanvasElement) {}

  public reloadImage(canvas: HTMLCanvasElement) {}

  public getButtonName(): string {
    return this.name;
  }

  public getButtonXPos(): number {
    return this.xPos;
  }

  public getButtonYPos(): number {
    return this.yPos;
  }

  public getButtonImage(): HTMLImageElement {
    return this.image;
  }

  /**
   * Returns the width of the image
   * @returns {number} - image width
   */
  public getButtonImageWidth(): number {
    return this.image.width;
  }

  /**
   * Returns the height of the image
   * @returns {number} - image height
   */
  public getButtonImageHeight(): number {
    return this.image.height;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.xPos, this.yPos);
  }
}
