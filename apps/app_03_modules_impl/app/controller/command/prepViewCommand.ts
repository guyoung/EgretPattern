///<reference path="../../../../../typings/main.d.ts"/>

import {MenuSceneMediator} from '../../view/mediator/menuSceneMediator';
import {GameMainSceneMediator} from '../../view/mediator/gameMainSceneMediator';
import {GameOverSceneMediator} from '../../view/mediator/gameOverSceneMediator';
import {OptionSceneMediator} from '../../view/mediator/optionSceneMediator';
import {HelpSceneMediator} from '../../view/mediator/helpSceneMediator';



export class PrepViewCommand extends puremvc.SimpleCommand {

	public static NAME: string = 'PREP_VIEW_COMMAND';

	constructor() {
		super();	
	}

	public execute(notification: puremvc.INotification): void {		
		this.facade.registerMediator(new MenuSceneMediator());
		this.facade.registerMediator(new GameMainSceneMediator());
		this.facade.registerMediator(new GameOverSceneMediator());
		this.facade.registerMediator(new OptionSceneMediator());
		this.facade.registerMediator(new HelpSceneMediator());
	}
}