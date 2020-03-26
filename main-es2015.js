(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"box \">\n    <div class=\"text\">\n\n        <div>\n            <h1> WHO IS THIS GUY ?</h1>\n            <p>\n               {{_MyInfotmation}}\n               Testing 3\n            </p>\n        </div>\n    </div>\n</div>\n\n<div>\n   \n<div class =\"skillContainer\" >\n    <h1 class=\"skills\"> Skills </h1>\n    \n    <div >\n        <a><span> JAVA Core  </span> </a>\n        <a><span> Angular 7  </span> </a>\n        <a><span> MSSQL Server  </span> </a>  \n\n    </div>\n    <div >\n        <a><span> JAVA Spring  </span> </a>\n        <a><span> RPA   </span> </a>\n        <a><span> MySQL  </span> </a>\n    </div>\n    <div >\n        <a><span> JAVA Hibernate  </span> </a>\n        <a><span> CI/CD </span> </a>\n        <a><span> T-SQL  </span> </a>\n    </div>\n    <div >\n        <a><span> Junit 5  </span> </a>\n        <a><span> TypeScript </span> </a>\n        <a><span> MSBI-SSIS/SSRS  </span> </a>\n    </div>\n    <div >\n        <a><span> REST API  </span> </a>\n        <a><span> Docker  </span> </a>\n        <a><span> HTML/CSS  </span> </a>\n    </div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-info></app-info>\n\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"navBarStyle\"    >\n    <app-main></app-main>\n</div>  \n<section id=\"HOME\" class=\"sectionInfo\"  >\n    \n    <div class =\"containerImge\" [style.clip-path]=\"_shape\"   (scroll)=\"onPicScroll(img)\"  >\n       \n        <img src={{picture}} class=\"img-rounded\" alt=\"My Image\" />\n\n        \n    </div>\n    <div ><h1 class=\"name\">{{_name}}</h1></div> \n\n    <div class = \"scrollDown\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n    </div>\n</section>\n\n\n\n<section id=\"ABOUT\" class=\"sectionScroll\"  style=\"text-align: center; width: 100%;\">\n    <app-about></app-about>\n</section>\n<section id=\"WORK\" class=\"secondScroll\"><h1>Experence</h1>\n</section>\n<section id=\"CONTACT\" class=\"secondScroll\"><h1>Education</h1></section>\n\n<!-- <script type=\"text/javascript\">\n    var section = document.querySelector('containerImge');\n    window.addEventListener('scroll',function(){\n        var value = window.scrollY;\n        section.style.clipPath = \"circle(\" + value + \"% at 45% 40% )\" \n    })\n</script> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<mat-toolbar class=\"navBar\" >\n    <div >\n        <a (click) = \"toLoacation('HOME')\">HOME</a>\n    </div>\n    <div>\n        <span *ngFor=\"let item of dasboardMenue\">\n            <a (click) = \"toLoacation(item)\" >{{item}}</a>\n        </span>  \n    </div>\n    <div  >\n        <span *ngFor=\"let icon of socialMediaAcountIcons\">\n            <a (click) = \"goToLink(icon)\" href=\"#\"> <mat-icon svgIcon={{icon}}></mat-icon></a>\n        </span>   \n    </div>\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.box\r\n{\r\n    position: absolute;\r\n    top:30%;\r\n    left: 7%;\r\n    -webkit-transform:  translate(0%,0% ) rotateY(-30deg) skew(+5deg);\r\n            transform:  translate(0%,0% ) rotateY(-30deg) skew(+5deg);\r\n    width: 25%;\r\n    height: 50%;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n    -webkit-perspective: 2000px;\r\n            perspective: 2000px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n.box:hover{\r\n    -webkit-transform:  translate(0%,0%)  ;\r\n            transform:  translate(0%,0%)  ;\r\n}\r\n.box:before\r\n{\r\n    content: '';\r\n    position: absolute;\r\n    top:0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: transparent;\r\n    border-top: 20px solid gray;\r\n    border-left: 20px solid gray;\r\n    box-sizing: border-box;\r\n}\r\n.box:after\r\n{\r\n    content: '';\r\n    position: absolute;\r\n    top:0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: transparent;\r\n    border-bottom: 20px solid gray;\r\n    border-right: 20px solid gray;\r\n    box-sizing: border-box;\r\n}\r\n.box .text\r\n{\r\n    position:  absolute;\r\n    top: 7% ;\r\n    left: -7%;\r\n    background: #262626;\r\n    width: calc(100% + 60px);\r\n    height: calc(100% - 60px);\r\n    -webkit-transition: 0.4s;\r\n    transition: 0.4s;\r\n    -webkit-transform: rotateY(30deg) skew(+5deg);\r\n            transform: rotateY(30deg) skew(+5deg)\r\n\r\n}\r\n.box:hover .text \r\n{\r\n    -webkit-transform: rotateY(0deg) ;\r\n            transform: rotateY(0deg) ;\r\n}\r\n.text div\r\n{\r\n    position: absolute;\r\n    /* top: 50%; */\r\n    left: 0;\r\n    width: 100%;\r\n    /* transform: translate(-50% ); */\r\n    padding: 40px 40px;\r\n    box-sizing: border-box;\r\n    text-align:  center;\r\n    z-index: 3;\r\n}\r\n.text div h1\r\n{\r\n    margin: 0 0 6%;\r\n    padding: 0 ;\r\n    color: #fff;\r\n}\r\n.text div p\r\n{\r\n    margin: 0 0 7%;\r\n    padding: 0 ;\r\n    color: #fff;\r\n    font-size: 90%;\r\n}\r\n.skillContainer\r\n{\r\n    font-size: 0.8rem;\r\n    min-height: 10vh;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    position: absolute;\r\n    top:20%;\r\n    right:5%;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align:  center;\r\n            align-items:  center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column; \r\n}\r\n.skillContainer h1\r\n{\r\n    font-size: 300%;\r\n}\r\n.skillContainer a\r\n{\r\n    position: relative;\r\n    width: 12em;\r\n    height: 3.5em;\r\n    margin:  2% 0;\r\n    font-size: 150%;\r\n    display: -webkit-inline-box;\r\n    display: inline-flex;\r\n    -webkit-box-align:  center;\r\n            align-items:  center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    text-decoration: none;\r\n    color: black;\r\n    -webkit-transition: 0.5s ;\r\n    transition: 0.5s ;\r\n}\r\n.skillContainer a:hover\r\n{\r\n    color: #fff;\r\n}\r\n.skillContainer a:before\r\n{\r\n    content:'';\r\n    position: absolute;\r\n    top: 0;\r\n    left:0;\r\n    width: 0;\r\n    height: 100%;\r\n    background: url('btn-red.png');\r\n    background-size: cover;\r\n    -webkit-transform-origin: left ;\r\n            transform-origin: left ;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n.skillContainer a:nth-child(2):before\r\n{\r\n    background: url('btn-blue.png');\r\n    background-size: cover;\r\n}\r\n.skillContainer a:hover:before\r\n{\r\n    width: 100%;\r\n}\r\n.skillContainer a span \r\n{\r\n    position: relative;\r\n    z-index: 1;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixpRUFBeUQ7WUFBekQseURBQXlEO0lBQ3pELFVBQVU7SUFDVixXQUFXO0lBQ1gsb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUFnQjtJQUFoQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSxtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLDZDQUFvQztZQUFwQzs7QUFFSjtBQUNBOztJQUVJLGlDQUF5QjtZQUF6Qix5QkFBeUI7QUFDN0I7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLE9BQU87SUFDUCxXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDtBQUVBOztJQUVJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUE7O0lBRUksY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QiwwQkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksZUFBZTtBQUNuQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsMkJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQiwwQkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWix5QkFBaUI7SUFBakIsaUJBQWlCO0FBQ3JCO0FBRUE7O0lBRUksV0FBVztBQUNmO0FBRUE7O0lBRUksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sTUFBTTtJQUNOLFFBQVE7SUFDUixZQUFZO0lBQ1osOEJBQW1EO0lBQ25ELHNCQUFzQjtJQUN0QiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHdCQUFnQjtJQUFoQixnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSwrQkFBb0Q7SUFDcEQsc0JBQXNCO0FBQzFCO0FBRUE7O0lBRUksV0FBVztBQUNmO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLFVBQVU7O0FBRWQiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmJveFxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MzAlO1xyXG4gICAgbGVmdDogNyU7XHJcbiAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGUoMCUsMCUgKSByb3RhdGVZKC0zMGRlZykgc2tldygrNWRlZyk7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgcGVyc3BlY3RpdmU6IDIwMDBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5ib3g6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGUoMCUsMCUpICA7XHJcbn1cclxuLmJveDpiZWZvcmVcclxue1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgZ3JheTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5ib3g6YWZ0ZXJcclxue1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5ib3ggLnRleHRcclxue1xyXG4gICAgcG9zaXRpb246ICBhYnNvbHV0ZTtcclxuICAgIHRvcDogNyUgO1xyXG4gICAgbGVmdDogLTclO1xyXG4gICAgYmFja2dyb3VuZDogIzI2MjYyNjtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA2MHB4KTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDMwZGVnKSBza2V3KCs1ZGVnKVxyXG5cclxufVxyXG4uYm94OmhvdmVyIC50ZXh0IFxyXG57XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgO1xyXG59XHJcblxyXG4udGV4dCBkaXZcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLyogdG9wOiA1MCU7ICovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICk7ICovXHJcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1hbGlnbjogIGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi50ZXh0IGRpdiBoMVxyXG57XHJcbiAgICBtYXJnaW46IDAgMCA2JTtcclxuICAgIHBhZGRpbmc6IDAgO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50ZXh0IGRpdiBwXHJcbntcclxuICAgIG1hcmdpbjogMCAwIDclO1xyXG4gICAgcGFkZGluZzogMCA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG59XHJcblxyXG4uc2tpbGxDb250YWluZXJcclxue1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDoyMCU7XHJcbiAgICByaWdodDo1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6ICBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxufVxyXG4uc2tpbGxDb250YWluZXIgaDFcclxue1xyXG4gICAgZm9udC1zaXplOiAzMDAlO1xyXG59XHJcbi5za2lsbENvbnRhaW5lciBhXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMmVtO1xyXG4gICAgaGVpZ2h0OiAzLjVlbTtcclxuICAgIG1hcmdpbjogIDIlIDA7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiAgY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIDtcclxufVxyXG5cclxuLnNraWxsQ29udGFpbmVyIGE6aG92ZXJcclxue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5za2lsbENvbnRhaW5lciBhOmJlZm9yZVxyXG57XHJcbiAgICBjb250ZW50OicnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYnV0dG9ucy9idG4tcmVkLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5za2lsbENvbnRhaW5lciBhOm50aC1jaGlsZCgyKTpiZWZvcmVcclxue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2J1dHRvbnMvYnRuLWJsdWUucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnNraWxsQ29udGFpbmVyIGE6aG92ZXI6YmVmb3JlXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5za2lsbENvbnRhaW5lciBhIHNwYW4gXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG59Il19 */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() {
        this._MyInfotmation = " I am a Software Developer living in Paris. A coding lover and game freek. Either backend or frontend, Both are very exiting to me. ";
    }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _icons_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons-service.service */ "./src/app/icons-service.service.ts");



