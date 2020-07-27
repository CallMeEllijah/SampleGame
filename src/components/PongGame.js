class PongGame extends cc.Component{
    onEnter(){
        super.onEnter();
        this.listener = cc.EventListener.create({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: this.onKeyPressed,
                onKeyReleased: this.onKeyReleased
        });
        cc.eventManager.addListener(this.listener, this.getOwner());

    }

    onKeyPressed(key, event){
        if(key == 39) event.getCurrentTarget().moveX = 5;
        if(key == 37) event.getCurrentTarget().moveX = -5;
        if(key == 13){
            cc.log(event.getCurrentTarget());
        }
    }

    onKeyReleased(key, event){
        event.getCurrentTarget().moveX = 0;
    }

}