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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/home */ \"./src/tabs/home.js\");\n/* harmony import */ var _tabs_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/menu */ \"./src/tabs/menu.js\");\n/* harmony import */ var _tabs_chefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/chefs */ \"./src/tabs/chefs.js\");\n/* harmony import */ var _tabs_contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/contacts */ \"./src/tabs/contacts.js\");\n/* harmony import */ var _tabs_aboutus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/aboutus */ \"./src/tabs/aboutus.js\");\n\n\n\n\n\n\n\nObject(_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\nconst content = document.getElementById(\"content\");\nconst variableContent = document.getElementById(\"varContent\");\n\nconst description = document.getElementById('descript');\nconst gallery = document.getElementById('gallery');\n\nconst homeBtn = document.getElementById(\"homeBtn\")\nconst menuBtn = document.getElementById(\"menuBtn\")\nconst chefsBtn = document.getElementById(\"chefsBtn\")\nconst contactsBtn = document.getElementById(\"contactsBtn\")\nconst aboutUsBtn = document.getElementById(\"aboutUsBtn\")\n\nhomeBtn.addEventListener('click', (e) => {\n\tvariableContent.innerHTML = \"\"\n\tObject(_tabs_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n})\n\nmenuBtn.addEventListener('click', (e) => {\n\tvariableContent.innerHTML = \"\"\n\tObject(_tabs_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(variableContent)\n})\n\nchefsBtn.addEventListener('click', (e) => {\n\tvariableContent.innerHTML = \"\"\n\tObject(_tabs_chefs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n})\n\ncontactsBtn.addEventListener('click', (e) => {\n\tvariableContent.innerHTML = \"\"\n\tObject(_tabs_contacts__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n})\n\naboutUsBtn.addEventListener('click', (e) => {\n\tvariableContent.innerHTML = \"\"\n\tObject(_tabs_aboutus__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst pageLoad = () => {\n\tconsole.log(\"home page loaded\")\n\tconst content = document.getElementById(\"content\");\n\n\tconst nav = document.createElement('div');\n\tconst ul = document.createElement('ul');\n\tconst link1 = document.createElement('button');\n\tconst home = document.createElement('li')\n\tconst link2 = document.createElement('button');\n\tconst menu = document.createElement('li');\n\tconst link3 = document.createElement('button');\n\tconst chefs = document.createElement('li')\n\tconst link4 = document.createElement('button');\n\tconst contacts = document.createElement('li')\n\tconst link5 = document.createElement('button');\n\tconst about = document.createElement('li');\n\tnav.setAttribute(\"id\",\"navbar\");\n\tlink1.setAttribute(\"id\",\"homeBtn\");\n\tlink2.setAttribute(\"id\",\"menuBtn\");\n\tlink3.setAttribute(\"id\",\"chefsBtn\");\n\tlink4.setAttribute(\"id\",\"contactsBtn\");\n\tlink5.setAttribute(\"id\",\"aboutUsBtn\");\n\thome.innerHTML = \"Home\"\n\tmenu.innerHTML = \"Menu\"\n\tchefs.innerHTML = \"Chefs\"\n\tcontacts.innerHTML = \"Contacts\"\n\tabout.innerHTML = \"About\"\n\tlink1.appendChild(home)\n\tlink2.appendChild(menu)\n\tlink3.appendChild(chefs)\n\tlink4.appendChild(contacts)\n\tlink5.appendChild(about)\n\tul.appendChild(link1)\n\tul.appendChild(link2)\n\tul.appendChild(link3)\n\tul.appendChild(link4)\n\tul.appendChild(link5)\n\tnav.appendChild(ul);\n\tcontent.appendChild(nav)\n\n\tconst variableContent = document.createElement('div');\n\tvariableContent.setAttribute(\"id\",\"varContent\");\n\n\tconst description = document.createElement('div');\n\tconst section1 = document.createElement('section');\n\tconst img = document.createElement('img');\n\tconst section2 = document.createElement('section');\n\tconst header = document.createElement('header');\n\tconst title = document.createElement('h1');\n\tconst para = document.createElement('p');\n\tdescription.setAttribute(\"id\",\"descript\");\n\tdescription.setAttribute(\"class\", \"group\");\n\tsection1.setAttribute(\"id\",\"logo\");\n\timg.setAttribute(\"src\",\"../src/assets/losPolosHermanos.jpg\")\n\tsection2.setAttribute(\"id\",\"info\");\n\ttitle.innerHTML = \"Los Pollos Hermanos\";\n\tpara.innerHTML = \"Los Pollos Hermanos (Spanish for The Chicken Brothers) is a fried chicken fast food restaurant that originated in the television series Breaking Bad and Better Call Saul. In the fictional universe of Breaking Bad, Los Pollos Hermanos is a front organization for Gus Fring's meth manufacturing and distribution operation. The set used for the restaurant in the show was at a Twisters branch in South Valley, New Mexico, and Twisters has seen an increase in business attributed to being associated with Breaking Bad. Due to the show's popularity, Los Pollos Hermanos has appeared on numerous occasions and locations as a real-life pop-up restaurant.\"\n\theader.appendChild(title);\n\tsection1.appendChild(img);\n\tsection2.appendChild(header);\n\tsection2.appendChild(para);\n\tdescription.appendChild(section1);\n\tdescription.appendChild(section2);\n\tvariableContent.appendChild(description)\n\n\n\tconst gallery = document.createElement('div');\n\tconst slide1 = document.createElement('img');\n\tconst slide2 = document.createElement('img');\n\tconst slide3 = document.createElement('img');\n\tgallery.setAttribute(\"id\",\"gallery\");\n\tslide1.setAttribute(\"src\",\"../src/assets/lph2.jpg\")\n\tslide2.setAttribute(\"src\",\"../src/assets/lph3.jpg\")\n\tslide3.setAttribute(\"src\",\"../src/assets/lph4.jpg\")\n\tgallery.appendChild(slide1);\n\tgallery.appendChild(slide2);\n\tgallery.appendChild(slide3)\n\tvariableContent.appendChild(gallery)\n\tcontent.appendChild(variableContent)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pageLoad);\n\n//# sourceURL=webpack:///./src/pageLoad.js?");

