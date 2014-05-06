var PlayState = new Kiwi.State('PlayState');

/**
* The PlayState in the core state that is used in the game. 
*
* It is the state where majority of the functionality occurs 'in-game' occurs.
* 
*
* @class playState
* @extends State
* @constructor
*/


/**
* This create method is executed when Kiwi Game reaches the boot stage of the game loop.
* @method create
* @public
*/
PlayState.create = function () {
    //Create Finger Objects
    //Add To stage
    this.control = Kiwi.Plugins.LEAPController.createController();



    this.boxGroup = new Kiwi.Group(this);
    this.addChild(this.boxGroup);



    this.hand = new Kiwi.GameObjects.Sprite(this, this.textures.hand, 50, 50, true);

    this.finger1 = new Kiwi.GameObjects.Sprite(this, this.textures.finger, 50, 50, true);
    this.finger2 = new Kiwi.GameObjects.Sprite(this, this.textures.finger, 50, 50, true);
    this.finger3 = new Kiwi.GameObjects.Sprite(this, this.textures.finger, 50, 50, true);
    this.finger4 = new Kiwi.GameObjects.Sprite(this, this.textures.finger, 50, 50, true);
    this.finger5 = new Kiwi.GameObjects.Sprite(this, this.textures.finger, 50, 50, true);




    this.fingersActiveCounter = new Kiwi.HUD.Widget.TextField(this.game, "Active Fingers: 0" , 10, 10);
    this.fingersActiveCounter.style.color = "#ffffff";
    this.game.huds.defaultHUD.addWidget(this.fingersActiveCounter);

    this.handActiveCounter = new Kiwi.HUD.Widget.TextField(this.game, "Active Hands: 0" , 10, 35);
    this.handActiveCounter.style.color = "#ffffff";
    this.game.huds.defaultHUD.addWidget(this.handActiveCounter);


    this.handPositionX = new Kiwi.HUD.Widget.TextField(this.game, "Hands X Position: 0" , 10, 60);
    this.handPositionX.style.color = "#ffffff";
    this.game.huds.defaultHUD.addWidget(this.handPositionX);

    this.handPositionY = new Kiwi.HUD.Widget.TextField(this.game, "Hands Y Position: 0" , 10, 85);
    this.handPositionY.style.color = "#ffffff";
    this.game.huds.defaultHUD.addWidget(this.handPositionY);


    this.handPositionZ = new Kiwi.HUD.Widget.TextField(this.game, "Hands Z Position: 0" , 10, 110);
    this.handPositionZ.style.color = "#ffffff";
    this.game.huds.defaultHUD.addWidget(this.handPositionZ);

    this.handRoll = new Kiwi.HUD.Widget.TextField(this.game, "Hands Roll: 0" , 10, 135);
    this.handRoll.style.color = "#ffffff";
    this.game.huds.defaultHUD.addWidget(this.handRoll);


    this.handPitch = new Kiwi.HUD.Widget.TextField(this.game, "Hands Pitch: 0" , 10, 160);
    this.handPitch.style.color = "#ffffff";
    this.game.huds.defaultHUD.addWidget(this.handPitch);

    this.handYaw = new Kiwi.HUD.Widget.TextField(this.game, "Hands Yaw: 0" , 10, 185);
    this.handYaw.style.color = "#ffffff";
    this.game.huds.defaultHUD.addWidget(this.handYaw);



    this.addChild(this.finger1);
    this.addChild(this.finger2);
    this.addChild(this.finger3);
    this.addChild(this.finger4);
    this.addChild(this.finger5);

    this.addChild(this.hand);


   

}


PlayState.update = function () {
    Kiwi.State.prototype.update.call(this);
    //Update Positions
    if(this.control.controllerConnected){
        this.updateText();
        this.updatePositions();
    }

     
}





PlayState.updateText = function(){
    var activeFingers = 0;
    var activeHands = 0;

    for(var i = 0; i < this.control.hands[0].pointables.length -1; i++){
        if(this.control.hands[0].pointables[i].active)
            activeFingers++;

    }
    for(var j = 0; j < this.control.hands.length -1; j++){
        if(this.control.hands[j].active)
            activeHands++;

    }


    this.fingersActiveCounter.text = "Active Fingers: " + activeFingers;
    this.handActiveCounter.text = "Active Hands: " + activeHands;
    this.handPositionX.text = "Hands X Position: " + + Math.ceil(this.control.hands[0].posX* 10)/10;;
    this.handPositionY.text = "Hands Y Position: " + + Math.ceil(this.control.hands[0].posY* 10)/10;;
    this.handPositionZ.text = "Hands Z Position: " + + Math.ceil(this.control.hands[0].posZ* 10)/10;;
    this.handRoll.text = "Hands Roll: " + Math.ceil(this.control.hands[0].roll * 1000)/1000;
    this.handPitch.text = "Hands Pitch: " + Math.ceil(this.control.hands[0].pitch * 1000)/1000;
    this.handYaw.text = "Hands Yaw: " + Math.ceil(this.control.hands[0].yaw * 1000)/1000;

    //(Math.round(this.control.hands[0].yaw + "e+4")  + "e-4");

    //Math.ceil(this.control.hands[0].pitch * 100)/100;




}
PlayState.updatePositions = function(){

    this.hand.x = this.control.hands[0].posX + (game.stage.width * 0.5);
    this.hand.y = -this.control.hands[0].posY + (game.stage.height);

    this.finger1.x = this.control.hands[0].pointables[0].tipX + (game.stage.width * 0.5);
    this.finger1.y = -this.control.hands[0].pointables[0].tipY +(game.stage.height);

    this.finger2.x = this.control.hands[0].pointables[1].tipX + (game.stage.width * 0.5);
    this.finger2.y = -this.control.hands[0].pointables[1].tipY+ (game.stage.height);

    this.finger3.x = this.control.hands[0].pointables[2].tipX + (game.stage.width * 0.5);
    this.finger3.y = -this.control.hands[0].pointables[2].tipY +(game.stage.height);

    this.finger4.x = this.control.hands[0].pointables[3].tipX + (game.stage.width * 0.5);
    this.finger4.y = -this.control.hands[0].pointables[3].tipY+ (game.stage.height);

    this.finger5.x = this.control.hands[0].pointables[4].tipX + (game.stage.width * 0.5);
    this.finger5.y = -this.control.hands[0].pointables[4].tipY+ (game.stage.height);



}