///<reference path="../../../../../typings/main.d.ts"/>

export class GameMenuCommad extends puremvc.SimpleCommand {

	public static NAME: string = 'GAME_MENU_COMMAND';

	constructor() {
		super();
	}

	public execute(notification: puremvc.INotification): void {	
		this.sendNotification('CHANGE_SCENE', 'MENU_SCENE_MEDIATOR');
	}


}