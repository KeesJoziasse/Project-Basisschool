/// <reference path = "Question.ts"/>

class Question2 extends Question {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/GameItems/ocean/oceanShark.png");
      this.answer = "Yes"
      this.name = "Question2"
    }
  }