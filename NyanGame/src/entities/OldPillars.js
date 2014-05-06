//Pillars
var Pillars = function(state){

    this.state = state;
    var topY = (-(Math.random() * 200))-90;
    var botY = topY + 400;
    this.pillars = [new Pillar(this.state, -50, topY), new Pillar(this.state, -50, topY)];




    //this.rotation  = -this.angle;
    Pillars.prototype.update = function(){

        for(var i = 0; i < this.pillars.length; i++){
            this.pillars[i]
        }

        if (this.x < -100){
            this.destroy();
        }

        
    }


   

};
