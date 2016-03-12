declare module puremvc {

	export module statemachine {

		export class FSMInjector extends Notifier {
			constructor(fsm: any);

			public inject(): void;
		}

		export class StateMachine extends Mediator {
			public static CHANGED: string;
			public static ACTION: string;
		}

	}	
}