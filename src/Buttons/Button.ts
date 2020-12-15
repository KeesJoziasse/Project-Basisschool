class Button {
  private name: string;
  private xPos: number;
  private yPos: number;
  private image: HTMLImageElement;

  constructor(
    name: string,
    xPos: number,
    yPos: number,
    image: string
  ) {
    this.name = name;
    this.xPos = xPos;
    this.yPos = yPos;
    this.image = this.loadNewImage(image);
  }

  public getName(): string {
    return this.name;
  }


  public getXPos(): number {
    return this.xPos;
  }

  public getYPos(): number {
    return this.yPos;
  }

  public getImage(): HTMLImageElement {
    return this.image;
  }

  /**
   * Returns the width of the image
   * @returns {number} - image width
   */
  public getImageWidth(): number {
    return this.image.width;
  }

  /**
   * Returns the height of the image
   * @returns {number} - image height
   */
  public getImageHeight(): number {
    return this.image.height;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.xPos, this.yPos);
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
