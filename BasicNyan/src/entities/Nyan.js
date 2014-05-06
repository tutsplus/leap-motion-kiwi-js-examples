var Nyan = function(state, x, y){
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['nyanCat'], x, y);
    this.state = state;
    this.animation.add('walk', [0, 1, 2, 3, 4, 5], 0.1, true);    
    this.animation.play('walk');

    Nyan.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.spawnBoxes(this.state.control.hands[0].pointables[0].active, 
            this.state.control.hands[0].pointables[1].active, 
            this.state.control.hands[0].pointables[2].active, 
            this.state.control.hands[0].pointables[3].active, 
            this.state.control.hands[0].pointables[4].active);
    }

    Nyan.prototype.spawnBoxes = function(one, two, three, four, five){

        if(one){    
        this.state.streamerGroup.addChild(new MovingBox(this.state, this.x , this.y + 05,  'yellowBox'));
        }
        if(two){ 
            this.state.streamerGroup.addChild(new MovingBox(this.state, this.x , this.y+ 15, 'orangeBox'));
        }

        if(three){ 
            this.state.streamerGroup.addChild(new MovingBox(this.state, this.x , this.y + 25,  'greenBox'));
        }

        if(four){ 
            this.state.streamerGroup.addChild(new MovingBox(this.state, this.x, this.y + 35,  'pinkBox'));
        }

        if(five){ 
            this.state.streamerGroup.addChild(new MovingBox(this.state, this.x, this.y + 45, 'blueBox'));
        }
    }

}

Kiwi.extend(Nyan,Kiwi.GameObjects.Sprite);