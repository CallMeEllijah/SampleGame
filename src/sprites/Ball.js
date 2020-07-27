class Ball extends cc.DrawNode{

    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }
    onEnter(){
        super.onEnter();
        let size = cc.winSize;
        this.drawDot(cc.p(this.width/2, this.height/2), 25, cc.color.GREEN);

    }

}   