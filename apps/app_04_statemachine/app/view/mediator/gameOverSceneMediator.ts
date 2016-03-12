///<reference path="../../../../../typings/main.d.ts"/>

import {GameOverScene} from '../scenes/gameOverScene';

export class GameOverSceneMediator extends puremvc.Mediator {

	public static NAME: string = 'GAME_OVER_SCENE_MEDIATOR';

	constructor() {
		super(GameOverSceneMediator.NAME);
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

		self.viewComponent = new GameOverScene(width, height);

		self.viewComponent.onAction = function(action) {
			self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, action);
		}
	}

	public destroyScene() {
		this.viewComponent = null;
	}

}