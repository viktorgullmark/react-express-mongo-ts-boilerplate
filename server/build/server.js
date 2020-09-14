/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.dev.ts":
/*!******************************!*\
  !*** ./config/config.dev.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst devConfig = {\r\n    production: true,\r\n    session: {\r\n        name: 'sessionId',\r\n        secret: '308398zjij18',\r\n        collection: 'sessions',\r\n        cookie: {\r\n            maxAge: 7 * 24 * (60 * 60 * 1000),\r\n            httpOnly: true,\r\n            secure: false,\r\n        },\r\n    },\r\n    db: {\r\n        uri: process.env.MONGO_URI || 'mongodb://localhost:27017',\r\n        options: {\r\n            user: process.env.MONGO_USERNAME || '',\r\n            pass: process.env.MONGO_USERNAME || '',\r\n            keepAlive: true,\r\n            useNewUrlParser: true,\r\n            useUnifiedTopology: true,\r\n        },\r\n    },\r\n};\r\nexports.default = devConfig;\r\n\n\n//# sourceURL=webpack:///./config/config.dev.ts?");

/***/ }),

/***/ "./config/config.prod.ts":
/*!*******************************!*\
  !*** ./config/config.prod.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst prodConfig = {\r\n    production: true,\r\n    session: {\r\n        name: 'sessionId',\r\n        secret: '98098zm2j8',\r\n        collection: 'sessions',\r\n        cookie: {\r\n            maxAge: 7 * 24 * (60 * 60 * 1000),\r\n            httpOnly: true,\r\n            secure: false,\r\n        },\r\n    },\r\n    db: {\r\n        uri: process.env.MONGO_URI || '<mongodb uri here>',\r\n        options: {\r\n            user: process.env.MONGO_USERNAME || '',\r\n            pass: process.env.MONGO_USERNAME || '',\r\n            keepAlive: true,\r\n            useNewUrlParser: true,\r\n            useUnifiedTopology: true,\r\n        },\r\n    },\r\n};\r\nexports.default = prodConfig;\r\n\n\n//# sourceURL=webpack:///./config/config.prod.ts?");

/***/ }),

/***/ "./config/config.ts":
/*!**************************!*\
  !*** ./config/config.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst config_dev_1 = __importDefault(__webpack_require__(/*! ./config.dev */ \"./config/config.dev.ts\"));\r\nconst config_prod_1 = __importDefault(__webpack_require__(/*! ./config.prod */ \"./config/config.prod.ts\"));\r\nconst selectedConfiguration =  false\r\n    ? undefined\r\n    : config_dev_1.default;\r\nexports.default = selectedConfiguration;\r\n\n\n//# sourceURL=webpack:///./config/config.ts?");

/***/ }),

/***/ "./server.ts":
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst config_1 = __importDefault(__webpack_require__(/*! ./config/config */ \"./config/config.ts\"));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst express_session_1 = __importDefault(__webpack_require__(/*! express-session */ \"express-session\"));\r\nconst connect_mongo_1 = __importDefault(__webpack_require__(/*! connect-mongo */ \"connect-mongo\"));\r\nconst MongoStore = connect_mongo_1.default(express_session_1.default);\r\nconst app = express_1.default();\r\nconst PORT = 8000;\r\nmongoose_1.default.connect(config_1.default.db.uri, config_1.default.db.options, (err) => {\r\n    if (err) {\r\n        console.log('could not connect to mongodb');\r\n    }\r\n    mongoose_1.default.set('debug', !config_1.default.production);\r\n});\r\napp.use(body_parser_1.default.json());\r\napp.use(body_parser_1.default.urlencoded({ extended: false }));\r\napp.use(express_session_1.default({\r\n    saveUninitialized: true,\r\n    resave: false,\r\n    secret: config_1.default.session.secret,\r\n    store: new MongoStore({\r\n        mongooseConnection: mongoose_1.default.connection,\r\n        collection: config_1.default.session.collection,\r\n        autoReconnect: true,\r\n    }),\r\n    cookie: config_1.default.session.cookie,\r\n    name: config_1.default.session.name,\r\n}));\r\napp.get('/', (_req, res) => {\r\n    res.send({\r\n        message: 'hello world',\r\n    });\r\n});\r\napp.listen(PORT, () => {\r\n    console.log('server started at http://localhost:' + PORT);\r\n});\r\n\n\n//# sourceURL=webpack:///./server.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-mongo\");\n\n//# sourceURL=webpack:///external_%22connect-mongo%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });