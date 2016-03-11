///<reference path="../../../../../typings/main.d.ts"/>


export class MenuScene extends egret.Sprite {

    public onchange: any;

    public constructor(width: number, height: number) {
        super();

        this.width = width;
        this.height = height;
        this.init();
    }    

    private init() {

        var btn = new egret.TextField();
        btn.text = '开始游戏';        
        btn.x = (this.width - btn.width) * 0.5;
        btn.y = 200;
        btn.touchEnabled = true;       
        this.addChild(btn);
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e: egret.TouchEvent) {
            if (this.onchange) {
                this.onchange('GameMain');
            }
        }, this);
        

        btn = new egret.TextField();
        btn.text = '选项';
        btn.x = (this.width - btn.width) * 0.5;
        btn.y = 250;
        btn.touchEnabled = true;  
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e: egret.TouchEvent) {
            if (this.onchange) {
                this.onchange('Option');
            }
        }, this);
        this.addChild(btn);

        btn = new egret.TextField();
        btn.text = '帮助';
        btn.x = (this.width - btn.width) * 0.5;
        btn.y = 300;
        btn.touchEnabled = true;  
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e: egret.TouchEvent) {
            this.onchange('Help');
        }, this);
        this.addChild(btn);
    }
}
