class HighScore {
  private canvas: HTMLCanvasElement;
  private images: Images[];
  // private button: Button;
  private buttons: Button[];
  // private buttons: Button[];

  //Constructor
  public constructor(canvasId: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    //The overall image array
    this.images = [];

    //The button array
    this.buttons = [];

    //Calling the button maker method.
    this.buttonMaker();

    //Calling the image maker method
    this.imageMaker();

    this.loop();
  }

  /**
   * Method for the Game Loop
   */
  public loop = () => {
    this.draw();

    // in the first loop no images are loaded
    requestAnimationFrame(this.loop);
  };

  /**
   * Draws all the necessary elements to the canvas
   */
  public draw() {
    const ctx = this.canvas.getContext("2d");

    //Clears the canvas every frame
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //Draws all the images
    this.images.forEach((image) => {
      image.draw(ctx);
    });

    //Drawing the buttons
    this.buttons.forEach((button) => {
      button.draw(ctx);
    });
  }

  // locatie images op canvas
  private imageMaker() {
    //title
    this.images.push(new HighScoreTitle(this.canvas.width / 3, 0));
// ranking image
    this.images.push(new Ranking(this.canvas.width / 5, 200));
  }
  
  // 
  /**
   * Loads an image so it doesn't flicker
   * @param {HTMLImageElement} source
   * @return HTMLImageElement - returns an image
   */
  public static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }

  private buttonMaker() {
    //Initializing the buttons and pushing them to the array
    //Making the right arrow for level selector
    this.buttons.push(
      new BackToStart(
        (this.canvas.width / 7) * 0.09,
        (this.canvas.height / 3) * 0.08
      )
    );
  }
}
