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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/home */ \"./src/tabs/home.js\");\n/* harmony import */ var _tabs_veg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/veg */ \"./src/tabs/veg.js\");\n/* harmony import */ var _tabs_nonveg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/nonveg */ \"./src/tabs/nonveg.js\");\n/* harmony import */ var _tabs_chefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/chefs */ \"./src/tabs/chefs.js\");\n/* harmony import */ var _tabs_contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/contacts */ \"./src/tabs/contacts.js\");\n/* harmony import */ var _tabs_aboutus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/aboutus */ \"./src/tabs/aboutus.js\");\n\n\n\n\n\n\n\n\nObject(_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\nconst content = document.getElementById(\"content\");\nconst variableContent = document.getElementById(\"varContent\");\n\nconst description = document.getElementById('descript');\nconst gallery = document.getElementById('gallery');\n\nconst homeBtn = document.getElementById(\"homeBtn\")\nconst menuBtn = document.getElementById(\"menuBtn\")\nconst dropdown = document.querySelector(\".dropdown-content\")\n\nconst vegBtn = document.getElementById(\"veg\")\nconst nonvegBtn = document.getElementById(\"nonveg\")\nconst chefsBtn = document.getElementById(\"chefsBtn\")\nconst contactsBtn = document.getElementById(\"contactsBtn\")\nconst aboutUsBtn = document.getElementById(\"aboutUsBtn\")\n\nconst closeMenuDrop = () => {\n\tif(dropdown.style.display == \"block\"){\n\t\tdropdown.style.display = \"none\"\n\t}\n}\n\nhomeBtn.addEventListener('click', (e) => {\n\tcloseMenuDrop()\n\tvariableContent.innerHTML = \"\"\n\tObject(_tabs_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n})\n\nmenuBtn.addEventListener('click', (e) => {\n\tif(dropdown.style.display == \"block\"){\n\t\tdropdown.style.display = \"none\"\n\t} else {\n\t\tdropdown.style.display = \"block\"\n\t}\n})\n\nvegBtn.addEventListener('click', (e) => {\n\tvariableContent.innerHTML = \"\"\n\tObject(_tabs_veg__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\tcloseMenuDrop()\n})\n\nnonvegBtn.addEventListener('click', (e) => {\n\tvariableContent.innerHTML = \"\"\n\tObject(_tabs_nonveg__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\tcloseMenuDrop()\n\n})\n\nchefsBtn.addEventListener('click', (e) => {\n\tcloseMenuDrop()\n\tvariableContent.innerHTML = \"\"\n\tObject(_tabs_chefs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n})\n\ncontactsBtn.addEventListener('click', (e) => {\n\tcloseMenuDrop()\n\tvariableContent.innerHTML = \"\"\n\tObject(_tabs_contacts__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n})\n\naboutUsBtn.addEventListener('click', (e) => {\n\tcloseMenuDrop()\n\tvariableContent.innerHTML = \"\"\n\tObject(_tabs_aboutus__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n})\n\nvariableContent.addEventListener('click', (e) => {\n\tcloseMenuDrop();\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst pageLoad = () => {\n\tconsole.log(\"home page loaded\")\n\tconst content = document.getElementById(\"content\");\n\n\tconst nav = document.createElement('div');\n\tconst ul = document.createElement('ul');\n\tconst link1 = document.createElement('button');\n\tconst home = document.createElement('li');\n\tconst link2 = document.createElement('button');\n\tconst menu = document.createElement('li');\n\tconst dropdownContent = document.createElement('ul');\n\tconst vegLink = document.createElement('button');\n\tconst veg = document.createElement('li');\n\tconst nonvegLink = document.createElement('button');\n\tconst nonveg = document.createElement('li');\n\tconst link3 = document.createElement('button');\n\tconst chefs = document.createElement('li')\n\tconst link4 = document.createElement('button');\n\tconst contacts = document.createElement('li')\n\tconst link5 = document.createElement('button');\n\tconst about = document.createElement('li');\n\tnav.setAttribute(\"id\",\"navbar\");\n\tlink1.setAttribute(\"id\",\"homeBtn\");\n\tlink2.setAttribute(\"id\",\"menuBtn\");\n\tvegLink.setAttribute(\"id\", \"veg\")\n\tnonvegLink.setAttribute(\"id\", \"nonveg\");\n\tlink3.setAttribute(\"id\",\"chefsBtn\");\n\tlink4.setAttribute(\"id\",\"contactsBtn\");\n\tlink5.setAttribute(\"id\",\"aboutUsBtn\");\n\thome.innerHTML = \"Home\"\n\tmenu.innerHTML = \"Menu\"\n\tveg.innerHTML = \"Veg\"\n\tnonveg.innerHTML = \"Non Veg\"\n\tchefs.innerHTML = \"Chefs\"\n\tcontacts.innerHTML = \"Contacts\"\n\tabout.innerHTML = \"About\"\n\tlink1.appendChild(home)\n\tlink2.appendChild(menu)\n\tlink3.appendChild(chefs)\n\tlink4.appendChild(contacts)\n\tlink5.appendChild(about)\n\n\tvegLink.appendChild(veg)\n\tnonvegLink.appendChild(nonveg)\n\n\tdropdownContent.setAttribute(\"class\",\"dropdown-content\")\n\n\tdropdownContent.appendChild(vegLink);\n\tdropdownContent.appendChild(nonvegLink)\n\n\tul.appendChild(link1)\n\tul.appendChild(link2)\n\tul.appendChild(link3)\n\tul.appendChild(link4)\n\tul.appendChild(link5)\n\tnav.appendChild(ul);\n\tnav.appendChild(dropdownContent)\n\tcontent.appendChild(nav)\n\n\tconst variableContent = document.createElement('div');\n\tvariableContent.setAttribute(\"id\",\"varContent\");\n\n\tconst description = document.createElement('div');\n\tconst section1 = document.createElement('section');\n\tconst img = document.createElement('img');\n\tconst section2 = document.createElement('section');\n\tconst header = document.createElement('header');\n\tconst title = document.createElement('h1');\n\tconst para = document.createElement('p');\n\tdescription.setAttribute(\"id\",\"descript\");\n\tdescription.setAttribute(\"class\", \"group\");\n\tsection1.setAttribute(\"id\",\"logo\");\n\timg.setAttribute(\"src\",\"../dist/assets/images/losPolosHermanos.jpg\")\n\tsection2.setAttribute(\"id\",\"info\");\n\ttitle.innerHTML = \"Los Pollos Hermanos\";\n\tpara.innerHTML = \"Los Pollos Hermanos (Spanish for The Chicken Brothers) is a fried chicken fast food restaurant that originated in the television series Breaking Bad and Better Call Saul. In the fictional universe of Breaking Bad, Los Pollos Hermanos is a front organization for Gus Fring's meth manufacturing and distribution operation. The set used for the restaurant in the show was at a Twisters branch in South Valley, New Mexico, and Twisters has seen an increase in business attributed to being associated with Breaking Bad. Due to the show's popularity, Los Pollos Hermanos has appeared on numerous occasions and locations as a real-life pop-up restaurant.\"\n\theader.appendChild(title);\n\tsection1.appendChild(img);\n\tsection2.appendChild(header);\n\tsection2.appendChild(para);\n\tdescription.appendChild(section1);\n\tdescription.appendChild(section2);\n\tvariableContent.appendChild(description)\n\n\tconst gallery = document.createElement('div');\n\tconst slide1 = document.createElement('img');\n\tconst slide2 = document.createElement('img');\n\tconst slide3 = document.createElement('img');\n\tconst slide4 = document.createElement('img');\n\tgallery.setAttribute(\"id\",\"gallery\");\n\tslide1.setAttribute(\"src\",\"../dist/assets/images/lph2.jpg\")\n\tslide2.setAttribute(\"src\",\"../dist/assets/images/lph3.jpg\")\n\tslide3.setAttribute(\"src\",\"../dist/assets/images/lph4.jpg\")\n\tslide4.setAttribute(\"src\",\"../dist/assets/images/lhp6.jpeg\")\n\tgallery.appendChild(slide1);\n\tgallery.appendChild(slide2);\n\tgallery.appendChild(slide3)\n\tgallery.appendChild(slide4)\n\n\tconst div = document.createElement('div')\n\tconst a = document.createElement('a')\n\ta.innerHTML = \"Developed By: Abhishek Khale\"\n\ta.setAttribute(\"href\",\"https://github.com/abkhale17\")\n\tdiv.style.backgroundColor = \"#424242\"\n\ta.style.marginTop = \"2%\";\n\ta.style.color = \"white\"\n\tdiv.style.paddingTop= \"8px\";\n\tdiv.style.paddingBottom = \"8px\";\n\tdiv.style.paddingLeft= \"8px\";\n\ta.style.textDecoration = \"none\"\n\tdiv.appendChild(a)\n\tvariableContent.appendChild(gallery)\n\tvariableContent.appendChild(div)\n\tcontent.appendChild(variableContent)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pageLoad);\n\n//# sourceURL=webpack:///./src/pageLoad.js?");

