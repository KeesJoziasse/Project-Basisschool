class Endscreen{
  private canvas: HTMLCanvasElement;
  private buttons: Button[];
  private score: number;

  public constructor(canvasId: HTMLCanvasElement, score: number) {

    // Construct the canvas
    this.canvas = canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = innerHeight;
    this.score = score;

    // Calls the button array
    this.buttons = [];

    // Calls the button maker function
    this.buttonMaker();

    //Draw this screen
    this.draw();
  }

  public draw() {
    const ctx = this.canvas.getContext("2d");

    //Clears the canvas every frame
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.drawImage(
      Utility.loadNewImage("./assets/img/background/EndscreenBackground.jpg"),
      0,
      0
    );

    this.buttons.forEach((button) => {
      button.draw();
    });

    Utility.writeTextToCanvas(
      ctx,
      "Game Over!",
      120,
      this.canvas.width / 2.1,
      this.canvas.height / 2.25,
      "center",
      "white"
    );

    Utility.writeTextToCanvas(
      ctx,
      `Your score is ${this.score}`,
      60,
      this.canvas.width / 2.1,
      this.canvas.height / 1.8,
      "center",
      "white"
    );
  }

  private buttonMaker() {
    this.buttons.push(
      new RestartButton(
        this.canvas.width / 2.5,
        this.canvas.height / 1.5,
        this.canvas
      )
    );
  }

}
