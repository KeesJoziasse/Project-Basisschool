class GeneralQuestions {
  private canvas: HTMLCanvasElement;
  private buttons: Button[];
  private images: Images[];

  public constructor(canvasId: HTMLCanvasElement) {

    // Construct all of the canvas
    this.canvas = canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    //The overall image array
    this.images = [];

    // The button array
    this.buttons = [];

    // Calls button maker function
    this.buttonMaker();

    //Calling the image maker method
    this.imageMaker();

    // Calls the loop
    this.loop();

    // Add a mouse event
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

    // Draws all the buttons
    this.buttons.forEach((button) => {
      button.draw();
    });

    //Draws all the images
    this.images.forEach((image) => {
      image.draw(ctx);
    });

    // control interface
    this.controls(ctx);

    // titles of al the textboxes
    this.titleTextBoxes(ctx);
  }

  private buttonMaker() {
    this.buttons.push(
      new BackToStart(
        (this.canvas.width / 5) * 0.05,
        (this.canvas.height / 5) * 0.09,
        this.canvas
      )
    );
  }

  // locatie images op canvas
  private imageMaker() {
    //titles
    this.images.push(new Control((this.canvas.width / 15) * 0.1, 110));
    this.images.push(new Questions(this.canvas.width / 3, 0));
    // besturing
    this.images.push(new UpperLane((this.canvas.width / 3) * 0.60, 200));
    this.images.push(new MidLane((this.canvas.width / 3) * 0.60, 350));
    this.images.push(new DownLane((this.canvas.width / 3) * 0.60, 500));
    // questionBox
    this.images.push(new QuestionBoxText((this.canvas.width / 3) * 1, 435));
    // coin
    this.images.push(new TextCoin((this.canvas.width / 2) * 1.34, 435));
    // obstacle
    this.images.push(new TextObstacle((this.canvas.width / 2) * 1.34, 150));
  }

  // function to draw all control text on the canvas
  private controls(ctx: CanvasRenderingContext2D) {
    Utility.writeTextToCanvas(
      ctx,
      "Bovenste laan:",
      40,
      (this.canvas.width / 9) * 0.92,
      265,
      "center"
    );

    Utility.writeTextToCanvas(
      ctx,
      "Middelste laan:",
      40,
      (this.canvas.width / 9) * 0.93,
      420,
      "center"
    );

    Utility.writeTextToCanvas(
      ctx,
      "Onderste laan:",
      40,
      (this.canvas.width / 9) * 0.93,
      560,
      "center"
    );
  }
  // function to draw als textbox titles to the canvas
  private titleTextBoxes(ctx: CanvasRenderingContext2D) {

    Utility.writeTextToCanvas(
      ctx,
      "Questionbox",
      35,
      (this.canvas.width / 3) * 1.4,
      435,
      "center"
    );
    // title coins & obstacle
    Utility.writeTextToCanvas(
      ctx,
      "Obstakels",
      35,
      (this.canvas.width / 2) * 1.6,
      140,
      "center"
    );
    Utility.writeTextToCanvas(
      ctx,
      "Coins",
      35,
      (this.canvas.width / 2) * 1.6,
      435,
      "center"
    );
  }

  /**
   * Method to handle the mouse event
   * @param {MouseEvent} event - mouse event
   */
  public mouseHandler = (event: MouseEvent) => {};
}