let AppComponent = class AppComponent {
    constructor(iconService) {
        this.iconService = iconService;
        this.title = 'myWebApplicationUI';
    }
    ngOnInit() {
        this.iconService.registerIcons();
    }
};
AppComponent.ctorParameters = () => [
    { type: _icons_service_service__WEBPACK_IMPORTED_MODULE_2__["IconsServiceService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _materil_materil_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./materil/materil.module */ "./src/app/materil/materil.module.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
            _info_info_component__WEBPACK_IMPORTED_MODULE_10__["InfoComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _materil_materil_module__WEBPACK_IMPORTED_MODULE_9__["MaterilModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/icons-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/icons-service.service.ts ***!
  \******************************************/
/*! exports provided: IconsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsServiceService", function() { return IconsServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/app/icons.ts");





let IconsServiceService = class IconsServiceService {
    constructor(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
    }
    registerIcons() {
        this.loadIcons(Object.values(_icons__WEBPACK_IMPORTED_MODULE_4__["icons"]), './assets/svg');
    }
    loadIcons(iconKeys, iconUrl) {
        iconKeys.forEach(key => {
            this.matIconRegistry.addSvgIcon(key, this.domSanitizer.bypassSecurityTrustResourceUrl(`${iconUrl}/${key}.svg`));
        });
    }
};
IconsServiceService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
IconsServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IconsServiceService);



/***/ }),

/***/ "./src/app/icons.ts":
/*!**************************!*\
  !*** ./src/app/icons.ts ***!
  \**************************/
/*! exports provided: icons, socialAccounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialAccounts", function() { return socialAccounts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var icons;
(function (icons) {
    icons["Linkedin"] = "linkedin";
    icons["Email"] = "email";
    icons["instagram"] = "instagram";
    icons["facebook"] = "facebook";
    icons["github"] = "github";
})(icons || (icons = {}));
var socialAccounts;
(function (socialAccounts) {
    socialAccounts["linkedin"] = "https://www.linkedin.com/in/shivank-mittal-09055ba3";
    socialAccounts["email"] = "email";
    socialAccounts["instagram"] = "https://www.instagram.com/shivank.m/";
    socialAccounts["facebook"] = "https://www.facebook.com/shivank.mittal.7";
    socialAccounts["github"] = "https://github.com/Shivank-Mittal";
})(socialAccounts || (socialAccounts = {}));


/***/ }),

