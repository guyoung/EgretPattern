///<reference path="../../../../../typings/main.d.ts"/>

import {PrepModelCommand} from './prepModelCommand';
import {PrepViewCommand} from './prepViewCommand';
import {PrepControllerCommand} from './prepControllerCommand';




export class StartupCommand extends puremvc.MacroCommand {

	public static NAME: string = 'STARTUP_COMMAND';

	constructor() {
		super();
	}

	public initializeMacroCommand(): void {
		
		this.addSubCommand(PrepModelCommand);
		this.addSubCommand(PrepViewCommand);
		this.addSubCommand(PrepControllerCommand);
		
	}

}