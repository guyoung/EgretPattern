///<reference path="../../../../../typings/main.d.ts"/>

import {OptionScene} from '../scenes/optionScene';

export class OptionSceneMediator extends puremvc.Mediator {

	public static NAME: string = 'OPTION_SCENE_MEDIATOR';

	constructor() {
		super(OptionSceneMediator.NAME);
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

		self.viewComponent = new OptionScene(width, height);

		self.viewComponent.onAction = function(action) {
			self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, action);
		}
	}

	public destroyScene() {
		this.viewComponent = null;
	}
	
}