/***/ }),

/***/ "./src/tabs/aboutus.js":
/*!*****************************!*\
  !*** ./src/tabs/aboutus.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst about = () => {\n\tconst content = document.getElementById(\"content\");\n\tconst variableContent = document.getElementById(\"varContent\");\n\n\tconst div = document.createElement('div')\n\tdiv.innerHTML = \"Los Pollos Hermanos (Spanish for The Chicken Brothers) is a fried chicken fast food restaurant that originated in the television series Breaking Bad and Better Call Saul. In the fictional universe of Breaking Bad, Los Pollos Hermanos is a front organization for Gus Fring's meth manufacturing and distribution operation. The set used for the restaurant in the show was at a Twisters branch in South Valley, New Mexico, and Twisters has seen an increase in business attributed to being associated with Breaking Bad. Due to the show's popularity, Los Pollos Hermanos has appeared on numerous occasions and locations as a real-life pop-up restaurant.\"\n\tdiv.style.width = \"85%\"\n\tdiv.style.margin = \"2% auto\"\n\tdiv.style.fontSize = \"23px\";\n\tdiv.style.fontStyle = \"italic\"\n\tdiv.style.lineHeight = \"32px\";\n\n\tvariableContent.appendChild(div)\n\tcontent.appendChild(variableContent)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\n\n//# sourceURL=webpack:///./src/tabs/aboutus.js?");

/***/ }),

