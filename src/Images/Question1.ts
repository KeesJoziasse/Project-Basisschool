/// <reference path="Images.ts" />

class Question1 extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.answer = "yes";
    this.image = Utility.loadNewImage("/assets/img/QuestionsImages/question1.png");
  }
}