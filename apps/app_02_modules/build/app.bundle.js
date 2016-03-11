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
	        director.render();
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
	var DirectorMediator_1 = __webpack_require__(5);
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
	    };
	    AppFacade.getInstance = function (key) {
	        var instanceMap = puremvc.Facade.instanceMap;
	        var instance = instanceMap[key];
	        if (instance) {
	            return instance;
	        }
	        return instanceMap[key] = new AppFacade(key);
	    };
	    AppFacade.STARTUP_COMMAND = 'STARTUP_COMMAND:';
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
	var appProxy_1 = __webpack_require__(4);
	var StartupCommand = (function (_super) {
	    __extends(StartupCommand, _super);
	    function StartupCommand() {
	        _super.call(this);
	    }
	    StartupCommand.prototype.execute = function (notification) {
	        this.facade.registerProxy(new appProxy_1.AppProxy());
	    };
	    StartupCommand.NAME = 'STARTUP_COMMAND';
	    return StartupCommand;
	}(puremvc.SimpleCommand));
	exports.StartupCommand = StartupCommand;


/***/ },
/* 4 */
/***/ function(module, exports) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var AppProxy = (function (_super) {
	    __extends(AppProxy, _super);
	    function AppProxy() {
	        _super.call(this, AppProxy.NAME);
	        this._data = {};
	    }
	    AppProxy.prototype.onRegister = function () {
	        this._loadData();
	    };
	    AppProxy.prototype._loadData = function () {
	        this._data.AppName = 'AppName';
	        this._data.AppVersion = 'AppVersion';
	        this._data.AppDescription = 'AppDescription';
	    };
	    AppProxy.prototype.getAppName = function () {
	        return this._data.AppName;
	    };
	    AppProxy.prototype.getAppVersion = function () {
	        return this._data.AppVersion;
	    };
	    AppProxy.prototype.getAppDescription = function () {
	        return this._data.AppDescription;
	    };
	    AppProxy.NAME = 'AppProxy';
	    return AppProxy;
	}(puremvc.Proxy));
	exports.AppProxy = AppProxy;


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
	var directorComponent_1 = __webpack_require__(6);
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
	                break;
	        }
	    };
	    DirectorMediator.prototype.onRegister = function () {
	        this.setViewComponent(new directorComponent_1.DirectorComponent());
	    };
	    DirectorMediator.prototype.onRemove = function () {
	    };
	    DirectorMediator.NAME = 'DIRECTOR_MEDIATOR';
	    return DirectorMediator;
	}(puremvc.Mediator));
	exports.DirectorMediator = DirectorMediator;


/***/ },
/* 6 */
/***/ function(module, exports) {

	///<reference path="../../../../../typings/main.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var DirectorComponent = (function (_super) {
	    __extends(DirectorComponent, _super);
	    function DirectorComponent() {
	        _super.call(this);
	    }
	    DirectorComponent.prototype.render = function () {
	        var colorLabel = new egret.TextField();
	        colorLabel.textColor = 0xffffff;
	        colorLabel.textAlign = "center";
	        colorLabel.text = "Hello World!";
	        colorLabel.size = 40;
	        colorLabel.x = this.width - colorLabel.width >> 1;
	        colorLabel.y = (this.height - colorLabel.height >> 1) + 50;
	        this.addChild(colorLabel);
	    };
	    return DirectorComponent;
	}(egret.Sprite));
	exports.DirectorComponent = DirectorComponent;


/***/ }
/******/ ]);