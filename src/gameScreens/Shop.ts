class Shop{
    private canvas: HTMLCanvasElement;
    private image: HTMLImageElement;
    private leftArrow: Button;
    private button: Button;

    //Constructor
    public constructor(canvasId: HTMLCanvasElement) {

      // Construct all of the canvas
      this.canvas = canvasId;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

      // backButton image
      this.leftArrow = new PreviousSelector(
        (this.canvas.width / 5) * 0.05,
        (this.canvas.height / 5) * 0.09,
      );

      // add an mouse event
      document.addEventListener("click", this.mouseHandler);
       
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
          "Shop",
          65,
          this.canvas.width / 2,
          80,
          "center"
        );
}

   /**
     * Method to handle the mouse event
     * @param {MouseEvent} event - mouse event
     */
    public mouseHandler = (event: MouseEvent) => {
        new Start (document.getElementById("canvas") as HTMLCanvasElement);
        console.log("Hey");
      };
}