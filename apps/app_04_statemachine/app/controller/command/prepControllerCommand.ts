///<reference path="../../../../../typings/main.d.ts"/>

import {InjectFSMCommand} from './injectFSMCommand';

export class PrepControllerCommand extends puremvc.MacroCommand {

	public static NAME: string = 'PREP_CONTROLLER_COMMAND';

	constructor() {
		super();
	}

	public initializeMacroCommand(): void {
		this.addSubCommand(InjectFSMCommand);
	}

}