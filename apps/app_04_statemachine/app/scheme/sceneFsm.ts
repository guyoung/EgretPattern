import {SceneState} from './sceneState';
import {SceneAction} from './sceneAction';

export class SceneFsm {

	public createFsm()  {

		var fsm = {
            // 开始状态
            "@initial": SceneState.MENU_MEDIATOR,
            "state": [
                {
                    // Menu
                    "@name": SceneState.MENU_MEDIATOR,
                    //"@changed": SceneTransition ,
                    "transition": [
                        {
                            "@action": SceneAction.GAME_MAIN_ACTION,
                            "@target": SceneState.GAME_MAIN_MEDIATOR
                        },
                        {
                            "@action": SceneAction.OPTION_ACTION,
                            "@target": SceneState.OPTION_MEDIATOR
                        },
                        {
                            "@action": SceneAction.HELP_ACTION,
                            "@target": SceneState.HELP_MEDIATOR
                        }
                    ]
                },
                {
                    // Game
                    "@name": SceneState.GAME_MAIN_MEDIATOR,
                    //"@changed": SceneTransition ,
                    "transition": [
                        {
                            "@action": SceneAction.GAME_OVER_ACTION,
                            "@target": SceneState.GAME_OVER_MEDIATOR
                        },
                        {
                            "@action": SceneAction.HOME_ACTION,
                            "@target": SceneState.MENU_MEDIATOR
                        }
                    ]
                },
                {
                    // GameOver
                    "@name": SceneState.GAME_OVER_MEDIATOR,
                    //"@changed": SceneTransition ,
                    "transition": [
                        {
                            "@action": SceneAction.HOME_ACTION,
                            "@target": SceneState.MENU_MEDIATOR
                        }
                    ]
                },
                {
                    // Option
                    "@name": SceneState.OPTION_MEDIATOR,
                    //"@changed": SceneTransition ,
                    "transition": [
                        {
                            "@action": SceneAction.HOME_ACTION,
                            "@target": SceneState.MENU_MEDIATOR
                        }
                    ]
                },
                {
                    // Help
                    "@name": SceneState.HELP_MEDIATOR,
                    //"@changed": SceneTransition ,
                    "transition": [
                        {
                            "@action": SceneAction.HOME_ACTION,
                            "@target": SceneState.MENU_MEDIATOR
                        }
                    ]
                }
            ]
        };

        return fsm;

	}
}