/***/ "./src/tabs/chefs.js":
/*!***************************!*\
  !*** ./src/tabs/chefs.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst chefs = () => {\n\tconst content = document.getElementById(\"content\");\n\tconst variableContent = document.getElementById(\"varContent\");\n\n\tconst table = document.createElement(\"table\")\n\ttable.setAttribute(\"class\", \"Tables\")\n\tconst tr1 = document.createElement(\"tr\")\n\tconst th1 = document.createElement(\"th\")\n\tconst th2 = document.createElement(\"th\")\n\tconst th3 = document.createElement(\"th\")\n\n\tth1.innerHTML = \"Chef Name\"\n\tth2.innerHTML = \"Speciality\"\n\tth3.innerHTML = \"Age\"\n\n\ttr1.appendChild(th1)\n\ttr1.appendChild(th2)\n\ttr1.appendChild(th3)\n\ttable.appendChild(tr1)\n\n\tconst tr2 = document.createElement(\"tr\")\n\tconst td1 = document.createElement(\"td\")\n\tconst td2 = document.createElement(\"td\")\n\tconst td3 = document.createElement(\"td\")\n\n\ttd1.innerHTML = \"Gordon James Ramsay\"\n\ttd2.innerHTML = \"A\"\n\ttd3.innerHTML = \"C\"\n\ttr2.appendChild(td1)\n\ttr2.appendChild(td2)\n\ttr2.appendChild(td3)\n\ttable.appendChild(tr2)\n\n\tconst tr3 = document.createElement(\"tr\")\n\tconst td4 = document.createElement(\"td\")\n\tconst td5 = document.createElement(\"td\")\n\tconst td6 = document.createElement(\"td\")\n\n\ttd4.innerHTML = \"Sanjeev Kapoor\"\n\ttd5.innerHTML = \"A\"\n\ttd6.innerHTML = \"C\"\n\n\ttr3.appendChild(td4)\n\ttr3.appendChild(td5)\n\ttr3.appendChild(td6)\n\ttable.appendChild(tr3)\n\n\n\tconst tr4 = document.createElement(\"tr\")\n\tconst td8 = document.createElement(\"td\")\n\tconst td9 = document.createElement(\"td\")\n\tconst td10 = document.createElement(\"td\")\n\n\ttd8.innerHTML = \"Jamie Oliver.\"\n\ttd9.innerHTML = \"A\"\n\ttd10.innerHTML = \"C\"\n\n\ttr4.appendChild(td8)\n\ttr4.appendChild(td9)\n\ttr4.appendChild(td10)\n\ttable.appendChild(tr4)\n\n\tconst tr5 = document.createElement(\"tr\")\n\tconst td11 = document.createElement(\"td\")\n\tconst td12 = document.createElement(\"td\")\n\tconst td13 = document.createElement(\"td\")\n\n\ttd11.innerHTML = \"Kabita Singh\"\n\ttd12.innerHTML = \"A\"\n\ttd13.innerHTML = \"C\"\n\n\ttr5.appendChild(td11)\n\ttr5.appendChild(td12)\n\ttr5.appendChild(td13)\n\ttable.appendChild(tr5)\n\n\tvariableContent.appendChild(table)\n\tcontent.appendChild(variableContent)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (chefs);\n\n//# sourceURL=webpack:///./src/tabs/chefs.js?");

/***/ }),

