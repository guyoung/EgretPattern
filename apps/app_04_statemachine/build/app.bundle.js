/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var appFacade_1 = __webpack_require__(2);
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        _super.call(this);
	        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	    }
	    App.prototype.onAddToStage = function (event) {
	        this.createGameScene();
	    };
	    /**
	     * 创建游戏场景
	     * Create a game scene
	     */
	    App.prototype.createGameScene = function () {
	        var key = 'GY_EGRET_PATTERN';
	        var appFacade = appFacade_1.AppFacade.getInstance(key);
	        appFacade.container = this;
	        appFacade.startup();
	    };
	    return App;
	}(egret.DisplayObjectContainer));
	egret.registerClass(App, "App");
	window["App"] = App;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var startupCommand_1 = __webpack_require__(3);
	var AppFacade = (function (_super) {
	    __extends(AppFacade, _super);
	    function AppFacade(key) {
	        _super.call(this, key);
	        this.container = null;
	    }
	    AppFacade.prototype.initializeController = function () {
	        puremvc.Facade.prototype.initializeController.call(this);
	        this.registerCommand(AppFacade.STARTUP_COMMAND, startupCommand_1.StartupCommand);
	    };
	    AppFacade.prototype.initializeModel = function () {
	        puremvc.Facade.prototype.initializeModel.call(this);
	    };
	    AppFacade.prototype.initializeView = function () {
	        puremvc.Facade.prototype.initializeView.call(this);
	    };
	    AppFacade.prototype.startup = function () {
	        this.sendNotification(AppFacade.STARTUP_COMMAND);
	    };
	    AppFacade.getInstance = function (key) {
	        var instanceMap = puremvc.Facade.instanceMap;
	        var instance = instanceMap[key];
	        if (instance) {
	            return instance;
	        }
	        return instanceMap[key] = new AppFacade(key);
	    };
	    AppFacade.STARTUP_COMMAND = 'STARTUP';
	    return AppFacade;
	}(puremvc.Facade));
	exports.AppFacade = AppFacade;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var prepModelCommand_1 = __webpack_require__(4);
	var prepViewCommand_1 = __webpack_require__(7);
	var prepControllerCommand_1 = __webpack_require__(19);
	var StartupCommand = (function (_super) {
	    __extends(StartupCommand, _super);
	    function StartupCommand() {
	        _super.call(this);
	    }
	    StartupCommand.prototype.initializeMacroCommand = function () {
	        this.addSubCommand(prepModelCommand_1.PrepModelCommand);
	        this.addSubCommand(prepViewCommand_1.PrepViewCommand);
	        this.addSubCommand(prepControllerCommand_1.PrepControllerCommand);
	    };
	    StartupCommand.NAME = 'STARTUP_COMMAND';
	    return StartupCommand;
	}(puremvc.MacroCommand));
	exports.StartupCommand = StartupCommand;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var gameProxy_1 = __webpack_require__(5);
	var PrepModelCommand = (function (_super) {
	    __extends(PrepModelCommand, _super);
	    function PrepModelCommand() {
	        _super.call(this);
	    }
	    PrepModelCommand.prototype.execute = function (notification) {
	        this.facade.registerProxy(new gameProxy_1.GameProxy());
	    };
	    PrepModelCommand.NAME = 'PREP_MODEL_COMMAND';
	    return PrepModelCommand;
	}(puremvc.SimpleCommand));
	exports.PrepModelCommand = PrepModelCommand;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var sceneAction_1 = __webpack_require__(6);
	var GameProxy = (function (_super) {
	    __extends(GameProxy, _super);
	    function GameProxy() {
	        _super.call(this, GameProxy.NAME);
	        this._life = 0;
	    }
	    GameProxy.prototype.onRegister = function () {
	        this._life = 10;
	    };
	    GameProxy.prototype.getLife = function () {
	        return this._life;
	    };
	    GameProxy.prototype.setLife = function (life) {
	        this._life = life;
	    };
	    GameProxy.prototype.incLife = function (cb) {
	        this._life++;
	    };
	    GameProxy.prototype.decLife = function (cb) {
	        this._life--;
	        if (this._life <= 0) {
	            this.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, sceneAction_1.SceneAction.GAME_OVER_ACTION);
	        }
	        else {
	            if (cb) {
	                cb(this._life);
	            }
	        }
	    };
	    GameProxy.NAME = 'GAME_PROXY';
	    return GameProxy;
	}(puremvc.Proxy));
	exports.GameProxy = GameProxy;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	var SceneAction = (function () {
	    function SceneAction() {
	    }
	    SceneAction.HOME_ACTION = 'HOME_ACTION';
	    SceneAction.GAME_MAIN_ACTION = 'GAME_MAIN_ACTION';
	    SceneAction.GAME_OVER_ACTION = 'GAME_OVER_ACTION';
	    SceneAction.OPTION_ACTION = 'OPTION_ACTION';
	    SceneAction.HELP_ACTION = 'HELP_ACTION';
	    return SceneAction;
	}());
	exports.SceneAction = SceneAction;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var directorMediator_1 = __webpack_require__(8);
	var menuSceneMediator_1 = __webpack_require__(9);
	var gameMainSceneMediator_1 = __webpack_require__(11);
	var gameOverSceneMediator_1 = __webpack_require__(13);
	var optionSceneMediator_1 = __webpack_require__(15);
	var helpSceneMediator_1 = __webpack_require__(17);
	var PrepViewCommand = (function (_super) {
	    __extends(PrepViewCommand, _super);
	    function PrepViewCommand() {
	        _super.call(this);
	    }
	    PrepViewCommand.prototype.execute = function (notification) {
	        this.facade.registerMediator(new directorMediator_1.DirectorMediator());
	        this.facade.registerMediator(new menuSceneMediator_1.MenuSceneMediator());
	        this.facade.registerMediator(new gameMainSceneMediator_1.GameMainSceneMediator());
	        this.facade.registerMediator(new gameOverSceneMediator_1.GameOverSceneMediator());
	        this.facade.registerMediator(new optionSceneMediator_1.OptionSceneMediator());
	        this.facade.registerMediator(new helpSceneMediator_1.HelpSceneMediator());
	    };
	    PrepViewCommand.NAME = 'PREP_VIEW_COMMAND';
	    return PrepViewCommand;
	}(puremvc.SimpleCommand));
	exports.PrepViewCommand = PrepViewCommand;


