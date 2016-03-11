///<reference path="../../../../../typings/main.d.ts"/>

import {AppProxy} from '../../model/proxy/appProxy';



export class StartupCommand extends puremvc.SimpleCommand {

	public static NAME: string = 'STARTUP_COMMAND';

	constructor() {
		super();
	}

	public execute(notification: puremvc.INotification): void {
		this.facade.registerProxy(new AppProxy());
	}


}