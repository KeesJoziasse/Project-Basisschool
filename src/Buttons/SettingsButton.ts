/// <reference path="Button.ts" />

class SettingsButton extends Button {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "Settings";
    this.image = Start.loadNewImage("./assets/img/buttons/settings-button.png");
  }

  // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
}
