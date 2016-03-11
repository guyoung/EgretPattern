///<reference path="../../../../../typings/main.d.ts"/>

export class GameHelpCommad extends puremvc.SimpleCommand {

	public static NAME: string = 'GAME_HELP_COMMAD';

	constructor() {
		super();
	}

	public execute(notification: puremvc.INotification): void {
		this.sendNotification('CHANGE_SCENE', 'HELP_SCENE_MEDIATOR');
	}


}