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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./src/components/Header/index.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/components/Header/index.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".index_test_3K0_S{\\n    background: ghostwhite\\n}\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"test\": \"index_test_3K0_S\"\n};\n\n//# sourceURL=webpack:///./src/components/Header/index.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./src/containers/Home/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/containers/Home/style.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"body {\\n    background: red\\n}\\n.style_test_d3nG6{\\n    background: black\\n}\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"test\": \"style_test_d3nG6\"\n};\n\n//# sourceURL=webpack:///./src/containers/Home/style.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./src/containers/Translation/style.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/containers/Translation/style.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".style_test_D3g_M{\\n    background: paleturquoise\\n}\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"test\": \"style_test_D3g_M\"\n};\n\n//# sourceURL=webpack:///./src/containers/Translation/style.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif (item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function (modules, mediaQuery) {\n\t\tif (typeof modules === \"string\") modules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor (var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif (typeof id === \"number\") alreadyImportedModules[id] = true;\n\t\t}\n\t\tfor (i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif (typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif (mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if (mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/insertCss.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/lib/insertCss.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"babel-runtime/helpers/slicedToArray\");\n\nvar _slicedToArray3 = _interopRequireDefault(_slicedToArray2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Isomorphic CSS style loader for Webpack\n *\n * Copyright © 2015-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nvar prefix = 's';\nvar inserted = {};\n\n// Base64 encoding and decoding - The \"Unicode Problem\"\n// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode('0x' + p1);\n  }));\n}\n\n/**\n * Remove style/link elements for specified node IDs\n * if they are no longer referenced by UI components.\n */\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(prefix + id);\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\n/**\n * Example:\n *   // Insert CSS styles object generated by `css-loader` into DOM\n *   var removeCss = insertCss([[1, 'body { color: red; }']]);\n *\n *   // Remove it from the DOM\n *   removeCss();\n */\nfunction insertCss(styles) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === undefined ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === undefined ? false : _ref$prepend;\n\n  var ids = [];\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n\n    var id = moduleId + '-' + i;\n\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n\n    var elem = document.getElementById(prefix + id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = prefix + id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n    if (sourceMap && typeof btoa === 'function') {\n      // skip IE9 and below, see http://caniuse.com/atob-btoa\n      cssText += '\\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';\n      cssText += '\\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/lib/insertCss.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ./components/Header/ */ \"./src/components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _store = __webpack_require__(/*! ./components/Header/store/ */ \"./src/components/Header/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(props) {\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\tnull,\n\t\t_react2.default.createElement(_Header2.default, { staticContext: props.staticContext }),\n\t\t(0, _reactRouterConfig.renderRoutes)(props.route.routes)\n\t);\n};\n\nApp.loadData = function (store) {\n\treturn store.dispatch(_store.actions.getHeaderInfo());\n};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _Home = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Translation = __webpack_require__(/*! ./containers/Translation */ \"./src/containers/Translation/index.js\");\n\nvar _Translation2 = _interopRequireDefault(_Translation);\n\nvar _NotFind = __webpack_require__(/*! ./containers/NotFind */ \"./src/containers/NotFind/index.js\");\n\nvar _NotFind2 = _interopRequireDefault(_NotFind);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import NotFind from './containers/NotFind'\n\n// 当我加载显示HOME组件之前，我希望调用Home.loadData方法，提前获取到必要的异步数据\n// 然后再做服务器端渲染，把页面返回给用户\nexports.default = [{\n  path: '/',\n  component: _App2.default,\n  loadData: _App2.default.loadData,\n  routes: [{\n    path: '/',\n    component: _Home2.default,\n    exact: true,\n    loadData: _Home2.default.loadData,\n    key: 'home'\n  }, {\n    path: '/Translation',\n    component: _Translation2.default,\n    loadData: _Translation2.default.loadData,\n    exact: true,\n    key: 'translation'\n  }, {\n    component: _NotFind2.default\n  }]\n}];\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _index = __webpack_require__(/*! ../config/index */ \"./src/config/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = _axios2.default.create({\n\tbaseURL: '/',\n\tparams: {\n\t\tsecret: _index2.default.secret\n\t}\n});\n\nexports.default = instance;\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.css":
/*!*****************************************!*\
  !*** ./src/components/Header/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./index.css */ \"./node_modules/css-loader/index.js?!./src/components/Header/index.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/Header/index.css?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _store = __webpack_require__(/*! ./store/ */ \"./src/components/Header/store/index.js\");\n\nvar _index = __webpack_require__(/*! ./index.css */ \"./src/components/Header/index.css\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _withStyle = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n\t_inherits(Header, _Component);\n\n\tfunction Header() {\n\t\t_classCallCheck(this, Header);\n\n\t\treturn _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n\t}\n\n\t_createClass(Header, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _props = this.props,\n\t\t\t    login = _props.login,\n\t\t\t    handleLogin = _props.handleLogin,\n\t\t\t    handleLogout = _props.handleLogout;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: _index2.default.test },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t\t{ to: '/' },\n\t\t\t\t\t'\\u9996\\u9875'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\tlogin ? _react2.default.createElement(\n\t\t\t\t\t_react.Fragment,\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t\t\t{ to: '/translation' },\n\t\t\t\t\t\t'\\u7FFB\\u8BD1\\u5217\\u8868'\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ onClick: handleLogout },\n\t\t\t\t\t\t'\\u9000\\u51FA'\n\t\t\t\t\t)\n\t\t\t\t) : _react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ onClick: handleLogin },\n\t\t\t\t\t'\\u767B\\u9646'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Header;\n}(_react.Component);\n\nvar mapState = function mapState(state) {\n\treturn {\n\t\tlogin: state.header.login\n\t};\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n\treturn {\n\t\thandleLogin: function handleLogin() {\n\t\t\tdispatch(_store.actions.login());\n\t\t},\n\t\thandleLogout: function handleLogout() {\n\t\t\tdispatch(_store.actions.logout());\n\t\t}\n\t};\n};\n\nexports.default = (0, _reactRedux.connect)(mapState, mapDispatch)((0, _withStyle2.default)(Header, _index2.default));\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Header/store/actions.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/actions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.getHeaderInfo = exports.logout = exports.login = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar changeLogin = function changeLogin(value) {\n\treturn {\n\t\ttype: _constants.CHANGE_LOGIN,\n\t\tvalue: value\n\t};\n};\n\nvar login = exports.login = function login() {\n\treturn function (dispatch, getState, axiosInstance) {\n\t\treturn axiosInstance.get('/api/login.json').then(function (res) {\n\t\t\tdispatch(changeLogin(true));\n\t\t});\n\t};\n};\n\nvar logout = exports.logout = function logout() {\n\treturn function (dispatch, getState, axiosInstance) {\n\t\treturn axiosInstance.get('/api/logout.json').then(function (res) {\n\t\t\tdispatch(changeLogin(false));\n\t\t});\n\t};\n};\n\nvar getHeaderInfo = exports.getHeaderInfo = function getHeaderInfo() {\n\t// 由于我们的服务器端也会运行一次\n\t// 浏览器运行 /api/news.json = localhost:3000/api/news.json\n\t// 服务端运行 /api/news.json = 服务器根目录下的/api/news.json 没有这个目录啊\n\treturn function (dispatch, getState, axiosInstance) {\n\t\treturn axiosInstance.get('/api/isLogin.json').then(function (res) {\n\t\t\tdispatch(changeLogin(res.data.data.login));\n\t\t});\n\t};\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/actions.js?");

