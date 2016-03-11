///<reference path="../../../../../typings/main.d.ts"/>


export class DirectorComponent extends egret.Sprite {
    public constructor() {
        super();
    }

    private render() {

        var colorLabel: egret.TextField = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.textAlign = "center";
        colorLabel.text = "Hello World!";
        colorLabel.size = 40;
        colorLabel.x = this.width- colorLabel.width >> 1;
        colorLabel.y = (this.height - colorLabel.height >> 1) + 50;
        
        this.addChild(colorLabel);
    }
  
}
