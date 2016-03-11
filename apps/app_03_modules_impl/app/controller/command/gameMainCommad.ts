///<reference path="../../../../../typings/main.d.ts"/>

export class GameMainCommad extends puremvc.SimpleCommand {

	public static NAME: string = 'GAME_MAIN_COMMAD';

	constructor() {
		super();
	}

	public execute(notification: puremvc.INotification): void {
		this.sendNotification('CHANGE_SCENE', 'GAME_MAIN_SCENE_MEDIATOR');
	}


}