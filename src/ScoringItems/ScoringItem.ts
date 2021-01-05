abstract class ScoringItem {
    private canvas: HTMLCanvasElement

    private topLane: number;
    private middleLane: number;
    private lowerLane: number;

    protected points: number;
    protected image: HTMLImageElement;

    private speed: number;
    private xPosition: number;
    private yPosition: number;

    public constructor(canvas:HTMLCanvasElement){
        this.canvas = canvas;

        this.xPosition = 500;
        this.yPosition = 1080;

        //Speed of the scoring objects
        this.speed = -5;
        //Creates the lane where the object will spawn
        // this.createRandomYpos(); Does not work properly , fix the y postioning
    }

    //Getters
    public getPositionX(): number {
        return this.xPosition;
    }

    public getPositionY(): number {
        return this.yPosition;
    }

    public getImageWidth(): number {
        return this.image.width;
    }

    public getImageHeight(): number {
        return this.image.height;
    }

    public getPoints(): number {
        return this.points;
    }

     //Creates the scoring items for the articworld
     public scoringItemsArticWorld() : void {}

    /**
     * Moves the scoring items
    */
    public move(){
        this.xPosition += this.speed;
    }

        /**
     * Render the objects
     * @param ctx The CanvasRenderingContext2D of the canvas to draw on
     */
    public draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(
            this.image,
            // Center the image in the lane with the x coordinates
            this.xPosition - this.image.width / 2,
            this.yPosition              //TODO FIX
        );
    }

    /**
     * Method that removes an scoringItem after it collides with the player or the left side of the canvas (out of screen);
     */
    public collisionDetection(){
        
    }

        /**
     * This method creates a random integer of 1 2 3 and decides what lane the ScoringItem will appear
     */
    private createRandomYpos() {
        const random = GameItem.randomInteger(1, 3);
        if (random === 1) {
            this.yPosition = this.topLane;
        }
        if (random === 2) {
            this.yPosition = this.middleLane;
        }
        if (random === 3) {
            this.yPosition = this.lowerLane;
        }
    }

     /**
   * Loads an image so it doesn't flicker
   * @param {HTMLImageElement} source
   * @return HTMLImageElement - returns an image
   */
  public loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }
}
