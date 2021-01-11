/// <reference path = "../ScoringItem.ts"/>

class QuestionBox extends ScoringItem{
  private xpos: number;
  private ypos: number;
  private imageHeight: number; 
  public constructor(canvas: HTMLCanvasElement) {
  super(canvas);
  this.image = this.loadNewImage("assets/img/GameItems/ocean/questionBox.png");
  this.points = 0;
  this.lives = +1;
  this.xpos = 0;
  this.ypos = 0;
  this.imageHeight = 0;
  }

  public getXPosQuestionBox(): number{
    return this.xpos
  }

  public getYPosQuestionBox(): number{
    return this.ypos
  }

  public getImageHeightQuestionBox(): number{
    return this.imageHeight
  }
}