/***/ }),

/***/ "./src/tabs/aboutus.js":
/*!*****************************!*\
  !*** ./src/tabs/aboutus.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst about = () => {\n\tconst content = document.getElementById(\"content\");\n\tconst variableContent = document.getElementById(\"varContent\");\n\n\tconst div = document.createElement('div')\n\tdiv.innerHTML = \"about us tab\"\n\tvariableContent.appendChild(div)\n\tcontent.appendChild(variableContent)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\n\n//# sourceURL=webpack:///./src/tabs/aboutus.js?");

/***/ }),

/***/ "./src/tabs/chefs.js":
/*!***************************!*\
  !*** ./src/tabs/chefs.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst chefs = () => {\n\tconst content = document.getElementById(\"content\");\n\tconst variableContent = document.getElementById(\"varContent\");\n\n\tconst div = document.createElement('div')\n\tdiv.innerHTML = \"chef tab\"\n\tvariableContent.appendChild(div)\n\tcontent.appendChild(variableContent)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (chefs);\n\n//# sourceURL=webpack:///./src/tabs/chefs.js?");

/***/ }),

/***/ "./src/tabs/contacts.js":
/*!******************************!*\
  !*** ./src/tabs/contacts.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contacts = () => {\n\tconst content = document.getElementById(\"content\");\n\tconst variableContent = document.getElementById(\"varContent\");\n\n\tconst div = document.createElement('div')\n\tdiv.innerHTML = \"contact tab\"\n\tvariableContent.appendChild(div)\n\tcontent.appendChild(variableContent)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contacts);\n\n//# sourceURL=webpack:///./src/tabs/contacts.js?");

/***/ }),

/***/ "./src/tabs/home.js":
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst home = () => {\n\tconst content = document.getElementById(\"content\");\n\tconst variableContent = document.getElementById(\"varContent\");\n\t\n\tconst description = document.createElement('div');\n\tconst section1 = document.createElement('section');\n\tconst img = document.createElement('img');\n\tconst section2 = document.createElement('section');\n\tconst header = document.createElement('header');\n\tconst title = document.createElement('h1');\n\tconst para = document.createElement('p');\n\tdescription.setAttribute(\"id\",\"descript\");\n\tdescription.setAttribute(\"class\", \"group\");\n\tsection1.setAttribute(\"id\",\"logo\");\n\timg.setAttribute(\"src\",\"../src/assets/losPolosHermanos.jpg\")\n\tsection2.setAttribute(\"id\",\"info\");\n\ttitle.innerHTML = \"Los Pollos Hermanos\";\n\tpara.innerHTML = \"Los Pollos Hermanos (Spanish for The Chicken Brothers) is a fried chicken fast food restaurant that originated in the television series Breaking Bad and Better Call Saul. In the fictional universe of Breaking Bad, Los Pollos Hermanos is a front organization for Gus Fring's meth manufacturing and distribution operation. The set used for the restaurant in the show was at a Twisters branch in South Valley, New Mexico, and Twisters has seen an increase in business attributed to being associated with Breaking Bad. Due to the show's popularity, Los Pollos Hermanos has appeared on numerous occasions and locations as a real-life pop-up restaurant.\"\n\theader.appendChild(title);\n\tsection1.appendChild(img);\n\tsection2.appendChild(header);\n\tsection2.appendChild(para);\n\tdescription.appendChild(section1);\n\tdescription.appendChild(section2);\n\tvariableContent.appendChild(description)\n\n\n\tconst gallery = document.createElement('div');\n\tconst slide1 = document.createElement('img');\n\tconst slide2 = document.createElement('img');\n\tconst slide3 = document.createElement('img');\n\tgallery.setAttribute(\"id\",\"gallery\");\n\tslide1.setAttribute(\"src\",\"../src/assets/lph2.jpg\")\n\tslide2.setAttribute(\"src\",\"../src/assets/lph3.jpg\")\n\tslide3.setAttribute(\"src\",\"../src/assets/lph4.jpg\")\n\tgallery.appendChild(slide1);\n\tgallery.appendChild(slide2);\n\tgallery.appendChild(slide3)\n\tvariableContent.appendChild(gallery)\n\tcontent.appendChild(variableContent)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/tabs/home.js?");

/***/ }),

/***/ "./src/tabs/menu.js":
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menu = () => {\n\tconst content = document.getElementById(\"content\");\n\tconst variableContent = document.getElementById(\"varContent\");\n\n\tconst div = document.createElement('div')\n\tdiv.innerHTML = \"menu tab\"\n\tvariableContent.appendChild(div)\n\tcontent.appendChild(variableContent)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./src/tabs/menu.js?");

/***/ })

/******/ });