/***/ }),

/***/ "./src/components/Header/store/constants.js":
/*!**************************************************!*\
  !*** ./src/components/Header/store/constants.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LOGIN = exports.CHANGE_LOGIN = 'HEADER/CHANGER_LOGIN';\n\n//# sourceURL=webpack:///./src/components/Header/store/constants.js?");

/***/ }),

/***/ "./src/components/Header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.actions = exports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/components/Header/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/components/Header/store/actions.js\");\n\nvar actions = _interopRequireWildcard(_actions);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\nexports.actions = actions;\n\n//# sourceURL=webpack:///./src/components/Header/store/index.js?");

/***/ }),

/***/ "./src/components/Header/store/reducer.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/reducer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar defaultState = {\n\tlogin: true\n};\n\nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase _constants.CHANGE_LOGIN:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tlogin: action.value\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/reducer.js?");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    secret: 'PP87ANTIPIRATE'\n};\n\n//# sourceURL=webpack:///./src/config/index.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Home/store/actions.js\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/containers/Home/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyle = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_Component) {\n\t_inherits(Home, _Component);\n\n\tfunction Home() {\n\t\t_classCallCheck(this, Home);\n\n\t\treturn _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n\t}\n\n\t_createClass(Home, [{\n\t\tkey: 'getList',\n\t\tvalue: function getList() {\n\t\t\tvar list = this.props.list;\n\n\t\t\treturn list.map(function (item) {\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ key: item.id },\n\t\t\t\t\titem.title\n\t\t\t\t);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t_react.Fragment,\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactHelmet.Helmet,\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'title',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'home'\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement('meta', { name: 'descrption', content: '\\u516C\\u53F8\\u5F52\\u5C5E\\u611F\\u5C71\\u6C9F\\u6C9F' })\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: _style2.default.test },\n\t\t\t\t\tthis.getList(),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'button',\n\t\t\t\t\t\t{ onClick: function onClick() {\n\t\t\t\t\t\t\t\talert('click1');\n\t\t\t\t\t\t\t} },\n\t\t\t\t\t\t'click'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}, {\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tif (!this.props.list.length) {\n\t\t\t\tthis.props.getHomeList();\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn Home;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {\n\t\tlist: state.home.newsList\n\t};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\treturn {\n\t\tgetHomeList: function getHomeList() {\n\t\t\tdispatch((0, _actions.getHomeList)());\n\t\t}\n\t};\n};\n\nvar ExportHome = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _withStyle2.default)(Home, _style2.default));\n\nExportHome.loadData = function (store) {\n\t// 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好\n\treturn store.dispatch((0, _actions.getHomeList)());\n};\nexports.default = ExportHome;\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.getHomeList = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\nvar changeList = function changeList(list) {\n\treturn {\n\t\ttype: _constants.CHANGE_LIST,\n\t\tlist: list\n\t};\n};\n\nvar getHomeList = exports.getHomeList = function getHomeList() {\n\t// 由于我们的服务器端也会运行一次\n\t// 浏览器运行 /api/news.json = localhost:3000/api/news.json\n\t// 服务端运行 /api/news.json = 服务器根目录下的/api/news.json 没有这个目录啊\n\treturn function (dispatch, getState, axiosInstance) {\n\t\treturn axiosInstance.get('/api/news.json').then(function (res) {\n\t\t\tvar list = res.data.data;\n\t\t\tdispatch(changeList(list));\n\t\t});\n\t};\n};\n// 如何将数据存入redux之中呢 redux-thunk当我们用他做异步请求的时候 返回的函数可以接受到这个dispatch方法\n// 再调用dispatch触发一个action\n\n//# sourceURL=webpack:///./src/containers/Home/store/actions.js?");

