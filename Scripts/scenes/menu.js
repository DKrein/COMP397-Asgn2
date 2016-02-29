var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            this._menuImage = new createjs.Bitmap("../../Assets/images/startMenu.png");
            this.addChild(this._menuImage);
            // add the START button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y + 80, true);
            this.addChild(this._startButton);
            // START Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // Setup Background
            this._setupBackground("WhiteBackground");
            // FadeIn
            this._fadeIn(500);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        Menu.prototype._startButtonClick = function (event) {
            //FadeOut 
            this._fadeOut(500, function () {
                // Switch to the LEFT_CAVE Scene
                scene = config.Scene.SLOT_MACHINE;
                changeScene();
            });
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map