///<reference path="../../../../../typings/main.d.ts"/>

export class GameOverCommad extends puremvc.SimpleCommand {

	public static NAME: string = 'GAME_OVER_COMMAD';

	constructor() {
		super();
	}

	public execute(notification: puremvc.INotification): void {
		this.sendNotification('CHANGE_SCENE', 'GAME_OVER_SCENE_MEDIATOR');
	}


}