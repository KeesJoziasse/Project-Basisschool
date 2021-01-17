/// <reference path="../DangerDash.ts" />

abstract class Button {
  // #MERGEFIX DIT OOK VOOR DE IMG DOEN , dan hoef je alleen de x en y pos te fixen.

  protected xPos: number;
  protected yPos: number;
  protected image: HTMLImageElement;
  public name: string;
  protected xVelocity: number;
  protected canvas: HTMLCanvasElement;
  protected images: Images;
  protected checkGameName: DangerDash;
  // private images: Images;
  protected ingameQuestion: InGameQuestions;

  constructor(xPos: number, yPos: number, canvas: HTMLCanvasElement) {
    this.xPos = xPos;
    this.yPos = yPos;
    //document.addEventListener("click", this.mouseHandler);
    this.canvas = canvas;
    // this.images = this.images;
    //console.log(this.images);
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

  public draw() {
    const ctx = this.canvas.getContext("2d");
    
    ctx.drawImage(this.image, this.xPos, this.yPos);
  }

  //TESTING
  public logButtonName() {
    console.log(this.name);
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

//   /**
//    * Method to handle the mouse event
//    * @param {MouseEvent} event - mouse event
//    */
//   public mouseHandler = (event: MouseEvent): void => {
//     //console.log(`User clicked the: ${this.getButtonName()} button`);
//     // console.log(`xPos ${event.clientX}, yPos ${event.clientY}`); //Check what pos is clicked on the screen.
//     if (
//       event.clientX >= this.getButtonXPos() &&
//       event.clientX < this.getButtonXPos() + this.getButtonImageWidth() &&
//       event.clientY >= this.getButtonYPos() &&
//       event.clientY <= this.getButtonYPos() + this.getButtonImageHeight()
//     ) {
//       this.logButtonName();
//     } else {
//       return null;
//     }
//   };
}