/***/ "./src/tabs/contacts.js":
/*!******************************!*\
  !*** ./src/tabs/contacts.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contacts = () => {\n\tconst content = document.getElementById(\"content\");\n\tconst variableContent = document.getElementById(\"varContent\");\n\n\tconst div = document.createElement('div')\n\tdiv.innerHTML = \"If you have any suggestions, good or bad, simply call us or drop a message. Follow us on twitter, facebook\"\n\tdiv.style.backgroundColor = \"#424242\"\n\tdiv.style.marginTop = \"2%\";\n\tdiv.style.color = \"white\"\n\tdiv.style.padding= \"12px\"\n\tconst table = document.createElement(\"table\")\n\ttable.setAttribute(\"class\", \"Tables\")\n\tconst tr1 = document.createElement(\"tr\")\n\tconst th1 = document.createElement(\"th\")\n\tconst th2 = document.createElement(\"th\")\n\tconst th3 = document.createElement(\"th\")\n\n\tth1.innerHTML = \"Phone\"\n\tth2.innerHTML = \"E-mail\"\n\tth3.innerHTML = \"Social Network\"\n\n\ttr1.appendChild(th1)\n\ttr1.appendChild(th2)\n\ttr1.appendChild(th3)\n\ttable.appendChild(tr1)\n\n\tconst tr5 = document.createElement(\"tr\")\n\tconst td11 = document.createElement(\"td\")\n\tconst td12 = document.createElement(\"td\")\n\tconst td13 = document.createElement(\"td\")\n\n\ttd11.innerHTML = \"+91 987654321\"\n\ttd12.innerHTML = \"sggest@chef\"\n\ttd13.innerHTML = \"@restochef\"\n\n\ttr5.appendChild(td11)\n\ttr5.appendChild(td12)\n\ttr5.appendChild(td13)\n\ttable.appendChild(tr5)\n\n\tvariableContent.appendChild(table)\n\tvariableContent.appendChild(div)\n\tcontent.appendChild(variableContent)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contacts);\n\n//# sourceURL=webpack:///./src/tabs/contacts.js?");

/***/ }),

