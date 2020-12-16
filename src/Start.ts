class Start {
    private canvas: HTMLCanvasElement;
    private wallet: number;
    private image: HTMLImageElement;
  
    //Constructor
    public constructor(canvasId: HTMLCanvasElement) {
      // Construct all of the canvas
      this.canvas = canvasId;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
  
      //Your total coin value
      this.wallet = 0;
  
      //#TODO refine, this is just a test
      this.image = Start.loadNewImage("./assets/img/amongus.png");
  
      this.loop();
    }
  
    /**
     * Method for the Game Loop
     */
    public loop = () => {
      this.draw();
  
      //#TODO you can remove this after you are fine with the code, for now there is a counter in the top left of your screen.
      this.wallet++;
  
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
      Start.writeTextToCanvas(
        ctx,
        "Top center text",
        60,
        this.canvas.width / 2,
        80,
        "center"
      );
  
      //Writing the total amount of coins to the top left of your screen
      Start.writeTextToCanvas(ctx, `${this.wallet}`, 40, 60, 80);
      
      //Draws the start button #TODO Fix the centering, make getters for the image width and height, make it center based on that.
      ctx.drawImage(Start.loadNewImage("./assets/img/start-button.png"), (this.canvas.width/2) - 180, (this.canvas.height/5)*4);

      // Draw example to check of the button works
      ctx.drawImage(Start.loadNewImage("./assets/img_zonder_whitespace/info-button.png"), (this.canvas.width / 2) + 700, (this.canvas.height / 5) * 0.25);

      
  
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
  