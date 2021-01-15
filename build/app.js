console.log("The game is working");
let init = () => {
    new DangerDash(document.getElementById("canvas"));
};
window.addEventListener("load", init);
class DangerDash {
    constructor(canvas) {
        this.loop = () => {
            this.DangerDashFrame++;
            console.log(this.DangerDashFrame);
            if (this.screenName === "Start") {
                this.start.draw();
            }
            if (this.screenName === "Shop") {
                this.shop.draw();
            }
            requestAnimationFrame(this.loop);
        };
        this.canvas = canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.earnedCoins = 0;
        this.screenName = "Start";
        this.start = new Start(canvas);
        this.DangerDashFrame = 0;
        this.loop();
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
class Utility {
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
class Button {
    constructor(xPos, yPos, canvas) {
        this.mouseHandler = (event) => {
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
                if (this.getButtonName() === "UnlockYoshi") {
                    console.log("Unlock Yoshi");
                }
                if (this.getButtonName() === "UnlockAmongUs") {
                    console.log("UnlockAmongUs");
                }
                if (this.getButtonName() === "UnlockAsh") {
                    const ctx = this.canvas.getContext("2d");
                    ctx.drawImage(Utility.loadNewImage("./assets/img/players/yellowAUUnlocked.png"), this.canvas.width / 2.9, this.canvas.height / 6);
                    console.log("Unlock Ash");
                }
                if (this.getButtonName() === "UnlockSonic") {
                    console.log("Unlock Sonic");
                }
                if (this.getButtonName() === "QandA") {
                    new GeneralQuestions(this.canvas);
                }
                if (this.getButtonName() === "Shop") {
                    console.log("shopbutton clicked!");
                }
                if (this.getButtonName() === "RestartButton") {
                    new Start(this.canvas);
                }
                if (this.getButtonName() === "NoButton") {
                    new Start(this.canvas);
                }
                else if (this.getButtonName() === "BackToStart") {
                    new Start(this.canvas);
                }
                else {
                    return null;
                }
            }
        };
        this.xPos = xPos;
        this.yPos = yPos;
        document.addEventListener("click", this.mouseHandler);
        this.canvas = canvas;
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
    draw(ctx) {
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
    getButtonImageWidth() {
        return this.image.width;
    }
    getButtonImageHeight() {
        return this.image.height;
    }
}
class BackToStart extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "BackToStart";
        this.image = Utility.loadNewImage("./assets/img/buttons/left-arrow.png");
    }
}
class NoButton extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "NoButton";
        this.image = Utility.loadNewImage("./assets/img/buttons/noButton.png");
    }
}
class QuestionsAnswersButton extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "QandA";
        this.image = Utility.loadNewImage("./assets/img/buttons/info-button.png");
    }
}
class RestartButton extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "RestartButton";
        this.image = Utility.loadNewImage("./assets/img/buttons/RestartButton.png");
    }
}
class ShopButton extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "Shop";
        this.image = Utility.loadNewImage("./assets/img/buttons/shop-button.png");
    }
}
class ShowStartScreen extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "StartScreen";
        this.image = Utility.loadNewImage("./assets/img/buttons/start-button.png");
    }
}
class StartGameButton extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "StartGame";
        this.image = Utility.loadNewImage("./assets/img/buttons/start-button.png");
    }
}
class YesButton extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "YesButton";
        this.image = Utility.loadNewImage("./assets/img/buttons/yesButton.png");
    }
}
class HighscoreButton extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "HighScore";
        this.image = Utility.loadNewImage("./assets/img/buttons/high-score-button.png");
    }
}
class NextCharacter extends Button {
    constructor(xPos, yPos, index, canvas) {
        super(xPos, yPos, canvas);
        this.name = "NextCharacter";
        this.image = Utility.loadNewImage("./assets/img/buttons/arrow-right.png");
    }
}
class NextWorld extends Button {
    constructor(xPos, yPos, index, canvas) {
        super(xPos, yPos, canvas);
        this.name = "NextWorld";
        this.image = Utility.loadNewImage("./assets/img/buttons/arrow-right.png");
    }
}
class PreviousCharacter extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "PreviousCharacter";
        this.image = Utility.loadNewImage("./assets/img/buttons/left-arrow.png");
    }
}
class PreviousWorld extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "PreviousWorld";
        this.image = Utility.loadNewImage("./assets/img/buttons/left-arrow.png");
    }
}
class UnlockAmongUs extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "UnlockAmongUs";
        this.image = Utility.loadNewImage("./assets/img/buttons/unlock.png");
        this.canvas = canvas;
    }
    drawUnlockedAmongUs() {
        const ctx = this.canvas.getContext("2d");
        ctx.drawImage(Utility.loadNewImage("./assets/img/players/YellowAUUnlocked.png"), this.canvas.width / 2.9, this.canvas.height / 6);
    }
}
class UnlockArctic extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "UnlockArctic";
        this.image = Utility.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockDesert extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "UnlockDesert";
        this.image = Utility.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockGirlCharacter extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "UnlockGirlCharacter";
        this.image = Utility.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockSonic extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "UnlockSonic";
        this.image = Utility.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockSwamp extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "UnlockSwamp";
        this.image = Utility.loadNewImage("./assets/img/buttons/unlock.png");
    }
}
class UnlockYoshi extends Button {
    constructor(xPos, yPos, canvas) {
        super(xPos, yPos, canvas);
        this.name = "UnlockYoshi";
        this.image = Utility.loadNewImage("./assets/img/buttons/unlock.png");
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
        this.image = Utility.loadNewImage("./assets/img/Characters/AmongUs/amongUsLime.png");
    }
}
class ArcticPlanet extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "ArcticPlanet";
        this.image = Utility.loadNewImage("./assets/img/world/ArcticPlanet.png");
    }
}
class ArcticPlanetUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Artic";
        this.image = Utility.loadNewImage("./assets/img/world/ArcticUnlocked.png");
    }
}
class ArticImage extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Artic";
        this.image = Utility.loadNewImage("./assets/img/world/artic.png");
    }
}
class Cloud extends Images {
    constructor(xPos, yPos, xVelocity) {
        super(xPos, yPos);
        this.image = Utility.loadNewImage("./assets/img/background/cloud.png");
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
        this.image = Utility.loadNewImage("./assets/img/GameItems/coin.png");
    }
}
class Control extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Control";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/control.png");
    }
}
class DesertPlanet extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "DesertPlanet";
        this.image = Utility.loadNewImage("./assets/img/world/DesertPlanet.png");
    }
}
class DesertPlanetUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "DesertUnlocked";
        this.image = Utility.loadNewImage("./assets/img/world/DesertUnlocked.png");
    }
}
class DownLane extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "downLane";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/downLane.png");
    }
}
class EndscreenBackground extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "EndscreenBG";
        this.image = Utility.loadNewImage("./assets/img/background/EndscreenBackground.jpg");
    }
}
class GirlCharacter extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "GirlCharacter";
        this.image = Utility.loadNewImage("./assets/img/players/WazigGirl.png");
    }
}
class GirlCharacterUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "GirlCharacterUnlocked";
        this.image = Utility.loadNewImage("./assets/img/players/girl.png");
    }
}
class HighScoreTitle extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "highScoreTitle";
        this.image = Utility.loadNewImage("./assets/img/Highscore/highScoreTitle.png");
    }
}
class InGameQuestionImage extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Questions";
        this.image = Utility.loadNewImage("./assets/img/InGameQuestions/inGameQuestionsImage.png");
    }
}
class MidLane extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "midLane";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/midLane.png");
    }
}
class Questions extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Questions";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/questions.png");
    }
}
class Ranking extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "ranking";
        this.image = Utility.loadNewImage("./assets/img/Highscore/ranking.png");
    }
}
class RocketBooster extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "rocketBooster";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/rocketBooster.png");
    }
}
class ShieldBooster extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "shieldBooster";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/shieldBooster.png");
    }
}
class SonicUnlockable extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Sonic";
        this.image = Utility.loadNewImage("./assets/img/players/Sonic.png");
    }
}
class SonicUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "SonicUnlocked";
        this.image = Utility.loadNewImage("./assets/img/players/SonicUnlocked.png");
    }
}
class Stickman extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Stickman";
        this.image = Utility.loadNewImage("./assets/img/Characters/Stickman/stickman.png");
    }
}
class SwampImage extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Swamp";
        this.image = Utility.loadNewImage("./assets/img/world/swamp.png");
    }
}
class SwampPlanet extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "SwampPlanet";
        this.image = Utility.loadNewImage("./assets/img/world/SwampPlanet.png");
    }
}
class SwampPlanetUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "SwampUnlocked";
        this.image = Utility.loadNewImage("./assets/img/world/SwampUnlocked.png");
    }
}
class TextCoin extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "textCoin";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/textCoin.png");
    }
}
class TextObstacle extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "textObstacle";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/textObstacle.png");
    }
}
class Titel extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Titel";
        this.image = Utility.loadNewImage("./assets/img/world/Titel.png");
    }
}
class UpperLane extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "upperLane";
        this.image = Utility.loadNewImage("./assets/img/GeneralQuestions/upperLane.png");
    }
}
class YellowAmongUs extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "YellowAmongUs";
        this.image = Utility.loadNewImage("./assets/img/players/yellowAU.png");
    }
}
class YellowAmongUsUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "UnlockYellowAmongUs";
        this.image = Utility.loadNewImage("./assets/img/players/yellowAUUnlocked.png");
    }
}
class YoshiUnlockable extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Yoshi";
        this.image = Utility.loadNewImage("./assets/img/players/yoshi.png");
    }
}
class YoshiUnlocked extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "YoshiUnlocked";
        this.image = Utility.loadNewImage("./assets/img/players/YoshiUnlocked.png");
    }
}
class coinForShop extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "CoinForShop";
        this.image = Utility.loadNewImage("./assets/img/GameItems/coinForShop.png");
    }
}
class DesertImage extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Desert";
        this.image = Utility.loadNewImage("./assets/img/world/desert.png");
    }
}
class OceanImage extends Images {
    constructor(xPos, yPos) {
        super(xPos, yPos);
        this.name = "Ocean";
        this.image = Utility.loadNewImage("./assets/img/world/ocean.png");
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
        this.speed = -12;
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
    getName() {
        return this.name;
    }
    getCoinValue() {
        return this.earnedCoins;
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
class inGameCoin extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("assets/img/GameItems/coin.png");
        this.points = 10;
        this.lives = 0;
        this.earnedCoins = 1;
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
    static randomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
class IngameCoin extends ScoringItem {
    constructor(canvas) {
        super(canvas);
    }
}
class Question extends ScoringItem {
}
class Player extends GameItem {
    constructor(canvas) {
        super(canvas);
        this.keyboardListener = new KeyboardListener();
        this.animationFrame = 0;
    }
    move() {
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_1) &&
            this.yPos === this.middleLane) {
            this.yPos = this.topLane;
        }
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_2) &&
            this.yPos === this.topLane) {
            this.yPos = this.middleLane;
        }
        else if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_2) &&
            this.yPos === this.lowerLane) {
            this.yPos = this.middleLane;
        }
        if (this.keyboardListener.isKeyDown(KeyboardListener.KEY_3) &&
            this.yPos === this.middleLane) {
            this.yPos = this.lowerLane;
        }
    }
    characterAnimation() { }
    draw() {
        console.log(this.image);
        this.characterAnimation();
    }
    collidesWithScoringItem(ScoringItem) {
        if (this.xPos + this.image.width > ScoringItem.getPositionX() &&
            this.yPos <
                ScoringItem.getPositionY() + ScoringItem.getImageHeight() / 2 &&
            this.yPos + this.image.height >
                ScoringItem.getPositionY() + ScoringItem.getImageHeight() / 2 &&
            this.xPos < ScoringItem.getImageWidth() + ScoringItem.getPositionX()) {
            return true;
        }
        return false;
    }
}
class AmongUs extends Player {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("./assets/img/Characters/AmongUs/among-us-walk-2.png");
        this.walk1 = Utility.loadNewImage("./assets/img/Characters/AmongUs/among-us-walk-1.png");
        this.walk2 = Utility.loadNewImage("./assets/img/Characters/AmongUs/among-us-walk-2.png");
        this.walk3 = Utility.loadNewImage("./assets/img/Characters/AmongUs/among-us-walk-3.png");
    }
    characterAnimation() {
        const ctx = this.canvas.getContext("2d");
        this.animationFrame++;
        if (this.animationFrame >= 20) {
            this.animationFrame -= 19;
        }
        if (this.animationFrame <= 10) {
            this.image = this.walk1;
        }
        else if (this.animationFrame > 10 && this.animationFrame <= 20) {
            this.image = this.walk2;
        }
        else if (this.animationFrame > 20 && this.animationFrame <= 30) {
            this.image = this.walk3;
        }
        else if (this.animationFrame > 30 && this.animationFrame <= 40) {
            this.image = this.walk2;
        }
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
class Girl extends Player {
    constructor(canvas) {
        super(canvas);
        this.walk1 = Utility.loadNewImage("./assets/img/Characters/GirlCharacter/girl-walk-1.png");
        this.walk2 = Utility.loadNewImage("./assets/img/Characters/GirlCharacter/girl-walk-2.png");
        this.walk3 = Utility.loadNewImage("./assets/img/Characters/GirlCharacter/girl-walk-3.png");
    }
    characterAnimation() {
        const ctx = this.canvas.getContext("2d");
        this.animationFrame++;
        if (this.animationFrame >= 20) {
            this.animationFrame -= 19;
        }
        if (this.animationFrame <= 10) {
            this.image = this.walk1;
        }
        else if (this.animationFrame > 10 && this.animationFrame <= 20) {
            this.image = this.walk2;
        }
        else if (this.animationFrame > 20 && this.animationFrame <= 30) {
            this.image = this.walk3;
        }
        else if (this.animationFrame > 30 && this.animationFrame <= 40) {
            this.image = this.walk2;
        }
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
class Sonic extends Player {
    constructor(canvas) {
        super(canvas);
        this.walk1 = Utility.loadNewImage("./assets/img/Characters/Sonic/sonic-animatie1.png");
        this.walk2 = Utility.loadNewImage("./assets/img/Characters/Sonic/sonic-animatie2.png");
        this.walk3 = Utility.loadNewImage("./assets/img/Characters/Sonic/sonic-animatie3.png");
    }
    characterAnimation() {
        const ctx = this.canvas.getContext("2d");
        this.animationFrame++;
        if (this.animationFrame >= 20) {
            this.animationFrame -= 19;
        }
        if (this.animationFrame <= 10) {
            this.image = this.walk1;
        }
        else if (this.animationFrame > 10 && this.animationFrame <= 20) {
            this.image = this.walk2;
        }
        else if (this.animationFrame > 20 && this.animationFrame <= 30) {
            this.image = this.walk3;
        }
        else if (this.animationFrame > 30 && this.animationFrame <= 40) {
            this.image = this.walk2;
        }
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
class YellowAmongUs extends Player {
    constructor(canvas) {
        super(canvas);
        this.walk1 = Utility.loadNewImage("./assets/img/Characters/AmongUsYellow/amongUs-animatie1.png");
        this.walk2 = Utility.loadNewImage("./assets/img/Characters/AmongUsYellow/amongUs-animatie2.png");
        this.walk3 = Utility.loadNewImage("./assets/img/Characters/AmongUsYellow/amongUs-animatie3.png");
    }
    characterAnimation() {
        const ctx = this.canvas.getContext("2d");
        this.animationFrame++;
        if (this.animationFrame >= 20) {
            this.animationFrame -= 19;
        }
        if (this.animationFrame <= 10) {
            this.image = this.walk1;
        }
        else if (this.animationFrame > 10 && this.animationFrame <= 20) {
            this.image = this.walk2;
        }
        else if (this.animationFrame > 20 && this.animationFrame <= 30) {
            this.image = this.walk3;
        }
        else if (this.animationFrame > 30 && this.animationFrame <= 40) {
            this.image = this.walk2;
        }
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
class Yoshi extends Player {
    constructor(canvas) {
        super(canvas);
        this.walk1 = Utility.loadNewImage("./assets/img/Characters/Yoshi/yoshi.png");
    }
    characterAnimation() {
        const ctx = this.canvas.getContext("2d");
        this.animationFrame++;
        if (this.animationFrame >= 20) {
            this.animationFrame -= 19;
        }
        if (this.animationFrame <= 10) {
            this.image = this.walk1;
            this.xPos = this.xPos = this.canvas.width / 84 * 12;
        }
        else if (this.animationFrame > 10 && this.animationFrame <= 20) {
            this.image = this.walk1;
            this.xPos = this.xPos = this.canvas.width / 84 * 13;
        }
        else if (this.animationFrame > 20 && this.animationFrame <= 30) {
            this.image = this.walk1;
            this.xPos = this.xPos = this.canvas.width / 84 * 14;
        }
        else if (this.animationFrame > 30 && this.animationFrame <= 40) {
            this.image = this.walk1;
            this.xPos = this.xPos = this.canvas.width / 84 * 13;
        }
        ctx.drawImage(this.image, this.xPos, this.yPos);
    }
}
class Fish extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("assets/img/GameItems/ocean/oceanFish.png");
        this.points = 5;
        this.lives = 0;
        this.name = "Fish";
        this.earnedCoins = 0;
    }
}
class Pearl extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("assets/img/GameItems/ocean/oceanParelBooster.png");
        this.points = 20;
        this.lives = 0;
        this.name = "Pearl";
        this.earnedCoins = 0;
    }
}
class QuestionBox extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("assets/img/GameItems/ocean/questionBox.png");
        this.points = 0;
        this.lives = +1;
        this.name = "QuestionBox";
    }
}
class Rock extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("assets/img/GameItems/ocean/oceanRock1.png");
        this.points = -20;
        this.lives = -1;
        this.name = "Rock";
        this.earnedCoins = 0;
    }
}
class Shark extends ScoringItem {
    constructor(canvas) {
        super(canvas);
        this.image = Utility.loadNewImage("assets/img/GameItems/ocean/oceanShark.png");
        this.points = -20;
        this.lives = -1;
        this.name = "Shark";
        this.earnedCoins = 0;
    }
}
class Game {
    constructor(canvasId) {
        this.loop = () => {
            if (this.gameState === "Running") {
                this.frame++;
                this.draw();
                this.forScoringItems();
                this.frameIndex();
                if (this.frame % 10 === 0) {
                    this.player.move();
                }
            }
            if (this.lives < 0) {
                this.gameState = "GameOver";
                this.gameOver();
            }
            requestAnimationFrame(this.loop);
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.player = new Player(this.canvas);
        this.score = 0;
        this.lives = 3;
        this.earnedCoins = 0;
        this.frame = 0;
        this.speed;
        this.loop();
        this.scoringItems = [];
        this.gameState = "Running";
    }
    scoringItemsOceanWorld() { }
    frameIndex() { }
    forScoringItems() {
        if (this.frame > 1) {
            this.scoringItems.forEach((scoringItem) => {
                scoringItem.move();
            });
            for (let i = 0; i < this.scoringItems.length; i++) {
                if (this.player.collidesWithScoringItem(this.scoringItems[i]) &&
                    this.scoringItems[i].getName() === "QuestionBox") {
                    new InGameQuestions(document.getElementById("canvas"));
                }
                if (this.player.collidesWithScoringItem(this.scoringItems[i])) {
                    this.score += this.scoringItems[i].getPoints();
                    this.lives += this.scoringItems[i].getLives();
                    console.log(this.scoringItems[i].getName());
                    this.earnedCoins += this.scoringItems[i].getCoinValue();
                    this.scoringItems.splice(i, 1);
                }
                else if (this.scoringItems[i].outOfCanvas()) {
                    this.scoringItems.splice(i, 1);
                }
            }
        }
    }
    drawBackground() { }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground();
        this.player.draw();
        if (this.frame > 1) {
            this.scoringItems.forEach((scoringItem) => scoringItem.draw(ctx));
        }
        this.drawScore(ctx);
        this.drawLives(ctx);
    }
    drawScore(ctx) {
        Utility.writeTextToCanvas(ctx, `Score: ${this.score}`, 60, this.canvas.width / 2, this.canvas.height / 8, null, "red");
        ctx.drawImage(Utility.loadNewImage("assets/img/GameItems/coin.png"), this.canvas.width / 20, this.canvas.height / 8);
        Utility.writeTextToCanvas(ctx, `${this.earnedCoins}`, 60, this.canvas.width / 8, this.canvas.height / 5, null, "red");
    }
    drawLives(ctx) {
        if (this.lives == 3) {
            ctx.drawImage(Utility.loadNewImage("/assets/img/GameItems/HealthBar/FullHP.png"), (this.canvas.width / 8) * 7, this.canvas.height / 8);
        }
        if (this.lives == 2) {
            ctx.drawImage(Utility.loadNewImage("/assets/img/GameItems/HealthBar/2Lives.png"), (this.canvas.width / 8) * 7, this.canvas.height / 8);
        }
        if (this.lives == 1) {
            ctx.drawImage(Utility.loadNewImage("/assets/img/GameItems/HealthBar/1Live.png"), (this.canvas.width / 8) * 7, this.canvas.height / 8);
        }
        if (this.lives == 0) {
            ctx.drawImage(Utility.loadNewImage("/assets/img/GameItems/HealthBar/0Lives.png"), (this.canvas.width / 8) * 7, this.canvas.height / 8);
        }
        if (this.lives < 0) {
            ctx.drawImage(Utility.loadNewImage("/assets/img/GameItems/HealthBar/Dead.png"), (this.canvas.width / 8) * 7, this.canvas.height / 8);
        }
    }
    gameOver() {
        new Endscreen(this.canvas, this.score);
    }
}
class ArticWorld extends Game {
    constructor(canvas) {
        super(canvas);
        this.background = Utility.loadNewImage("./assets/img/world/ArticBG.jpg");
        this.xPos = 0;
        this.yPos = -100;
    }
    drawBackground() {
        const ctx = this.canvas.getContext("2d");
        ctx.drawImage(this.background, this.xPos, this.yPos);
    }
}
class DesertWorld extends Game {
    constructor(canvas) {
        super(canvas);
        this.background = Utility.loadNewImage("./assets/img/world/DesertBG.jpg");
        this.xPos = 0;
        this.yPos = -100;
    }
    drawBackground() {
        const ctx = this.canvas.getContext("2d");
        ctx.drawImage(this.background, this.xPos, this.yPos);
    }
}
class OceanWorld extends Game {
    constructor(canvas) {
        super(canvas);
        this.background = Utility.loadNewImage("./assets/img/world/OceanBG.jpg");
        this.xPos = 0;
        this.yPos = -100;
    }
    drawBackground() {
        const ctx = this.canvas.getContext("2d");
        ctx.drawImage(this.background, this.xPos, this.yPos);
    }
    frameIndex() {
        if (this.frame % 100 === 0) {
            this.scoringItemsOceanWorld();
        }
        if (this.frame % 10 === 0) {
            this.score += 1;
        }
    }
    scoringItemsOceanWorld() {
        const random = GameItem.randomInteger(3, 6);
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
        if (random === 5) {
            this.scoringItems.push(new inGameCoin(this.canvas));
        }
        if (random === 6) {
            this.scoringItems.push(new QuestionBox(this.canvas));
        }
    }
}
class SwampWorld extends Game {
    constructor(canvas) {
        super(canvas);
        this.background = Utility.loadNewImage("./assets/img/world/SwampBG.jpg");
        this.xPos = 0;
        this.yPos = -100;
    }
    drawBackground() {
        const ctx = this.canvas.getContext("2d");
        ctx.drawImage(this.background, this.xPos, this.yPos);
    }
}
class Endscreen {
    constructor(canvasId, score) {
        this.mouseHandler = (event) => { };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = innerHeight;
        this.score = score;
        this.buttons = [];
        this.buttonMaker();
        this.image = [];
        this.score = 200;
        document.addEventListener("click", this.mouseHandler);
        this.draw();
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(Utility.loadNewImage("./assets/img/background/EndscreenBackground.jpg"), 0, 0);
        this.buttons.forEach((button) => {
            button.draw(ctx);
        });
        Utility.writeTextToCanvas(ctx, "Game Over!", 120, this.canvas.width / 2.1, this.canvas.height / 2.25, "center", "white");
        Utility.writeTextToCanvas(ctx, `Your score is ${this.score}`, 60, this.canvas.width / 2.1, this.canvas.height / 1.8, "center", "white");
    }
    buttonMaker() {
        this.buttons.push(new RestartButton(this.canvas.width / 2.5, this.canvas.height / 1.5, this.canvas));
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
        this.buttons.push(new BackToStart((this.canvas.width / 5) * 0.05, (this.canvas.height / 5) * 0.09, this.canvas));
    }
    imageMaker() {
        this.images.push(new Control((this.canvas.width / 15) * 0.1, 110));
        this.images.push(new Questions(this.canvas.width / 3, 0));
        this.images.push(new UpperLane((this.canvas.width / 3) * 0.6, 200));
        this.images.push(new MidLane((this.canvas.width / 3) * 0.6, 350));
        this.images.push(new DownLane((this.canvas.width / 3) * 0.6, 500));
        this.images.push(new ShieldBooster((this.canvas.width / 3) * 1, 435));
        this.images.push(new RocketBooster((this.canvas.width / 3) * 1, 135));
        this.images.push(new TextCoin((this.canvas.width / 2) * 1.34, 435));
        this.images.push(new TextObstacle((this.canvas.width / 2) * 1.34, 150));
    }
    controls(ctx) {
        Utility.writeTextToCanvas(ctx, "Bovenste laan:", 40, (this.canvas.width / 9) * 0.92, 265, "center");
        Utility.writeTextToCanvas(ctx, "Middelste laan:", 40, (this.canvas.width / 9) * 0.93, 420, "center");
        Utility.writeTextToCanvas(ctx, "Onderste laan:", 40, (this.canvas.width / 9) * 0.93, 560, "center");
    }
    titleTextBoxes(ctx) {
        Utility.writeTextToCanvas(ctx, "Rocket booster", 35, (this.canvas.width / 3) * 1.4, 140, "center");
        Utility.writeTextToCanvas(ctx, "Shield booster", 35, (this.canvas.width / 3) * 1.4, 435, "center");
        Utility.writeTextToCanvas(ctx, "Obstakels", 35, (this.canvas.width / 2) * 1.6, 140, "center");
        Utility.writeTextToCanvas(ctx, "Coins", 35, (this.canvas.width / 2) * 1.6, 435, "center");
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
    buttonMaker() {
        this.buttons.push(new BackToStart((this.canvas.width / 7) * 0.09, (this.canvas.height / 3) * 0.08, this.canvas));
    }
}
class InGameQuestions {
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
        this.images.forEach((image) => {
            image.draw(ctx);
        });
        this.buttons.forEach((button) => {
            button.draw(ctx);
        });
    }
    imageMaker() {
        this.images.push(new InGameQuestionImage(this.canvas.width / 3, 150));
    }
    buttonMaker() {
        this.buttons.push(new YesButton((this.canvas.width / 3) * 1.05, (this.canvas.height / 2) * 1.5, this.canvas), new NoButton((this.canvas.width / 2) * 1.05, (this.canvas.height / 2) * 1.5, this.canvas));
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
        Utility.writeTextToCanvas(ctx, "Questions and Answers", 65, this.canvas.width / 2, 80, "center");
        this.list(ctx);
        this.buttons.forEach((button) => {
            button.draw(ctx);
            button.move(this.canvas);
            button.reloadImage(this.canvas);
        });
    }
    list(ctx) {
        Utility.writeTextToCanvas(ctx, "Question 1: Wanneer een onbekend persoon contact met je opneemt, geef je dit dan door aan ouders/verzorgers?", 30, (this.canvas.width / 2) * 0.9, 200, "center");
        Utility.writeTextToCanvas(ctx, "Question 2: Wanneer een onbekend iemand vraagt om een foto van je, stuur je die dan?", 30, (this.canvas.width / 2) * 0.7, 260, "center");
        Utility.writeTextToCanvas(ctx, "Question 3: Voeg je vaak onbekenden toe op sociale media? (Door middel van “snel toevoegen”)", 30, (this.canvas.width / 2) * 0.78, 320, "center");
        Utility.writeTextToCanvas(ctx, "Question 4: Je ziet dat een klasgenoot met een vreemd iemand aan het chatten is. Geef je dit aan?", 30, (this.canvas.width / 2) * 0.78, 380, "center");
        Utility.writeTextToCanvas(ctx, "Question 5: Je krijgt het bericht: “FortNite_100” stuurt je een vriendschap verzoek. Accepteer je dit verzoek?", 30, (this.canvas.width / 2) * 0.88, 440, "center");
        Utility.writeTextToCanvas(ctx, "Question 6: Hoor je in je klas/omgeving vaak over het toevoegen van vreemden op sociale media?", 30, (this.canvas.width / 2) * 0.79, 500, "center");
        Utility.writeTextToCanvas(ctx, "Question 7: Waarschuwen je ouders je over online veiligheid?", 30, (this.canvas.width / 2) * 0.51, 560, "center");
    }
    static writeTextToCanvas(ctx, text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "black") {
        ctx.font = `${fontSize}px Minecraft`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    buttonMaker() {
        this.buttons.push(new BackToStart((this.canvas.width / 7) * 0.09, (this.canvas.height / 3) * 0.08, this.canvas));
    }
}
class Shop {
    constructor(canvas) {
        this.mouseHandler = (event) => {
            this.buttons.forEach((button) => {
                if (event.clientX >= button.getButtonXPos() &&
                    event.clientX < button.getButtonXPos() + button.getButtonImageWidth() &&
                    event.clientY >= button.getButtonYPos() &&
                    event.clientY <= button.getButtonYPos() + button.getButtonImageHeight()) {
                    if (button.getButtonName() === "UnlockYoshi") {
                        this.characters.push(new YoshiUnlocked(this.canvas.width / 7.9, this.canvas.height / 6));
                    }
                    if (button.getButtonName() === "UnlockAmongUs") {
                        this.characters.push(new YellowAmongUsUnlocked(this.canvas.width / 2.9, this.canvas.height / 6));
                    }
                    if (button.getButtonName() === "UnlockGirlCharacter") {
                        this.characters.push(new GirlCharacterUnlocked(this.canvas.width / 1.75, this.canvas.height / 6));
                    }
                    if (button.getButtonName() === "UnlockSonic") {
                        this.characters.push(new SonicUnlocked(this.canvas.width / 1.29, this.canvas.height / 6));
                    }
                    if (button.getButtonName() === "UnlockSwamp") {
                        this.characters.push(new SwampPlanetUnlocked(this.canvas.width / 2.33, this.canvas.height / 1.64));
                    }
                    if (button.getButtonName() === "UnlockDesert") {
                        this.characters.push(new DesertPlanetUnlocked(this.canvas.width / 4.3, this.canvas.height / 1.6));
                    }
                    if (button.getButtonName() === "UnlockArctic") {
                        this.characters.push(new ArcticPlanetUnlocked(this.canvas.width / 1.56, this.canvas.height / 1.646));
                    }
                }
            });
        };
        this.canvas = canvas;
        this.buttons = [];
        this.shopImages = [];
        this.buttonMaker();
        this.characters = [];
        this.newWorlds = [];
        document.addEventListener("click", this.mouseHandler);
    }
    getButtonXPos() {
        return this.xPos;
    }
    getButtonYPos() {
        return this.yPos;
    }
    getButtonImageWidth() {
        return this.image.width;
    }
    getButtonImageHeight() {
        return this.image.height;
    }
    getButtonName() {
        return this.name;
    }
    draw() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(Utility.loadNewImage("./assets/img/background/EndscreenBackground.jpg"), 0, 0);
        this.drawUnlockableCharacter();
        this.drawUnlockableWorlds();
        this.drawImages();
        this.buttons.forEach((button) => {
            button.draw(ctx);
        });
        Utility.writeTextToCanvas(ctx, "200", 60, this.canvas.width / 2, this.canvas.height / 10, "center", "white");
        Utility.writeTextToCanvas(ctx, "50", 60, this.canvas.width / 5.8, this.canvas.height / 2.25, "center", "white");
        Utility.writeTextToCanvas(ctx, "50", 60, this.canvas.width / 2.55, this.canvas.height / 2.25, "center", "white");
        Utility.writeTextToCanvas(ctx, "50", 60, this.canvas.width / 1.68, this.canvas.height / 2.25, "center", "white");
        Utility.writeTextToCanvas(ctx, "50", 60, this.canvas.width / 1.24, this.canvas.height / 2.25, "center", "white");
        Utility.writeTextToCanvas(ctx, "100", 60, this.canvas.width / 1.42, this.canvas.height / 1.10, "center", "white");
        Utility.writeTextToCanvas(ctx, "100", 60, this.canvas.width / 2.01, this.canvas.height / 1.10, "center", "white");
        Utility.writeTextToCanvas(ctx, "100", 60, this.canvas.width / 3.4, this.canvas.height / 1.10, "center", "white");
        this.shopImages.forEach((shopImage) => {
            shopImage.move(this.canvas);
            shopImage.reloadImage(this.canvas);
            shopImage.draw(ctx);
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
    drawUnlockables(button, ctx) {
        if (button.getButtonName() === "UnlockYoshi") {
            ctx.drawImage(Utility.loadNewImage("./assets/img/players/YoshiUnlocked.png"), this.canvas.width / 7.9, this.canvas.width / 6);
        }
    }
    drawImages() {
        this.shopImages.push(new coinForShop(this.canvas.width / 2.3, this.canvas.height / 1.17));
        this.shopImages.push(new coinForShop(this.canvas.width / 4.4, this.canvas.height / 1.17));
        this.shopImages.push(new coinForShop(this.canvas.width / 1.56, this.canvas.height / 1.17));
        this.shopImages.push(new coinForShop(this.canvas.width / 3, this.canvas.height / 2.56));
        this.shopImages.push(new coinForShop(this.canvas.width / 1.33, this.canvas.height / 2.56));
        this.shopImages.push(new coinForShop(this.canvas.width / 9, this.canvas.height / 2.56));
        this.shopImages.push(new coinForShop(this.canvas.width / 1.85, this.canvas.height / 2.56));
        this.shopImages.push(new coinForShop(this.canvas.width / 2.35, this.canvas.height / 22));
    }
    drawUnlockableWorlds() {
        this.newWorlds.push(new DesertPlanet(this.canvas.width / 4.3, this.canvas.height / 1.6));
        this.newWorlds.push(new SwampPlanet(this.canvas.width / 2.33, this.canvas.height / 1.64));
        this.newWorlds.push(new ArcticPlanet(this.canvas.width / 1.56, this.canvas.height / 1.64));
    }
    drawUnlockableCharacter() {
        this.characters.push(new YoshiUnlockable(this.canvas.width / 7.9, this.canvas.height / 6));
        this.characters.push(new YellowAmongUsUnlockable(this.canvas.width / 2.9, this.canvas.height / 6));
        this.characters.push(new GirlCharacter(this.canvas.width / 1.75, this.canvas.height / 6));
        this.characters.push(new SonicUnlockable(this.canvas.width / 1.29, this.canvas.height / 6));
    }
    buttonMaker() {
        this.buttons.push(new BackToStart((this.canvas.width / 5) * 0.05, (this.canvas.height / 5) * 0.09, this.canvas));
        this.buttons.push(new UnlockDesert(this.canvas.width / 4.5, this.canvas.height / 1.08, this.canvas));
        this.buttons.push(new UnlockArctic(this.canvas.width / 1.56, this.canvas.height / 1.08, this.canvas));
        this.buttons.push(new UnlockSwamp(this.canvas.width / 2.31, this.canvas.height / 1.08, this.canvas));
        this.buttons.push(new UnlockYoshi(this.canvas.width / 9, this.canvas.height / 2.15, this.canvas));
        this.buttons.push(new UnlockAmongUs(this.canvas.width / 3.1, this.canvas.height / 2.15, this.canvas));
        this.buttons.push(new UnlockGirlCharacter(this.canvas.width / 1.87, this.canvas.height / 2.15, this.canvas));
        this.buttons.push(new UnlockSonic(this.canvas.width / 1.34, this.canvas.height / 2.15, this.canvas));
    }
}
class Start {
    constructor(canvas) {
        this.mouseHandler = (event) => {
            this.buttons.forEach((button) => {
                if (event.clientX >= button.getButtonXPos() &&
                    event.clientX < button.getButtonXPos() + button.getButtonImageWidth() &&
                    event.clientY >= button.getButtonYPos() &&
                    event.clientY <= button.getButtonYPos() + button.getButtonImageHeight()) {
                    this.worldSelector(button);
                    this.characterSelector(button);
                    this.startLevel(button);
                    this.checkCharacterName(button);
                }
            });
        };
        this.canvas = canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.buttons = [];
        this.worldImages = [];
        this.characterImages = [];
        this.startImages = [];
        this.background = [];
        this.indexCounterWorld = 0;
        this.indexCounterCharacter = 0;
        this.buttonMaker();
        this.worldImageMaker();
        this.charachterMaker();
        this.imageMaker();
        this.backgroundLoop();
        this.draw();
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
        this.startImages.forEach((startImage) => {
            startImage.draw(ctx);
        });
        this.buttons.forEach((button) => {
            button.draw(ctx);
        });
        for (let i = 0; i < this.shopImages.length; i++) {
            this.shopImages[this.indexCounterCharacter].draw(ctx);
        }
        for (let i = 0; i < this.worldImages.length; i++) {
            this.worldImages[this.indexCounterWorld].draw(ctx);
        }
    }
    buttonMaker() {
        this.buttons.push(new StartGameButton(this.canvas.width / 2 - 329 / 2, (this.canvas.height / 5) * 4 - 100 / 2, this.canvas));
        this.buttons.push(new ShopButton(this.canvas.width / 5 - 329 / 2, (this.canvas.height / 6) * 4, this.canvas));
        this.buttons.push(new HighscoreButton((this.canvas.width / 5) * 4 - 329 / 2, (this.canvas.height / 6) * 4, this.canvas));
        this.buttons.push(new PreviousCharacter(this.canvas.width / 4, this.canvas.height / 2 - 89, this.canvas));
        this.buttons.push(new NextCharacter((this.canvas.width / 4) * 3 - 143, this.canvas.height / 2 - 89, 1, this.canvas));
        this.buttons.push(new PreviousWorld((this.canvas.width / 7) * 2, this.canvas.height / 3 - 89, this.canvas));
        this.buttons.push(new NextWorld((this.canvas.width / 7) * 5 - 143, this.canvas.height / 3 - 89, 1, this.canvas));
        this.buttons.push(new QuestionsAnswersButton(this.canvas.width - 180, 50, this.canvas));
    }
    worldImageMaker() {
        this.worldImages.push(new OceanImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 130));
        this.worldImages.push(new DesertImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 80));
        this.worldImages.push(new SwampImage(this.canvas.width / 2 - 202, this.canvas.height / 3 - 90));
        this.worldImages.push(new ArticImage(this.canvas.width / 2 - 250, this.canvas.height / 3 - 150));
    }
    charachterMaker() {
        this.shopImages.push(new AmongUsChar(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120));
        this.shopImages.push(new YoshiUnlocked(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120));
        this.shopImages.push(new YellowAmongUsUnlocked(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120));
        this.shopImages.push(new GirlCharacterUnlocked(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120));
        this.shopImages.push(new SonicUnlocked(this.canvas.width / 2 - 90, this.canvas.height / 2 - 120));
    }
    imageMaker() {
        this.startImages.push(new Titel(this.canvas.width / 4, -40));
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
        if (this.indexCounterCharacter == this.shopImages.length - 1 &&
            button.getButtonName() == "NextCharacter") {
            this.indexCounterCharacter = 0;
        }
        else if (this.indexCounterCharacter == 0 &&
            button.getButtonName() == "PreviousCharacter") {
            this.indexCounterCharacter += this.shopImages.length - 1;
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
            new OceanWorld(this.canvas);
        }
        else if (button.getButtonName() == "StartGame" &&
            this.worldImages[this.indexCounterWorld].getImageName() == "Artic") {
            new ArticWorld(this.canvas);
        }
        else if (button.getButtonName() == "StartGame" &&
            this.worldImages[this.indexCounterWorld].getImageName() == "Desert") {
            new DesertWorld(this.canvas);
        }
        else if (button.getButtonName() == "StartGame" &&
            this.worldImages[this.indexCounterWorld].getImageName() == "Swamp") {
            new SwampWorld(this.canvas);
        }
    }
    checkCharacterName(button) {
        if (button.getButtonName() == "StartGame" &&
            this.characterImages[this.indexCounterCharacter].getImageName() ===
                "AmongUsLime") {
            new AmongUs(this.canvas);
            console.log("AmongUsLime");
        }
        else if (button.getButtonName() == "StartGame" &&
            this.characterImages[this.indexCounterCharacter].getImageName() ===
                "YoshiUnlocked") {
            new Yoshi(this.canvas);
        }
        else if (button.getButtonName() == "StartGame" &&
            this.characterImages[this.indexCounterCharacter].getImageName() ===
                "UnlockYellowAmongUs") {
            new YellowAmongUs(this.canvas);
        }
        else if (button.getButtonName() == "StartGame" &&
            this.characterImages[this.indexCounterCharacter].getImageName() ===
                "GirlCharacterUnlocked") {
            new Girl(this.canvas);
        }
        else if (button.getButtonName() == "StartGame" &&
            this.characterImages[this.indexCounterCharacter].getImageName() ==
                "SonicUnlocked") {
            new Sonic(this.canvas);
        }
    }
}
//# sourceMappingURL=app.js.map