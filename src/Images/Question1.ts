/// <reference path="Images.ts" />

class Question1 extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "no";
    this.image = Start.loadNewImage("/assets/img/QuestionsImages/question1.png");
  }
}