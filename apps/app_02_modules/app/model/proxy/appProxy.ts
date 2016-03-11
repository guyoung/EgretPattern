///<reference path="../../../../../typings/main.d.ts"/>

export class AppProxy extends puremvc.Proxy {

	public static NAME: string = 'AppProxy';
	private _data: any = {};

	constructor() {
		super(AppProxy.NAME);
	}

	public onRegister() {
		this._loadData();
	}

	private _loadData() {
		this._data.AppName = 'AppName';
		this._data.AppVersion = 'AppVersion';
		this._data.AppDescription = 'AppDescription';


	}


	public getAppName() : string {
		return this._data.AppName;
	}

	public getAppVersion() : string {
		return this._data.AppVersion;
	}

	public getAppDescription() : string {
		return this._data.AppDescription;
	}
}