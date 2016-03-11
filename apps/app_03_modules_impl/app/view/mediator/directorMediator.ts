///<reference path="../../../../../typings/main.d.ts"/>

export class DirectorMediator extends puremvc.Mediator {
	
	public static NAME: string = 'DIRECTOR_MEDIATOR';

	private _activeSceneMediator: any;

	constructor() {
		super(DirectorMediator.NAME);		
	}

	/** @override */
	public listNotificationInterests(): string[] {
		return ['CHANGE_SCENE'];
	}

	public handleNotification(notification: puremvc.INotification): void {
		switch (notification.getName()) {
			case 'CHANGE_SCENE':
				alert('CHANGE_SCENE');
				alert(notification.getBody());
				this.changeScene(notification.getBody());

				break;
		}

	}

	public onRegister(): void {
		var sprite = new egret.Sprite();

		this.setViewComponent(sprite);
	}

	public onRemove(): void {

	}

	public changeScene(mediatorName): void {

		if (this._activeSceneMediator) {
			this.getViewComponent().removeChildren();

			this._activeSceneMediator.destroyScene();
		}			

		var sceneMediator = this.facade.retrieveMediator(mediatorName);

		if (sceneMediator) {			
			this._activeSceneMediator = sceneMediator;
			sceneMediator.renderScene(this.getViewComponent().width,
				this.getViewComponent().height);	

			this.getViewComponent().addChild(sceneMediator.getViewComponent());
		}
	}


	
}