/***/ "./src/tabs/home.js":
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst home = () => {\n\tconst content = document.getElementById(\"content\");\n\tconst variableContent = document.getElementById(\"varContent\");\n\t\n\tconst description = document.createElement('div');\n\tconst section1 = document.createElement('section');\n\tconst img = document.createElement('img');\n\tconst section2 = document.createElement('section');\n\tconst header = document.createElement('header');\n\tconst title = document.createElement('h1');\n\tconst para = document.createElement('p');\n\tdescription.setAttribute(\"id\",\"descript\");\n\tdescription.setAttribute(\"class\", \"group\");\n\tsection1.setAttribute(\"id\",\"logo\");\n\timg.setAttribute(\"src\",\"../dist/assets/images/losPolosHermanos.jpg\")\n\tsection2.setAttribute(\"id\",\"info\");\n\ttitle.innerHTML = \"Los Pollos Hermanos\";\n\tpara.innerHTML = \"Los Pollos Hermanos (Spanish for The Chicken Brothers) is a fried chicken fast food restaurant that originated in the television series Breaking Bad and Better Call Saul. In the fictional universe of Breaking Bad, Los Pollos Hermanos is a front organization for Gus Fring's meth manufacturing and distribution operation. The set used for the restaurant in the show was at a Twisters branch in South Valley, New Mexico, and Twisters has seen an increase in business attributed to being associated with Breaking Bad. Due to the show's popularity, Los Pollos Hermanos has appeared on numerous occasions and locations as a real-life pop-up restaurant.\"\n\theader.appendChild(title);\n\tsection1.appendChild(img);\n\tsection2.appendChild(header);\n\tsection2.appendChild(para);\n\tdescription.appendChild(section1);\n\tdescription.appendChild(section2);\n\tvariableContent.appendChild(description)\n\n\n\tconst gallery = document.createElement('div');\n\tconst slide1 = document.createElement('img');\n\tconst slide2 = document.createElement('img');\n\tconst slide3 = document.createElement('img');\n\tconst slide4 = document.createElement('img');\n\tgallery.setAttribute(\"id\",\"gallery\");\n\tslide1.setAttribute(\"src\",\"../dist/assets/images/lph2.jpg\")\n\tslide2.setAttribute(\"src\",\"../dist/assets/images/lph3.jpg\")\n\tslide3.setAttribute(\"src\",\"../dist/assets/images/lph4.jpg\")\n\tslide4.setAttribute(\"src\",\"../dist/assets/images/lhp6.jpeg\")\n\tgallery.appendChild(slide1);\n\tgallery.appendChild(slide2);\n\tgallery.appendChild(slide3)\n\tgallery.appendChild(slide4)\n\n\tconst div = document.createElement('div')\n\tconst a = document.createElement('a')\n\ta.innerHTML = \"Developed By: Abhishek Khale\"\n\ta.setAttribute(\"href\",\"https://github.com/abkhale17\")\n\tdiv.style.backgroundColor = \"#424242\"\n\ta.style.marginTop = \"2%\";\n\ta.style.color = \"white\"\n\tdiv.style.paddingTop= \"8px\";\n\tdiv.style.paddingBottom = \"8px\";\n\tdiv.style.paddingLeft= \"8px\";\n\ta.style.textDecoration = \"none\"\n\t\n\tdiv.appendChild(a)\n\tvariableContent.appendChild(gallery)\n\tvariableContent.appendChild(div)\n\tcontent.appendChild(variableContent)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/tabs/home.js?");

/***/ }),

/***/ "./src/tabs/nonveg.js":
/*!****************************!*\
  !*** ./src/tabs/nonveg.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst nonveg = () => {\n\tconst content = document.getElementById(\"content\");\n\tconst variableContent = document.getElementById(\"varContent\");\n\n\tconst table = document.createElement(\"table\")\n\ttable.setAttribute(\"class\", \"Tables\")\n\tconst tr1 = document.createElement(\"tr\")\n\tconst th1 = document.createElement(\"th\")\n\tconst th2 = document.createElement(\"th\")\n\tconst th3 = document.createElement(\"th\")\n\n\tth1.innerHTML = \"Dish Name\"\n\tth2.innerHTML = \"Stars\"\n\tth3.innerHTML = \"Votes\"\n\n\ttr1.appendChild(th1)\n\ttr1.appendChild(th2)\n\ttr1.appendChild(th3)\n\ttable.appendChild(tr1)\n\n\tconst tr2 = document.createElement(\"tr\")\n\tconst td1 = document.createElement(\"td\")\n\tconst td2 = document.createElement(\"td\")\n\tconst td3 = document.createElement(\"td\")\n\n\ttd1.innerHTML = \"Spicy Malvani Chicken Curry\"\n\ttd2.innerHTML = \"10\"\n\ttd3.innerHTML = \"9.5M\"\n\ttr2.appendChild(td1)\n\ttr2.appendChild(td2)\n\ttr2.appendChild(td3)\n\ttable.appendChild(tr2)\n\n\tconst tr3 = document.createElement(\"tr\")\n\tconst td4 = document.createElement(\"td\")\n\tconst td5 = document.createElement(\"td\")\n\tconst td6 = document.createElement(\"td\")\n\n\ttd4.innerHTML = \"Chicken Tikka Masala\"\n\ttd5.innerHTML = \"10\"\n\ttd6.innerHTML = \"18M\"\n\n\ttr3.appendChild(td4)\n\ttr3.appendChild(td5)\n\ttr3.appendChild(td6)\n\ttable.appendChild(tr3)\n\n\n\tconst tr4 = document.createElement(\"tr\")\n\tconst td8 = document.createElement(\"td\")\n\tconst td9 = document.createElement(\"td\")\n\tconst td10 = document.createElement(\"td\")\n\n\ttd8.innerHTML = \"Butter Chicken\"\n\ttd9.innerHTML = \"9\"\n\ttd10.innerHTML = \"10M\"\n\n\ttr4.appendChild(td8)\n\ttr4.appendChild(td9)\n\ttr4.appendChild(td10)\n\ttable.appendChild(tr4)\n\n\tconst tr5 = document.createElement(\"tr\")\n\tconst td11 = document.createElement(\"td\")\n\tconst td12 = document.createElement(\"td\")\n\tconst td13 = document.createElement(\"td\")\n\n\ttd11.innerHTML = \"Kolhapuri Chicken Curry\"\n\ttd12.innerHTML = \"8.9\"\n\ttd13.innerHTML = \"7.2M\"\n\n\ttr5.appendChild(td11)\n\ttr5.appendChild(td12)\n\ttr5.appendChild(td13)\n\ttable.appendChild(tr5)\n\n\tvariableContent.appendChild(table)\n\tcontent.appendChild(variableContent)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (nonveg);\n\n//# sourceURL=webpack:///./src/tabs/nonveg.js?");

/***/ }),

