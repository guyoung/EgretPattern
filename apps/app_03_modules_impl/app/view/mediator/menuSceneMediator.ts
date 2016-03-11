///<reference path="../../../../../typings/main.d.ts"/>

import {MenuScene} from '../scenes/menuScene';

export class MenuSceneMediator extends puremvc.Mediator {

	public static NAME: string = 'MENU_SCENE_MEDIATOR';

	constructor() {
		super(MenuSceneMediator.NAME);
	}

	/** @override */
	public listNotificationInterests(): string[] {
		return [];
	}

	public handleNotification(notification: puremvc.INotification): void {		

	}

	public onRegister(): void {

	}

	public onRemove(): void {

	}

	public renderScene(width: number, height: number): void {

		var self = this;

		self.viewComponent = new MenuScene(width, height);

		self.viewComponent.onchange = function(e) {
			self.sendNotification(e);
		}
	}

	public destroyScene() {
		this.viewComponent = null;
	}

}