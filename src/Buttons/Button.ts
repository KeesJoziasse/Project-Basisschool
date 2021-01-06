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
    document.addEventListener("click", this.mouseHandler);
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
   * Method to handle the mouse event
   * @param {MouseEvent} event - mouse event
   */
  public mouseHandler = (event: MouseEvent): void => {
    // console.log(`xPos ${event.clientX}, yPos ${event.clientY}`); //Check what pos is clicked on the screen.
    if (
      event.clientX >= this.getButtonXPos() &&
      event.clientX < this.getButtonXPos() + this.getButtonImageWidth() &&
      event.clientY >= this.getButtonYPos() &&
      event.clientY <= this.getButtonYPos() + this.getButtonImageHeight()
    ) {
      // looks if the buttons name match and get you to the right page
      if (this.getButtonName() === "HighScore") {
        new HighScore(document.getElementById("canvas") as HTMLCanvasElement);
      } 
      if (this.getButtonName() === "UnlockMoon") {
         console.log("Unlock moon");
      }

      if (this.getButtonName() === "UnlockMars") {
        console.log("Unlock mars");
      }

      if (this.getButtonName() === "UnlockVenus") {
        console.log("Unlock venus");
      }

      if (this.getButtonName() === "UnlockStewie") {
        console.log("Unlock Stewie");
      }

      if (this.getButtonName() === "UnlockAmongUs") {
        console.log("Unlock AmongUs");
      }

      if (this.getButtonName() === "UnlockAsh") {
        console.log("Unlock Ash");
      }
      
      if (this.getButtonName() === "Settings") {
        new Settings(document.getElementById("canvas") as HTMLCanvasElement);
      }
      if (this.getButtonName() === "QandA") {
        new GeneralQuestions(document.getElementById("canvas") as HTMLCanvasElement);
      }
      if (this.getButtonName() === "Shop") {
        new Shop(document.getElementById("canvas") as HTMLCanvasElement);
      }
      else if (this.getButtonName() === "BackToStart") {
        new Start(document.getElementById("canvas") as HTMLCanvasElement);
      } else {
        return null;
      }
      console.log(`User clicked the: ${this.getButtonName()} button`);
      
    }
  };

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