/***/ }),

/***/ "./src/containers/Home/store/constants.js":
/*!************************************************!*\
  !*** ./src/containers/Home/store/constants.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LIST = exports.CHANGE_LIST = 'HOME/CHANGE_LIST';\n\n//# sourceURL=webpack:///./src/containers/Home/store/constants.js?");

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Home/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/containers/Home/store/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // 初始化数据 当action被接收到之后 我们的数据该如何改变 必须是一个春函数\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\nvar defaultState = {\n\tnewsList: []\n};\n\nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase _constants.CHANGE_LIST:\n\t\t\treturn _extends({}, state, {\n\t\t\t\tnewsList: action.list\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Home/style.css":
/*!***************************************!*\
  !*** ./src/containers/Home/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ \"./node_modules/css-loader/index.js?!./src/containers/Home/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Home/style.css?");

/***/ }),

/***/ "./src/containers/NotFind/index.js":
/*!*****************************************!*\
  !*** ./src/containers/NotFind/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NotFind = function (_Component) {\n    _inherits(NotFind, _Component);\n\n    function NotFind() {\n        _classCallCheck(this, NotFind);\n\n        return _possibleConstructorReturn(this, (NotFind.__proto__ || Object.getPrototypeOf(NotFind)).apply(this, arguments));\n    }\n\n    _createClass(NotFind, [{\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            var staticContext = this.props.staticContext;\n            // 这段只在服务端适用 如果staticContext存在  继续向下执行\n\n            staticContext && (staticContext.notFind = true);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                'not find'\n            );\n        }\n    }]);\n\n    return NotFind;\n}(_react.Component);\n\nexports.default = NotFind;\n\n//# sourceURL=webpack:///./src/containers/NotFind/index.js?");

/***/ }),

