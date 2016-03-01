/*
Author: Douglas Krein
Last Modified by: Douglas Krein
Last Modified: 29-02-2016
File description: 
- Controls the Game Over scene

Revision:
1 - Label showing the game over text removed
*/

// GAME_OVER SCENE
module scenes {
    export class GameOver extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _gameOverImage: createjs.Bitmap;
        private _startOverButton:objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {    
            
            this._gameOverImage = new createjs.Bitmap("../../Assets/images/GameOver.jpg");
            this.addChild(this._gameOverImage);
            
            // add the START button to the MENU scene
            this._startOverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X-50,
                config.Screen.CENTER_Y + 80, true);
            this.addChild(this._startOverButton);
            
            // START Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
           
            
            // add this scene to the global stage container
            stage.addChild(this);
        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START Button click event handler
        private _startOverButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.MENU;
            changeScene();
        }
        
    }
}