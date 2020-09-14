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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst devConfig = {\r\n    db: {\r\n        uri: process.env.MONGO_URI || 'mongodb://localhost:27017',\r\n        options: {\r\n            user: process.env.MONGO_USERNAME || '',\r\n            pass: process.env.MONGO_USERNAME || '',\r\n            dbName: 'dev',\r\n            keepAlive: true,\r\n            useNewUrlParser: true,\r\n            useUnifiedTopology: true,\r\n            useCreateIndex: true\r\n        },\r\n    },\r\n    jwt: {\r\n        secret: 'jwtSecret',\r\n        expiration: 360000,\r\n    },\r\n};\r\nexports.default = devConfig;\r\n\n\n//# sourceURL=webpack:///./config/config.dev.ts?");

/***/ }),

/***/ "./config/config.prod.ts":
/*!*******************************!*\
  !*** ./config/config.prod.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst prodConfig = {\r\n    db: {\r\n        uri: process.env.MONGO_URI || '<mongodb uri here>',\r\n        options: {\r\n            user: process.env.MONGO_USERNAME || '',\r\n            pass: process.env.MONGO_USERNAME || '',\r\n            dbName: 'prod',\r\n            keepAlive: true,\r\n            useNewUrlParser: true,\r\n            useUnifiedTopology: true,\r\n            useCreateIndex: true,\r\n        },\r\n    },\r\n    jwt: {\r\n        secret: 'jwtSecret',\r\n        expiration: 360000,\r\n    },\r\n};\r\nexports.default = prodConfig;\r\n\n\n//# sourceURL=webpack:///./config/config.prod.ts?");

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

/***/ "./core/auth/strategies/local.ts":
/*!***************************************!*\
  !*** ./core/auth/strategies/local.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst passport_1 = __importDefault(__webpack_require__(/*! passport */ \"passport\"));\r\nconst passport_local_1 = __importDefault(__webpack_require__(/*! passport-local */ \"passport-local\"));\r\nconst user_1 = __importDefault(__webpack_require__(/*! ../../../models/user */ \"./models/user.ts\"));\r\nconst LocalStrategy = passport_local_1.default.Strategy;\r\npassport_1.default.use(new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {\r\n    user_1.default.findOne({ username: username.toLowerCase() }, (err, user) => {\r\n        if (err) {\r\n            return done(err);\r\n        }\r\n        if (!user) {\r\n            return done(undefined, false, {\r\n                message: `username ${username} not found.`,\r\n            });\r\n        }\r\n        user.comparePassword(password, (err, isMatch) => {\r\n            if (err) {\r\n                return done(err);\r\n            }\r\n            if (isMatch) {\r\n                return done(undefined, user);\r\n            }\r\n            return done(undefined, false, {\r\n                message: 'Invalid username or password.',\r\n            });\r\n        });\r\n    });\r\n}));\r\n\n\n//# sourceURL=webpack:///./core/auth/strategies/local.ts?");

/***/ }),

/***/ "./core/init.ts":
/*!**********************!*\
  !*** ./core/init.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.initAuth = exports.initMongoose = exports.initMiddleware = void 0;\r\nconst body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\r\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst passport_1 = __importDefault(__webpack_require__(/*! passport */ \"passport\"));\r\nconst config_1 = __importDefault(__webpack_require__(/*! ../config/config */ \"./config/config.ts\"));\r\nconst utils_1 = __webpack_require__(/*! ../utils */ \"./utils.ts\");\r\nexports.initMiddleware = (app) => {\r\n    app.use(cors_1.default());\r\n    app.use(body_parser_1.default.json());\r\n    app.use(body_parser_1.default.urlencoded({ extended: false }));\r\n};\r\nexports.initMongoose = () => {\r\n    mongoose_1.default.connect(config_1.default.db.uri, config_1.default.db.options, (err) => {\r\n        if (err) {\r\n            console.log('could not connect to mongodb');\r\n        }\r\n        mongoose_1.default.set('debug', !utils_1.isProduction);\r\n    });\r\n};\r\nexports.initAuth = (app) => {\r\n    app.use(passport_1.default.initialize());\r\n};\r\n\n\n//# sourceURL=webpack:///./core/init.ts?");

/***/ }),

/***/ "./models/user.ts":
/*!************************!*\
  !*** ./models/user.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst bcryptjs_1 = __importDefault(__webpack_require__(/*! bcryptjs */ \"bcryptjs\"));\r\nconst userSchema = new mongoose_1.Schema({\r\n    username: {\r\n        type: String,\r\n        required: true,\r\n        unique: true,\r\n    },\r\n    password: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    date: {\r\n        type: Date,\r\n        default: Date.now,\r\n    },\r\n});\r\nuserSchema.pre('save', function save(next) {\r\n    const user = this;\r\n    bcryptjs_1.default.genSalt(10, (err, salt) => {\r\n        if (err) {\r\n            return next(err);\r\n        }\r\n        bcryptjs_1.default.hash(this.password, salt, (err, hash) => {\r\n            if (err) {\r\n                return next(err);\r\n            }\r\n            user.password = hash;\r\n            next();\r\n        });\r\n    });\r\n});\r\nuserSchema.methods.comparePassword = function (candidatePassword, callback) {\r\n    bcryptjs_1.default.compare(candidatePassword, this.password, (err, isMatch) => {\r\n        callback(err, isMatch);\r\n    });\r\n};\r\nconst User = mongoose_1.model('User', userSchema);\r\nexports.default = User;\r\n\n\n//# sourceURL=webpack:///./models/user.ts?");

