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
      button.draw(ctx);
    });

    //Draws all the images
    this.images.forEach((image) => {
      image.draw(ctx);
    });

    //The text at the top center.
    Start.writeTextToCanvas(
      ctx,
      "Questions",
      60,
      this.canvas.width / 2,
      80,
      "center"
    );

    // besturing text
    Start.writeTextToCanvas(
      ctx,
      "Besturing:",
      50,
      this.canvas.width / 12,
      140,
      "center"
    );

    Start.writeTextToCanvas(
      ctx,
      "Beweeg omhoog",
      40,
      (this.canvas.width / 9) * 0.97,
      260,
      "center"
    );

    Start.writeTextToCanvas(
      ctx,
      "Beweeg omlaag",
      40,
      (this.canvas.width / 9) * 0.93,
      390,
      "center"
    );
    // title boosters
    Start.writeTextToCanvas(
      ctx,
      "Rocket booster",
      35,
      (this.canvas.width / 3) * 1.4,
      140,
      "center"
    );

    Start.writeTextToCanvas(
      ctx,
      "Shield booster",
      35,
      (this.canvas.width / 3) * 1.4,
      435,
      "center"
    );
    // title coins & obstacle
    Start.writeTextToCanvas(
      ctx,
      "Obstakels",
      35,
      (this.canvas.width / 2) * 1.6,
      140,
      "center"
    );
    Start.writeTextToCanvas(
      ctx,
      "Coins",
      35,
      (this.canvas.width / 2) * 1.6,
      435,
      "center"
    );
  }

  private buttonMaker() {
    this.buttons.push(
      new BackToStart(
        (this.canvas.width / 5) * 0.05,
        (this.canvas.height / 5) * 0.09
      )
    );
  }

  // locatie images op canvas
  private imageMaker() {
    // besturing
    this.images.push(new ArrowUp((this.canvas.width / 3) * 0.65, 150));
    this.images.push(new ArrowDown((this.canvas.width / 3) * 0.65, 360));
    // shield
    this.images.push(new ShieldBooster((this.canvas.width / 3) * 1, 435));
    // rocket
    this.images.push(new RocketBooster((this.canvas.width / 3) * 1, 135));
    // coin
    this.images.push(new TextCoin((this.canvas.width / 2) * 1.34, 435));
    // obstacle
    this.images.push(new TextObstacle((this.canvas.width / 2) * 1.34, 150));
  }

  /**
   * Method to handle the mouse event
   * @param {MouseEvent} event - mouse event
   */
  public mouseHandler = (event: MouseEvent) => {};
}
