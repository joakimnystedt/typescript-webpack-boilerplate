/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/exampleHelper.ts":
/*!**************************************!*\
  !*** ./src/helpers/exampleHelper.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeAges\": () => (/* binding */ mergeAges)\n/* harmony export */ });\nfunction mergeAges(example) {\r\n    var age = 0;\r\n    example.map(function (x) { return (age = age + x.age); });\r\n    return age;\r\n}\r\n\n\n//# sourceURL=webpack://boilerplate/./src/helpers/exampleHelper.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_exampleService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/exampleService */ \"./src/services/exampleService.ts\");\n\r\nwindow.addEventListener('DOMContentLoaded', function (event) {\r\n    console.log('DOM fully loaded and parsed');\r\n    console.log(_services_exampleService__WEBPACK_IMPORTED_MODULE_0__.getPersons, 'All persons in an array');\r\n    console.log(_services_exampleService__WEBPACK_IMPORTED_MODULE_0__.getMergedAges, 'All ages merged!');\r\n});\r\n\n\n//# sourceURL=webpack://boilerplate/./src/index.ts?");

/***/ }),

/***/ "./src/repositories/exampleRespository.ts":
/*!************************************************!*\
  !*** ./src/repositories/exampleRespository.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchFromApi\": () => (/* binding */ fetchFromApi)\n/* harmony export */ });\nfunction fetchFromApi() {\r\n    // mocked api-response\r\n    var apiResponse = [\r\n        {\r\n            name: 'Ryan',\r\n            age: 25,\r\n        },\r\n        {\r\n            name: 'Paul',\r\n            age: 30,\r\n        },\r\n        {\r\n            name: 'Phil',\r\n            age: 40,\r\n        },\r\n        {\r\n            name: 'Eric',\r\n            age: 35,\r\n        },\r\n    ];\r\n    // map response\r\n    return apiResponse.map(function (item) {\r\n        var _a, _b;\r\n        return {\r\n            name: (_a = item.name) !== null && _a !== void 0 ? _a : '',\r\n            age: (_b = item.age) !== null && _b !== void 0 ? _b : 0,\r\n        };\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://boilerplate/./src/repositories/exampleRespository.ts?");

/***/ }),

/***/ "./src/services/exampleService.ts":
/*!****************************************!*\
  !*** ./src/services/exampleService.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPersons\": () => (/* binding */ getPersons),\n/* harmony export */   \"getMergedAges\": () => (/* binding */ getMergedAges)\n/* harmony export */ });\n/* harmony import */ var _helpers_exampleHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/exampleHelper */ \"./src/helpers/exampleHelper.ts\");\n/* harmony import */ var _repositories_exampleRespository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repositories/exampleRespository */ \"./src/repositories/exampleRespository.ts\");\n\r\n\r\nvar getPersons = (0,_repositories_exampleRespository__WEBPACK_IMPORTED_MODULE_1__.fetchFromApi)();\r\nvar getMergedAges = (0,_helpers_exampleHelper__WEBPACK_IMPORTED_MODULE_0__.mergeAges)(getPersons);\r\n\n\n//# sourceURL=webpack://boilerplate/./src/services/exampleService.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;