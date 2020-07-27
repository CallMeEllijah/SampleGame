class ToMainScene extends cc.Component{
    onEnter(){
        super.onEnter();
        this.listener = cc.EventListener.create({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: this.onKeyPressed
                //onKeyReleased
        });
        cc.eventManager.addListener(this.listener, 
            this.getOwner());
        
    }

    onKeyPressed(key, event){
        if(key == 13)
            cc.director.runScene(new MainScene());
    }

}