///<reference path="../../../../../typings/main.d.ts"/>

export class GameOptionCommad extends puremvc.SimpleCommand {

	public static NAME: string = 'GAME_OPTION_COMMAND';

	constructor() {
		super();
	}

	public execute(notification: puremvc.INotification): void {
		this.sendNotification('CHANGE_SCENE', 'OPTION_SCENE_MEDIATOR');
	}


}