class TitleLayer extends cc.Layer{
    constructor(){
        super();

        let size = cc.winSize;
        let titleLabel = new cc.LabelTTF("CHAOS PONG v2", 'Pixel', 69);
        titleLabel.x = size.width / 2;
        titleLabel.y = size.height / 2;
        this.addChild(titleLabel);

        let startLabel = new cc.LabelTTF("press any Enter to start", 'Pixel', 32);
        startLabel.x = size.width / 2;
        startLabel.y = size.height / 2 - 200;
        this.addChild(startLabel);
        let toMainScene = new ToMainScene();
        this.addComponent(toMainScene);
    }
}