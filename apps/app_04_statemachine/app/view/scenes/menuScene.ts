///<reference path="../../../../../typings/main.d.ts"/>

import {SceneAction} from '../../scheme/sceneAction';

export class MenuScene extends egret.Sprite {

    public onAction: any;

    public constructor(width: number, height: number) {
        super();

        this.width = width;
        this.height = height;
        this.init();
    }    

    private init() {

        var btn = new egret.TextField();
        btn.text = 'Start Game';        
        btn.x = (this.width - btn.width) * 0.5;
        btn.y = 200;
        btn.touchEnabled = true;       
        this.addChild(btn);
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e: egret.TouchEvent) {
            if (this.onAction) {
                this.onAction(SceneAction.GAME_MAIN_ACTION);
            }
        }, this);
        

        btn = new egret.TextField();
        btn.text = 'Option';
        btn.x = (this.width - btn.width) * 0.5;
        btn.y = 250;
        btn.touchEnabled = true;  
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e: egret.TouchEvent) {
            if (this.onAction) {
                this.onAction(SceneAction.OPTION_ACTION);
            }
        }, this);
        this.addChild(btn);

        btn = new egret.TextField();
        btn.text = 'Help';
        btn.x = (this.width - btn.width) * 0.5;
        btn.y = 300;
        btn.touchEnabled = true;  
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e: egret.TouchEvent) {
            if (this.onAction) {
                this.onAction(SceneAction.HELP_ACTION);
            }
        }, this);
        this.addChild(btn);
    }
}
