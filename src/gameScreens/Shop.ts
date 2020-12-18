class Shop {
  private canvas: HTMLCanvasElement;
  private image: HTMLImageElement;
  private images: Images[];
  private buttons: Button[];

  //Constructor
  public constructor(canvasId: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    // The button array
    this.buttons = [];

    // The scoring item array
    this.images = [];

    //Calls button maker function
    this.buttonMaker();

    //Calls the loop.
    this.loop();

    // add an mouse event
    document.addEventListener("click", this.mouseHandler);
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

    this.buttons.forEach((button) => {
      button.draw(ctx);
    });

    //The text at the top center.
    Start.writeTextToCanvas(
      ctx,
      "Shop",
      60,
      this.canvas.width / 2,
      80,
      "center"
    );

    //Drawing the images
  }

  private buttonMaker() {
    this.buttons.push(
      new PreviousWorld(
        (this.canvas.width / 5) * 0.05,
        (this.canvas.height / 5) * 0.09
      )
    );

    //Coin image
    this.images.push(new Coin(100, 0));

    //QandA Button
    this.buttons.push(new QuestionsAnswersButton(this.canvas.width - 124, 0));

    //Settings Button
    this.buttons.push(new SettingsButton(this.canvas.width - 124, 124));
  }

  /**
   * Method to handle the mouse event
   * @param {MouseEvent} event - mouse event
   */
  public mouseHandler = (event: MouseEvent) => {};

  /**
   * Loads an image in such a way that the screen doesn't constantly flicker
   * @param {HTMLImageElement} source
   * @return HTMLImageElement - returns an image
   */
  public loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }
}
