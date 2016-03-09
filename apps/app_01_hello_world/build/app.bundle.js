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
/***/ function(module, exports) {

	/// <reference path="../../../libs/egret/build/egret/egret.d.ts"/>
	/// <reference path="../../../libs/egret/build/tween/tween.d.ts"/>
	/// <reference path="../../../libs/egret//build/res/res.d.ts"/>
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	        var stageW = this.stage.stageWidth;
	        var stageH = this.stage.stageHeight;
	        var colorLabel = new egret.TextField();
	        colorLabel.textColor = 0xffffff;
	        colorLabel.textAlign = "center";
	        colorLabel.text = "Hello World!";
	        colorLabel.size = 40;
	        colorLabel.x = stageW - colorLabel.width >> 1;
	        colorLabel.y = (stageH - colorLabel.height >> 1) + 50;
	        this.addChild(colorLabel);
	    };
	    return App;
	}(egret.DisplayObjectContainer));
	egret.registerClass(App, "App");
	window["App"] = App;


/***/ }
/******/ ]);