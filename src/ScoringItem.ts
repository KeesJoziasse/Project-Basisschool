/// <reference path = "GameItem.ts"/>

abstract class ScoringItem extends GameItem {

    protected canvas: HTMLCanvasElement;

    private points: number;

    protected image: HTMLImageElement;

    private upperLane: number;

    private middleLane: number;

    private lowerLane: number;

    private XPosition: number;

    private YPosition: number;

    public constructor(){
        super();

        this.upperLane = this.canvas.width / 4;
        this.middleLane = this.canvas.width / 2;
        this.lowerLane = this.canvas.width / 4 * 3;

        const random = this.randomInteger(1, 3);
        if (random === 1) {
            this.XPosition = this.upperLane;
        }
        if (random === 2) {
            this.XPosition = this.middleLane;
        }
        if (random === 3) {
            this.XPosition = this.lowerLane;
        }
    }

    public removeFromArray(){

    }

    public draw(ctx: CanvasRenderingContext2D){

    }

    public move(){

    }

        /**
    * Loads an image in such a way that the screen doesn't constantly flicker
    * @param {HTMLImageElement} source
    * @return HTMLImageElement - returns an image
    */
   protected loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
}

/**
* Generates a random integer number between min and max
*
* @param {number} min - minimal time
* @param {number} max - maximal time
*/
private randomInteger(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
}
}