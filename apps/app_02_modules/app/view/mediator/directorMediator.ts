///<reference path="../../../../../typings/main.d.ts"/>

import {DirectorComponent} from '../component/directorComponent'

export class DirectorMediator extends puremvc.Mediator {
	
	public static NAME: string = 'DIRECTOR_MEDIATOR';

	private _vewComponent: any;

	constructor() {
		super(DirectorMediator.NAME);		
	}

	/** @override */
	public listNotificationInterests(): string[] {
		return ['CHANGE_SCENE'];
	}

	public handleNotification(notification: puremvc.INotification): void {
		switch (notification.getName()) {
			case 'CHANGE_SCENE':
				alert('CHANGE_SCENE')
				break;
		}

	}

	public onRegister(): void {
		this.setViewComponent(new DirectorComponent());
	}

	public onRemove(): void {

	}

	
}