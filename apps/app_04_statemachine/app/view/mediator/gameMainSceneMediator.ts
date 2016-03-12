///<reference path="../../../../../typings/main.d.ts"/>

import {GameMainScene} from '../scenes/gameMainScene';
import {GameProxy} from '../../model/proxy/gameProxy';

export class GameMainSceneMediator extends puremvc.Mediator {

	public static NAME: string = 'GAME_MAIN_SCENE_MEDIATOR';

	private _gameProxy: any;


	constructor() {
		super(GameMainSceneMediator.NAME);
	}

	/** @override */
	public listNotificationInterests(): string[] {
		return [];
	}

	public handleNotification(notification: puremvc.INotification): void {


	}

	public onRegister(): void {
		this._gameProxy = this.facade.retrieveProxy(GameProxy.NAME);
	}

	public onRemove(): void {

	}	

	public renderScene(width: number, height: number): void {

		var self = this;

		self.viewComponent = new GameMainScene(width, height);

		self.viewComponent.onAction = function(action) {
			self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, action);
		}

		self.viewComponent.life = self._gameProxy.getLife();
		self.viewComponent.onKill = function() {
			var showLife = function(life) {
				self.viewComponent.showLife(life)
			};

			self._gameProxy.decLife(showLife);
		};

	}

	public destroyScene() {
		this.viewComponent = null;
	}

}