///<reference path="../../../../../typings/main.d.ts"/>

import {SceneAction} from '../../scheme/sceneAction';

export class GameOverScene extends egret.Sprite {

    public onAction: any;

    public constructor(width: number, height: number) {
        super();

        this.width = width;
        this.height = height;
        this.init();
    }


    private init() {

        var text = new egret.TextField();
        text.text = ' Game Over Scene ';
        text.width = 400;
        text.height = 300;
        text.x = (this.width - text.width) * 0.5;
        text.y = 200;
        this.addChild(text);


        var btn = new egret.TextField();
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
}
