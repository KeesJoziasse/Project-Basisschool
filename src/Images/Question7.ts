/// <reference path="Images.ts" />

class Question7 extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.answer = "yes";
      this.image = Utility.loadNewImage("/assets/img/QuestionsImages/question7.png");
    }
  }