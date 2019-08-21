import { GAME_CONST } from '../game_const';
export class MenuScene extends Phaser.Scene {
  constructor() {
    super(GAME_CONST.SCENES.MENU);
    this.buttonSelected = 1;
  }
  preload() {}
  create() {
    this.add.image(192, 69, 'menuScene', 'cavelight');
    this.add.image(192, 100, 'menuScene', 'subtitle');
    this.playButton = this.add.sprite(192, 130, 'menuScene', 'play_0');
    this.settingsButton = this.add.sprite(192, 155, 'menuScene', 'settings_0');
    this.playButton.anims.play(
      `${GAME_CONST.SCENES.MENU}_play`,
      true,
      this.buttonSelected
    );
    this.settingsButton.anims.play(
      `${GAME_CONST.SCENES.MENU}_settings`,
      true,
      this.buttonSelected
    );
    this.playButton.anims.pause(
      this.playButton.anims.currentAnim.frames[this.buttonSelected]
    );
    this.settingsButton.anims.pause(
      this.settingsButton.anims.currentAnim.frames[this.buttonSelected]
    );
    let bgColor = new Phaser.Display.Color(3, 79, 162);
    this.cameras.main.setBackgroundColor(bgColor);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.cursors.up.on('down', () => {
      this.buttonSelected = 1;
      this.playButton.anims.pause(
        this.playButton.anims.currentAnim.frames[this.buttonSelected]
      );
      this.settingsButton.anims.pause(
        this.settingsButton.anims.currentAnim.frames[this.buttonSelected]
      );
    });
    this.cursors.down.on('down', () => {
      this.buttonSelected = 0;
      this.playButton.anims.pause(
        this.playButton.anims.currentAnim.frames[this.buttonSelected]
      );
      this.settingsButton.anims.pause(
        this.settingsButton.anims.currentAnim.frames[this.buttonSelected]
      );
    });
    this.cursors.space.on('down', () => {
      if (this.buttonSelected == 1) {
        this.playButton.anims.play(
          `${GAME_CONST.SCENES.MENU}_play`,
          true,
          this.buttonSelected
        );
        this.time.delayedCall(1000, () =>
          this.scene.start(GAME_CONST.SCENES.GAME)
        );
      }
    });
  }
}
