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
	        var stageWidth = this.stage.stageWidth;
	        var stageHeight = this.stage.stageHeight;
	        var appFacade = appFacade_1.AppFacade.getInstance(key);
	        var director = appFacade.getDirector();
	        director.width = stageWidth;
	        director.height = stageHeight;
	        this.addChild(director);
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
	var DirectorMediator_1 = __webpack_require__(23);
	var AppFacade = (function (_super) {
	    __extends(AppFacade, _super);
	    function AppFacade(key) {
	        _super.call(this, key);
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
	        this.registerMediator(new DirectorMediator_1.DirectorMediator());
	    };
	    AppFacade.prototype.getDirector = function () {
	        if (this.hasMediator(AppFacade.DIRECTOR_MEDIATOR)) {
	            var directorMediator = this.retrieveMediator(AppFacade.DIRECTOR_MEDIATOR);
	            return directorMediator.getViewComponent();
	        }
	    };
	    AppFacade.prototype.startup = function () {
	        this.sendNotification(AppFacade.STARTUP_COMMAND);
	        this.sendNotification('Menu');
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
	    AppFacade.DIRECTOR_MEDIATOR = 'DIRECTOR_MEDIATOR';
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
	var prepViewCommand_1 = __webpack_require__(6);
	var prepControllerCommand_1 = __webpack_require__(17);
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
/***/ function(module, exports) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	            this.sendNotification('GameOver');
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
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var menuSceneMediator_1 = __webpack_require__(7);
	var gameMainSceneMediator_1 = __webpack_require__(9);
	var gameOverSceneMediator_1 = __webpack_require__(11);
	var optionSceneMediator_1 = __webpack_require__(13);
	var helpSceneMediator_1 = __webpack_require__(15);
	var PrepViewCommand = (function (_super) {
	    __extends(PrepViewCommand, _super);
	    function PrepViewCommand() {
	        _super.call(this);
	    }
	    PrepViewCommand.prototype.execute = function (notification) {
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var menuScene_1 = __webpack_require__(8);
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
	        self.viewComponent.onchange = function (e) {
	            self.sendNotification(e);
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
/* 8 */
/***/ function(module, exports) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	        btn.text = '开始游戏';
	        btn.x = (this.width - btn.width) * 0.5;
	        btn.y = 200;
	        btn.touchEnabled = true;
	        this.addChild(btn);
	        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
	            if (this.onchange) {
	                this.onchange('GameMain');
	            }
	        }, this);
	        btn = new egret.TextField();
	        btn.text = '选项';
	        btn.x = (this.width - btn.width) * 0.5;
	        btn.y = 250;
	        btn.touchEnabled = true;
	        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
	            if (this.onchange) {
	                this.onchange('Option');
	            }
	        }, this);
	        this.addChild(btn);
	        btn = new egret.TextField();
	        btn.text = '帮助';
	        btn.x = (this.width - btn.width) * 0.5;
	        btn.y = 300;
	        btn.touchEnabled = true;
	        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
	            this.onchange('Help');
	        }, this);
	        this.addChild(btn);
	    };
	    return MenuScene;
	}(egret.Sprite));
	exports.MenuScene = MenuScene;


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
	var gameMainScene_1 = __webpack_require__(10);
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
	        self.viewComponent.onchange = function (e) {
	            self.sendNotification(e);
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
/* 10 */
/***/ function(module, exports) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	        text.text = 'Game Main Scene ';
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
	            if (this.onKill) {
	                this.onchange('Menu');
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var gameOverScene_1 = __webpack_require__(12);
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
	        self.viewComponent.onchange = function (e) {
	            self.sendNotification(e);
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
/* 12 */
/***/ function(module, exports) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	        text.text = 'Game Over';
	        text.width = 400;
	        text.height = 300;
	        text.x = (this.width - text.width) * 0.5;
	        text.y = 200;
	        this.addChild(text);
	        var btn = new egret.TextField();
	        btn.text = '退出';
	        btn.x = this.width - 20 - btn.width;
	        btn.y = this.height - 20 - btn.height;
	        btn.touchEnabled = true;
	        this.addChild(btn);
	        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
	            if (this.onchange) {
	                this.onchange('Menu');
	            }
	        }, this);
	    };
	    return GameOverScene;
	}(egret.Sprite));
	exports.GameOverScene = GameOverScene;


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
	var optionScene_1 = __webpack_require__(14);
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
	        self.viewComponent.onchange = function (e) {
	            self.sendNotification(e);
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
/* 14 */
/***/ function(module, exports) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	        text.text = '选项界面';
	        text.x = (this.width - text.width) * 0.5;
	        text.y = 200;
	        this.addChild(text);
	        var btn = new egret.TextField();
	        btn.text = '退出';
	        btn.x = this.width - 20 - btn.width;
	        btn.y = this.height - 20 - btn.height;
	        btn.touchEnabled = true;
	        this.addChild(btn);
	        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
	            if (this.onchange) {
	                this.onchange('Menu');
	            }
	        }, this);
	    };
	    return OptionScene;
	}(egret.Sprite));
	exports.OptionScene = OptionScene;


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
	var helpScene_1 = __webpack_require__(16);
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
	        self.viewComponent.onchange = function (e) {
	            self.sendNotification(e);
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
/* 16 */
/***/ function(module, exports) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	        text.text = '帮助界面';
	        text.x = (this.width - text.width) * 0.5;
	        text.y = 200;
	        this.addChild(text);
	        var btn = new egret.TextField();
	        btn.text = '退出';
	        btn.x = this.width - 20 - btn.width;
	        btn.y = this.height - 20 - btn.height;
	        btn.touchEnabled = true;
	        this.addChild(btn);
	        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
	            if (this.onchange) {
	                this.onchange('Menu');
	            }
	        }, this);
	    };
	    return HelpScene;
	}(egret.Sprite));
	exports.HelpScene = HelpScene;


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
	var gameMenuCommad_1 = __webpack_require__(18);
	var gameMainCommad_1 = __webpack_require__(19);
	var gameOverCommad_1 = __webpack_require__(20);
	var gameOptionCommad_1 = __webpack_require__(21);
	var gameHelpCommad_1 = __webpack_require__(22);
	var PrepControllerCommand = (function (_super) {
	    __extends(PrepControllerCommand, _super);
	    function PrepControllerCommand() {
	        _super.call(this);
	    }
	    PrepControllerCommand.prototype.execute = function (notification) {
	        this.facade.registerCommand('Menu', gameMenuCommad_1.GameMenuCommad);
	        this.facade.registerCommand('GameMain', gameMainCommad_1.GameMainCommad);
	        this.facade.registerCommand('GameOver', gameOverCommad_1.GameOverCommad);
	        this.facade.registerCommand('Option', gameOptionCommad_1.GameOptionCommad);
	        this.facade.registerCommand('Help', gameHelpCommad_1.GameHelpCommad);
	    };
	    PrepControllerCommand.NAME = 'PREP_CONTROLLER_COMMAND';
	    return PrepControllerCommand;
	}(puremvc.SimpleCommand));
	exports.PrepControllerCommand = PrepControllerCommand;


