class Start {
  private canvas: HTMLCanvasElement;
  private wallet: number;
  private buttons: Button[];
  private player: Player; //#TODO
  private level: World; //#TODO

  //Attribute to test stuff
  private background: HTMLImageElement; //#TODO

  //Constructor
  public constructor(canvasId: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    //The button array
    this.buttons = [];
    //Get img widht and height. #TODO Fix this, you cant use it in the this.startButton = new StartGameButton decleration

    //Your total coin value
    this.wallet = 0;

    //Calling the button maker method.
    this.buttonMaker();

    //The game loop.
    this.loop();

    //TEST AREA
    // add an mouse event
    document.addEventListener("click", this.mouseHandler);
  }

  /**
   * Method for the Game Loop
   */
  public loop = () => {
    //Draws everythin while in the loop
    this.draw();

    //#TODO you can remove this after you are fine with the code, for now there is a counter in the top left of your screen.
    this.wallet++;

    // in the first loop no images are loaded
    requestAnimationFrame(this.loop);

    //TEST AREA
  };

  /**
   * Method to handle the mouse event
   * @param {MouseEvent} event - mouse event
   */
  public mouseHandler = (event: MouseEvent) => {
    // console.log(`xPos ${event.clientX}, yPos ${event.clientY}`); //Check what pos is clicked on the canvas
    this.buttons.forEach((button) => {
      if (
        event.clientX >= button.getButtonXPos() &&
        event.clientX < button.getButtonXPos() + button.getButtonImageWidth() &&
        event.clientY >= button.getButtonYPos() &&
        event.clientY <= button.getButtonYPos() + button.getButtonImageHeight()
      ) {
        console.log(`User clicked the: ${button.getButtonName()} button`);
      }
    });
  };

  /**
   * Draws all the necessary elements to the canvas
   */
  public draw() {
    const ctx = this.canvas.getContext("2d");

    //Clears the canvas every frame
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //The text at the top center.
    Start.writeTextToCanvas(
      ctx,
      "Danger Dash",
      60,
      this.canvas.width / 2,
      80,
      "center"
    );

    //Drawing the buttons
    this.buttons.forEach((button) => {
      button.draw(ctx);
      button.move(this.canvas);
      button.reloadImage(this.canvas); //#TODO
    });

    //Writing the total amount of coins to the top left of your screen
    Start.writeTextToCanvas(ctx, `${this.wallet}`, 40, 60, 80);

    //TEST AREA
  }

  private buttonMaker() {
    //Initializing the buttons and pushing them to the array
    //Making the start button
    this.buttons.push(
      new StartGameButton(
        this.canvas.width / 2 - 329 / 2, //Fix this secton for centering no magic numbers #TODO
        (this.canvas.height / 5) * 4 - 100 / 2 //Fix this secton for centering no magic numbers #TODO
      )
    );

    //Making the shop button
    this.buttons.push(
      new ShopButton(
        this.canvas.width / 5 - 329 / 2,
        (this.canvas.height / 6) * 4
      )
    );

    //Making the highscore button
    this.buttons.push(
      new HighscoreButton(
        (this.canvas.width / 5) * 4 - 329 / 2,
        (this.canvas.height / 6) * 4
      )
    );

    //Making the left arrow for character selector
    this.buttons.push(
      new PreviousSelector(this.canvas.width / 4, this.canvas.height / 2 - 89)
    );

    //Making the right arrow for character selector
    this.buttons.push(
      new NextSelector(
        (this.canvas.width / 4) * 3 - 143,
        this.canvas.height / 2 - 89
      )
    );

    //Making the left arrow for level selector
    this.buttons.push(
      new PreviousSelector(
        (this.canvas.width / 7) * 2,
        this.canvas.height / 3 - 89
      )
    );

    //Making the right arrow for level selector
    this.buttons.push(
      new NextSelector(
        (this.canvas.width / 7) * 5 - 143,
        this.canvas.height / 3 - 89
      )
    );

    //QandA Button
    this.buttons.push(new QuestionsAnswersButton(this.canvas.width - 124, 0));

    //Settings Button
    this.buttons.push(new SettingsButton(this.canvas.width - 124, 124));

    //Background test
    this.buttons.push(new Background(this.canvas.width / 4, 0, 1));
  }

  /**
   * Writes text to the canvas
   * @param {string} text - Text to write
   * @param {number} fontSize - Font size in pixels
   * @param {number} xCoordinate - Horizontal coordinate in pixels
   * @param {number} yCoordinate - Vertical coordinate in pixels
   * @param {string} alignment - Where to align the text
   * @param {string} color - The color of the text
   */
  public static writeTextToCanvas(
    ctx: CanvasRenderingContext2D,
    text: string,
    fontSize: number = 20,
    xCoordinate: number,
    yCoordinate: number,
    alignment: CanvasTextAlign = "center",
    color: string = "red"
  ) {
    ctx.font = `${fontSize}px Minecraft`;
    ctx.fillStyle = color;
    ctx.textAlign = alignment;
    ctx.fillText(text, xCoordinate, yCoordinate);
  }

  /**
   * Renders a random number between min and max
   * @param {number} min - minimal time
   * @param {number} max - maximal time
   */
  public static randomNumber(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

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
}
