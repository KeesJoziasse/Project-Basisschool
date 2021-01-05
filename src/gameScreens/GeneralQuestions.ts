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
      "Beweeg omhoog ⬆️",
      40,
      this.canvas.width / 8,
      220,
      "center"
    );

    Start.writeTextToCanvas(
      ctx,
      "Beweeg omlaag  ⬇️",
      40,
      (this.canvas.width / 9) * 1.12,
      290,
      "center"
    );

    Start.writeTextToCanvas(
      ctx,
      "Rocket booster",
      35,
      (this.canvas.width / 3) * 1.02,
      140,
      "center"
    );

    Start.writeTextToCanvas(
      ctx,
      "Shield booster",
      35,
      (this.canvas.width / 3) * 1,
      440,
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

  // afmetingen en locatie images
  private imageMaker() {
    // rocket info
    this.images.push(new TextRocketBooster((this.canvas.width / 3)*0.75, 135));
    this.images.push(new RocketBooster((this.canvas.width / 2)*1.10, 180));
    // shield info
    this.images.push(new TextShieldBooster((this.canvas.width / 3)*0.75, 430));
    this.images.push(new ShieldBooster((this.canvas.width / 2)*1.10, 490));
    // coin info
    this.images.push(new TextCoin((this.canvas.width / 2)*1.34, 442));
    // obstacle info
    this.images.push(new TextObstacle((this.canvas.width / 2)*1.34, 150));
    
  }

  

  /**
   * Method to handle the mouse event
   * @param {MouseEvent} event - mouse event
   */
  public mouseHandler = (event: MouseEvent) => {};
}