/***/ },
/* 18 */
/***/ function(module, exports) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var GameMenuCommad = (function (_super) {
	    __extends(GameMenuCommad, _super);
	    function GameMenuCommad() {
	        _super.call(this);
	    }
	    GameMenuCommad.prototype.execute = function (notification) {
	        this.sendNotification('CHANGE_SCENE', 'MENU_SCENE_MEDIATOR');
	    };
	    GameMenuCommad.NAME = 'GAME_MENU_COMMAND';
	    return GameMenuCommad;
	}(puremvc.SimpleCommand));
	exports.GameMenuCommad = GameMenuCommad;


/***/ },
/* 19 */
/***/ function(module, exports) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var GameMainCommad = (function (_super) {
	    __extends(GameMainCommad, _super);
	    function GameMainCommad() {
	        _super.call(this);
	    }
	    GameMainCommad.prototype.execute = function (notification) {
	        this.sendNotification('CHANGE_SCENE', 'GAME_MAIN_SCENE_MEDIATOR');
	    };
	    GameMainCommad.NAME = 'GAME_MAIN_COMMAD';
	    return GameMainCommad;
	}(puremvc.SimpleCommand));
	exports.GameMainCommad = GameMainCommad;


/***/ },
/* 20 */
/***/ function(module, exports) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var GameOverCommad = (function (_super) {
	    __extends(GameOverCommad, _super);
	    function GameOverCommad() {
	        _super.call(this);
	    }
	    GameOverCommad.prototype.execute = function (notification) {
	        this.sendNotification('CHANGE_SCENE', 'GAME_OVER_SCENE_MEDIATOR');
	    };
	    GameOverCommad.NAME = 'GAME_OVER_COMMAD';
	    return GameOverCommad;
	}(puremvc.SimpleCommand));
	exports.GameOverCommad = GameOverCommad;


