///<reference path="../../../../../typings/main.d.ts"/>

import {SceneAction} from '../../scheme/sceneAction';

export class GameMainScene extends egret.Sprite {

    public onAction: any;
    public onKill: any;
    private _lifeText: egret.TextField;

    public constructor(width: number, height: number) {
        super();

        this.width = width;
        this.height = height;
        this.init();
    }
  

    private init() {  

        var text = new egret.TextField();
        text.text = ' Game Main Scene ';
        text.x = (this.width - text.width) * 0.5;
        text.y = 200;
        this.addChild(text);

        this._lifeText = new egret.TextField();       
        this._lifeText.x = (this.width - this._lifeText.width) * 0.5;
        this._lifeText.y = 250;
        this.addChild(this._lifeText);

        var btn = new egret.TextField();
        btn.text = 'KILL';
        btn.x = (this.width - btn.width) * 0.5;;
        btn.y = 300;
        btn.touchEnabled = true;
        this.addChild(btn);
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e: egret.TouchEvent) {
            if (this.onKill) {
                this.onKill();
            }
        }, this);


        btn = new egret.TextField();
        btn.text = 'EXIT';
        btn.x = this.width - 20 - btn.width;
        btn.y = this.height - 20 - btn.height;
        btn.touchEnabled = true;
        this.addChild(btn);
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e: egret.TouchEvent) {
            if (this.onAction) {
                this.onAction(SceneAction.HOME_ACTION);
            }
        }, this);
    }

    public showLife(life) {
        this._lifeText.text = "LIFE:" + life;
    }
}
