/// <reference path="Images.ts" />

class Question9 extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.answer = "yes";
      this.image = Utility.loadNewImage("./assets/img/QuestionsImages/question9.png");
    }
  }