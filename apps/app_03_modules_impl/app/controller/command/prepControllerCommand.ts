///<reference path="../../../../../typings/main.d.ts"/>

import { GameMenuCommad} from './gameMenuCommad';
import { GameMainCommad} from './gameMainCommad';
import { GameOverCommad} from './gameOverCommad';
import { GameOptionCommad} from './gameOptionCommad';
import { GameHelpCommad} from './gameHelpCommad';


export class PrepControllerCommand extends puremvc.SimpleCommand {

	public static NAME: string = 'PREP_CONTROLLER_COMMAND';

	constructor() {
		super();
	}

	public execute(notification: puremvc.INotification): void {		
		this.facade.registerCommand('Menu', GameMenuCommad);	
		this.facade.registerCommand('GameMain', GameMainCommad);	
		this.facade.registerCommand('GameOver', GameOverCommad);	
		this.facade.registerCommand('Option', GameOptionCommad);	
		this.facade.registerCommand('Help', GameHelpCommad);	
	}
}