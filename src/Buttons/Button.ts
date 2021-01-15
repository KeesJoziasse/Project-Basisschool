abstract class Button {
  // #MERGEFIX DIT OOK VOOR DE IMG DOEN , dan hoef je alleen de x en y pos te fixen.

  protected xPos: number;
  protected yPos: number;
  protected image: HTMLImageElement;
  protected name: string;
  protected xVelocity: number;
  protected canvas: HTMLCanvasElement;
  protected images: Images;

  constructor(xPos: number, yPos: number, canvas: HTMLCanvasElement) {
    this.xPos = xPos;
    this.yPos = yPos;
    document.addEventListener("click", this.mouseHandler);
    this.canvas = canvas;
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

  public draw(ctx: CanvasRenderingContext2D) {
    
   ctx.drawImage(this.image, this.xPos, this.yPos);
  }

  /**
   * Method to handle the mouse event
   * @param {MouseEvent} event - mouse event
   */
  public mouseHandler = (event: MouseEvent): void => {
    
    //console.log(`User clicked the: ${this.getButtonName()} button`);
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
      if (this.getButtonName() === "UnlockDesert") {
         console.log("Unlock Desert");
      }

      if (this.getButtonName() === "UnlockSwamp") {
        console.log("Unlock Swamp");
      }

      if (this.getButtonName() === "UnlockArctic") {
        console.log("Unlock Arctic");
      }

      if (this.getButtonName() === "UnlockYoshi") {
        console.log("Unlock Yoshi");
      }

      if (this.getButtonName() === "UnlockAmongUs") {
        console.log("UnlockAmongUs");
      }

      if (this.getButtonName() === "UnlockAsh") {
        const ctx = this.canvas.getContext("2d");
        
        ctx.drawImage(Start.loadNewImage("./assets/img/players/yellowAUUnlocked.png"), this.canvas.width / 2.9, this.canvas.height / 6 );
        console.log("Unlock Ash");
      }

      if (this.getButtonName() === "UnlockSonic") {
        console.log("Unlock Sonic");
      }
      
      if (this.getButtonName() === "QandA") {
        new GeneralQuestions(
          document.getElementById("canvas") as HTMLCanvasElement
        );
      }
      if (this.getButtonName() === "Shop") {
        new Shop(document.getElementById("canvas") as HTMLCanvasElement);
      }
      if (this.getButtonName() === "RestartButton"){
        new Start(document.getElementById("canvas") as HTMLCanvasElement);
      }
      if (this.getButtonName() === "NoButton"){
        new Start(document.getElementById("canvas") as HTMLCanvasElement);
      }
      else if (this.getButtonName() === "BackToStart") {
        new Start(document.getElementById("canvas") as HTMLCanvasElement);
        
      } else {
        return null;
      }
      
     }
    //  console.log(`User clicked the: ${this.getButtonName()} button`);
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

 

}
