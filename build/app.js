console.log("The game is working");
let init = () => {
    new Start(document.getElementById("canvas"));
};
window.addEventListener("load", init);
class Game {
    constructor(canvasId) {
        this.loop = () => {
            this.frame++;
            console.log(this.frame);
            this.writeGoodLuck();
            if (this.gameState === "level-1") {
            }
            else if (this.gameState === "Level-2") {
            }
            requestAnimationFrame(this.loop);
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.gameItems = [];
        this.score = 0;
        this.frame = 0;
        this.gameState = "Begin";
        this.loop();
    }
    writeGoodLuck() {
        if (this.frame >= 0 && this.frame <= 150) {
            const ctx = this.canvas.getContext("2d");
            this.writeTextToCanvas(ctx, "Succes!", 40, this.canvas.width / 2, this.canvas.height / 2);
        }
    }
    writeTextToCanvas(ctx, text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "red") {
        ctx.font = `${fontSize}px Minecraft`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
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
            if (event.clientX >= this.getButtonXPos() &&
                event.clientX < this.getButtonXPos() + this.getButtonImageWidth() &&
                event.clientY >= this.getButtonYPos() &&
                event.clientY <= this.getButtonYPos() + this.getButtonImageHeight()) {
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
class Background extends Button {
    constructor(xPos, yPos, xVelocity) {
        super(xPos, yPos);
        this.name = "Cloud";
        this.image = Start.loadNewImage("./assets/img/background/cloud.png");
        this.xVelocity = xVelocity;
    }
    move(canvas) {
        this.xPos += this.xVelocity;
    }
    reloadImage(canvas) {
        if ((this.xPos + this.getButtonImageWidth() < canvas.width + 0.75 &&
            this.xPos + this.getButtonImageWidth() > canvas.width - 0.75) ||
            this.xPos < 0) {
            this.xVelocity = -this.xVelocity;
        }
    }
}
class HighscoreButton extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "HighScore";
        this.image = Start.loadNewImage("./assets/img/buttons/high-score-button.png");
    }
}
class NextSelector extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "ArrowRight";
        this.image = Start.loadNewImage("./assets/img/buttons/arrow-right.png");
    }
}
class PreviousSelector extends Button {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "ArrowLeft";
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
        this.name = "Shop";
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
class ScoringItem extends GameItem {
    constructor(canvas) {
        super(canvas);
        this.xPosition = 120;
        this.createRandomYpos();
        this.canvas = canvas;
    }
    createRandomYpos() {
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
    collisionDetection() {
    }
    move() {
    }
}
class Coin extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.name = "Coin";
        this.image = GameItem.loadNewImage("");
        this.speed = 15;
        this.points = 1;
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
        this.image = GameItem.loadNewImage("../assets/img/Characters/amongus.png");
        this.keyboardListener = new KeyboardListener;
        this.yPos = this.canvas.height / 2;
    }
    move() {
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_W) && this.yPos !== this.topLane) {
            this.yPos = this.topLane;
        }
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_X) && this.yPos !== this.middleLane) {
            this.yPos = this.middleLane;
        }
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_S) && this.yPos !== this.lowerLane) {
            this.yPos = this.lowerLane;
        }
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.yPos - this.image.height / 2, this.canvas.width - 150);
    }
    collidesWithGameItem(GameItem) {
    }
}
class World {
}
class HighScore {
    constructor(canvasId) {
        this.loop = () => {
            this.draw();
            requestAnimationFrame(this.loop);
        };
        this.mouseHandler = (event) => {
            new Start(document.getElementById("canvas"));
            console.log("Hey");
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.leftArrow = new PreviousSelector((this.canvas.width / 5) * 0.05, (this.canvas.height / 5) * 0.09);
        document.addEventListener("click", this.mouseHandler);
        this.loop();
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        HighScore.writeTextToCanvas(ctx, "Highscores", 65, this.canvas.width / 2, 80, "center");
        this.rankList(ctx);
        this.leftArrow.draw(ctx);
    }
    rankList(ctx) {
        HighScore.writeTextToCanvas(ctx, "First:", 40, this.canvas.width / 3, 200, "center");
        HighScore.writeTextToCanvas(ctx, "Second:", 40, (this.canvas.width / 3) * 0.96, 260, "center");
        HighScore.writeTextToCanvas(ctx, "Thrid:", 40, (this.canvas.width / 3) * 0.99, 320, "center");
        HighScore.writeTextToCanvas(ctx, "Fourth:", 40, (this.canvas.width / 3) * 0.97, 380, "center");
        HighScore.writeTextToCanvas(ctx, "Fifth:", 40, this.canvas.width / 3, 440, "center");
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
}
class Shop {
    constructor(canvasId) {
        this.loop = () => {
            this.draw();
            requestAnimationFrame(this.loop);
        };
        this.mouseHandler = (event) => {
            new Start(document.getElementById("canvas"));
            console.log("Hey");
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.leftArrow = new PreviousSelector((this.canvas.width / 5) * 0.05, (this.canvas.height / 5) * 0.09);
        document.addEventListener("click", this.mouseHandler);
        this.loop();
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        HighScore.writeTextToCanvas(ctx, "Shop", 65, this.canvas.width / 2, 80, "center");
    }
}
class Start {
    constructor(canvasId) {
        this.loop = () => {
            this.draw();
            this.wallet++;
            requestAnimationFrame(this.loop);
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.buttons = [];
        this.wallet = 0;
        this.buttonMaker();
        this.loop();
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        Start.writeTextToCanvas(ctx, "Danger Dash", 60, this.canvas.width / 2, 80, "center");
        this.buttons.forEach((button) => {
            button.draw(ctx);
            button.move(this.canvas);
            button.reloadImage(this.canvas);
        });
        Start.writeTextToCanvas(ctx, `${this.wallet}`, 40, 60, 80);
    }
    buttonMaker() {
        this.buttons.push(new StartGameButton(this.canvas.width / 2 - 329 / 2, (this.canvas.height / 5) * 4 - 100 / 2));
        this.buttons.push(new ShopButton(this.canvas.width / 5 - 329 / 2, (this.canvas.height / 6) * 4));
        this.buttons.push(new HighscoreButton((this.canvas.width / 5) * 4 - 329 / 2, (this.canvas.height / 6) * 4));
        this.buttons.push(new PreviousSelector(this.canvas.width / 4, this.canvas.height / 2 - 89));
        this.buttons.push(new NextSelector((this.canvas.width / 4) * 3 - 143, this.canvas.height / 2 - 89));
        this.buttons.push(new PreviousSelector((this.canvas.width / 7) * 2, this.canvas.height / 3 - 89));
        this.buttons.push(new NextSelector((this.canvas.width / 7) * 5 - 143, this.canvas.height / 3 - 89));
        this.buttons.push(new QuestionsAnswersButton(this.canvas.width - 124, 0));
        this.buttons.push(new SettingsButton(this.canvas.width - 124, 124));
        this.buttons.push(new Background(this.canvas.width / 4, 0, 1));
    }
    static writeTextToCanvas(ctx, text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "red") {
        ctx.font = `${fontSize}px Minecraft`;
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