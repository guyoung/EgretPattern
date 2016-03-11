///<reference path="../../../../../typings/main.d.ts"/>

export class GameProxy extends puremvc.Proxy {

	public static NAME: string = 'GAME_PROXY';

	private _life: number = 0;


	constructor() {
		super(GameProxy.NAME);
	}

	public onRegister() {
		this._life = 10;
	}

	public getLife () {
		return this._life;
	}

	public setLife(life) {
		this._life = life;
	}

	public incLife(cb) {
		this._life++;
	}

	public decLife(cb) {
		this._life--;

		if (this._life <= 0) {
			this.sendNotification('GameOver');
		} else {
			if (cb) {
				cb(this._life);
			}
		}

	}



}