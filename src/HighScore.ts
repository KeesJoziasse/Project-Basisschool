class HighScore {
  private canvas: HTMLCanvasElement;
  private image: HTMLImageElement;

  //Constructor
  public constructor(canvasId: HTMLCanvasElement) {
    // Construct all of the canvas
    this.canvas = canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    //#TODO take the backimage instead of the start-button.png
    this.image = Start.loadNewImage("./assets/img/start-button.png");

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

    //The text at the top center.
    HighScore.writeTextToCanvas(
      ctx,
      "Highscores",
      65,
      this.canvas.width / 2,
      80,
      "center"
    );

    //rank list of the highscores first to fifth
    HighScore.writeTextToCanvas(
      ctx,
      "First:",
      40,
      this.canvas.width / 3,
      200,
      "center"
    );

    HighScore.writeTextToCanvas(
      ctx,
      "Second:",
      40,
      (this.canvas.width / 3) * 0.96,
      260,
      "center"
    );

    HighScore.writeTextToCanvas(
      ctx,
      "Thrid:",
      40,
      (this.canvas.width / 3) * 0.99,
      320,
      "center"
    );

    HighScore.writeTextToCanvas(
      ctx,
      "Fourth:",
      40,
      (this.canvas.width / 3) * 0.97,
      380,
      "center"
    );

    HighScore.writeTextToCanvas(
      ctx,
      "Fifth:",
      40,
      this.canvas.width / 3,
      440,
      "center"
    );

    //Draws the start button #TODO Fix the centering, make getters for the image width and height, make it center based on that.
    ctx.drawImage(
      Start.loadNewImage("./assets/img/start-button.png"),
      ((this.canvas.width / 5) * 0, 7),
      ((this.canvas.height / 5) * 0, 7)
    );
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
    color: string = "black"
  ) {
    ctx.font = `${fontSize}px Minecraft`;
    ctx.fillStyle = color;
    ctx.textAlign = alignment;
    ctx.fillText(text, xCoordinate, yCoordinate);
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
