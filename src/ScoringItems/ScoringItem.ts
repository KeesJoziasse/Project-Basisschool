/// <reference path = "GameItems/GameItem.ts"/>

abstract class ScoringItem extends GameItem {
    protected points: number;
    protected image: HTMLImageElement;
    protected speed: number;
    protected xPosition: number;
    protected yPosition: number;

    public constructor(canvas: HTMLCanvasElement){
        super(canvas);
        this.canvas = this.canvas;

        this.createRandomYpos(); 
}

    public getImageWidth(): number {
        return this.image.width;
    }

    public getImageHeight(): number {
        return this.image.height;
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

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.xPosition, this.yPosition);
      }

      

  public reloadImage(canvas: HTMLCanvasElement) {}


    /**
     * Method that removes an scoringItem after it collides with the player or the left side of the canvas (out of screen);
     */
    public collisionDetection(){
        
    }

    /**
     * Method that moves the scoringItem on the canvas
     */
    public move(canvas: HTMLCanvasElement){
        
    }
}
