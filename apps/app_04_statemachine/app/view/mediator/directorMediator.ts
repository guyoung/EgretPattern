///<reference path="../../../../../typings/main.d.ts"/>

export class DirectorMediator extends puremvc.Mediator {
	
	public static NAME: string = 'DIRECTOR_MEDIATOR';

	private _activeSceneMediator: any;

	constructor() {
		super(DirectorMediator.NAME);		
	}

	/** @override */
	public listNotificationInterests(): string[] {
		return [
			puremvc.statemachine.StateMachine.CHANGED
		];
	}

	public handleNotification(notification: puremvc.INotification): void {
		switch (notification.getName()) {
			case puremvc.statemachine.StateMachine.CHANGED:				
				this.changeScene(notification.getBody().name);
				break;
		}

	}

	public onRegister(): void {
		this.viewComponent = new egret.Sprite();
		this.viewComponent.width = this.facade.container.stage.stageWidth;
		this.viewComponent.height = this.facade.container.stage.stageHeight;

		if (this.facade.container) {
			this.facade.container.addChild(this.viewComponent);
		}
	}

	public onRemove(): void {

	}

	public changeScene(mediatorName): void {

		//alert('changeScene:' + mediatorName)

		if (this._activeSceneMediator) {
			this.getViewComponent().removeChildren();

			this._activeSceneMediator.destroyScene();
		}			

		var sceneMediator = this.facade.retrieveMediator(mediatorName);

		if (sceneMediator) {			
			this._activeSceneMediator = sceneMediator;
			sceneMediator.renderScene(this.viewComponent.width,
				this.viewComponent.height);	

			this.viewComponent.addChild(sceneMediator.getViewComponent());
		}
	}


	
}