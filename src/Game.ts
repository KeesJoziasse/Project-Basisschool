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
        this.player = new Player(this.canvas);

        // #TODO zorg dat gameitems worden ingeladen
        
        this.score = 0;
        this.frame = 0;
        this.gameState = "level-1";

        this.loop();
    }

    /**
     * Method that checks the gamestate
     */
    public loop = () => {
        
        this.frame++;
        //console.log(this.frame);
        this.draw()
        

        // #TODO hiervan aparte methode maken: checkGameState()
        if (this.gameState === "level-1"){
            console.log("level 1");
            this.player.move();
            // #TODO draw gameitems
            // #TOOD draw player
            // #TODO add randomly gameItems to the game and draw them
            // #TODO make the gameItems move horizontal to the left
            // #TODO create a background
            
        } else if(this.gameState === "Level-2"){
            
        }


        requestAnimationFrame(this.loop);
    }

    /**
     * Method that writes gameItems on the canvas
     */
    public draw(){
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0,0,this.canvas.width,this.canvas.height)

        Start.writeTextToCanvas(
            ctx,
            "Danger Dash",
            60,
            this.canvas.width / 2,
            80,
            "center"
        );

        this.player.draw(ctx);
    }

}