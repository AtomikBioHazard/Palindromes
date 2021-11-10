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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_capicua_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/capicua.js */ \"./src/modules/capicua.js\");\n/* harmony import */ var _modules_dark_mode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dark-mode.js */ \"./src/modules/dark-mode.js\");\n/* harmony import */ var _modules_input_validation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/input-validation.js */ \"./src/modules/input-validation.js\");\n/* harmony import */ var _modules_palindrome_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/palindrome.js */ \"./src/modules/palindrome.js\");\n\n\n\n\nvar d = document;\nd.addEventListener(\"DOMContentLoaded\", function (e) {\n  (0,_modules_input_validation_js__WEBPACK_IMPORTED_MODULE_2__.validator)();\n});\nd.addEventListener(\"keyup\", function (e) {\n  if (e.target.name === \"palindrome\") {\n    (0,_modules_palindrome_js__WEBPACK_IMPORTED_MODULE_3__.palindrome)();\n  } else if (e.target.name === \"capicua\") {\n    (0,_modules_capicua_js__WEBPACK_IMPORTED_MODULE_0__.capicua)();\n  }\n\n  ;\n});\n(0,_modules_dark_mode_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\".dark-mode\", \"dark-theme\");\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/capicua.js":
/*!********************************!*\
  !*** ./src/modules/capicua.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capicua\": () => (/* binding */ capicua)\n/* harmony export */ });\nvar d = document;\nfunction capicua() {\n  var $response = d.querySelector(\".verifier-response\");\n  var amount = d.querySelector(\".capicua\").value,\n      reverse = amount.split(\"\").reverse().join(\"\");\n\n  if (amount.length <= 2) {\n    $response.classList.remove(\"none\");\n    $response.innerHTML = \"Enter more numbers\";\n  } else if (amount.length >= 3 && amount === reverse) {\n    $response.classList.remove(\"none\");\n    $response.innerHTML = \"<p>Original: <b>\\\"\".concat(amount, \"\\\" IS equal to <b>\\\"\").concat(reverse, \"\\\"</b>. The number is a capicua number. YAY!</b></p>\");\n  } else {\n    $response.classList.remove(\"none\");\n    $response.innerHTML = \"<p>Original: <b>\\\"\".concat(amount, \"\\\" is NOT equal to <b>\\\"\").concat(reverse, \"\\\"</b>. What a bummer =(</b></p>\");\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/capicua.js?");

/***/ }),

/***/ "./src/modules/dark-mode.js":
/*!**********************************!*\
  !*** ./src/modules/dark-mode.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ darkMode)\n/* harmony export */ });\nvar d = document,\n    ls = localStorage;\nfunction darkMode(btn, classDark) {\n  var $themeBtn = d.querySelector(btn),\n      $selectors = d.querySelectorAll(\"[data-dark]\");\n  var moon = \"🌙\",\n      sun = \"☀️\";\n\n  var lightMode = function lightMode() {\n    $selectors.forEach(function (el) {\n      return el.classList.remove(classDark);\n    });\n    $themeBtn.textContent = moon;\n    ls.setItem(\"theme\", \"light\");\n  };\n\n  var darkerMode = function darkerMode() {\n    $selectors.forEach(function (el) {\n      return el.classList.add(classDark);\n    });\n    $themeBtn.textContent = sun;\n    ls.setItem(\"theme\", \"dark\");\n  };\n\n  d.addEventListener(\"click\", function (e) {\n    if (e.target.matches(btn)) {\n      if ($themeBtn.textContent === moon) {\n        darkerMode();\n      } else {\n        lightMode();\n      }\n    }\n  });\n  d.addEventListener(\"DOMContentLoaded\", function (e) {\n    if (ls.getItem(\"theme\") === null) ls.setItem(\"theme\", \"light\");\n    if (ls.getItem(\"theme\") === \"light\") lightMode();\n    if (ls.getItem(\"theme\") === \"dark\") darkerMode();\n  });\n}\n\n//# sourceURL=webpack:///./src/modules/dark-mode.js?");

/***/ }),

/***/ "./src/modules/input-validation.js":
/*!*****************************************!*\
  !*** ./src/modules/input-validation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validator\": () => (/* binding */ validator)\n/* harmony export */ });\nvar d = document,\n    $inputs = d.querySelectorAll(\".verifier-form [required]\");\nfunction validator() {\n  $inputs.forEach(function (input) {\n    var $span = d.createElement(\"span\");\n    $span.id = input.name;\n    $span.textContent = input.title;\n    $span.classList.add(\"verifier-form-error\", \"none\");\n    input.insertAdjacentElement(\"afterend\", $span);\n  });\n  d.addEventListener(\"keyup\", function (e) {\n    if (e.target.matches(\".verifier-form [required]\")) {\n      var $input = e.target,\n          pattern = $input.pattern || $input.dataset.pattern;\n\n      if (pattern && $input.value !== \"\") {\n        var regex = new RegExp(pattern);\n        return !regex.exec($input.value) ? d.getElementById($input.name).classList.add(\"is-active\") : d.getElementById($input.name).classList.remove(\"is-active\");\n      }\n\n      if (!pattern && $input.value !== \"\") {\n        return $input.value === \"\" ? d.getElementById($input.name).classList.add(\"is-active\") : d.getElementById($input.name).classList.remove(\"is-active\");\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/modules/input-validation.js?");

/***/ }),

/***/ "./src/modules/palindrome.js":
/*!***********************************!*\
  !*** ./src/modules/palindrome.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"palindrome\": () => (/* binding */ palindrome)\n/* harmony export */ });\nvar d = document;\nfunction palindrome() {\n  var $response = d.querySelector(\".verifier-response\");\n  var amount = d.querySelector(\".palindrome\").value.toLowerCase(),\n      reverse = amount.split(\"\").reverse().join(\"\");\n\n  if (amount.length <= 2) {\n    $response.classList.remove(\"none\");\n    $response.innerHTML = \"Keep typing\";\n  } else if (amount.length >= 3 && amount === reverse) {\n    $response.classList.remove(\"none\");\n    $response.innerHTML = \"<p>Original: <b>\\\"\".concat(amount, \"\\\"</b> IS equal to <b>\\\"\").concat(reverse, \"\\\"</b>. You found a Palindrome. YAY!</p>\");\n  } else {\n    $response.classList.remove(\"none\");\n    $response.innerHTML = \"<p>Original: <b>\\\"\".concat(amount, \"\\\"</b> IS NOT equal to <b>\\\"\").concat(reverse, \"\\\"</b>. What a bummer =(</p>\");\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/palindrome.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;