//MovingBox
var Nyan = function(state, x, y,  angle){
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['nyanCat'], x, y);
    this.nyanX = 10;
    this.nyanY = 10;
    this.state = state;

    this.animation.add('walk', [0, 1, 2, 3, 4, 5], 0.1, true);    
    this.animation.play('walk');

    
    this.nyanAngle = angle;

    //this.rotation  = -this.angle;
    Nyan.prototype.update = function(){
        Kiwi.GameObjects.StaticImage.prototype.update.call(this);
        this.rotation  = -this.angle;

    }

    Nyan.prototype.findVelo = function(){
    this.xVelo  =Math.sin(angle)*120;
    this.yVelo  = Math.cos(angle)*120;
    this.physics.velocity.x = this.xVelo;
    this.physics.velocity.y = this.yVelo;
    }

    Nyan.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
    }
    Nyan.prototype.updatePos = function(xPos, yPos, angle){
        this.nyanX = xPos;
        this.nyanY = yPos;
        // this.x = xPos + 280;
        // this.y = -yPos +310;
        this.nyanAngle = angle - (Math.PI * 0.5);

    }

    Nyan.prototype.spawnBoxes = function(one, two, three, four, five){

     if(one){    
        this.state.boxGroup.addChild(new MovingBox(this.state, this.nyanX + 280, -this.nyanY + 330, this.nyanAngle, 'yellowBox'));
     }
    if(two){ 
        this.state.boxGroup.addChild(new MovingBox(this.state, this.nyanX + 280, -this.nyanY+ 320, this.nyanAngle, 'orangeBox'));
    }

    if(three){ 
        this.state.boxGroup.addChild(new MovingBox(this.state, this.nyanX + 280, -this.nyanY + 310, this.nyanAngle, 'greenBox'));
    }

    if(four){ 
        this.state.boxGroup.addChild(new MovingBox(this.state, this.nyanX + 280, -this.nyanY + 300, this.nyanAngle, 'pinkBox'));
    }

    if(five){ 
        this.state.boxGroup.addChild(new MovingBox(this.state, this.nyanX + 280, -this.nyanY + 290, this.nyanAngle, 'blueBox'));
    }

    }

};

Kiwi.extend(Nyan,Kiwi.GameObjects.Sprite);