/***/ "./src/containers/Translation/index.js":
/*!*********************************************!*\
  !*** ./src/containers/Translation/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Translation/store/actions.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/containers/Translation/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyle = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Translation = function (_Component) {\n    _inherits(Translation, _Component);\n\n    function Translation() {\n        _classCallCheck(this, Translation);\n\n        return _possibleConstructorReturn(this, (Translation.__proto__ || Object.getPrototypeOf(Translation)).apply(this, arguments));\n    }\n\n    _createClass(Translation, [{\n        key: 'getList',\n        value: function getList() {\n            var list = this.props.list;\n\n            return list.map(function (item) {\n                return _react2.default.createElement(\n                    'div',\n                    { key: item.id },\n                    item.title\n                );\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return this.props.login ? _react2.default.createElement(\n                _react.Fragment,\n                null,\n                _react2.default.createElement(\n                    _reactHelmet.Helmet,\n                    null,\n                    _react2.default.createElement(\n                        'title',\n                        null,\n                        'translate'\n                    ),\n                    _react2.default.createElement('meta', { name: 'descrption', content: '\\u516C\\u53F8\\u5F52\\u5C5E\\u611F\\u5C71\\u6C9F\\u6C9F' })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: _style2.default.test },\n                    this.getList()\n                )\n            ) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            if (!this.props.list.length) {\n                this.props.getTranslationList();\n            }\n        }\n    }]);\n\n    return Translation;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        list: state.translation.translationList,\n        login: state.header.login\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        getTranslationList: function getTranslationList() {\n            dispatch((0, _actions.getTranslationList)());\n        }\n    };\n};\n\nvar ExportTranslation = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _withStyle2.default)(Translation, _style2.default));\n\nExportTranslation.loadData = function (store) {\n    // 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好\n    return store.dispatch((0, _actions.getTranslationList)());\n};\n\nexports.default = ExportTranslation;\n\n//# sourceURL=webpack:///./src/containers/Translation/index.js?");

/***/ }),

/***/ "./src/containers/Translation/store/actions.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/actions.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getTranslationList = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Translation/store/constants.js\");\n\nvar changeList = function changeList(list) {\n    return {\n        type: _constants.CHANGE_LIST_Translation,\n        list: list\n    };\n};\n\nvar getTranslationList = exports.getTranslationList = function getTranslationList() {\n\n    return function (dispatch, getState, axiosInstance) {\n        return axiosInstance.get('/api/translations.json').then(function (res) {\n            if (res.data.success) {\n                var list = res.data.data;\n                dispatch(changeList(list));\n            } else {\n                var _list = [];\n                dispatch(changeList(_list));\n            }\n        });\n    };\n};\n\n//# sourceURL=webpack:///./src/containers/Translation/store/actions.js?");

/***/ }),

/***/ "./src/containers/Translation/store/constants.js":
/*!*******************************************************!*\
  !*** ./src/containers/Translation/store/constants.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LIST_Translation = exports.CHANGE_LIST_Translation = 'CHANGE_LIST_Translation';\n\n//# sourceURL=webpack:///./src/containers/Translation/store/constants.js?");

/***/ }),

/***/ "./src/containers/Translation/store/index.js":
/*!***************************************************!*\
  !*** ./src/containers/Translation/store/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Translation/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/containers/Translation/store/index.js?");

/***/ }),

