/// <reference path = "GameItems/GameItem.ts"/>

abstract class ScoringItem extends GameItem {
    protected points: number;
    protected image: HTMLImageElement;
    protected speed: number;
    private xPosition: number;
    private yPosition: number;

    public constructor(canvas:HTMLCanvasElement){
        super(canvas);
        this.xPosition = 120;

        this.createRandomYpos(); 

        this.canvas = canvas;
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
     * Method that removes an scoringItem after it collides with the player or the left side of the canvas (out of screen);
     */
    public collisionDetection(){
        
    }

    /**
     * Method that moves the scoringItem on the canvas
     */
    public move(){
        
    }
}
