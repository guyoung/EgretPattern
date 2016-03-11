///<reference path="../../../../../typings/main.d.ts"/>

import {GameProxy} from '../../model/proxy/gameProxy';

export class PrepModelCommand extends puremvc.SimpleCommand {

	public static NAME: string = 'PREP_MODEL_COMMAND';

	constructor() {
		super();
	}

	public execute(notification: puremvc.INotification): void {
		this.facade.registerProxy(new GameProxy());
	}
}