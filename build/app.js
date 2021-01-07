console.log("The game is working");
let init = () => {
    new Start(document.getElementById("canvas"));
};
window.addEventListener("load", init);
class Game {
    constructor(canvasId, worldName) {
        this.loop = () => {
            this.frame++;
            this.draw();
            this.frameIndex();
            this.forScoringItems();
            this.gameOver();
            if (this.frame % 10 === 0) {
                this.player.move();
            }
            requestAnimationFrame(this.loop);
            console.log(this.scoringItems);
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.player = new Player(this.canvas);
        this.score = 0;
        this.lives = 3;
        this.frame = 0;
        this.worldName = worldName;
        this.loop();
        this.scoringItems = [];
    }
    scoringItemsOceanWorld() { }
    frameIndex() { }
    forScoringItems() {
        if (this.frame > 1) {
            this.scoringItems.forEach((scoringItem) => {
                scoringItem.move();
            });
            for (let i = 0; i < this.scoringItems.length; i++) {
                if (this.player.collidesWithScoringItem(this.scoringItems[i])) {
                    this.score += this.scoringItems[i].getPoints();
                    this.lives += this.scoringItems[i].getLives();
                    this.scoringItems.splice(i, 1);
                }
                else if (this.scoringItems[i].outOfCanvas()) {
                    this.scoringItems.splice(i, 1);
                }
            }
        }
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.worldName === "Ocean") {
            ctx.drawImage(GameItem.loadNewImage("./assets/img/world/OceanBG.jpg"), 0, -100);
        }
        if (this.worldName === "Desert") {
            ctx.drawImage(GameItem.loadNewImage("./assets/img/world/DesertBG.jpg"), 0, 0);
        }
        if (this.worldName === "Artic") {
            ctx.drawImage(GameItem.loadNewImage("./assets/img/world/ArticBG.jpg"), 0, 0);
        }
        if (this.worldName === "Swamp") {
            ctx.drawImage(GameItem.loadNewImage("./assets/img/world/SwampBG.jpg"), 0, -100);
        }
        Start.writeTextToCanvas(ctx, "Run!", 60, this.canvas.width / 2, 80, "center");
        this.player.draw(ctx);
        if (this.frame > 1) {
            this.scoringItems.forEach((scoringItem) => scoringItem.draw(ctx));
        }
        this.drawScore(ctx);
        this.drawLives(ctx);
    }
    drawScore(ctx) {
        Start.writeTextToCanvas(ctx, `Score: ${this.score}`, 60, this.canvas.width / 8, this.canvas.height / 8, null, "red");
    }
    drawLives(ctx) {
        Start.writeTextToCanvas(ctx, `Lives: ${this.lives}`, 60, (this.canvas.width / 8) * 7, this.canvas.height / 8, null, "red");
    }
    gameOver() {
        if (this.lives < 0) {
            alert(`Game over... Je behaalde score is: ${this.score}  Druk op F5 om opnieuw te spelen !`);
        }
    }
}
class KeyboardListener {
    constructor() {
        this.keyCodeStates = new Array();
        this.keyCodeTyped = new Array();
        this.previousState = new Array();
        window.addEventListener("keydown", (ev) => {
            this.keyCodeStates[ev.keyCode] = true;
        });
        window.addEventListener("keyup", (ev) => {
            this.keyCodeStates[ev.keyCode] = false;
        });
    }
    onFrameStart() {
        this.keyCodeTyped = new Array();
        this.keyCodeStates.forEach((val, key) => {
            if (this.previousState[key] != val && !this.keyCodeStates[key]) {
                this.keyCodeTyped[key] = true;
                this.previousState[key] = val;
            }
        });
    }
    isKeyDown(keyCode) {
        return this.keyCodeStates[keyCode] == true;
    }
    isKeyTyped(keyCode) {
        return this.keyCodeTyped[keyCode] == true;
    }
}
KeyboardListener.KEY_ENTER = 13;
KeyboardListener.KEY_SHIFT = 16;
KeyboardListener.KEY_CTRL = 17;
KeyboardListener.KEY_ALT = 18;
KeyboardListener.KEY_ESC = 27;
KeyboardListener.KEY_SPACE = 32;
KeyboardListener.KEY_LEFT = 37;
KeyboardListener.KEY_UP = 38;
KeyboardListener.KEY_RIGHT = 39;
KeyboardListener.KEY_DOWN = 40;
KeyboardListener.KEY_DEL = 46;
KeyboardListener.KEY_1 = 49;
KeyboardListener.KEY_2 = 50;
KeyboardListener.KEY_3 = 51;
KeyboardListener.KEY_4 = 52;
KeyboardListener.KEY_5 = 53;
KeyboardListener.KEY_6 = 54;
KeyboardListener.KEY_7 = 55;
KeyboardListener.KEY_8 = 56;
KeyboardListener.KEY_9 = 57;
KeyboardListener.KEY_0 = 58;
KeyboardListener.KEY_A = 65;
KeyboardListener.KEY_B = 66;
KeyboardListener.KEY_C = 67;
KeyboardListener.KEY_D = 68;
KeyboardListener.KEY_E = 69;
KeyboardListener.KEY_F = 70;
KeyboardListener.KEY_G = 71;
KeyboardListener.KEY_H = 72;
KeyboardListener.KEY_I = 73;
KeyboardListener.KEY_J = 74;
KeyboardListener.KEY_K = 75;
KeyboardListener.KEY_L = 76;
KeyboardListener.KEY_M = 77;
KeyboardListener.KEY_N = 78;
KeyboardListener.KEY_O = 79;
KeyboardListener.KEY_P = 80;
KeyboardListener.KEY_Q = 81;
KeyboardListener.KEY_R = 82;
KeyboardListener.KEY_S = 83;
KeyboardListener.KEY_T = 84;
KeyboardListener.KEY_U = 85;
KeyboardListener.KEY_V = 86;
KeyboardListener.KEY_W = 87;
KeyboardListener.KEY_X = 88;
KeyboardListener.KEY_Y = 89;
KeyboardListener.KEY_Z = 90;
class Button {
    constructor(xPos, yPos) {
        this.mouseHandler = (event) => {
            console.log(`xPos ${event.clientX}, yPos ${event.clientY}`);
            if (event.clientX >= this.getButtonXPos() &&
                event.clientX < this.getButtonXPos() + this.getButtonImageWidth() &&
                event.clientY >= this.getButtonYPos() &&
                event.clientY <= this.getButtonYPos() + this.getButtonImageHeight()) {
                if (this.getButtonName() === "HighScore") {
                    new HighScore(document.getElementById("canvas"));
                }
                if (this.getButtonName() === "UnlockDesert") {
                    console.log("Unlock Desert");
                }
                if (this.getButtonName() === "UnlockSwamp") {
                    console.log("Unlock Swamp");
                }
                if (this.getButtonName() === "UnlockArctic") {
                    console.log("Unlock Arctic");
                }
                if (this.getButtonName() === "UnlockStewie") {
                    console.log("Unlock Stewie");
                }
                if (this.getButtonName() === "UnlockAmongUs") {
                    console.log("Unlock AmongUs");
                }
                if (this.getButtonName() === "UnlockAsh") {
                    console.log("Unlock Ash");
                }
                if (this.getButtonName() === "Settings") {
                    new Settings(document.getElementById("canvas"));
                }
                if (this.getButtonName() === "QandA") {
                    new GeneralQuestions(document.getElementById("canvas"));
                }
                if (this.getButtonName() === "Shop") {
                    new Shop(document.getElementById("canvas"));
                }
                else if (this.getButtonName() === "BackToStart") {
                    new Start(document.getElementById("canvas"));
                }
                else {
                    return null;
                }
                console.log(`User clicked the: ${this.getButtonName()} button`);
            }
        };
        this.xPos = xPos;
        this.yPos = yPos;
        document.addEventListener("click", this.mouseHandler);
    }
    move(canvas) { }
    reloadImage(canvas) { }
    getButtonName() {
        return this.name;
    }
    getButtonXPos() {
        return this.xPos;
    }
    getButtonYPos() {
        return this.yPos;
    }
    getButtonImage() {
        return this.image;
    }
    getButtonImageWidth() {
        return this.image.width;
    }
    getButtonImageHeight() {
        return this.image.height;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
class BackToStart extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "BackToStart";
        this.image = Start.loadNewImage("./assets/img/buttons/left-arrow.png");
    }
}
class QuestionsAnswersButton extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "QandA";
        this.image = Start.loadNewImage("./assets/img/buttons/info-button.png");
    }
}
class SettingsButton extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Settings";
        this.image = Start.loadNewImage("./assets/img/buttons/settings-button.png");
    }
}
class ShopButton extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Shop";
        this.image = Start.loadNewImage("./assets/img/buttons/shop-button.png");
    }
}
class ShowStartScreen extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "StartScreen";
        this.image = Start.loadNewImage("./assets/img/buttons/start-button.png");
    }
}
class StartGameButton extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "StartGame";
        this.image = Start.loadNewImage("./assets/img/buttons/start-button.png");
    }
}
class HighscoreButton extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "HighScore";
        this.image = Start.loadNewImage("./assets/img/buttons/high-score-button.png");
    }
}
class NextCharacter extends Button {
    constructor(xPos, yPos, index) {
        super(xPos, yPos);
        this.name = "NextCharacter";
        this.image = Start.loadNewImage("./assets/img/buttons/arrow-right.png");
    }
}
class NextWorld extends Button {
    constructor(xPos, yPos, index) {
        super(xPos, yPos);
        this.name = "NextWorld";
        this.image = Start.loadNewImage("./assets/img/buttons/arrow-right.png");
    }
}
class PreviousCharacter extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "PreviousCharacter";
        this.image = Start.loadNewImage("./assets/img/buttons/left-arrow.png");
    }
}
class PreviousWorld extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "PreviousWorld";
        this.image = Start.loadNewImage("./assets/img/buttons/left-arrow.png");
    }
}
class UnlockAmongUs extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "UnlockAmongUs";
        this.image = Start.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockArctic extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "UnlockArctic";
        this.image = Start.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockAsh extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "UnlockAsh";
        this.image = Start.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockDesert extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "UnlockDesert";
        this.image = Start.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockMorty extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "UnlockMorty";
        this.image = Start.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockStewie extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "UnlockStewie";
        this.image = Start.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockSwamp extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "UnlockSwamp";
        this.image = Start.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class Images {
    constructor(xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
    move(canvas) { }
    reloadImage(canvas) { }
    getImageName() {
        return this.name;
    }
    getImageXPos() {
        return this.xPos;
    }
    getImageYPos() {
        return this.yPos;
    }
    getImageImage() {
        return this.image;
    }
    getImageImageWidth() {
        return this.image.width;
    }
    getImageImageHeight() {
        return this.image.height;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
class AmongUsChar extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "AmongUsLime";
        this.image = Start.loadNewImage("./assets/img/Characters/AmongUs/amongUsLime.png");
    }
}
class ArcticPlanet extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "ArcticPlanet";
        this.image = Start.loadNewImage("./assets/img/world/ArcticPlanet.png");
    }
}
class ArticImage extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Artic";
        this.image = Start.loadNewImage("./assets/img/world/artic.png");
    }
}
class Ash extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Ash";
        this.image = Start.loadNewImage("./assets/img/players/ash.png");
    }
}
class AshUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "AshUnlocked";
        this.image = Start.loadNewImage("./assets/img/players/AshUnlocked.png");
    }
}
class Cloud extends Images {
    constructor(xPos, yPos, xVelocity) {
        super(xPos, yPos);
        this.image = Start.loadNewImage("./assets/img/background/cloud.png");
        this.xVelocity = xVelocity;
    }
    move(canvas) {
        this.xPos += this.xVelocity;
    }
    reloadImage(canvas) {
        if ((this.xPos + this.getImageImageWidth() < canvas.width + 0.75 &&
            this.xPos + this.getImageImageWidth() > canvas.width - 0.75) ||
            this.xPos < 0) {
            this.xVelocity = -this.xVelocity;
        }
    }
}
class Coin extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Coin";
        this.image = Start.loadNewImage("./assets/img/GameItems/coin.png");
    }
}
class Control extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Control";
        this.image = Start.loadNewImage("./assets/img/GeneralQuestions/control.png");
    }
}
class DesertPlanet extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "DesertPlanet";
        this.image = Start.loadNewImage("./assets/img/world/DesertPlanet.png");
    }
}
class DownLane extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "downLane";
        this.image = Start.loadNewImage("./assets/img/GeneralQuestions/downLane.png");
    }
}
class HighScoreTitle extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "highScoreTitle";
        this.image = Start.loadNewImage("./assets/img/Highscore/highScoreTitle.png");
    }
}
class MarsUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "MarsUnlocked";
        this.image = Start.loadNewImage("./assets/img/world/MarsUnlocked.png");
    }
}
class MidLane extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "midLane";
        this.image = Start.loadNewImage("./assets/img/GeneralQuestions/midLane.png");
    }
}
class MoonUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "MoonUnlocked";
        this.image = Start.loadNewImage("./assets/img/world/MoonUnlocked.png");
    }
}
class Morty extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Morty";
        this.image = Start.loadNewImage("./assets/img/players/morty.png");
    }
}
class MortyUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "MortyUnlocked";
        this.image = Start.loadNewImage("./assets/img/players/MortyUnlocked.png");
    }
}
class Questions extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Questions";
        this.image = Start.loadNewImage("./assets/img/GeneralQuestions/questions.png");
    }
}
class Ranking extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "ranking";
        this.image = Start.loadNewImage("./assets/img/Highscore/ranking.png");
    }
}
class RocketBooster extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "rocketBooster";
        this.image = Start.loadNewImage("./assets/img/GeneralQuestions/rocketBooster.png");
    }
}
class ShieldBooster extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "shieldBooster";
        this.image = Start.loadNewImage("./assets/img/GeneralQuestions/shieldBooster.png");
    }
}
class StewieUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "StewieUnlocked";
        this.image = Start.loadNewImage("./assets/img/players/StewieUnlocked.png");
    }
}
class Stickman extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Stickman";
        this.image = Start.loadNewImage("./assets/img/Characters/Stickman/stickman.png");
    }
}
class SwampImage extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Swamp";
        this.image = Start.loadNewImage("./assets/img/world/swamp.png");
    }
}
class SwampPlanet extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "SwampPlanet";
        this.image = Start.loadNewImage("./assets/img/world/SwampPlanet.png");
    }
}
class TextCoin extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "textCoin";
        this.image = Start.loadNewImage("./assets/img/GeneralQuestions/textCoin.png");
    }
}
class TextObstacle extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "textObstacle";
        this.image = Start.loadNewImage("./assets/img/GeneralQuestions/textObstacle.png");
    }
}
class Titel extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Titel";
        this.image = Start.loadNewImage("./assets/img/world/Titel.png");
    }
}
class UpperLane extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "upperLane";
        this.image = Start.loadNewImage("./assets/img/GeneralQuestions/upperLane.png");
    }
}
class VenusUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "VenusUnlocked";
        this.image = Start.loadNewImage("./assets/img/world/VenusUnlocked.png");
    }
}
class YellowAmongUs extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "YellowAmongUs";
        this.image = Start.loadNewImage("./assets/img/players/yellowAU.png");
    }
}
class YellowAmongUsUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "YellowAmongUsUnlocked";
        this.image = Start.loadNewImage("./assets/img/players/yellowAUUnlocked.png");
    }
}
class Yoshi extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Yoshi";
        this.image = Start.loadNewImage("./assets/img/players/yoshi.png");
    }
}
class YoshiUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "YoshiUnlocked";
        this.image = Start.loadNewImage("./assets/img/players/YoshiUnlocked.png");
    }
}
class coinForShop extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "CoinForShop";
        this.image = Start.loadNewImage("./assets/img/GameItems/coinForShop.png");
    }
}
class DesertImage extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Desert";
        this.image = Start.loadNewImage("./assets/img/world/desert.png");
    }
}
class OceanImage extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Ocean";
        this.image = Start.loadNewImage("./assets/img/world/ocean.png");
    }
}
class GameItem {
    constructor(canvas) {
        this.canvas = canvas;
        this.earnedCoins = 0;
        this.topLane = this.canvas.height / 4;
        this.middleLane = this.canvas.height / 2;
        this.lowerLane = this.canvas.height / 4 * 3;
    }
    getTotalCoins() {
        this.earnedCoins++;
        console.log(this.earnedCoins);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static randomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
class ScoringItem {
    constructor(canvas) {
        this.canvas = canvas;
        this.topLane = this.canvas.height / 4;
        this.middleLane = this.canvas.height / 2;
        this.lowerLane = (this.canvas.height / 4) * 3;
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
        this.speed = -(this.canvas.width / 100);
        this.xPosition = this.canvas.width;
    }
    getPositionX() {
        return this.xPosition;
    }
    getPositionY() {
        return this.yPosition;
    }
    getImageWidth() {
        return this.image.width;
    }
    getImageHeight() {
        return this.image.height;
    }
    getPoints() {
        return this.points;
    }
    getLives() {
        return this.lives;
    }
    move() {
        this.xPosition += this.speed;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.xPosition, this.yPosition);
    }
    outOfCanvas() {
        if (this.xPosition + this.image.width < 0) {
            return true;
        }
        return false;
    }
    loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
class IngameCoin extends ScoringItem {
    constructor(canvas) {
        super(canvas);
    }
}
class Obstacle extends ScoringItem {
}
class PowerUp extends ScoringItem {
}
class Question extends ScoringItem {
}
class Player extends GameItem {
    constructor(canvas) {
        super(canvas);
        this.name = "Player";
        this.keyboardListener = new KeyboardListener();
        this.yPos = this.canvas.height / 2;
        this.xPos = this.canvas.width / 7;
        this.animationFrame = 0;
    }
    move() {
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_UP) &&
            this.yPos === this.middleLane) {
            this.yPos = this.topLane;
        }
        else if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_UP) &&
            this.yPos === this.lowerLane) {
            this.yPos = this.middleLane;
        }
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_DOWN) &&
            this.yPos === this.topLane) {
            this.yPos = this.middleLane;
        }
        else if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_DOWN) &&
            this.yPos === this.middleLane) {
            this.yPos = this.lowerLane;
        }
    }
    draw(ctx) {
        this.playerAnimation();
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
    playerAnimation() {
        this.animationFrame++;
        if (this.animationFrame >= 20) {
            this.animationFrame -= 19;
        }
        if (this.animationFrame <= 5) {
            this.image = GameItem.loadNewImage("./assets/img/Characters/AmongUs/among-us-walk-1.png");
        }
        else if (this.animationFrame > 5 && this.animationFrame <= 10) {
            this.image = GameItem.loadNewImage("./assets/img/Characters/AmongUs/among-us-walk-2.png");
        }
        else if (this.animationFrame > 10 && this.animationFrame <= 15) {
            this.image = GameItem.loadNewImage("./assets/img/Characters/AmongUs/among-us-walk-3.png");
        }
        else if (this.animationFrame > 15 && this.animationFrame <= 20) {
            this.image = GameItem.loadNewImage("./assets/img/Characters/AmongUs/among-us-walk-2.png");
        }
    }
    collidesWithScoringItem(ScoringItem) {
        if (this.xPos + this.image.width > ScoringItem.getPositionX() &&
            this.yPos <
                ScoringItem.getPositionY() + ScoringItem.getImageHeight() / 2 &&
            this.yPos + this.image.height >
                ScoringItem.getPositionY() + ScoringItem.getImageHeight() / 2) {
            return true;
        }
        return false;
    }
}
class Fish extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/GameItems/ocean/oceanFish.png");
        this.points = 5;
        this.lives = 0;
    }
}
class Pearl extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/GameItems/ocean/oceanParelBooster.png");
        this.points = 20;
        this.lives = 0;
    }
}
class Rock extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/GameItems/ocean/oceanRock1.png");
        this.points = -20;
        this.lives = -1;
    }
}
class Shark extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = this.loadNewImage("assets/img/GameItems/ocean/oceanShark.png");
        this.points = -20;
        this.lives = -1;
    }
}
class ArticWorld extends Game {
    constructor(canvas, worldName) {
        super(canvas, worldName);
    }
}
class DesertWorld extends Game {
    constructor(canvas, worldName) {
        super(canvas, worldName);
        this.image = GameItem.loadNewImage("./assets/img/world/DesertBG.jpg");
    }
}
class OceanWorld extends Game {
    constructor(canvas, worldName) {
        super(canvas, worldName);
        this.image = GameItem.loadNewImage("./assets/img/world/OceanBG.jpg");
    }
    drawBackground(ctx) {
        ctx.drawImage(this.image, this.canvas.width / 2, this.canvas.height / 2);
    }
    frameIndex() {
        if (this.frame % 40 === 0) {
            this.scoringItemsOceanWorld();
        }
        if (this.frame % 10 === 0) {
            this.score += 1;
        }
    }
    scoringItemsOceanWorld() {
        const random = GameItem.randomInteger(1, 4);
        if (random === 1) {
            this.scoringItems.push(new Shark(this.canvas));
        }
        if (random === 2) {
            this.scoringItems.push(new Fish(this.canvas));
        }
        if (random === 3) {
            this.scoringItems.push(new Pearl(this.canvas));
        }
        if (random === 4) {
            this.scoringItems.push(new Rock(this.canvas));
        }
    }
}
class SwampWorld extends Game {
    constructor(canvas, worldName) {
        super(canvas, worldName);
    }
}
class GeneralQuestions {
    constructor(canvasId) {
        this.loop = () => {
            this.draw();
            requestAnimationFrame(this.loop);
        };
        this.mouseHandler = (event) => { };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.images = [];
        this.buttons = [];
        this.buttonMaker();
        this.imageMaker();
        this.loop();
        document.addEventListener("click", this.mouseHandler);
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.buttons.forEach((button) => {
            button.draw(ctx);
        });
        this.images.forEach((image) => {
            image.draw(ctx);
        });
        this.controls(ctx);
        this.titleTextBoxes(ctx);
    }
    buttonMaker() {
        this.buttons.push(new BackToStart((this.canvas.width / 5) * 0.05, (this.canvas.height / 5) * 0.09));
    }
    imageMaker() {
        this.images.push(new Control((this.canvas.width / 15) * 0.1, 110));
        this.images.push(new Questions(this.canvas.width / 3, 0));
        this.images.push(new UpperLane((this.canvas.width / 3) * 0.60, 200));
        this.images.push(new MidLane((this.canvas.width / 3) * 0.60, 350));
        this.images.push(new DownLane((this.canvas.width / 3) * 0.60, 500));
        this.images.push(new ShieldBooster((this.canvas.width / 3) * 1, 435));
        this.images.push(new RocketBooster((this.canvas.width / 3) * 1, 135));
        this.images.push(new TextCoin((this.canvas.width / 2) * 1.34, 435));
        this.images.push(new TextObstacle((this.canvas.width / 2) * 1.34, 150));
    }
    controls(ctx) {
        Start.writeTextToCanvas(ctx, "Bovenste laan:", 40, (this.canvas.width / 9) * 0.92, 265, "center");
        Start.writeTextToCanvas(ctx, "Middelste laan:", 40, (this.canvas.width / 9) * 0.93, 405, "center");
        Start.writeTextToCanvas(ctx, "Onderste laan:", 40, (this.canvas.width / 9) * 0.93, 560, "center");
    }
    titleTextBoxes(ctx) {
        Start.writeTextToCanvas(ctx, "Rocket booster", 35, (this.canvas.width / 3) * 1.4, 140, "center");
        Start.writeTextToCanvas(ctx, "Shield booster", 35, (this.canvas.width / 3) * 1.4, 435, "center");
        Start.writeTextToCanvas(ctx, "Obstakels", 35, (this.canvas.width / 2) * 1.6, 140, "center");
        Start.writeTextToCanvas(ctx, "Coins", 35, (this.canvas.width / 2) * 1.6, 435, "center");
    }
}
class HighScore {
    constructor(canvasId) {
        this.loop = () => {
            this.draw();
            requestAnimationFrame(this.loop);
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.images = [];
        this.buttons = [];
        this.buttonMaker();
        this.imageMaker();
        this.loop();
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.images.forEach((image) => {
            image.draw(ctx);
        });
        this.buttons.forEach((button) => {
            button.draw(ctx);
        });
    }
    imageMaker() {
        this.images.push(new HighScoreTitle(this.canvas.width / 3, 0));
        this.images.push(new Ranking(this.canvas.width / 5, 200));
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    buttonMaker() {
        this.buttons.push(new BackToStart((this.canvas.width / 7) * 0.09, (this.canvas.height / 3) * 0.08));
    }
}
class InGameQuestions {
}
class QuestionAndAnswer {
    constructor(canvasId) {
        this.loop = () => {
            this.draw();
            requestAnimationFrame(this.loop);
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.buttons = [];
        this.buttonMaker();
        this.loop();
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        Start.writeTextToCanvas(ctx, "Questions and Answers", 65, this.canvas.width / 2, 80, "center");
        this.list(ctx);
        this.buttons.forEach((button) => {
            button.draw(ctx);
            button.move(this.canvas);
            button.reloadImage(this.canvas);
        });
    }
    list(ctx) {
        Start.writeTextToCanvas(ctx, "Question 1: Wanneer een onbekend persoon contact met je opneemt, geef je dit dan door aan ouders/verzorgers?", 30, (this.canvas.width / 2) * 0.9, 200, "center");
        Start.writeTextToCanvas(ctx, "Question 2: Wanneer een onbekend iemand vraagt om een foto van je, stuur je die dan?", 30, (this.canvas.width / 2) * 0.7, 260, "center");
        Start.writeTextToCanvas(ctx, "Question 3: Voeg je vaak onbekenden toe op sociale media? (Door middel van “snel toevoegen”)", 30, (this.canvas.width / 2) * 0.78, 320, "center");
        Start.writeTextToCanvas(ctx, "Question 4: Je ziet dat een klasgenoot met een vreemd iemand aan het chatten is. Geef je dit aan?", 30, (this.canvas.width / 2) * 0.78, 380, "center");
        Start.writeTextToCanvas(ctx, "Question 5: Je krijgt het bericht: “FortNite_100” stuurt je een vriendschap verzoek. Accepteer je dit verzoek?", 30, (this.canvas.width / 2) * 0.88, 440, "center");
        Start.writeTextToCanvas(ctx, "Question 6: Hoor je in je klas/omgeving vaak over het toevoegen van vreemden op sociale media?", 30, (this.canvas.width / 2) * 0.79, 500, "center");
        Start.writeTextToCanvas(ctx, "Question 7: Waarschuwen je ouders je over online veiligheid?", 30, (this.canvas.width / 2) * 0.51, 560, "center");
    }
    static writeTextToCanvas(ctx, text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "black") {
        ctx.font = `${fontSize}px Minecraft`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    buttonMaker() {
        this.buttons.push(new BackToStart((this.canvas.width / 7) * 0.09, (this.canvas.height / 3) * 0.08));
    }
}
class Settings {
    constructor(canvasId) {
        this.loop = () => {
            this.draw();
            requestAnimationFrame(this.loop);
        };
        this.mouseHandler = (event) => { };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.buttons = [];
        this.buttonMaker();
        this.loop();
        document.addEventListener("click", this.mouseHandler);
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.buttons.forEach((button) => {
            button.draw(ctx);
        });
        Start.writeTextToCanvas(ctx, "Settings", 60, this.canvas.width / 2, 80, "center");
    }
    buttonMaker() {
        this.buttons.push(new BackToStart((this.canvas.width / 5) * 0.05, (this.canvas.height / 5) * 0.09));
    }
}
class Shop {
    constructor(canvasId) {
        this.loop = () => {
            this.draw();
            requestAnimationFrame(this.loop);
        };
        this.mouseHandler = (event) => { };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.buttons = [];
        this.images = [];
        this.buttonMaker();
        this.characters = [];
        this.newWorlds = [];
        this.drawUnlockableCharacter();
        this.drawUnlockableWorlds();
        this.drawImages();
        this.getButtonName();
        this.money = 1000;
        this.loop();
        document.addEventListener("click", this.mouseHandler);
    }
    getButtonName() {
        return this.name;
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.buttons.forEach((button) => {
            button.draw(ctx);
        });
        Start.writeTextToCanvas(ctx, "Shop", 60, this.canvas.width / 2, 80, "center");
        Start.writeTextToCanvas(ctx, "200", 60, this.canvas.width / 11, this.canvas.height / 1.035, "center");
        Start.writeTextToCanvas(ctx, "50", 60, this.canvas.width / 5.8, this.canvas.height / 2.25, "center");
        Start.writeTextToCanvas(ctx, "50", 60, this.canvas.width / 2.55, this.canvas.height / 2.25, "center");
        Start.writeTextToCanvas(ctx, "50", 60, this.canvas.width / 1.68, this.canvas.height / 2.25, "center");
        Start.writeTextToCanvas(ctx, "50", 60, this.canvas.width / 1.24, this.canvas.height / 2.25, "center");
        Start.writeTextToCanvas(ctx, "100", 60, this.canvas.width / 1.42, this.canvas.height / 1.10, "center");
        Start.writeTextToCanvas(ctx, "100", 60, this.canvas.width / 2.01, this.canvas.height / 1.10, "center");
        Start.writeTextToCanvas(ctx, "100", 60, this.canvas.width / 3.4, this.canvas.height / 1.10, "center");
        this.images.forEach((image) => {
            image.move(this.canvas);
            image.reloadImage(this.canvas);
            image.draw(ctx);
        });
        this.characters.forEach((character) => {
            character.move(this.canvas);
            character.reloadImage(this.canvas);
            character.draw(ctx);
        });
        this.newWorlds.forEach((world) => {
            world.move(this.canvas);
            world.reloadImage(this.canvas);
            world.draw(ctx);
        });
    }
    drawImages() {
        this.images.push(new coinForShop(this.canvas.width / 2.3, this.canvas.height / 1.17));
        this.images.push(new coinForShop(this.canvas.width / 4.4, this.canvas.height / 1.17));
        this.images.push(new coinForShop(this.canvas.width / 1.56, this.canvas.height / 1.17));
        this.images.push(new coinForShop(this.canvas.width / 3, this.canvas.height / 2.56));
        this.images.push(new coinForShop(this.canvas.width / 1.33, this.canvas.height / 2.56));
        this.images.push(new coinForShop(this.canvas.width / 9, this.canvas.height / 2.56));
        this.images.push(new coinForShop(this.canvas.width / 1.85, this.canvas.height / 2.56));
        this.images.push(new coinForShop(this.canvas.width / 50, this.canvas.height / 1.1));
    }
    drawUnlockableWorlds() {
        this.newWorlds.push(new DesertPlanet(this.canvas.width / 4.3, this.canvas.height / 1.6));
        this.newWorlds.push(new SwampPlanet(this.canvas.width / 2.33, this.canvas.height / 1.64));
        this.newWorlds.push(new ArcticPlanet(this.canvas.width / 1.56, this.canvas.height / 1.64));
    }
    drawUnlockableCharacter() {
        this.characters.push(new Yoshi(this.canvas.width / 7.9, this.canvas.height / 6));
        this.characters.push(new YellowAmongUs(this.canvas.width / 2.9, this.canvas.height / 6));
        this.characters.push(new Ash(this.canvas.width / 1.7, this.canvas.height / 6));
        this.characters.push(new Morty(this.canvas.width / 1.25, this.canvas.height / 6));
    }
    buttonMaker() {
        this.buttons.push(new BackToStart((this.canvas.width / 5) * 0.05, (this.canvas.height / 5) * 0.09));
        this.buttons.push(new QuestionsAnswersButton(this.canvas.width / 1.07, this.canvas.height / 70));
        this.buttons.push(new SettingsButton(this.canvas.width / 1.07, this.canvas.height / 8.5));
        this.buttons.push(new UnlockDesert(this.canvas.width / 4.5, this.canvas.height / 1.08));
        this.buttons.push(new UnlockArctic(this.canvas.width / 1.56, this.canvas.height / 1.08));
        this.buttons.push(new UnlockSwamp(this.canvas.width / 2.31, this.canvas.height / 1.08));
        this.buttons.push(new UnlockStewie(this.canvas.width / 9, this.canvas.height / 2.15));
        this.buttons.push(new UnlockAmongUs(this.canvas.width / 3.1, this.canvas.height / 2.15));
        this.buttons.push(new UnlockAsh(this.canvas.width / 1.87, this.canvas.height / 2.15));
        this.buttons.push(new UnlockMorty(this.canvas.width / 1.34, this.canvas.height / 2.15));
    }
    loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
class Start {
    constructor(canvasId) {
        this.loop = () => {
            this.draw();
            this.wallet++;
            requestAnimationFrame(this.loop);
        };
        this.mouseHandler = (event) => {
            this.buttons.forEach((button) => {
                if (event.clientX >= button.getButtonXPos() &&
                    event.clientX < button.getButtonXPos() + button.getButtonImageWidth() &&
                    event.clientY >= button.getButtonYPos() &&
                    event.clientY <= button.getButtonYPos() + button.getButtonImageHeight()) {
                    this.worldSelector(button);
                    this.characterSelector(button);
                    this.startLevel(button);
                }
            });
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.buttons = [];
        this.worldImages = [];
        this.characterImages = [];
        this.images = [];
        this.background = [];
        this.wallet = 0;
        this.indexCounterWorld = 0;
        this.indexCounterCharacter = 0;
        this.buttonMaker();
        this.worldImageMaker();
        this.charachterMaker();
        this.imageMaker();
        this.backgroundLoop();
        this.loop();
        document.addEventListener("click", this.mouseHandler);
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.forEach((backgroundImage) => {
            backgroundImage.draw(ctx);
            backgroundImage.move(this.canvas);
            backgroundImage.reloadImage(this.canvas);
        });
        this.images.forEach((image) => {
            image.draw(ctx);
        });
        this.buttons.forEach((button) => {
            button.draw(ctx);
        });
        for (let i = 0; i < this.characterImages.length; i++) {
            this.characterImages[this.indexCounterCharacter].draw(ctx);
        }
        for (let i = 0; i < this.worldImages.length; i++) {
            this.worldImages[this.indexCounterWorld].draw(ctx);
        }
        Start.writeTextToCanvas(ctx, `${this.wallet}`, 40, 60, 80);
    }
    buttonMaker() {
        this.buttons.push(new StartGameButton(this.canvas.width / 2 - 329 / 2, (this.canvas.height / 5) * 4 - 100 / 2));
        this.buttons.push(new ShopButton(this.canvas.width / 5 - 329 / 2, (this.canvas.height / 6) * 4));
        this.buttons.push(new HighscoreButton((this.canvas.width / 5) * 4 - 329 / 2, (this.canvas.height / 6) * 4));
        this.buttons.push(new PreviousCharacter(this.canvas.width / 4, this.canvas.height / 2 - 89));
        this.buttons.push(new NextCharacter((this.canvas.width / 4) * 3 - 143, this.canvas.height / 2 - 89, 1));
        this.buttons.push(new PreviousWorld((this.canvas.width / 7) * 2, this.canvas.height / 3 - 89));
        this.buttons.push(new NextWorld((this.canvas.width / 7) * 5 - 143, this.canvas.height / 3 - 89, 1));
        this.buttons.push(new QuestionsAnswersButton(this.canvas.width - 124, 0));
        this.buttons.push(new SettingsButton(this.canvas.width - 124, 124));
    }
    worldImageMaker() {
        this.worldImages.push(new OceanImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 130));
        this.worldImages.push(new DesertImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 80));
        this.worldImages.push(new SwampImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 90));
        this.worldImages.push(new ArticImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 110));
    }
    charachterMaker() {
        this.characterImages.push(new AmongUsChar(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120));
        this.characterImages.push(new Stickman(this.canvas.width / 2 - 48, this.canvas.height / 2 - 120));
        this.characterImages.push(new YoshiUnlocked(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120));
        this.characterImages.push(new YellowAmongUsUnlocked(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120));
        this.characterImages.push(new MortyUnlocked(this.canvas.width / 2 - 50, this.canvas.height / 2 - 120));
        this.characterImages.push(new AshUnlocked(this.canvas.width / 2 - 50, this.canvas.height / 2 - 120));
    }
    imageMaker() {
        this.images.push(new Titel(this.canvas.width / 4, -40));
    }
    backgroundLoop() {
        this.background.push(new Cloud(0, this.canvas.height / 4, 0.5));
    }
    worldSelector(button) {
        if (this.indexCounterWorld == this.worldImages.length - 1 &&
            button.getButtonName() == "NextWorld") {
            this.indexCounterWorld = 0;
        }
        else if (this.indexCounterWorld == 0 &&
            button.getButtonName() == "PreviousWorld") {
            this.indexCounterWorld += this.worldImages.length - 1;
        }
        else if (button.getButtonName() == "PreviousWorld" &&
            this.indexCounterWorld > 0) {
            this.indexCounterWorld -= 1;
        }
        else if (button.getButtonName() == "NextWorld") {
            this.indexCounterWorld += 1;
        }
    }
    characterSelector(button) {
        if (this.indexCounterCharacter == this.characterImages.length - 1 &&
            button.getButtonName() == "NextCharacter") {
            this.indexCounterCharacter = 0;
        }
        else if (this.indexCounterCharacter == 0 &&
            button.getButtonName() == "PreviousCharacter") {
            this.indexCounterCharacter += this.characterImages.length - 1;
        }
        else if (button.getButtonName() == "PreviousCharacter" &&
            this.indexCounterCharacter > 0) {
            this.indexCounterCharacter -= 1;
        }
        else if (button.getButtonName() == "NextCharacter") {
            this.indexCounterCharacter += 1;
        }
    }
    startLevel(button) {
        if (button.getButtonName() == "StartGame" &&
            this.worldImages[this.indexCounterWorld].getImageName() == "Ocean") {
            new OceanWorld(this.canvas, this.worldImages[this.indexCounterWorld].getImageName());
        }
        else if (button.getButtonName() == "StartGame" &&
            this.worldImages[this.indexCounterWorld].getImageName() == "Artic") {
            new ArticWorld(this.canvas, this.worldImages[this.indexCounterWorld].getImageName());
        }
        else if (button.getButtonName() == "StartGame" &&
            this.worldImages[this.indexCounterWorld].getImageName() == "Desert") {
            new DesertWorld(this.canvas, this.worldImages[this.indexCounterWorld].getImageName());
        }
        else if (button.getButtonName() == "StartGame" &&
            this.worldImages[this.indexCounterWorld].getImageName() == "Swamp") {
            new SwampWorld(this.canvas, this.worldImages[this.indexCounterWorld].getImageName());
        }
    }
    static writeTextToCanvas(ctx, text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "black") {
        ctx.font = `${fontSize}px Arial`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
//# sourceMappingURL=app.js.map