/***/ },
/* 8 */
/***/ function(module, exports) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var DirectorMediator = (function (_super) {
	    __extends(DirectorMediator, _super);
	    function DirectorMediator() {
	        _super.call(this, DirectorMediator.NAME);
	    }
	    /** @override */
	    DirectorMediator.prototype.listNotificationInterests = function () {
	        return [
	            puremvc.statemachine.StateMachine.CHANGED
	        ];
	    };
	    DirectorMediator.prototype.handleNotification = function (notification) {
	        switch (notification.getName()) {
	            case puremvc.statemachine.StateMachine.CHANGED:
	                this.changeScene(notification.getBody().name);
	                break;
	        }
	    };
	    DirectorMediator.prototype.onRegister = function () {
	        this.viewComponent = new egret.Sprite();
	        this.viewComponent.width = this.facade.container.stage.stageWidth;
	        this.viewComponent.height = this.facade.container.stage.stageHeight;
	        if (this.facade.container) {
	            this.facade.container.addChild(this.viewComponent);
	        }
	    };
	    DirectorMediator.prototype.onRemove = function () {
	    };
	    DirectorMediator.prototype.changeScene = function (mediatorName) {
	        //alert('changeScene:' + mediatorName)
	        if (this._activeSceneMediator) {
	            this.getViewComponent().removeChildren();
	            this._activeSceneMediator.destroyScene();
	        }
	        var sceneMediator = this.facade.retrieveMediator(mediatorName);
	        if (sceneMediator) {
	            this._activeSceneMediator = sceneMediator;
	            sceneMediator.renderScene(this.viewComponent.width, this.viewComponent.height);
	            this.viewComponent.addChild(sceneMediator.getViewComponent());
	        }
	    };
	    DirectorMediator.NAME = 'DIRECTOR_MEDIATOR';
	    return DirectorMediator;
	}(puremvc.Mediator));
	exports.DirectorMediator = DirectorMediator;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var menuScene_1 = __webpack_require__(10);
	var MenuSceneMediator = (function (_super) {
	    __extends(MenuSceneMediator, _super);
	    function MenuSceneMediator() {
	        _super.call(this, MenuSceneMediator.NAME);
	    }
	    /** @override */
	    MenuSceneMediator.prototype.listNotificationInterests = function () {
	        return [];
	    };
	    MenuSceneMediator.prototype.handleNotification = function (notification) {
	    };
	    MenuSceneMediator.prototype.onRegister = function () {
	    };
	    MenuSceneMediator.prototype.onRemove = function () {
	    };
	    MenuSceneMediator.prototype.renderScene = function (width, height) {
	        var self = this;
	        self.viewComponent = new menuScene_1.MenuScene(width, height);
	        self.viewComponent.onAction = function (action) {
	            self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, action);
	        };
	    };
	    MenuSceneMediator.prototype.destroyScene = function () {
	        this.viewComponent = null;
	    };
	    MenuSceneMediator.NAME = 'MENU_SCENE_MEDIATOR';
	    return MenuSceneMediator;
	}(puremvc.Mediator));
	exports.MenuSceneMediator = MenuSceneMediator;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var sceneAction_1 = __webpack_require__(6);
	var MenuScene = (function (_super) {
	    __extends(MenuScene, _super);
	    function MenuScene(width, height) {
	        _super.call(this);
	        this.width = width;
	        this.height = height;
	        this.init();
	    }
	    MenuScene.prototype.init = function () {
	        var btn = new egret.TextField();
	        btn.text = 'Start Game';
	        btn.x = (this.width - btn.width) * 0.5;
	        btn.y = 200;
	        btn.touchEnabled = true;
	        this.addChild(btn);
	        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
	            if (this.onAction) {
	                this.onAction(sceneAction_1.SceneAction.GAME_MAIN_ACTION);
	            }
	        }, this);
	        btn = new egret.TextField();
	        btn.text = 'Option';
	        btn.x = (this.width - btn.width) * 0.5;
	        btn.y = 250;
	        btn.touchEnabled = true;
	        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
	            if (this.onAction) {
	                this.onAction(sceneAction_1.SceneAction.OPTION_ACTION);
	            }
	        }, this);
	        this.addChild(btn);
	        btn = new egret.TextField();
	        btn.text = 'Help';
	        btn.x = (this.width - btn.width) * 0.5;
	        btn.y = 300;
	        btn.touchEnabled = true;
	        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
	            if (this.onAction) {
	                this.onAction(sceneAction_1.SceneAction.HELP_ACTION);
	            }
	        }, this);
	        this.addChild(btn);
	    };
	    return MenuScene;
	}(egret.Sprite));
	exports.MenuScene = MenuScene;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var gameMainScene_1 = __webpack_require__(12);
	var gameProxy_1 = __webpack_require__(5);
	var GameMainSceneMediator = (function (_super) {
	    __extends(GameMainSceneMediator, _super);
	    function GameMainSceneMediator() {
	        _super.call(this, GameMainSceneMediator.NAME);
	    }
	    /** @override */
	    GameMainSceneMediator.prototype.listNotificationInterests = function () {
	        return [];
	    };
	    GameMainSceneMediator.prototype.handleNotification = function (notification) {
	    };
	    GameMainSceneMediator.prototype.onRegister = function () {
	        this._gameProxy = this.facade.retrieveProxy(gameProxy_1.GameProxy.NAME);
	    };
	    GameMainSceneMediator.prototype.onRemove = function () {
	    };
	    GameMainSceneMediator.prototype.renderScene = function (width, height) {
	        var self = this;
	        self.viewComponent = new gameMainScene_1.GameMainScene(width, height);
	        self.viewComponent.onAction = function (action) {
	            self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, action);
	        };
	        self.viewComponent.life = self._gameProxy.getLife();
	        self.viewComponent.onKill = function () {
	            var showLife = function (life) {
	                self.viewComponent.showLife(life);
	            };
	            self._gameProxy.decLife(showLife);
	        };
	    };
	    GameMainSceneMediator.prototype.destroyScene = function () {
	        this.viewComponent = null;
	    };
	    GameMainSceneMediator.NAME = 'GAME_MAIN_SCENE_MEDIATOR';
	    return GameMainSceneMediator;
	}(puremvc.Mediator));
	exports.GameMainSceneMediator = GameMainSceneMediator;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var sceneAction_1 = __webpack_require__(6);
	var GameMainScene = (function (_super) {
	    __extends(GameMainScene, _super);
	    function GameMainScene(width, height) {
	        _super.call(this);
	        this.width = width;
	        this.height = height;
	        this.init();
	    }
	    GameMainScene.prototype.init = function () {
	        var text = new egret.TextField();
	        text.text = ' Game Main Scene ';
	        text.x = (this.width - text.width) * 0.5;
	        text.y = 200;
	        this.addChild(text);
	        this._lifeText = new egret.TextField();
	        this._lifeText.x = (this.width - this._lifeText.width) * 0.5;
	        this._lifeText.y = 250;
	        this.addChild(this._lifeText);
	        var btn = new egret.TextField();
	        btn.text = 'KILL';
	        btn.x = (this.width - btn.width) * 0.5;
	        ;
	        btn.y = 300;
	        btn.touchEnabled = true;
	        this.addChild(btn);
	        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
	            if (this.onKill) {
	                this.onKill();
	            }
	        }, this);
	        btn = new egret.TextField();
	        btn.text = 'EXIT';
	        btn.x = this.width - 20 - btn.width;
	        btn.y = this.height - 20 - btn.height;
	        btn.touchEnabled = true;
	        this.addChild(btn);
	        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
	            if (this.onAction) {
	                this.onAction(sceneAction_1.SceneAction.HOME_ACTION);
	            }
	        }, this);
	    };
	    GameMainScene.prototype.showLife = function (life) {
	        this._lifeText.text = "LIFE:" + life;
	    };
	    return GameMainScene;
	}(egret.Sprite));
	exports.GameMainScene = GameMainScene;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var gameOverScene_1 = __webpack_require__(14);
	var GameOverSceneMediator = (function (_super) {
	    __extends(GameOverSceneMediator, _super);
	    function GameOverSceneMediator() {
	        _super.call(this, GameOverSceneMediator.NAME);
	    }
	    /** @override */
	    GameOverSceneMediator.prototype.listNotificationInterests = function () {
	        return [];
	    };
	    GameOverSceneMediator.prototype.handleNotification = function (notification) {
	    };
	    GameOverSceneMediator.prototype.onRegister = function () {
	    };
	    GameOverSceneMediator.prototype.onRemove = function () {
	    };
	    GameOverSceneMediator.prototype.renderScene = function (width, height) {
	        var self = this;
	        self.viewComponent = new gameOverScene_1.GameOverScene(width, height);
	        self.viewComponent.onAction = function (action) {
	            self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, action);
	        };
	    };
	    GameOverSceneMediator.prototype.destroyScene = function () {
	        this.viewComponent = null;
	    };
	    GameOverSceneMediator.NAME = 'GAME_OVER_SCENE_MEDIATOR';
	    return GameOverSceneMediator;
	}(puremvc.Mediator));
	exports.GameOverSceneMediator = GameOverSceneMediator;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var sceneAction_1 = __webpack_require__(6);
	var GameOverScene = (function (_super) {
	    __extends(GameOverScene, _super);
	    function GameOverScene(width, height) {
	        _super.call(this);
	        this.width = width;
	        this.height = height;
	        this.init();
	    }
	    GameOverScene.prototype.init = function () {
	        var text = new egret.TextField();
	        text.text = ' Game Over Scene ';
	        text.width = 400;
	        text.height = 300;
	        text.x = (this.width - text.width) * 0.5;
	        text.y = 200;
	        this.addChild(text);
	        var btn = new egret.TextField();
	        btn.text = 'EXIT';
	        btn.x = this.width - 20 - btn.width;
	        btn.y = this.height - 20 - btn.height;
	        btn.touchEnabled = true;
	        this.addChild(btn);
	        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
	            if (this.onAction) {
	                this.onAction(sceneAction_1.SceneAction.HOME_ACTION);
	            }
	        }, this);
	    };
	    return GameOverScene;
	}(egret.Sprite));
	exports.GameOverScene = GameOverScene;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var optionScene_1 = __webpack_require__(16);
	var OptionSceneMediator = (function (_super) {
	    __extends(OptionSceneMediator, _super);
	    function OptionSceneMediator() {
	        _super.call(this, OptionSceneMediator.NAME);
	    }
	    /** @override */
	    OptionSceneMediator.prototype.listNotificationInterests = function () {
	        return [];
	    };
	    OptionSceneMediator.prototype.handleNotification = function (notification) {
	    };
	    OptionSceneMediator.prototype.onRegister = function () {
	    };
	    OptionSceneMediator.prototype.onRemove = function () {
	    };
	    OptionSceneMediator.prototype.renderScene = function (width, height) {
	        var self = this;
	        self.viewComponent = new optionScene_1.OptionScene(width, height);
	        self.viewComponent.onAction = function (action) {
	            self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, action);
	        };
	    };
	    OptionSceneMediator.prototype.destroyScene = function () {
	        this.viewComponent = null;
	    };
	    OptionSceneMediator.NAME = 'OPTION_SCENE_MEDIATOR';
	    return OptionSceneMediator;
	}(puremvc.Mediator));
	exports.OptionSceneMediator = OptionSceneMediator;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var sceneAction_1 = __webpack_require__(6);
	var OptionScene = (function (_super) {
	    __extends(OptionScene, _super);
	    function OptionScene(width, height) {
	        _super.call(this);
	        this.width = width;
	        this.height = height;
	        this.init();
	    }
	    OptionScene.prototype.init = function () {
	        var text = new egret.TextField();
	        text.text = ' Option Scene ';
	        text.x = (this.width - text.width) * 0.5;
	        text.y = 200;
	        this.addChild(text);
	        var btn = new egret.TextField();
	        btn.text = 'EXIT';
	        btn.x = this.width - 20 - btn.width;
	        btn.y = this.height - 20 - btn.height;
	        btn.touchEnabled = true;
	        this.addChild(btn);
	        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
	            if (this.onAction) {
	                this.onAction(sceneAction_1.SceneAction.HOME_ACTION);
	            }
	        }, this);
	    };
	    return OptionScene;
	}(egret.Sprite));
	exports.OptionScene = OptionScene;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var helpScene_1 = __webpack_require__(18);
	var HelpSceneMediator = (function (_super) {
	    __extends(HelpSceneMediator, _super);
	    function HelpSceneMediator() {
	        _super.call(this, HelpSceneMediator.NAME);
	    }
	    /** @override */
	    HelpSceneMediator.prototype.listNotificationInterests = function () {
	        return [];
	    };
	    HelpSceneMediator.prototype.handleNotification = function (notification) {
	    };
	    HelpSceneMediator.prototype.onRegister = function () {
	    };
	    HelpSceneMediator.prototype.onRemove = function () {
	    };
	    HelpSceneMediator.prototype.renderScene = function (width, height) {
	        var self = this;
	        self.viewComponent = new helpScene_1.HelpScene(width, height);
	        self.viewComponent.onAction = function (action) {
	            self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, action);
	        };
	    };
	    HelpSceneMediator.prototype.destroyScene = function () {
	        this.viewComponent = null;
	    };
	    HelpSceneMediator.NAME = 'HELP_SCENE_MEDIATOR';
	    return HelpSceneMediator;
	}(puremvc.Mediator));
	exports.HelpSceneMediator = HelpSceneMediator;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var sceneAction_1 = __webpack_require__(6);
	var HelpScene = (function (_super) {
	    __extends(HelpScene, _super);
	    function HelpScene(width, height) {
	        _super.call(this);
	        this.width = width;
	        this.height = height;
	        this.init();
	    }
	    HelpScene.prototype.init = function () {
	        var text = new egret.TextField();
	        text.text = ' Help Scene ';
	        text.x = (this.width - text.width) * 0.5;
	        text.y = 200;
	        this.addChild(text);
	        var btn = new egret.TextField();
	        btn.text = 'EXIT';
	        btn.x = this.width - 20 - btn.width;
	        btn.y = this.height - 20 - btn.height;
	        btn.touchEnabled = true;
	        this.addChild(btn);
	        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
	            if (this.onAction) {
	                this.onAction(sceneAction_1.SceneAction.HOME_ACTION);
	            }
	        }, this);
	    };
	    return HelpScene;
	}(egret.Sprite));
	exports.HelpScene = HelpScene;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var injectFSMCommand_1 = __webpack_require__(20);
	var PrepControllerCommand = (function (_super) {
	    __extends(PrepControllerCommand, _super);
	    function PrepControllerCommand() {
	        _super.call(this);
	    }
	    PrepControllerCommand.prototype.initializeMacroCommand = function () {
	        this.addSubCommand(injectFSMCommand_1.InjectFSMCommand);
	    };
	    PrepControllerCommand.NAME = 'PREP_CONTROLLER_COMMAND';
	    return PrepControllerCommand;
	}(puremvc.MacroCommand));
	exports.PrepControllerCommand = PrepControllerCommand;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var sceneFsm_1 = __webpack_require__(21);
	var InjectFSMCommand = (function (_super) {
	    __extends(InjectFSMCommand, _super);
	    function InjectFSMCommand() {
	        _super.call(this);
	    }
	    InjectFSMCommand.prototype.execute = function (notification) {
	        var sceneFsm = new sceneFsm_1.SceneFsm();
	        var fsm = sceneFsm.createFsm();
	        var injector = new puremvc.statemachine.FSMInjector(fsm);
	        injector.initializeNotifier(this.multitonKey);
	        injector.inject();
	    };
	    InjectFSMCommand.NAME = 'INJECT_FSM_COMMAND';
	    return InjectFSMCommand;
	}(puremvc.SimpleCommand));
	exports.InjectFSMCommand = InjectFSMCommand;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var sceneState_1 = __webpack_require__(22);
	var sceneAction_1 = __webpack_require__(6);
	var SceneFsm = (function () {
	    function SceneFsm() {
	    }
	    SceneFsm.prototype.createFsm = function () {
	        var fsm = {
	            // 开始状态
	            "@initial": sceneState_1.SceneState.MENU_MEDIATOR,
	            "state": [
	                {
	                    // Menu
	                    "@name": sceneState_1.SceneState.MENU_MEDIATOR,
	                    //"@changed": SceneTransition ,
	                    "transition": [
	                        {
	                            "@action": sceneAction_1.SceneAction.GAME_MAIN_ACTION,
	                            "@target": sceneState_1.SceneState.GAME_MAIN_MEDIATOR
	                        },
	                        {
	                            "@action": sceneAction_1.SceneAction.OPTION_ACTION,
	                            "@target": sceneState_1.SceneState.OPTION_MEDIATOR
	                        },
	                        {
	                            "@action": sceneAction_1.SceneAction.HELP_ACTION,
	                            "@target": sceneState_1.SceneState.HELP_MEDIATOR
	                        }
	                    ]
	                },
	                {
	                    // Game
	                    "@name": sceneState_1.SceneState.GAME_MAIN_MEDIATOR,
	                    //"@changed": SceneTransition ,
	                    "transition": [
	                        {
	                            "@action": sceneAction_1.SceneAction.GAME_OVER_ACTION,
	                            "@target": sceneState_1.SceneState.GAME_OVER_MEDIATOR
	                        },
	                        {
	                            "@action": sceneAction_1.SceneAction.HOME_ACTION,
	                            "@target": sceneState_1.SceneState.MENU_MEDIATOR
	                        }
	                    ]
	                },
	                {
	                    // GameOver
	                    "@name": sceneState_1.SceneState.GAME_OVER_MEDIATOR,
	                    //"@changed": SceneTransition ,
	                    "transition": [
	                        {
	                            "@action": sceneAction_1.SceneAction.HOME_ACTION,
	                            "@target": sceneState_1.SceneState.MENU_MEDIATOR
	                        }
	                    ]
	                },
	                {
	                    // Option
	                    "@name": sceneState_1.SceneState.OPTION_MEDIATOR,
	                    //"@changed": SceneTransition ,
	                    "transition": [
	                        {
	                            "@action": sceneAction_1.SceneAction.HOME_ACTION,
	                            "@target": sceneState_1.SceneState.MENU_MEDIATOR
	                        }
	                    ]
	                },
	                {
	                    // Help
	                    "@name": sceneState_1.SceneState.HELP_MEDIATOR,
	                    //"@changed": SceneTransition ,
	                    "transition": [
	                        {
	                            "@action": sceneAction_1.SceneAction.HOME_ACTION,
	                            "@target": sceneState_1.SceneState.MENU_MEDIATOR
	                        }
	                    ]
	                }
	            ]
	        };
	        return fsm;
	    };
	    return SceneFsm;
	}());
	exports.SceneFsm = SceneFsm;


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	var SceneState = (function () {
	    function SceneState() {
	    }
	    SceneState.MENU_MEDIATOR = 'MENU_SCENE_MEDIATOR';
	    SceneState.GAME_MAIN_MEDIATOR = 'GAME_MAIN_SCENE_MEDIATOR';
	    SceneState.GAME_OVER_MEDIATOR = 'GAME_OVER_SCENE_MEDIATOR';
	    SceneState.OPTION_MEDIATOR = 'OPTION_SCENE_MEDIATOR';
	    SceneState.HELP_MEDIATOR = 'HELP_SCENE_MEDIATOR';
	    return SceneState;
	}());
	exports.SceneState = SceneState;


/***/ }
/******/ ]);