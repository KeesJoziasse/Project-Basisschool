class QuestionAndAnswer {
    private canvas: HTMLCanvasElement;
    // private image: HTMLImageElement;
    // private button: Button;
    private buttons: Button[];
    // private buttons: Button[];
  
    //Constructor
    public constructor(canvasId: HTMLCanvasElement) {
      // Construct all of the canvas
      this.canvas = canvasId;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

       //The button array
    this.buttons = [];
  
      //Calling the button maker method.
    this.buttonMaker();
       
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
      Start.writeTextToCanvas(
        ctx,
        "Questions and Answers",
        65,
        this.canvas.width / 2,
        80,
        "center"
      );
  
      //list of the questions and answers
      this.list(ctx);
  
     //Drawing the buttons
    this.buttons.forEach((button) => {
      button.draw(ctx);
      button.move(this.canvas);
      button.reloadImage(this.canvas); //#TODO
    });
    }
  
    // all the question and answers text + position
    private list(ctx: CanvasRenderingContext2D) {
      Start.writeTextToCanvas(
        ctx,
        "Question 1: Wanneer een onbekend persoon contact met je opneemt, geef je dit dan door aan ouders/verzorgers?",
        30,
        (this.canvas.width / 2)* 0.9,
        200,
        "center"
      );
  
      Start.writeTextToCanvas(
        ctx,
        "Question 2: Wanneer een onbekend iemand vraagt om een foto van je, stuur je die dan?",
        30,
        (this.canvas.width / 2)* 0.7,
        260,
        "center"
      );
  
      Start.writeTextToCanvas(
        ctx,
        "Question 3: Voeg je vaak onbekenden toe op sociale media? (Door middel van “snel toevoegen”)",
        30,
        (this.canvas.width / 2)* 0.78,
        320,
        "center"
      );
  
      Start.writeTextToCanvas(
        ctx,
        "Question 4: Je ziet dat een klasgenoot met een vreemd iemand aan het chatten is. Geef je dit aan?",
        30,
        (this.canvas.width / 2)* 0.78,
        380,
        "center"
      );
  
      Start.writeTextToCanvas(
        ctx,
        "Question 5: Je krijgt het bericht: “FortNite_100” stuurt je een vriendschap verzoek. Accepteer je dit verzoek?",
        30,
        (this.canvas.width / 2)* 0.88,
        440,
        "center"
      );

      Start.writeTextToCanvas(
        ctx,
        "Question 6: Hoor je in je klas/omgeving vaak over het toevoegen van vreemden op sociale media?",
        30,
        (this.canvas.width / 2)* 0.79,
        500,
        "center"
      );

      Start.writeTextToCanvas(
        ctx,
        "Question 7: Waarschuwen je ouders je over online veiligheid?",
        30,
        (this.canvas.width / 2)* 0.51,
        560,
        "center"
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

    private buttonMaker() {
      //Initializing the buttons and pushing them to the array
  //Making the right arrow for level selector
      this.buttons.push(
        new BackToStart(
          (this.canvas.width / 7) * 0.09,
          (this.canvas.height / 3) * 0.08,
          this.canvas
        )
      );

    }

  }