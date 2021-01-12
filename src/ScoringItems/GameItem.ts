/**
 * Parentclass of ScoringItem and Player
 */
abstract class GameItem {
    
    //shared with subclasses
    protected canvas: HTMLCanvasElement;
    protected name: string;
    private earnedCoins: number;

    //Lanes
    protected topLane: number;
    protected middleLane: number;
    protected lowerLane: number;
    
    /**
     * Constructor
     * @param name name of the gameitem
     * @param xPosition xPos of the gameitem
     * @param yPosition yPos of the gameitem
     * @param speed number of speed how fast a gameitem moves
     */
    public constructor(canvas:HTMLCanvasElement){
        this.canvas = canvas;
        this.earnedCoins = 0;

        //Lanes
        this.topLane = this.canvas.height / 4;
        this.middleLane = this.canvas.height / 2;
        this.lowerLane = this.canvas.height / 4 * 3;
    }

    /**
     * Method that count +1 count to earnedCoins
     */
    public getTotalCoins(){
        this.earnedCoins++;
        console.log(this.earnedCoins);
    }

    /**
     * Loads an image in such a way that the screen doesn't constantly flicker
     * @param {HTMLImageElement} source
     * @return HTMLImageElement - returns an image
     */
    public static loadNewImage(source: string): HTMLImageElement {
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
    public static randomInteger(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }

} 
