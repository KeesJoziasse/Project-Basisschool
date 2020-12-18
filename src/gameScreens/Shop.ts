class Shop {
    private canvas: HTMLCanvasElement;
    private image: HTMLImageElement;
    private leftArrow: Button;
    private scoringItems: ScoringItem[];
    private buttons: Button[];

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

      // The button array
      this.buttons = [];

      // The scoring item array
      this.scoringItems = [];

     

      this.buttonMaker();

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
        Start.writeTextToCanvas(
        ctx,
        "Shop",
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

    //Drawing the images
    this.scoringItems.forEach((scoringItem) => {
      scoringItem.draw(ctx);
      scoringItem.move(this.canvas);
      scoringItem.reloadImage(this.canvas); //#TODO
  });
}


private buttonMaker() {

  //Coin image
  this.scoringItems.push(
    new Coin(
       100,
      0,
      this.canvas
      )
  );

  //QandA Button
  this.buttons.push(
    new QuestionsAnswersButton(
      this.canvas.width / 2 - 1400 / 2, //Fix this secton for centering no magic numbers #TODO
      (this.canvas.height / 5) * 4 - 1250 / 2 //Fix this secton for centering no magic numbers #TODO
    )
  );

  //Settings Button
  this.buttons.push(
    new SettingsButton(
      this.canvas.width / 2 - 1400 / 2, //Fix this secton for centering no magic numbers #TODO
      (this.canvas.height / 5) * 4 - 1000 / 2 //Fix this secton for centering no magic numbers #TODO
    )
  );

  //Go back button
  this.buttons.push(new NextSelector(this.canvas.width -145, 20))

  }

   /**
     * Method to handle the mouse event
     * @param {MouseEvent} event - mouse event
     */
    public mouseHandler = (event: MouseEvent) => {
        new Start (document.getElementById("canvas") as HTMLCanvasElement);
        console.log("Hey");
      };

          /**
     * Loads an image in such a way that the screen doesn't constantly flicker
     * @param {HTMLImageElement} source
     * @return HTMLImageElement - returns an image
     */
    public loadNewImage(source: string): HTMLImageElement {
      const img = new Image();
      img.src = source;
      return img;
  }
}