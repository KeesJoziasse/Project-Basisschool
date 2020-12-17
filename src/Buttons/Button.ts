abstract class Button {
  private canvas: HTMLCanvasElement;
  private name: string;
  private xPos: number;
  private yPos: number;
  private image: HTMLImageElement;

  constructor(
    name: string,
    xPos: number,
    yPos: number,
    image: string,
    canvasId: HTMLCanvasElement
  ) {
    this.name = name;
    this.xPos = xPos;
    this.yPos = yPos;
    this.image = this.loadNewImage(image);

    // Construct all of the canvas
    this.canvas = canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    window.addEventListener("click", this.clickHandler)
  }

  public clickHandler(event: MouseEvent){
    console.log(`xPos = ${event.screenX}`);
    console.log(`yPos = ${event.screenY}`);

    if(event.screenX >= this.xPos && event.screenX <= this.image.width
      && event.screenY >= this.yPos && event.screenY <= this.image.height){
      console.log("This works!");
    }
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
    this.canvas.getContext("2d");
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
