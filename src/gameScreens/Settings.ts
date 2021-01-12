class Settings {

    private canvas: HTMLCanvasElement;
    private buttons: Button[];


    public constructor(canvasId: HTMLCanvasElement){
        // Construct all of the canvas
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        // The button array
        this.buttons = [];

        // Calls button maker function
        this.buttonMaker()

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

    this.buttons.forEach((button) => {
      button.draw(ctx);
    });

    //The text at the top center.
    Start.writeTextToCanvas(
        ctx,
        "Settings",
        60,
        this.canvas.width / 2,
        80,
        "center"
      );
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

  /**
   * Method to handle the mouse event
   * @param {MouseEvent} event - mouse event
   */
  public mouseHandler = (event: MouseEvent) => {};
  
}
