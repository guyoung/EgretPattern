///<reference path="../../../../typings/main.d.ts"/>

import {StartupCommand} from '../controller/command/startupCommand';
import {DirectorMediator} from '../view/mediator/DirectorMediator';

export class AppFacade extends puremvc.Facade implements puremvc.IFacade {

	private static STARTUP_COMMAND: string = 'STARTUP_COMMAND:';
	private static DIRECTOR_MEDIATOR: string = 'DIRECTOR_MEDIATOR';

	public constructor(key) {
		super(key);
	}

	public initializeController() {
		puremvc.Facade.prototype.initializeController.call(this);
		this.registerCommand(AppFacade.STARTUP_COMMAND, StartupCommand);
	}

	public initializeModel() {
		puremvc.Facade.prototype.initializeModel.call(this);
	}

	public initializeView() {
		puremvc.Facade.prototype.initializeView.call(this);
		this.registerMediator(new DirectorMediator());
	}

	public getDirector(): any {

		if (this.hasMediator(AppFacade.DIRECTOR_MEDIATOR)) {
			var directorMediator = this.retrieveMediator(AppFacade.DIRECTOR_MEDIATOR);

			return directorMediator.getViewComponent();
		}

	}


	public startup() {	

		this.sendNotification(AppFacade.STARTUP_COMMAND);
	}



	public static getInstance(key): any {

		var instanceMap = puremvc.Facade.instanceMap;

		var instance = instanceMap[key];
		if (instance) {
			return instance;
		}

		return instanceMap[key] = new AppFacade(key);
	}
}