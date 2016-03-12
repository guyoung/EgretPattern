///<reference path="../../../../../typings/main.d.ts"/>

import {SceneFsm} from '../../scheme/sceneFsm';


export class InjectFSMCommand extends puremvc.SimpleCommand {

	public static NAME: string = 'INJECT_FSM_COMMAND';

	constructor() {
		super();
	}

	public execute(notification: puremvc.INotification): void {

		var sceneFsm = new SceneFsm();
		var fsm = sceneFsm.createFsm();

		var injector = new puremvc.statemachine.FSMInjector(fsm);
		injector.initializeNotifier(this.multitonKey);
		injector.inject();
	}
}