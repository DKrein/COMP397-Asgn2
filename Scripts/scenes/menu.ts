/*
Author: Douglas Krein
Last Modified by: Douglas Krein
Last Modified: 28-02-2016
File description: 
- Controls MENU scene

Revision:
1 - label removed from the scene
2 - changed position of the start button 
3 - background image added to the scene
*/

// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _menuImage: createjs.Bitmap;
        private _startButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {    

            this._menuImage = new createjs.Bitmap("../../Assets/images/startMenu.png");
            this.addChild(this._menuImage);
            
            // add the START button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X-50,
                config.Screen.CENTER_Y + 80, true);
            this.addChild(this._startButton);
            
            // START Button event listener
            this._startButton.on("click", this._startButtonClick, this);
           
            // Setup Background
            this._setupBackground("WhiteBackground");
           
            // FadeIn
            this._fadeIn(500);
           
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            //FadeOut 
            this._fadeOut(500, () => {
                // Switch to the LEFT_CAVE Scene
                scene = config.Scene.SLOT_MACHINE;
                changeScene();
            });
        }

    }
}