/***/ "./src/app/info/info.component.css":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\r\n    font-family: \"Tangerine\", serif;\r\n}\r\nh1.name{\r\n    font-family: \"Tangerine\", serif;\r\n    letter-spacing: 2px;\r\n    font-size:100px;\r\n    color: black;\r\n    position: absolute;\r\n    z-index: 100;\r\n    top: 180px;\r\n    right: 10%;\r\n}\r\nh1.about{\r\n    font-family: \"Tangerine\", serif;\r\n    letter-spacing: 2px;\r\n    font-size:90px;\r\n    color: black;\r\n    position: absolute;\r\n    z-index: 100;\r\n    top : 10px;\r\n    text-align: center;\r\n}\r\n.navBarStyle{\r\n    /* padding-top: 400px; */\r\n     \r\n    position: fixed;\r\n    top: 0px;\r\n    width: 100%;\r\n    z-index: 100;\r\n}\r\nsection {\r\n    position: relative;\r\n    /* margin-top: 10%; */\r\n    height: 100%;\r\n}\r\nsection.sectionInfo {\r\n    \r\n     position: fixed;\r\n     top: 0px;\r\n    height: 100%;\r\n}\r\nsection.sectionScroll {\r\n    padding-top: 2rem;\r\n    padding-top: 5;\r\n    border : 2px black;\r\n    margin-top: 90%;\r\n    height: 100%;\r\n    background-color: #fff;\r\n}\r\nsection.secondScroll{\r\n    margin-top: 25%;\r\n    background-color: blanchedalmond;\r\n}\r\n.containerImge {\r\n    text-align: center;\r\n    color: black;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\nimg {\r\n    padding-top:3px;\r\n    border-radius: 1px ; \r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n.scrollDown\r\n{\r\n    position: relative;\r\n    bottom: 70px;\r\n    left: 45%;\r\n    width: 40px;\r\n    height: 40px;\r\n    -webkit-transform: translateY(-80px) translateX(-50%) rotate(45deg);\r\n            transform: translateY(-80px) translateX(-50%) rotate(45deg); \r\n}\r\n.scrollDown span\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-bottom: 2px solid black;\r\n    border-right: 2px solid black;\r\n    -webkit-animation:  animate 1.5s linear infinite;\r\n            animation:  animate 1.5s linear infinite;\r\n    opacity: 0;\r\n}\r\n.scrollDown span:nth-child(1)\r\n{\r\n    -webkit-transform: translate(-15px,-15px);\r\n            transform: translate(-15px,-15px);\r\n    -webkit-animation-delay: -0.4s;\r\n            animation-delay: -0.4s;\r\n}\r\n.scrollDown span:nth-child(2)\r\n{\r\n    -webkit-transform: translate(0px,0px);\r\n            transform: translate(0px,0px);\r\n    -webkit-animation-delay: -0.2s;\r\n            animation-delay: -0.2s;\r\n}\r\n.scrollDown span:nth-child(3)\r\n{\r\n    -webkit-transform: translate(15px,15px);\r\n            transform: translate(15px,15px);\r\n    -webkit-animation-delay: 0s;\r\n            animation-delay: 0s;\r\n}\r\n@-webkit-keyframes animate\r\n{\r\n    0%\r\n    {\r\n        top: -5px;\r\n        left: -5px;\r\n        opacity: 0;\r\n    }\r\n\r\n    25%\r\n    {\r\n        top: 0px;\r\n        left: 0px;\r\n        opacity: 1;\r\n    }\r\n\r\n    100%\r\n    {\r\n        top: 5px;\r\n        left: 5px;\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes animate\r\n{\r\n    0%\r\n    {\r\n        top: -5px;\r\n        left: -5px;\r\n        opacity: 0;\r\n    }\r\n\r\n    25%\r\n    {\r\n        top: 0px;\r\n        left: 0px;\r\n        opacity: 1;\r\n    }\r\n\r\n    100%\r\n    {\r\n        top: 5px;\r\n        left: 5px;\r\n        opacity: 0;\r\n    }\r\n}\r\n  \r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHdCQUF3Qjs7SUFFeEIsZUFBZTtJQUNmLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBRUE7O0tBRUssZUFBZTtLQUNmLFFBQVE7SUFDVCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBRUY7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXO0VBQ2I7QUFFRjs7SUFFSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1FQUEyRDtZQUEzRCwyREFBMkQ7QUFDL0Q7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLGdEQUF3QztZQUF4Qyx3Q0FBd0M7SUFDeEMsVUFBVTtBQUNkO0FBQ0E7O0lBRUkseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyw4QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUkscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3Qiw4QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQiwyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCO0FBRUE7O0lBRUk7O1FBRUksU0FBUztRQUNULFVBQVU7UUFDVixVQUFVO0lBQ2Q7O0lBRUE7O1FBRUksUUFBUTtRQUNSLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7O0lBRUE7O1FBRUksUUFBUTtRQUNSLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7QUFDSjtBQXRCQTs7SUFFSTs7UUFFSSxTQUFTO1FBQ1QsVUFBVTtRQUNWLFVBQVU7SUFDZDs7SUFFQTs7UUFFSSxRQUFRO1FBQ1IsU0FBUztRQUNULFVBQVU7SUFDZDs7SUFFQTs7UUFFSSxRQUFRO1FBQ1IsU0FBUztRQUNULFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRhbmdlcmluZVwiLCBzZXJpZjtcclxufVxyXG5oMS5uYW1le1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVGFuZ2VyaW5lXCIsIHNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZToxMDBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHRvcDogMTgwcHg7XHJcbiAgICByaWdodDogMTAlO1xyXG59XHJcblxyXG5oMS5hYm91dHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRhbmdlcmluZVwiLCBzZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6OTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHRvcCA6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZCYXJTdHlsZXtcclxuICAgIC8qIHBhZGRpbmctdG9wOiA0MDBweDsgKi9cclxuICAgICBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuc2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAxMCU7ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbnNlY3Rpb24uc2VjdGlvbkluZm8ge1xyXG4gICAgXHJcbiAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgIHRvcDogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5zZWN0aW9uLnNlY3Rpb25TY3JvbGwge1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNTtcclxuICAgIGJvcmRlciA6IDJweCBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDkwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuc2VjdGlvbi5zZWNvbmRTY3JvbGx7XHJcbiAgICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxufVxyXG4uY29udGFpbmVySW1nZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG5pbWcge1xyXG4gICAgcGFkZGluZy10b3A6M3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4IDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuLnNjcm9sbERvd25cclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA3MHB4O1xyXG4gICAgbGVmdDogNDUlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwcHgpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKTsgXHJcbn1cclxuLnNjcm9sbERvd24gc3BhblxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYW5pbWF0aW9uOiAgYW5pbWF0ZSAxLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuLnNjcm9sbERvd24gc3BhbjpudGgtY2hpbGQoMSlcclxue1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1cHgsLTE1cHgpO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcclxufVxyXG4uc2Nyb2xsRG93biBzcGFuOm50aC1jaGlsZCgyKVxyXG57XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMnM7XHJcbn1cclxuLnNjcm9sbERvd24gc3BhbjpudGgtY2hpbGQoMylcclxue1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTVweCwxNXB4KTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZVxyXG57XHJcbiAgICAwJVxyXG4gICAge1xyXG4gICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICBsZWZ0OiAtNXB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgMjUlXHJcbiAgICB7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJVxyXG4gICAge1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcbiAgXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let InfoComponent = class InfoComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this._name = "Shivank Mittal";
        this._shape = this.sanitizer.bypassSecurityTrustStyle("circle(100px at 43% 40% )");
        this._imagePosition = "relative";
        this.picture = "./assets/pictures/webppPic.jpg";
    }
    onPicScroll(ElementType) {
        var value = window.scrollY + 100;
        if (value > 100) {
            this._shape = this.sanitizer.
                bypassSecurityTrustStyle("circle(" + value + "px at 43% 40%  )");
        }
    }
    ngOnInit() {
    }
};
InfoComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']) // for window scroll events
], InfoComponent.prototype, "onPicScroll", null);
InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")).default]
    })
], InfoComponent);



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.navBar {\r\n  \r\n  /* position:  relative; */\r\n  width: 100%;\r\n  height: 5em;\r\n  background-color: black;\r\n  color: white;\r\n  -webkit-box-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n \r\n}\r\nspan {\r\n  padding: 1rem;\r\n}\r\na { color: inherit;\r\n  text-decoration: none; }\r\nh1 {\r\n    /* color: #999999; */\r\nfont-family:   'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\nfont-size: 30%;\r\nfont-weight: bold;\r\n/* margin-top: 0px; */\r\n/* margin-bottom: 1px; */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztFQUVFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osOEJBQTZCO1VBQTdCLDZCQUE2Qjs7QUFFL0I7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBLElBQUksY0FBYztFQUNoQixxQkFBcUIsRUFBRTtBQUV6QjtJQUNJLG9CQUFvQjtBQUN4QiwwRUFBMEU7QUFDMUUsY0FBYztBQUNkLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsd0JBQXdCO0VBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5hdkJhciB7XHJcbiAgXHJcbiAgLyogcG9zaXRpb246ICByZWxhdGl2ZTsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDVlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiBcclxufVxyXG5zcGFuIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbmEgeyBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH0gXHJcblxyXG5oMSB7XHJcbiAgICAvKiBjb2xvcjogIzk5OTk5OTsgKi9cclxuZm9udC1mYW1pbHk6ICAgJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbmZvbnQtc2l6ZTogMzAlO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuLyogbWFyZ2luLXRvcDogMHB4OyAqL1xyXG4vKiBtYXJnaW4tYm90dG9tOiAxcHg7ICovXHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./src/app/icons.ts");



let MainComponent = class MainComponent {
    constructor() {
        this.socialMediaAcountIcons = [_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].Email, _icons__WEBPACK_IMPORTED_MODULE_2__["icons"].Linkedin, _icons__WEBPACK_IMPORTED_MODULE_2__["icons"].github, _icons__WEBPACK_IMPORTED_MODULE_2__["icons"].facebook, _icons__WEBPACK_IMPORTED_MODULE_2__["icons"].instagram];
        this.dasboardMenue = ["ABOUT", "WORK", "CONTACT"];
    }
    ngOnInit() {
    }
    goToLink(clickedIcon) {
        if (clickedIcon != _icons__WEBPACK_IMPORTED_MODULE_2__["icons"].Email) {
            window.open(_icons__WEBPACK_IMPORTED_MODULE_2__["socialAccounts"][clickedIcon]);
        }
        else {
            const selBox = document.createElement('textarea');
            selBox.value = "mittal.shivank@gmail.com";
            document.body.appendChild(selBox);
            selBox.focus();
            selBox.select();
            document.execCommand('copy');
            document.body.removeChild(selBox);
        }
    }
    toLoacation(item) {
        console.log(item);
        document.getElementById(item).scrollIntoView({ behavior: "smooth" });
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/materil/materil.module.ts":
/*!*******************************************!*\
  !*** ./src/app/materil/materil.module.ts ***!
  \*******************************************/
/*! exports provided: MaterilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterilModule", function() { return MaterilModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



const Material = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"]
];
let MaterilModule = class MaterilModule {
};
MaterilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [Material],
        exports: [Material]
    })
], MaterilModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\MyWebApplication\myWebApplicationUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map