/***/ }),

/***/ "./routes/auth.ts":
/*!************************!*\
  !*** ./routes/auth.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst express_validator_1 = __webpack_require__(/*! express-validator */ \"express-validator\");\r\nconst http_status_codes_1 = __importDefault(__webpack_require__(/*! http-status-codes */ \"http-status-codes\"));\r\nconst passport_1 = __importDefault(__webpack_require__(/*! passport */ \"passport\"));\r\n__webpack_require__(/*! ../core/auth/strategies/local */ \"./core/auth/strategies/local.ts\");\r\nconst jwt = __importStar(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\r\nconst config_1 = __importDefault(__webpack_require__(/*! ../config/config */ \"./config/config.ts\"));\r\nconst router = express_1.Router();\r\n// @route   POST api/auth/local\r\n// @desc    Login with local user\r\n// @access  Public\r\nrouter.post('/local', [\r\n    express_validator_1.check('username', 'Username is required').exists(),\r\n    express_validator_1.check('password', 'Password is required').exists(),\r\n], (req, res, next) => {\r\n    const errors = express_validator_1.validationResult(req);\r\n    if (!errors.isEmpty()) {\r\n        return res\r\n            .status(http_status_codes_1.default.BAD_REQUEST)\r\n            .json({ errors: errors.array() });\r\n    }\r\n    passport_1.default.authenticate('local', (err, user, info) => {\r\n        if (!user || err) {\r\n            return res.status(http_status_codes_1.default.UNAUTHORIZED).send();\r\n        }\r\n        const token = jwt.sign({ username: user.username }, config_1.default.jwt.secret);\r\n        return res.status(http_status_codes_1.default.OK).send({ token: token });\r\n    })(req, res, next);\r\n});\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./routes/auth.ts?");

/***/ }),

/***/ "./routes/user.ts":
/*!************************!*\
  !*** ./routes/user.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst express_validator_1 = __webpack_require__(/*! express-validator */ \"express-validator\");\r\nconst http_status_codes_1 = __importDefault(__webpack_require__(/*! http-status-codes */ \"http-status-codes\"));\r\n__webpack_require__(/*! ../core/auth/strategies/local */ \"./core/auth/strategies/local.ts\");\r\nconst user_1 = __importDefault(__webpack_require__(/*! ../models/user */ \"./models/user.ts\"));\r\nconst jwt = __importStar(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\r\nconst config_1 = __importDefault(__webpack_require__(/*! ../config/config */ \"./config/config.ts\"));\r\nconst router = express_1.Router();\r\n// @route   POST api/user/local\r\n// @desc    Register new user\r\n// @access  Public\r\nrouter.post('/register', [\r\n    express_validator_1.check('username', 'Username is required').exists(),\r\n    express_validator_1.check('password', 'Password is required').exists(),\r\n], (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const errors = express_validator_1.validationResult(req);\r\n    if (!errors.isEmpty()) {\r\n        return res\r\n            .status(http_status_codes_1.default.BAD_REQUEST)\r\n            .json({ errors: errors.array() });\r\n    }\r\n    try {\r\n        yield user_1.default.create({\r\n            username: req.body.username,\r\n            password: req.body.password,\r\n        });\r\n        const token = jwt.sign({ username: req.body.username, scope: req.body.scope }, config_1.default.jwt.secret);\r\n        return res.status(http_status_codes_1.default.OK).send({ token: token });\r\n    }\r\n    catch (err) {\r\n        return res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).send();\r\n    }\r\n}));\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./routes/user.ts?");

/***/ }),

/***/ "./server.ts":
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst init_1 = __webpack_require__(/*! ./core/init */ \"./core/init.ts\");\r\nconst auth_1 = __importDefault(__webpack_require__(/*! ./routes/auth */ \"./routes/auth.ts\"));\r\nconst user_1 = __importDefault(__webpack_require__(/*! ./routes/user */ \"./routes/user.ts\"));\r\nconst app = express_1.default();\r\nconst PORT = 8000;\r\ninit_1.initMongoose();\r\ninit_1.initMiddleware(app);\r\ninit_1.initAuth(app);\r\napp.get('/', (_req, res) => {\r\n    res.send({\r\n        message: 'API running',\r\n    });\r\n});\r\napp.use('/api/auth', auth_1.default);\r\napp.use('/api/user', user_1.default);\r\napp.listen(PORT, () => {\r\n    console.log('server started at http://localhost:' + PORT);\r\n});\r\n\n\n//# sourceURL=webpack:///./server.ts?");

/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.isProduction = void 0;\r\nexports.isProduction = \"development\" === 'production';\r\n\n\n//# sourceURL=webpack:///./utils.ts?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validator\");\n\n//# sourceURL=webpack:///external_%22express-validator%22?");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status-codes\");\n\n//# sourceURL=webpack:///external_%22http-status-codes%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ })

/******/ });