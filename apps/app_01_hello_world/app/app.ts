/// <reference path="../../../libs/egret/build/egret/egret.d.ts"/>
/// <reference path="../../../libs/egret/build/tween/tween.d.ts"/>
/// <reference path="../../../libs/egret//build/res/res.d.ts"/>


class App extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        
    }

    private onAddToStage(event: egret.Event) {
        this.createGameScene();
    }

   
    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene(): void {

        var stageW: number = this.stage.stageWidth;
        var stageH: number = this.stage.stageHeight;

        var colorLabel: egret.TextField = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.textAlign = "center";
        colorLabel.text = "Hello World!";
        colorLabel.size = 40;
        colorLabel.x = stageW - colorLabel.width >> 1;
        colorLabel.y = (stageH - colorLabel.height >> 1) + 50;
        this.addChild(colorLabel);

    }    
}

egret.registerClass(App, "App");
window["App"] = App;