/***/ "./src/containers/Translation/store/reducer.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/reducer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Translation/store/constants.js\");\n\nvar defaultState = {\n\ttranslationList: []\n};\n\nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase _constants.CHANGE_LIST_Translation:\n\t\t\treturn _extends({}, state, {\n\t\t\t\ttranslationList: action.list\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\n//# sourceURL=webpack:///./src/containers/Translation/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Translation/style.css":
/*!**********************************************!*\
  !*** ./src/containers/Translation/style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ \"./node_modules/css-loader/index.js?!./src/containers/Translation/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Translation/style.css?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nvar _Routes = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static('public'));\n\n// /api/news.json\n// req.url = news.json\n// proxyReqPathResolver: /ssr/api/news.json\n// http://47.95.113.63 + proxyReqPathResolver()\n// http://47.95.113.63/ssr/api/news.json\n\napp.use('/api', (0, _expressHttpProxy2.default)('http://47.95.113.63', {\n\tproxyReqPathResolver: function proxyReqPathResolver(req) {\n\t\tconsole.log(req.url);\n\n\t\treturn '/ssr/api' + req.url;\n\t}\n}));\n\napp.get('*', function (req, res) {\n\n\t// 如果在这里能拿到异步数据 并填充到store之中\n\t// store里面填充什么我们不知道 我们需要结合用户的的请求地址和当前的路由做判断\n\t// 如果用户访问 / 我们就拿 home的异步数据\n\t// 如果用户访问 /login 我们就拿 login的异步数据\n\n\tvar store = (0, _store.getStore)(req);\n\t// 根据路由的路径，来往store里面加数据\n\tvar matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);\n\t// 让matchRoutes里面所有的组件，对应的loadData方法执行一次\n\tvar promises = [];\n\tmatchedRoutes.forEach(function (item) {\n\t\t// 如果进入的这些组件有loadData，就把提前加载数据的方法 对应的promise\n\n\t\tif (item.route.loadData) {\n\t\t\tvar promise = new Promise(function (reslove, reject) {\n\t\t\t\titem.route.loadData(store).then(reslove).catch(reslove);\n\t\t\t});\n\t\t\tpromises.push(promise);\n\t\t}\n\t});\n\tPromise.all(promises).then(function () {\n\t\t// reatc-router-config定义路由的时候 如果发现了我们组件出现了redirect  他会自动帮我们操作一下这个context\n\t\tvar context = { css: [] };\n\t\tvar html = (0, _utils.render)(store, _Routes2.default, req, context);\n\t\t// 在这判断你是已经存在的页面还是404里面的页面\n\t\t// console.log(context.css)\n\t\tif (context.action === 'REPLACE') {\n\t\t\tres.redirect(301, context.url);\n\t\t} else if (context.notFind) {\n\t\t\t// 在我们返回页面的状态码之前就改变这个状态码\n\t\t\tres.status(404);\n\t\t\tres.send(html);\n\t\t} else {\n\t\t\tres.send(html);\n\t\t}\n\t}).catch(function () {\n\t\tres.send('sorry,requset error');\n\t});\n});\n\nvar server = app.listen(3003);\n\n/*\n虚拟dom 是真是DOM的一个JavaScript的对象映射 因为虚拟dom是一个js对象 所以在客户端渲染的时候，把一个虚拟dom\n转化成真是的dom挂载在页面上，也可以在ssr的时候把虚拟dom转化成字符串，返回给浏览器，虚拟dom让我们在做ssr的时候变得简单方便\n客户端渲染 react代码在浏览器上执行，消耗的是用户浏览器的性能\n服务端渲染 react代码在服务器上执行，消耗的是服务器端的性能\n服务器端渲染中的路由 StaticRouter \n服务端渲染  第一次加载好页面以后，之后页面的跳转就不是服务器端的跳转了，而是js控制的页面跳转了 之后bundle里面的js会接管页面后的流程\n走的都是客户端路由了 所以说 服务器端渲染并不是说每一个页面都去做服务端渲染 指的是你访问的第一个页面具有服务端渲染的特性\n\n中间层  相对于nodeserver javaserver 他们的计算性能效率要更高 \n架构 对于java服务器 专注于数据的获取 计算 node服务器 他只是从java服务器取导数据和自己的react组件做一个结合，负责生成页面的内容\n此时node服务器只是一个中间层，负责拼装要展示给用户的界面，然后把页面返回给用户\n\nnodeServer--拼装页面 浏览器--运行js 而底层 关于数据查询 数据计算 java/c++ \n好处 -->nodeServe执行react 其实是比较消耗性能的，当用户量比较大的时候,nodeServe可能就承载不住，我们可以单独的增加nodeServe的数量来解决这个负载的平静问题\n后续会引入数据获取服务器的概念\n如果我们在服务端使用redux的话  那我们在客户端也需要使用redux\n\n创建一个store 并传递给路由下的每一个组件\nredux react-redux react-thunk\n\n构架redux代码结构 -->HOME\n我们从reducer写起 负责初始化创建一些数据  然后我们去全局store的index.js 这个地方需要对rendce做一个组合\n只要涉及派发一个action 我们应该action的创建放在store目录的actions.js\n\n\n1.服务器街搜到请求 store是空的 接着服务器回去匹配路由 看是哪个组件 我知道显示的是这个组件  但是要注意服务端是不会渲染 componentDidmount的\n所以他的reduce一直是个空 不会去拿远程服务器的数据\n2.服务器端不会执行 服务端是不会渲染 componentDidmount的 所以列表内容获取不到\n\n我们的问题是什么呢？就是让服务器也能执行 componentDidmount去获取到数据\n first : loadData方法\n\n\n second : 路由的重构\n\n3.客户端代码运行 这个时候store已然是空的\n4.客户端执行componentDidMount 列报表数据被获取\n5.store中的列表数据被更新\n6.客户端渲染出store中list数据对应的列表内容\n\n脱水 注水  服务端把页面返回之后客户端在做二次渲染的时候，二次渲染的一开始，客户端的store是空的，所以页面开始会白屏\n会调用 componentDidmount去获取到数据 成功之后页面才会显示\n问题？服务端渲染store的时候和客户端渲染store的时候数据是不同的 如何做到统一呢\n\n我们在创建客户端的时候 我用服务端给我的数据\n拿到服务器返给我我们的state的状态  window.context.state 默认值\n\n使用proxy代理，让中间层承担数据获取职责 中间层的好处 容易调错 客户端-nodeServer nodeServer-apiServer 让\nnodeServer变成一个代理服务器 express-http-proxy\n根据环境对url做了一个区分\naxios 两个重要概念  instance/interceptors\n对axios请求的前缀做一些特殊的配置\n\nredux-thunk中的withExtraArgument\nwithExtraArgument 关于server的判断我们加到store里面去\n比对文件  beyond compare\n\n1.刚进入页面，处于非登录状态\n2.用户点击登录按钮，进行登录操作\n （1).浏览器发送请求给node服务器\n （2).转发给api服务器，进行登录\n （3).api服务器生成cookie\n （4).浏览器上存了cookie，登录成功\n3.当用户重新刷新页面的时候\n （1).浏览器去请求html页面\n （2).nodejs服务器进行服务端渲染\n （3).进行服务端渲染，首先要去api服务器获取数据\n\n 一个网站  文字 多媒体(图片) 链接  搜索引擎判断一个网站到底如何的时候 还是看这三个方面\n 如何做我们的服务器端的css渲染\n 定制 title description  react-helmet\n*/\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _index = __webpack_require__(/*! ../config/index */ \"./src/config/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createInstance = function createInstance(req) {\n\treturn _axios2.default.create({\n\t\tbaseURL: 'http://47.95.113.63/ssr',\n\t\theaders: {\n\t\t\tcookie: req.get('cookie') || ''\n\t\t},\n\t\tparams: {\n\t\t\tsecret: _index2.default.secret\n\t\t}\n\t});\n};\n\nexports.default = createInstance;\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(store, routes, req, context) {\n\n\tvar content = (0, _server.renderToString)(_react2.default.createElement(\n\t\t_reactRedux.Provider,\n\t\t{ store: store },\n\t\t_react2.default.createElement(\n\t\t\t_reactRouterDom.StaticRouter,\n\t\t\t{ location: req.path, context: context },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t(0, _reactRouterConfig.renderRoutes)(routes)\n\t\t\t)\n\t\t)\n\t));\n\tvar helmet = _reactHelmet.Helmet.renderStatic();\n\n\tvar cssStr = context.css.length ? context.css.join('\\n') : '';\n\treturn '\\n\\t\\t\\t<html>\\n\\t\\t\\t\\t<head>\\n\\t\\t\\t\\t\\t' + helmet.title.toString() + '\\n\\t\\t\\t\\t\\t' + helmet.meta.toString() + '\\n\\n\\t\\t\\t\\t\\t<style>' + cssStr + '</style>\\n\\t\\t\\t\\t</head>\\n\\t\\t\\t\\t<body>\\n\\t\\t\\t\\t\\t<div id=\"root\">' + content + '</div>\\n\\t\\t\\t\\t\\t<script>\\n\\t\\t\\t\\t\\t\\twindow.context = {\\n\\t\\t\\t\\t\\t\\t\\tstate: ' + JSON.stringify(store.getState()) + '\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t</script>\\n\\t\\t\\t\\t\\t<script src=\\'/index.js\\'></script>\\n\\t\\t\\t\\t</body>\\n\\t\\t\\t</html>\\n\\t  ';\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _store = __webpack_require__(/*! ../containers/Home/store */ \"./src/containers/Home/store/index.js\");\n\nvar _store2 = __webpack_require__(/*! ../components/Header/store */ \"./src/components/Header/store/index.js\");\n\nvar _store3 = __webpack_require__(/*! ../containers/Translation/store */ \"./src/containers/Translation/store/index.js\");\n\nvar _request = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _request3 = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\nvar _request4 = _interopRequireDefault(_request3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// beyond compare \n\nvar reducer = (0, _redux.combineReducers)({\n\thome: _store.reducer,\n\theader: _store2.reducer,\n\ttranslation: _store3.reducer\n});\n\nvar getStore = exports.getStore = function getStore(req) {\n\t// 改变服务器端store的内容，那么就一定要使用serverAxios\n\treturn (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument((0, _request4.default)(req))));\n};\n\nvar getClientStore = exports.getClientStore = function getClientStore() {\n\tvar defaultState = window.context.state;\n\t// 改变客户端store的内容，一定要使用clientAxios\n\treturn (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.default)));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/withStyle.js":
/*!**************************!*\
  !*** ./src/withStyle.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 这个函数是生成高阶组件的函数\n// 这个函数返回一个组件\n\n\n// 返回的这个组件，叫做高阶组件\nexports.default = function (DecoratedCopmonent, styles) {\n    return function (_Component) {\n        _inherits(NewComponent, _Component);\n\n        function NewComponent() {\n            _classCallCheck(this, NewComponent);\n\n            return _possibleConstructorReturn(this, (NewComponent.__proto__ || Object.getPrototypeOf(NewComponent)).apply(this, arguments));\n        }\n\n        _createClass(NewComponent, [{\n            key: 'componentWillMount',\n            value: function componentWillMount() {\n                // 我们在做客户端渲染的时候 styles是由style-loader生成的 它里面是没有getcss的\n                // console.log(styles._getCss());\n                // console.log(this.props.staticContext) //服务端-对象  客户端-undefined 可以用来区分我们的环境 存进去\n                // if (styles._getCss) {\n                // \tconsole.log(styles._getCss());\n                // }\n                if (this.props.staticContext) {\n                    this.props.staticContext.css.push(styles._getCss());\n                }\n            }\n        }, {\n            key: 'render',\n            value: function render() {\n                return _react2.default.createElement(DecoratedCopmonent, this.props);\n            }\n        }]);\n\n        return NewComponent;\n    }(_react.Component);\n};\n\n//# sourceURL=webpack:///./src/withStyle.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });