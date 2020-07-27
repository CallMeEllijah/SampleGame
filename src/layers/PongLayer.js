class PongLayer extends cc.Layer{
    constructor(){
        super();

        let paddle = new Paddle(300, 20);
        let ball = new Ball(960, 640);
        this.addChild(paddle);
        this.addChild(ball);
        let pongGame = new PongGame();
        this.addComponent(pongGame);

        cc.log(this);

        this.allChildren = this.getChildren();

        this.scheduleUpdate();
        this.moveX = 0;

        this.ballX = 2;
        this.ballY = 9;
    }

    update(dt){ //put dt sa set position
        this.allChildren[0].setPosition((this.allChildren[0].x + (this.movePaddle()*dt)*69), this.allChildren[0].y);// has *dt *69
        
        this.ballX = this.ttX();
        this.ballY = this.ttY();

        if(this.ballY == 0) cc.director.runScene(new TitleScene());

        this.allChildren[1]
        .setPosition(this.allChildren[1].x + this.ballX * dt * 100, this.allChildren[1].y + this.ballY) * dt * 100; //has dt for speed
    }

    //paddle functions

    movePaddle(){ //checks if out of bounds //665 //0

        if(this.allChildren[0].x+this.moveX <= -5){
            return 0;
        }
        if(this.allChildren[0].x+this.moveX >= 660){
            return 0;
        }
        
        return this.moveX;
    }

    //ball functions

    ttX(){ //its just to calculate the x value when it hits walls and paddle
        return (this.allChildren[1].x >= 460) ? -2
            : (this.allChildren[1].x <= -455) ? 2
            : (this.allChildren[1].y <= this.allChildren[0].y/2-212.5 && this.allChildren[1].x >= this.allChildren[0].x-500 && this.allChildren[1].x <= this.allChildren[0].x-150 && Math.floor(Math.random() * 2)+1 == 2) ? Math.floor(Math.random() * 5)+2
            : (this.allChildren[1].y <= this.allChildren[0].y/2-212.5 && this.allChildren[1].x >= this.allChildren[0].x-500 && this.allChildren[1].x <= this.allChildren[0].x-150 && Math.floor(Math.random() * 1)+1 == 1) ? (Math.floor(Math.random() * 5)+2)*-1
            : this.ballX;
    }

    ttY(){ //calculates y value when it hits walls and paddle
        return (this.allChildren[1].y >= 295) ? -9
            : (this.allChildren[1].y <= -300) ? 0
            : (this.allChildren[1].y <= this.allChildren[0].y/2-212.5 && this.allChildren[1].x >= this.allChildren[0].x-500 && this.allChildren[1].x <= this.allChildren[0].x-160) ? 9
            : this.ballY;
    }
}