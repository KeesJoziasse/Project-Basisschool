/**
 * Class Game: Responsible for the gameloop and will activate the class: GameItem, Player, ScoringItem
 */
class Game {
    private canvas: HTMLCanvasElement;
    private player: Player;
    // #TODO screen: Screen[];
    private gameItems: GameItem[];
    private score: number;
    private gameState: string;
    private ctx: CanvasRenderingContext2D;
    private frame: number;

    /**
     * Constructor
     * @param canvasId HTML canvas where the game will be displayed on
     */
    public constructor(canvasId: HTMLCanvasElement){
        //Canvas + height + width
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.gameItems = [];

        // #TODO zorg dat gameitems worden ingeladen
        
        this.score = 0;
        this.frame = 0;
        this.gameState = "Begin";

        this.loop();
    }

    /**
     * Method that checks the gamestate
     */
    public loop = () => {
        this.frame++;
        console.log(this.frame);
        
        this.writeGoodLuck();

        // #TODO hiervan aparte methode maken: checkGameState()
        if (this.gameState === "level-1"){
            // #TODO draw gameitems
            // #TOOD draw player
            // #TODO add randomly gameItems to the game and draw them
            // #TODO make the gameItems move horizontal to the left
            // #TODO create a background
            // #TODO create connection with player that the player is able to move during the game
        } else if(this.gameState === "Level-2"){
            
        }


        requestAnimationFrame(this.loop);
    }

    /**
     * Method that writes the player goodluck (test)
     */
    private writeGoodLuck() {
        if (this.frame >= 0 && this.frame <= 150) {
            const ctx = this.canvas.getContext("2d");
            this.writeTextToCanvas(
                ctx,
                "Succes!",
                40, 
                this.canvas.width / 2,
                this.canvas.height /2,
            );
        }
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
    public writeTextToCanvas(
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


}