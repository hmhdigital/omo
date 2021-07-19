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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/js/app.js":
/*!******************************!*\
  !*** ./assets/src/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./node_modules/alpinejs/dist/alpine.js":
/*!**********************************************!*\
  !*** ./node_modules/alpinejs/dist/alpine.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function () {
  'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  } // Thanks @stimulus:
  // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts


  function domReady() {
    return new Promise(function (resolve) {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }

  function arrayUnique(array) {
    return Array.from(new Set(array));
  }

  function isTesting() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }

  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }

  function warnIfMalformedTemplate(el, directive) {
    if (el.tagName.toLowerCase() !== 'template') {
      console.warn("Alpine: [".concat(directive, "] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#").concat(directive));
    } else if (el.content.childElementCount !== 1) {
      console.warn("Alpine: <template> tag with [".concat(directive, "] encountered with an unexpected number of root elements. Make sure <template> has a single root element. "));
    }
  }

  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase();
  }

  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, function (match, _char) {
      return _char.toUpperCase();
    });
  }

  function walk(el, callback) {
    if (callback(el) === false) return;
    var node = el.firstElementChild;

    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  }

  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  var handleError = function handleError(el, expression, error) {
    console.warn("Alpine Error: \"".concat(error, "\"\n\nExpression: \"").concat(expression, "\"\nElement:"), el);

    if (!isTesting()) {
      Object.assign(error, {
        el: el,
        expression: expression
      });
      throw error;
    }
  };

  function tryCatch(cb, _ref) {
    var el = _ref.el,
        expression = _ref.expression;

    try {
      var value = cb();
      return value instanceof Promise ? value["catch"](function (e) {
        return handleError(el, expression, e);
      }) : value;
    } catch (e) {
      handleError(el, expression, e);
    }
  }

  function saferEval(el, expression, dataContext) {
    var additionalHelperVariables = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return tryCatch(function () {
      if (typeof expression === 'function') {
        return expression.call(dataContext);
      }

      return new Function(['$data'].concat(_toConsumableArray(Object.keys(additionalHelperVariables))), "var __alpine_result; with($data) { __alpine_result = ".concat(expression, " }; return __alpine_result")).apply(void 0, [dataContext].concat(_toConsumableArray(Object.values(additionalHelperVariables))));
    }, {
      el: el,
      expression: expression
    });
  }

  function saferEvalNoReturn(el, expression, dataContext) {
    var additionalHelperVariables = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return tryCatch(function () {
      if (typeof expression === 'function') {
        return Promise.resolve(expression.call(dataContext, additionalHelperVariables['$event']));
      }

      var AsyncFunction = Function;
      /* MODERN-ONLY:START */

      AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))).constructor;
      /* MODERN-ONLY:END */
      // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
      // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.

      if (Object.keys(dataContext).includes(expression)) {
        var methodReference = new Function(['dataContext'].concat(_toConsumableArray(Object.keys(additionalHelperVariables))), "with(dataContext) { return ".concat(expression, " }")).apply(void 0, [dataContext].concat(_toConsumableArray(Object.values(additionalHelperVariables))));

        if (typeof methodReference === 'function') {
          return Promise.resolve(methodReference.call(dataContext, additionalHelperVariables['$event']));
        } else {
          return Promise.resolve();
        }
      }

      return Promise.resolve(new AsyncFunction(['dataContext'].concat(_toConsumableArray(Object.keys(additionalHelperVariables))), "with(dataContext) { ".concat(expression, " }")).apply(void 0, [dataContext].concat(_toConsumableArray(Object.values(additionalHelperVariables)))));
    }, {
      el: el,
      expression: expression
    });
  }

  var xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;

  function isXAttr(attr) {
    var name = replaceAtAndColonWithStandardSyntax(attr.name);
    return xAttrRE.test(name);
  }

  function getXAttrs(el, component, type) {
    var directives = Array.from(el.attributes).filter(isXAttr).map(parseHtmlAttribute); // Get an object of directives from x-spread.

    var spreadDirective = directives.filter(function (directive) {
      return directive.type === 'spread';
    })[0];

    if (spreadDirective) {
      var spreadObject = saferEval(el, spreadDirective.expression, component.$data); // Add x-spread directives to the pile of existing directives.

      directives = directives.concat(Object.entries(spreadObject).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            name = _ref4[0],
            value = _ref4[1];

        return parseHtmlAttribute({
          name: name,
          value: value
        });
      }));
    }

    if (type) return directives.filter(function (i) {
      return i.type === type;
    });
    return sortDirectives(directives);
  }

  function sortDirectives(directives) {
    var directiveOrder = ['bind', 'model', 'show', 'catch-all'];
    return directives.sort(function (a, b) {
      var typeA = directiveOrder.indexOf(a.type) === -1 ? 'catch-all' : a.type;
      var typeB = directiveOrder.indexOf(b.type) === -1 ? 'catch-all' : b.type;
      return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
    });
  }

  function parseHtmlAttribute(_ref5) {
    var name = _ref5.name,
        value = _ref5.value;
    var normalizedName = replaceAtAndColonWithStandardSyntax(name);
    var typeMatch = normalizedName.match(xAttrRE);
    var valueMatch = normalizedName.match(/:([a-zA-Z0-9\-:]+)/);
    var modifiers = normalizedName.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map(function (i) {
        return i.replace('.', '');
      }),
      expression: value
    };
  }

  function isBooleanAttr(attrName) {
    // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
    // Array roughly ordered by estimated usage
    var booleanAttributes = ['disabled', 'checked', 'required', 'readonly', 'hidden', 'open', 'selected', 'autofocus', 'itemscope', 'multiple', 'novalidate', 'allowfullscreen', 'allowpaymentrequest', 'formnovalidate', 'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'default', 'ismap', 'reversed', 'async', 'defer', 'nomodule'];
    return booleanAttributes.includes(attrName);
  }

  function replaceAtAndColonWithStandardSyntax(name) {
    if (name.startsWith('@')) {
      return name.replace('@', 'x-on:');
    } else if (name.startsWith(':')) {
      return name.replace(':', 'x-bind:');
    }

    return name;
  }

  function convertClassStringToArray(classList) {
    var filterFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Boolean;
    return classList.split(' ').filter(filterFn);
  }

  var TRANSITION_TYPE_IN = 'in';
  var TRANSITION_TYPE_OUT = 'out';
  var TRANSITION_CANCELLED = 'cancelled';

  function transitionIn(el, show, reject, component) {
    var forceSkip = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    // We don't want to transition on the initial page load.
    if (forceSkip) return show();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_IN) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    var attrs = getXAttrs(el, component, 'transition');
    var showAttr = getXAttrs(el, component, 'show')[0]; // If this is triggered by a x-show.transition.

    if (showAttr && showAttr.modifiers.includes('transition')) {
      var modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.

      if (modifiers.includes('out') && !modifiers.includes('in')) return show();
      var settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out'); // If x-show.transition.in...out... only use "in" related modifiers for this transition.

      modifiers = settingBothSidesOfTransition ? modifiers.filter(function (i, index) {
        return index < modifiers.indexOf('out');
      }) : modifiers;
      transitionHelperIn(el, modifiers, show, reject); // Otherwise, we can assume x-transition:enter.
    } else if (attrs.some(function (attr) {
      return ['enter', 'enter-start', 'enter-end'].includes(attr.value);
    })) {
      transitionClassesIn(el, component, attrs, show, reject);
    } else {
      // If neither, just show that damn thing.
      show();
    }
  }

  function transitionOut(el, hide, reject, component) {
    var forceSkip = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    // We don't want to transition on the initial page load.
    if (forceSkip) return hide();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_OUT) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    var attrs = getXAttrs(el, component, 'transition');
    var showAttr = getXAttrs(el, component, 'show')[0];

    if (showAttr && showAttr.modifiers.includes('transition')) {
      var modifiers = showAttr.modifiers;
      if (modifiers.includes('in') && !modifiers.includes('out')) return hide();
      var settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out');
      modifiers = settingBothSidesOfTransition ? modifiers.filter(function (i, index) {
        return index > modifiers.indexOf('out');
      }) : modifiers;
      transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide, reject);
    } else if (attrs.some(function (attr) {
      return ['leave', 'leave-start', 'leave-end'].includes(attr.value);
    })) {
      transitionClassesOut(el, component, attrs, hide, reject);
    } else {
      hide();
    }
  }

  function transitionHelperIn(el, modifiers, showCallback, reject) {
    // Default values inspired by: https://material.io/design/motion/speed.html#duration
    var styleValues = {
      duration: modifierValue(modifiers, 'duration', 150),
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      },
      second: {
        opacity: 1,
        scale: 100
      }
    };
    transitionHelper(el, modifiers, showCallback, function () {}, reject, styleValues, TRANSITION_TYPE_IN);
  }

  function transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hideCallback, reject) {
    // Make the "out" transition .5x slower than the "in". (Visually better)
    // HOWEVER, if they explicitly set a duration for the "out" transition,
    // use that.
    var duration = settingBothSidesOfTransition ? modifierValue(modifiers, 'duration', 150) : modifierValue(modifiers, 'duration', 150) / 2;
    var styleValues = {
      duration: duration,
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 1,
        scale: 100
      },
      second: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      }
    };
    transitionHelper(el, modifiers, function () {}, hideCallback, reject, styleValues, TRANSITION_TYPE_OUT);
  }

  function modifierValue(modifiers, key, fallback) {
    // If the modifier isn't present, use the default.
    if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms

    var rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;

    if (key === 'scale') {
      // Check if the very next value is NOT a number and return the fallback.
      // If x-show.transition.scale, we'll use the default scale value.
      // That is how a user opts out of the opacity transition.
      if (!isNumeric(rawValue)) return fallback;
    }

    if (key === 'duration') {
      // Support x-show.transition.duration.500ms && duration.500
      var match = rawValue.match(/([0-9]+)ms/);
      if (match) return match[1];
    }

    if (key === 'origin') {
      // Support chaining origin directions: x-show.transition.top.right
      if (['top', 'right', 'left', 'center', 'bottom'].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(' ');
      }
    }

    return rawValue;
  }

  function transitionHelper(el, modifiers, hook1, hook2, reject, styleValues, type) {
    // clear the previous transition if exists to avoid caching the wrong styles
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    } // If the user set these style values, we'll put them back when we're done with them.


    var opacityCache = el.style.opacity;
    var transformCache = el.style.transform;
    var transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.

    var noModifiers = !modifiers.includes('opacity') && !modifiers.includes('scale');
    var transitionOpacity = noModifiers || modifiers.includes('opacity');
    var transitionScale = noModifiers || modifiers.includes('scale'); // These are the explicit stages of a transition (same stages for in and for out).
    // This way you can get a birds eye view of the hooks, and the differences
    // between them.

    var stages = {
      start: function start() {
        if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
        if (transitionScale) el.style.transform = "scale(".concat(styleValues.first.scale / 100, ")");
      },
      during: function during() {
        if (transitionScale) el.style.transformOrigin = styleValues.origin;
        el.style.transitionProperty = [transitionOpacity ? "opacity" : "", transitionScale ? "transform" : ""].join(' ').trim();
        el.style.transitionDuration = "".concat(styleValues.duration / 1000, "s");
        el.style.transitionTimingFunction = "cubic-bezier(0.4, 0.0, 0.2, 1)";
      },
      show: function show() {
        hook1();
      },
      end: function end() {
        if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
        if (transitionScale) el.style.transform = "scale(".concat(styleValues.second.scale / 100, ")");
      },
      hide: function hide() {
        hook2();
      },
      cleanup: function cleanup() {
        if (transitionOpacity) el.style.opacity = opacityCache;
        if (transitionScale) el.style.transform = transformCache;
        if (transitionScale) el.style.transformOrigin = transformOriginCache;
        el.style.transitionProperty = null;
        el.style.transitionDuration = null;
        el.style.transitionTimingFunction = null;
      }
    };
    transition(el, stages, type, reject);
  }

  var ensureStringExpression = function ensureStringExpression(expression, el, component) {
    return typeof expression === 'function' ? component.evaluateReturnExpression(el, expression) : expression;
  };

  function transitionClassesIn(el, component, directives, showCallback, reject) {
    var enter = convertClassStringToArray(ensureStringExpression((directives.find(function (i) {
      return i.value === 'enter';
    }) || {
      expression: ''
    }).expression, el, component));
    var enterStart = convertClassStringToArray(ensureStringExpression((directives.find(function (i) {
      return i.value === 'enter-start';
    }) || {
      expression: ''
    }).expression, el, component));
    var enterEnd = convertClassStringToArray(ensureStringExpression((directives.find(function (i) {
      return i.value === 'enter-end';
    }) || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, enter, enterStart, enterEnd, showCallback, function () {}, TRANSITION_TYPE_IN, reject);
  }

  function transitionClassesOut(el, component, directives, hideCallback, reject) {
    var leave = convertClassStringToArray(ensureStringExpression((directives.find(function (i) {
      return i.value === 'leave';
    }) || {
      expression: ''
    }).expression, el, component));
    var leaveStart = convertClassStringToArray(ensureStringExpression((directives.find(function (i) {
      return i.value === 'leave-start';
    }) || {
      expression: ''
    }).expression, el, component));
    var leaveEnd = convertClassStringToArray(ensureStringExpression((directives.find(function (i) {
      return i.value === 'leave-end';
    }) || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, leave, leaveStart, leaveEnd, function () {}, hideCallback, TRANSITION_TYPE_OUT, reject);
  }

  function transitionClasses(el, classesDuring, classesStart, classesEnd, hook1, hook2, type, reject) {
    // clear the previous transition if exists to avoid caching the wrong classes
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    }

    var originalClasses = el.__x_original_classes || [];
    var stages = {
      start: function start() {
        var _el$classList;

        (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classesStart));
      },
      during: function during() {
        var _el$classList2;

        (_el$classList2 = el.classList).add.apply(_el$classList2, _toConsumableArray(classesDuring));
      },
      show: function show() {
        hook1();
      },
      end: function end() {
        var _el$classList3, _el$classList4;

        // Don't remove classes that were in the original class attribute.
        (_el$classList3 = el.classList).remove.apply(_el$classList3, _toConsumableArray(classesStart.filter(function (i) {
          return !originalClasses.includes(i);
        })));

        (_el$classList4 = el.classList).add.apply(_el$classList4, _toConsumableArray(classesEnd));
      },
      hide: function hide() {
        hook2();
      },
      cleanup: function cleanup() {
        var _el$classList5, _el$classList6;

        (_el$classList5 = el.classList).remove.apply(_el$classList5, _toConsumableArray(classesDuring.filter(function (i) {
          return !originalClasses.includes(i);
        })));

        (_el$classList6 = el.classList).remove.apply(_el$classList6, _toConsumableArray(classesEnd.filter(function (i) {
          return !originalClasses.includes(i);
        })));
      }
    };
    transition(el, stages, type, reject);
  }

  function transition(el, stages, type, reject) {
    var finish = once(function () {
      stages.hide(); // Adding an "isConnected" check, in case the callback
      // removed the element from the DOM.

      if (el.isConnected) {
        stages.cleanup();
      }

      delete el.__x_transition;
    });
    el.__x_transition = {
      // Set transition type so we can avoid clearing transition if the direction is the same
      type: type,
      // create a callback for the last stages of the transition so we can call it
      // from different point and early terminate it. Once will ensure that function
      // is only called one time.
      cancel: once(function () {
        reject(TRANSITION_CANCELLED);
        finish();
      }),
      finish: finish,
      // This store the next animation frame so we can cancel it
      nextFrame: null
    };
    stages.start();
    stages.during();
    el.__x_transition.nextFrame = requestAnimationFrame(function () {
      // Note: Safari's transitionDuration property will list out comma separated transition durations
      // for every single transition property. Let's grab the first one and call it a day.
      var duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1000;

      if (duration === 0) {
        duration = Number(getComputedStyle(el).animationDuration.replace('s', '')) * 1000;
      }

      stages.show();
      el.__x_transition.nextFrame = requestAnimationFrame(function () {
        stages.end();
        setTimeout(el.__x_transition.finish, duration);
      });
    });
  }

  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  } // Thanks @vuejs
  // https://github.com/vuejs/vue/blob/4de4649d9637262a9b007720b59f80ac72a5620c/src/shared/util.js


  function once(callback) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      }
    };
  }

  function handleForDirective(component, templateEl, expression, initialUpdate, extraVars) {
    warnIfMalformedTemplate(templateEl, 'x-for');
    var iteratorNames = typeof expression === 'function' ? parseForExpression(component.evaluateReturnExpression(templateEl, expression)) : parseForExpression(expression);
    var items = evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, templateEl, iteratorNames, extraVars); // As we walk the array, we'll also walk the DOM (updating/creating as we go).

    var currentEl = templateEl;
    items.forEach(function (item, index) {
      var iterationScopeVariables = getIterationScopeVariables(iteratorNames, item, index, items, extraVars());
      var currentKey = generateKeyForIteration(component, templateEl, index, iterationScopeVariables);
      var nextEl = lookAheadForMatchingKeyedElementAndMoveItIfFound(currentEl.nextElementSibling, currentKey); // If we haven't found a matching key, insert the element at the current position.

      if (!nextEl) {
        nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl); // And transition it in if it's not the first page load.

        transitionIn(nextEl, function () {}, function () {}, component, initialUpdate);
        nextEl.__x_for = iterationScopeVariables;
        component.initializeElements(nextEl, function () {
          return nextEl.__x_for;
        }); // Otherwise update the element we found.
      } else {
        // Temporarily remove the key indicator to allow the normal "updateElements" to work.
        delete nextEl.__x_for_key;
        nextEl.__x_for = iterationScopeVariables;
        component.updateElements(nextEl, function () {
          return nextEl.__x_for;
        });
      }

      currentEl = nextEl;
      currentEl.__x_for_key = currentKey;
    });
    removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component);
  } // This was taken from VueJS 2.* core. Thanks Vue!


  function parseForExpression(expression) {
    var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    var stripParensRE = /^\(|\)$/g;
    var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    var inMatch = String(expression).match(forAliasRE);
    if (!inMatch) return;
    var res = {};
    res.items = inMatch[2].trim();
    var item = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = item.match(forIteratorRE);

    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, '').trim();
      res.index = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }

    return res;
  }

  function getIterationScopeVariables(iteratorNames, item, index, items, extraVars) {
    // We must create a new object, so each iteration has a new scope
    var scopeVariables = extraVars ? _objectSpread2({}, extraVars) : {};
    scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }

  function generateKeyForIteration(component, el, index, iterationScopeVariables) {
    var bindKeyAttribute = getXAttrs(el, component, 'bind').filter(function (attr) {
      return attr.value === 'key';
    })[0]; // If the dev hasn't specified a key, just return the index of the iteration.

    if (!bindKeyAttribute) return index;
    return component.evaluateReturnExpression(el, bindKeyAttribute.expression, function () {
      return iterationScopeVariables;
    });
  }

  function evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, el, iteratorNames, extraVars) {
    var ifAttribute = getXAttrs(el, component, 'if')[0];

    if (ifAttribute && !component.evaluateReturnExpression(el, ifAttribute.expression)) {
      return [];
    }

    var items = component.evaluateReturnExpression(el, iteratorNames.items, extraVars); // This adds support for the `i in n` syntax.

    if (isNumeric(items) && items >= 0) {
      items = Array.from(Array(items).keys(), function (i) {
        return i + 1;
      });
    }

    return items;
  }

  function addElementInLoopAfterCurrentEl(templateEl, currentEl) {
    var clone = document.importNode(templateEl.content, true);
    currentEl.parentElement.insertBefore(clone, currentEl.nextElementSibling);
    return currentEl.nextElementSibling;
  }

  function lookAheadForMatchingKeyedElementAndMoveItIfFound(nextEl, currentKey) {
    if (!nextEl) return; // If we are already past the x-for generated elements, we don't need to look ahead.

    if (nextEl.__x_for_key === undefined) return; // If the the key's DO match, no need to look ahead.

    if (nextEl.__x_for_key === currentKey) return nextEl; // If they don't, we'll look ahead for a match.
    // If we find it, we'll move it to the current position in the loop.

    var tmpNextEl = nextEl;

    while (tmpNextEl) {
      if (tmpNextEl.__x_for_key === currentKey) {
        return tmpNextEl.parentElement.insertBefore(tmpNextEl, nextEl);
      }

      tmpNextEl = tmpNextEl.nextElementSibling && tmpNextEl.nextElementSibling.__x_for_key !== undefined ? tmpNextEl.nextElementSibling : false;
    }
  }

  function removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component) {
    var nextElementFromOldLoop = currentEl.nextElementSibling && currentEl.nextElementSibling.__x_for_key !== undefined ? currentEl.nextElementSibling : false;

    var _loop = function _loop() {
      var nextElementFromOldLoopImmutable = nextElementFromOldLoop;
      var nextSibling = nextElementFromOldLoop.nextElementSibling;
      transitionOut(nextElementFromOldLoop, function () {
        nextElementFromOldLoopImmutable.remove();
      }, function () {}, component);
      nextElementFromOldLoop = nextSibling && nextSibling.__x_for_key !== undefined ? nextSibling : false;
    };

    while (nextElementFromOldLoop) {
      _loop();
    }
  }

  function handleAttributeBindingDirective(component, el, attrName, expression, extraVars, attrType, modifiers) {
    var value = component.evaluateReturnExpression(el, expression, extraVars);

    if (attrName === 'value') {
      if (Alpine.ignoreFocusedForValueBinding && document.activeElement.isSameNode(el)) return; // If nested model key is undefined, set the default value to empty string.

      if (value === undefined && String(expression).match(/\./)) {
        value = '';
      }

      if (el.type === 'radio') {
        // Set radio value from x-bind:value, if no "value" attribute exists.
        // If there are any initial state values, radio will have a correct
        // "checked" value since x-bind:value is processed before x-model.
        if (el.attributes.value === undefined && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      } else if (el.type === 'checkbox') {
        // If we are explicitly binding a string to the :value, set the string,
        // If the value is a boolean, leave it alone, it will be set to "on"
        // automatically.
        if (typeof value !== 'boolean' && ![null, undefined].includes(value) && attrType === 'bind') {
          el.value = String(value);
        } else if (attrType !== 'bind') {
          if (Array.isArray(value)) {
            // I'm purposely not using Array.includes here because it's
            // strict, and because of Numeric/String mis-casting, I
            // want the "includes" to be "fuzzy".
            el.checked = value.some(function (val) {
              return checkedAttrLooseCompare(val, el.value);
            });
          } else {
            el.checked = !!value;
          }
        }
      } else if (el.tagName === 'SELECT') {
        updateSelect(el, value);
      } else {
        if (el.value === value) return;
        el.value = value;
      }
    } else if (attrName === 'class') {
      if (Array.isArray(value)) {
        var originalClasses = el.__x_original_classes || [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(value)).join(' '));
      } else if (_typeof(value) === 'object') {
        // Sorting the keys / class names by their boolean value will ensure that
        // anything that evaluates to `false` and needs to remove classes is run first.
        var keysSortedByBooleanValue = Object.keys(value).sort(function (a, b) {
          return value[a] - value[b];
        });
        keysSortedByBooleanValue.forEach(function (classNames) {
          if (value[classNames]) {
            convertClassStringToArray(classNames).forEach(function (className) {
              return el.classList.add(className);
            });
          } else {
            convertClassStringToArray(classNames).forEach(function (className) {
              return el.classList.remove(className);
            });
          }
        });
      } else {
        var _originalClasses = el.__x_original_classes || [];

        var newClasses = value ? convertClassStringToArray(value) : [];
        el.setAttribute('class', arrayUnique(_originalClasses.concat(newClasses)).join(' '));
      }
    } else {
      attrName = modifiers.includes('camel') ? camelCase(attrName) : attrName; // If an attribute's bound value is null, undefined or false, remove the attribute

      if ([null, undefined, false].includes(value)) {
        el.removeAttribute(attrName);
      } else {
        isBooleanAttr(attrName) ? setIfChanged(el, attrName, attrName) : setIfChanged(el, attrName, value);
      }
    }
  }

  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }

  function updateSelect(el, value) {
    var arrayWrappedValue = [].concat(value).map(function (value) {
      return value + '';
    });
    Array.from(el.options).forEach(function (option) {
      option.selected = arrayWrappedValue.includes(option.value || option.text);
    });
  }

  function handleTextDirective(el, output, expression) {
    // If nested model key is undefined, set the default value to empty string.
    if (output === undefined && String(expression).match(/\./)) {
      output = '';
    }

    el.textContent = output;
  }

  function handleHtmlDirective(component, el, expression, extraVars) {
    el.innerHTML = component.evaluateReturnExpression(el, expression, extraVars);
  }

  function handleShowDirective(component, el, value, modifiers) {
    var initialUpdate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    var hide = function hide() {
      el.style.display = 'none';
      el.__x_is_shown = false;
    };

    var show = function show() {
      if (el.style.length === 1 && el.style.display === 'none') {
        el.removeAttribute('style');
      } else {
        el.style.removeProperty('display');
      }

      el.__x_is_shown = true;
    };

    if (initialUpdate === true) {
      if (value) {
        show();
      } else {
        hide();
      }

      return;
    }

    var handle = function handle(resolve, reject) {
      if (value) {
        if (el.style.display === 'none' || el.__x_transition) {
          transitionIn(el, function () {
            show();
          }, reject, component);
        }

        resolve(function () {});
      } else {
        if (el.style.display !== 'none') {
          transitionOut(el, function () {
            resolve(function () {
              hide();
            });
          }, reject, component);
        } else {
          resolve(function () {});
        }
      }
    }; // The working of x-show is a bit complex because we need to
    // wait for any child transitions to finish before hiding
    // some element. Also, this has to be done recursively.
    // If x-show.immediate, foregoe the waiting.


    if (modifiers.includes('immediate')) {
      handle(function (finish) {
        return finish();
      }, function () {});
      return;
    } // x-show is encountered during a DOM tree walk. If an element
    // we encounter is NOT a child of another x-show element we
    // can execute the previous x-show stack (if one exists).


    if (component.showDirectiveLastElement && !component.showDirectiveLastElement.contains(el)) {
      component.executeAndClearRemainingShowDirectiveStack();
    }

    component.showDirectiveStack.push(handle);
    component.showDirectiveLastElement = el;
  }

  function handleIfDirective(component, el, expressionResult, initialUpdate, extraVars) {
    warnIfMalformedTemplate(el, 'x-if');
    var elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;

    if (expressionResult && (!elementHasAlreadyBeenAdded || el.__x_transition)) {
      var clone = document.importNode(el.content, true);
      el.parentElement.insertBefore(clone, el.nextElementSibling);
      transitionIn(el.nextElementSibling, function () {}, function () {}, component, initialUpdate);
      component.initializeElements(el.nextElementSibling, extraVars);
      el.nextElementSibling.__x_inserted_me = true;
    } else if (!expressionResult && elementHasAlreadyBeenAdded) {
      transitionOut(el.nextElementSibling, function () {
        el.nextElementSibling.remove();
      }, function () {}, component, initialUpdate);
    }
  }

  function registerListener(component, el, event, modifiers, expression) {
    var extraVars = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    var options = {
      passive: modifiers.includes('passive')
    };

    if (modifiers.includes('camel')) {
      event = camelCase(event);
    }

    var _handler2, listenerTarget;

    if (modifiers.includes('away')) {
      listenerTarget = document;

      _handler2 = function handler(e) {
        // Don't do anything if the click came from the element or within it.
        if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

        if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
        // is from outside it, let's run the expression.

        runListenerHandler(component, expression, e, extraVars);

        if (modifiers.includes('once')) {
          document.removeEventListener(event, _handler2, options);
        }
      };
    } else {
      listenerTarget = modifiers.includes('window') ? window : modifiers.includes('document') ? document : el;

      _handler2 = function _handler(e) {
        // Remove this global event handler if the element that declared it
        // has been removed. It's now stale.
        if (listenerTarget === window || listenerTarget === document) {
          if (!document.body.contains(el)) {
            listenerTarget.removeEventListener(event, _handler2, options);
            return;
          }
        }

        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }

        if (modifiers.includes('prevent')) e.preventDefault();
        if (modifiers.includes('stop')) e.stopPropagation(); // If the .self modifier isn't present, or if it is present and
        // the target element matches the element we are registering the
        // event on, run the handler

        if (!modifiers.includes('self') || e.target === el) {
          var returnValue = runListenerHandler(component, expression, e, extraVars);
          returnValue.then(function (value) {
            if (value === false) {
              e.preventDefault();
            } else {
              if (modifiers.includes('once')) {
                listenerTarget.removeEventListener(event, _handler2, options);
              }
            }
          });
        }
      };
    }

    if (modifiers.includes('debounce')) {
      var nextModifier = modifiers[modifiers.indexOf('debounce') + 1] || 'invalid-wait';
      var wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250;
      _handler2 = debounce(_handler2, wait);
    }

    listenerTarget.addEventListener(event, _handler2, options);
  }

  function runListenerHandler(component, expression, e, extraVars) {
    return component.evaluateCommandExpression(e.target, expression, function () {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        '$event': e
      });
    });
  }

  function isKeyEvent(event) {
    return ['keydown', 'keyup'].includes(event);
  }

  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    var keyModifiers = modifiers.filter(function (i) {
      return !['window', 'document', 'prevent', 'stop'].includes(i);
    });

    if (keyModifiers.includes('debounce')) {
      var debounceIndex = keyModifiers.indexOf('debounce');
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
    } // If no modifier is specified, we'll call it a press.


    if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.

    if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false; // The user is listening for key combinations.

    var systemKeyModifiers = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'];
    var selectedSystemKeyModifiers = systemKeyModifiers.filter(function (modifier) {
      return keyModifiers.includes(modifier);
    });
    keyModifiers = keyModifiers.filter(function (i) {
      return !selectedSystemKeyModifiers.includes(i);
    });

    if (selectedSystemKeyModifiers.length > 0) {
      var activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(function (modifier) {
        // Alias "cmd" and "super" to "meta"
        if (modifier === 'cmd' || modifier === 'super') modifier = 'meta';
        return e["".concat(modifier, "Key")];
      }); // If all the modifiers selected are pressed, ...

      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        // AND the remaining key is pressed as well. It's a press.
        if (keyModifiers[0] === keyToModifier(e.key)) return false;
      }
    } // We'll call it NOT a valid keypress.


    return true;
  }

  function keyToModifier(key) {
    switch (key) {
      case '/':
        return 'slash';

      case ' ':
      case 'Spacebar':
        return 'space';

      default:
        return key && kebabCase(key);
    }
  }

  function registerModelListener(component, el, modifiers, expression, extraVars) {
    // If the element we are binding to is a select, a radio, or checkbox
    // we'll listen for the change event instead of the "input" event.
    var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';
    var listenerExpression = "".concat(expression, " = rightSideOfExpression($event, ").concat(expression, ")");
    registerListener(component, el, event, modifiers, listenerExpression, function () {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        rightSideOfExpression: generateModelAssignmentFunction(el, modifiers, expression)
      });
    });
  }

  function generateModelAssignmentFunction(el, modifiers, expression) {
    if (el.type === 'radio') {
      // Radio buttons only work properly when they share a name attribute.
      // People might assume we take care of that for them, because
      // they already set a shared "x-model" attribute.
      if (!el.hasAttribute('name')) el.setAttribute('name', expression);
    }

    return function (event, currentValue) {
      // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
      if (event instanceof CustomEvent && event.detail) {
        return event.detail;
      } else if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle its value inside the array.
        if (Array.isArray(currentValue)) {
          var newValue = modifiers.includes('number') ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter(function (el) {
            return !checkedAttrLooseCompare(el, newValue);
          });
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        return modifiers.includes('number') ? Array.from(event.target.selectedOptions).map(function (option) {
          var rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map(function (option) {
          return option.value || option.text;
        });
      } else {
        var rawValue = event.target.value;
        return modifiers.includes('number') ? safeParseNumber(rawValue) : modifiers.includes('trim') ? rawValue.trim() : rawValue;
      }
    };
  }

  function safeParseNumber(rawValue) {
    var number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric(number) ? number : rawValue;
  }
  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */


  var isArray = Array.isArray;
  var _getPrototypeOf = Object.getPrototypeOf,
      ObjectCreate = Object.create,
      ObjectDefineProperty = Object.defineProperty,
      ObjectDefineProperties = Object.defineProperties,
      _isExtensible = Object.isExtensible,
      _getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
      getOwnPropertyNames = Object.getOwnPropertyNames,
      getOwnPropertySymbols = Object.getOwnPropertySymbols,
      _preventExtensions = Object.preventExtensions,
      hasOwnProperty = Object.hasOwnProperty;
  var _Array$prototype = Array.prototype,
      ArrayPush = _Array$prototype.push,
      ArrayConcat = _Array$prototype.concat,
      ArrayMap = _Array$prototype.map;

  function isUndefined(obj) {
    return obj === undefined;
  }

  function isFunction(obj) {
    return typeof obj === 'function';
  }

  function isObject(obj) {
    return _typeof(obj) === 'object';
  }

  var proxyToValueMap = new WeakMap();

  function registerProxy(proxy, value) {
    proxyToValueMap.set(proxy, value);
  }

  var unwrap = function unwrap(replicaOrAny) {
    return proxyToValueMap.get(replicaOrAny) || replicaOrAny;
  };

  function wrapValue(membrane, value) {
    return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
  }
  /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */


  function unwrapDescriptor(descriptor) {
    if (hasOwnProperty.call(descriptor, 'value')) {
      descriptor.value = unwrap(descriptor.value);
    }

    return descriptor;
  }

  function lockShadowTarget(membrane, shadowTarget, originalTarget) {
    var targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
    targetKeys.forEach(function (key) {
      var descriptor = _getOwnPropertyDescriptor(originalTarget, key); // We do not need to wrap the descriptor if configurable
      // Because we can deal with wrapping it when user goes through
      // Get own property descriptor. There is also a chance that this descriptor
      // could change sometime in the future, so we can defer wrapping
      // until we need to


      if (!descriptor.configurable) {
        descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
      }

      ObjectDefineProperty(shadowTarget, key, descriptor);
    });

    _preventExtensions(shadowTarget);
  }

  var ReactiveProxyHandler = /*#__PURE__*/function () {
    function ReactiveProxyHandler(membrane, value) {
      _classCallCheck(this, ReactiveProxyHandler);

      this.originalTarget = value;
      this.membrane = membrane;
    }

    _createClass(ReactiveProxyHandler, [{
      key: "get",
      value: function get(shadowTarget, key) {
        var originalTarget = this.originalTarget,
            membrane = this.membrane;
        var value = originalTarget[key];
        var valueObserved = membrane.valueObserved;
        valueObserved(originalTarget, key);
        return membrane.getProxy(value);
      }
    }, {
      key: "set",
      value: function set(shadowTarget, key, value) {
        var originalTarget = this.originalTarget,
            valueMutated = this.membrane.valueMutated;
        var oldValue = originalTarget[key];

        if (oldValue !== value) {
          originalTarget[key] = value;
          valueMutated(originalTarget, key);
        } else if (key === 'length' && isArray(originalTarget)) {
          // fix for issue #236: push will add the new index, and by the time length
          // is updated, the internal length is already equal to the new length value
          // therefore, the oldValue is equal to the value. This is the forking logic
          // to support this use case.
          valueMutated(originalTarget, key);
        }

        return true;
      }
    }, {
      key: "deleteProperty",
      value: function deleteProperty(shadowTarget, key) {
        var originalTarget = this.originalTarget,
            valueMutated = this.membrane.valueMutated;
        delete originalTarget[key];
        valueMutated(originalTarget, key);
        return true;
      }
    }, {
      key: "apply",
      value: function apply(shadowTarget, thisArg, argArray) {
        /* No op */
      }
    }, {
      key: "construct",
      value: function construct(target, argArray, newTarget) {
        /* No op */
      }
    }, {
      key: "has",
      value: function has(shadowTarget, key) {
        var originalTarget = this.originalTarget,
            valueObserved = this.membrane.valueObserved;
        valueObserved(originalTarget, key);
        return key in originalTarget;
      }
    }, {
      key: "ownKeys",
      value: function ownKeys(shadowTarget) {
        var originalTarget = this.originalTarget;
        return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
    }, {
      key: "isExtensible",
      value: function isExtensible(shadowTarget) {
        var shadowIsExtensible = _isExtensible(shadowTarget);

        if (!shadowIsExtensible) {
          return shadowIsExtensible;
        }

        var originalTarget = this.originalTarget,
            membrane = this.membrane;

        var targetIsExtensible = _isExtensible(originalTarget);

        if (!targetIsExtensible) {
          lockShadowTarget(membrane, shadowTarget, originalTarget);
        }

        return targetIsExtensible;
      }
    }, {
      key: "setPrototypeOf",
      value: function setPrototypeOf(shadowTarget, prototype) {}
    }, {
      key: "getPrototypeOf",
      value: function getPrototypeOf(shadowTarget) {
        var originalTarget = this.originalTarget;
        return _getPrototypeOf(originalTarget);
      }
    }, {
      key: "getOwnPropertyDescriptor",
      value: function getOwnPropertyDescriptor(shadowTarget, key) {
        var originalTarget = this.originalTarget,
            membrane = this.membrane;
        var valueObserved = this.membrane.valueObserved; // keys looked up via hasOwnProperty need to be reactive

        valueObserved(originalTarget, key);

        var desc = _getOwnPropertyDescriptor(originalTarget, key);

        if (isUndefined(desc)) {
          return desc;
        }

        var shadowDescriptor = _getOwnPropertyDescriptor(shadowTarget, key);

        if (!isUndefined(shadowDescriptor)) {
          return shadowDescriptor;
        } // Note: by accessing the descriptor, the key is marked as observed
        // but access to the value, setter or getter (if available) cannot observe
        // mutations, just like regular methods, in which case we just do nothing.


        desc = wrapDescriptor(membrane, desc, wrapValue);

        if (!desc.configurable) {
          // If descriptor from original target is not configurable,
          // We must copy the wrapped descriptor over to the shadow target.
          // Otherwise, proxy will throw an invariant error.
          // This is our last chance to lock the value.
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
          ObjectDefineProperty(shadowTarget, key, desc);
        }

        return desc;
      }
    }, {
      key: "preventExtensions",
      value: function preventExtensions(shadowTarget) {
        var originalTarget = this.originalTarget,
            membrane = this.membrane;
        lockShadowTarget(membrane, shadowTarget, originalTarget);

        _preventExtensions(originalTarget);

        return true;
      }
    }, {
      key: "defineProperty",
      value: function defineProperty(shadowTarget, key, descriptor) {
        var originalTarget = this.originalTarget,
            membrane = this.membrane;
        var valueMutated = membrane.valueMutated;
        var configurable = descriptor.configurable; // We have to check for value in descriptor
        // because Object.freeze(proxy) calls this method
        // with only { configurable: false, writeable: false }
        // Additionally, method will only be called with writeable:false
        // if the descriptor has a value, as opposed to getter/setter
        // So we can just check if writable is present and then see if
        // value is present. This eliminates getter and setter descriptors

        if (hasOwnProperty.call(descriptor, 'writable') && !hasOwnProperty.call(descriptor, 'value')) {
          var originalDescriptor = _getOwnPropertyDescriptor(originalTarget, key);

          descriptor.value = originalDescriptor.value;
        }

        ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));

        if (configurable === false) {
          ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
        }

        valueMutated(originalTarget, key);
        return true;
      }
    }]);

    return ReactiveProxyHandler;
  }();

  function wrapReadOnlyValue(membrane, value) {
    return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
  }

  var ReadOnlyHandler = /*#__PURE__*/function () {
    function ReadOnlyHandler(membrane, value) {
      _classCallCheck(this, ReadOnlyHandler);

      this.originalTarget = value;
      this.membrane = membrane;
    }

    _createClass(ReadOnlyHandler, [{
      key: "get",
      value: function get(shadowTarget, key) {
        var membrane = this.membrane,
            originalTarget = this.originalTarget;
        var value = originalTarget[key];
        var valueObserved = membrane.valueObserved;
        valueObserved(originalTarget, key);
        return membrane.getReadOnlyProxy(value);
      }
    }, {
      key: "set",
      value: function set(shadowTarget, key, value) {
        return false;
      }
    }, {
      key: "deleteProperty",
      value: function deleteProperty(shadowTarget, key) {
        return false;
      }
    }, {
      key: "apply",
      value: function apply(shadowTarget, thisArg, argArray) {
        /* No op */
      }
    }, {
      key: "construct",
      value: function construct(target, argArray, newTarget) {
        /* No op */
      }
    }, {
      key: "has",
      value: function has(shadowTarget, key) {
        var originalTarget = this.originalTarget,
            valueObserved = this.membrane.valueObserved;
        valueObserved(originalTarget, key);
        return key in originalTarget;
      }
    }, {
      key: "ownKeys",
      value: function ownKeys(shadowTarget) {
        var originalTarget = this.originalTarget;
        return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
    }, {
      key: "setPrototypeOf",
      value: function setPrototypeOf(shadowTarget, prototype) {}
    }, {
      key: "getOwnPropertyDescriptor",
      value: function getOwnPropertyDescriptor(shadowTarget, key) {
        var originalTarget = this.originalTarget,
            membrane = this.membrane;
        var valueObserved = membrane.valueObserved; // keys looked up via hasOwnProperty need to be reactive

        valueObserved(originalTarget, key);

        var desc = _getOwnPropertyDescriptor(originalTarget, key);

        if (isUndefined(desc)) {
          return desc;
        }

        var shadowDescriptor = _getOwnPropertyDescriptor(shadowTarget, key);

        if (!isUndefined(shadowDescriptor)) {
          return shadowDescriptor;
        } // Note: by accessing the descriptor, the key is marked as observed
        // but access to the value or getter (if available) cannot be observed,
        // just like regular methods, in which case we just do nothing.


        desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);

        if (hasOwnProperty.call(desc, 'set')) {
          desc.set = undefined; // readOnly membrane does not allow setters
        }

        if (!desc.configurable) {
          // If descriptor from original target is not configurable,
          // We must copy the wrapped descriptor over to the shadow target.
          // Otherwise, proxy will throw an invariant error.
          // This is our last chance to lock the value.
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
          ObjectDefineProperty(shadowTarget, key, desc);
        }

        return desc;
      }
    }, {
      key: "preventExtensions",
      value: function preventExtensions(shadowTarget) {
        return false;
      }
    }, {
      key: "defineProperty",
      value: function defineProperty(shadowTarget, key, descriptor) {
        return false;
      }
    }]);

    return ReadOnlyHandler;
  }();

  function createShadowTarget(value) {
    var shadowTarget = undefined;

    if (isArray(value)) {
      shadowTarget = [];
    } else if (isObject(value)) {
      shadowTarget = {};
    }

    return shadowTarget;
  }

  var ObjectDotPrototype = Object.prototype;

  function defaultValueIsObservable(value) {
    // intentionally checking for null
    if (value === null) {
      return false;
    } // treat all non-object types, including undefined, as non-observable values


    if (_typeof(value) !== 'object') {
      return false;
    }

    if (isArray(value)) {
      return true;
    }

    var proto = _getPrototypeOf(value);

    return proto === ObjectDotPrototype || proto === null || _getPrototypeOf(proto) === null;
  }

  var defaultValueObserved = function defaultValueObserved(obj, key) {
    /* do nothing */
  };

  var defaultValueMutated = function defaultValueMutated(obj, key) {
    /* do nothing */
  };

  var defaultValueDistortion = function defaultValueDistortion(value) {
    return value;
  };

  function wrapDescriptor(membrane, descriptor, getValue) {
    var set = descriptor.set,
        get = descriptor.get;

    if (hasOwnProperty.call(descriptor, 'value')) {
      descriptor.value = getValue(membrane, descriptor.value);
    } else {
      if (!isUndefined(get)) {
        descriptor.get = function () {
          // invoking the original getter with the original target
          return getValue(membrane, get.call(unwrap(this)));
        };
      }

      if (!isUndefined(set)) {
        descriptor.set = function (value) {
          // At this point we don't have a clear indication of whether
          // or not a valid mutation will occur, we don't have the key,
          // and we are not sure why and how they are invoking this setter.
          // Nevertheless we preserve the original semantics by invoking the
          // original setter with the original target and the unwrapped value
          set.call(unwrap(this), membrane.unwrapProxy(value));
        };
      }
    }

    return descriptor;
  }

  var ReactiveMembrane = /*#__PURE__*/function () {
    function ReactiveMembrane(options) {
      _classCallCheck(this, ReactiveMembrane);

      this.valueDistortion = defaultValueDistortion;
      this.valueMutated = defaultValueMutated;
      this.valueObserved = defaultValueObserved;
      this.valueIsObservable = defaultValueIsObservable;
      this.objectGraph = new WeakMap();

      if (!isUndefined(options)) {
        var valueDistortion = options.valueDistortion,
            valueMutated = options.valueMutated,
            valueObserved = options.valueObserved,
            valueIsObservable = options.valueIsObservable;
        this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
        this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
        this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
        this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
      }
    }

    _createClass(ReactiveMembrane, [{
      key: "getProxy",
      value: function getProxy(value) {
        var unwrappedValue = unwrap(value);
        var distorted = this.valueDistortion(unwrappedValue);

        if (this.valueIsObservable(distorted)) {
          var o = this.getReactiveState(unwrappedValue, distorted); // when trying to extract the writable version of a readonly
          // we return the readonly.

          return o.readOnly === value ? value : o.reactive;
        }

        return distorted;
      }
    }, {
      key: "getReadOnlyProxy",
      value: function getReadOnlyProxy(value) {
        value = unwrap(value);
        var distorted = this.valueDistortion(value);

        if (this.valueIsObservable(distorted)) {
          return this.getReactiveState(value, distorted).readOnly;
        }

        return distorted;
      }
    }, {
      key: "unwrapProxy",
      value: function unwrapProxy(p) {
        return unwrap(p);
      }
    }, {
      key: "getReactiveState",
      value: function getReactiveState(value, distortedValue) {
        var objectGraph = this.objectGraph;
        var reactiveState = objectGraph.get(distortedValue);

        if (reactiveState) {
          return reactiveState;
        }

        var membrane = this;
        reactiveState = {
          get reactive() {
            var reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue); // caching the reactive proxy after the first time it is accessed

            var proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
            registerProxy(proxy, value);
            ObjectDefineProperty(this, 'reactive', {
              value: proxy
            });
            return proxy;
          },

          get readOnly() {
            var readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue); // caching the readOnly proxy after the first time it is accessed

            var proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
            registerProxy(proxy, value);
            ObjectDefineProperty(this, 'readOnly', {
              value: proxy
            });
            return proxy;
          }

        };
        objectGraph.set(distortedValue, reactiveState);
        return reactiveState;
      }
    }]);

    return ReactiveMembrane;
  }();
  /** version: 0.26.0 */


  function wrap(data, mutationCallback) {
    var membrane = new ReactiveMembrane({
      valueMutated: function valueMutated(target, key) {
        mutationCallback(target, key);
      }
    });
    return {
      data: membrane.getProxy(data),
      membrane: membrane
    };
  }

  function unwrap$1(membrane, observable) {
    var unwrappedData = membrane.unwrapProxy(observable);
    var copy = {};
    Object.keys(unwrappedData).forEach(function (key) {
      if (['$el', '$refs', '$nextTick', '$watch'].includes(key)) return;
      copy[key] = unwrappedData[key];
    });
    return copy;
  }

  var Component = /*#__PURE__*/function () {
    function Component(el) {
      var _this = this;

      var componentForClone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, Component);

      this.$el = el;
      var dataAttr = this.$el.getAttribute('x-data');
      var dataExpression = dataAttr === '' ? '{}' : dataAttr;
      var initExpression = this.$el.getAttribute('x-init');
      var dataExtras = {
        $el: this.$el
      };
      var canonicalComponentElementReference = componentForClone ? componentForClone.$el : this.$el;
      Object.entries(Alpine.magicProperties).forEach(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            name = _ref7[0],
            callback = _ref7[1];

        Object.defineProperty(dataExtras, "$".concat(name), {
          get: function get() {
            return callback(canonicalComponentElementReference);
          }
        });
      });
      this.unobservedData = componentForClone ? componentForClone.getUnobservedData() : saferEval(el, dataExpression, dataExtras); // Construct a Proxy-based observable. This will be used to handle reactivity.

      var _this$wrapDataInObser = this.wrapDataInObservable(this.unobservedData),
          membrane = _this$wrapDataInObser.membrane,
          data = _this$wrapDataInObser.data;

      this.$data = data;
      this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
      // our magic properties to the original data for access.

      this.unobservedData.$el = this.$el;
      this.unobservedData.$refs = this.getRefsProxy();
      this.nextTickStack = [];

      this.unobservedData.$nextTick = function (callback) {
        _this.nextTickStack.push(callback);
      };

      this.watchers = {};

      this.unobservedData.$watch = function (property, callback) {
        if (!_this.watchers[property]) _this.watchers[property] = [];

        _this.watchers[property].push(callback);
      };
      /* MODERN-ONLY:START */
      // We remove this piece of code from the legacy build.
      // In IE11, we have already defined our helpers at this point.
      // Register custom magic properties.


      Object.entries(Alpine.magicProperties).forEach(function (_ref8) {
        var _ref9 = _slicedToArray(_ref8, 2),
            name = _ref9[0],
            callback = _ref9[1];

        Object.defineProperty(_this.unobservedData, "$".concat(name), {
          get: function get() {
            return callback(canonicalComponentElementReference, this.$el);
          }
        });
      });
      /* MODERN-ONLY:END */

      this.showDirectiveStack = [];
      this.showDirectiveLastElement;
      componentForClone || Alpine.onBeforeComponentInitializeds.forEach(function (callback) {
        return callback(_this);
      });
      var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)

      if (initExpression && !componentForClone) {
        // We want to allow data manipulation, but not trigger DOM updates just yet.
        // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
        this.pauseReactivity = true;
        initReturnedCallback = this.evaluateReturnExpression(this.$el, initExpression);
        this.pauseReactivity = false;
      } // Register all our listeners and set all our attribute bindings.
      // If we're cloning a component, the third parameter ensures no duplicate
      // event listeners are registered (the mutation observer will take care of them)


      this.initializeElements(this.$el, function () {}, componentForClone); // Use mutation observer to detect new elements being added within this component at run-time.
      // Alpine's just so darn flexible amirite?

      this.listenForNewElementsToInitialize();

      if (typeof initReturnedCallback === 'function') {
        // Run the callback returned from the "x-init" hook to allow the user to do stuff after
        // Alpine's got it's grubby little paws all over everything.
        initReturnedCallback.call(this.$data);
      }

      componentForClone || setTimeout(function () {
        Alpine.onComponentInitializeds.forEach(function (callback) {
          return callback(_this);
        });
      }, 0);
    }

    _createClass(Component, [{
      key: "getUnobservedData",
      value: function getUnobservedData() {
        return unwrap$1(this.membrane, this.$data);
      }
    }, {
      key: "wrapDataInObservable",
      value: function wrapDataInObservable(data) {
        var self = this;
        var updateDom = debounce(function () {
          self.updateElements(self.$el);
        }, 0);
        return wrap(data, function (target, key) {
          if (self.watchers[key]) {
            // If there's a watcher for this specific key, run it.
            self.watchers[key].forEach(function (callback) {
              return callback(target[key]);
            });
          } else if (Array.isArray(target)) {
            // Arrays are special cases, if any of the items change, we consider the array as mutated.
            Object.keys(self.watchers).forEach(function (fullDotNotationKey) {
              var dotNotationParts = fullDotNotationKey.split('.'); // Ignore length mutations since they would result in duplicate calls.
              // For example, when calling push, we would get a mutation for the item's key
              // and a second mutation for the length property.

              if (key === 'length') return;
              dotNotationParts.reduce(function (comparisonData, part) {
                if (Object.is(target, comparisonData[part])) {
                  self.watchers[fullDotNotationKey].forEach(function (callback) {
                    return callback(target);
                  });
                }

                return comparisonData[part];
              }, self.unobservedData);
            });
          } else {
            // Let's walk through the watchers with "dot-notation" (foo.bar) and see
            // if this mutation fits any of them.
            Object.keys(self.watchers).filter(function (i) {
              return i.includes('.');
            }).forEach(function (fullDotNotationKey) {
              var dotNotationParts = fullDotNotationKey.split('.'); // If this dot-notation watcher's last "part" doesn't match the current
              // key, then skip it early for performance reasons.

              if (key !== dotNotationParts[dotNotationParts.length - 1]) return; // Now, walk through the dot-notation "parts" recursively to find
              // a match, and call the watcher if one's found.

              dotNotationParts.reduce(function (comparisonData, part) {
                if (Object.is(target, comparisonData)) {
                  // Run the watchers.
                  self.watchers[fullDotNotationKey].forEach(function (callback) {
                    return callback(target[key]);
                  });
                }

                return comparisonData[part];
              }, self.unobservedData);
            });
          } // Don't react to data changes for cases like the `x-created` hook.


          if (self.pauseReactivity) return;
          updateDom();
        });
      }
    }, {
      key: "walkAndSkipNestedComponents",
      value: function walkAndSkipNestedComponents(el, callback) {
        var _this2 = this;

        var initializeComponentCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        walk(el, function (el) {
          // We've hit a component.
          if (el.hasAttribute('x-data')) {
            // If it's not the current one.
            if (!el.isSameNode(_this2.$el)) {
              // Initialize it if it's not.
              if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.

              return false;
            }
          }

          return callback(el);
        });
      }
    }, {
      key: "initializeElements",
      value: function initializeElements(rootEl) {
        var _this3 = this;

        var extraVars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        var componentForClone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        this.walkAndSkipNestedComponents(rootEl, function (el) {
          // Don't touch spawns from for loop
          if (el.__x_for_key !== undefined) return false; // Don't touch spawns from if directives

          if (el.__x_inserted_me !== undefined) return false;

          _this3.initializeElement(el, extraVars, componentForClone ? false : true);
        }, function (el) {
          if (!componentForClone) el.__x = new Component(el);
        });
        this.executeAndClearRemainingShowDirectiveStack();
        this.executeAndClearNextTickStack(rootEl);
      }
    }, {
      key: "initializeElement",
      value: function initializeElement(el, extraVars) {
        var shouldRegisterListeners = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        // To support class attribute merging, we have to know what the element's
        // original class attribute looked like for reference.
        if (el.hasAttribute('class') && getXAttrs(el, this).length > 0) {
          el.__x_original_classes = convertClassStringToArray(el.getAttribute('class'));
        }

        shouldRegisterListeners && this.registerListeners(el, extraVars);
        this.resolveBoundAttributes(el, true, extraVars);
      }
    }, {
      key: "updateElements",
      value: function updateElements(rootEl) {
        var _this4 = this;

        var extraVars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        this.walkAndSkipNestedComponents(rootEl, function (el) {
          // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
          if (el.__x_for_key !== undefined && !el.isSameNode(_this4.$el)) return false;

          _this4.updateElement(el, extraVars);
        }, function (el) {
          el.__x = new Component(el);
        });
        this.executeAndClearRemainingShowDirectiveStack();
        this.executeAndClearNextTickStack(rootEl);
      }
    }, {
      key: "executeAndClearNextTickStack",
      value: function executeAndClearNextTickStack(el) {
        var _this5 = this;

        // Skip spawns from alpine directives
        if (el === this.$el && this.nextTickStack.length > 0) {
          // We run the tick stack after the next frame to allow any
          // running transitions to pass the initial show stage.
          requestAnimationFrame(function () {
            while (_this5.nextTickStack.length > 0) {
              _this5.nextTickStack.shift()();
            }
          });
        }
      }
    }, {
      key: "executeAndClearRemainingShowDirectiveStack",
      value: function executeAndClearRemainingShowDirectiveStack() {
        // The goal here is to start all the x-show transitions
        // and build a nested promise chain so that elements
        // only hide when the children are finished hiding.
        this.showDirectiveStack.reverse().map(function (handler) {
          return new Promise(function (resolve, reject) {
            handler(resolve, reject);
          });
        }).reduce(function (promiseChain, promise) {
          return promiseChain.then(function () {
            return promise.then(function (finishElement) {
              finishElement();
            });
          });
        }, Promise.resolve(function () {}))["catch"](function (e) {
          if (e !== TRANSITION_CANCELLED) throw e;
        }); // We've processed the handler stack. let's clear it.

        this.showDirectiveStack = [];
        this.showDirectiveLastElement = undefined;
      }
    }, {
      key: "updateElement",
      value: function updateElement(el, extraVars) {
        this.resolveBoundAttributes(el, false, extraVars);
      }
    }, {
      key: "registerListeners",
      value: function registerListeners(el, extraVars) {
        var _this6 = this;

        getXAttrs(el, this).forEach(function (_ref10) {
          var type = _ref10.type,
              value = _ref10.value,
              modifiers = _ref10.modifiers,
              expression = _ref10.expression;

          switch (type) {
            case 'on':
              registerListener(_this6, el, value, modifiers, expression, extraVars);
              break;

            case 'model':
              registerModelListener(_this6, el, modifiers, expression, extraVars);
              break;
          }
        });
      }
    }, {
      key: "resolveBoundAttributes",
      value: function resolveBoundAttributes(el) {
        var _this7 = this;

        var initialUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var extraVars = arguments.length > 2 ? arguments[2] : undefined;
        var attrs = getXAttrs(el, this);
        attrs.forEach(function (_ref11) {
          var type = _ref11.type,
              value = _ref11.value,
              modifiers = _ref11.modifiers,
              expression = _ref11.expression;

          switch (type) {
            case 'model':
              handleAttributeBindingDirective(_this7, el, 'value', expression, extraVars, type, modifiers);
              break;

            case 'bind':
              // The :key binding on an x-for is special, ignore it.
              if (el.tagName.toLowerCase() === 'template' && value === 'key') return;
              handleAttributeBindingDirective(_this7, el, value, expression, extraVars, type, modifiers);
              break;

            case 'text':
              var output = _this7.evaluateReturnExpression(el, expression, extraVars);

              handleTextDirective(el, output, expression);
              break;

            case 'html':
              handleHtmlDirective(_this7, el, expression, extraVars);
              break;

            case 'show':
              var output = _this7.evaluateReturnExpression(el, expression, extraVars);

              handleShowDirective(_this7, el, output, modifiers, initialUpdate);
              break;

            case 'if':
              // If this element also has x-for on it, don't process x-if.
              // We will let the "x-for" directive handle the "if"ing.
              if (attrs.some(function (i) {
                return i.type === 'for';
              })) return;

              var output = _this7.evaluateReturnExpression(el, expression, extraVars);

              handleIfDirective(_this7, el, output, initialUpdate, extraVars);
              break;

            case 'for':
              handleForDirective(_this7, el, expression, initialUpdate, extraVars);
              break;

            case 'cloak':
              el.removeAttribute('x-cloak');
              break;
          }
        });
      }
    }, {
      key: "evaluateReturnExpression",
      value: function evaluateReturnExpression(el, expression) {
        var extraVars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        return saferEval(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
          $dispatch: this.getDispatchFunction(el)
        }));
      }
    }, {
      key: "evaluateCommandExpression",
      value: function evaluateCommandExpression(el, expression) {
        var extraVars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        return saferEvalNoReturn(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
          $dispatch: this.getDispatchFunction(el)
        }));
      }
    }, {
      key: "getDispatchFunction",
      value: function getDispatchFunction(el) {
        return function (event) {
          var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          el.dispatchEvent(new CustomEvent(event, {
            detail: detail,
            bubbles: true
          }));
        };
      }
    }, {
      key: "listenForNewElementsToInitialize",
      value: function listenForNewElementsToInitialize() {
        var _this8 = this;

        var targetNode = this.$el;
        var observerOptions = {
          childList: true,
          attributes: true,
          subtree: true
        };
        var observer = new MutationObserver(function (mutations) {
          for (var i = 0; i < mutations.length; i++) {
            // Filter out mutations triggered from child components.
            var closestParentComponent = mutations[i].target.closest('[x-data]');
            if (!(closestParentComponent && closestParentComponent.isSameNode(_this8.$el))) continue;

            if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'x-data') {
              (function () {
                var xAttr = mutations[i].target.getAttribute('x-data') || '{}';
                var rawData = saferEval(_this8.$el, xAttr, {
                  $el: _this8.$el
                });
                Object.keys(rawData).forEach(function (key) {
                  if (_this8.$data[key] !== rawData[key]) {
                    _this8.$data[key] = rawData[key];
                  }
                });
              })();
            }

            if (mutations[i].addedNodes.length > 0) {
              mutations[i].addedNodes.forEach(function (node) {
                if (node.nodeType !== 1 || node.__x_inserted_me) return;

                if (node.matches('[x-data]') && !node.__x) {
                  node.__x = new Component(node);
                  return;
                }

                _this8.initializeElements(node);
              });
            }
          }
        });
        observer.observe(targetNode, observerOptions);
      }
    }, {
      key: "getRefsProxy",
      value: function getRefsProxy() {
        var self = this;
        var refObj = {}; // One of the goals of this is to not hold elements in memory, but rather re-evaluate
        // the DOM when the system needs something from it. This way, the framework is flexible and
        // friendly to outside DOM changes from libraries like Vue/Livewire.
        // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.

        return new Proxy(refObj, {
          get: function get(object, property) {
            if (property === '$isAlpineProxy') return true;
            var ref; // We can't just query the DOM because it's hard to filter out refs in
            // nested components.

            self.walkAndSkipNestedComponents(self.$el, function (el) {
              if (el.hasAttribute('x-ref') && el.getAttribute('x-ref') === property) {
                ref = el;
              }
            });
            return ref;
          }
        });
      }
    }]);

    return Component;
  }();

  var Alpine = {
    version: "2.8.2",
    pauseMutationObserver: false,
    magicProperties: {},
    onComponentInitializeds: [],
    onBeforeComponentInitializeds: [],
    ignoreFocusedForValueBinding: false,
    start: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this9 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (isTesting()) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return domReady();

              case 3:
                this.discoverComponents(function (el) {
                  _this9.initializeComponent(el);
                }); // It's easier and more performant to just support Turbolinks than listen
                // to MutationObserver mutations at the document level.

                document.addEventListener("turbolinks:load", function () {
                  _this9.discoverUninitializedComponents(function (el) {
                    _this9.initializeComponent(el);
                  });
                });
                this.listenForNewUninitializedComponentsAtRunTime();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }(),
    discoverComponents: function discoverComponents(callback) {
      var rootEls = document.querySelectorAll('[x-data]');
      rootEls.forEach(function (rootEl) {
        callback(rootEl);
      });
    },
    discoverUninitializedComponents: function discoverUninitializedComponents(callback) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var rootEls = (el || document).querySelectorAll('[x-data]');
      Array.from(rootEls).filter(function (el) {
        return el.__x === undefined;
      }).forEach(function (rootEl) {
        callback(rootEl);
      });
    },
    listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime() {
      var _this10 = this;

      var targetNode = document.querySelector('body');
      var observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      var observer = new MutationObserver(function (mutations) {
        if (_this10.pauseMutationObserver) return;

        for (var i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(function (node) {
              // Discard non-element nodes (like line-breaks)
              if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
              // They will take care of themselves.

              if (node.parentElement && node.parentElement.closest('[x-data]')) return;

              _this10.discoverUninitializedComponents(function (el) {
                _this10.initializeComponent(el);
              }, node.parentElement);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    },
    initializeComponent: function initializeComponent(el) {
      if (!el.__x) {
        // Wrap in a try/catch so that we don't prevent other components
        // from initializing when one component contains an error.
        try {
          el.__x = new Component(el);
        } catch (error) {
          setTimeout(function () {
            throw error;
          }, 0);
        }
      }
    },
    clone: function clone(component, newEl) {
      if (!newEl.__x) {
        newEl.__x = new Component(newEl, component);
      }
    },
    addMagicProperty: function addMagicProperty(name, callback) {
      this.magicProperties[name] = callback;
    },
    onComponentInitialized: function onComponentInitialized(callback) {
      this.onComponentInitializeds.push(callback);
    },
    onBeforeComponentInitialized: function onBeforeComponentInitialized(callback) {
      this.onBeforeComponentInitializeds.push(callback);
    }
  };

  if (!isTesting()) {
    window.Alpine = Alpine;

    if (window.deferLoadingAlpine) {
      window.deferLoadingAlpine(function () {
        window.Alpine.start();
      });
    } else {
      window.Alpine.start();
    }
  }

  return Alpine;
});

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./assets/src/js/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hmh/Local Sites/omo/app/public/wp-content/themes/omo/assets/src/js/app.js */"./assets/src/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FscGluZWpzL2Rpc3QvYWxwaW5lLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIm93bktleXMiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZDIiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwiZm9yRWFjaCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZG9tUmVhZHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcnJheVVuaXF1ZSIsImFycmF5IiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwiaXNUZXN0aW5nIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5jbHVkZXMiLCJjaGVja2VkQXR0ckxvb3NlQ29tcGFyZSIsInZhbHVlQSIsInZhbHVlQiIsIndhcm5JZk1hbGZvcm1lZFRlbXBsYXRlIiwiZWwiLCJkaXJlY3RpdmUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwid2FybiIsImNvbnRlbnQiLCJjaGlsZEVsZW1lbnRDb3VudCIsImtlYmFiQ2FzZSIsInN1YmplY3QiLCJyZXBsYWNlIiwiY2FtZWxDYXNlIiwibWF0Y2giLCJjaGFyIiwidG9VcHBlckNhc2UiLCJ3YWxrIiwiY2FsbGJhY2siLCJub2RlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwibGF0ZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaGFuZGxlRXJyb3IiLCJleHByZXNzaW9uIiwiZXJyb3IiLCJhc3NpZ24iLCJ0cnlDYXRjaCIsImNiIiwiZSIsInNhZmVyRXZhbCIsImRhdGFDb250ZXh0IiwiYWRkaXRpb25hbEhlbHBlclZhcmlhYmxlcyIsImNhbGwiLCJGdW5jdGlvbiIsInZhbHVlcyIsInNhZmVyRXZhbE5vUmV0dXJuIiwiQXN5bmNGdW5jdGlvbiIsImdldFByb3RvdHlwZU9mIiwiY29uc3RydWN0b3IiLCJtZXRob2RSZWZlcmVuY2UiLCJ4QXR0clJFIiwiaXNYQXR0ciIsImF0dHIiLCJuYW1lIiwicmVwbGFjZUF0QW5kQ29sb25XaXRoU3RhbmRhcmRTeW50YXgiLCJ0ZXN0IiwiZ2V0WEF0dHJzIiwiY29tcG9uZW50IiwidHlwZSIsImRpcmVjdGl2ZXMiLCJhdHRyaWJ1dGVzIiwibWFwIiwicGFyc2VIdG1sQXR0cmlidXRlIiwic3ByZWFkRGlyZWN0aXZlIiwic3ByZWFkT2JqZWN0IiwiJGRhdGEiLCJjb25jYXQiLCJlbnRyaWVzIiwic29ydERpcmVjdGl2ZXMiLCJkaXJlY3RpdmVPcmRlciIsInNvcnQiLCJhIiwiYiIsInR5cGVBIiwiaW5kZXhPZiIsInR5cGVCIiwibm9ybWFsaXplZE5hbWUiLCJ0eXBlTWF0Y2giLCJ2YWx1ZU1hdGNoIiwibW9kaWZpZXJzIiwiaXNCb29sZWFuQXR0ciIsImF0dHJOYW1lIiwiYm9vbGVhbkF0dHJpYnV0ZXMiLCJzdGFydHNXaXRoIiwiY29udmVydENsYXNzU3RyaW5nVG9BcnJheSIsImNsYXNzTGlzdCIsImZpbHRlckZuIiwiQm9vbGVhbiIsInNwbGl0IiwiVFJBTlNJVElPTl9UWVBFX0lOIiwiVFJBTlNJVElPTl9UWVBFX09VVCIsIlRSQU5TSVRJT05fQ0FOQ0VMTEVEIiwidHJhbnNpdGlvbkluIiwic2hvdyIsInJlamVjdCIsImZvcmNlU2tpcCIsIl9feF90cmFuc2l0aW9uIiwiYXR0cnMiLCJzaG93QXR0ciIsInNldHRpbmdCb3RoU2lkZXNPZlRyYW5zaXRpb24iLCJpbmRleCIsInRyYW5zaXRpb25IZWxwZXJJbiIsInNvbWUiLCJ0cmFuc2l0aW9uQ2xhc3Nlc0luIiwidHJhbnNpdGlvbk91dCIsImhpZGUiLCJ0cmFuc2l0aW9uSGVscGVyT3V0IiwidHJhbnNpdGlvbkNsYXNzZXNPdXQiLCJzaG93Q2FsbGJhY2siLCJzdHlsZVZhbHVlcyIsImR1cmF0aW9uIiwibW9kaWZpZXJWYWx1ZSIsIm9yaWdpbiIsImZpcnN0Iiwib3BhY2l0eSIsInNjYWxlIiwic2Vjb25kIiwidHJhbnNpdGlvbkhlbHBlciIsImhpZGVDYWxsYmFjayIsImZhbGxiYWNrIiwicmF3VmFsdWUiLCJpc051bWVyaWMiLCJqb2luIiwiaG9vazEiLCJob29rMiIsImNhbmNlbCIsIm9wYWNpdHlDYWNoZSIsInN0eWxlIiwidHJhbnNmb3JtQ2FjaGUiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1PcmlnaW5DYWNoZSIsInRyYW5zZm9ybU9yaWdpbiIsIm5vTW9kaWZpZXJzIiwidHJhbnNpdGlvbk9wYWNpdHkiLCJ0cmFuc2l0aW9uU2NhbGUiLCJzdGFnZXMiLCJzdGFydCIsImR1cmluZyIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyaW0iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJlbmQiLCJjbGVhbnVwIiwidHJhbnNpdGlvbiIsImVuc3VyZVN0cmluZ0V4cHJlc3Npb24iLCJldmFsdWF0ZVJldHVybkV4cHJlc3Npb24iLCJlbnRlciIsImZpbmQiLCJlbnRlclN0YXJ0IiwiZW50ZXJFbmQiLCJ0cmFuc2l0aW9uQ2xhc3NlcyIsImxlYXZlIiwibGVhdmVTdGFydCIsImxlYXZlRW5kIiwiY2xhc3Nlc0R1cmluZyIsImNsYXNzZXNTdGFydCIsImNsYXNzZXNFbmQiLCJvcmlnaW5hbENsYXNzZXMiLCJfX3hfb3JpZ2luYWxfY2xhc3NlcyIsImFkZCIsInJlbW92ZSIsImZpbmlzaCIsIm9uY2UiLCJpc0Nvbm5lY3RlZCIsIm5leHRGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIk51bWJlciIsImdldENvbXB1dGVkU3R5bGUiLCJhbmltYXRpb25EdXJhdGlvbiIsImlzQXJyYXkiLCJpc05hTiIsImNhbGxlZCIsImhhbmRsZUZvckRpcmVjdGl2ZSIsInRlbXBsYXRlRWwiLCJpbml0aWFsVXBkYXRlIiwiZXh0cmFWYXJzIiwiaXRlcmF0b3JOYW1lcyIsInBhcnNlRm9yRXhwcmVzc2lvbiIsIml0ZW1zIiwiZXZhbHVhdGVJdGVtc0FuZFJldHVybkVtcHR5SWZYSWZJc1ByZXNlbnRBbmRGYWxzZU9uRWxlbWVudCIsImN1cnJlbnRFbCIsIml0ZW0iLCJpdGVyYXRpb25TY29wZVZhcmlhYmxlcyIsImdldEl0ZXJhdGlvblNjb3BlVmFyaWFibGVzIiwiY3VycmVudEtleSIsImdlbmVyYXRlS2V5Rm9ySXRlcmF0aW9uIiwibmV4dEVsIiwibG9va0FoZWFkRm9yTWF0Y2hpbmdLZXllZEVsZW1lbnRBbmRNb3ZlSXRJZkZvdW5kIiwiYWRkRWxlbWVudEluTG9vcEFmdGVyQ3VycmVudEVsIiwiX194X2ZvciIsImluaXRpYWxpemVFbGVtZW50cyIsIl9feF9mb3Jfa2V5IiwidXBkYXRlRWxlbWVudHMiLCJyZW1vdmVBbnlMZWZ0T3ZlckVsZW1lbnRzRnJvbVByZXZpb3VzVXBkYXRlIiwiZm9ySXRlcmF0b3JSRSIsInN0cmlwUGFyZW5zUkUiLCJmb3JBbGlhc1JFIiwiaW5NYXRjaCIsIlN0cmluZyIsInJlcyIsIml0ZXJhdG9yTWF0Y2giLCJjb2xsZWN0aW9uIiwic2NvcGVWYXJpYWJsZXMiLCJiaW5kS2V5QXR0cmlidXRlIiwiaWZBdHRyaWJ1dGUiLCJjbG9uZSIsImltcG9ydE5vZGUiLCJwYXJlbnRFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwidW5kZWZpbmVkIiwidG1wTmV4dEVsIiwibmV4dEVsZW1lbnRGcm9tT2xkTG9vcCIsIm5leHRFbGVtZW50RnJvbU9sZExvb3BJbW11dGFibGUiLCJuZXh0U2libGluZyIsImhhbmRsZUF0dHJpYnV0ZUJpbmRpbmdEaXJlY3RpdmUiLCJhdHRyVHlwZSIsIkFscGluZSIsImlnbm9yZUZvY3VzZWRGb3JWYWx1ZUJpbmRpbmciLCJhY3RpdmVFbGVtZW50IiwiaXNTYW1lTm9kZSIsImNoZWNrZWQiLCJ2YWwiLCJ1cGRhdGVTZWxlY3QiLCJzZXRBdHRyaWJ1dGUiLCJrZXlzU29ydGVkQnlCb29sZWFuVmFsdWUiLCJjbGFzc05hbWVzIiwiY2xhc3NOYW1lIiwibmV3Q2xhc3NlcyIsInJlbW92ZUF0dHJpYnV0ZSIsInNldElmQ2hhbmdlZCIsImdldEF0dHJpYnV0ZSIsImFycmF5V3JhcHBlZFZhbHVlIiwib3B0aW9ucyIsIm9wdGlvbiIsInNlbGVjdGVkIiwidGV4dCIsImhhbmRsZVRleHREaXJlY3RpdmUiLCJvdXRwdXQiLCJ0ZXh0Q29udGVudCIsImhhbmRsZUh0bWxEaXJlY3RpdmUiLCJpbm5lckhUTUwiLCJoYW5kbGVTaG93RGlyZWN0aXZlIiwiZGlzcGxheSIsIl9feF9pc19zaG93biIsInJlbW92ZVByb3BlcnR5IiwiaGFuZGxlIiwic2hvd0RpcmVjdGl2ZUxhc3RFbGVtZW50IiwiY29udGFpbnMiLCJleGVjdXRlQW5kQ2xlYXJSZW1haW5pbmdTaG93RGlyZWN0aXZlU3RhY2siLCJzaG93RGlyZWN0aXZlU3RhY2siLCJoYW5kbGVJZkRpcmVjdGl2ZSIsImV4cHJlc3Npb25SZXN1bHQiLCJlbGVtZW50SGFzQWxyZWFkeUJlZW5BZGRlZCIsIl9feF9pbnNlcnRlZF9tZSIsInJlZ2lzdGVyTGlzdGVuZXIiLCJldmVudCIsInBhc3NpdmUiLCJoYW5kbGVyIiwibGlzdGVuZXJUYXJnZXQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInJ1bkxpc3RlbmVySGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJib2R5IiwiaXNLZXlFdmVudCIsImlzTGlzdGVuaW5nRm9yQVNwZWNpZmljS2V5VGhhdEhhc250QmVlblByZXNzZWQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJldHVyblZhbHVlIiwidGhlbiIsIm5leHRNb2RpZmllciIsImV2YWx1YXRlQ29tbWFuZEV4cHJlc3Npb24iLCJrZXlNb2RpZmllcnMiLCJkZWJvdW5jZUluZGV4Iiwic3BsaWNlIiwia2V5VG9Nb2RpZmllciIsInN5c3RlbUtleU1vZGlmaWVycyIsInNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzIiwibW9kaWZpZXIiLCJhY3RpdmVseVByZXNzZWRLZXlNb2RpZmllcnMiLCJyZWdpc3Rlck1vZGVsTGlzdGVuZXIiLCJsaXN0ZW5lckV4cHJlc3Npb24iLCJyaWdodFNpZGVPZkV4cHJlc3Npb24iLCJnZW5lcmF0ZU1vZGVsQXNzaWdubWVudEZ1bmN0aW9uIiwiaGFzQXR0cmlidXRlIiwiY3VycmVudFZhbHVlIiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJuZXdWYWx1ZSIsInNhZmVQYXJzZU51bWJlciIsIm11bHRpcGxlIiwic2VsZWN0ZWRPcHRpb25zIiwibnVtYmVyIiwicGFyc2VGbG9hdCIsIk9iamVjdENyZWF0ZSIsImNyZWF0ZSIsIk9iamVjdERlZmluZVByb3BlcnR5IiwiT2JqZWN0RGVmaW5lUHJvcGVydGllcyIsImlzRXh0ZW5zaWJsZSIsImdldE93blByb3BlcnR5TmFtZXMiLCJwcmV2ZW50RXh0ZW5zaW9ucyIsImhhc093blByb3BlcnR5IiwicHJvdG90eXBlIiwiQXJyYXlQdXNoIiwiQXJyYXlDb25jYXQiLCJBcnJheU1hcCIsImlzVW5kZWZpbmVkIiwiaXNGdW5jdGlvbiIsImlzT2JqZWN0IiwicHJveHlUb1ZhbHVlTWFwIiwiV2Vha01hcCIsInJlZ2lzdGVyUHJveHkiLCJwcm94eSIsInNldCIsInVud3JhcCIsInJlcGxpY2FPckFueSIsImdldCIsIndyYXBWYWx1ZSIsIm1lbWJyYW5lIiwidmFsdWVJc09ic2VydmFibGUiLCJnZXRQcm94eSIsInVud3JhcERlc2NyaXB0b3IiLCJkZXNjcmlwdG9yIiwibG9ja1NoYWRvd1RhcmdldCIsInNoYWRvd1RhcmdldCIsIm9yaWdpbmFsVGFyZ2V0IiwidGFyZ2V0S2V5cyIsIndyYXBEZXNjcmlwdG9yIiwiUmVhY3RpdmVQcm94eUhhbmRsZXIiLCJ2YWx1ZU9ic2VydmVkIiwidmFsdWVNdXRhdGVkIiwib2xkVmFsdWUiLCJ0aGlzQXJnIiwiYXJnQXJyYXkiLCJuZXdUYXJnZXQiLCJzaGFkb3dJc0V4dGVuc2libGUiLCJ0YXJnZXRJc0V4dGVuc2libGUiLCJkZXNjIiwic2hhZG93RGVzY3JpcHRvciIsIm9yaWdpbmFsRGVzY3JpcHRvciIsIndyYXBSZWFkT25seVZhbHVlIiwiZ2V0UmVhZE9ubHlQcm94eSIsIlJlYWRPbmx5SGFuZGxlciIsImNyZWF0ZVNoYWRvd1RhcmdldCIsIk9iamVjdERvdFByb3RvdHlwZSIsImRlZmF1bHRWYWx1ZUlzT2JzZXJ2YWJsZSIsInByb3RvIiwiZGVmYXVsdFZhbHVlT2JzZXJ2ZWQiLCJkZWZhdWx0VmFsdWVNdXRhdGVkIiwiZGVmYXVsdFZhbHVlRGlzdG9ydGlvbiIsImdldFZhbHVlIiwidW53cmFwUHJveHkiLCJSZWFjdGl2ZU1lbWJyYW5lIiwidmFsdWVEaXN0b3J0aW9uIiwib2JqZWN0R3JhcGgiLCJ1bndyYXBwZWRWYWx1ZSIsImRpc3RvcnRlZCIsIm8iLCJnZXRSZWFjdGl2ZVN0YXRlIiwicmVhZE9ubHkiLCJyZWFjdGl2ZSIsInAiLCJkaXN0b3J0ZWRWYWx1ZSIsInJlYWN0aXZlU3RhdGUiLCJyZWFjdGl2ZUhhbmRsZXIiLCJQcm94eSIsInJlYWRPbmx5SGFuZGxlciIsIndyYXAiLCJkYXRhIiwibXV0YXRpb25DYWxsYmFjayIsInVud3JhcCQxIiwib2JzZXJ2YWJsZSIsInVud3JhcHBlZERhdGEiLCJjb3B5IiwiQ29tcG9uZW50IiwiY29tcG9uZW50Rm9yQ2xvbmUiLCIkZWwiLCJkYXRhQXR0ciIsImRhdGFFeHByZXNzaW9uIiwiaW5pdEV4cHJlc3Npb24iLCJkYXRhRXh0cmFzIiwiY2Fub25pY2FsQ29tcG9uZW50RWxlbWVudFJlZmVyZW5jZSIsIm1hZ2ljUHJvcGVydGllcyIsInVub2JzZXJ2ZWREYXRhIiwiZ2V0VW5vYnNlcnZlZERhdGEiLCJ3cmFwRGF0YUluT2JzZXJ2YWJsZSIsIiRyZWZzIiwiZ2V0UmVmc1Byb3h5IiwibmV4dFRpY2tTdGFjayIsIiRuZXh0VGljayIsIndhdGNoZXJzIiwiJHdhdGNoIiwicHJvcGVydHkiLCJvbkJlZm9yZUNvbXBvbmVudEluaXRpYWxpemVkcyIsImluaXRSZXR1cm5lZENhbGxiYWNrIiwicGF1c2VSZWFjdGl2aXR5IiwibGlzdGVuRm9yTmV3RWxlbWVudHNUb0luaXRpYWxpemUiLCJvbkNvbXBvbmVudEluaXRpYWxpemVkcyIsInNlbGYiLCJ1cGRhdGVEb20iLCJmdWxsRG90Tm90YXRpb25LZXkiLCJkb3ROb3RhdGlvblBhcnRzIiwicmVkdWNlIiwiY29tcGFyaXNvbkRhdGEiLCJwYXJ0IiwiaXMiLCJpbml0aWFsaXplQ29tcG9uZW50Q2FsbGJhY2siLCJfX3giLCJyb290RWwiLCJ3YWxrQW5kU2tpcE5lc3RlZENvbXBvbmVudHMiLCJpbml0aWFsaXplRWxlbWVudCIsImV4ZWN1dGVBbmRDbGVhck5leHRUaWNrU3RhY2siLCJzaG91bGRSZWdpc3Rlckxpc3RlbmVycyIsInJlZ2lzdGVyTGlzdGVuZXJzIiwicmVzb2x2ZUJvdW5kQXR0cmlidXRlcyIsInVwZGF0ZUVsZW1lbnQiLCJzaGlmdCIsInJldmVyc2UiLCJwcm9taXNlQ2hhaW4iLCJwcm9taXNlIiwiZmluaXNoRWxlbWVudCIsIiRkaXNwYXRjaCIsImdldERpc3BhdGNoRnVuY3Rpb24iLCJkaXNwYXRjaEV2ZW50IiwiYnViYmxlcyIsInRhcmdldE5vZGUiLCJvYnNlcnZlck9wdGlvbnMiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiY2xvc2VzdFBhcmVudENvbXBvbmVudCIsImNsb3Nlc3QiLCJhdHRyaWJ1dGVOYW1lIiwieEF0dHIiLCJyYXdEYXRhIiwiYWRkZWROb2RlcyIsIm5vZGVUeXBlIiwibWF0Y2hlcyIsIm9ic2VydmUiLCJyZWZPYmoiLCJyZWYiLCJ2ZXJzaW9uIiwicGF1c2VNdXRhdGlvbk9ic2VydmVyIiwiZGlzY292ZXJDb21wb25lbnRzIiwiaW5pdGlhbGl6ZUNvbXBvbmVudCIsImRpc2NvdmVyVW5pbml0aWFsaXplZENvbXBvbmVudHMiLCJsaXN0ZW5Gb3JOZXdVbmluaXRpYWxpemVkQ29tcG9uZW50c0F0UnVuVGltZSIsInJvb3RFbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVlcnlTZWxlY3RvciIsIm5ld0VsIiwiYWRkTWFnaWNQcm9wZXJ0eSIsIm9uQ29tcG9uZW50SW5pdGlhbGl6ZWQiLCJvbkJlZm9yZUNvbXBvbmVudEluaXRpYWxpemVkIiwiZGVmZXJMb2FkaW5nQWxwaW5lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFB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QUFFRCxDQTU1REEsQ0FBRCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAnYWxwaW5lanMnO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5BbHBpbmUgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pO1xuICAgICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzO1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgICBpZiAoaSAlIDIpIHtcbiAgICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvLyBUaGFua3MgQHN0aW11bHVzOlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3RpbXVsdXNqcy9zdGltdWx1cy9ibG9iL21hc3Rlci9wYWNrYWdlcy8lNDBzdGltdWx1cy9jb3JlL3NyYy9hcHBsaWNhdGlvbi50c1xuICBmdW5jdGlvbiBkb21SZWFkeSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBcImxvYWRpbmdcIikge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCByZXNvbHZlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBhcnJheVVuaXF1ZShhcnJheSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyYXkpKTtcbiAgfVxuICBmdW5jdGlvbiBpc1Rlc3RpbmcoKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoXCJOb2RlLmpzXCIpIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoXCJqc2RvbVwiKTtcbiAgfVxuICBmdW5jdGlvbiBjaGVja2VkQXR0ckxvb3NlQ29tcGFyZSh2YWx1ZUEsIHZhbHVlQikge1xuICAgIHJldHVybiB2YWx1ZUEgPT0gdmFsdWVCO1xuICB9XG4gIGZ1bmN0aW9uIHdhcm5JZk1hbGZvcm1lZFRlbXBsYXRlKGVsLCBkaXJlY3RpdmUpIHtcbiAgICBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAndGVtcGxhdGUnKSB7XG4gICAgICBjb25zb2xlLndhcm4oYEFscGluZTogWyR7ZGlyZWN0aXZlfV0gZGlyZWN0aXZlIHNob3VsZCBvbmx5IGJlIGFkZGVkIHRvIDx0ZW1wbGF0ZT4gdGFncy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHBpbmVqcy9hbHBpbmUjJHtkaXJlY3RpdmV9YCk7XG4gICAgfSBlbHNlIGlmIChlbC5jb250ZW50LmNoaWxkRWxlbWVudENvdW50ICE9PSAxKSB7XG4gICAgICBjb25zb2xlLndhcm4oYEFscGluZTogPHRlbXBsYXRlPiB0YWcgd2l0aCBbJHtkaXJlY3RpdmV9XSBlbmNvdW50ZXJlZCB3aXRoIGFuIHVuZXhwZWN0ZWQgbnVtYmVyIG9mIHJvb3QgZWxlbWVudHMuIE1ha2Ugc3VyZSA8dGVtcGxhdGU+IGhhcyBhIHNpbmdsZSByb290IGVsZW1lbnQuIGApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBrZWJhYkNhc2Uoc3ViamVjdCkge1xuICAgIHJldHVybiBzdWJqZWN0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnJlcGxhY2UoL1tfXFxzXS8sICctJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuICBmdW5jdGlvbiBjYW1lbENhc2Uoc3ViamVjdCkge1xuICAgIHJldHVybiBzdWJqZWN0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLShcXHcpL2csIChtYXRjaCwgY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcbiAgfVxuICBmdW5jdGlvbiB3YWxrKGVsLCBjYWxsYmFjaykge1xuICAgIGlmIChjYWxsYmFjayhlbCkgPT09IGZhbHNlKSByZXR1cm47XG4gICAgbGV0IG5vZGUgPSBlbC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICB3YWxrKG5vZGUsIGNhbGxiYWNrKTtcbiAgICAgIG5vZGUgPSBub2RlLm5leHRFbGVtZW50U2libGluZztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCkge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfTtcblxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIH07XG4gIH1cblxuICBjb25zdCBoYW5kbGVFcnJvciA9IChlbCwgZXhwcmVzc2lvbiwgZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLndhcm4oYEFscGluZSBFcnJvcjogXCIke2Vycm9yfVwiXFxuXFxuRXhwcmVzc2lvbjogXCIke2V4cHJlc3Npb259XCJcXG5FbGVtZW50OmAsIGVsKTtcblxuICAgIGlmICghaXNUZXN0aW5nKCkpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZXJyb3IsIHtcbiAgICAgICAgZWwsXG4gICAgICAgIGV4cHJlc3Npb25cbiAgICAgIH0pO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGNiLCB7XG4gICAgZWwsXG4gICAgZXhwcmVzc2lvblxuICB9KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY2IoKTtcbiAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UgPyB2YWx1ZS5jYXRjaChlID0+IGhhbmRsZUVycm9yKGVsLCBleHByZXNzaW9uLCBlKSkgOiB2YWx1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBoYW5kbGVFcnJvcihlbCwgZXhwcmVzc2lvbiwgZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2FmZXJFdmFsKGVsLCBleHByZXNzaW9uLCBkYXRhQ29udGV4dCwgYWRkaXRpb25hbEhlbHBlclZhcmlhYmxlcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRyeUNhdGNoKCgpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbi5jYWxsKGRhdGFDb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbihbJyRkYXRhJywgLi4uT2JqZWN0LmtleXMoYWRkaXRpb25hbEhlbHBlclZhcmlhYmxlcyldLCBgdmFyIF9fYWxwaW5lX3Jlc3VsdDsgd2l0aCgkZGF0YSkgeyBfX2FscGluZV9yZXN1bHQgPSAke2V4cHJlc3Npb259IH07IHJldHVybiBfX2FscGluZV9yZXN1bHRgKShkYXRhQ29udGV4dCwgLi4uT2JqZWN0LnZhbHVlcyhhZGRpdGlvbmFsSGVscGVyVmFyaWFibGVzKSk7XG4gICAgfSwge1xuICAgICAgZWwsXG4gICAgICBleHByZXNzaW9uXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc2FmZXJFdmFsTm9SZXR1cm4oZWwsIGV4cHJlc3Npb24sIGRhdGFDb250ZXh0LCBhZGRpdGlvbmFsSGVscGVyVmFyaWFibGVzID0ge30pIHtcbiAgICByZXR1cm4gdHJ5Q2F0Y2goKCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZXhwcmVzc2lvbi5jYWxsKGRhdGFDb250ZXh0LCBhZGRpdGlvbmFsSGVscGVyVmFyaWFibGVzWyckZXZlbnQnXSkpO1xuICAgICAgfVxuXG4gICAgICBsZXQgQXN5bmNGdW5jdGlvbiA9IEZ1bmN0aW9uO1xuICAgICAgLyogTU9ERVJOLU9OTFk6U1RBUlQgKi9cblxuICAgICAgQXN5bmNGdW5jdGlvbiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhc3luYyBmdW5jdGlvbiAoKSB7fSkuY29uc3RydWN0b3I7XG4gICAgICAvKiBNT0RFUk4tT05MWTpFTkQgKi9cbiAgICAgIC8vIEZvciB0aGUgY2FzZXMgd2hlbiB1c2VycyBwYXNzIG9ubHkgYSBmdW5jdGlvbiByZWZlcmVuY2UgdG8gdGhlIGNhbGxlcjogYHgtb246Y2xpY2s9XCJmb29cImBcbiAgICAgIC8vIFdoZXJlIFwiZm9vXCIgaXMgYSBmdW5jdGlvbi4gQWxzbywgd2UnbGwgcGFzcyB0aGUgZnVuY3Rpb24gdGhlIGV2ZW50IGluc3RhbmNlIHdoZW4gd2UgY2FsbCBpdC5cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGFDb250ZXh0KS5pbmNsdWRlcyhleHByZXNzaW9uKSkge1xuICAgICAgICBsZXQgbWV0aG9kUmVmZXJlbmNlID0gbmV3IEZ1bmN0aW9uKFsnZGF0YUNvbnRleHQnLCAuLi5PYmplY3Qua2V5cyhhZGRpdGlvbmFsSGVscGVyVmFyaWFibGVzKV0sIGB3aXRoKGRhdGFDb250ZXh0KSB7IHJldHVybiAke2V4cHJlc3Npb259IH1gKShkYXRhQ29udGV4dCwgLi4uT2JqZWN0LnZhbHVlcyhhZGRpdGlvbmFsSGVscGVyVmFyaWFibGVzKSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtZXRob2RSZWZlcmVuY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1ldGhvZFJlZmVyZW5jZS5jYWxsKGRhdGFDb250ZXh0LCBhZGRpdGlvbmFsSGVscGVyVmFyaWFibGVzWyckZXZlbnQnXSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBBc3luY0Z1bmN0aW9uKFsnZGF0YUNvbnRleHQnLCAuLi5PYmplY3Qua2V5cyhhZGRpdGlvbmFsSGVscGVyVmFyaWFibGVzKV0sIGB3aXRoKGRhdGFDb250ZXh0KSB7ICR7ZXhwcmVzc2lvbn0gfWApKGRhdGFDb250ZXh0LCAuLi5PYmplY3QudmFsdWVzKGFkZGl0aW9uYWxIZWxwZXJWYXJpYWJsZXMpKSk7XG4gICAgfSwge1xuICAgICAgZWwsXG4gICAgICBleHByZXNzaW9uXG4gICAgfSk7XG4gIH1cbiAgY29uc3QgeEF0dHJSRSA9IC9eeC0ob258YmluZHxkYXRhfHRleHR8aHRtbHxtb2RlbHxpZnxmb3J8c2hvd3xjbG9ha3x0cmFuc2l0aW9ufHJlZnxzcHJlYWQpXFxiLztcbiAgZnVuY3Rpb24gaXNYQXR0cihhdHRyKSB7XG4gICAgY29uc3QgbmFtZSA9IHJlcGxhY2VBdEFuZENvbG9uV2l0aFN0YW5kYXJkU3ludGF4KGF0dHIubmFtZSk7XG4gICAgcmV0dXJuIHhBdHRyUkUudGVzdChuYW1lKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRYQXR0cnMoZWwsIGNvbXBvbmVudCwgdHlwZSkge1xuICAgIGxldCBkaXJlY3RpdmVzID0gQXJyYXkuZnJvbShlbC5hdHRyaWJ1dGVzKS5maWx0ZXIoaXNYQXR0cikubWFwKHBhcnNlSHRtbEF0dHJpYnV0ZSk7IC8vIEdldCBhbiBvYmplY3Qgb2YgZGlyZWN0aXZlcyBmcm9tIHgtc3ByZWFkLlxuXG4gICAgbGV0IHNwcmVhZERpcmVjdGl2ZSA9IGRpcmVjdGl2ZXMuZmlsdGVyKGRpcmVjdGl2ZSA9PiBkaXJlY3RpdmUudHlwZSA9PT0gJ3NwcmVhZCcpWzBdO1xuXG4gICAgaWYgKHNwcmVhZERpcmVjdGl2ZSkge1xuICAgICAgbGV0IHNwcmVhZE9iamVjdCA9IHNhZmVyRXZhbChlbCwgc3ByZWFkRGlyZWN0aXZlLmV4cHJlc3Npb24sIGNvbXBvbmVudC4kZGF0YSk7IC8vIEFkZCB4LXNwcmVhZCBkaXJlY3RpdmVzIHRvIHRoZSBwaWxlIG9mIGV4aXN0aW5nIGRpcmVjdGl2ZXMuXG5cbiAgICAgIGRpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzLmNvbmNhdChPYmplY3QuZW50cmllcyhzcHJlYWRPYmplY3QpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gcGFyc2VIdG1sQXR0cmlidXRlKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUpIHJldHVybiBkaXJlY3RpdmVzLmZpbHRlcihpID0+IGkudHlwZSA9PT0gdHlwZSk7XG4gICAgcmV0dXJuIHNvcnREaXJlY3RpdmVzKGRpcmVjdGl2ZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gc29ydERpcmVjdGl2ZXMoZGlyZWN0aXZlcykge1xuICAgIGxldCBkaXJlY3RpdmVPcmRlciA9IFsnYmluZCcsICdtb2RlbCcsICdzaG93JywgJ2NhdGNoLWFsbCddO1xuICAgIHJldHVybiBkaXJlY3RpdmVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGxldCB0eXBlQSA9IGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YoYS50eXBlKSA9PT0gLTEgPyAnY2F0Y2gtYWxsJyA6IGEudHlwZTtcbiAgICAgIGxldCB0eXBlQiA9IGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YoYi50eXBlKSA9PT0gLTEgPyAnY2F0Y2gtYWxsJyA6IGIudHlwZTtcbiAgICAgIHJldHVybiBkaXJlY3RpdmVPcmRlci5pbmRleE9mKHR5cGVBKSAtIGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YodHlwZUIpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIdG1sQXR0cmlidXRlKHtcbiAgICBuYW1lLFxuICAgIHZhbHVlXG4gIH0pIHtcbiAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IHJlcGxhY2VBdEFuZENvbG9uV2l0aFN0YW5kYXJkU3ludGF4KG5hbWUpO1xuICAgIGNvbnN0IHR5cGVNYXRjaCA9IG5vcm1hbGl6ZWROYW1lLm1hdGNoKHhBdHRyUkUpO1xuICAgIGNvbnN0IHZhbHVlTWF0Y2ggPSBub3JtYWxpemVkTmFtZS5tYXRjaCgvOihbYS16QS1aMC05XFwtOl0rKS8pO1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IG5vcm1hbGl6ZWROYW1lLm1hdGNoKC9cXC5bXi5cXF1dKyg/PVteXFxdXSokKS9nKSB8fCBbXTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdHlwZU1hdGNoID8gdHlwZU1hdGNoWzFdIDogbnVsbCxcbiAgICAgIHZhbHVlOiB2YWx1ZU1hdGNoID8gdmFsdWVNYXRjaFsxXSA6IG51bGwsXG4gICAgICBtb2RpZmllcnM6IG1vZGlmaWVycy5tYXAoaSA9PiBpLnJlcGxhY2UoJy4nLCAnJykpLFxuICAgICAgZXhwcmVzc2lvbjogdmFsdWVcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGlzQm9vbGVhbkF0dHIoYXR0ck5hbWUpIHtcbiAgICAvLyBBcyBwZXIgSFRNTCBzcGVjIHRhYmxlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZGljZXMuaHRtbCNhdHRyaWJ1dGVzLTM6Ym9vbGVhbi1hdHRyaWJ1dGVcbiAgICAvLyBBcnJheSByb3VnaGx5IG9yZGVyZWQgYnkgZXN0aW1hdGVkIHVzYWdlXG4gICAgY29uc3QgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ2Rpc2FibGVkJywgJ2NoZWNrZWQnLCAncmVxdWlyZWQnLCAncmVhZG9ubHknLCAnaGlkZGVuJywgJ29wZW4nLCAnc2VsZWN0ZWQnLCAnYXV0b2ZvY3VzJywgJ2l0ZW1zY29wZScsICdtdWx0aXBsZScsICdub3ZhbGlkYXRlJywgJ2FsbG93ZnVsbHNjcmVlbicsICdhbGxvd3BheW1lbnRyZXF1ZXN0JywgJ2Zvcm1ub3ZhbGlkYXRlJywgJ2F1dG9wbGF5JywgJ2NvbnRyb2xzJywgJ2xvb3AnLCAnbXV0ZWQnLCAncGxheXNpbmxpbmUnLCAnZGVmYXVsdCcsICdpc21hcCcsICdyZXZlcnNlZCcsICdhc3luYycsICdkZWZlcicsICdub21vZHVsZSddO1xuICAgIHJldHVybiBib29sZWFuQXR0cmlidXRlcy5pbmNsdWRlcyhhdHRyTmFtZSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVwbGFjZUF0QW5kQ29sb25XaXRoU3RhbmRhcmRTeW50YXgobmFtZSkge1xuICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoJ0AnKSkge1xuICAgICAgcmV0dXJuIG5hbWUucmVwbGFjZSgnQCcsICd4LW9uOicpO1xuICAgIH0gZWxzZSBpZiAobmFtZS5zdGFydHNXaXRoKCc6JykpIHtcbiAgICAgIHJldHVybiBuYW1lLnJlcGxhY2UoJzonLCAneC1iaW5kOicpO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lO1xuICB9XG4gIGZ1bmN0aW9uIGNvbnZlcnRDbGFzc1N0cmluZ1RvQXJyYXkoY2xhc3NMaXN0LCBmaWx0ZXJGbiA9IEJvb2xlYW4pIHtcbiAgICByZXR1cm4gY2xhc3NMaXN0LnNwbGl0KCcgJykuZmlsdGVyKGZpbHRlckZuKTtcbiAgfVxuICBjb25zdCBUUkFOU0lUSU9OX1RZUEVfSU4gPSAnaW4nO1xuICBjb25zdCBUUkFOU0lUSU9OX1RZUEVfT1VUID0gJ291dCc7XG4gIGNvbnN0IFRSQU5TSVRJT05fQ0FOQ0VMTEVEID0gJ2NhbmNlbGxlZCc7XG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25JbihlbCwgc2hvdywgcmVqZWN0LCBjb21wb25lbnQsIGZvcmNlU2tpcCA9IGZhbHNlKSB7XG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0byB0cmFuc2l0aW9uIG9uIHRoZSBpbml0aWFsIHBhZ2UgbG9hZC5cbiAgICBpZiAoZm9yY2VTa2lwKSByZXR1cm4gc2hvdygpO1xuXG4gICAgaWYgKGVsLl9feF90cmFuc2l0aW9uICYmIGVsLl9feF90cmFuc2l0aW9uLnR5cGUgPT09IFRSQU5TSVRJT05fVFlQRV9JTikge1xuICAgICAgLy8gdGhlcmUgaXMgYWxyZWFkeSBhIHNpbWlsYXIgdHJhbnNpdGlvbiBnb2luZyBvbiwgdGhpcyB3YXMgcHJvYmFibHkgdHJpZ2dlcmVkIGJ5XG4gICAgICAvLyBhIGNoYW5nZSBpbiBhIGRpZmZlcmVudCBwcm9wZXJ0eSwgbGV0J3MganVzdCBsZWF2ZSB0aGUgcHJldmlvdXMgb25lIGRvaW5nIGl0cyBqb2JcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhdHRycyA9IGdldFhBdHRycyhlbCwgY29tcG9uZW50LCAndHJhbnNpdGlvbicpO1xuICAgIGNvbnN0IHNob3dBdHRyID0gZ2V0WEF0dHJzKGVsLCBjb21wb25lbnQsICdzaG93JylbMF07IC8vIElmIHRoaXMgaXMgdHJpZ2dlcmVkIGJ5IGEgeC1zaG93LnRyYW5zaXRpb24uXG5cbiAgICBpZiAoc2hvd0F0dHIgJiYgc2hvd0F0dHIubW9kaWZpZXJzLmluY2x1ZGVzKCd0cmFuc2l0aW9uJykpIHtcbiAgICAgIGxldCBtb2RpZmllcnMgPSBzaG93QXR0ci5tb2RpZmllcnM7IC8vIElmIHgtc2hvdy50cmFuc2l0aW9uLm91dCwgd2UnbGwgc2tpcCB0aGUgXCJpblwiIHRyYW5zaXRpb24uXG5cbiAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoJ291dCcpICYmICFtb2RpZmllcnMuaW5jbHVkZXMoJ2luJykpIHJldHVybiBzaG93KCk7XG4gICAgICBjb25zdCBzZXR0aW5nQm90aFNpZGVzT2ZUcmFuc2l0aW9uID0gbW9kaWZpZXJzLmluY2x1ZGVzKCdpbicpICYmIG1vZGlmaWVycy5pbmNsdWRlcygnb3V0Jyk7IC8vIElmIHgtc2hvdy50cmFuc2l0aW9uLmluLi4ub3V0Li4uIG9ubHkgdXNlIFwiaW5cIiByZWxhdGVkIG1vZGlmaWVycyBmb3IgdGhpcyB0cmFuc2l0aW9uLlxuXG4gICAgICBtb2RpZmllcnMgPSBzZXR0aW5nQm90aFNpZGVzT2ZUcmFuc2l0aW9uID8gbW9kaWZpZXJzLmZpbHRlcigoaSwgaW5kZXgpID0+IGluZGV4IDwgbW9kaWZpZXJzLmluZGV4T2YoJ291dCcpKSA6IG1vZGlmaWVycztcbiAgICAgIHRyYW5zaXRpb25IZWxwZXJJbihlbCwgbW9kaWZpZXJzLCBzaG93LCByZWplY3QpOyAvLyBPdGhlcndpc2UsIHdlIGNhbiBhc3N1bWUgeC10cmFuc2l0aW9uOmVudGVyLlxuICAgIH0gZWxzZSBpZiAoYXR0cnMuc29tZShhdHRyID0+IFsnZW50ZXInLCAnZW50ZXItc3RhcnQnLCAnZW50ZXItZW5kJ10uaW5jbHVkZXMoYXR0ci52YWx1ZSkpKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3Nlc0luKGVsLCBjb21wb25lbnQsIGF0dHJzLCBzaG93LCByZWplY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBuZWl0aGVyLCBqdXN0IHNob3cgdGhhdCBkYW1uIHRoaW5nLlxuICAgICAgc2hvdygpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0cmFuc2l0aW9uT3V0KGVsLCBoaWRlLCByZWplY3QsIGNvbXBvbmVudCwgZm9yY2VTa2lwID0gZmFsc2UpIHtcbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIHRyYW5zaXRpb24gb24gdGhlIGluaXRpYWwgcGFnZSBsb2FkLlxuICAgIGlmIChmb3JjZVNraXApIHJldHVybiBoaWRlKCk7XG5cbiAgICBpZiAoZWwuX194X3RyYW5zaXRpb24gJiYgZWwuX194X3RyYW5zaXRpb24udHlwZSA9PT0gVFJBTlNJVElPTl9UWVBFX09VVCkge1xuICAgICAgLy8gdGhlcmUgaXMgYWxyZWFkeSBhIHNpbWlsYXIgdHJhbnNpdGlvbiBnb2luZyBvbiwgdGhpcyB3YXMgcHJvYmFibHkgdHJpZ2dlcmVkIGJ5XG4gICAgICAvLyBhIGNoYW5nZSBpbiBhIGRpZmZlcmVudCBwcm9wZXJ0eSwgbGV0J3MganVzdCBsZWF2ZSB0aGUgcHJldmlvdXMgb25lIGRvaW5nIGl0cyBqb2JcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhdHRycyA9IGdldFhBdHRycyhlbCwgY29tcG9uZW50LCAndHJhbnNpdGlvbicpO1xuICAgIGNvbnN0IHNob3dBdHRyID0gZ2V0WEF0dHJzKGVsLCBjb21wb25lbnQsICdzaG93JylbMF07XG5cbiAgICBpZiAoc2hvd0F0dHIgJiYgc2hvd0F0dHIubW9kaWZpZXJzLmluY2x1ZGVzKCd0cmFuc2l0aW9uJykpIHtcbiAgICAgIGxldCBtb2RpZmllcnMgPSBzaG93QXR0ci5tb2RpZmllcnM7XG4gICAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKCdpbicpICYmICFtb2RpZmllcnMuaW5jbHVkZXMoJ291dCcpKSByZXR1cm4gaGlkZSgpO1xuICAgICAgY29uc3Qgc2V0dGluZ0JvdGhTaWRlc09mVHJhbnNpdGlvbiA9IG1vZGlmaWVycy5pbmNsdWRlcygnaW4nKSAmJiBtb2RpZmllcnMuaW5jbHVkZXMoJ291dCcpO1xuICAgICAgbW9kaWZpZXJzID0gc2V0dGluZ0JvdGhTaWRlc09mVHJhbnNpdGlvbiA/IG1vZGlmaWVycy5maWx0ZXIoKGksIGluZGV4KSA9PiBpbmRleCA+IG1vZGlmaWVycy5pbmRleE9mKCdvdXQnKSkgOiBtb2RpZmllcnM7XG4gICAgICB0cmFuc2l0aW9uSGVscGVyT3V0KGVsLCBtb2RpZmllcnMsIHNldHRpbmdCb3RoU2lkZXNPZlRyYW5zaXRpb24sIGhpZGUsIHJlamVjdCk7XG4gICAgfSBlbHNlIGlmIChhdHRycy5zb21lKGF0dHIgPT4gWydsZWF2ZScsICdsZWF2ZS1zdGFydCcsICdsZWF2ZS1lbmQnXS5pbmNsdWRlcyhhdHRyLnZhbHVlKSkpIHtcbiAgICAgIHRyYW5zaXRpb25DbGFzc2VzT3V0KGVsLCBjb21wb25lbnQsIGF0dHJzLCBoaWRlLCByZWplY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25IZWxwZXJJbihlbCwgbW9kaWZpZXJzLCBzaG93Q2FsbGJhY2ssIHJlamVjdCkge1xuICAgIC8vIERlZmF1bHQgdmFsdWVzIGluc3BpcmVkIGJ5OiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9tb3Rpb24vc3BlZWQuaHRtbCNkdXJhdGlvblxuICAgIGNvbnN0IHN0eWxlVmFsdWVzID0ge1xuICAgICAgZHVyYXRpb246IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCAnZHVyYXRpb24nLCAxNTApLFxuICAgICAgb3JpZ2luOiBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgJ29yaWdpbicsICdjZW50ZXInKSxcbiAgICAgIGZpcnN0OiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHNjYWxlOiBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgJ3NjYWxlJywgOTUpXG4gICAgICB9LFxuICAgICAgc2Vjb25kOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHNjYWxlOiAxMDBcbiAgICAgIH1cbiAgICB9O1xuICAgIHRyYW5zaXRpb25IZWxwZXIoZWwsIG1vZGlmaWVycywgc2hvd0NhbGxiYWNrLCAoKSA9PiB7fSwgcmVqZWN0LCBzdHlsZVZhbHVlcywgVFJBTlNJVElPTl9UWVBFX0lOKTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2l0aW9uSGVscGVyT3V0KGVsLCBtb2RpZmllcnMsIHNldHRpbmdCb3RoU2lkZXNPZlRyYW5zaXRpb24sIGhpZGVDYWxsYmFjaywgcmVqZWN0KSB7XG4gICAgLy8gTWFrZSB0aGUgXCJvdXRcIiB0cmFuc2l0aW9uIC41eCBzbG93ZXIgdGhhbiB0aGUgXCJpblwiLiAoVmlzdWFsbHkgYmV0dGVyKVxuICAgIC8vIEhPV0VWRVIsIGlmIHRoZXkgZXhwbGljaXRseSBzZXQgYSBkdXJhdGlvbiBmb3IgdGhlIFwib3V0XCIgdHJhbnNpdGlvbixcbiAgICAvLyB1c2UgdGhhdC5cbiAgICBjb25zdCBkdXJhdGlvbiA9IHNldHRpbmdCb3RoU2lkZXNPZlRyYW5zaXRpb24gPyBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgJ2R1cmF0aW9uJywgMTUwKSA6IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCAnZHVyYXRpb24nLCAxNTApIC8gMjtcbiAgICBjb25zdCBzdHlsZVZhbHVlcyA9IHtcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIG9yaWdpbjogbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsICdvcmlnaW4nLCAnY2VudGVyJyksXG4gICAgICBmaXJzdDoge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBzY2FsZTogMTAwXG4gICAgICB9LFxuICAgICAgc2Vjb25kOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHNjYWxlOiBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgJ3NjYWxlJywgOTUpXG4gICAgICB9XG4gICAgfTtcbiAgICB0cmFuc2l0aW9uSGVscGVyKGVsLCBtb2RpZmllcnMsICgpID0+IHt9LCBoaWRlQ2FsbGJhY2ssIHJlamVjdCwgc3R5bGVWYWx1ZXMsIFRSQU5TSVRJT05fVFlQRV9PVVQpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIGtleSwgZmFsbGJhY2spIHtcbiAgICAvLyBJZiB0aGUgbW9kaWZpZXIgaXNuJ3QgcHJlc2VudCwgdXNlIHRoZSBkZWZhdWx0LlxuICAgIGlmIChtb2RpZmllcnMuaW5kZXhPZihrZXkpID09PSAtMSkgcmV0dXJuIGZhbGxiYWNrOyAvLyBJZiBpdCBJUyBwcmVzZW50LCBncmFiIHRoZSB2YWx1ZSBhZnRlciBpdDogeC1zaG93LnRyYW5zaXRpb24uZHVyYXRpb24uNTAwbXNcblxuICAgIGNvbnN0IHJhd1ZhbHVlID0gbW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKGtleSkgKyAxXTtcbiAgICBpZiAoIXJhd1ZhbHVlKSByZXR1cm4gZmFsbGJhY2s7XG5cbiAgICBpZiAoa2V5ID09PSAnc2NhbGUnKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgdmVyeSBuZXh0IHZhbHVlIGlzIE5PVCBhIG51bWJlciBhbmQgcmV0dXJuIHRoZSBmYWxsYmFjay5cbiAgICAgIC8vIElmIHgtc2hvdy50cmFuc2l0aW9uLnNjYWxlLCB3ZSdsbCB1c2UgdGhlIGRlZmF1bHQgc2NhbGUgdmFsdWUuXG4gICAgICAvLyBUaGF0IGlzIGhvdyBhIHVzZXIgb3B0cyBvdXQgb2YgdGhlIG9wYWNpdHkgdHJhbnNpdGlvbi5cbiAgICAgIGlmICghaXNOdW1lcmljKHJhd1ZhbHVlKSkgcmV0dXJuIGZhbGxiYWNrO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdkdXJhdGlvbicpIHtcbiAgICAgIC8vIFN1cHBvcnQgeC1zaG93LnRyYW5zaXRpb24uZHVyYXRpb24uNTAwbXMgJiYgZHVyYXRpb24uNTAwXG4gICAgICBsZXQgbWF0Y2ggPSByYXdWYWx1ZS5tYXRjaCgvKFswLTldKyltcy8pO1xuICAgICAgaWYgKG1hdGNoKSByZXR1cm4gbWF0Y2hbMV07XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ29yaWdpbicpIHtcbiAgICAgIC8vIFN1cHBvcnQgY2hhaW5pbmcgb3JpZ2luIGRpcmVjdGlvbnM6IHgtc2hvdy50cmFuc2l0aW9uLnRvcC5yaWdodFxuICAgICAgaWYgKFsndG9wJywgJ3JpZ2h0JywgJ2xlZnQnLCAnY2VudGVyJywgJ2JvdHRvbSddLmluY2x1ZGVzKG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihrZXkpICsgMl0pKSB7XG4gICAgICAgIHJldHVybiBbcmF3VmFsdWUsIG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihrZXkpICsgMl1dLmpvaW4oJyAnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmF3VmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uSGVscGVyKGVsLCBtb2RpZmllcnMsIGhvb2sxLCBob29rMiwgcmVqZWN0LCBzdHlsZVZhbHVlcywgdHlwZSkge1xuICAgIC8vIGNsZWFyIHRoZSBwcmV2aW91cyB0cmFuc2l0aW9uIGlmIGV4aXN0cyB0byBhdm9pZCBjYWNoaW5nIHRoZSB3cm9uZyBzdHlsZXNcbiAgICBpZiAoZWwuX194X3RyYW5zaXRpb24pIHtcbiAgICAgIGVsLl9feF90cmFuc2l0aW9uLmNhbmNlbCAmJiBlbC5fX3hfdHJhbnNpdGlvbi5jYW5jZWwoKTtcbiAgICB9IC8vIElmIHRoZSB1c2VyIHNldCB0aGVzZSBzdHlsZSB2YWx1ZXMsIHdlJ2xsIHB1dCB0aGVtIGJhY2sgd2hlbiB3ZSdyZSBkb25lIHdpdGggdGhlbS5cblxuXG4gICAgY29uc3Qgb3BhY2l0eUNhY2hlID0gZWwuc3R5bGUub3BhY2l0eTtcbiAgICBjb25zdCB0cmFuc2Zvcm1DYWNoZSA9IGVsLnN0eWxlLnRyYW5zZm9ybTtcbiAgICBjb25zdCB0cmFuc2Zvcm1PcmlnaW5DYWNoZSA9IGVsLnN0eWxlLnRyYW5zZm9ybU9yaWdpbjsgLy8gSWYgbm8gbW9kaWZpZXJzIGFyZSBwcmVzZW50OiB4LXNob3cudHJhbnNpdGlvbiwgd2UnbGwgZGVmYXVsdCB0byBib3RoIG9wYWNpdHkgYW5kIHNjYWxlLlxuXG4gICAgY29uc3Qgbm9Nb2RpZmllcnMgPSAhbW9kaWZpZXJzLmluY2x1ZGVzKCdvcGFjaXR5JykgJiYgIW1vZGlmaWVycy5pbmNsdWRlcygnc2NhbGUnKTtcbiAgICBjb25zdCB0cmFuc2l0aW9uT3BhY2l0eSA9IG5vTW9kaWZpZXJzIHx8IG1vZGlmaWVycy5pbmNsdWRlcygnb3BhY2l0eScpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25TY2FsZSA9IG5vTW9kaWZpZXJzIHx8IG1vZGlmaWVycy5pbmNsdWRlcygnc2NhbGUnKTsgLy8gVGhlc2UgYXJlIHRoZSBleHBsaWNpdCBzdGFnZXMgb2YgYSB0cmFuc2l0aW9uIChzYW1lIHN0YWdlcyBmb3IgaW4gYW5kIGZvciBvdXQpLlxuICAgIC8vIFRoaXMgd2F5IHlvdSBjYW4gZ2V0IGEgYmlyZHMgZXllIHZpZXcgb2YgdGhlIGhvb2tzLCBhbmQgdGhlIGRpZmZlcmVuY2VzXG4gICAgLy8gYmV0d2VlbiB0aGVtLlxuXG4gICAgY29uc3Qgc3RhZ2VzID0ge1xuICAgICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uT3BhY2l0eSkgZWwuc3R5bGUub3BhY2l0eSA9IHN0eWxlVmFsdWVzLmZpcnN0Lm9wYWNpdHk7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uU2NhbGUpIGVsLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3N0eWxlVmFsdWVzLmZpcnN0LnNjYWxlIC8gMTAwfSlgO1xuICAgICAgfSxcblxuICAgICAgZHVyaW5nKCkge1xuICAgICAgICBpZiAodHJhbnNpdGlvblNjYWxlKSBlbC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBzdHlsZVZhbHVlcy5vcmlnaW47XG4gICAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFt0cmFuc2l0aW9uT3BhY2l0eSA/IGBvcGFjaXR5YCA6IGBgLCB0cmFuc2l0aW9uU2NhbGUgPyBgdHJhbnNmb3JtYCA6IGBgXS5qb2luKCcgJykudHJpbSgpO1xuICAgICAgICBlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtzdHlsZVZhbHVlcy5kdXJhdGlvbiAvIDEwMDB9c2A7XG4gICAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSlgO1xuICAgICAgfSxcblxuICAgICAgc2hvdygpIHtcbiAgICAgICAgaG9vazEoKTtcbiAgICAgIH0sXG5cbiAgICAgIGVuZCgpIHtcbiAgICAgICAgaWYgKHRyYW5zaXRpb25PcGFjaXR5KSBlbC5zdHlsZS5vcGFjaXR5ID0gc3R5bGVWYWx1ZXMuc2Vjb25kLm9wYWNpdHk7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uU2NhbGUpIGVsLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3N0eWxlVmFsdWVzLnNlY29uZC5zY2FsZSAvIDEwMH0pYDtcbiAgICAgIH0sXG5cbiAgICAgIGhpZGUoKSB7XG4gICAgICAgIGhvb2syKCk7XG4gICAgICB9LFxuXG4gICAgICBjbGVhbnVwKCkge1xuICAgICAgICBpZiAodHJhbnNpdGlvbk9wYWNpdHkpIGVsLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5Q2FjaGU7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uU2NhbGUpIGVsLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybUNhY2hlO1xuICAgICAgICBpZiAodHJhbnNpdGlvblNjYWxlKSBlbC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSB0cmFuc2Zvcm1PcmlnaW5DYWNoZTtcbiAgICAgICAgZWwuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgZWwuc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gbnVsbDtcbiAgICAgIH1cblxuICAgIH07XG4gICAgdHJhbnNpdGlvbihlbCwgc3RhZ2VzLCB0eXBlLCByZWplY3QpO1xuICB9XG5cbiAgY29uc3QgZW5zdXJlU3RyaW5nRXhwcmVzc2lvbiA9IChleHByZXNzaW9uLCBlbCwgY29tcG9uZW50KSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBleHByZXNzaW9uID09PSAnZnVuY3Rpb24nID8gY29tcG9uZW50LmV2YWx1YXRlUmV0dXJuRXhwcmVzc2lvbihlbCwgZXhwcmVzc2lvbikgOiBleHByZXNzaW9uO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25DbGFzc2VzSW4oZWwsIGNvbXBvbmVudCwgZGlyZWN0aXZlcywgc2hvd0NhbGxiYWNrLCByZWplY3QpIHtcbiAgICBjb25zdCBlbnRlciA9IGNvbnZlcnRDbGFzc1N0cmluZ1RvQXJyYXkoZW5zdXJlU3RyaW5nRXhwcmVzc2lvbigoZGlyZWN0aXZlcy5maW5kKGkgPT4gaS52YWx1ZSA9PT0gJ2VudGVyJykgfHwge1xuICAgICAgZXhwcmVzc2lvbjogJydcbiAgICB9KS5leHByZXNzaW9uLCBlbCwgY29tcG9uZW50KSk7XG4gICAgY29uc3QgZW50ZXJTdGFydCA9IGNvbnZlcnRDbGFzc1N0cmluZ1RvQXJyYXkoZW5zdXJlU3RyaW5nRXhwcmVzc2lvbigoZGlyZWN0aXZlcy5maW5kKGkgPT4gaS52YWx1ZSA9PT0gJ2VudGVyLXN0YXJ0JykgfHwge1xuICAgICAgZXhwcmVzc2lvbjogJydcbiAgICB9KS5leHByZXNzaW9uLCBlbCwgY29tcG9uZW50KSk7XG4gICAgY29uc3QgZW50ZXJFbmQgPSBjb252ZXJ0Q2xhc3NTdHJpbmdUb0FycmF5KGVuc3VyZVN0cmluZ0V4cHJlc3Npb24oKGRpcmVjdGl2ZXMuZmluZChpID0+IGkudmFsdWUgPT09ICdlbnRlci1lbmQnKSB8fCB7XG4gICAgICBleHByZXNzaW9uOiAnJ1xuICAgIH0pLmV4cHJlc3Npb24sIGVsLCBjb21wb25lbnQpKTtcbiAgICB0cmFuc2l0aW9uQ2xhc3NlcyhlbCwgZW50ZXIsIGVudGVyU3RhcnQsIGVudGVyRW5kLCBzaG93Q2FsbGJhY2ssICgpID0+IHt9LCBUUkFOU0lUSU9OX1RZUEVfSU4sIHJlamVjdCk7XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbkNsYXNzZXNPdXQoZWwsIGNvbXBvbmVudCwgZGlyZWN0aXZlcywgaGlkZUNhbGxiYWNrLCByZWplY3QpIHtcbiAgICBjb25zdCBsZWF2ZSA9IGNvbnZlcnRDbGFzc1N0cmluZ1RvQXJyYXkoZW5zdXJlU3RyaW5nRXhwcmVzc2lvbigoZGlyZWN0aXZlcy5maW5kKGkgPT4gaS52YWx1ZSA9PT0gJ2xlYXZlJykgfHwge1xuICAgICAgZXhwcmVzc2lvbjogJydcbiAgICB9KS5leHByZXNzaW9uLCBlbCwgY29tcG9uZW50KSk7XG4gICAgY29uc3QgbGVhdmVTdGFydCA9IGNvbnZlcnRDbGFzc1N0cmluZ1RvQXJyYXkoZW5zdXJlU3RyaW5nRXhwcmVzc2lvbigoZGlyZWN0aXZlcy5maW5kKGkgPT4gaS52YWx1ZSA9PT0gJ2xlYXZlLXN0YXJ0JykgfHwge1xuICAgICAgZXhwcmVzc2lvbjogJydcbiAgICB9KS5leHByZXNzaW9uLCBlbCwgY29tcG9uZW50KSk7XG4gICAgY29uc3QgbGVhdmVFbmQgPSBjb252ZXJ0Q2xhc3NTdHJpbmdUb0FycmF5KGVuc3VyZVN0cmluZ0V4cHJlc3Npb24oKGRpcmVjdGl2ZXMuZmluZChpID0+IGkudmFsdWUgPT09ICdsZWF2ZS1lbmQnKSB8fCB7XG4gICAgICBleHByZXNzaW9uOiAnJ1xuICAgIH0pLmV4cHJlc3Npb24sIGVsLCBjb21wb25lbnQpKTtcbiAgICB0cmFuc2l0aW9uQ2xhc3NlcyhlbCwgbGVhdmUsIGxlYXZlU3RhcnQsIGxlYXZlRW5kLCAoKSA9PiB7fSwgaGlkZUNhbGxiYWNrLCBUUkFOU0lUSU9OX1RZUEVfT1VULCByZWplY3QpO1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25DbGFzc2VzKGVsLCBjbGFzc2VzRHVyaW5nLCBjbGFzc2VzU3RhcnQsIGNsYXNzZXNFbmQsIGhvb2sxLCBob29rMiwgdHlwZSwgcmVqZWN0KSB7XG4gICAgLy8gY2xlYXIgdGhlIHByZXZpb3VzIHRyYW5zaXRpb24gaWYgZXhpc3RzIHRvIGF2b2lkIGNhY2hpbmcgdGhlIHdyb25nIGNsYXNzZXNcbiAgICBpZiAoZWwuX194X3RyYW5zaXRpb24pIHtcbiAgICAgIGVsLl9feF90cmFuc2l0aW9uLmNhbmNlbCAmJiBlbC5fX3hfdHJhbnNpdGlvbi5jYW5jZWwoKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcmlnaW5hbENsYXNzZXMgPSBlbC5fX3hfb3JpZ2luYWxfY2xhc3NlcyB8fCBbXTtcbiAgICBjb25zdCBzdGFnZXMgPSB7XG4gICAgICBzdGFydCgpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzU3RhcnQpO1xuICAgICAgfSxcblxuICAgICAgZHVyaW5nKCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXNEdXJpbmcpO1xuICAgICAgfSxcblxuICAgICAgc2hvdygpIHtcbiAgICAgICAgaG9vazEoKTtcbiAgICAgIH0sXG5cbiAgICAgIGVuZCgpIHtcbiAgICAgICAgLy8gRG9uJ3QgcmVtb3ZlIGNsYXNzZXMgdGhhdCB3ZXJlIGluIHRoZSBvcmlnaW5hbCBjbGFzcyBhdHRyaWJ1dGUuXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3Nlc1N0YXJ0LmZpbHRlcihpID0+ICFvcmlnaW5hbENsYXNzZXMuaW5jbHVkZXMoaSkpKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzRW5kKTtcbiAgICAgIH0sXG5cbiAgICAgIGhpZGUoKSB7XG4gICAgICAgIGhvb2syKCk7XG4gICAgICB9LFxuXG4gICAgICBjbGVhbnVwKCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzZXNEdXJpbmcuZmlsdGVyKGkgPT4gIW9yaWdpbmFsQ2xhc3Nlcy5pbmNsdWRlcyhpKSkpO1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzZXNFbmQuZmlsdGVyKGkgPT4gIW9yaWdpbmFsQ2xhc3Nlcy5pbmNsdWRlcyhpKSkpO1xuICAgICAgfVxuXG4gICAgfTtcbiAgICB0cmFuc2l0aW9uKGVsLCBzdGFnZXMsIHR5cGUsIHJlamVjdCk7XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbihlbCwgc3RhZ2VzLCB0eXBlLCByZWplY3QpIHtcbiAgICBjb25zdCBmaW5pc2ggPSBvbmNlKCgpID0+IHtcbiAgICAgIHN0YWdlcy5oaWRlKCk7IC8vIEFkZGluZyBhbiBcImlzQ29ubmVjdGVkXCIgY2hlY2ssIGluIGNhc2UgdGhlIGNhbGxiYWNrXG4gICAgICAvLyByZW1vdmVkIHRoZSBlbGVtZW50IGZyb20gdGhlIERPTS5cblxuICAgICAgaWYgKGVsLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHN0YWdlcy5jbGVhbnVwKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBlbC5fX3hfdHJhbnNpdGlvbjtcbiAgICB9KTtcbiAgICBlbC5fX3hfdHJhbnNpdGlvbiA9IHtcbiAgICAgIC8vIFNldCB0cmFuc2l0aW9uIHR5cGUgc28gd2UgY2FuIGF2b2lkIGNsZWFyaW5nIHRyYW5zaXRpb24gaWYgdGhlIGRpcmVjdGlvbiBpcyB0aGUgc2FtZVxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIC8vIGNyZWF0ZSBhIGNhbGxiYWNrIGZvciB0aGUgbGFzdCBzdGFnZXMgb2YgdGhlIHRyYW5zaXRpb24gc28gd2UgY2FuIGNhbGwgaXRcbiAgICAgIC8vIGZyb20gZGlmZmVyZW50IHBvaW50IGFuZCBlYXJseSB0ZXJtaW5hdGUgaXQuIE9uY2Ugd2lsbCBlbnN1cmUgdGhhdCBmdW5jdGlvblxuICAgICAgLy8gaXMgb25seSBjYWxsZWQgb25lIHRpbWUuXG4gICAgICBjYW5jZWw6IG9uY2UoKCkgPT4ge1xuICAgICAgICByZWplY3QoVFJBTlNJVElPTl9DQU5DRUxMRUQpO1xuICAgICAgICBmaW5pc2goKTtcbiAgICAgIH0pLFxuICAgICAgZmluaXNoLFxuICAgICAgLy8gVGhpcyBzdG9yZSB0aGUgbmV4dCBhbmltYXRpb24gZnJhbWUgc28gd2UgY2FuIGNhbmNlbCBpdFxuICAgICAgbmV4dEZyYW1lOiBudWxsXG4gICAgfTtcbiAgICBzdGFnZXMuc3RhcnQoKTtcbiAgICBzdGFnZXMuZHVyaW5nKCk7XG4gICAgZWwuX194X3RyYW5zaXRpb24ubmV4dEZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIC8vIE5vdGU6IFNhZmFyaSdzIHRyYW5zaXRpb25EdXJhdGlvbiBwcm9wZXJ0eSB3aWxsIGxpc3Qgb3V0IGNvbW1hIHNlcGFyYXRlZCB0cmFuc2l0aW9uIGR1cmF0aW9uc1xuICAgICAgLy8gZm9yIGV2ZXJ5IHNpbmdsZSB0cmFuc2l0aW9uIHByb3BlcnR5LiBMZXQncyBncmFiIHRoZSBmaXJzdCBvbmUgYW5kIGNhbGwgaXQgYSBkYXkuXG4gICAgICBsZXQgZHVyYXRpb24gPSBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoLywuKi8sICcnKS5yZXBsYWNlKCdzJywgJycpKSAqIDEwMDA7XG5cbiAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xuICAgICAgICBkdXJhdGlvbiA9IE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsKS5hbmltYXRpb25EdXJhdGlvbi5yZXBsYWNlKCdzJywgJycpKSAqIDEwMDA7XG4gICAgICB9XG5cbiAgICAgIHN0YWdlcy5zaG93KCk7XG4gICAgICBlbC5fX3hfdHJhbnNpdGlvbi5uZXh0RnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBzdGFnZXMuZW5kKCk7XG4gICAgICAgIHNldFRpbWVvdXQoZWwuX194X3RyYW5zaXRpb24uZmluaXNoLCBkdXJhdGlvbik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBpc051bWVyaWMoc3ViamVjdCkge1xuICAgIHJldHVybiAhQXJyYXkuaXNBcnJheShzdWJqZWN0KSAmJiAhaXNOYU4oc3ViamVjdCk7XG4gIH0gLy8gVGhhbmtzIEB2dWVqc1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2Jsb2IvNGRlNDY0OWQ5NjM3MjYyYTliMDA3NzIwYjU5ZjgwYWM3MmE1NjIwYy9zcmMvc2hhcmVkL3V0aWwuanNcblxuICBmdW5jdGlvbiBvbmNlKGNhbGxiYWNrKSB7XG4gICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVGb3JEaXJlY3RpdmUoY29tcG9uZW50LCB0ZW1wbGF0ZUVsLCBleHByZXNzaW9uLCBpbml0aWFsVXBkYXRlLCBleHRyYVZhcnMpIHtcbiAgICB3YXJuSWZNYWxmb3JtZWRUZW1wbGF0ZSh0ZW1wbGF0ZUVsLCAneC1mb3InKTtcbiAgICBsZXQgaXRlcmF0b3JOYW1lcyA9IHR5cGVvZiBleHByZXNzaW9uID09PSAnZnVuY3Rpb24nID8gcGFyc2VGb3JFeHByZXNzaW9uKGNvbXBvbmVudC5ldmFsdWF0ZVJldHVybkV4cHJlc3Npb24odGVtcGxhdGVFbCwgZXhwcmVzc2lvbikpIDogcGFyc2VGb3JFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgIGxldCBpdGVtcyA9IGV2YWx1YXRlSXRlbXNBbmRSZXR1cm5FbXB0eUlmWElmSXNQcmVzZW50QW5kRmFsc2VPbkVsZW1lbnQoY29tcG9uZW50LCB0ZW1wbGF0ZUVsLCBpdGVyYXRvck5hbWVzLCBleHRyYVZhcnMpOyAvLyBBcyB3ZSB3YWxrIHRoZSBhcnJheSwgd2UnbGwgYWxzbyB3YWxrIHRoZSBET00gKHVwZGF0aW5nL2NyZWF0aW5nIGFzIHdlIGdvKS5cblxuICAgIGxldCBjdXJyZW50RWwgPSB0ZW1wbGF0ZUVsO1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBsZXQgaXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMgPSBnZXRJdGVyYXRpb25TY29wZVZhcmlhYmxlcyhpdGVyYXRvck5hbWVzLCBpdGVtLCBpbmRleCwgaXRlbXMsIGV4dHJhVmFycygpKTtcbiAgICAgIGxldCBjdXJyZW50S2V5ID0gZ2VuZXJhdGVLZXlGb3JJdGVyYXRpb24oY29tcG9uZW50LCB0ZW1wbGF0ZUVsLCBpbmRleCwgaXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMpO1xuICAgICAgbGV0IG5leHRFbCA9IGxvb2tBaGVhZEZvck1hdGNoaW5nS2V5ZWRFbGVtZW50QW5kTW92ZUl0SWZGb3VuZChjdXJyZW50RWwubmV4dEVsZW1lbnRTaWJsaW5nLCBjdXJyZW50S2V5KTsgLy8gSWYgd2UgaGF2ZW4ndCBmb3VuZCBhIG1hdGNoaW5nIGtleSwgaW5zZXJ0IHRoZSBlbGVtZW50IGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuXG4gICAgICBpZiAoIW5leHRFbCkge1xuICAgICAgICBuZXh0RWwgPSBhZGRFbGVtZW50SW5Mb29wQWZ0ZXJDdXJyZW50RWwodGVtcGxhdGVFbCwgY3VycmVudEVsKTsgLy8gQW5kIHRyYW5zaXRpb24gaXQgaW4gaWYgaXQncyBub3QgdGhlIGZpcnN0IHBhZ2UgbG9hZC5cblxuICAgICAgICB0cmFuc2l0aW9uSW4obmV4dEVsLCAoKSA9PiB7fSwgKCkgPT4ge30sIGNvbXBvbmVudCwgaW5pdGlhbFVwZGF0ZSk7XG4gICAgICAgIG5leHRFbC5fX3hfZm9yID0gaXRlcmF0aW9uU2NvcGVWYXJpYWJsZXM7XG4gICAgICAgIGNvbXBvbmVudC5pbml0aWFsaXplRWxlbWVudHMobmV4dEVsLCAoKSA9PiBuZXh0RWwuX194X2Zvcik7IC8vIE90aGVyd2lzZSB1cGRhdGUgdGhlIGVsZW1lbnQgd2UgZm91bmQuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUZW1wb3JhcmlseSByZW1vdmUgdGhlIGtleSBpbmRpY2F0b3IgdG8gYWxsb3cgdGhlIG5vcm1hbCBcInVwZGF0ZUVsZW1lbnRzXCIgdG8gd29yay5cbiAgICAgICAgZGVsZXRlIG5leHRFbC5fX3hfZm9yX2tleTtcbiAgICAgICAgbmV4dEVsLl9feF9mb3IgPSBpdGVyYXRpb25TY29wZVZhcmlhYmxlcztcbiAgICAgICAgY29tcG9uZW50LnVwZGF0ZUVsZW1lbnRzKG5leHRFbCwgKCkgPT4gbmV4dEVsLl9feF9mb3IpO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50RWwgPSBuZXh0RWw7XG4gICAgICBjdXJyZW50RWwuX194X2Zvcl9rZXkgPSBjdXJyZW50S2V5O1xuICAgIH0pO1xuICAgIHJlbW92ZUFueUxlZnRPdmVyRWxlbWVudHNGcm9tUHJldmlvdXNVcGRhdGUoY3VycmVudEVsLCBjb21wb25lbnQpO1xuICB9IC8vIFRoaXMgd2FzIHRha2VuIGZyb20gVnVlSlMgMi4qIGNvcmUuIFRoYW5rcyBWdWUhXG5cbiAgZnVuY3Rpb24gcGFyc2VGb3JFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICBsZXQgZm9ySXRlcmF0b3JSRSA9IC8sKFteLFxcfVxcXV0qKSg/OiwoW14sXFx9XFxdXSopKT8kLztcbiAgICBsZXQgc3RyaXBQYXJlbnNSRSA9IC9eXFwofFxcKSQvZztcbiAgICBsZXQgZm9yQWxpYXNSRSA9IC8oW1xcc1xcU10qPylcXHMrKD86aW58b2YpXFxzKyhbXFxzXFxTXSopLztcbiAgICBsZXQgaW5NYXRjaCA9IFN0cmluZyhleHByZXNzaW9uKS5tYXRjaChmb3JBbGlhc1JFKTtcbiAgICBpZiAoIWluTWF0Y2gpIHJldHVybjtcbiAgICBsZXQgcmVzID0ge307XG4gICAgcmVzLml0ZW1zID0gaW5NYXRjaFsyXS50cmltKCk7XG4gICAgbGV0IGl0ZW0gPSBpbk1hdGNoWzFdLnRyaW0oKS5yZXBsYWNlKHN0cmlwUGFyZW5zUkUsICcnKTtcbiAgICBsZXQgaXRlcmF0b3JNYXRjaCA9IGl0ZW0ubWF0Y2goZm9ySXRlcmF0b3JSRSk7XG5cbiAgICBpZiAoaXRlcmF0b3JNYXRjaCkge1xuICAgICAgcmVzLml0ZW0gPSBpdGVtLnJlcGxhY2UoZm9ySXRlcmF0b3JSRSwgJycpLnRyaW0oKTtcbiAgICAgIHJlcy5pbmRleCA9IGl0ZXJhdG9yTWF0Y2hbMV0udHJpbSgpO1xuXG4gICAgICBpZiAoaXRlcmF0b3JNYXRjaFsyXSkge1xuICAgICAgICByZXMuY29sbGVjdGlvbiA9IGl0ZXJhdG9yTWF0Y2hbMl0udHJpbSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMuaXRlbSA9IGl0ZW07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdGlvblNjb3BlVmFyaWFibGVzKGl0ZXJhdG9yTmFtZXMsIGl0ZW0sIGluZGV4LCBpdGVtcywgZXh0cmFWYXJzKSB7XG4gICAgLy8gV2UgbXVzdCBjcmVhdGUgYSBuZXcgb2JqZWN0LCBzbyBlYWNoIGl0ZXJhdGlvbiBoYXMgYSBuZXcgc2NvcGVcbiAgICBsZXQgc2NvcGVWYXJpYWJsZXMgPSBleHRyYVZhcnMgPyBfb2JqZWN0U3ByZWFkMih7fSwgZXh0cmFWYXJzKSA6IHt9O1xuICAgIHNjb3BlVmFyaWFibGVzW2l0ZXJhdG9yTmFtZXMuaXRlbV0gPSBpdGVtO1xuICAgIGlmIChpdGVyYXRvck5hbWVzLmluZGV4KSBzY29wZVZhcmlhYmxlc1tpdGVyYXRvck5hbWVzLmluZGV4XSA9IGluZGV4O1xuICAgIGlmIChpdGVyYXRvck5hbWVzLmNvbGxlY3Rpb24pIHNjb3BlVmFyaWFibGVzW2l0ZXJhdG9yTmFtZXMuY29sbGVjdGlvbl0gPSBpdGVtcztcbiAgICByZXR1cm4gc2NvcGVWYXJpYWJsZXM7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUtleUZvckl0ZXJhdGlvbihjb21wb25lbnQsIGVsLCBpbmRleCwgaXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMpIHtcbiAgICBsZXQgYmluZEtleUF0dHJpYnV0ZSA9IGdldFhBdHRycyhlbCwgY29tcG9uZW50LCAnYmluZCcpLmZpbHRlcihhdHRyID0+IGF0dHIudmFsdWUgPT09ICdrZXknKVswXTsgLy8gSWYgdGhlIGRldiBoYXNuJ3Qgc3BlY2lmaWVkIGEga2V5LCBqdXN0IHJldHVybiB0aGUgaW5kZXggb2YgdGhlIGl0ZXJhdGlvbi5cblxuICAgIGlmICghYmluZEtleUF0dHJpYnV0ZSkgcmV0dXJuIGluZGV4O1xuICAgIHJldHVybiBjb21wb25lbnQuZXZhbHVhdGVSZXR1cm5FeHByZXNzaW9uKGVsLCBiaW5kS2V5QXR0cmlidXRlLmV4cHJlc3Npb24sICgpID0+IGl0ZXJhdGlvblNjb3BlVmFyaWFibGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV2YWx1YXRlSXRlbXNBbmRSZXR1cm5FbXB0eUlmWElmSXNQcmVzZW50QW5kRmFsc2VPbkVsZW1lbnQoY29tcG9uZW50LCBlbCwgaXRlcmF0b3JOYW1lcywgZXh0cmFWYXJzKSB7XG4gICAgbGV0IGlmQXR0cmlidXRlID0gZ2V0WEF0dHJzKGVsLCBjb21wb25lbnQsICdpZicpWzBdO1xuXG4gICAgaWYgKGlmQXR0cmlidXRlICYmICFjb21wb25lbnQuZXZhbHVhdGVSZXR1cm5FeHByZXNzaW9uKGVsLCBpZkF0dHJpYnV0ZS5leHByZXNzaW9uKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCBpdGVtcyA9IGNvbXBvbmVudC5ldmFsdWF0ZVJldHVybkV4cHJlc3Npb24oZWwsIGl0ZXJhdG9yTmFtZXMuaXRlbXMsIGV4dHJhVmFycyk7IC8vIFRoaXMgYWRkcyBzdXBwb3J0IGZvciB0aGUgYGkgaW4gbmAgc3ludGF4LlxuXG4gICAgaWYgKGlzTnVtZXJpYyhpdGVtcykgJiYgaXRlbXMgPj0gMCkge1xuICAgICAgaXRlbXMgPSBBcnJheS5mcm9tKEFycmF5KGl0ZW1zKS5rZXlzKCksIGkgPT4gaSArIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEVsZW1lbnRJbkxvb3BBZnRlckN1cnJlbnRFbCh0ZW1wbGF0ZUVsLCBjdXJyZW50RWwpIHtcbiAgICBsZXQgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlRWwuY29udGVudCwgdHJ1ZSk7XG4gICAgY3VycmVudEVsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNsb25lLCBjdXJyZW50RWwubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgICByZXR1cm4gY3VycmVudEVsLm5leHRFbGVtZW50U2libGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvb2tBaGVhZEZvck1hdGNoaW5nS2V5ZWRFbGVtZW50QW5kTW92ZUl0SWZGb3VuZChuZXh0RWwsIGN1cnJlbnRLZXkpIHtcbiAgICBpZiAoIW5leHRFbCkgcmV0dXJuOyAvLyBJZiB3ZSBhcmUgYWxyZWFkeSBwYXN0IHRoZSB4LWZvciBnZW5lcmF0ZWQgZWxlbWVudHMsIHdlIGRvbid0IG5lZWQgdG8gbG9vayBhaGVhZC5cblxuICAgIGlmIChuZXh0RWwuX194X2Zvcl9rZXkgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBJZiB0aGUgdGhlIGtleSdzIERPIG1hdGNoLCBubyBuZWVkIHRvIGxvb2sgYWhlYWQuXG5cbiAgICBpZiAobmV4dEVsLl9feF9mb3Jfa2V5ID09PSBjdXJyZW50S2V5KSByZXR1cm4gbmV4dEVsOyAvLyBJZiB0aGV5IGRvbid0LCB3ZSdsbCBsb29rIGFoZWFkIGZvciBhIG1hdGNoLlxuICAgIC8vIElmIHdlIGZpbmQgaXQsIHdlJ2xsIG1vdmUgaXQgdG8gdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGxvb3AuXG5cbiAgICBsZXQgdG1wTmV4dEVsID0gbmV4dEVsO1xuXG4gICAgd2hpbGUgKHRtcE5leHRFbCkge1xuICAgICAgaWYgKHRtcE5leHRFbC5fX3hfZm9yX2tleSA9PT0gY3VycmVudEtleSkge1xuICAgICAgICByZXR1cm4gdG1wTmV4dEVsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRtcE5leHRFbCwgbmV4dEVsKTtcbiAgICAgIH1cblxuICAgICAgdG1wTmV4dEVsID0gdG1wTmV4dEVsLm5leHRFbGVtZW50U2libGluZyAmJiB0bXBOZXh0RWwubmV4dEVsZW1lbnRTaWJsaW5nLl9feF9mb3Jfa2V5ICE9PSB1bmRlZmluZWQgPyB0bXBOZXh0RWwubmV4dEVsZW1lbnRTaWJsaW5nIDogZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQW55TGVmdE92ZXJFbGVtZW50c0Zyb21QcmV2aW91c1VwZGF0ZShjdXJyZW50RWwsIGNvbXBvbmVudCkge1xuICAgIHZhciBuZXh0RWxlbWVudEZyb21PbGRMb29wID0gY3VycmVudEVsLm5leHRFbGVtZW50U2libGluZyAmJiBjdXJyZW50RWwubmV4dEVsZW1lbnRTaWJsaW5nLl9feF9mb3Jfa2V5ICE9PSB1bmRlZmluZWQgPyBjdXJyZW50RWwubmV4dEVsZW1lbnRTaWJsaW5nIDogZmFsc2U7XG5cbiAgICB3aGlsZSAobmV4dEVsZW1lbnRGcm9tT2xkTG9vcCkge1xuICAgICAgbGV0IG5leHRFbGVtZW50RnJvbU9sZExvb3BJbW11dGFibGUgPSBuZXh0RWxlbWVudEZyb21PbGRMb29wO1xuICAgICAgbGV0IG5leHRTaWJsaW5nID0gbmV4dEVsZW1lbnRGcm9tT2xkTG9vcC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICB0cmFuc2l0aW9uT3V0KG5leHRFbGVtZW50RnJvbU9sZExvb3AsICgpID0+IHtcbiAgICAgICAgbmV4dEVsZW1lbnRGcm9tT2xkTG9vcEltbXV0YWJsZS5yZW1vdmUoKTtcbiAgICAgIH0sICgpID0+IHt9LCBjb21wb25lbnQpO1xuICAgICAgbmV4dEVsZW1lbnRGcm9tT2xkTG9vcCA9IG5leHRTaWJsaW5nICYmIG5leHRTaWJsaW5nLl9feF9mb3Jfa2V5ICE9PSB1bmRlZmluZWQgPyBuZXh0U2libGluZyA6IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUF0dHJpYnV0ZUJpbmRpbmdEaXJlY3RpdmUoY29tcG9uZW50LCBlbCwgYXR0ck5hbWUsIGV4cHJlc3Npb24sIGV4dHJhVmFycywgYXR0clR5cGUsIG1vZGlmaWVycykge1xuICAgIHZhciB2YWx1ZSA9IGNvbXBvbmVudC5ldmFsdWF0ZVJldHVybkV4cHJlc3Npb24oZWwsIGV4cHJlc3Npb24sIGV4dHJhVmFycyk7XG5cbiAgICBpZiAoYXR0ck5hbWUgPT09ICd2YWx1ZScpIHtcbiAgICAgIGlmIChBbHBpbmUuaWdub3JlRm9jdXNlZEZvclZhbHVlQmluZGluZyAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlzU2FtZU5vZGUoZWwpKSByZXR1cm47IC8vIElmIG5lc3RlZCBtb2RlbCBrZXkgaXMgdW5kZWZpbmVkLCBzZXQgdGhlIGRlZmF1bHQgdmFsdWUgdG8gZW1wdHkgc3RyaW5nLlxuXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiBTdHJpbmcoZXhwcmVzc2lvbikubWF0Y2goL1xcLi8pKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIC8vIFNldCByYWRpbyB2YWx1ZSBmcm9tIHgtYmluZDp2YWx1ZSwgaWYgbm8gXCJ2YWx1ZVwiIGF0dHJpYnV0ZSBleGlzdHMuXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgaW5pdGlhbCBzdGF0ZSB2YWx1ZXMsIHJhZGlvIHdpbGwgaGF2ZSBhIGNvcnJlY3RcbiAgICAgICAgLy8gXCJjaGVja2VkXCIgdmFsdWUgc2luY2UgeC1iaW5kOnZhbHVlIGlzIHByb2Nlc3NlZCBiZWZvcmUgeC1tb2RlbC5cbiAgICAgICAgaWYgKGVsLmF0dHJpYnV0ZXMudmFsdWUgPT09IHVuZGVmaW5lZCAmJiBhdHRyVHlwZSA9PT0gJ2JpbmQnKSB7XG4gICAgICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyVHlwZSAhPT0gJ2JpbmQnKSB7XG4gICAgICAgICAgZWwuY2hlY2tlZCA9IGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlKGVsLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWwudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAvLyBJZiB3ZSBhcmUgZXhwbGljaXRseSBiaW5kaW5nIGEgc3RyaW5nIHRvIHRoZSA6dmFsdWUsIHNldCB0aGUgc3RyaW5nLFxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYSBib29sZWFuLCBsZWF2ZSBpdCBhbG9uZSwgaXQgd2lsbCBiZSBzZXQgdG8gXCJvblwiXG4gICAgICAgIC8vIGF1dG9tYXRpY2FsbHkuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJyAmJiAhW251bGwsIHVuZGVmaW5lZF0uaW5jbHVkZXModmFsdWUpICYmIGF0dHJUeXBlID09PSAnYmluZCcpIHtcbiAgICAgICAgICBlbC52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXR0clR5cGUgIT09ICdiaW5kJykge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgLy8gSSdtIHB1cnBvc2VseSBub3QgdXNpbmcgQXJyYXkuaW5jbHVkZXMgaGVyZSBiZWNhdXNlIGl0J3NcbiAgICAgICAgICAgIC8vIHN0cmljdCwgYW5kIGJlY2F1c2Ugb2YgTnVtZXJpYy9TdHJpbmcgbWlzLWNhc3RpbmcsIElcbiAgICAgICAgICAgIC8vIHdhbnQgdGhlIFwiaW5jbHVkZXNcIiB0byBiZSBcImZ1enp5XCIuXG4gICAgICAgICAgICBlbC5jaGVja2VkID0gdmFsdWUuc29tZSh2YWwgPT4gY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUodmFsLCBlbC52YWx1ZSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5jaGVja2VkID0gISF2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWwudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgdXBkYXRlU2VsZWN0KGVsLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWwudmFsdWUgPT09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsQ2xhc3NlcyA9IGVsLl9feF9vcmlnaW5hbF9jbGFzc2VzIHx8IFtdO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYXJyYXlVbmlxdWUob3JpZ2luYWxDbGFzc2VzLmNvbmNhdCh2YWx1ZSkpLmpvaW4oJyAnKSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gU29ydGluZyB0aGUga2V5cyAvIGNsYXNzIG5hbWVzIGJ5IHRoZWlyIGJvb2xlYW4gdmFsdWUgd2lsbCBlbnN1cmUgdGhhdFxuICAgICAgICAvLyBhbnl0aGluZyB0aGF0IGV2YWx1YXRlcyB0byBgZmFsc2VgIGFuZCBuZWVkcyB0byByZW1vdmUgY2xhc3NlcyBpcyBydW4gZmlyc3QuXG4gICAgICAgIGNvbnN0IGtleXNTb3J0ZWRCeUJvb2xlYW5WYWx1ZSA9IE9iamVjdC5rZXlzKHZhbHVlKS5zb3J0KChhLCBiKSA9PiB2YWx1ZVthXSAtIHZhbHVlW2JdKTtcbiAgICAgICAga2V5c1NvcnRlZEJ5Qm9vbGVhblZhbHVlLmZvckVhY2goY2xhc3NOYW1lcyA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlW2NsYXNzTmFtZXNdKSB7XG4gICAgICAgICAgICBjb252ZXJ0Q2xhc3NTdHJpbmdUb0FycmF5KGNsYXNzTmFtZXMpLmZvckVhY2goY2xhc3NOYW1lID0+IGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnZlcnRDbGFzc1N0cmluZ1RvQXJyYXkoY2xhc3NOYW1lcykuZm9yRWFjaChjbGFzc05hbWUgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxDbGFzc2VzID0gZWwuX194X29yaWdpbmFsX2NsYXNzZXMgfHwgW107XG4gICAgICAgIGNvbnN0IG5ld0NsYXNzZXMgPSB2YWx1ZSA/IGNvbnZlcnRDbGFzc1N0cmluZ1RvQXJyYXkodmFsdWUpIDogW107XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBhcnJheVVuaXF1ZShvcmlnaW5hbENsYXNzZXMuY29uY2F0KG5ld0NsYXNzZXMpKS5qb2luKCcgJykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhdHRyTmFtZSA9IG1vZGlmaWVycy5pbmNsdWRlcygnY2FtZWwnKSA/IGNhbWVsQ2FzZShhdHRyTmFtZSkgOiBhdHRyTmFtZTsgLy8gSWYgYW4gYXR0cmlidXRlJ3MgYm91bmQgdmFsdWUgaXMgbnVsbCwgdW5kZWZpbmVkIG9yIGZhbHNlLCByZW1vdmUgdGhlIGF0dHJpYnV0ZVxuXG4gICAgICBpZiAoW251bGwsIHVuZGVmaW5lZCwgZmFsc2VdLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNCb29sZWFuQXR0cihhdHRyTmFtZSkgPyBzZXRJZkNoYW5nZWQoZWwsIGF0dHJOYW1lLCBhdHRyTmFtZSkgOiBzZXRJZkNoYW5nZWQoZWwsIGF0dHJOYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0SWZDaGFuZ2VkKGVsLCBhdHRyTmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKSAhPSB2YWx1ZSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0KGVsLCB2YWx1ZSkge1xuICAgIGNvbnN0IGFycmF5V3JhcHBlZFZhbHVlID0gW10uY29uY2F0KHZhbHVlKS5tYXAodmFsdWUgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlICsgJyc7XG4gICAgfSk7XG4gICAgQXJyYXkuZnJvbShlbC5vcHRpb25zKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSBhcnJheVdyYXBwZWRWYWx1ZS5pbmNsdWRlcyhvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVGV4dERpcmVjdGl2ZShlbCwgb3V0cHV0LCBleHByZXNzaW9uKSB7XG4gICAgLy8gSWYgbmVzdGVkIG1vZGVsIGtleSBpcyB1bmRlZmluZWQsIHNldCB0aGUgZGVmYXVsdCB2YWx1ZSB0byBlbXB0eSBzdHJpbmcuXG4gICAgaWYgKG91dHB1dCA9PT0gdW5kZWZpbmVkICYmIFN0cmluZyhleHByZXNzaW9uKS5tYXRjaCgvXFwuLykpIHtcbiAgICAgIG91dHB1dCA9ICcnO1xuICAgIH1cblxuICAgIGVsLnRleHRDb250ZW50ID0gb3V0cHV0O1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSHRtbERpcmVjdGl2ZShjb21wb25lbnQsIGVsLCBleHByZXNzaW9uLCBleHRyYVZhcnMpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBjb21wb25lbnQuZXZhbHVhdGVSZXR1cm5FeHByZXNzaW9uKGVsLCBleHByZXNzaW9uLCBleHRyYVZhcnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2hvd0RpcmVjdGl2ZShjb21wb25lbnQsIGVsLCB2YWx1ZSwgbW9kaWZpZXJzLCBpbml0aWFsVXBkYXRlID0gZmFsc2UpIHtcbiAgICBjb25zdCBoaWRlID0gKCkgPT4ge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGVsLl9feF9pc19zaG93biA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgaWYgKGVsLnN0eWxlLmxlbmd0aCA9PT0gMSAmJiBlbC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgIH1cblxuICAgICAgZWwuX194X2lzX3Nob3duID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgaWYgKGluaXRpYWxVcGRhdGUgPT09IHRydWUpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBzaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaWRlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGUgPSAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgaWYgKGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCBlbC5fX3hfdHJhbnNpdGlvbikge1xuICAgICAgICAgIHRyYW5zaXRpb25JbihlbCwgKCkgPT4ge1xuICAgICAgICAgICAgc2hvdygpO1xuICAgICAgICAgIH0sIHJlamVjdCwgY29tcG9uZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoKCkgPT4ge30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGVsLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgIHRyYW5zaXRpb25PdXQoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKCkgPT4ge1xuICAgICAgICAgICAgICBoaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCByZWplY3QsIGNvbXBvbmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9OyAvLyBUaGUgd29ya2luZyBvZiB4LXNob3cgaXMgYSBiaXQgY29tcGxleCBiZWNhdXNlIHdlIG5lZWQgdG9cbiAgICAvLyB3YWl0IGZvciBhbnkgY2hpbGQgdHJhbnNpdGlvbnMgdG8gZmluaXNoIGJlZm9yZSBoaWRpbmdcbiAgICAvLyBzb21lIGVsZW1lbnQuIEFsc28sIHRoaXMgaGFzIHRvIGJlIGRvbmUgcmVjdXJzaXZlbHkuXG4gICAgLy8gSWYgeC1zaG93LmltbWVkaWF0ZSwgZm9yZWdvZSB0aGUgd2FpdGluZy5cblxuXG4gICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcygnaW1tZWRpYXRlJykpIHtcbiAgICAgIGhhbmRsZShmaW5pc2ggPT4gZmluaXNoKCksICgpID0+IHt9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIHgtc2hvdyBpcyBlbmNvdW50ZXJlZCBkdXJpbmcgYSBET00gdHJlZSB3YWxrLiBJZiBhbiBlbGVtZW50XG4gICAgLy8gd2UgZW5jb3VudGVyIGlzIE5PVCBhIGNoaWxkIG9mIGFub3RoZXIgeC1zaG93IGVsZW1lbnQgd2VcbiAgICAvLyBjYW4gZXhlY3V0ZSB0aGUgcHJldmlvdXMgeC1zaG93IHN0YWNrIChpZiBvbmUgZXhpc3RzKS5cblxuXG4gICAgaWYgKGNvbXBvbmVudC5zaG93RGlyZWN0aXZlTGFzdEVsZW1lbnQgJiYgIWNvbXBvbmVudC5zaG93RGlyZWN0aXZlTGFzdEVsZW1lbnQuY29udGFpbnMoZWwpKSB7XG4gICAgICBjb21wb25lbnQuZXhlY3V0ZUFuZENsZWFyUmVtYWluaW5nU2hvd0RpcmVjdGl2ZVN0YWNrKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50LnNob3dEaXJlY3RpdmVTdGFjay5wdXNoKGhhbmRsZSk7XG4gICAgY29tcG9uZW50LnNob3dEaXJlY3RpdmVMYXN0RWxlbWVudCA9IGVsO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSWZEaXJlY3RpdmUoY29tcG9uZW50LCBlbCwgZXhwcmVzc2lvblJlc3VsdCwgaW5pdGlhbFVwZGF0ZSwgZXh0cmFWYXJzKSB7XG4gICAgd2FybklmTWFsZm9ybWVkVGVtcGxhdGUoZWwsICd4LWlmJyk7XG4gICAgY29uc3QgZWxlbWVudEhhc0FscmVhZHlCZWVuQWRkZWQgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmcgJiYgZWwubmV4dEVsZW1lbnRTaWJsaW5nLl9feF9pbnNlcnRlZF9tZSA9PT0gdHJ1ZTtcblxuICAgIGlmIChleHByZXNzaW9uUmVzdWx0ICYmICghZWxlbWVudEhhc0FscmVhZHlCZWVuQWRkZWQgfHwgZWwuX194X3RyYW5zaXRpb24pKSB7XG4gICAgICBjb25zdCBjbG9uZSA9IGRvY3VtZW50LmltcG9ydE5vZGUoZWwuY29udGVudCwgdHJ1ZSk7XG4gICAgICBlbC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShjbG9uZSwgZWwubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgICAgIHRyYW5zaXRpb25JbihlbC5uZXh0RWxlbWVudFNpYmxpbmcsICgpID0+IHt9LCAoKSA9PiB7fSwgY29tcG9uZW50LCBpbml0aWFsVXBkYXRlKTtcbiAgICAgIGNvbXBvbmVudC5pbml0aWFsaXplRWxlbWVudHMoZWwubmV4dEVsZW1lbnRTaWJsaW5nLCBleHRyYVZhcnMpO1xuICAgICAgZWwubmV4dEVsZW1lbnRTaWJsaW5nLl9feF9pbnNlcnRlZF9tZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghZXhwcmVzc2lvblJlc3VsdCAmJiBlbGVtZW50SGFzQWxyZWFkeUJlZW5BZGRlZCkge1xuICAgICAgdHJhbnNpdGlvbk91dChlbC5uZXh0RWxlbWVudFNpYmxpbmcsICgpID0+IHtcbiAgICAgICAgZWwubmV4dEVsZW1lbnRTaWJsaW5nLnJlbW92ZSgpO1xuICAgICAgfSwgKCkgPT4ge30sIGNvbXBvbmVudCwgaW5pdGlhbFVwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lcihjb21wb25lbnQsIGVsLCBldmVudCwgbW9kaWZpZXJzLCBleHByZXNzaW9uLCBleHRyYVZhcnMgPSB7fSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBwYXNzaXZlOiBtb2RpZmllcnMuaW5jbHVkZXMoJ3Bhc3NpdmUnKVxuICAgIH07XG5cbiAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKCdjYW1lbCcpKSB7XG4gICAgICBldmVudCA9IGNhbWVsQ2FzZShldmVudCk7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZXIsIGxpc3RlbmVyVGFyZ2V0O1xuXG4gICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcygnYXdheScpKSB7XG4gICAgICBsaXN0ZW5lclRhcmdldCA9IGRvY3VtZW50O1xuXG4gICAgICBoYW5kbGVyID0gZSA9PiB7XG4gICAgICAgIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIHRoZSBjbGljayBjYW1lIGZyb20gdGhlIGVsZW1lbnQgb3Igd2l0aGluIGl0LlxuICAgICAgICBpZiAoZWwuY29udGFpbnMoZS50YXJnZXQpKSByZXR1cm47IC8vIERvbid0IGRvIGFueXRoaW5nIGlmIHRoaXMgZWxlbWVudCBpc24ndCBjdXJyZW50bHkgdmlzaWJsZS5cblxuICAgICAgICBpZiAoZWwub2Zmc2V0V2lkdGggPCAxICYmIGVsLm9mZnNldEhlaWdodCA8IDEpIHJldHVybjsgLy8gTm93IHRoYXQgd2UgYXJlIHN1cmUgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSwgQU5EIHRoZSBjbGlja1xuICAgICAgICAvLyBpcyBmcm9tIG91dHNpZGUgaXQsIGxldCdzIHJ1biB0aGUgZXhwcmVzc2lvbi5cblxuICAgICAgICBydW5MaXN0ZW5lckhhbmRsZXIoY29tcG9uZW50LCBleHByZXNzaW9uLCBlLCBleHRyYVZhcnMpO1xuXG4gICAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoJ29uY2UnKSkge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0ZW5lclRhcmdldCA9IG1vZGlmaWVycy5pbmNsdWRlcygnd2luZG93JykgPyB3aW5kb3cgOiBtb2RpZmllcnMuaW5jbHVkZXMoJ2RvY3VtZW50JykgPyBkb2N1bWVudCA6IGVsO1xuXG4gICAgICBoYW5kbGVyID0gZSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGlzIGdsb2JhbCBldmVudCBoYW5kbGVyIGlmIHRoZSBlbGVtZW50IHRoYXQgZGVjbGFyZWQgaXRcbiAgICAgICAgLy8gaGFzIGJlZW4gcmVtb3ZlZC4gSXQncyBub3cgc3RhbGUuXG4gICAgICAgIGlmIChsaXN0ZW5lclRhcmdldCA9PT0gd2luZG93IHx8IGxpc3RlbmVyVGFyZ2V0ID09PSBkb2N1bWVudCkge1xuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhlbCkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0tleUV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgIGlmIChpc0xpc3RlbmluZ0ZvckFTcGVjaWZpY0tleVRoYXRIYXNudEJlZW5QcmVzc2VkKGUsIG1vZGlmaWVycykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKCdwcmV2ZW50JykpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcygnc3RvcCcpKSBlLnN0b3BQcm9wYWdhdGlvbigpOyAvLyBJZiB0aGUgLnNlbGYgbW9kaWZpZXIgaXNuJ3QgcHJlc2VudCwgb3IgaWYgaXQgaXMgcHJlc2VudCBhbmRcbiAgICAgICAgLy8gdGhlIHRhcmdldCBlbGVtZW50IG1hdGNoZXMgdGhlIGVsZW1lbnQgd2UgYXJlIHJlZ2lzdGVyaW5nIHRoZVxuICAgICAgICAvLyBldmVudCBvbiwgcnVuIHRoZSBoYW5kbGVyXG5cbiAgICAgICAgaWYgKCFtb2RpZmllcnMuaW5jbHVkZXMoJ3NlbGYnKSB8fCBlLnRhcmdldCA9PT0gZWwpIHtcbiAgICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHJ1bkxpc3RlbmVySGFuZGxlcihjb21wb25lbnQsIGV4cHJlc3Npb24sIGUsIGV4dHJhVmFycyk7XG4gICAgICAgICAgcmV0dXJuVmFsdWUudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoJ29uY2UnKSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcygnZGVib3VuY2UnKSkge1xuICAgICAgbGV0IG5leHRNb2RpZmllciA9IG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZignZGVib3VuY2UnKSArIDFdIHx8ICdpbnZhbGlkLXdhaXQnO1xuICAgICAgbGV0IHdhaXQgPSBpc051bWVyaWMobmV4dE1vZGlmaWVyLnNwbGl0KCdtcycpWzBdKSA/IE51bWJlcihuZXh0TW9kaWZpZXIuc3BsaXQoJ21zJylbMF0pIDogMjUwO1xuICAgICAgaGFuZGxlciA9IGRlYm91bmNlKGhhbmRsZXIsIHdhaXQpO1xuICAgIH1cblxuICAgIGxpc3RlbmVyVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuTGlzdGVuZXJIYW5kbGVyKGNvbXBvbmVudCwgZXhwcmVzc2lvbiwgZSwgZXh0cmFWYXJzKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5ldmFsdWF0ZUNvbW1hbmRFeHByZXNzaW9uKGUudGFyZ2V0LCBleHByZXNzaW9uLCAoKSA9PiB7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGV4dHJhVmFycygpKSwge30sIHtcbiAgICAgICAgJyRldmVudCc6IGVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNLZXlFdmVudChldmVudCkge1xuICAgIHJldHVybiBbJ2tleWRvd24nLCAna2V5dXAnXS5pbmNsdWRlcyhldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0xpc3RlbmluZ0ZvckFTcGVjaWZpY0tleVRoYXRIYXNudEJlZW5QcmVzc2VkKGUsIG1vZGlmaWVycykge1xuICAgIGxldCBrZXlNb2RpZmllcnMgPSBtb2RpZmllcnMuZmlsdGVyKGkgPT4ge1xuICAgICAgcmV0dXJuICFbJ3dpbmRvdycsICdkb2N1bWVudCcsICdwcmV2ZW50JywgJ3N0b3AnXS5pbmNsdWRlcyhpKTtcbiAgICB9KTtcblxuICAgIGlmIChrZXlNb2RpZmllcnMuaW5jbHVkZXMoJ2RlYm91bmNlJykpIHtcbiAgICAgIGxldCBkZWJvdW5jZUluZGV4ID0ga2V5TW9kaWZpZXJzLmluZGV4T2YoJ2RlYm91bmNlJyk7XG4gICAgICBrZXlNb2RpZmllcnMuc3BsaWNlKGRlYm91bmNlSW5kZXgsIGlzTnVtZXJpYygoa2V5TW9kaWZpZXJzW2RlYm91bmNlSW5kZXggKyAxXSB8fCAnaW52YWxpZC13YWl0Jykuc3BsaXQoJ21zJylbMF0pID8gMiA6IDEpO1xuICAgIH0gLy8gSWYgbm8gbW9kaWZpZXIgaXMgc3BlY2lmaWVkLCB3ZSdsbCBjYWxsIGl0IGEgcHJlc3MuXG5cblxuICAgIGlmIChrZXlNb2RpZmllcnMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7IC8vIElmIG9uZSBpcyBwYXNzZWQsIEFORCBpdCBtYXRjaGVzIHRoZSBrZXkgcHJlc3NlZCwgd2UnbGwgY2FsbCBpdCBhIHByZXNzLlxuXG4gICAgaWYgKGtleU1vZGlmaWVycy5sZW5ndGggPT09IDEgJiYga2V5TW9kaWZpZXJzWzBdID09PSBrZXlUb01vZGlmaWVyKGUua2V5KSkgcmV0dXJuIGZhbHNlOyAvLyBUaGUgdXNlciBpcyBsaXN0ZW5pbmcgZm9yIGtleSBjb21iaW5hdGlvbnMuXG5cbiAgICBjb25zdCBzeXN0ZW1LZXlNb2RpZmllcnMgPSBbJ2N0cmwnLCAnc2hpZnQnLCAnYWx0JywgJ21ldGEnLCAnY21kJywgJ3N1cGVyJ107XG4gICAgY29uc3Qgc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMgPSBzeXN0ZW1LZXlNb2RpZmllcnMuZmlsdGVyKG1vZGlmaWVyID0+IGtleU1vZGlmaWVycy5pbmNsdWRlcyhtb2RpZmllcikpO1xuICAgIGtleU1vZGlmaWVycyA9IGtleU1vZGlmaWVycy5maWx0ZXIoaSA9PiAhc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMuaW5jbHVkZXMoaSkpO1xuXG4gICAgaWYgKHNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGFjdGl2ZWx5UHJlc3NlZEtleU1vZGlmaWVycyA9IHNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmZpbHRlcihtb2RpZmllciA9PiB7XG4gICAgICAgIC8vIEFsaWFzIFwiY21kXCIgYW5kIFwic3VwZXJcIiB0byBcIm1ldGFcIlxuICAgICAgICBpZiAobW9kaWZpZXIgPT09ICdjbWQnIHx8IG1vZGlmaWVyID09PSAnc3VwZXInKSBtb2RpZmllciA9ICdtZXRhJztcbiAgICAgICAgcmV0dXJuIGVbYCR7bW9kaWZpZXJ9S2V5YF07XG4gICAgICB9KTsgLy8gSWYgYWxsIHRoZSBtb2RpZmllcnMgc2VsZWN0ZWQgYXJlIHByZXNzZWQsIC4uLlxuXG4gICAgICBpZiAoYWN0aXZlbHlQcmVzc2VkS2V5TW9kaWZpZXJzLmxlbmd0aCA9PT0gc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgICAgIC8vIEFORCB0aGUgcmVtYWluaW5nIGtleSBpcyBwcmVzc2VkIGFzIHdlbGwuIEl0J3MgYSBwcmVzcy5cbiAgICAgICAgaWYgKGtleU1vZGlmaWVyc1swXSA9PT0ga2V5VG9Nb2RpZmllcihlLmtleSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IC8vIFdlJ2xsIGNhbGwgaXQgTk9UIGEgdmFsaWQga2V5cHJlc3MuXG5cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24ga2V5VG9Nb2RpZmllcihrZXkpIHtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIHJldHVybiAnc2xhc2gnO1xuXG4gICAgICBjYXNlICcgJzpcbiAgICAgIGNhc2UgJ1NwYWNlYmFyJzpcbiAgICAgICAgcmV0dXJuICdzcGFjZSc7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBrZXkgJiYga2ViYWJDYXNlKGtleSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJNb2RlbExpc3RlbmVyKGNvbXBvbmVudCwgZWwsIG1vZGlmaWVycywgZXhwcmVzc2lvbiwgZXh0cmFWYXJzKSB7XG4gICAgLy8gSWYgdGhlIGVsZW1lbnQgd2UgYXJlIGJpbmRpbmcgdG8gaXMgYSBzZWxlY3QsIGEgcmFkaW8sIG9yIGNoZWNrYm94XG4gICAgLy8gd2UnbGwgbGlzdGVuIGZvciB0aGUgY2hhbmdlIGV2ZW50IGluc3RlYWQgb2YgdGhlIFwiaW5wdXRcIiBldmVudC5cbiAgICB2YXIgZXZlbnQgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnIHx8IFsnY2hlY2tib3gnLCAncmFkaW8nXS5pbmNsdWRlcyhlbC50eXBlKSB8fCBtb2RpZmllcnMuaW5jbHVkZXMoJ2xhenknKSA/ICdjaGFuZ2UnIDogJ2lucHV0JztcbiAgICBjb25zdCBsaXN0ZW5lckV4cHJlc3Npb24gPSBgJHtleHByZXNzaW9ufSA9IHJpZ2h0U2lkZU9mRXhwcmVzc2lvbigkZXZlbnQsICR7ZXhwcmVzc2lvbn0pYDtcbiAgICByZWdpc3Rlckxpc3RlbmVyKGNvbXBvbmVudCwgZWwsIGV2ZW50LCBtb2RpZmllcnMsIGxpc3RlbmVyRXhwcmVzc2lvbiwgKCkgPT4ge1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBleHRyYVZhcnMoKSksIHt9LCB7XG4gICAgICAgIHJpZ2h0U2lkZU9mRXhwcmVzc2lvbjogZ2VuZXJhdGVNb2RlbEFzc2lnbm1lbnRGdW5jdGlvbihlbCwgbW9kaWZpZXJzLCBleHByZXNzaW9uKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZU1vZGVsQXNzaWdubWVudEZ1bmN0aW9uKGVsLCBtb2RpZmllcnMsIGV4cHJlc3Npb24pIHtcbiAgICBpZiAoZWwudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgLy8gUmFkaW8gYnV0dG9ucyBvbmx5IHdvcmsgcHJvcGVybHkgd2hlbiB0aGV5IHNoYXJlIGEgbmFtZSBhdHRyaWJ1dGUuXG4gICAgICAvLyBQZW9wbGUgbWlnaHQgYXNzdW1lIHdlIHRha2UgY2FyZSBvZiB0aGF0IGZvciB0aGVtLCBiZWNhdXNlXG4gICAgICAvLyB0aGV5IGFscmVhZHkgc2V0IGEgc2hhcmVkIFwieC1tb2RlbFwiIGF0dHJpYnV0ZS5cbiAgICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCduYW1lJykpIGVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIGV4cHJlc3Npb24pO1xuICAgIH1cblxuICAgIHJldHVybiAoZXZlbnQsIGN1cnJlbnRWYWx1ZSkgPT4ge1xuICAgICAgLy8gQ2hlY2sgZm9yIGV2ZW50LmRldGFpbCBkdWUgdG8gYW4gaXNzdWUgd2hlcmUgSUUxMSBoYW5kbGVzIG90aGVyIGV2ZW50cyBhcyBhIEN1c3RvbUV2ZW50LlxuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgQ3VzdG9tRXZlbnQgJiYgZXZlbnQuZGV0YWlsKSB7XG4gICAgICAgIHJldHVybiBldmVudC5kZXRhaWw7XG4gICAgICB9IGVsc2UgaWYgKGVsLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgLy8gSWYgdGhlIGRhdGEgd2UgYXJlIGJpbmRpbmcgdG8gaXMgYW4gYXJyYXksIHRvZ2dsZSBpdHMgdmFsdWUgaW5zaWRlIHRoZSBhcnJheS5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xuICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gbW9kaWZpZXJzLmluY2x1ZGVzKCdudW1iZXInKSA/IHNhZmVQYXJzZU51bWJlcihldmVudC50YXJnZXQudmFsdWUpIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgIHJldHVybiBldmVudC50YXJnZXQuY2hlY2tlZCA/IGN1cnJlbnRWYWx1ZS5jb25jYXQoW25ld1ZhbHVlXSkgOiBjdXJyZW50VmFsdWUuZmlsdGVyKGVsID0+ICFjaGVja2VkQXR0ckxvb3NlQ29tcGFyZShlbCwgbmV3VmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0JyAmJiBlbC5tdWx0aXBsZSkge1xuICAgICAgICByZXR1cm4gbW9kaWZpZXJzLmluY2x1ZGVzKCdudW1iZXInKSA/IEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LnNlbGVjdGVkT3B0aW9ucykubWFwKG9wdGlvbiA9PiB7XG4gICAgICAgICAgY29uc3QgcmF3VmFsdWUgPSBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQ7XG4gICAgICAgICAgcmV0dXJuIHNhZmVQYXJzZU51bWJlcihyYXdWYWx1ZSk7XG4gICAgICAgIH0pIDogQXJyYXkuZnJvbShldmVudC50YXJnZXQuc2VsZWN0ZWRPcHRpb25zKS5tYXAob3B0aW9uID0+IHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9uLnZhbHVlIHx8IG9wdGlvbi50ZXh0O1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJhd1ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICByZXR1cm4gbW9kaWZpZXJzLmluY2x1ZGVzKCdudW1iZXInKSA/IHNhZmVQYXJzZU51bWJlcihyYXdWYWx1ZSkgOiBtb2RpZmllcnMuaW5jbHVkZXMoJ3RyaW0nKSA/IHJhd1ZhbHVlLnRyaW0oKSA6IHJhd1ZhbHVlO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBzYWZlUGFyc2VOdW1iZXIocmF3VmFsdWUpIHtcbiAgICBjb25zdCBudW1iZXIgPSByYXdWYWx1ZSA/IHBhcnNlRmxvYXQocmF3VmFsdWUpIDogbnVsbDtcbiAgICByZXR1cm4gaXNOdW1lcmljKG51bWJlcikgPyBudW1iZXIgOiByYXdWYWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5cmlnaHQgKEMpIDIwMTcgc2FsZXNmb3JjZS5jb20sIGluYy5cbiAgICovXG4gIGNvbnN0IHsgaXNBcnJheSB9ID0gQXJyYXk7XG4gIGNvbnN0IHsgZ2V0UHJvdG90eXBlT2YsIGNyZWF0ZTogT2JqZWN0Q3JlYXRlLCBkZWZpbmVQcm9wZXJ0eTogT2JqZWN0RGVmaW5lUHJvcGVydHksIGRlZmluZVByb3BlcnRpZXM6IE9iamVjdERlZmluZVByb3BlcnRpZXMsIGlzRXh0ZW5zaWJsZSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLCBnZXRPd25Qcm9wZXJ0eU5hbWVzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMsIHByZXZlbnRFeHRlbnNpb25zLCBoYXNPd25Qcm9wZXJ0eSwgfSA9IE9iamVjdDtcbiAgY29uc3QgeyBwdXNoOiBBcnJheVB1c2gsIGNvbmNhdDogQXJyYXlDb25jYXQsIG1hcDogQXJyYXlNYXAsIH0gPSBBcnJheS5wcm90b3R5cGU7XG4gIGZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkO1xuICB9XG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuICBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcbiAgfVxuICBjb25zdCBwcm94eVRvVmFsdWVNYXAgPSBuZXcgV2Vha01hcCgpO1xuICBmdW5jdGlvbiByZWdpc3RlclByb3h5KHByb3h5LCB2YWx1ZSkge1xuICAgICAgcHJveHlUb1ZhbHVlTWFwLnNldChwcm94eSwgdmFsdWUpO1xuICB9XG4gIGNvbnN0IHVud3JhcCA9IChyZXBsaWNhT3JBbnkpID0+IHByb3h5VG9WYWx1ZU1hcC5nZXQocmVwbGljYU9yQW55KSB8fCByZXBsaWNhT3JBbnk7XG5cbiAgZnVuY3Rpb24gd3JhcFZhbHVlKG1lbWJyYW5lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG1lbWJyYW5lLnZhbHVlSXNPYnNlcnZhYmxlKHZhbHVlKSA/IG1lbWJyYW5lLmdldFByb3h5KHZhbHVlKSA6IHZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBVbndyYXAgcHJvcGVydHkgZGVzY3JpcHRvcnMgd2lsbCBzZXQgdmFsdWUgb24gb3JpZ2luYWwgZGVzY3JpcHRvclxuICAgKiBXZSBvbmx5IG5lZWQgdG8gdW53cmFwIGlmIHZhbHVlIGlzIHNwZWNpZmllZFxuICAgKiBAcGFyYW0gZGVzY3JpcHRvciBleHRlcm5hbCBkZXNjcnBpdG9yIHByb3ZpZGVkIHRvIGRlZmluZSBuZXcgcHJvcGVydHkgb24gb3JpZ2luYWwgdmFsdWVcbiAgICovXG4gIGZ1bmN0aW9uIHVud3JhcERlc2NyaXB0b3IoZGVzY3JpcHRvcikge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZGVzY3JpcHRvciwgJ3ZhbHVlJykpIHtcbiAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gdW53cmFwKGRlc2NyaXB0b3IudmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH1cbiAgZnVuY3Rpb24gbG9ja1NoYWRvd1RhcmdldChtZW1icmFuZSwgc2hhZG93VGFyZ2V0LCBvcmlnaW5hbFRhcmdldCkge1xuICAgICAgY29uc3QgdGFyZ2V0S2V5cyA9IEFycmF5Q29uY2F0LmNhbGwoZ2V0T3duUHJvcGVydHlOYW1lcyhvcmlnaW5hbFRhcmdldCksIGdldE93blByb3BlcnR5U3ltYm9scyhvcmlnaW5hbFRhcmdldCkpO1xuICAgICAgdGFyZ2V0S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBsZXQgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvcmlnaW5hbFRhcmdldCwga2V5KTtcbiAgICAgICAgICAvLyBXZSBkbyBub3QgbmVlZCB0byB3cmFwIHRoZSBkZXNjcmlwdG9yIGlmIGNvbmZpZ3VyYWJsZVxuICAgICAgICAgIC8vIEJlY2F1c2Ugd2UgY2FuIGRlYWwgd2l0aCB3cmFwcGluZyBpdCB3aGVuIHVzZXIgZ29lcyB0aHJvdWdoXG4gICAgICAgICAgLy8gR2V0IG93biBwcm9wZXJ0eSBkZXNjcmlwdG9yLiBUaGVyZSBpcyBhbHNvIGEgY2hhbmNlIHRoYXQgdGhpcyBkZXNjcmlwdG9yXG4gICAgICAgICAgLy8gY291bGQgY2hhbmdlIHNvbWV0aW1lIGluIHRoZSBmdXR1cmUsIHNvIHdlIGNhbiBkZWZlciB3cmFwcGluZ1xuICAgICAgICAgIC8vIHVudGlsIHdlIG5lZWQgdG9cbiAgICAgICAgICBpZiAoIWRlc2NyaXB0b3IuY29uZmlndXJhYmxlKSB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSB3cmFwRGVzY3JpcHRvcihtZW1icmFuZSwgZGVzY3JpcHRvciwgd3JhcFZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkoc2hhZG93VGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfSk7XG4gICAgICBwcmV2ZW50RXh0ZW5zaW9ucyhzaGFkb3dUYXJnZXQpO1xuICB9XG4gIGNsYXNzIFJlYWN0aXZlUHJveHlIYW5kbGVyIHtcbiAgICAgIGNvbnN0cnVjdG9yKG1lbWJyYW5lLCB2YWx1ZSkge1xuICAgICAgICAgIHRoaXMub3JpZ2luYWxUYXJnZXQgPSB2YWx1ZTtcbiAgICAgICAgICB0aGlzLm1lbWJyYW5lID0gbWVtYnJhbmU7XG4gICAgICB9XG4gICAgICBnZXQoc2hhZG93VGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgICBjb25zdCB7IG9yaWdpbmFsVGFyZ2V0LCBtZW1icmFuZSB9ID0gdGhpcztcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IG9yaWdpbmFsVGFyZ2V0W2tleV07XG4gICAgICAgICAgY29uc3QgeyB2YWx1ZU9ic2VydmVkIH0gPSBtZW1icmFuZTtcbiAgICAgICAgICB2YWx1ZU9ic2VydmVkKG9yaWdpbmFsVGFyZ2V0LCBrZXkpO1xuICAgICAgICAgIHJldHVybiBtZW1icmFuZS5nZXRQcm94eSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBzZXQoc2hhZG93VGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgeyBvcmlnaW5hbFRhcmdldCwgbWVtYnJhbmU6IHsgdmFsdWVNdXRhdGVkIH0gfSA9IHRoaXM7XG4gICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBvcmlnaW5hbFRhcmdldFtrZXldO1xuICAgICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgb3JpZ2luYWxUYXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICB2YWx1ZU11dGF0ZWQob3JpZ2luYWxUYXJnZXQsIGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ2xlbmd0aCcgJiYgaXNBcnJheShvcmlnaW5hbFRhcmdldCkpIHtcbiAgICAgICAgICAgICAgLy8gZml4IGZvciBpc3N1ZSAjMjM2OiBwdXNoIHdpbGwgYWRkIHRoZSBuZXcgaW5kZXgsIGFuZCBieSB0aGUgdGltZSBsZW5ndGhcbiAgICAgICAgICAgICAgLy8gaXMgdXBkYXRlZCwgdGhlIGludGVybmFsIGxlbmd0aCBpcyBhbHJlYWR5IGVxdWFsIHRvIHRoZSBuZXcgbGVuZ3RoIHZhbHVlXG4gICAgICAgICAgICAgIC8vIHRoZXJlZm9yZSwgdGhlIG9sZFZhbHVlIGlzIGVxdWFsIHRvIHRoZSB2YWx1ZS4gVGhpcyBpcyB0aGUgZm9ya2luZyBsb2dpY1xuICAgICAgICAgICAgICAvLyB0byBzdXBwb3J0IHRoaXMgdXNlIGNhc2UuXG4gICAgICAgICAgICAgIHZhbHVlTXV0YXRlZChvcmlnaW5hbFRhcmdldCwga2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBkZWxldGVQcm9wZXJ0eShzaGFkb3dUYXJnZXQsIGtleSkge1xuICAgICAgICAgIGNvbnN0IHsgb3JpZ2luYWxUYXJnZXQsIG1lbWJyYW5lOiB7IHZhbHVlTXV0YXRlZCB9IH0gPSB0aGlzO1xuICAgICAgICAgIGRlbGV0ZSBvcmlnaW5hbFRhcmdldFtrZXldO1xuICAgICAgICAgIHZhbHVlTXV0YXRlZChvcmlnaW5hbFRhcmdldCwga2V5KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGFwcGx5KHNoYWRvd1RhcmdldCwgdGhpc0FyZywgYXJnQXJyYXkpIHtcbiAgICAgICAgICAvKiBObyBvcCAqL1xuICAgICAgfVxuICAgICAgY29uc3RydWN0KHRhcmdldCwgYXJnQXJyYXksIG5ld1RhcmdldCkge1xuICAgICAgICAgIC8qIE5vIG9wICovXG4gICAgICB9XG4gICAgICBoYXMoc2hhZG93VGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgICBjb25zdCB7IG9yaWdpbmFsVGFyZ2V0LCBtZW1icmFuZTogeyB2YWx1ZU9ic2VydmVkIH0gfSA9IHRoaXM7XG4gICAgICAgICAgdmFsdWVPYnNlcnZlZChvcmlnaW5hbFRhcmdldCwga2V5KTtcbiAgICAgICAgICByZXR1cm4ga2V5IGluIG9yaWdpbmFsVGFyZ2V0O1xuICAgICAgfVxuICAgICAgb3duS2V5cyhzaGFkb3dUYXJnZXQpIHtcbiAgICAgICAgICBjb25zdCB7IG9yaWdpbmFsVGFyZ2V0IH0gPSB0aGlzO1xuICAgICAgICAgIHJldHVybiBBcnJheUNvbmNhdC5jYWxsKGdldE93blByb3BlcnR5TmFtZXMob3JpZ2luYWxUYXJnZXQpLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMob3JpZ2luYWxUYXJnZXQpKTtcbiAgICAgIH1cbiAgICAgIGlzRXh0ZW5zaWJsZShzaGFkb3dUYXJnZXQpIHtcbiAgICAgICAgICBjb25zdCBzaGFkb3dJc0V4dGVuc2libGUgPSBpc0V4dGVuc2libGUoc2hhZG93VGFyZ2V0KTtcbiAgICAgICAgICBpZiAoIXNoYWRvd0lzRXh0ZW5zaWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2hhZG93SXNFeHRlbnNpYmxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB7IG9yaWdpbmFsVGFyZ2V0LCBtZW1icmFuZSB9ID0gdGhpcztcbiAgICAgICAgICBjb25zdCB0YXJnZXRJc0V4dGVuc2libGUgPSBpc0V4dGVuc2libGUob3JpZ2luYWxUYXJnZXQpO1xuICAgICAgICAgIGlmICghdGFyZ2V0SXNFeHRlbnNpYmxlKSB7XG4gICAgICAgICAgICAgIGxvY2tTaGFkb3dUYXJnZXQobWVtYnJhbmUsIHNoYWRvd1RhcmdldCwgb3JpZ2luYWxUYXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGFyZ2V0SXNFeHRlbnNpYmxlO1xuICAgICAgfVxuICAgICAgc2V0UHJvdG90eXBlT2Yoc2hhZG93VGFyZ2V0LCBwcm90b3R5cGUpIHtcbiAgICAgIH1cbiAgICAgIGdldFByb3RvdHlwZU9mKHNoYWRvd1RhcmdldCkge1xuICAgICAgICAgIGNvbnN0IHsgb3JpZ2luYWxUYXJnZXQgfSA9IHRoaXM7XG4gICAgICAgICAgcmV0dXJuIGdldFByb3RvdHlwZU9mKG9yaWdpbmFsVGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzaGFkb3dUYXJnZXQsIGtleSkge1xuICAgICAgICAgIGNvbnN0IHsgb3JpZ2luYWxUYXJnZXQsIG1lbWJyYW5lIH0gPSB0aGlzO1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWVPYnNlcnZlZCB9ID0gdGhpcy5tZW1icmFuZTtcbiAgICAgICAgICAvLyBrZXlzIGxvb2tlZCB1cCB2aWEgaGFzT3duUHJvcGVydHkgbmVlZCB0byBiZSByZWFjdGl2ZVxuICAgICAgICAgIHZhbHVlT2JzZXJ2ZWQob3JpZ2luYWxUYXJnZXQsIGtleSk7XG4gICAgICAgICAgbGV0IGRlc2MgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob3JpZ2luYWxUYXJnZXQsIGtleSk7XG4gICAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGRlc2MpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkZXNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBzaGFkb3dEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNoYWRvd1RhcmdldCwga2V5KTtcbiAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHNoYWRvd0Rlc2NyaXB0b3IpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzaGFkb3dEZXNjcmlwdG9yO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBOb3RlOiBieSBhY2Nlc3NpbmcgdGhlIGRlc2NyaXB0b3IsIHRoZSBrZXkgaXMgbWFya2VkIGFzIG9ic2VydmVkXG4gICAgICAgICAgLy8gYnV0IGFjY2VzcyB0byB0aGUgdmFsdWUsIHNldHRlciBvciBnZXR0ZXIgKGlmIGF2YWlsYWJsZSkgY2Fubm90IG9ic2VydmVcbiAgICAgICAgICAvLyBtdXRhdGlvbnMsIGp1c3QgbGlrZSByZWd1bGFyIG1ldGhvZHMsIGluIHdoaWNoIGNhc2Ugd2UganVzdCBkbyBub3RoaW5nLlxuICAgICAgICAgIGRlc2MgPSB3cmFwRGVzY3JpcHRvcihtZW1icmFuZSwgZGVzYywgd3JhcFZhbHVlKTtcbiAgICAgICAgICBpZiAoIWRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICAgICAgICAgIC8vIElmIGRlc2NyaXB0b3IgZnJvbSBvcmlnaW5hbCB0YXJnZXQgaXMgbm90IGNvbmZpZ3VyYWJsZSxcbiAgICAgICAgICAgICAgLy8gV2UgbXVzdCBjb3B5IHRoZSB3cmFwcGVkIGRlc2NyaXB0b3Igb3ZlciB0byB0aGUgc2hhZG93IHRhcmdldC5cbiAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBwcm94eSB3aWxsIHRocm93IGFuIGludmFyaWFudCBlcnJvci5cbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBvdXIgbGFzdCBjaGFuY2UgdG8gbG9jayB0aGUgdmFsdWUuXG4gICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1Byb3h5L2hhbmRsZXIvZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yI0ludmFyaWFudHNcbiAgICAgICAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkoc2hhZG93VGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGVzYztcbiAgICAgIH1cbiAgICAgIHByZXZlbnRFeHRlbnNpb25zKHNoYWRvd1RhcmdldCkge1xuICAgICAgICAgIGNvbnN0IHsgb3JpZ2luYWxUYXJnZXQsIG1lbWJyYW5lIH0gPSB0aGlzO1xuICAgICAgICAgIGxvY2tTaGFkb3dUYXJnZXQobWVtYnJhbmUsIHNoYWRvd1RhcmdldCwgb3JpZ2luYWxUYXJnZXQpO1xuICAgICAgICAgIHByZXZlbnRFeHRlbnNpb25zKG9yaWdpbmFsVGFyZ2V0KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGRlZmluZVByb3BlcnR5KHNoYWRvd1RhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgY29uc3QgeyBvcmlnaW5hbFRhcmdldCwgbWVtYnJhbmUgfSA9IHRoaXM7XG4gICAgICAgICAgY29uc3QgeyB2YWx1ZU11dGF0ZWQgfSA9IG1lbWJyYW5lO1xuICAgICAgICAgIGNvbnN0IHsgY29uZmlndXJhYmxlIH0gPSBkZXNjcmlwdG9yO1xuICAgICAgICAgIC8vIFdlIGhhdmUgdG8gY2hlY2sgZm9yIHZhbHVlIGluIGRlc2NyaXB0b3JcbiAgICAgICAgICAvLyBiZWNhdXNlIE9iamVjdC5mcmVlemUocHJveHkpIGNhbGxzIHRoaXMgbWV0aG9kXG4gICAgICAgICAgLy8gd2l0aCBvbmx5IHsgY29uZmlndXJhYmxlOiBmYWxzZSwgd3JpdGVhYmxlOiBmYWxzZSB9XG4gICAgICAgICAgLy8gQWRkaXRpb25hbGx5LCBtZXRob2Qgd2lsbCBvbmx5IGJlIGNhbGxlZCB3aXRoIHdyaXRlYWJsZTpmYWxzZVxuICAgICAgICAgIC8vIGlmIHRoZSBkZXNjcmlwdG9yIGhhcyBhIHZhbHVlLCBhcyBvcHBvc2VkIHRvIGdldHRlci9zZXR0ZXJcbiAgICAgICAgICAvLyBTbyB3ZSBjYW4ganVzdCBjaGVjayBpZiB3cml0YWJsZSBpcyBwcmVzZW50IGFuZCB0aGVuIHNlZSBpZlxuICAgICAgICAgIC8vIHZhbHVlIGlzIHByZXNlbnQuIFRoaXMgZWxpbWluYXRlcyBnZXR0ZXIgYW5kIHNldHRlciBkZXNjcmlwdG9yc1xuICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGRlc2NyaXB0b3IsICd3cml0YWJsZScpICYmICFoYXNPd25Qcm9wZXJ0eS5jYWxsKGRlc2NyaXB0b3IsICd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsRGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvcmlnaW5hbFRhcmdldCwga2V5KTtcbiAgICAgICAgICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IG9yaWdpbmFsRGVzY3JpcHRvci52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkob3JpZ2luYWxUYXJnZXQsIGtleSwgdW53cmFwRGVzY3JpcHRvcihkZXNjcmlwdG9yKSk7XG4gICAgICAgICAgaWYgKGNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkoc2hhZG93VGFyZ2V0LCBrZXksIHdyYXBEZXNjcmlwdG9yKG1lbWJyYW5lLCBkZXNjcmlwdG9yLCB3cmFwVmFsdWUpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWVNdXRhdGVkKG9yaWdpbmFsVGFyZ2V0LCBrZXkpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gd3JhcFJlYWRPbmx5VmFsdWUobWVtYnJhbmUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gbWVtYnJhbmUudmFsdWVJc09ic2VydmFibGUodmFsdWUpID8gbWVtYnJhbmUuZ2V0UmVhZE9ubHlQcm94eSh2YWx1ZSkgOiB2YWx1ZTtcbiAgfVxuICBjbGFzcyBSZWFkT25seUhhbmRsZXIge1xuICAgICAgY29uc3RydWN0b3IobWVtYnJhbmUsIHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5vcmlnaW5hbFRhcmdldCA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMubWVtYnJhbmUgPSBtZW1icmFuZTtcbiAgICAgIH1cbiAgICAgIGdldChzaGFkb3dUYXJnZXQsIGtleSkge1xuICAgICAgICAgIGNvbnN0IHsgbWVtYnJhbmUsIG9yaWdpbmFsVGFyZ2V0IH0gPSB0aGlzO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gb3JpZ2luYWxUYXJnZXRba2V5XTtcbiAgICAgICAgICBjb25zdCB7IHZhbHVlT2JzZXJ2ZWQgfSA9IG1lbWJyYW5lO1xuICAgICAgICAgIHZhbHVlT2JzZXJ2ZWQob3JpZ2luYWxUYXJnZXQsIGtleSk7XG4gICAgICAgICAgcmV0dXJuIG1lbWJyYW5lLmdldFJlYWRPbmx5UHJveHkodmFsdWUpO1xuICAgICAgfVxuICAgICAgc2V0KHNoYWRvd1RhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZVByb3BlcnR5KHNoYWRvd1RhcmdldCwga2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgYXBwbHkoc2hhZG93VGFyZ2V0LCB0aGlzQXJnLCBhcmdBcnJheSkge1xuICAgICAgICAgIC8qIE5vIG9wICovXG4gICAgICB9XG4gICAgICBjb25zdHJ1Y3QodGFyZ2V0LCBhcmdBcnJheSwgbmV3VGFyZ2V0KSB7XG4gICAgICAgICAgLyogTm8gb3AgKi9cbiAgICAgIH1cbiAgICAgIGhhcyhzaGFkb3dUYXJnZXQsIGtleSkge1xuICAgICAgICAgIGNvbnN0IHsgb3JpZ2luYWxUYXJnZXQsIG1lbWJyYW5lOiB7IHZhbHVlT2JzZXJ2ZWQgfSB9ID0gdGhpcztcbiAgICAgICAgICB2YWx1ZU9ic2VydmVkKG9yaWdpbmFsVGFyZ2V0LCBrZXkpO1xuICAgICAgICAgIHJldHVybiBrZXkgaW4gb3JpZ2luYWxUYXJnZXQ7XG4gICAgICB9XG4gICAgICBvd25LZXlzKHNoYWRvd1RhcmdldCkge1xuICAgICAgICAgIGNvbnN0IHsgb3JpZ2luYWxUYXJnZXQgfSA9IHRoaXM7XG4gICAgICAgICAgcmV0dXJuIEFycmF5Q29uY2F0LmNhbGwoZ2V0T3duUHJvcGVydHlOYW1lcyhvcmlnaW5hbFRhcmdldCksIGdldE93blByb3BlcnR5U3ltYm9scyhvcmlnaW5hbFRhcmdldCkpO1xuICAgICAgfVxuICAgICAgc2V0UHJvdG90eXBlT2Yoc2hhZG93VGFyZ2V0LCBwcm90b3R5cGUpIHtcbiAgICAgIH1cbiAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzaGFkb3dUYXJnZXQsIGtleSkge1xuICAgICAgICAgIGNvbnN0IHsgb3JpZ2luYWxUYXJnZXQsIG1lbWJyYW5lIH0gPSB0aGlzO1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWVPYnNlcnZlZCB9ID0gbWVtYnJhbmU7XG4gICAgICAgICAgLy8ga2V5cyBsb29rZWQgdXAgdmlhIGhhc093blByb3BlcnR5IG5lZWQgdG8gYmUgcmVhY3RpdmVcbiAgICAgICAgICB2YWx1ZU9ic2VydmVkKG9yaWdpbmFsVGFyZ2V0LCBrZXkpO1xuICAgICAgICAgIGxldCBkZXNjID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9yaWdpbmFsVGFyZ2V0LCBrZXkpO1xuICAgICAgICAgIGlmIChpc1VuZGVmaW5lZChkZXNjKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZGVzYztcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc2hhZG93RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzaGFkb3dUYXJnZXQsIGtleSk7XG4gICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChzaGFkb3dEZXNjcmlwdG9yKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2hhZG93RGVzY3JpcHRvcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gTm90ZTogYnkgYWNjZXNzaW5nIHRoZSBkZXNjcmlwdG9yLCB0aGUga2V5IGlzIG1hcmtlZCBhcyBvYnNlcnZlZFxuICAgICAgICAgIC8vIGJ1dCBhY2Nlc3MgdG8gdGhlIHZhbHVlIG9yIGdldHRlciAoaWYgYXZhaWxhYmxlKSBjYW5ub3QgYmUgb2JzZXJ2ZWQsXG4gICAgICAgICAgLy8ganVzdCBsaWtlIHJlZ3VsYXIgbWV0aG9kcywgaW4gd2hpY2ggY2FzZSB3ZSBqdXN0IGRvIG5vdGhpbmcuXG4gICAgICAgICAgZGVzYyA9IHdyYXBEZXNjcmlwdG9yKG1lbWJyYW5lLCBkZXNjLCB3cmFwUmVhZE9ubHlWYWx1ZSk7XG4gICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZGVzYywgJ3NldCcpKSB7XG4gICAgICAgICAgICAgIGRlc2Muc2V0ID0gdW5kZWZpbmVkOyAvLyByZWFkT25seSBtZW1icmFuZSBkb2VzIG5vdCBhbGxvdyBzZXR0ZXJzXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgICAgLy8gSWYgZGVzY3JpcHRvciBmcm9tIG9yaWdpbmFsIHRhcmdldCBpcyBub3QgY29uZmlndXJhYmxlLFxuICAgICAgICAgICAgICAvLyBXZSBtdXN0IGNvcHkgdGhlIHdyYXBwZWQgZGVzY3JpcHRvciBvdmVyIHRvIHRoZSBzaGFkb3cgdGFyZ2V0LlxuICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHByb3h5IHdpbGwgdGhyb3cgYW4gaW52YXJpYW50IGVycm9yLlxuICAgICAgICAgICAgICAvLyBUaGlzIGlzIG91ciBsYXN0IGNoYW5jZSB0byBsb2NrIHRoZSB2YWx1ZS5cbiAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvUHJveHkvaGFuZGxlci9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IjSW52YXJpYW50c1xuICAgICAgICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eShzaGFkb3dUYXJnZXQsIGtleSwgZGVzYyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZXNjO1xuICAgICAgfVxuICAgICAgcHJldmVudEV4dGVuc2lvbnMoc2hhZG93VGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZGVmaW5lUHJvcGVydHkoc2hhZG93VGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlU2hhZG93VGFyZ2V0KHZhbHVlKSB7XG4gICAgICBsZXQgc2hhZG93VGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgc2hhZG93VGFyZ2V0ID0gW107XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICBzaGFkb3dUYXJnZXQgPSB7fTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaGFkb3dUYXJnZXQ7XG4gIH1cbiAgY29uc3QgT2JqZWN0RG90UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgZnVuY3Rpb24gZGVmYXVsdFZhbHVlSXNPYnNlcnZhYmxlKHZhbHVlKSB7XG4gICAgICAvLyBpbnRlbnRpb25hbGx5IGNoZWNraW5nIGZvciBudWxsXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyB0cmVhdCBhbGwgbm9uLW9iamVjdCB0eXBlcywgaW5jbHVkaW5nIHVuZGVmaW5lZCwgYXMgbm9uLW9ic2VydmFibGUgdmFsdWVzXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvdG8gPSBnZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gICAgICByZXR1cm4gKHByb3RvID09PSBPYmplY3REb3RQcm90b3R5cGUgfHwgcHJvdG8gPT09IG51bGwgfHwgZ2V0UHJvdG90eXBlT2YocHJvdG8pID09PSBudWxsKTtcbiAgfVxuICBjb25zdCBkZWZhdWx0VmFsdWVPYnNlcnZlZCA9IChvYmosIGtleSkgPT4ge1xuICAgICAgLyogZG8gbm90aGluZyAqL1xuICB9O1xuICBjb25zdCBkZWZhdWx0VmFsdWVNdXRhdGVkID0gKG9iaiwga2V5KSA9PiB7XG4gICAgICAvKiBkbyBub3RoaW5nICovXG4gIH07XG4gIGNvbnN0IGRlZmF1bHRWYWx1ZURpc3RvcnRpb24gPSAodmFsdWUpID0+IHZhbHVlO1xuICBmdW5jdGlvbiB3cmFwRGVzY3JpcHRvcihtZW1icmFuZSwgZGVzY3JpcHRvciwgZ2V0VmFsdWUpIHtcbiAgICAgIGNvbnN0IHsgc2V0LCBnZXQgfSA9IGRlc2NyaXB0b3I7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChkZXNjcmlwdG9yLCAndmFsdWUnKSkge1xuICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBnZXRWYWx1ZShtZW1icmFuZSwgZGVzY3JpcHRvci52YWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGdldCkpIHtcbiAgICAgICAgICAgICAgZGVzY3JpcHRvci5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBpbnZva2luZyB0aGUgb3JpZ2luYWwgZ2V0dGVyIHdpdGggdGhlIG9yaWdpbmFsIHRhcmdldFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFZhbHVlKG1lbWJyYW5lLCBnZXQuY2FsbCh1bndyYXAodGhpcykpKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChzZXQpKSB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50IHdlIGRvbid0IGhhdmUgYSBjbGVhciBpbmRpY2F0aW9uIG9mIHdoZXRoZXJcbiAgICAgICAgICAgICAgICAgIC8vIG9yIG5vdCBhIHZhbGlkIG11dGF0aW9uIHdpbGwgb2NjdXIsIHdlIGRvbid0IGhhdmUgdGhlIGtleSxcbiAgICAgICAgICAgICAgICAgIC8vIGFuZCB3ZSBhcmUgbm90IHN1cmUgd2h5IGFuZCBob3cgdGhleSBhcmUgaW52b2tpbmcgdGhpcyBzZXR0ZXIuXG4gICAgICAgICAgICAgICAgICAvLyBOZXZlcnRoZWxlc3Mgd2UgcHJlc2VydmUgdGhlIG9yaWdpbmFsIHNlbWFudGljcyBieSBpbnZva2luZyB0aGVcbiAgICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIHNldHRlciB3aXRoIHRoZSBvcmlnaW5hbCB0YXJnZXQgYW5kIHRoZSB1bndyYXBwZWQgdmFsdWVcbiAgICAgICAgICAgICAgICAgIHNldC5jYWxsKHVud3JhcCh0aGlzKSwgbWVtYnJhbmUudW53cmFwUHJveHkodmFsdWUpKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfVxuICBjbGFzcyBSZWFjdGl2ZU1lbWJyYW5lIHtcbiAgICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlRGlzdG9ydGlvbiA9IGRlZmF1bHRWYWx1ZURpc3RvcnRpb247XG4gICAgICAgICAgdGhpcy52YWx1ZU11dGF0ZWQgPSBkZWZhdWx0VmFsdWVNdXRhdGVkO1xuICAgICAgICAgIHRoaXMudmFsdWVPYnNlcnZlZCA9IGRlZmF1bHRWYWx1ZU9ic2VydmVkO1xuICAgICAgICAgIHRoaXMudmFsdWVJc09ic2VydmFibGUgPSBkZWZhdWx0VmFsdWVJc09ic2VydmFibGU7XG4gICAgICAgICAgdGhpcy5vYmplY3RHcmFwaCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHZhbHVlRGlzdG9ydGlvbiwgdmFsdWVNdXRhdGVkLCB2YWx1ZU9ic2VydmVkLCB2YWx1ZUlzT2JzZXJ2YWJsZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgdGhpcy52YWx1ZURpc3RvcnRpb24gPSBpc0Z1bmN0aW9uKHZhbHVlRGlzdG9ydGlvbikgPyB2YWx1ZURpc3RvcnRpb24gOiBkZWZhdWx0VmFsdWVEaXN0b3J0aW9uO1xuICAgICAgICAgICAgICB0aGlzLnZhbHVlTXV0YXRlZCA9IGlzRnVuY3Rpb24odmFsdWVNdXRhdGVkKSA/IHZhbHVlTXV0YXRlZCA6IGRlZmF1bHRWYWx1ZU11dGF0ZWQ7XG4gICAgICAgICAgICAgIHRoaXMudmFsdWVPYnNlcnZlZCA9IGlzRnVuY3Rpb24odmFsdWVPYnNlcnZlZCkgPyB2YWx1ZU9ic2VydmVkIDogZGVmYXVsdFZhbHVlT2JzZXJ2ZWQ7XG4gICAgICAgICAgICAgIHRoaXMudmFsdWVJc09ic2VydmFibGUgPSBpc0Z1bmN0aW9uKHZhbHVlSXNPYnNlcnZhYmxlKSA/IHZhbHVlSXNPYnNlcnZhYmxlIDogZGVmYXVsdFZhbHVlSXNPYnNlcnZhYmxlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdldFByb3h5KHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgdW53cmFwcGVkVmFsdWUgPSB1bndyYXAodmFsdWUpO1xuICAgICAgICAgIGNvbnN0IGRpc3RvcnRlZCA9IHRoaXMudmFsdWVEaXN0b3J0aW9uKHVud3JhcHBlZFZhbHVlKTtcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZUlzT2JzZXJ2YWJsZShkaXN0b3J0ZWQpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG8gPSB0aGlzLmdldFJlYWN0aXZlU3RhdGUodW53cmFwcGVkVmFsdWUsIGRpc3RvcnRlZCk7XG4gICAgICAgICAgICAgIC8vIHdoZW4gdHJ5aW5nIHRvIGV4dHJhY3QgdGhlIHdyaXRhYmxlIHZlcnNpb24gb2YgYSByZWFkb25seVxuICAgICAgICAgICAgICAvLyB3ZSByZXR1cm4gdGhlIHJlYWRvbmx5LlxuICAgICAgICAgICAgICByZXR1cm4gby5yZWFkT25seSA9PT0gdmFsdWUgPyB2YWx1ZSA6IG8ucmVhY3RpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkaXN0b3J0ZWQ7XG4gICAgICB9XG4gICAgICBnZXRSZWFkT25seVByb3h5KHZhbHVlKSB7XG4gICAgICAgICAgdmFsdWUgPSB1bndyYXAodmFsdWUpO1xuICAgICAgICAgIGNvbnN0IGRpc3RvcnRlZCA9IHRoaXMudmFsdWVEaXN0b3J0aW9uKHZhbHVlKTtcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZUlzT2JzZXJ2YWJsZShkaXN0b3J0ZWQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJlYWN0aXZlU3RhdGUodmFsdWUsIGRpc3RvcnRlZCkucmVhZE9ubHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkaXN0b3J0ZWQ7XG4gICAgICB9XG4gICAgICB1bndyYXBQcm94eShwKSB7XG4gICAgICAgICAgcmV0dXJuIHVud3JhcChwKTtcbiAgICAgIH1cbiAgICAgIGdldFJlYWN0aXZlU3RhdGUodmFsdWUsIGRpc3RvcnRlZFZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgeyBvYmplY3RHcmFwaCwgfSA9IHRoaXM7XG4gICAgICAgICAgbGV0IHJlYWN0aXZlU3RhdGUgPSBvYmplY3RHcmFwaC5nZXQoZGlzdG9ydGVkVmFsdWUpO1xuICAgICAgICAgIGlmIChyZWFjdGl2ZVN0YXRlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWFjdGl2ZVN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBtZW1icmFuZSA9IHRoaXM7XG4gICAgICAgICAgcmVhY3RpdmVTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgZ2V0IHJlYWN0aXZlKCkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcmVhY3RpdmVIYW5kbGVyID0gbmV3IFJlYWN0aXZlUHJveHlIYW5kbGVyKG1lbWJyYW5lLCBkaXN0b3J0ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAvLyBjYWNoaW5nIHRoZSByZWFjdGl2ZSBwcm94eSBhZnRlciB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkoY3JlYXRlU2hhZG93VGFyZ2V0KGRpc3RvcnRlZFZhbHVlKSwgcmVhY3RpdmVIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUHJveHkocHJveHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIE9iamVjdERlZmluZVByb3BlcnR5KHRoaXMsICdyZWFjdGl2ZScsIHsgdmFsdWU6IHByb3h5IH0pO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBnZXQgcmVhZE9ubHkoKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCByZWFkT25seUhhbmRsZXIgPSBuZXcgUmVhZE9ubHlIYW5kbGVyKG1lbWJyYW5lLCBkaXN0b3J0ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAvLyBjYWNoaW5nIHRoZSByZWFkT25seSBwcm94eSBhZnRlciB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkoY3JlYXRlU2hhZG93VGFyZ2V0KGRpc3RvcnRlZFZhbHVlKSwgcmVhZE9ubHlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUHJveHkocHJveHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIE9iamVjdERlZmluZVByb3BlcnR5KHRoaXMsICdyZWFkT25seScsIHsgdmFsdWU6IHByb3h5IH0pO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBvYmplY3RHcmFwaC5zZXQoZGlzdG9ydGVkVmFsdWUsIHJlYWN0aXZlU3RhdGUpO1xuICAgICAgICAgIHJldHVybiByZWFjdGl2ZVN0YXRlO1xuICAgICAgfVxuICB9XG4gIC8qKiB2ZXJzaW9uOiAwLjI2LjAgKi9cblxuICBmdW5jdGlvbiB3cmFwKGRhdGEsIG11dGF0aW9uQ2FsbGJhY2spIHtcblxuICAgIGxldCBtZW1icmFuZSA9IG5ldyBSZWFjdGl2ZU1lbWJyYW5lKHtcbiAgICAgIHZhbHVlTXV0YXRlZCh0YXJnZXQsIGtleSkge1xuICAgICAgICBtdXRhdGlvbkNhbGxiYWNrKHRhcmdldCwga2V5KTtcbiAgICAgIH1cblxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBtZW1icmFuZS5nZXRQcm94eShkYXRhKSxcbiAgICAgIG1lbWJyYW5lOiBtZW1icmFuZVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gdW53cmFwJDEobWVtYnJhbmUsIG9ic2VydmFibGUpIHtcbiAgICBsZXQgdW53cmFwcGVkRGF0YSA9IG1lbWJyYW5lLnVud3JhcFByb3h5KG9ic2VydmFibGUpO1xuICAgIGxldCBjb3B5ID0ge307XG4gICAgT2JqZWN0LmtleXModW53cmFwcGVkRGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKFsnJGVsJywgJyRyZWZzJywgJyRuZXh0VGljaycsICckd2F0Y2gnXS5pbmNsdWRlcyhrZXkpKSByZXR1cm47XG4gICAgICBjb3B5W2tleV0gPSB1bndyYXBwZWREYXRhW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvcHk7XG4gIH1cblxuICBjbGFzcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsLCBjb21wb25lbnRGb3JDbG9uZSA9IG51bGwpIHtcbiAgICAgIHRoaXMuJGVsID0gZWw7XG4gICAgICBjb25zdCBkYXRhQXR0ciA9IHRoaXMuJGVsLmdldEF0dHJpYnV0ZSgneC1kYXRhJyk7XG4gICAgICBjb25zdCBkYXRhRXhwcmVzc2lvbiA9IGRhdGFBdHRyID09PSAnJyA/ICd7fScgOiBkYXRhQXR0cjtcbiAgICAgIGNvbnN0IGluaXRFeHByZXNzaW9uID0gdGhpcy4kZWwuZ2V0QXR0cmlidXRlKCd4LWluaXQnKTtcbiAgICAgIGxldCBkYXRhRXh0cmFzID0ge1xuICAgICAgICAkZWw6IHRoaXMuJGVsXG4gICAgICB9O1xuICAgICAgbGV0IGNhbm9uaWNhbENvbXBvbmVudEVsZW1lbnRSZWZlcmVuY2UgPSBjb21wb25lbnRGb3JDbG9uZSA/IGNvbXBvbmVudEZvckNsb25lLiRlbCA6IHRoaXMuJGVsO1xuICAgICAgT2JqZWN0LmVudHJpZXMoQWxwaW5lLm1hZ2ljUHJvcGVydGllcykuZm9yRWFjaCgoW25hbWUsIGNhbGxiYWNrXSkgPT4ge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGF0YUV4dHJhcywgYCQke25hbWV9YCwge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNhbm9uaWNhbENvbXBvbmVudEVsZW1lbnRSZWZlcmVuY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudW5vYnNlcnZlZERhdGEgPSBjb21wb25lbnRGb3JDbG9uZSA/IGNvbXBvbmVudEZvckNsb25lLmdldFVub2JzZXJ2ZWREYXRhKCkgOiBzYWZlckV2YWwoZWwsIGRhdGFFeHByZXNzaW9uLCBkYXRhRXh0cmFzKTtcbiAgICAgIC8vIENvbnN0cnVjdCBhIFByb3h5LWJhc2VkIG9ic2VydmFibGUuIFRoaXMgd2lsbCBiZSB1c2VkIHRvIGhhbmRsZSByZWFjdGl2aXR5LlxuXG4gICAgICBsZXQge1xuICAgICAgICBtZW1icmFuZSxcbiAgICAgICAgZGF0YVxuICAgICAgfSA9IHRoaXMud3JhcERhdGFJbk9ic2VydmFibGUodGhpcy51bm9ic2VydmVkRGF0YSk7XG4gICAgICB0aGlzLiRkYXRhID0gZGF0YTtcbiAgICAgIHRoaXMubWVtYnJhbmUgPSBtZW1icmFuZTsgLy8gQWZ0ZXIgbWFraW5nIHVzZXItc3VwcGxpZWQgZGF0YSBtZXRob2RzIHJlYWN0aXZlLCB3ZSBjYW4gbm93IGFkZFxuICAgICAgLy8gb3VyIG1hZ2ljIHByb3BlcnRpZXMgdG8gdGhlIG9yaWdpbmFsIGRhdGEgZm9yIGFjY2Vzcy5cblxuICAgICAgdGhpcy51bm9ic2VydmVkRGF0YS4kZWwgPSB0aGlzLiRlbDtcbiAgICAgIHRoaXMudW5vYnNlcnZlZERhdGEuJHJlZnMgPSB0aGlzLmdldFJlZnNQcm94eSgpO1xuICAgICAgdGhpcy5uZXh0VGlja1N0YWNrID0gW107XG5cbiAgICAgIHRoaXMudW5vYnNlcnZlZERhdGEuJG5leHRUaWNrID0gY2FsbGJhY2sgPT4ge1xuICAgICAgICB0aGlzLm5leHRUaWNrU3RhY2sucHVzaChjYWxsYmFjayk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLndhdGNoZXJzID0ge307XG5cbiAgICAgIHRoaXMudW5vYnNlcnZlZERhdGEuJHdhdGNoID0gKHByb3BlcnR5LCBjYWxsYmFjaykgPT4ge1xuICAgICAgICBpZiAoIXRoaXMud2F0Y2hlcnNbcHJvcGVydHldKSB0aGlzLndhdGNoZXJzW3Byb3BlcnR5XSA9IFtdO1xuICAgICAgICB0aGlzLndhdGNoZXJzW3Byb3BlcnR5XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIH07XG4gICAgICAvKiBNT0RFUk4tT05MWTpTVEFSVCAqL1xuICAgICAgLy8gV2UgcmVtb3ZlIHRoaXMgcGllY2Ugb2YgY29kZSBmcm9tIHRoZSBsZWdhY3kgYnVpbGQuXG4gICAgICAvLyBJbiBJRTExLCB3ZSBoYXZlIGFscmVhZHkgZGVmaW5lZCBvdXIgaGVscGVycyBhdCB0aGlzIHBvaW50LlxuICAgICAgLy8gUmVnaXN0ZXIgY3VzdG9tIG1hZ2ljIHByb3BlcnRpZXMuXG5cblxuICAgICAgT2JqZWN0LmVudHJpZXMoQWxwaW5lLm1hZ2ljUHJvcGVydGllcykuZm9yRWFjaCgoW25hbWUsIGNhbGxiYWNrXSkgPT4ge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy51bm9ic2VydmVkRGF0YSwgYCQke25hbWV9YCwge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNhbm9uaWNhbENvbXBvbmVudEVsZW1lbnRSZWZlcmVuY2UsIHRoaXMuJGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICAvKiBNT0RFUk4tT05MWTpFTkQgKi9cblxuICAgICAgdGhpcy5zaG93RGlyZWN0aXZlU3RhY2sgPSBbXTtcbiAgICAgIHRoaXMuc2hvd0RpcmVjdGl2ZUxhc3RFbGVtZW50O1xuICAgICAgY29tcG9uZW50Rm9yQ2xvbmUgfHwgQWxwaW5lLm9uQmVmb3JlQ29tcG9uZW50SW5pdGlhbGl6ZWRzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sodGhpcykpO1xuICAgICAgdmFyIGluaXRSZXR1cm5lZENhbGxiYWNrOyAvLyBJZiB4LWluaXQgaXMgcHJlc2VudCBBTkQgd2UgYXJlbid0IGNsb25pbmcgKHNraXAgeC1pbml0IG9uIGNsb25lKVxuXG4gICAgICBpZiAoaW5pdEV4cHJlc3Npb24gJiYgIWNvbXBvbmVudEZvckNsb25lKSB7XG4gICAgICAgIC8vIFdlIHdhbnQgdG8gYWxsb3cgZGF0YSBtYW5pcHVsYXRpb24sIGJ1dCBub3QgdHJpZ2dlciBET00gdXBkYXRlcyBqdXN0IHlldC5cbiAgICAgICAgLy8gV2UgaGF2ZW4ndCBldmVuIGluaXRpYWxpemVkIHRoZSBlbGVtZW50cyB3aXRoIHRoZWlyIEFscGluZSBiaW5kaW5ncy4gSSBtZWFuIGMnbW9uLlxuICAgICAgICB0aGlzLnBhdXNlUmVhY3Rpdml0eSA9IHRydWU7XG4gICAgICAgIGluaXRSZXR1cm5lZENhbGxiYWNrID0gdGhpcy5ldmFsdWF0ZVJldHVybkV4cHJlc3Npb24odGhpcy4kZWwsIGluaXRFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5wYXVzZVJlYWN0aXZpdHkgPSBmYWxzZTtcbiAgICAgIH0gLy8gUmVnaXN0ZXIgYWxsIG91ciBsaXN0ZW5lcnMgYW5kIHNldCBhbGwgb3VyIGF0dHJpYnV0ZSBiaW5kaW5ncy5cbiAgICAgIC8vIElmIHdlJ3JlIGNsb25pbmcgYSBjb21wb25lbnQsIHRoZSB0aGlyZCBwYXJhbWV0ZXIgZW5zdXJlcyBubyBkdXBsaWNhdGVcbiAgICAgIC8vIGV2ZW50IGxpc3RlbmVycyBhcmUgcmVnaXN0ZXJlZCAodGhlIG11dGF0aW9uIG9ic2VydmVyIHdpbGwgdGFrZSBjYXJlIG9mIHRoZW0pXG5cblxuICAgICAgdGhpcy5pbml0aWFsaXplRWxlbWVudHModGhpcy4kZWwsICgpID0+IHt9LCBjb21wb25lbnRGb3JDbG9uZSk7IC8vIFVzZSBtdXRhdGlvbiBvYnNlcnZlciB0byBkZXRlY3QgbmV3IGVsZW1lbnRzIGJlaW5nIGFkZGVkIHdpdGhpbiB0aGlzIGNvbXBvbmVudCBhdCBydW4tdGltZS5cbiAgICAgIC8vIEFscGluZSdzIGp1c3Qgc28gZGFybiBmbGV4aWJsZSBhbWlyaXRlP1xuXG4gICAgICB0aGlzLmxpc3RlbkZvck5ld0VsZW1lbnRzVG9Jbml0aWFsaXplKCk7XG5cbiAgICAgIGlmICh0eXBlb2YgaW5pdFJldHVybmVkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gUnVuIHRoZSBjYWxsYmFjayByZXR1cm5lZCBmcm9tIHRoZSBcIngtaW5pdFwiIGhvb2sgdG8gYWxsb3cgdGhlIHVzZXIgdG8gZG8gc3R1ZmYgYWZ0ZXJcbiAgICAgICAgLy8gQWxwaW5lJ3MgZ290IGl0J3MgZ3J1YmJ5IGxpdHRsZSBwYXdzIGFsbCBvdmVyIGV2ZXJ5dGhpbmcuXG4gICAgICAgIGluaXRSZXR1cm5lZENhbGxiYWNrLmNhbGwodGhpcy4kZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudEZvckNsb25lIHx8IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBBbHBpbmUub25Db21wb25lbnRJbml0aWFsaXplZHMuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayh0aGlzKSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBnZXRVbm9ic2VydmVkRGF0YSgpIHtcbiAgICAgIHJldHVybiB1bndyYXAkMSh0aGlzLm1lbWJyYW5lLCB0aGlzLiRkYXRhKTtcbiAgICB9XG5cbiAgICB3cmFwRGF0YUluT2JzZXJ2YWJsZShkYXRhKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBsZXQgdXBkYXRlRG9tID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLnVwZGF0ZUVsZW1lbnRzKHNlbGYuJGVsKTtcbiAgICAgIH0sIDApO1xuICAgICAgcmV0dXJuIHdyYXAoZGF0YSwgKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChzZWxmLndhdGNoZXJzW2tleV0pIHtcbiAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgd2F0Y2hlciBmb3IgdGhpcyBzcGVjaWZpYyBrZXksIHJ1biBpdC5cbiAgICAgICAgICBzZWxmLndhdGNoZXJzW2tleV0uZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayh0YXJnZXRba2V5XSkpO1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgIC8vIEFycmF5cyBhcmUgc3BlY2lhbCBjYXNlcywgaWYgYW55IG9mIHRoZSBpdGVtcyBjaGFuZ2UsIHdlIGNvbnNpZGVyIHRoZSBhcnJheSBhcyBtdXRhdGVkLlxuICAgICAgICAgIE9iamVjdC5rZXlzKHNlbGYud2F0Y2hlcnMpLmZvckVhY2goZnVsbERvdE5vdGF0aW9uS2V5ID0+IHtcbiAgICAgICAgICAgIGxldCBkb3ROb3RhdGlvblBhcnRzID0gZnVsbERvdE5vdGF0aW9uS2V5LnNwbGl0KCcuJyk7IC8vIElnbm9yZSBsZW5ndGggbXV0YXRpb25zIHNpbmNlIHRoZXkgd291bGQgcmVzdWx0IGluIGR1cGxpY2F0ZSBjYWxscy5cbiAgICAgICAgICAgIC8vIEZvciBleGFtcGxlLCB3aGVuIGNhbGxpbmcgcHVzaCwgd2Ugd291bGQgZ2V0IGEgbXV0YXRpb24gZm9yIHRoZSBpdGVtJ3Mga2V5XG4gICAgICAgICAgICAvLyBhbmQgYSBzZWNvbmQgbXV0YXRpb24gZm9yIHRoZSBsZW5ndGggcHJvcGVydHkuXG5cbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdsZW5ndGgnKSByZXR1cm47XG4gICAgICAgICAgICBkb3ROb3RhdGlvblBhcnRzLnJlZHVjZSgoY29tcGFyaXNvbkRhdGEsIHBhcnQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5pcyh0YXJnZXQsIGNvbXBhcmlzb25EYXRhW3BhcnRdKSkge1xuICAgICAgICAgICAgICAgIHNlbGYud2F0Y2hlcnNbZnVsbERvdE5vdGF0aW9uS2V5XS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKHRhcmdldCkpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmlzb25EYXRhW3BhcnRdO1xuICAgICAgICAgICAgfSwgc2VsZi51bm9ic2VydmVkRGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTGV0J3Mgd2FsayB0aHJvdWdoIHRoZSB3YXRjaGVycyB3aXRoIFwiZG90LW5vdGF0aW9uXCIgKGZvby5iYXIpIGFuZCBzZWVcbiAgICAgICAgICAvLyBpZiB0aGlzIG11dGF0aW9uIGZpdHMgYW55IG9mIHRoZW0uXG4gICAgICAgICAgT2JqZWN0LmtleXMoc2VsZi53YXRjaGVycykuZmlsdGVyKGkgPT4gaS5pbmNsdWRlcygnLicpKS5mb3JFYWNoKGZ1bGxEb3ROb3RhdGlvbktleSA9PiB7XG4gICAgICAgICAgICBsZXQgZG90Tm90YXRpb25QYXJ0cyA9IGZ1bGxEb3ROb3RhdGlvbktleS5zcGxpdCgnLicpOyAvLyBJZiB0aGlzIGRvdC1ub3RhdGlvbiB3YXRjaGVyJ3MgbGFzdCBcInBhcnRcIiBkb2Vzbid0IG1hdGNoIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAvLyBrZXksIHRoZW4gc2tpcCBpdCBlYXJseSBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cblxuICAgICAgICAgICAgaWYgKGtleSAhPT0gZG90Tm90YXRpb25QYXJ0c1tkb3ROb3RhdGlvblBhcnRzLmxlbmd0aCAtIDFdKSByZXR1cm47IC8vIE5vdywgd2FsayB0aHJvdWdoIHRoZSBkb3Qtbm90YXRpb24gXCJwYXJ0c1wiIHJlY3Vyc2l2ZWx5IHRvIGZpbmRcbiAgICAgICAgICAgIC8vIGEgbWF0Y2gsIGFuZCBjYWxsIHRoZSB3YXRjaGVyIGlmIG9uZSdzIGZvdW5kLlxuXG4gICAgICAgICAgICBkb3ROb3RhdGlvblBhcnRzLnJlZHVjZSgoY29tcGFyaXNvbkRhdGEsIHBhcnQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5pcyh0YXJnZXQsIGNvbXBhcmlzb25EYXRhKSkge1xuICAgICAgICAgICAgICAgIC8vIFJ1biB0aGUgd2F0Y2hlcnMuXG4gICAgICAgICAgICAgICAgc2VsZi53YXRjaGVyc1tmdWxsRG90Tm90YXRpb25LZXldLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sodGFyZ2V0W2tleV0pKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBjb21wYXJpc29uRGF0YVtwYXJ0XTtcbiAgICAgICAgICAgIH0sIHNlbGYudW5vYnNlcnZlZERhdGEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IC8vIERvbid0IHJlYWN0IHRvIGRhdGEgY2hhbmdlcyBmb3IgY2FzZXMgbGlrZSB0aGUgYHgtY3JlYXRlZGAgaG9vay5cblxuXG4gICAgICAgIGlmIChzZWxmLnBhdXNlUmVhY3Rpdml0eSkgcmV0dXJuO1xuICAgICAgICB1cGRhdGVEb20oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHdhbGtBbmRTa2lwTmVzdGVkQ29tcG9uZW50cyhlbCwgY2FsbGJhY2ssIGluaXRpYWxpemVDb21wb25lbnRDYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gICAgICB3YWxrKGVsLCBlbCA9PiB7XG4gICAgICAgIC8vIFdlJ3ZlIGhpdCBhIGNvbXBvbmVudC5cbiAgICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgneC1kYXRhJykpIHtcbiAgICAgICAgICAvLyBJZiBpdCdzIG5vdCB0aGUgY3VycmVudCBvbmUuXG4gICAgICAgICAgaWYgKCFlbC5pc1NhbWVOb2RlKHRoaXMuJGVsKSkge1xuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBpdCBpZiBpdCdzIG5vdC5cbiAgICAgICAgICAgIGlmICghZWwuX194KSBpbml0aWFsaXplQ29tcG9uZW50Q2FsbGJhY2soZWwpOyAvLyBOb3cgd2UnbGwgbGV0IHRoYXQgc3ViLWNvbXBvbmVudCBkZWFsIHdpdGggaXRzZWxmLlxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRpYWxpemVFbGVtZW50cyhyb290RWwsIGV4dHJhVmFycyA9ICgpID0+IHt9LCBjb21wb25lbnRGb3JDbG9uZSA9IGZhbHNlKSB7XG4gICAgICB0aGlzLndhbGtBbmRTa2lwTmVzdGVkQ29tcG9uZW50cyhyb290RWwsIGVsID0+IHtcbiAgICAgICAgLy8gRG9uJ3QgdG91Y2ggc3Bhd25zIGZyb20gZm9yIGxvb3BcbiAgICAgICAgaWYgKGVsLl9feF9mb3Jfa2V5ICE9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTsgLy8gRG9uJ3QgdG91Y2ggc3Bhd25zIGZyb20gaWYgZGlyZWN0aXZlc1xuXG4gICAgICAgIGlmIChlbC5fX3hfaW5zZXJ0ZWRfbWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVFbGVtZW50KGVsLCBleHRyYVZhcnMsIGNvbXBvbmVudEZvckNsb25lID8gZmFsc2UgOiB0cnVlKTtcbiAgICAgIH0sIGVsID0+IHtcbiAgICAgICAgaWYgKCFjb21wb25lbnRGb3JDbG9uZSkgZWwuX194ID0gbmV3IENvbXBvbmVudChlbCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZXhlY3V0ZUFuZENsZWFyUmVtYWluaW5nU2hvd0RpcmVjdGl2ZVN0YWNrKCk7XG4gICAgICB0aGlzLmV4ZWN1dGVBbmRDbGVhck5leHRUaWNrU3RhY2socm9vdEVsKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplRWxlbWVudChlbCwgZXh0cmFWYXJzLCBzaG91bGRSZWdpc3Rlckxpc3RlbmVycyA9IHRydWUpIHtcbiAgICAgIC8vIFRvIHN1cHBvcnQgY2xhc3MgYXR0cmlidXRlIG1lcmdpbmcsIHdlIGhhdmUgdG8ga25vdyB3aGF0IHRoZSBlbGVtZW50J3NcbiAgICAgIC8vIG9yaWdpbmFsIGNsYXNzIGF0dHJpYnV0ZSBsb29rZWQgbGlrZSBmb3IgcmVmZXJlbmNlLlxuICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnY2xhc3MnKSAmJiBnZXRYQXR0cnMoZWwsIHRoaXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZWwuX194X29yaWdpbmFsX2NsYXNzZXMgPSBjb252ZXJ0Q2xhc3NTdHJpbmdUb0FycmF5KGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSk7XG4gICAgICB9XG5cbiAgICAgIHNob3VsZFJlZ2lzdGVyTGlzdGVuZXJzICYmIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMoZWwsIGV4dHJhVmFycyk7XG4gICAgICB0aGlzLnJlc29sdmVCb3VuZEF0dHJpYnV0ZXMoZWwsIHRydWUsIGV4dHJhVmFycyk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWxlbWVudHMocm9vdEVsLCBleHRyYVZhcnMgPSAoKSA9PiB7fSkge1xuICAgICAgdGhpcy53YWxrQW5kU2tpcE5lc3RlZENvbXBvbmVudHMocm9vdEVsLCBlbCA9PiB7XG4gICAgICAgIC8vIERvbid0IHRvdWNoIHNwYXducyBmcm9tIGZvciBsb29wIChhbmQgY2hlY2sgaWYgdGhlIHJvb3QgaXMgYWN0dWFsbHkgYSBmb3IgbG9vcCBpbiBhIHBhcmVudCwgZG9uJ3Qgc2tpcCBpdC4pXG4gICAgICAgIGlmIChlbC5fX3hfZm9yX2tleSAhPT0gdW5kZWZpbmVkICYmICFlbC5pc1NhbWVOb2RlKHRoaXMuJGVsKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnQoZWwsIGV4dHJhVmFycyk7XG4gICAgICB9LCBlbCA9PiB7XG4gICAgICAgIGVsLl9feCA9IG5ldyBDb21wb25lbnQoZWwpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmV4ZWN1dGVBbmRDbGVhclJlbWFpbmluZ1Nob3dEaXJlY3RpdmVTdGFjaygpO1xuICAgICAgdGhpcy5leGVjdXRlQW5kQ2xlYXJOZXh0VGlja1N0YWNrKHJvb3RFbCk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZUFuZENsZWFyTmV4dFRpY2tTdGFjayhlbCkge1xuICAgICAgLy8gU2tpcCBzcGF3bnMgZnJvbSBhbHBpbmUgZGlyZWN0aXZlc1xuICAgICAgaWYgKGVsID09PSB0aGlzLiRlbCAmJiB0aGlzLm5leHRUaWNrU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBXZSBydW4gdGhlIHRpY2sgc3RhY2sgYWZ0ZXIgdGhlIG5leHQgZnJhbWUgdG8gYWxsb3cgYW55XG4gICAgICAgIC8vIHJ1bm5pbmcgdHJhbnNpdGlvbnMgdG8gcGFzcyB0aGUgaW5pdGlhbCBzaG93IHN0YWdlLlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHdoaWxlICh0aGlzLm5leHRUaWNrU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0VGlja1N0YWNrLnNoaWZ0KCkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGV4ZWN1dGVBbmRDbGVhclJlbWFpbmluZ1Nob3dEaXJlY3RpdmVTdGFjaygpIHtcbiAgICAgIC8vIFRoZSBnb2FsIGhlcmUgaXMgdG8gc3RhcnQgYWxsIHRoZSB4LXNob3cgdHJhbnNpdGlvbnNcbiAgICAgIC8vIGFuZCBidWlsZCBhIG5lc3RlZCBwcm9taXNlIGNoYWluIHNvIHRoYXQgZWxlbWVudHNcbiAgICAgIC8vIG9ubHkgaGlkZSB3aGVuIHRoZSBjaGlsZHJlbiBhcmUgZmluaXNoZWQgaGlkaW5nLlxuICAgICAgdGhpcy5zaG93RGlyZWN0aXZlU3RhY2sucmV2ZXJzZSgpLm1hcChoYW5kbGVyID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBoYW5kbGVyKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkucmVkdWNlKChwcm9taXNlQ2hhaW4sIHByb21pc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VDaGFpbi50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZpbmlzaEVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZmluaXNoRWxlbWVudCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sIFByb21pc2UucmVzb2x2ZSgoKSA9PiB7fSkpLmNhdGNoKGUgPT4ge1xuICAgICAgICBpZiAoZSAhPT0gVFJBTlNJVElPTl9DQU5DRUxMRUQpIHRocm93IGU7XG4gICAgICB9KTsgLy8gV2UndmUgcHJvY2Vzc2VkIHRoZSBoYW5kbGVyIHN0YWNrLiBsZXQncyBjbGVhciBpdC5cblxuICAgICAgdGhpcy5zaG93RGlyZWN0aXZlU3RhY2sgPSBbXTtcbiAgICAgIHRoaXMuc2hvd0RpcmVjdGl2ZUxhc3RFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHVwZGF0ZUVsZW1lbnQoZWwsIGV4dHJhVmFycykge1xuICAgICAgdGhpcy5yZXNvbHZlQm91bmRBdHRyaWJ1dGVzKGVsLCBmYWxzZSwgZXh0cmFWYXJzKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlckxpc3RlbmVycyhlbCwgZXh0cmFWYXJzKSB7XG4gICAgICBnZXRYQXR0cnMoZWwsIHRoaXMpLmZvckVhY2goKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG1vZGlmaWVycyxcbiAgICAgICAgZXhwcmVzc2lvblxuICAgICAgfSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICdvbic6XG4gICAgICAgICAgICByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGVsLCB2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uLCBleHRyYVZhcnMpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdtb2RlbCc6XG4gICAgICAgICAgICByZWdpc3Rlck1vZGVsTGlzdGVuZXIodGhpcywgZWwsIG1vZGlmaWVycywgZXhwcmVzc2lvbiwgZXh0cmFWYXJzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNvbHZlQm91bmRBdHRyaWJ1dGVzKGVsLCBpbml0aWFsVXBkYXRlID0gZmFsc2UsIGV4dHJhVmFycykge1xuICAgICAgbGV0IGF0dHJzID0gZ2V0WEF0dHJzKGVsLCB0aGlzKTtcbiAgICAgIGF0dHJzLmZvckVhY2goKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG1vZGlmaWVycyxcbiAgICAgICAgZXhwcmVzc2lvblxuICAgICAgfSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICdtb2RlbCc6XG4gICAgICAgICAgICBoYW5kbGVBdHRyaWJ1dGVCaW5kaW5nRGlyZWN0aXZlKHRoaXMsIGVsLCAndmFsdWUnLCBleHByZXNzaW9uLCBleHRyYVZhcnMsIHR5cGUsIG1vZGlmaWVycyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2JpbmQnOlxuICAgICAgICAgICAgLy8gVGhlIDprZXkgYmluZGluZyBvbiBhbiB4LWZvciBpcyBzcGVjaWFsLCBpZ25vcmUgaXQuXG4gICAgICAgICAgICBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGVtcGxhdGUnICYmIHZhbHVlID09PSAna2V5JykgcmV0dXJuO1xuICAgICAgICAgICAgaGFuZGxlQXR0cmlidXRlQmluZGluZ0RpcmVjdGl2ZSh0aGlzLCBlbCwgdmFsdWUsIGV4cHJlc3Npb24sIGV4dHJhVmFycywgdHlwZSwgbW9kaWZpZXJzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5ldmFsdWF0ZVJldHVybkV4cHJlc3Npb24oZWwsIGV4cHJlc3Npb24sIGV4dHJhVmFycyk7XG4gICAgICAgICAgICBoYW5kbGVUZXh0RGlyZWN0aXZlKGVsLCBvdXRwdXQsIGV4cHJlc3Npb24pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdodG1sJzpcbiAgICAgICAgICAgIGhhbmRsZUh0bWxEaXJlY3RpdmUodGhpcywgZWwsIGV4cHJlc3Npb24sIGV4dHJhVmFycyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuZXZhbHVhdGVSZXR1cm5FeHByZXNzaW9uKGVsLCBleHByZXNzaW9uLCBleHRyYVZhcnMpO1xuICAgICAgICAgICAgaGFuZGxlU2hvd0RpcmVjdGl2ZSh0aGlzLCBlbCwgb3V0cHV0LCBtb2RpZmllcnMsIGluaXRpYWxVcGRhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdpZic6XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGVsZW1lbnQgYWxzbyBoYXMgeC1mb3Igb24gaXQsIGRvbid0IHByb2Nlc3MgeC1pZi5cbiAgICAgICAgICAgIC8vIFdlIHdpbGwgbGV0IHRoZSBcIngtZm9yXCIgZGlyZWN0aXZlIGhhbmRsZSB0aGUgXCJpZlwiaW5nLlxuICAgICAgICAgICAgaWYgKGF0dHJzLnNvbWUoaSA9PiBpLnR5cGUgPT09ICdmb3InKSkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuZXZhbHVhdGVSZXR1cm5FeHByZXNzaW9uKGVsLCBleHByZXNzaW9uLCBleHRyYVZhcnMpO1xuICAgICAgICAgICAgaGFuZGxlSWZEaXJlY3RpdmUodGhpcywgZWwsIG91dHB1dCwgaW5pdGlhbFVwZGF0ZSwgZXh0cmFWYXJzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnZm9yJzpcbiAgICAgICAgICAgIGhhbmRsZUZvckRpcmVjdGl2ZSh0aGlzLCBlbCwgZXhwcmVzc2lvbiwgaW5pdGlhbFVwZGF0ZSwgZXh0cmFWYXJzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnY2xvYWsnOlxuICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCd4LWNsb2FrJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVSZXR1cm5FeHByZXNzaW9uKGVsLCBleHByZXNzaW9uLCBleHRyYVZhcnMgPSAoKSA9PiB7fSkge1xuICAgICAgcmV0dXJuIHNhZmVyRXZhbChlbCwgZXhwcmVzc2lvbiwgdGhpcy4kZGF0YSwgX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGV4dHJhVmFycygpKSwge30sIHtcbiAgICAgICAgJGRpc3BhdGNoOiB0aGlzLmdldERpc3BhdGNoRnVuY3Rpb24oZWwpXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDb21tYW5kRXhwcmVzc2lvbihlbCwgZXhwcmVzc2lvbiwgZXh0cmFWYXJzID0gKCkgPT4ge30pIHtcbiAgICAgIHJldHVybiBzYWZlckV2YWxOb1JldHVybihlbCwgZXhwcmVzc2lvbiwgdGhpcy4kZGF0YSwgX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGV4dHJhVmFycygpKSwge30sIHtcbiAgICAgICAgJGRpc3BhdGNoOiB0aGlzLmdldERpc3BhdGNoRnVuY3Rpb24oZWwpXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0RGlzcGF0Y2hGdW5jdGlvbihlbCkge1xuICAgICAgcmV0dXJuIChldmVudCwgZGV0YWlsID0ge30pID0+IHtcbiAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgICBkZXRhaWwsXG4gICAgICAgICAgYnViYmxlczogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGxpc3RlbkZvck5ld0VsZW1lbnRzVG9Jbml0aWFsaXplKCkge1xuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMuJGVsO1xuICAgICAgY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0ge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgIH07XG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gRmlsdGVyIG91dCBtdXRhdGlvbnMgdHJpZ2dlcmVkIGZyb20gY2hpbGQgY29tcG9uZW50cy5cbiAgICAgICAgICBjb25zdCBjbG9zZXN0UGFyZW50Q29tcG9uZW50ID0gbXV0YXRpb25zW2ldLnRhcmdldC5jbG9zZXN0KCdbeC1kYXRhXScpO1xuICAgICAgICAgIGlmICghKGNsb3Nlc3RQYXJlbnRDb21wb25lbnQgJiYgY2xvc2VzdFBhcmVudENvbXBvbmVudC5pc1NhbWVOb2RlKHRoaXMuJGVsKSkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgaWYgKG11dGF0aW9uc1tpXS50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb25zW2ldLmF0dHJpYnV0ZU5hbWUgPT09ICd4LWRhdGEnKSB7XG4gICAgICAgICAgICBjb25zdCB4QXR0ciA9IG11dGF0aW9uc1tpXS50YXJnZXQuZ2V0QXR0cmlidXRlKCd4LWRhdGEnKSB8fCAne30nO1xuICAgICAgICAgICAgY29uc3QgcmF3RGF0YSA9IHNhZmVyRXZhbCh0aGlzLiRlbCwgeEF0dHIsIHtcbiAgICAgICAgICAgICAgJGVsOiB0aGlzLiRlbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyYXdEYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLiRkYXRhW2tleV0gIT09IHJhd0RhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGRhdGFba2V5XSA9IHJhd0RhdGFba2V5XTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSAxIHx8IG5vZGUuX194X2luc2VydGVkX21lKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgaWYgKG5vZGUubWF0Y2hlcygnW3gtZGF0YV0nKSAmJiAhbm9kZS5fX3gpIHtcbiAgICAgICAgICAgICAgICBub2RlLl9feCA9IG5ldyBDb21wb25lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplRWxlbWVudHMobm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCBvYnNlcnZlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGdldFJlZnNQcm94eSgpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciByZWZPYmogPSB7fTtcbiAgICAgIC8vIE9uZSBvZiB0aGUgZ29hbHMgb2YgdGhpcyBpcyB0byBub3QgaG9sZCBlbGVtZW50cyBpbiBtZW1vcnksIGJ1dCByYXRoZXIgcmUtZXZhbHVhdGVcbiAgICAgIC8vIHRoZSBET00gd2hlbiB0aGUgc3lzdGVtIG5lZWRzIHNvbWV0aGluZyBmcm9tIGl0LiBUaGlzIHdheSwgdGhlIGZyYW1ld29yayBpcyBmbGV4aWJsZSBhbmRcbiAgICAgIC8vIGZyaWVuZGx5IHRvIG91dHNpZGUgRE9NIGNoYW5nZXMgZnJvbSBsaWJyYXJpZXMgbGlrZSBWdWUvTGl2ZXdpcmUuXG4gICAgICAvLyBGb3IgdGhpcyByZWFzb24sIEknbSB1c2luZyBhbiBcIm9uLWRlbWFuZFwiIHByb3h5IHRvIGZha2UgYSBcIiRyZWZzXCIgb2JqZWN0LlxuXG4gICAgICByZXR1cm4gbmV3IFByb3h5KHJlZk9iaiwge1xuICAgICAgICBnZXQob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJyRpc0FscGluZVByb3h5JykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgdmFyIHJlZjsgLy8gV2UgY2FuJ3QganVzdCBxdWVyeSB0aGUgRE9NIGJlY2F1c2UgaXQncyBoYXJkIHRvIGZpbHRlciBvdXQgcmVmcyBpblxuICAgICAgICAgIC8vIG5lc3RlZCBjb21wb25lbnRzLlxuXG4gICAgICAgICAgc2VsZi53YWxrQW5kU2tpcE5lc3RlZENvbXBvbmVudHMoc2VsZi4kZWwsIGVsID0+IHtcbiAgICAgICAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ3gtcmVmJykgJiYgZWwuZ2V0QXR0cmlidXRlKCd4LXJlZicpID09PSBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICByZWYgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gcmVmO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgY29uc3QgQWxwaW5lID0ge1xuICAgIHZlcnNpb246IFwiMi44LjJcIixcbiAgICBwYXVzZU11dGF0aW9uT2JzZXJ2ZXI6IGZhbHNlLFxuICAgIG1hZ2ljUHJvcGVydGllczoge30sXG4gICAgb25Db21wb25lbnRJbml0aWFsaXplZHM6IFtdLFxuICAgIG9uQmVmb3JlQ29tcG9uZW50SW5pdGlhbGl6ZWRzOiBbXSxcbiAgICBpZ25vcmVGb2N1c2VkRm9yVmFsdWVCaW5kaW5nOiBmYWxzZSxcbiAgICBzdGFydDogYXN5bmMgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICBpZiAoIWlzVGVzdGluZygpKSB7XG4gICAgICAgIGF3YWl0IGRvbVJlYWR5KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGlzY292ZXJDb21wb25lbnRzKGVsID0+IHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50KGVsKTtcbiAgICAgIH0pOyAvLyBJdCdzIGVhc2llciBhbmQgbW9yZSBwZXJmb3JtYW50IHRvIGp1c3Qgc3VwcG9ydCBUdXJib2xpbmtzIHRoYW4gbGlzdGVuXG4gICAgICAvLyB0byBNdXRhdGlvbk9ic2VydmVyIG11dGF0aW9ucyBhdCB0aGUgZG9jdW1lbnQgbGV2ZWwuXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0dXJib2xpbmtzOmxvYWRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLmRpc2NvdmVyVW5pbml0aWFsaXplZENvbXBvbmVudHMoZWwgPT4ge1xuICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudChlbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3RlbkZvck5ld1VuaW5pdGlhbGl6ZWRDb21wb25lbnRzQXRSdW5UaW1lKCk7XG4gICAgfSxcbiAgICBkaXNjb3ZlckNvbXBvbmVudHM6IGZ1bmN0aW9uIGRpc2NvdmVyQ29tcG9uZW50cyhjYWxsYmFjaykge1xuICAgICAgY29uc3Qgcm9vdEVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1t4LWRhdGFdJyk7XG4gICAgICByb290RWxzLmZvckVhY2gocm9vdEVsID0+IHtcbiAgICAgICAgY2FsbGJhY2socm9vdEVsKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZGlzY292ZXJVbmluaXRpYWxpemVkQ29tcG9uZW50czogZnVuY3Rpb24gZGlzY292ZXJVbmluaXRpYWxpemVkQ29tcG9uZW50cyhjYWxsYmFjaywgZWwgPSBudWxsKSB7XG4gICAgICBjb25zdCByb290RWxzID0gKGVsIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKCdbeC1kYXRhXScpO1xuICAgICAgQXJyYXkuZnJvbShyb290RWxzKS5maWx0ZXIoZWwgPT4gZWwuX194ID09PSB1bmRlZmluZWQpLmZvckVhY2gocm9vdEVsID0+IHtcbiAgICAgICAgY2FsbGJhY2socm9vdEVsKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbGlzdGVuRm9yTmV3VW5pbml0aWFsaXplZENvbXBvbmVudHNBdFJ1blRpbWU6IGZ1bmN0aW9uIGxpc3RlbkZvck5ld1VuaW5pdGlhbGl6ZWRDb21wb25lbnRzQXRSdW5UaW1lKCkge1xuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgIGNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICB9O1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgICAgICBpZiAodGhpcy5wYXVzZU11dGF0aW9uT2JzZXJ2ZXIpIHJldHVybjtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChtdXRhdGlvbnNbaV0uYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtdXRhdGlvbnNbaV0uYWRkZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgICAvLyBEaXNjYXJkIG5vbi1lbGVtZW50IG5vZGVzIChsaWtlIGxpbmUtYnJlYWtzKVxuICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuOyAvLyBEaXNjYXJkIGFueSBjaGFuZ2VzIGhhcHBlbmluZyB3aXRoaW4gYW4gZXhpc3RpbmcgY29tcG9uZW50LlxuICAgICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGFrZSBjYXJlIG9mIHRoZW1zZWx2ZXMuXG5cbiAgICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50RWxlbWVudCAmJiBub2RlLnBhcmVudEVsZW1lbnQuY2xvc2VzdCgnW3gtZGF0YV0nKSkgcmV0dXJuO1xuICAgICAgICAgICAgICB0aGlzLmRpc2NvdmVyVW5pbml0aWFsaXplZENvbXBvbmVudHMoZWwgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudChlbCk7XG4gICAgICAgICAgICAgIH0sIG5vZGUucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCBvYnNlcnZlck9wdGlvbnMpO1xuICAgIH0sXG4gICAgaW5pdGlhbGl6ZUNvbXBvbmVudDogZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbXBvbmVudChlbCkge1xuICAgICAgaWYgKCFlbC5fX3gpIHtcbiAgICAgICAgLy8gV3JhcCBpbiBhIHRyeS9jYXRjaCBzbyB0aGF0IHdlIGRvbid0IHByZXZlbnQgb3RoZXIgY29tcG9uZW50c1xuICAgICAgICAvLyBmcm9tIGluaXRpYWxpemluZyB3aGVuIG9uZSBjb21wb25lbnQgY29udGFpbnMgYW4gZXJyb3IuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZWwuX194ID0gbmV3IENvbXBvbmVudChlbCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKGNvbXBvbmVudCwgbmV3RWwpIHtcbiAgICAgIGlmICghbmV3RWwuX194KSB7XG4gICAgICAgIG5ld0VsLl9feCA9IG5ldyBDb21wb25lbnQobmV3RWwsIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhZGRNYWdpY1Byb3BlcnR5OiBmdW5jdGlvbiBhZGRNYWdpY1Byb3BlcnR5KG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm1hZ2ljUHJvcGVydGllc1tuYW1lXSA9IGNhbGxiYWNrO1xuICAgIH0sXG4gICAgb25Db21wb25lbnRJbml0aWFsaXplZDogZnVuY3Rpb24gb25Db21wb25lbnRJbml0aWFsaXplZChjYWxsYmFjaykge1xuICAgICAgdGhpcy5vbkNvbXBvbmVudEluaXRpYWxpemVkcy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIG9uQmVmb3JlQ29tcG9uZW50SW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uIG9uQmVmb3JlQ29tcG9uZW50SW5pdGlhbGl6ZWQoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub25CZWZvcmVDb21wb25lbnRJbml0aWFsaXplZHMucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICB9O1xuXG4gIGlmICghaXNUZXN0aW5nKCkpIHtcbiAgICB3aW5kb3cuQWxwaW5lID0gQWxwaW5lO1xuXG4gICAgaWYgKHdpbmRvdy5kZWZlckxvYWRpbmdBbHBpbmUpIHtcbiAgICAgIHdpbmRvdy5kZWZlckxvYWRpbmdBbHBpbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuQWxwaW5lLnN0YXJ0KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LkFscGluZS5zdGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBBbHBpbmU7XG5cbn0pKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9