/// <reference path="Images.ts" />

class InGameQuestionImage extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "Questions";
    this.image = InGameQuestions.loadNewImage(
      "./assets/img/InGameQuestions/inGameQuestionsImage.png"
    );
  }
}
