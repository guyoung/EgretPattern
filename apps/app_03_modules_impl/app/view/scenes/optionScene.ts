///<reference path="../../../../../typings/main.d.ts"/>


export class OptionScene extends egret.Sprite {

    public onchange: any;

    public constructor(width: number, height: number) {
        super();

        this.width = width;
        this.height = height;
        this.init();
    }    

    private init() {       

        var text = new egret.TextField();
        text.text = '选项界面';
        text.x = (this.width - text.width) * 0.5;
        text.y = 200;
        this.addChild(text);

        var btn = new egret.TextField();
        btn.text = '退出';
        btn.x = this.width - 20 - btn.width;
        btn.y = this.height - 20 - btn.height;
        btn.touchEnabled = true;
        this.addChild(btn);
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e: egret.TouchEvent) {
            if (this.onchange) {
                this.onchange('Menu');
            }
        }, this);
    }
}