/***/ "./src/tabs/veg.js":
/*!*************************!*\
  !*** ./src/tabs/veg.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst veg = () => {\n\tconst content = document.getElementById(\"content\");\n\tconst variableContent = document.getElementById(\"varContent\");\n\n\tconst table = document.createElement(\"table\")\n\ttable.setAttribute(\"class\", \"Tables\")\n\tconst tr1 = document.createElement(\"tr\")\n\tconst th1 = document.createElement(\"th\")\n\tconst th2 = document.createElement(\"th\")\n\tconst th3 = document.createElement(\"th\")\n\n\tth1.innerHTML = \"Dish Name\"\n\tth2.innerHTML = \"Stars\"\n\tth3.innerHTML = \"Votes\"\n\n\ttr1.appendChild(th1)\n\ttr1.appendChild(th2)\n\ttr1.appendChild(th3)\n\ttable.appendChild(tr1)\n\n\tconst tr2 = document.createElement(\"tr\")\n\tconst td1 = document.createElement(\"td\")\n\tconst td2 = document.createElement(\"td\")\n\tconst td3 = document.createElement(\"td\")\n\n\ttd1.innerHTML = \"Palak Paneer\"\n\ttd2.innerHTML = \"10\"\n\ttd3.innerHTML = \"9.5M\"\n\ttr2.appendChild(td1)\n\ttr2.appendChild(td2)\n\ttr2.appendChild(td3)\n\ttable.appendChild(tr2)\n\n\tconst tr3 = document.createElement(\"tr\")\n\tconst td4 = document.createElement(\"td\")\n\tconst td5 = document.createElement(\"td\")\n\tconst td6 = document.createElement(\"td\")\n\n\ttd4.innerHTML = \"Rajma (Red Kidney Bean Curry)\"\n\ttd5.innerHTML = \"10\"\n\ttd6.innerHTML = \"18M\"\n\n\ttr3.appendChild(td4)\n\ttr3.appendChild(td5)\n\ttr3.appendChild(td6)\n\ttable.appendChild(tr3)\n\n\n\tconst tr4 = document.createElement(\"tr\")\n\tconst td8 = document.createElement(\"td\")\n\tconst td9 = document.createElement(\"td\")\n\tconst td10 = document.createElement(\"td\")\n\n\ttd8.innerHTML = \"Mutter Paneer (Peas and Cottage Cheese)\"\n\ttd9.innerHTML = \"9\"\n\ttd10.innerHTML = \"10M\"\n\n\ttr4.appendChild(td8)\n\ttr4.appendChild(td9)\n\ttr4.appendChild(td10)\n\ttable.appendChild(tr4)\n\n\tconst tr5 = document.createElement(\"tr\")\n\tconst td11 = document.createElement(\"td\")\n\tconst td12 = document.createElement(\"td\")\n\tconst td13 = document.createElement(\"td\")\n\n\ttd11.innerHTML = \"Aaloo Paratha (Potato Paratha)\"\n\ttd12.innerHTML = \"8.9\"\n\ttd13.innerHTML = \"7.2M\"\n\n\ttr5.appendChild(td11)\n\ttr5.appendChild(td12)\n\ttr5.appendChild(td13)\n\ttable.appendChild(tr5)\n\n\tvariableContent.appendChild(table)\n\tcontent.appendChild(variableContent)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (veg);\n\n//# sourceURL=webpack:///./src/tabs/veg.js?");

/***/ })

/******/ });