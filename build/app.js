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
            if (this.worldName === "level-1") {
                console.log("level 1");
                this.player.move();
            }
            else if (this.worldName === "Level-2") {
            }
            requestAnimationFrame(this.loop);
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.gameItems = [];
        this.player = new Player(this.canvas);
        this.score = 0;
        this.frame = 0;
        this.worldName = worldName;
        this.loop();
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        Start.writeTextToCanvas(ctx, "Danger Dash", 60, this.canvas.width / 2, 80, "center");
        this.player.draw(ctx);
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
                if (this.getButtonName() === "HighScore") {
                    new HighScore(document.getElementById("canvas"));
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
class Unlock extends Button {
    constructor(xPos, yPos, index) {
        super(xPos, yPos);
        this.name = "ArrowRight";
        this.image = Start.loadNewImage("./assets/img/buttons/unlock.png");
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
class Artic extends Images {
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
class Mars extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Mars";
        this.image = Start.loadNewImage("./assets/img/world/mars.png");
    }
}
class Moon extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Moon";
        this.image = Start.loadNewImage("./assets/img/world/maan.png");
    }
}
class Morty extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Morty";
        this.image = Start.loadNewImage("./assets/img/players/morty.png");
    }
}
class Sonic extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Sonic";
        this.image = Start.loadNewImage("./assets/img/players/sonic.png");
    }
}
class Stickman extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Stickman";
        this.image = Start.loadNewImage("./assets/img/Characters/Stickman/stickman.png");
    }
}
class Swamp extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Swamp";
        this.image = Start.loadNewImage("./assets/img/world/swamp.png");
    }
}
class Titel extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Titel";
        this.image = Start.loadNewImage("./assets/img/world/Titel.png");
    }
}
class Unlockable extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "UnlockAble";
        this.image = Start.loadNewImage("./assets/img/players/yellowAU.png");
    }
}
class Venus extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Venus";
        this.image = Start.loadNewImage("./assets/img/world/venus.png");
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
class IngameCoin extends ScoringItem {
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
        this.image = GameItem.loadNewImage("./assets/img/Characters/Amongus/among-us-walk-1.png");
        this.keyboardListener = new KeyboardListener();
        this.yPos = this.canvas.height / 2;
        this.xPos = this.canvas.width / 3;
        this.animationFrame = 0;
    }
    move() {
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_W) &&
            this.yPos !== this.topLane) {
            this.yPos = this.topLane;
            console.log("W is pressed");
        }
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_X) &&
            this.yPos !== this.middleLane) {
            this.yPos = this.middleLane;
            console.log("X is pressed");
        }
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_S) &&
            this.yPos !== this.lowerLane) {
            this.yPos = this.lowerLane;
            console.log("S is pressed");
        }
    }
    draw(ctx) {
        this.animationFrame++;
        if (this.animationFrame >= 40) {
            this.animationFrame -= 39;
        }
        if (this.animationFrame <= 10) {
            ctx.drawImage(GameItem.loadNewImage("./assets/img/Characters/Amongus/among-us-walk-1.png"), this.xPos, this.yPos);
        }
        else if (this.animationFrame >= 10 && this.animationFrame <= 20) {
            ctx.drawImage(GameItem.loadNewImage("./assets/img/Characters/Amongus/among-us-walk-2.png"), this.xPos, this.yPos);
        }
        else if (this.animationFrame >= 20 && this.animationFrame <= 30) {
            ctx.drawImage(GameItem.loadNewImage("./assets/img/Characters/Amongus/among-us-walk-3.png"), this.xPos, this.yPos);
        }
        else if (this.animationFrame >= 30 && this.animationFrame <= 40) {
            ctx.drawImage(GameItem.loadNewImage("./assets/img/Characters/Amongus/among-us-walk-2.png"), this.xPos, this.yPos);
        }
    }
    collidesWithGameItem(GameItem) { }
}
class ArticWorld extends Game {
    constructor(canvas, worldName) {
        super(canvas, worldName);
    }
}
class DesertWorld extends Game {
    constructor(canvas, worldName) {
        super(canvas, worldName);
    }
}
class OceanWorld extends Game {
    constructor(canvas, worldName) {
        super(canvas, worldName);
    }
}
class SwampWorld extends Game {
    constructor(canvas, worldName) {
        super(canvas, worldName);
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
        this.buttons = [];
        this.buttonMaker();
        this.loop();
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        HighScore.writeTextToCanvas(ctx, "Highscores", 65, this.canvas.width / 2, 80, "center");
        this.rankList(ctx);
        this.buttons.forEach((button) => {
            button.draw(ctx);
            button.move(this.canvas);
            button.reloadImage(this.canvas);
        });
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
    buttonMaker() {
        this.buttons.push(new BackToStart((this.canvas.width / 7) * 0.09, (this.canvas.height / 3) * 0.08));
    }
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
        HighScore.writeTextToCanvas(ctx, "Questions and Answers", 65, this.canvas.width / 2, 80, "center");
        this.list(ctx);
        this.buttons.forEach((button) => {
            button.draw(ctx);
            button.move(this.canvas);
            button.reloadImage(this.canvas);
        });
    }
    list(ctx) {
        HighScore.writeTextToCanvas(ctx, "Question 1: Wanneer een onbekend persoon contact met je opneemt, geef je dit dan door aan ouders/verzorgers?", 30, (this.canvas.width / 2) * 0.9, 200, "center");
        HighScore.writeTextToCanvas(ctx, "Question 2: Wanneer een onbekend iemand vraagt om een foto van je, stuur je die dan?", 30, (this.canvas.width / 2) * 0.7, 260, "center");
        HighScore.writeTextToCanvas(ctx, "Question 3: Voeg je vaak onbekenden toe op sociale media? (Door middel van “snel toevoegen”)", 30, (this.canvas.width / 2) * 0.78, 320, "center");
        HighScore.writeTextToCanvas(ctx, "Question 4: Je ziet dat een klasgenoot met een vreemd iemand aan het chatten is. Geef je dit aan?", 30, (this.canvas.width / 2) * 0.78, 380, "center");
        HighScore.writeTextToCanvas(ctx, "Question 5: Je krijgt het bericht: “FortNite_100” stuurt je een vriendschap verzoek. Accepteer je dit verzoek?", 30, (this.canvas.width / 2) * 0.88, 440, "center");
        HighScore.writeTextToCanvas(ctx, "Question 6: Hoor je in je klas/omgeving vaak over het toevoegen van vreemden op sociale media?", 30, (this.canvas.width / 2) * 0.79, 500, "center");
        HighScore.writeTextToCanvas(ctx, "Question 7: Waarschuwen je ouders je over online veiligheid?", 30, (this.canvas.width / 2) * 0.51, 560, "center");
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
        this.loop();
        document.addEventListener("click", this.mouseHandler);
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawUnlockableCharacter();
        this.buttons.forEach((button) => {
            button.draw(ctx);
        });
        Start.writeTextToCanvas(ctx, "Shop", 60, this.canvas.width / 2, 80, "center");
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
        this.images.push(new coinForShop(this.canvas.width / 2 - 120, this.canvas.height / 3 + 560));
        this.images.push(new coinForShop(this.canvas.width / 2 - 520, this.canvas.height / 3 + 560));
        this.images.push(new coinForShop(this.canvas.width / 2 + 270, this.canvas.height / 3 + 560));
        this.images.push(new coinForShop(this.canvas.width / 2 - 330, this.canvas.height / 3 + 60));
        this.images.push(new coinForShop(this.canvas.width / 2 + 480, this.canvas.height / 3 + 60));
        this.images.push(new coinForShop(this.canvas.width / 2 - 750, this.canvas.height / 3 + 60));
        this.images.push(new coinForShop(this.canvas.width / 2 + 80, this.canvas.height / 3 + 60));
    }
    drawUnlockableWorlds() {
        this.newWorlds.push(new Moon(this.canvas.width / 2 - 500, this.canvas.height / 3 + 300));
        this.newWorlds.push(new Mars(this.canvas.width / 2 - 100, this.canvas.height / 3 + 300));
        this.newWorlds.push(new Venus(this.canvas.width / 2 + 300, this.canvas.height / 3 + 300));
    }
    drawUnlockableCharacter() {
        this.characters.push(new Sonic(this.canvas.width / 2 - 700, this.canvas.height / 3 - 210));
        this.characters.push(new Unlockable(this.canvas.width / 2 - 300, this.canvas.height / 3 - 190));
        this.characters.push(new Ash(this.canvas.width / 2 + 160, this.canvas.height / 3 - 190));
        this.characters.push(new Morty(this.canvas.width / 2 + 580, this.canvas.height / 3 - 190));
    }
    buttonMaker() {
        this.buttons.push(new BackToStart((this.canvas.width / 5) * 0.05, (this.canvas.height / 5) * 0.09));
        this.buttons.push(new QuestionsAnswersButton(this.canvas.width - 124, 0));
        this.buttons.push(new SettingsButton(this.canvas.width - 124, 124));
        this.buttons.push(new Unlock(this.canvas.width - 1500, 1000, 1));
        this.buttons.push(new Unlock(this.canvas.width - 700, 1000, 1));
        this.buttons.push(new Unlock(this.canvas.width - 1100, 1000, 1));
        this.buttons.push(new Unlock(this.canvas.width - 1710, 500, 1));
        this.buttons.push(new Unlock(this.canvas.width - 1300, 500, 1));
        this.buttons.push(new Unlock(this.canvas.width - 890, 500, 1));
        this.buttons.push(new Unlock(this.canvas.width - 480, 500, 1));
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
        this.worldImages.push(new Swamp(this.canvas.width / 2 - 202, this.canvas.height / 3 - 90));
        this.worldImages.push(new Artic(this.canvas.width / 2 - 202, this.canvas.height / 3 - 110));
    }
    charachterMaker() {
        this.characterImages.push(new AmongUsChar(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120));
        this.characterImages.push(new Stickman(this.canvas.width / 2 - 48, this.canvas.height / 2 - 120));
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
            new ArticWorld(this.canvas, this.worldImages[this.indexCounterWorld].getImageName());
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