/***/ },
/* 21 */
/***/ function(module, exports) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var GameOptionCommad = (function (_super) {
	    __extends(GameOptionCommad, _super);
	    function GameOptionCommad() {
	        _super.call(this);
	    }
	    GameOptionCommad.prototype.execute = function (notification) {
	        this.sendNotification('CHANGE_SCENE', 'OPTION_SCENE_MEDIATOR');
	    };
	    GameOptionCommad.NAME = 'GAME_OPTION_COMMAND';
	    return GameOptionCommad;
	}(puremvc.SimpleCommand));
	exports.GameOptionCommad = GameOptionCommad;


/***/ },
/* 22 */
/***/ function(module, exports) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var GameHelpCommad = (function (_super) {
	    __extends(GameHelpCommad, _super);
	    function GameHelpCommad() {
	        _super.call(this);
	    }
	    GameHelpCommad.prototype.execute = function (notification) {
	        this.sendNotification('CHANGE_SCENE', 'HELP_SCENE_MEDIATOR');
	    };
	    GameHelpCommad.NAME = 'GAME_HELP_COMMAD';
	    return GameHelpCommad;
	}(puremvc.SimpleCommand));
	exports.GameHelpCommad = GameHelpCommad;


/***/ },
/* 23 */
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
	        return ['CHANGE_SCENE'];
	    };
	    DirectorMediator.prototype.handleNotification = function (notification) {
	        switch (notification.getName()) {
	            case 'CHANGE_SCENE':
	                alert('CHANGE_SCENE');
	                alert(notification.getBody());
	                this.changeScene(notification.getBody());
	                break;
	        }
	    };
	    DirectorMediator.prototype.onRegister = function () {
	        var sprite = new egret.Sprite();
	        this.setViewComponent(sprite);
	    };
	    DirectorMediator.prototype.onRemove = function () {
	    };
	    DirectorMediator.prototype.changeScene = function (mediatorName) {
	        if (this._activeSceneMediator) {
	            this.getViewComponent().removeChildren();
	            this._activeSceneMediator.destroyScene();
	        }
	        var sceneMediator = this.facade.retrieveMediator(mediatorName);
	        if (sceneMediator) {
	            this._activeSceneMediator = sceneMediator;
	            sceneMediator.renderScene(this.getViewComponent().width, this.getViewComponent().height);
	            this.getViewComponent().addChild(sceneMediator.getViewComponent());
	        }
	    };
	    DirectorMediator.NAME = 'DIRECTOR_MEDIATOR';
	    return DirectorMediator;
	}(puremvc.Mediator));
	exports.DirectorMediator = DirectorMediator;


/***/ }
/******/ ]);