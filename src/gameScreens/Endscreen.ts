class Endscreen {

    private canvas: HTMLCanvasElement;
    private buttons: Button[];
    private image: Images[];

    public constructor(canvasId: HTMLCanvasElement, RestartBG: string){
        // Construct the canvas
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = innerHeight;

        // Calls the button array
        this.buttons = [];

        // Calls the button maker function
        this.buttonMaker();

        // Calls the image
        this.image = [];

        // Calls the background maker
        this.showBackground();

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

  public draw() {
    const ctx = this.canvas.getContext("2d");

    //Clears the canvas every frame
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.buttons.forEach((button) => {
      button.draw(ctx);
    });

    //Draws all the images
    this.image.forEach((image) => {
        image.draw(ctx);
      });
}

private buttonMaker() {
    this.buttons.push(
      new RestartButton(
        (this.canvas.width / 2.5),
        (this.canvas.height / 1.5) 
      )
    );
}

private showBackground() {
    this.image.push(new EndscreenBackground(0, 0));
  }

/**
   * Method to handle the mouse event
   * @param {MouseEvent} event - mouse event
   */
  public mouseHandler = (event: MouseEvent) => { };
}