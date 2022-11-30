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
/******/ 	return __webpack_require__(__webpack_require__.s = 101);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BRScrim {
      constructor(name, component) {
        this.name = name
        this.component = component
        this._setType()
        this._setBehavior()
      }
    
      _setType() {
        if (this.component.classList.contains('foco')) {
          this._type = 'foco'
        }
        if (this.component.classList.contains('legibilidade')) {
          this._type = 'legibilidade'
        }
        if (this.component.classList.contains('inibicao')) {
          this._type = 'inibicao'
        }
      }
    
      _setBehavior() {
        if (this.component.classList.contains('foco')) {
          this.component.addEventListener('click', (event) => {
            this._hideScrim(event)
          })
        }
      }
    
      _hideScrim(event) {
        event.currentTarget.classList.remove('active')
      }
    
      showScrim() {
        if (this._type === 'foco') {
          this.component.classList.add('active')
        }
      }
    }
    const scrimList = []
    for (const brScrim of window.document.querySelectorAll('.br-scrim')) {
      scrimList.push(new BRScrim('br-scrim', brScrim))
    }
    /* harmony default export */ __webpack_exports__["default"] = (BRScrim);
    for (const buttonBloco1 of window.document.querySelectorAll(
      '.scrimexemplo button'
    )) {
      buttonBloco1.addEventListener('click', () => {
        for (const brScrim of scrimList) {
          brScrim.showScrim()
        }
      })
    }
    
    
    /***/ }),
    /* 1 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BRItem {
      constructor(name, component) {
        this.name = name
        this.component = component
        this._setBehavior()
      }
    
      _setBehavior() {
        this._setCheckboxSelection()
        this._setRadioSelection()
      }
    
      _setCheckboxSelection() {
        for (const checkbox of this.component.querySelectorAll(
          '.br-checkbox input[type="checkbox"]'
        )) {
          if (checkbox.checked) {
            checkbox.setAttribute('checked', '')
            this.component.classList.add('selected')
          }
          checkbox.addEventListener('click', (event) => {
            if (event.currentTarget.checked) {
              event.currentTarget.setAttribute('checked', '')
              this.component.classList.add('selected')
            } else {
              event.currentTarget.removeAttribute('checked')
              this.component.classList.remove('selected')
            }
          })
        }
      }
    
      _setRadioSelection() {
        for (const radio of this.component.querySelectorAll(
          '.br-radio input[type="radio"]'
        )) {
          if (radio.checked) {
            radio.setAttribute('checked', '')
            this.component.classList.add('selected')
          }
          radio.addEventListener('click', (event) => {
            for (const item of this.component.parentElement.querySelectorAll(
              '.br-item'
            )) {
              for (const radioItem of item.querySelectorAll(
                '.br-radio input[type="radio"]'
              )) {
                if (radioItem === event.currentTarget) {
                  radioItem.setAttribute('checked', '')
                  item.classList.add('selected')
                } else {
                  radioItem.removeAttribute('checked')
                  item.classList.remove('selected')
                }
              }
            }
          })
        }
      }
    }
    
    const itemList = []
    for (const brItem of window.document.querySelectorAll('.br-item')) {
      itemList.push(new BRItem('br-item', brItem))
    }
    /* harmony default export */ __webpack_exports__["default"] = (BRItem);
    
    
    /***/ }),
    /* 2 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__);
    
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
    function getBoundingClientRect(element) {
      var rect = element.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        x: rect.left,
        y: rect.top
      };
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
    /*:: import type { Window } from '../types'; */
    
    /*:: declare function getWindow(node: Node | Window): Window; */
    function getWindow(node) {
      if (node == null) {
        return window;
      }
    
      if (node.toString() !== '[object Window]') {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
      }
    
      return node;
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
    
    function getWindowScroll(node) {
      var win = getWindow(node);
      var scrollLeft = win.pageXOffset;
      var scrollTop = win.pageYOffset;
      return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      };
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
    
    /*:: declare function isElement(node: mixed): boolean %checks(node instanceof
      Element); */
    
    function isElement(node) {
      var OwnElement = getWindow(node).Element;
      return node instanceof OwnElement || node instanceof Element;
    }
    /*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
      HTMLElement); */
    
    
    function isHTMLElement(node) {
      var OwnElement = getWindow(node).HTMLElement;
      return node instanceof OwnElement || node instanceof HTMLElement;
    }
    /*:: declare function isShadowRoot(node: mixed): boolean %checks(node instanceof
      ShadowRoot); */
    
    
    function isShadowRoot(node) {
      // IE 11 has no ShadowRoot
      if (typeof ShadowRoot === 'undefined') {
        return false;
      }
    
      var OwnElement = getWindow(node).ShadowRoot;
      return node instanceof OwnElement || node instanceof ShadowRoot;
    }
    
    
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
    function getHTMLElementScroll(element) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
    
    
    
    
    function getNodeScroll(node) {
      if (node === getWindow(node) || !isHTMLElement(node)) {
        return getWindowScroll(node);
      } else {
        return getHTMLElementScroll(node);
      }
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
    function getNodeName(element) {
      return element ? (element.nodeName || '').toLowerCase() : null;
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
    
    function getDocumentElement(element) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
      element.document) || window.document).documentElement;
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
    
    
    
    function getWindowScrollBarX(element) {
      // If <html> has a CSS width greater than the viewport, then this will be
      // incorrect for RTL.
      // Popper 1 is broken in this case and never had a bug report so let's assume
      // it's not an issue. I don't think anyone ever specifies width on <html>
      // anyway.
      // Browsers where the left scrollbar doesn't cause an issue report `0` for
      // this (e.g. Edge 2019, IE11, Safari)
      return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
    
    function getComputedStyle(element) {
      return getWindow(element).getComputedStyle(element);
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
    
    function isScrollParent(element) {
      // Firefox wants us to check `-x` and `-y` variations as well
      var _getComputedStyle = getComputedStyle(element),
          overflow = _getComputedStyle.overflow,
          overflowX = _getComputedStyle.overflowX,
          overflowY = _getComputedStyle.overflowY;
    
      return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
    
    
    
    
    
    
     // Returns the composite rect of an element relative to its offsetParent.
    // Composite means it takes into account transforms as well as layout.
    
    function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
      if (isFixed === void 0) {
        isFixed = false;
      }
    
      var documentElement = getDocumentElement(offsetParent);
      var rect = getBoundingClientRect(elementOrVirtualElement);
      var isOffsetParentAnElement = isHTMLElement(offsetParent);
      var scroll = {
        scrollLeft: 0,
        scrollTop: 0
      };
      var offsets = {
        x: 0,
        y: 0
      };
    
      if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
        isScrollParent(documentElement)) {
          scroll = getNodeScroll(offsetParent);
        }
    
        if (isHTMLElement(offsetParent)) {
          offsets = getBoundingClientRect(offsetParent);
          offsets.x += offsetParent.clientLeft;
          offsets.y += offsetParent.clientTop;
        } else if (documentElement) {
          offsets.x = getWindowScrollBarX(documentElement);
        }
      }
    
      return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
      };
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
     // Returns the layout rect of an element relative to its offsetParent. Layout
    // means it doesn't take into account transforms.
    
    function getLayoutRect(element) {
      var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
      // Fixes https://github.com/popperjs/popper-core/issues/1223
    
      var width = element.offsetWidth;
      var height = element.offsetHeight;
    
      if (Math.abs(clientRect.width - width) <= 0.5) {
        width = clientRect.width;
      }
    
      if (Math.abs(clientRect.height - height) <= 0.5) {
        height = clientRect.height;
      }
    
      return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
      };
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
    
    
    
    function getParentNode(element) {
      if (getNodeName(element) === 'html') {
        return element;
      }
    
      return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
        // $FlowFixMe[incompatible-return]
        // $FlowFixMe[prop-missing]
        element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
        element.parentNode || ( // DOM Element detected
        isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
        // $FlowFixMe[incompatible-call]: HTMLElement is a Node
        getDocumentElement(element) // fallback
    
      );
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
    
    
    
    
    function getScrollParent(node) {
      if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
        // $FlowFixMe[incompatible-return]: assume body is always available
        return node.ownerDocument.body;
      }
    
      if (isHTMLElement(node) && isScrollParent(node)) {
        return node;
      }
    
      return getScrollParent(getParentNode(node));
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
    
    
    
    
    /*
    given a DOM element, return the list of all scroll parents, up the list of ancesors
    until we get to the top window object. This list is what we attach scroll listeners
    to, because if any of these parent elements scroll, we'll need to re-calculate the
    reference element's position.
    */
    
    function listScrollParents(element, list) {
      var _element$ownerDocumen;
    
      if (list === void 0) {
        list = [];
      }
    
      var scrollParent = getScrollParent(element);
      var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
      var win = getWindow(scrollParent);
      var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
      var updatedList = list.concat(target);
      return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)));
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
    
    function isTableElement(element) {
      return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
    
    
    
    
    
    
    
    function getTrueOffsetParent(element) {
      if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
      getComputedStyle(element).position === 'fixed') {
        return null;
      }
    
      return element.offsetParent;
    } // `.offsetParent` reports `null` for fixed elements, while absolute elements
    // return the containing block
    
    
    function getContainingBlock(element) {
      var isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
      var currentNode = getParentNode(element);
    
      while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
        var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    
        if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].includes(css.willChange) || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
          return currentNode;
        } else {
          currentNode = currentNode.parentNode;
        }
      }
    
      return null;
    } // Gets the closest ancestor positioned element. Handles some edge cases,
    // such as table ancestors and cross browser bugs.
    
    
    function getOffsetParent(element) {
      var window = getWindow(element);
      var offsetParent = getTrueOffsetParent(element);
    
      while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
        offsetParent = getTrueOffsetParent(offsetParent);
      }
    
      if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
        return window;
      }
    
      return offsetParent || getContainingBlock(element) || window;
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
    var enums_top = 'top';
    var bottom = 'bottom';
    var right = 'right';
    var left = 'left';
    var auto = 'auto';
    var basePlacements = [enums_top, bottom, right, left];
    var start = 'start';
    var end = 'end';
    var enums_clippingParents = 'clippingParents';
    var viewport = 'viewport';
    var enums_popper = 'popper';
    var enums_reference = 'reference';
    var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
      return acc.concat([placement + "-" + start, placement + "-" + end]);
    }, []);
    var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
      return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
    }, []); // modifiers that need to read the DOM
    
    var beforeRead = 'beforeRead';
    var read = 'read';
    var afterRead = 'afterRead'; // pure-logic modifiers
    
    var beforeMain = 'beforeMain';
    var main = 'main';
    var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
    
    var beforeWrite = 'beforeWrite';
    var write = 'write';
    var afterWrite = 'afterWrite';
    var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
     // source: https://stackoverflow.com/questions/49875255
    
    function order(modifiers) {
      var map = new Map();
      var visited = new Set();
      var result = [];
      modifiers.forEach(function (modifier) {
        map.set(modifier.name, modifier);
      }); // On visiting object, check for its dependencies and visit them recursively
    
      function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function (dep) {
          if (!visited.has(dep)) {
            var depModifier = map.get(dep);
    
            if (depModifier) {
              sort(depModifier);
            }
          }
        });
        result.push(modifier);
      }
    
      modifiers.forEach(function (modifier) {
        if (!visited.has(modifier.name)) {
          // check for visited object
          sort(modifier);
        }
      });
      return result;
    }
    
    function orderModifiers(modifiers) {
      // order based on dependencies
      var orderedModifiers = order(modifiers); // order based on phase
    
      return modifierPhases.reduce(function (acc, phase) {
        return acc.concat(orderedModifiers.filter(function (modifier) {
          return modifier.phase === phase;
        }));
      }, []);
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/debounce.js
    function debounce(fn) {
      var pending;
      return function () {
        if (!pending) {
          pending = new Promise(function (resolve) {
            Promise.resolve().then(function () {
              pending = undefined;
              resolve(fn());
            });
          });
        }
    
        return pending;
      };
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergeByName.js
    function mergeByName(modifiers) {
      var merged = modifiers.reduce(function (merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
          options: Object.assign({}, existing.options, current.options),
          data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
      }, {}); // IE11 does not support Object.values
    
      return Object.keys(merged).map(function (key) {
        return merged[key];
      });
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
    var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
    var DEFAULT_OPTIONS = {
      placement: 'bottom',
      modifiers: [],
      strategy: 'absolute'
    };
    
    function areValidElements() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
    
      return !args.some(function (element) {
        return !(element && typeof element.getBoundingClientRect === 'function');
      });
    }
    
    function popperGenerator(generatorOptions) {
      if (generatorOptions === void 0) {
        generatorOptions = {};
      }
    
      var _generatorOptions = generatorOptions,
          _generatorOptions$def = _generatorOptions.defaultModifiers,
          defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
          _generatorOptions$def2 = _generatorOptions.defaultOptions,
          defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
      return function createPopper(reference, popper, options) {
        if (options === void 0) {
          options = defaultOptions;
        }
    
        var state = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
          modifiersData: {},
          elements: {
            reference: reference,
            popper: popper
          },
          attributes: {},
          styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
          state: state,
          setOptions: function setOptions(options) {
            cleanupModifierEffects();
            state.options = Object.assign({}, defaultOptions, state.options, options);
            state.scrollParents = {
              reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
              popper: listScrollParents(popper)
            }; // Orders the modifiers based on their dependencies and `phase`
            // properties
    
            var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
    
            state.orderedModifiers = orderedModifiers.filter(function (m) {
              return m.enabled;
            }); // Validate the provided modifiers so that the consumer will get warned
            // if one of the modifiers is invalid for any reason
    
            if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }
    
            runModifierEffects();
            return instance.update();
          },
          // Sync update – it will always be executed, even if not necessary. This
          // is useful for low frequency updates where sync behavior simplifies the
          // logic.
          // For high frequency updates (e.g. `resize` and `scroll` events), always
          // prefer the async Popper#update method
          forceUpdate: function forceUpdate() {
            if (isDestroyed) {
              return;
            }
    
            var _state$elements = state.elements,
                reference = _state$elements.reference,
                popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
            // anymore
    
            if (!areValidElements(reference, popper)) {
              if (false) {}
    
              return;
            } // Store the reference and popper rects to be read by modifiers
    
    
            state.rects = {
              reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
              popper: getLayoutRect(popper)
            }; // Modifiers have the ability to reset the current update cycle. The
            // most common use case for this is the `flip` modifier changing the
            // placement, which then needs to re-run all the modifiers, because the
            // logic was previously ran for the previous placement and is therefore
            // stale/incorrect
    
            state.reset = false;
            state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
            // is filled with the initial data specified by the modifier. This means
            // it doesn't persist and is fresh on each update.
            // To ensure persistent data, use `${name}#persistent`
    
            state.orderedModifiers.forEach(function (modifier) {
              return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
            });
            var __debug_loops__ = 0;
    
            for (var index = 0; index < state.orderedModifiers.length; index++) {
              if (false) {}
    
              if (state.reset === true) {
                state.reset = false;
                index = -1;
                continue;
              }
    
              var _state$orderedModifie = state.orderedModifiers[index],
                  fn = _state$orderedModifie.fn,
                  _state$orderedModifie2 = _state$orderedModifie.options,
                  _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                  name = _state$orderedModifie.name;
    
              if (typeof fn === 'function') {
                state = fn({
                  state: state,
                  options: _options,
                  name: name,
                  instance: instance
                }) || state;
              }
            }
          },
          // Async and optimistically optimized update – it will not be executed if
          // not necessary (debounced to run at most once-per-tick)
          update: debounce(function () {
            return new Promise(function (resolve) {
              instance.forceUpdate();
              resolve(state);
            });
          }),
          destroy: function destroy() {
            cleanupModifierEffects();
            isDestroyed = true;
          }
        };
    
        if (!areValidElements(reference, popper)) {
          if (false) {}
    
          return instance;
        }
    
        instance.setOptions(options).then(function (state) {
          if (!isDestroyed && options.onFirstUpdate) {
            options.onFirstUpdate(state);
          }
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
    
        function runModifierEffects() {
          state.orderedModifiers.forEach(function (_ref3) {
            var name = _ref3.name,
                _ref3$options = _ref3.options,
                options = _ref3$options === void 0 ? {} : _ref3$options,
                effect = _ref3.effect;
    
            if (typeof effect === 'function') {
              var cleanupFn = effect({
                state: state,
                name: name,
                instance: instance,
                options: options
              });
    
              var noopFn = function noopFn() {};
    
              effectCleanupFns.push(cleanupFn || noopFn);
            }
          });
        }
    
        function cleanupModifierEffects() {
          effectCleanupFns.forEach(function (fn) {
            return fn();
          });
          effectCleanupFns = [];
        }
    
        return instance;
      };
    }
    var createPopper_createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules
    
    
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
     // eslint-disable-next-line import/no-unused-modules
    
    var passive = {
      passive: true
    };
    
    function effect(_ref) {
      var state = _ref.state,
          instance = _ref.instance,
          options = _ref.options;
      var _options$scroll = options.scroll,
          scroll = _options$scroll === void 0 ? true : _options$scroll,
          _options$resize = options.resize,
          resize = _options$resize === void 0 ? true : _options$resize;
      var window = getWindow(state.elements.popper);
      var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.addEventListener('scroll', instance.update, passive);
        });
      }
    
      if (resize) {
        window.addEventListener('resize', instance.update, passive);
      }
    
      return function () {
        if (scroll) {
          scrollParents.forEach(function (scrollParent) {
            scrollParent.removeEventListener('scroll', instance.update, passive);
          });
        }
    
        if (resize) {
          window.removeEventListener('resize', instance.update, passive);
        }
      };
    } // eslint-disable-next-line import/no-unused-modules
    
    
    /* harmony default export */ var eventListeners = ({
      name: 'eventListeners',
      enabled: true,
      phase: 'write',
      fn: function fn() {},
      effect: effect,
      data: {}
    });
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js
    
    function getBasePlacement(placement) {
      return placement.split('-')[0];
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
    function getVariation(placement) {
      return placement.split('-')[1];
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
    function getMainAxisFromPlacement(placement) {
      return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js
    
    
    
    
    function computeOffsets(_ref) {
      var reference = _ref.reference,
          element = _ref.element,
          placement = _ref.placement;
      var basePlacement = placement ? getBasePlacement(placement) : null;
      var variation = placement ? getVariation(placement) : null;
      var commonX = reference.x + reference.width / 2 - element.width / 2;
      var commonY = reference.y + reference.height / 2 - element.height / 2;
      var offsets;
    
      switch (basePlacement) {
        case enums_top:
          offsets = {
            x: commonX,
            y: reference.y - element.height
          };
          break;
    
        case bottom:
          offsets = {
            x: commonX,
            y: reference.y + reference.height
          };
          break;
    
        case right:
          offsets = {
            x: reference.x + reference.width,
            y: commonY
          };
          break;
    
        case left:
          offsets = {
            x: reference.x - element.width,
            y: commonY
          };
          break;
    
        default:
          offsets = {
            x: reference.x,
            y: reference.y
          };
      }
    
      var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    
      if (mainAxis != null) {
        var len = mainAxis === 'y' ? 'height' : 'width';
    
        switch (variation) {
          case start:
            offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
            break;
    
          case end:
            offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
            break;
    
          default:
        }
      }
    
      return offsets;
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
    
    
    function popperOffsets_popperOffsets(_ref) {
      var state = _ref.state,
          name = _ref.name;
      // Offsets are the actual position the popper needs to have to be
      // properly positioned near its reference element
      // This is the most basic placement, and will be adjusted by
      // the modifiers in the next step
      state.modifiersData[name] = computeOffsets({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
      });
    } // eslint-disable-next-line import/no-unused-modules
    
    
    /* harmony default export */ var modifiers_popperOffsets = ({
      name: 'popperOffsets',
      enabled: true,
      phase: 'read',
      fn: popperOffsets_popperOffsets,
      data: {}
    });
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/math.js
    var math_max = Math.max;
    var math_min = Math.min;
    var round = Math.round;
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js
    
    
    
    
    
    
     // eslint-disable-next-line import/no-unused-modules
    
    var unsetSides = {
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto'
    }; // Round the offsets to the nearest suitable subpixel based on the DPR.
    // Zooming can change the DPR, but it seems to report a value that will
    // cleanly divide the values into the appropriate subpixels.
    
    function roundOffsetsByDPR(_ref) {
      var x = _ref.x,
          y = _ref.y;
      var win = window;
      var dpr = win.devicePixelRatio || 1;
      return {
        x: round(round(x * dpr) / dpr) || 0,
        y: round(round(y * dpr) / dpr) || 0
      };
    }
    
    function mapToStyles(_ref2) {
      var _Object$assign2;
    
      var popper = _ref2.popper,
          popperRect = _ref2.popperRect,
          placement = _ref2.placement,
          offsets = _ref2.offsets,
          position = _ref2.position,
          gpuAcceleration = _ref2.gpuAcceleration,
          adaptive = _ref2.adaptive,
          roundOffsets = _ref2.roundOffsets;
    
      var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
          _ref3$x = _ref3.x,
          x = _ref3$x === void 0 ? 0 : _ref3$x,
          _ref3$y = _ref3.y,
          y = _ref3$y === void 0 ? 0 : _ref3$y;
    
      var hasX = offsets.hasOwnProperty('x');
      var hasY = offsets.hasOwnProperty('y');
      var sideX = left;
      var sideY = enums_top;
      var win = window;
    
      if (adaptive) {
        var offsetParent = getOffsetParent(popper);
        var heightProp = 'clientHeight';
        var widthProp = 'clientWidth';
    
        if (offsetParent === getWindow(popper)) {
          offsetParent = getDocumentElement(popper);
    
          if (getComputedStyle(offsetParent).position !== 'static') {
            heightProp = 'scrollHeight';
            widthProp = 'scrollWidth';
          }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
    
        /*:: offsetParent = (offsetParent: Element); */
    
    
        if (placement === enums_top) {
          sideY = bottom; // $FlowFixMe[prop-missing]
    
          y -= offsetParent[heightProp] - popperRect.height;
          y *= gpuAcceleration ? 1 : -1;
        }
    
        if (placement === left) {
          sideX = right; // $FlowFixMe[prop-missing]
    
          x -= offsetParent[widthProp] - popperRect.width;
          x *= gpuAcceleration ? 1 : -1;
        }
      }
    
      var commonStyles = Object.assign({
        position: position
      }, adaptive && unsetSides);
    
      if (gpuAcceleration) {
        var _Object$assign;
    
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
      }
    
      return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
    }
    
    function computeStyles(_ref4) {
      var state = _ref4.state,
          options = _ref4.options;
      var _options$gpuAccelerat = options.gpuAcceleration,
          gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
          _options$adaptive = options.adaptive,
          adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
          _options$roundOffsets = options.roundOffsets,
          roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    
      if (false) { var transitionProperty; }
    
      var commonStyles = {
        placement: getBasePlacement(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration
      };
    
      if (state.modifiersData.popperOffsets != null) {
        state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.popperOffsets,
          position: state.options.strategy,
          adaptive: adaptive,
          roundOffsets: roundOffsets
        })));
      }
    
      if (state.modifiersData.arrow != null) {
        state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.arrow,
          position: 'absolute',
          adaptive: false,
          roundOffsets: roundOffsets
        })));
      }
    
      state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-placement': state.placement
      });
    } // eslint-disable-next-line import/no-unused-modules
    
    
    /* harmony default export */ var modifiers_computeStyles = ({
      name: 'computeStyles',
      enabled: true,
      phase: 'beforeWrite',
      fn: computeStyles,
      data: {}
    });
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js
    
     // This modifier takes the styles prepared by the `computeStyles` modifier
    // and applies them to the HTMLElements such as popper and arrow
    
    function applyStyles(_ref) {
      var state = _ref.state;
      Object.keys(state.elements).forEach(function (name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
    
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        } // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
    
    
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (name) {
          var value = attributes[name];
    
          if (value === false) {
            element.removeAttribute(name);
          } else {
            element.setAttribute(name, value === true ? '' : value);
          }
        });
      });
    }
    
    function applyStyles_effect(_ref2) {
      var state = _ref2.state;
      var initialStyles = {
        popper: {
          position: state.options.strategy,
          left: '0',
          top: '0',
          margin: '0'
        },
        arrow: {
          position: 'absolute'
        },
        reference: {}
      };
      Object.assign(state.elements.popper.style, initialStyles.popper);
      state.styles = initialStyles;
    
      if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
      }
    
      return function () {
        Object.keys(state.elements).forEach(function (name) {
          var element = state.elements[name];
          var attributes = state.attributes[name] || {};
          var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
    
          var style = styleProperties.reduce(function (style, property) {
            style[property] = '';
            return style;
          }, {}); // arrow is optional + virtual elements
    
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
    
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function (attribute) {
            element.removeAttribute(attribute);
          });
        });
      };
    } // eslint-disable-next-line import/no-unused-modules
    
    
    /* harmony default export */ var modifiers_applyStyles = ({
      name: 'applyStyles',
      enabled: true,
      phase: 'write',
      fn: applyStyles,
      effect: applyStyles_effect,
      requires: ['computeStyles']
    });
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js
    
    
    function distanceAndSkiddingToXY(placement, rects, offset) {
      var basePlacement = getBasePlacement(placement);
      var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;
    
      var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
        placement: placement
      })) : offset,
          skidding = _ref[0],
          distance = _ref[1];
    
      skidding = skidding || 0;
      distance = (distance || 0) * invertDistance;
      return [left, right].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
      } : {
        x: skidding,
        y: distance
      };
    }
    
    function offset_offset(_ref2) {
      var state = _ref2.state,
          options = _ref2.options,
          name = _ref2.name;
      var _options$offset = options.offset,
          offset = _options$offset === void 0 ? [0, 0] : _options$offset;
      var data = enums_placements.reduce(function (acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
      }, {});
      var _data$state$placement = data[state.placement],
          x = _data$state$placement.x,
          y = _data$state$placement.y;
    
      if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
      }
    
      state.modifiersData[name] = data;
    } // eslint-disable-next-line import/no-unused-modules
    
    
    /* harmony default export */ var modifiers_offset = ({
      name: 'offset',
      enabled: true,
      phase: 'main',
      requires: ['popperOffsets'],
      fn: offset_offset
    });
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
    var hash = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    function getOppositePlacement(placement) {
      return placement.replace(/left|right|bottom|top/g, function (matched) {
        return hash[matched];
      });
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
    var getOppositeVariationPlacement_hash = {
      start: 'end',
      end: 'start'
    };
    function getOppositeVariationPlacement(placement) {
      return placement.replace(/start|end/g, function (matched) {
        return getOppositeVariationPlacement_hash[matched];
      });
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
    
    
    
    function getViewportRect(element) {
      var win = getWindow(element);
      var html = getDocumentElement(element);
      var visualViewport = win.visualViewport;
      var width = html.clientWidth;
      var height = html.clientHeight;
      var x = 0;
      var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
      // can be obscured underneath it.
      // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
      // if it isn't open, so if this isn't available, the popper will be detected
      // to overflow the bottom of the screen too early.
    
      if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
        // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
        // errors due to floating point numbers, so we need to check precision.
        // Safari returns a number <= 0, usually < -1 when pinch-zoomed
        // Feature detection fails in mobile emulation mode in Chrome.
        // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
        // 0.001
        // Fallback here: "Not Safari" userAgent
    
        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
          x = visualViewport.offsetLeft;
          y = visualViewport.offsetTop;
        }
      }
    
      return {
        width: width,
        height: height,
        x: x + getWindowScrollBarX(element),
        y: y
      };
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
    
    
    
    
     // Gets the entire size of the scrollable document area, even extending outside
    // of the `<html>` and `<body>` rect bounds if horizontally scrollable
    
    function getDocumentRect(element) {
      var _element$ownerDocumen;
    
      var html = getDocumentElement(element);
      var winScroll = getWindowScroll(element);
      var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
      var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
      var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
      var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
      var y = -winScroll.scrollTop;
    
      if (getComputedStyle(body || html).direction === 'rtl') {
        x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
      }
    
      return {
        width: width,
        height: height,
        x: x,
        y: y
      };
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js
    
    function contains(parent, child) {
      var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    
      if (parent.contains(child)) {
        return true;
      } // then fallback to custom implementation with Shadow DOM support
      else if (rootNode && isShadowRoot(rootNode)) {
          var next = child;
    
          do {
            if (next && parent.isSameNode(next)) {
              return true;
            } // $FlowFixMe[prop-missing]: need a better way to handle this...
    
    
            next = next.parentNode || next.host;
          } while (next);
        } // Give up, the result is false
    
    
      return false;
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
    function rectToClientRect(rect) {
      return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
      });
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function getInnerBoundingClientRect(element) {
      var rect = getBoundingClientRect(element);
      rect.top = rect.top + element.clientTop;
      rect.left = rect.left + element.clientLeft;
      rect.bottom = rect.top + element.clientHeight;
      rect.right = rect.left + element.clientWidth;
      rect.width = element.clientWidth;
      rect.height = element.clientHeight;
      rect.x = rect.left;
      rect.y = rect.top;
      return rect;
    }
    
    function getClientRectFromMixedType(element, clippingParent) {
      return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
    } // A "clipping parent" is an overflowable container with the characteristic of
    // clipping (or hiding) overflowing elements with a position different from
    // `initial`
    
    
    function getClippingParents(element) {
      var clippingParents = listScrollParents(getParentNode(element));
      var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
      var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    
      if (!isElement(clipperElement)) {
        return [];
      } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    
    
      return clippingParents.filter(function (clippingParent) {
        return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
      });
    } // Gets the maximum area that the element is visible in due to any number of
    // clipping parents
    
    
    function getClippingRect(element, boundary, rootBoundary) {
      var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
      var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
      var firstClippingParent = clippingParents[0];
      var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent);
        accRect.top = math_max(rect.top, accRect.top);
        accRect.right = math_min(rect.right, accRect.right);
        accRect.bottom = math_min(rect.bottom, accRect.bottom);
        accRect.left = math_max(rect.left, accRect.left);
        return accRect;
      }, getClientRectFromMixedType(element, firstClippingParent));
      clippingRect.width = clippingRect.right - clippingRect.left;
      clippingRect.height = clippingRect.bottom - clippingRect.top;
      clippingRect.x = clippingRect.left;
      clippingRect.y = clippingRect.top;
      return clippingRect;
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
    function getFreshSideObject() {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
    
    function mergePaddingObject(paddingObject) {
      return Object.assign({}, getFreshSideObject(), paddingObject);
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
    function expandToHashMap(value, keys) {
      return keys.reduce(function (hashMap, key) {
        hashMap[key] = value;
        return hashMap;
      }, {});
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js
    
    
    
    
    
    
    
    
     // eslint-disable-next-line import/no-unused-modules
    
    function detectOverflow(state, options) {
      if (options === void 0) {
        options = {};
      }
    
      var _options = options,
          _options$placement = _options.placement,
          placement = _options$placement === void 0 ? state.placement : _options$placement,
          _options$boundary = _options.boundary,
          boundary = _options$boundary === void 0 ? enums_clippingParents : _options$boundary,
          _options$rootBoundary = _options.rootBoundary,
          rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
          _options$elementConte = _options.elementContext,
          elementContext = _options$elementConte === void 0 ? enums_popper : _options$elementConte,
          _options$altBoundary = _options.altBoundary,
          altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
          _options$padding = _options.padding,
          padding = _options$padding === void 0 ? 0 : _options$padding;
      var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
      var altContext = elementContext === enums_popper ? enums_reference : enums_popper;
      var referenceElement = state.elements.reference;
      var popperRect = state.rects.popper;
      var element = state.elements[altBoundary ? altContext : elementContext];
      var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
      var referenceClientRect = getBoundingClientRect(referenceElement);
      var popperOffsets = computeOffsets({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement: placement
      });
      var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
      var elementClientRect = elementContext === enums_popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
      // 0 or negative = within the clipping rect
    
      var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
      };
      var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    
      if (elementContext === enums_popper && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function (key) {
          var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
          var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
          overflowOffsets[key] += offset[axis] * multiply;
        });
      }
    
      return overflowOffsets;
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
    
    
    
    
    
    /*:: type OverflowsMap = { [ComputedPlacement]: number }; */
    
    /*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
    function computeAutoPlacement(state, options) {
      if (options === void 0) {
        options = {};
      }
    
      var _options = options,
          placement = _options.placement,
          boundary = _options.boundary,
          rootBoundary = _options.rootBoundary,
          padding = _options.padding,
          flipVariations = _options.flipVariations,
          _options$allowedAutoP = _options.allowedAutoPlacements,
          allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
      var variation = getVariation(placement);
      var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
        return getVariation(placement) === variation;
      }) : basePlacements;
      var allowedPlacements = placements.filter(function (placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
      });
    
      if (allowedPlacements.length === 0) {
        allowedPlacements = placements;
    
        if (false) {}
      } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    
    
      var overflows = allowedPlacements.reduce(function (acc, placement) {
        acc[placement] = detectOverflow(state, {
          placement: placement,
          boundary: boundary,
          rootBoundary: rootBoundary,
          padding: padding
        })[getBasePlacement(placement)];
        return acc;
      }, {});
      return Object.keys(overflows).sort(function (a, b) {
        return overflows[a] - overflows[b];
      });
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js
    
    
    
    
    
    
     // eslint-disable-next-line import/no-unused-modules
    
    function getExpandedFallbackPlacements(placement) {
      if (getBasePlacement(placement) === auto) {
        return [];
      }
    
      var oppositePlacement = getOppositePlacement(placement);
      return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
    }
    
    function flip(_ref) {
      var state = _ref.state,
          options = _ref.options,
          name = _ref.name;
    
      if (state.modifiersData[name]._skip) {
        return;
      }
    
      var _options$mainAxis = options.mainAxis,
          checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
          _options$altAxis = options.altAxis,
          checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
          specifiedFallbackPlacements = options.fallbackPlacements,
          padding = options.padding,
          boundary = options.boundary,
          rootBoundary = options.rootBoundary,
          altBoundary = options.altBoundary,
          _options$flipVariatio = options.flipVariations,
          flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
          allowedAutoPlacements = options.allowedAutoPlacements;
      var preferredPlacement = state.options.placement;
      var basePlacement = getBasePlacement(preferredPlacement);
      var isBasePlacement = basePlacement === preferredPlacement;
      var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
      var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
        return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
          placement: placement,
          boundary: boundary,
          rootBoundary: rootBoundary,
          padding: padding,
          flipVariations: flipVariations,
          allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
      }, []);
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var checksMap = new Map();
      var makeFallbackChecks = true;
      var firstFittingPlacement = placements[0];
    
      for (var i = 0; i < placements.length; i++) {
        var placement = placements[i];
    
        var _basePlacement = getBasePlacement(placement);
    
        var isStartVariation = getVariation(placement) === start;
        var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
        var len = isVertical ? 'width' : 'height';
        var overflow = detectOverflow(state, {
          placement: placement,
          boundary: boundary,
          rootBoundary: rootBoundary,
          altBoundary: altBoundary,
          padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;
    
        if (referenceRect[len] > popperRect[len]) {
          mainVariationSide = getOppositePlacement(mainVariationSide);
        }
    
        var altVariationSide = getOppositePlacement(mainVariationSide);
        var checks = [];
    
        if (checkMainAxis) {
          checks.push(overflow[_basePlacement] <= 0);
        }
    
        if (checkAltAxis) {
          checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        }
    
        if (checks.every(function (check) {
          return check;
        })) {
          firstFittingPlacement = placement;
          makeFallbackChecks = false;
          break;
        }
    
        checksMap.set(placement, checks);
      }
    
      if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
    
        var _loop = function _loop(_i) {
          var fittingPlacement = placements.find(function (placement) {
            var checks = checksMap.get(placement);
    
            if (checks) {
              return checks.slice(0, _i).every(function (check) {
                return check;
              });
            }
          });
    
          if (fittingPlacement) {
            firstFittingPlacement = fittingPlacement;
            return "break";
          }
        };
    
        for (var _i = numberOfChecks; _i > 0; _i--) {
          var _ret = _loop(_i);
    
          if (_ret === "break") break;
        }
      }
    
      if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
      }
    } // eslint-disable-next-line import/no-unused-modules
    
    
    /* harmony default export */ var modifiers_flip = ({
      name: 'flip',
      enabled: true,
      phase: 'main',
      fn: flip,
      requiresIfExists: ['offset'],
      data: {
        _skip: false
      }
    });
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
    function getAltAxis(axis) {
      return axis === 'x' ? 'y' : 'x';
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js
    
    function within(min, value, max) {
      return math_max(min, math_min(value, max));
    }
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
    
    
    
    
    
    
    
    
    
    
    
    
    function preventOverflow(_ref) {
      var state = _ref.state,
          options = _ref.options,
          name = _ref.name;
      var _options$mainAxis = options.mainAxis,
          checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
          _options$altAxis = options.altAxis,
          checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
          boundary = options.boundary,
          rootBoundary = options.rootBoundary,
          altBoundary = options.altBoundary,
          padding = options.padding,
          _options$tether = options.tether,
          tether = _options$tether === void 0 ? true : _options$tether,
          _options$tetherOffset = options.tetherOffset,
          tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
      var overflow = detectOverflow(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
      });
      var basePlacement = getBasePlacement(state.placement);
      var variation = getVariation(state.placement);
      var isBasePlacement = !variation;
      var mainAxis = getMainAxisFromPlacement(basePlacement);
      var altAxis = getAltAxis(mainAxis);
      var popperOffsets = state.modifiersData.popperOffsets;
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
      })) : tetherOffset;
      var data = {
        x: 0,
        y: 0
      };
    
      if (!popperOffsets) {
        return;
      }
    
      if (checkMainAxis || checkAltAxis) {
        var mainSide = mainAxis === 'y' ? enums_top : left;
        var altSide = mainAxis === 'y' ? bottom : right;
        var len = mainAxis === 'y' ? 'height' : 'width';
        var offset = popperOffsets[mainAxis];
        var min = popperOffsets[mainAxis] + overflow[mainSide];
        var max = popperOffsets[mainAxis] - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
    
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
          width: 0,
          height: 0
        };
        var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
    
        var arrowLen = within(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
        var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
        var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    
        if (checkMainAxis) {
          var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
          popperOffsets[mainAxis] = preventedOffset;
          data[mainAxis] = preventedOffset - offset;
        }
    
        if (checkAltAxis) {
          var _mainSide = mainAxis === 'x' ? enums_top : left;
    
          var _altSide = mainAxis === 'x' ? bottom : right;
    
          var _offset = popperOffsets[altAxis];
    
          var _min = _offset + overflow[_mainSide];
    
          var _max = _offset - overflow[_altSide];
    
          var _preventedOffset = within(tether ? math_min(_min, tetherMin) : _min, _offset, tether ? math_max(_max, tetherMax) : _max);
    
          popperOffsets[altAxis] = _preventedOffset;
          data[altAxis] = _preventedOffset - _offset;
        }
      }
    
      state.modifiersData[name] = data;
    } // eslint-disable-next-line import/no-unused-modules
    
    
    /* harmony default export */ var modifiers_preventOverflow = ({
      name: 'preventOverflow',
      enabled: true,
      phase: 'main',
      fn: preventOverflow,
      requiresIfExists: ['offset']
    });
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js
    
    
    
    
    
    
    
    
    
     // eslint-disable-next-line import/no-unused-modules
    
    var arrow_toPaddingObject = function toPaddingObject(padding, state) {
      padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
        placement: state.placement
      })) : padding;
      return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    };
    
    function arrow(_ref) {
      var _state$modifiersData$;
    
      var state = _ref.state,
          name = _ref.name,
          options = _ref.options;
      var arrowElement = state.elements.arrow;
      var popperOffsets = state.modifiersData.popperOffsets;
      var basePlacement = getBasePlacement(state.placement);
      var axis = getMainAxisFromPlacement(basePlacement);
      var isVertical = [left, right].indexOf(basePlacement) >= 0;
      var len = isVertical ? 'height' : 'width';
    
      if (!arrowElement || !popperOffsets) {
        return;
      }
    
      var paddingObject = arrow_toPaddingObject(options.padding, state);
      var arrowRect = getLayoutRect(arrowElement);
      var minProp = axis === 'y' ? enums_top : left;
      var maxProp = axis === 'y' ? bottom : right;
      var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
      var startDiff = popperOffsets[axis] - state.rects.reference[axis];
      var arrowOffsetParent = getOffsetParent(arrowElement);
      var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
      var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
      // outside of the popper bounds
    
      var min = paddingObject[minProp];
      var max = clientSize - arrowRect[len] - paddingObject[maxProp];
      var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
      var offset = within(min, center, max); // Prevents breaking syntax highlighting...
    
      var axisProp = axis;
      state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
    }
    
    function arrow_effect(_ref2) {
      var state = _ref2.state,
          options = _ref2.options;
      var _options$element = options.element,
          arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
    
      if (arrowElement == null) {
        return;
      } // CSS selector
    
    
      if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);
    
        if (!arrowElement) {
          return;
        }
      }
    
      if (false) {}
    
      if (!contains(state.elements.popper, arrowElement)) {
        if (false) {}
    
        return;
      }
    
      state.elements.arrow = arrowElement;
    } // eslint-disable-next-line import/no-unused-modules
    
    
    /* harmony default export */ var modifiers_arrow = ({
      name: 'arrow',
      enabled: true,
      phase: 'main',
      fn: arrow,
      effect: arrow_effect,
      requires: ['popperOffsets'],
      requiresIfExists: ['preventOverflow']
    });
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js
    
    
    
    function getSideOffsets(overflow, rect, preventedOffsets) {
      if (preventedOffsets === void 0) {
        preventedOffsets = {
          x: 0,
          y: 0
        };
      }
    
      return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
      };
    }
    
    function isAnySideFullyClipped(overflow) {
      return [enums_top, right, bottom, left].some(function (side) {
        return overflow[side] >= 0;
      });
    }
    
    function hide(_ref) {
      var state = _ref.state,
          name = _ref.name;
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var preventedOffsets = state.modifiersData.preventOverflow;
      var referenceOverflow = detectOverflow(state, {
        elementContext: 'reference'
      });
      var popperAltOverflow = detectOverflow(state, {
        altBoundary: true
      });
      var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
      var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
      var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
      var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
      state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
      };
      state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-reference-hidden': isReferenceHidden,
        'data-popper-escaped': hasPopperEscaped
      });
    } // eslint-disable-next-line import/no-unused-modules
    
    
    /* harmony default export */ var modifiers_hide = ({
      name: 'hide',
      enabled: true,
      phase: 'main',
      requiresIfExists: ['preventOverflow'],
      fn: hide
    });
    // CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper.js
    
    
    
    
    
    
    
    
    
    
    var popper_defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
    var popper_createPopper = /*#__PURE__*/popperGenerator({
      defaultModifiers: popper_defaultModifiers
    }); // eslint-disable-next-line import/no-unused-modules
    
     // eslint-disable-next-line import/no-unused-modules
    
     // eslint-disable-next-line import/no-unused-modules
    
    
    // CONCATENATED MODULE: ./src/components/tooltip/tooltip.js
    
    class tooltip_BRTooltip {
      constructor(name, component) {
        this.name = name
        this.component = component
        this.activator = component.previousSibling.previousSibling
        const place = component.getAttribute('place')
        const positions = ['top', 'right', 'bottom', 'left']
        this.popover = component.hasAttribute('popover')
        this.notification = component.classList.contains('br-notification')
        this.timer = component.getAttribute('timer')
        this.active = component.hasAttribute('active')
        this.placement = positions.includes(place)
          ? place
          : this.notification
          ? 'bottom'
          : 'top'
        this.popperInstance = null
        this.showEvents = ['mouseenter', 'click', 'focus']
        this.hideEvents = ['mouseleave', 'blur']
        this.closeTimer = null
        this._create()
        this._setBehavior()
      }
    
      _setBehavior() {
        // Ação de abrir padrao ao entrar no ativador
        if (this.activator) {
          // if (this.notification) {
          //   this.activator.addEventListener('click', (otherEvent) => {
          //     if (this.activator.hasAttribute('active')) {
          //       this._hide(otherEvent, this.component)
          //     } else {
          //       this._show(otherEvent)
          //     }
          //     this._toggleActivatorIcon()
          //   })
          // } else {
          this.showEvents.forEach((event) => {
            this.activator.addEventListener(event, (otherEvent) => {
              this._show(otherEvent)
            })
          })
          // }
        }
        // Adiciona ação de fechar ao botao do popover
        // if (this.popover || this.notification) {
        if (this.popover) {
          const closeBtn = this.component.querySelector('.close')
          closeBtn.addEventListener('click', (event) => {
            this._hide(event, this.component)
            this._toggleActivatorIcon()
          })
          // Ação de fechar padrao ao sair do ativador
        } else {
          this.hideEvents.forEach((event) => {
            this.activator.addEventListener(event, (otherEvent) => {
              this._hide(otherEvent, this.component)
            })
          })
        }
        // Abre os elementos que devem aparecer já ativos
        // if (this.active) {
        //   this._show(event)
        // }
      }
    
      _create() {
        this._setLayout()
        // Cria a instancia do popper
        if (this.notification) {
          // console.log(this.activator.parentNode)
          this.component.setAttribute('notification', '')
          this.popperInstance = popper_createPopper(this.activator, this.component, {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 10],
                },
              },
              {
                name: 'preventOverflow',
                options: {
                  altAxis: false, // false by default
                  mainAxis: true, // true by default
                  // rootBoundary: 'body',
                },
              },
            ],
            // placement: this.placement,
            placement: 'bottom',
            strategy: 'fixed',
          })
        } else {
          const ac = this.activator.getBoundingClientRect()
          const tt = this.component.getBoundingClientRect()
          const bw = document.body.clientWidth
          // console.log('width: ', bw, ' ac: ', ac, ' tt: ', tt)
          // console.log(ac.x + ac.width + tt.width)
          if (this.placement === 'right') {
            this.placement =
              ac.x + ac.width + tt.width > bw ? 'top' : this.placement
          }
          if (this.placement === 'left') {
            this.placement = ac.x - tt.width > 0 ? this.placement : 'top'
          }
          this.popperInstance = popper_createPopper(this.activator, this.component, {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 8],
                },
              },
              {
                name: 'preventOverflow',
                options: {
                  altAxis: true, // false by default
                  // boundary: 'body',
                  mainAxis: true, // true by default
                  // rootBoundary: 'document',
                  tether: false, // true by default
                },
              },
            ],
            placement: this.placement,
          })
        }
      }
    
      _show(event) {
        this.component.style.display = 'unset'
        this.component.setAttribute('data-show', '')
        this.component.style.zIndex = 99
        this._fixPosition()
        // Importante pois "display: none" conflitua com a instancia do componente e precisa ser setado aqui já que pelo css ativa o efeito fade no primeiro carregamento
        this.component.style.visibility = 'visible'
        if (this.timer) {
          clearTimeout(this.closeTimer)
          this.closeTimer = setTimeout(
            this._hide,
            this.timer,
            event,
            this.component
          )
        }
      }
    
      _hide(event, component) {
        component.removeAttribute('data-show')
        component.style.zIndex = -1
        component.style.visibility = 'hidden'
        clearTimeout(component.closeTimer)
      }
    
      _setLayout() {
        // Cria a setinha que aponta para o item que criou o tooltip
        const arrow = document.createElement('div')
        arrow.setAttribute('data-popper-arrow', '')
        arrow.classList.add('arrow')
        this.component.appendChild(arrow)
        // Cria o icone de fechar do po over
        if (this.popover) {
          const close = document.createElement('button')
          close.setAttribute('type', 'button')
          close.classList.add('close')
          const ico = document.createElement('i')
          ico.classList.add('fas', 'fa-times')
          close.appendChild(ico)
          this.component.appendChild(close)
        }
      }
    
      _toggleActivatorIcon() {
        const icon = this.activator.querySelector('button svg')
        if (icon) {
          icon.classList.toggle('fa-angle-down')
          icon.classList.toggle('fa-angle-up')
        }
        this.activator.toggleAttribute('active')
      }
    
      _fixPosition() {
        if (this.notification) {
          setTimeout(() => {
            const ac = this.activator.getBoundingClientRect()
            this.component.style = `position: fixed !important; top: ${
              ac.top + ac.height + 10
            }px !important; left: auto; right: 8px; display: unset; bottom: auto;`
            this.component.querySelector(
              '.arrow'
            ).style = `position: absolute; left: auto; right: ${
              document.body.clientWidth - ac.right + ac.width / 5
            }px !important;`
          }, 10)
        }
      }
    }
    const tooltipList = []
    for (const brTooltip of window.document.querySelectorAll('.br-tooltip')) {
      tooltipList.push(new tooltip_BRTooltip('br-tooltip', brTooltip))
    }
    /* harmony default export */ var tooltip = __webpack_exports__["default"] = (tooltip_BRTooltip);
    
    
    /***/ }),
    /* 3 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BRList {
      constructor(name, component) {
        this.name = name
        this.component = component
        this.collapsible = this.name === 'br-list-collapsible'
        this.checkable = this.name === 'br-list-checkable'
        this.unique = component.hasAttribute('data-unique')
        this.cols = this.horizontal ? component.querySelectorAll('.col') : []
        this.itens = component.querySelectorAll(':scope > .br-item')
        // suporte a colunas do bootstrap dentro da lista
        if (this.itens.length === 0)
          this.itens = component.querySelectorAll('div > .br-item')
        this._setBehavior()
      }
    
      _setBehavior() {
        if (this.collapsible) {
          this._closeAllItens()
          this.itens.forEach((item) => {
            item.addEventListener('click', (event) => {
              this._toggle(event, item)
            })
          })
        }
        if (this.checkable) {
          this.itens.forEach((item) => {
            this._setSelected(item)
            if (!item.classList.contains('disabled')) {
              item
                .querySelector('.br-checkbox > input')
                .addEventListener('click', (event) => {
                  if (event.target.getAttribute('type') === 'checkbox') {
                    this._check(event, item)
                  }
                })
            }
          })
        }
        if (this.cols.length > 0) {
          const n = this.cols.length
          const pos = n > 6 && n % 2 === 1 ? n + 1 : n
          const resto = pos / Math.ceil(pos / 6)
          const equal = 100 / resto
          this.cols.forEach((col) => {
            col.style.flexBasis = `${equal}%`
          })
        }
      }
    
      _toggle(event, item) {
        if (!item.classList.contains('open')) {
          if (this.unique) this._closeAllItens()
        }
        if (item.classList.contains('open')) {
          item.classList.remove('open')
        } else {
          item.classList.add('open')
        }
        const icon = item.querySelector('.fa-angle-down')
          ? item.querySelector('.fa-angle-down')
          : item.querySelector('.fa-angle-up')
        if (icon) {
          icon.classList.toggle('fa-angle-down')
          icon.classList.toggle('fa-angle-up')
        }
      }
    
      _closeAllItens() {
        this.itens.forEach((item) => {
          item.classList.remove('open')
          const icon = item.querySelector('.fa-angle-down')
            ? item.querySelector('.fa-angle-down')
            : item.querySelector('.fa-angle-up')
          if (icon) {
            icon.classList.add('fa-angle-down')
            icon.classList.remove('fa-angle-up')
          }
        })
      }
    
      _check(event, item) {
        item.classList.toggle('selected')
        this._setSelected(item)
      }
    
      _setSelected(item) {
        const brCheckbox = item.querySelector('.br-checkbox')
        const brCheckboxInput = brCheckbox.querySelector('input')
        const selected = item.classList.contains('selected')
        if (brCheckbox) {
          if (selected) {
            brCheckbox.classList.add('is-inverted')
            brCheckboxInput.setAttribute('checked', '')
            brCheckboxInput.checked = true
          } else {
            brCheckbox.classList.remove('is-inverted')
            brCheckboxInput.removeAttribute('checked')
            brCheckboxInput.checked = false
          }
        }
      }
    }
    
    const listList = []
    for (const brList of window.document.querySelectorAll(
      '.br-list[data-toggle]'
    )) {
      listList.push(new BRList('br-list-collapsible', brList))
    }
    for (const brList of window.document.querySelectorAll(
      '.br-list[data-checkable]'
    )) {
      listList.push(new BRList('br-list-checkable', brList))
    }
    /* harmony default export */ __webpack_exports__["default"] = (BRList);
    
    
    /***/ }),
    /* 4 */
    /***/ (function(module, exports, __webpack_require__) {
    
    /* WEBPACK VAR INJECTION */(function(global) {/*!
     * Intro.js v3.3.1
     * https://introjs.com
     *
     * Copyright (C) 2012-2021 Afshin Mehrabani (@afshinmeh).
     * https://raw.githubusercontent.com/usablica/intro.js/master/license.md
     *
     * Date: Sun, 07 Feb 2021 12:38:48 GMT
     */
    
    (function (global, factory) {
       true ? module.exports = factory() :
      undefined;
    }(this, (function () { 'use strict';
    
      function _typeof(obj) {
        "@babel/helpers - typeof";
    
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function (obj) {
            return typeof obj;
          };
        } else {
          _typeof = function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }
    
        return _typeof(obj);
      }
    
      /**
       * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
       * via: http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
       *
       * @param obj1
       * @param obj2
       * @returns obj3 a new object based on obj1 and obj2
       */
      function mergeOptions(obj1, obj2) {
        var obj3 = {};
        var attrname;
    
        for (attrname in obj1) {
          obj3[attrname] = obj1[attrname];
        }
    
        for (attrname in obj2) {
          obj3[attrname] = obj2[attrname];
        }
    
        return obj3;
      }
    
      /**
       * Mark any object with an incrementing number
       * used for keeping track of objects
       *
       * @param Object obj   Any object or DOM Element
       * @param String key
       * @return Object
       */
      var stamp = function () {
        var keys = {};
        return function stamp(obj) {
          var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "introjs-stamp";
          // each group increments from 0
          keys[key] = keys[key] || 0; // stamp only once per object
    
          if (obj[key] === undefined) {
            // increment key for each new object
            obj[key] = keys[key]++;
          }
    
          return obj[key];
        };
      }();
    
      /**
       * Iterates arrays
       *
       * @param {Array} arr
       * @param {Function} forEachFnc
       * @param {Function} completeFnc
       * @return {Null}
       */
      function forEach(arr, forEachFnc, completeFnc) {
        // in case arr is an empty query selector node list
        if (arr) {
          for (var i = 0, len = arr.length; i < len; i++) {
            forEachFnc(arr[i], i);
          }
        }
    
        if (typeof completeFnc === "function") {
          completeFnc();
        }
      }
    
      /**
       * DOMEvent Handles all DOM events
       *
       * methods:
       *
       * on - add event handler
       * off - remove event
       */
    
      var DOMEvent = function () {
        function DOMEvent() {
          var events_key = "introjs_event";
          /**
           * Gets a unique ID for an event listener
           *
           * @param obj Object
           * @param type event type
           * @param listener Function
           * @param context Object
           * @return String
           */
    
          this._id = function (obj, type, listener, context) {
            return type + stamp(listener) + (context ? "_".concat(stamp(context)) : "");
          };
          /**
           * Adds event listener
           *
           * @param obj Object obj
           * @param type String
           * @param listener Function
           * @param context Object
           * @param useCapture Boolean
           * @return null
           */
    
    
          this.on = function (obj, type, listener, context, useCapture) {
            var id = this._id.apply(this, arguments);
    
            var handler = function handler(e) {
              return listener.call(context || obj, e || window.event);
            };
    
            if ("addEventListener" in obj) {
              obj.addEventListener(type, handler, useCapture);
            } else if ("attachEvent" in obj) {
              obj.attachEvent("on".concat(type), handler);
            }
    
            obj[events_key] = obj[events_key] || {};
            obj[events_key][id] = handler;
          };
          /**
           * Removes event listener
           *
           * @param obj Object
           * @param type String
           * @param listener Function
           * @param context Object
           * @param useCapture Boolean
           * @return null
           */
    
    
          this.off = function (obj, type, listener, context, useCapture) {
            var id = this._id.apply(this, arguments);
    
            var handler = obj[events_key] && obj[events_key][id];
    
            if (!handler) {
              return;
            }
    
            if ("removeEventListener" in obj) {
              obj.removeEventListener(type, handler, useCapture);
            } else if ("detachEvent" in obj) {
              obj.detachEvent("on".concat(type), handler);
            }
    
            obj[events_key][id] = null;
          };
        }
    
        return new DOMEvent();
      }();
    
      var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
    
      function createCommonjsModule(fn, module) {
          return module = { exports: {} }, fn(module, module.exports), module.exports;
      }
    
      var check = function (it) {
        return it && it.Math == Math && it;
      };
    
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global_1 =
        // eslint-disable-next-line no-undef
        check(typeof globalThis == 'object' && globalThis) ||
        check(typeof window == 'object' && window) ||
        check(typeof self == 'object' && self) ||
        check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
        // eslint-disable-next-line no-new-func
        (function () { return this; })() || Function('return this')();
    
      var fails = function (exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
    
      // Detect IE8's incomplete defineProperty implementation
      var descriptors = !fails(function () {
        return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
      });
    
      var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    
      // Nashorn ~ JDK8 bug
      var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);
    
      // `Object.prototype.propertyIsEnumerable` method implementation
      // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
      var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : nativePropertyIsEnumerable;
    
      var objectPropertyIsEnumerable = {
          f: f
      };
    
      var createPropertyDescriptor = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };
    
      var toString = {}.toString;
    
      var classofRaw = function (it) {
        return toString.call(it).slice(8, -1);
      };
    
      var split = ''.split;
    
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var indexedObject = fails(function () {
        // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
        // eslint-disable-next-line no-prototype-builtins
        return !Object('z').propertyIsEnumerable(0);
      }) ? function (it) {
        return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
      } : Object;
    
      // `RequireObjectCoercible` abstract operation
      // https://tc39.es/ecma262/#sec-requireobjectcoercible
      var requireObjectCoercible = function (it) {
        if (it == undefined) throw TypeError("Can't call method on " + it);
        return it;
      };
    
      // toObject with fallback for non-array-like ES3 strings
    
    
    
      var toIndexedObject = function (it) {
        return indexedObject(requireObjectCoercible(it));
      };
    
      var isObject = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };
    
      // `ToPrimitive` abstract operation
      // https://tc39.es/ecma262/#sec-toprimitive
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      var toPrimitive = function (input, PREFERRED_STRING) {
        if (!isObject(input)) return input;
        var fn, val;
        if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
        if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
        if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
        throw TypeError("Can't convert object to primitive value");
      };
    
      var hasOwnProperty = {}.hasOwnProperty;
    
      var has = function (it, key) {
        return hasOwnProperty.call(it, key);
      };
    
      var document$1 = global_1.document;
      // typeof document.createElement is 'object' in old IE
      var EXISTS = isObject(document$1) && isObject(document$1.createElement);
    
      var documentCreateElement = function (it) {
        return EXISTS ? document$1.createElement(it) : {};
      };
    
      // Thank's IE8 for his funny defineProperty
      var ie8DomDefine = !descriptors && !fails(function () {
        return Object.defineProperty(documentCreateElement('div'), 'a', {
          get: function () { return 7; }
        }).a != 7;
      });
    
      var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    
      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
      var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPrimitive(P, true);
        if (ie8DomDefine) try {
          return nativeGetOwnPropertyDescriptor(O, P);
        } catch (error) { /* empty */ }
        if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
      };
    
      var objectGetOwnPropertyDescriptor = {
          f: f$1
      };
    
      var anObject = function (it) {
        if (!isObject(it)) {
          throw TypeError(String(it) + ' is not an object');
        } return it;
      };
    
      var nativeDefineProperty = Object.defineProperty;
    
      // `Object.defineProperty` method
      // https://tc39.es/ecma262/#sec-object.defineproperty
      var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (ie8DomDefine) try {
          return nativeDefineProperty(O, P, Attributes);
        } catch (error) { /* empty */ }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };
    
      var objectDefineProperty = {
          f: f$2
      };
    
      var createNonEnumerableProperty = descriptors ? function (object, key, value) {
        return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
    
      var setGlobal = function (key, value) {
        try {
          createNonEnumerableProperty(global_1, key, value);
        } catch (error) {
          global_1[key] = value;
        } return value;
      };
    
      var SHARED = '__core-js_shared__';
      var store = global_1[SHARED] || setGlobal(SHARED, {});
    
      var sharedStore = store;
    
      var functionToString = Function.toString;
    
      // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
      if (typeof sharedStore.inspectSource != 'function') {
        sharedStore.inspectSource = function (it) {
          return functionToString.call(it);
        };
      }
    
      var inspectSource = sharedStore.inspectSource;
    
      var WeakMap = global_1.WeakMap;
    
      var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));
    
      var shared = createCommonjsModule(function (module) {
      (module.exports = function (key, value) {
        return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
      })('versions', []).push({
        version: '3.8.3',
        mode:  'global',
        copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
      });
      });
    
      var id = 0;
      var postfix = Math.random();
    
      var uid = function (key) {
        return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
      };
    
      var keys = shared('keys');
    
      var sharedKey = function (key) {
        return keys[key] || (keys[key] = uid(key));
      };
    
      var hiddenKeys = {};
    
      var WeakMap$1 = global_1.WeakMap;
      var set, get, has$1;
    
      var enforce = function (it) {
        return has$1(it) ? get(it) : set(it, {});
      };
    
      var getterFor = function (TYPE) {
        return function (it) {
          var state;
          if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw TypeError('Incompatible receiver, ' + TYPE + ' required');
          } return state;
        };
      };
    
      if (nativeWeakMap) {
        var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1());
        var wmget = store$1.get;
        var wmhas = store$1.has;
        var wmset = store$1.set;
        set = function (it, metadata) {
          metadata.facade = it;
          wmset.call(store$1, it, metadata);
          return metadata;
        };
        get = function (it) {
          return wmget.call(store$1, it) || {};
        };
        has$1 = function (it) {
          return wmhas.call(store$1, it);
        };
      } else {
        var STATE = sharedKey('state');
        hiddenKeys[STATE] = true;
        set = function (it, metadata) {
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get = function (it) {
          return has(it, STATE) ? it[STATE] : {};
        };
        has$1 = function (it) {
          return has(it, STATE);
        };
      }
    
      var internalState = {
        set: set,
        get: get,
        has: has$1,
        enforce: enforce,
        getterFor: getterFor
      };
    
      var redefine = createCommonjsModule(function (module) {
      var getInternalState = internalState.get;
      var enforceInternalState = internalState.enforce;
      var TEMPLATE = String(String).split('String');
    
      (module.exports = function (O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var state;
        if (typeof value == 'function') {
          if (typeof key == 'string' && !has(value, 'name')) {
            createNonEnumerableProperty(value, 'name', key);
          }
          state = enforceInternalState(value);
          if (!state.source) {
            state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
          }
        }
        if (O === global_1) {
          if (simple) O[key] = value;
          else setGlobal(key, value);
          return;
        } else if (!unsafe) {
          delete O[key];
        } else if (!noTargetGet && O[key]) {
          simple = true;
        }
        if (simple) O[key] = value;
        else createNonEnumerableProperty(O, key, value);
      // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, 'toString', function toString() {
        return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
      });
      });
    
      var path = global_1;
    
      var aFunction = function (variable) {
        return typeof variable == 'function' ? variable : undefined;
      };
    
      var getBuiltIn = function (namespace, method) {
        return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
          : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
      };
    
      var ceil = Math.ceil;
      var floor = Math.floor;
    
      // `ToInteger` abstract operation
      // https://tc39.es/ecma262/#sec-tointeger
      var toInteger = function (argument) {
        return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
      };
    
      var min = Math.min;
    
      // `ToLength` abstract operation
      // https://tc39.es/ecma262/#sec-tolength
      var toLength = function (argument) {
        return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
      };
    
      var max = Math.max;
      var min$1 = Math.min;
    
      // Helper for a popular repeating case of the spec:
      // Let integer be ? ToInteger(index).
      // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
      var toAbsoluteIndex = function (index, length) {
        var integer = toInteger(index);
        return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
      };
    
      // `Array.prototype.{ indexOf, includes }` methods implementation
      var createMethod = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = toLength(O.length);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare
          if (IS_INCLUDES && el != el) while (length > index) {
            value = O[index++];
            // eslint-disable-next-line no-self-compare
            if (value != value) return true;
          // Array#indexOf ignores holes, Array#includes - not
          } else for (;length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
          } return !IS_INCLUDES && -1;
        };
      };
    
      var arrayIncludes = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };
    
      var indexOf = arrayIncludes.indexOf;
    
    
      var objectKeysInternal = function (object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
        // Don't enum bug & hidden keys
        while (names.length > i) if (has(O, key = names[i++])) {
          ~indexOf(result, key) || result.push(key);
        }
        return result;
      };
    
      // IE8- don't enum bug keys
      var enumBugKeys = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf'
      ];
    
      var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');
    
      // `Object.getOwnPropertyNames` method
      // https://tc39.es/ecma262/#sec-object.getownpropertynames
      var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return objectKeysInternal(O, hiddenKeys$1);
      };
    
      var objectGetOwnPropertyNames = {
          f: f$3
      };
    
      var f$4 = Object.getOwnPropertySymbols;
    
      var objectGetOwnPropertySymbols = {
          f: f$4
      };
    
      // all object keys, includes non-enumerable and symbols
      var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
        var keys = objectGetOwnPropertyNames.f(anObject(it));
        var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
        return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
      };
    
      var copyConstructorProperties = function (target, source) {
        var keys = ownKeys(source);
        var defineProperty = objectDefineProperty.f;
        var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      };
    
      var replacement = /#|\.prototype\./;
    
      var isForced = function (feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true
          : value == NATIVE ? false
          : typeof detection == 'function' ? fails(detection)
          : !!detection;
      };
    
      var normalize = isForced.normalize = function (string) {
        return String(string).replace(replacement, '.').toLowerCase();
      };
    
      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = 'N';
      var POLYFILL = isForced.POLYFILL = 'P';
    
      var isForced_1 = isForced;
    
      var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
    
    
    
    
    
    
      /*
        options.target      - name of the target object
        options.global      - target is the global object
        options.stat        - export as static methods of target
        options.proto       - export as prototype methods of target
        options.real        - real prototype method for the `pure` version
        options.forced      - export even if the native feature is available
        options.bind        - bind methods to the target, required for the `pure` version
        options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
        options.unsafe      - use the simple assignment of property instead of delete + defineProperty
        options.sham        - add a flag to not completely full polyfills
        options.enumerable  - export as enumerable property
        options.noTargetGet - prevent calling a getter on target
      */
      var _export = function (options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;
        if (GLOBAL) {
          target = global_1;
        } else if (STATIC) {
          target = global_1[TARGET] || setGlobal(TARGET, {});
        } else {
          target = (global_1[TARGET] || {}).prototype;
        }
        if (target) for (key in source) {
          sourceProperty = source[key];
          if (options.noTargetGet) {
            descriptor = getOwnPropertyDescriptor$1(target, key);
            targetProperty = descriptor && descriptor.value;
          } else targetProperty = target[key];
          FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
          // contained in target
          if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty === typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          // add a flag to not completely full polyfills
          if (options.sham || (targetProperty && targetProperty.sham)) {
            createNonEnumerableProperty(sourceProperty, 'sham', true);
          }
          // extend global
          redefine(target, key, sourceProperty, options);
        }
      };
    
      // `RegExp.prototype.flags` getter implementation
      // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
      var regexpFlags = function () {
        var that = anObject(this);
        var result = '';
        if (that.global) result += 'g';
        if (that.ignoreCase) result += 'i';
        if (that.multiline) result += 'm';
        if (that.dotAll) result += 's';
        if (that.unicode) result += 'u';
        if (that.sticky) result += 'y';
        return result;
      };
    
      // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
      // so we use an intermediate function.
      function RE(s, f) {
        return RegExp(s, f);
      }
    
      var UNSUPPORTED_Y = fails(function () {
        // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
        var re = RE('a', 'y');
        re.lastIndex = 2;
        return re.exec('abcd') != null;
      });
    
      var BROKEN_CARET = fails(function () {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
        var re = RE('^r', 'gy');
        re.lastIndex = 2;
        return re.exec('str') != null;
      });
    
      var regexpStickyHelpers = {
          UNSUPPORTED_Y: UNSUPPORTED_Y,
          BROKEN_CARET: BROKEN_CARET
      };
    
      var nativeExec = RegExp.prototype.exec;
      // This always refers to the native implementation, because the
      // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
      // which loads this file before patching the method.
      var nativeReplace = String.prototype.replace;
    
      var patchedExec = nativeExec;
    
      var UPDATES_LAST_INDEX_WRONG = (function () {
        var re1 = /a/;
        var re2 = /b*/g;
        nativeExec.call(re1, 'a');
        nativeExec.call(re2, 'a');
        return re1.lastIndex !== 0 || re2.lastIndex !== 0;
      })();
    
      var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;
    
      // nonparticipating capturing group, copied from es5-shim's String#split patch.
      var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
    
      var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1;
    
      if (PATCH) {
        patchedExec = function exec(str) {
          var re = this;
          var lastIndex, reCopy, match, i;
          var sticky = UNSUPPORTED_Y$1 && re.sticky;
          var flags = regexpFlags.call(re);
          var source = re.source;
          var charsAdded = 0;
          var strCopy = str;
    
          if (sticky) {
            flags = flags.replace('y', '');
            if (flags.indexOf('g') === -1) {
              flags += 'g';
            }
    
            strCopy = String(str).slice(re.lastIndex);
            // Support anchored sticky behavior.
            if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
              source = '(?: ' + source + ')';
              strCopy = ' ' + strCopy;
              charsAdded++;
            }
            // ^(? + rx + ) is needed, in combination with some str slicing, to
            // simulate the 'y' flag.
            reCopy = new RegExp('^(?:' + source + ')', flags);
          }
    
          if (NPCG_INCLUDED) {
            reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
          }
          if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    
          match = nativeExec.call(sticky ? reCopy : re, strCopy);
    
          if (sticky) {
            if (match) {
              match.input = match.input.slice(charsAdded);
              match[0] = match[0].slice(charsAdded);
              match.index = re.lastIndex;
              re.lastIndex += match[0].length;
            } else re.lastIndex = 0;
          } else if (UPDATES_LAST_INDEX_WRONG && match) {
            re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
          }
          if (NPCG_INCLUDED && match && match.length > 1) {
            // Fix browsers whose `exec` methods don't consistently return `undefined`
            // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
            nativeReplace.call(match[0], reCopy, function () {
              for (i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === undefined) match[i] = undefined;
              }
            });
          }
    
          return match;
        };
      }
    
      var regexpExec = patchedExec;
    
      // `RegExp.prototype.exec` method
      // https://tc39.es/ecma262/#sec-regexp.prototype.exec
      _export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
        exec: regexpExec
      });
    
      var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
        // Chrome 38 Symbol has incorrect toString conversion
        // eslint-disable-next-line no-undef
        return !String(Symbol());
      });
    
      var useSymbolAsUid = nativeSymbol
        // eslint-disable-next-line no-undef
        && !Symbol.sham
        // eslint-disable-next-line no-undef
        && typeof Symbol.iterator == 'symbol';
    
      var WellKnownSymbolsStore = shared('wks');
      var Symbol$1 = global_1.Symbol;
      var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;
    
      var wellKnownSymbol = function (name) {
        if (!has(WellKnownSymbolsStore, name)) {
          if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
          else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
        } return WellKnownSymbolsStore[name];
      };
    
      // TODO: Remove from `core-js@4` since it's moved to entry points
    
    
    
    
    
    
    
      var SPECIES = wellKnownSymbol('species');
    
      var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
        // #replace needs built-in support for named groups.
        // #match works fine because it just return the exec results, even if it has
        // a "grops" property.
        var re = /./;
        re.exec = function () {
          var result = [];
          result.groups = { a: '7' };
          return result;
        };
        return ''.replace(re, '$<a>') !== '7';
      });
    
      // IE <= 11 replaces $0 with the whole match, as if it was $&
      // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
      var REPLACE_KEEPS_$0 = (function () {
        return 'a'.replace(/./, '$0') === '$0';
      })();
    
      var REPLACE = wellKnownSymbol('replace');
      // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
      var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
        if (/./[REPLACE]) {
          return /./[REPLACE]('a', '$0') === '';
        }
        return false;
      })();
    
      // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
      // Weex JS has frozen built-in prototypes, so use try / catch wrapper
      var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
        var re = /(?:)/;
        var originalExec = re.exec;
        re.exec = function () { return originalExec.apply(this, arguments); };
        var result = 'ab'.split(re);
        return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
      });
    
      var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
        var SYMBOL = wellKnownSymbol(KEY);
    
        var DELEGATES_TO_SYMBOL = !fails(function () {
          // String methods call symbol-named RegEp methods
          var O = {};
          O[SYMBOL] = function () { return 7; };
          return ''[KEY](O) != 7;
        });
    
        var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
          // Symbol-named RegExp methods call .exec
          var execCalled = false;
          var re = /a/;
    
          if (KEY === 'split') {
            // We can't use real regex here since it causes deoptimization
            // and serious performance degradation in V8
            // https://github.com/zloirock/core-js/issues/306
            re = {};
            // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.
            re.constructor = {};
            re.constructor[SPECIES] = function () { return re; };
            re.flags = '';
            re[SYMBOL] = /./[SYMBOL];
          }
    
          re.exec = function () { execCalled = true; return null; };
    
          re[SYMBOL]('');
          return !execCalled;
        });
    
        if (
          !DELEGATES_TO_SYMBOL ||
          !DELEGATES_TO_EXEC ||
          (KEY === 'replace' && !(
            REPLACE_SUPPORTS_NAMED_GROUPS &&
            REPLACE_KEEPS_$0 &&
            !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
          )) ||
          (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
        ) {
          var nativeRegExpMethod = /./[SYMBOL];
          var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
            if (regexp.exec === regexpExec) {
              if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
              }
              return { done: true, value: nativeMethod.call(str, regexp, arg2) };
            }
            return { done: false };
          }, {
            REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
          });
          var stringMethod = methods[0];
          var regexMethod = methods[1];
    
          redefine(String.prototype, KEY, stringMethod);
          redefine(RegExp.prototype, SYMBOL, length == 2
            // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
            // 21.2.5.11 RegExp.prototype[@@split](string, limit)
            ? function (string, arg) { return regexMethod.call(string, this, arg); }
            // 21.2.5.6 RegExp.prototype[@@match](string)
            // 21.2.5.9 RegExp.prototype[@@search](string)
            : function (string) { return regexMethod.call(string, this); }
          );
        }
    
        if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
      };
    
      // `String.prototype.{ codePointAt, at }` methods implementation
      var createMethod$1 = function (CONVERT_TO_STRING) {
        return function ($this, pos) {
          var S = String(requireObjectCoercible($this));
          var position = toInteger(pos);
          var size = S.length;
          var first, second;
          if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
          first = S.charCodeAt(position);
          return first < 0xD800 || first > 0xDBFF || position + 1 === size
            || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
              ? CONVERT_TO_STRING ? S.charAt(position) : first
              : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
        };
      };
    
      var stringMultibyte = {
        // `String.prototype.codePointAt` method
        // https://tc39.es/ecma262/#sec-string.prototype.codepointat
        codeAt: createMethod$1(false),
        // `String.prototype.at` method
        // https://github.com/mathiasbynens/String.prototype.at
        charAt: createMethod$1(true)
      };
    
      var charAt = stringMultibyte.charAt;
    
      // `AdvanceStringIndex` abstract operation
      // https://tc39.es/ecma262/#sec-advancestringindex
      var advanceStringIndex = function (S, index, unicode) {
        return index + (unicode ? charAt(S, index).length : 1);
      };
    
      // `RegExpExec` abstract operation
      // https://tc39.es/ecma262/#sec-regexpexec
      var regexpExecAbstract = function (R, S) {
        var exec = R.exec;
        if (typeof exec === 'function') {
          var result = exec.call(R, S);
          if (typeof result !== 'object') {
            throw TypeError('RegExp exec method returned something other than an Object or null');
          }
          return result;
        }
    
        if (classofRaw(R) !== 'RegExp') {
          throw TypeError('RegExp#exec called on incompatible receiver');
        }
    
        return regexpExec.call(R, S);
      };
    
      // @@match logic
      fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
        return [
          // `String.prototype.match` method
          // https://tc39.es/ecma262/#sec-string.prototype.match
          function match(regexp) {
            var O = requireObjectCoercible(this);
            var matcher = regexp == undefined ? undefined : regexp[MATCH];
            return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
          },
          // `RegExp.prototype[@@match]` method
          // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
          function (regexp) {
            var res = maybeCallNative(nativeMatch, regexp, this);
            if (res.done) return res.value;
    
            var rx = anObject(regexp);
            var S = String(this);
    
            if (!rx.global) return regexpExecAbstract(rx, S);
    
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
            var A = [];
            var n = 0;
            var result;
            while ((result = regexpExecAbstract(rx, S)) !== null) {
              var matchStr = String(result[0]);
              A[n] = matchStr;
              if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
              n++;
            }
            return n === 0 ? null : A;
          }
        ];
      });
    
      // `IsArray` abstract operation
      // https://tc39.es/ecma262/#sec-isarray
      var isArray = Array.isArray || function isArray(arg) {
        return classofRaw(arg) == 'Array';
      };
    
      // `ToObject` abstract operation
      // https://tc39.es/ecma262/#sec-toobject
      var toObject = function (argument) {
        return Object(requireObjectCoercible(argument));
      };
    
      var createProperty = function (object, key, value) {
        var propertyKey = toPrimitive(key);
        if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
        else object[propertyKey] = value;
      };
    
      var SPECIES$1 = wellKnownSymbol('species');
    
      // `ArraySpeciesCreate` abstract operation
      // https://tc39.es/ecma262/#sec-arrayspeciescreate
      var arraySpeciesCreate = function (originalArray, length) {
        var C;
        if (isArray(originalArray)) {
          C = originalArray.constructor;
          // cross-realm fallback
          if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
          else if (isObject(C)) {
            C = C[SPECIES$1];
            if (C === null) C = undefined;
          }
        } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
      };
    
      var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';
    
      var process = global_1.process;
      var versions = process && process.versions;
      var v8 = versions && versions.v8;
      var match, version;
    
      if (v8) {
        match = v8.split('.');
        version = match[0] + match[1];
      } else if (engineUserAgent) {
        match = engineUserAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
          match = engineUserAgent.match(/Chrome\/(\d+)/);
          if (match) version = match[1];
        }
      }
    
      var engineV8Version = version && +version;
    
      var SPECIES$2 = wellKnownSymbol('species');
    
      var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
        // We can't use this feature detection in V8 since it causes
        // deoptimization and serious performance degradation
        // https://github.com/zloirock/core-js/issues/677
        return engineV8Version >= 51 || !fails(function () {
          var array = [];
          var constructor = array.constructor = {};
          constructor[SPECIES$2] = function () {
            return { foo: 1 };
          };
          return array[METHOD_NAME](Boolean).foo !== 1;
        });
      };
    
      var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
      var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
      var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
    
      // We can't use this feature detection in V8 since it causes
      // deoptimization and serious performance degradation
      // https://github.com/zloirock/core-js/issues/679
      var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
        var array = [];
        array[IS_CONCAT_SPREADABLE] = false;
        return array.concat()[0] !== array;
      });
    
      var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');
    
      var isConcatSpreadable = function (O) {
        if (!isObject(O)) return false;
        var spreadable = O[IS_CONCAT_SPREADABLE];
        return spreadable !== undefined ? !!spreadable : isArray(O);
      };
    
      var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
    
      // `Array.prototype.concat` method
      // https://tc39.es/ecma262/#sec-array.prototype.concat
      // with adding support of @@isConcatSpreadable and @@species
      _export({ target: 'Array', proto: true, forced: FORCED }, {
        concat: function concat(arg) { // eslint-disable-line no-unused-vars
          var O = toObject(this);
          var A = arraySpeciesCreate(O, 0);
          var n = 0;
          var i, k, length, len, E;
          for (i = -1, length = arguments.length; i < length; i++) {
            E = i === -1 ? O : arguments[i];
            if (isConcatSpreadable(E)) {
              len = toLength(E.length);
              if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
              for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
            } else {
              if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
              createProperty(A, n++, E);
            }
          }
          A.length = n;
          return A;
        }
      });
    
      var TO_STRING_TAG = wellKnownSymbol('toStringTag');
      var test = {};
    
      test[TO_STRING_TAG] = 'z';
    
      var toStringTagSupport = String(test) === '[object z]';
    
      var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
      // ES3 wrong here
      var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';
    
      // fallback for IE11 Script Access Denied error
      var tryGet = function (it, key) {
        try {
          return it[key];
        } catch (error) { /* empty */ }
      };
    
      // getting tag from ES6+ `Object.prototype.toString`
      var classof = toStringTagSupport ? classofRaw : function (it) {
        var O, tag, result;
        return it === undefined ? 'Undefined' : it === null ? 'Null'
          // @@toStringTag case
          : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
          // builtinTag case
          : CORRECT_ARGUMENTS ? classofRaw(O)
          // ES3 arguments fallback
          : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
      };
    
      // `Object.prototype.toString` method implementation
      // https://tc39.es/ecma262/#sec-object.prototype.tostring
      var objectToString = toStringTagSupport ? {}.toString : function toString() {
        return '[object ' + classof(this) + ']';
      };
    
      // `Object.prototype.toString` method
      // https://tc39.es/ecma262/#sec-object.prototype.tostring
      if (!toStringTagSupport) {
        redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
      }
    
      var TO_STRING = 'toString';
      var RegExpPrototype = RegExp.prototype;
      var nativeToString = RegExpPrototype[TO_STRING];
    
      var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
      // FF44- RegExp#toString has a wrong name
      var INCORRECT_NAME = nativeToString.name != TO_STRING;
    
      // `RegExp.prototype.toString` method
      // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
      if (NOT_GENERIC || INCORRECT_NAME) {
        redefine(RegExp.prototype, TO_STRING, function toString() {
          var R = anObject(this);
          var p = String(R.source);
          var rf = R.flags;
          var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
          return '/' + p + '/' + f;
        }, { unsafe: true });
      }
    
      var MATCH = wellKnownSymbol('match');
    
      // `IsRegExp` abstract operation
      // https://tc39.es/ecma262/#sec-isregexp
      var isRegexp = function (it) {
        var isRegExp;
        return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
      };
    
      var aFunction$1 = function (it) {
        if (typeof it != 'function') {
          throw TypeError(String(it) + ' is not a function');
        } return it;
      };
    
      var SPECIES$3 = wellKnownSymbol('species');
    
      // `SpeciesConstructor` abstract operation
      // https://tc39.es/ecma262/#sec-speciesconstructor
      var speciesConstructor = function (O, defaultConstructor) {
        var C = anObject(O).constructor;
        var S;
        return C === undefined || (S = anObject(C)[SPECIES$3]) == undefined ? defaultConstructor : aFunction$1(S);
      };
    
      var arrayPush = [].push;
      var min$2 = Math.min;
      var MAX_UINT32 = 0xFFFFFFFF;
    
      // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
      var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });
    
      // @@split logic
      fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
        var internalSplit;
        if (
          'abbc'.split(/(b)*/)[1] == 'c' ||
          'test'.split(/(?:)/, -1).length != 4 ||
          'ab'.split(/(?:ab)*/).length != 2 ||
          '.'.split(/(.?)(.?)/).length != 4 ||
          '.'.split(/()()/).length > 1 ||
          ''.split(/.?/).length
        ) {
          // based on es5-shim implementation, need to rework it
          internalSplit = function (separator, limit) {
            var string = String(requireObjectCoercible(this));
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (separator === undefined) return [string];
            // If `separator` is not a regex, use native split
            if (!isRegexp(separator)) {
              return nativeSplit.call(string, separator, lim);
            }
            var output = [];
            var flags = (separator.ignoreCase ? 'i' : '') +
                        (separator.multiline ? 'm' : '') +
                        (separator.unicode ? 'u' : '') +
                        (separator.sticky ? 'y' : '');
            var lastLastIndex = 0;
            // Make `global` and avoid `lastIndex` issues by working with a copy
            var separatorCopy = new RegExp(separator.source, flags + 'g');
            var match, lastIndex, lastLength;
            while (match = regexpExec.call(separatorCopy, string)) {
              lastIndex = separatorCopy.lastIndex;
              if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index));
                if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
                lastLength = match[0].length;
                lastLastIndex = lastIndex;
                if (output.length >= lim) break;
              }
              if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
            }
            if (lastLastIndex === string.length) {
              if (lastLength || !separatorCopy.test('')) output.push('');
            } else output.push(string.slice(lastLastIndex));
            return output.length > lim ? output.slice(0, lim) : output;
          };
        // Chakra, V8
        } else if ('0'.split(undefined, 0).length) {
          internalSplit = function (separator, limit) {
            return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
          };
        } else internalSplit = nativeSplit;
    
        return [
          // `String.prototype.split` method
          // https://tc39.es/ecma262/#sec-string.prototype.split
          function split(separator, limit) {
            var O = requireObjectCoercible(this);
            var splitter = separator == undefined ? undefined : separator[SPLIT];
            return splitter !== undefined
              ? splitter.call(separator, O, limit)
              : internalSplit.call(String(O), separator, limit);
          },
          // `RegExp.prototype[@@split]` method
          // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
          //
          // NOTE: This cannot be properly polyfilled in engines that don't support
          // the 'y' flag.
          function (regexp, limit) {
            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
            if (res.done) return res.value;
    
            var rx = anObject(regexp);
            var S = String(this);
            var C = speciesConstructor(rx, RegExp);
    
            var unicodeMatching = rx.unicode;
            var flags = (rx.ignoreCase ? 'i' : '') +
                        (rx.multiline ? 'm' : '') +
                        (rx.unicode ? 'u' : '') +
                        (SUPPORTS_Y ? 'y' : 'g');
    
            // ^(? + rx + ) is needed, in combination with some S slicing, to
            // simulate the 'y' flag.
            var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
            var p = 0;
            var q = 0;
            var A = [];
            while (q < S.length) {
              splitter.lastIndex = SUPPORTS_Y ? q : 0;
              var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
              var e;
              if (
                z === null ||
                (e = min$2(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
              ) {
                q = advanceStringIndex(S, q, unicodeMatching);
              } else {
                A.push(S.slice(p, q));
                if (A.length === lim) return A;
                for (var i = 1; i <= z.length - 1; i++) {
                  A.push(z[i]);
                  if (A.length === lim) return A;
                }
                q = p = e;
              }
            }
            A.push(S.slice(p));
            return A;
          }
        ];
      }, !SUPPORTS_Y);
    
      /**
       * Append a class to an element
       *
       * @api private
       * @method _addClass
       * @param {Object} element
       * @param {String} className
       * @returns null
       */
    
      function addClass(element, className) {
        if (element instanceof SVGElement) {
          // svg
          var pre = element.getAttribute("class") || "";
    
          if (!pre.match(className)) {
            // check if element doesn't already have className
            element.setAttribute("class", "".concat(pre, " ").concat(className));
          }
        } else {
          if (element.classList !== undefined) {
            // check for modern classList property
            var classes = className.split(" ");
            forEach(classes, function (cls) {
              element.classList.add(cls);
            });
          } else if (!element.className.match(className)) {
            // check if element doesn't already have className
            element.className += " ".concat(className);
          }
        }
      }
    
      /**
       * Get an element CSS property on the page
       * Thanks to JavaScript Kit: http://www.javascriptkit.com/dhtmltutors/dhtmlcascade4.shtml
       *
       * @api private
       * @method _getPropValue
       * @param {Object} element
       * @param {String} propName
       * @returns string property value
       */
      function getPropValue(element, propName) {
        var propValue = "";
    
        if (element.currentStyle) {
          //IE
          propValue = element.currentStyle[propName];
        } else if (document.defaultView && document.defaultView.getComputedStyle) {
          //Others
          propValue = document.defaultView.getComputedStyle(element, null).getPropertyValue(propName);
        } //Prevent exception in IE
    
    
        if (propValue && propValue.toLowerCase) {
          return propValue.toLowerCase();
        } else {
          return propValue;
        }
      }
    
      /**
       * To set the show element
       * This function set a relative (in most cases) position and changes the z-index
       *
       * @api private
       * @method _setShowElement
       * @param {Object} targetElement
       */
    
      function setShowElement(_ref) {
        var element = _ref.element;
        addClass(element, "introjs-showElement");
        var currentElementPosition = getPropValue(element, "position");
    
        if (currentElementPosition !== "absolute" && currentElementPosition !== "relative" && currentElementPosition !== "sticky" && currentElementPosition !== "fixed") {
          //change to new intro item
          addClass(element, "introjs-relativePosition");
        }
      }
    
      /**
       * Find the nearest scrollable parent
       * copied from https://stackoverflow.com/questions/35939886/find-first-scrollable-parent
       *
       * @param Element element
       * @return Element
       */
      function getScrollParent(element) {
        var style = window.getComputedStyle(element);
        var excludeStaticParent = style.position === "absolute";
        var overflowRegex = /(auto|scroll)/;
        if (style.position === "fixed") return document.body;
    
        for (var parent = element; parent = parent.parentElement;) {
          style = window.getComputedStyle(parent);
    
          if (excludeStaticParent && style.position === "static") {
            continue;
          }
    
          if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) return parent;
        }
    
        return document.body;
      }
    
      /**
       * scroll a scrollable element to a child element
       *
       * @param {Object} targetElement
       */
    
      function scrollParentToElement(targetElement) {
        var element = targetElement.element;
        if (!this._options.scrollToElement) return;
        var parent = getScrollParent(element);
        if (parent === document.body) return;
        parent.scrollTop = element.offsetTop - parent.offsetTop;
      }
    
      /**
       * Provides a cross-browser way to get the screen dimensions
       * via: http://stackoverflow.com/questions/5864467/internet-explorer-innerheight
       *
       * @api private
       * @method _getWinSize
       * @returns {Object} width and height attributes
       */
      function getWinSize() {
        if (window.innerWidth !== undefined) {
          return {
            width: window.innerWidth,
            height: window.innerHeight
          };
        } else {
          var D = document.documentElement;
          return {
            width: D.clientWidth,
            height: D.clientHeight
          };
        }
      }
    
      /**
       * Check to see if the element is in the viewport or not
       * http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
       *
       * @api private
       * @method _elementInViewport
       * @param {Object} el
       */
      function elementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom + 80 <= window.innerHeight && // add 80 to get the text right
        rect.right <= window.innerWidth;
      }
    
      /**
       * To change the scroll of `window` after highlighting an element
       *
       * @api private
       * @param {String} scrollTo
       * @param {Object} targetElement
       * @param {Object} tooltipLayer
       */
    
      function scrollTo(scrollTo, _ref, tooltipLayer) {
        var element = _ref.element;
        if (scrollTo === "off") return;
        var rect;
        if (!this._options.scrollToElement) return;
    
        if (scrollTo === "tooltip") {
          rect = tooltipLayer.getBoundingClientRect();
        } else {
          rect = element.getBoundingClientRect();
        }
    
        if (!elementInViewport(element)) {
          var winHeight = getWinSize().height;
          var top = rect.bottom - (rect.bottom - rect.top); // TODO (afshinm): do we need scroll padding now?
          // I have changed the scroll option and now it scrolls the window to
          // the center of the target element or tooltip.
    
          if (top < 0 || element.clientHeight > winHeight) {
            window.scrollBy(0, rect.top - (winHeight / 2 - rect.height / 2) - this._options.scrollPadding); // 30px padding from edge to look nice
            //Scroll down
          } else {
            window.scrollBy(0, rect.top - (winHeight / 2 - rect.height / 2) + this._options.scrollPadding); // 30px padding from edge to look nice
          }
        }
      }
    
      /**
       * Setting anchors to behave like buttons
       *
       * @api private
       * @method _setAnchorAsButton
       */
      function setAnchorAsButton(anchor) {
        anchor.setAttribute("role", "button");
        anchor.tabIndex = 0;
      }
    
      /**
       * Get an element position on the page
       * Thanks to `meouw`: http://stackoverflow.com/a/442474/375966
       *
       * @api private
       * @method _getOffset
       * @param {Object} element
       * @returns Element's position info
       */
      function getOffset(element) {
        var body = document.body;
        var docEl = document.documentElement;
        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
        var x = element.getBoundingClientRect();
        return {
          top: x.top + scrollTop,
          width: x.width,
          height: x.height,
          left: x.left + scrollLeft
        };
      }
    
      /**
       * Checks to see if target element (or parents) position is fixed or not
       *
       * @api private
       * @method _isFixed
       * @param {Object} element
       * @returns Boolean
       */
    
      function isFixed(element) {
        var p = element.parentNode;
    
        if (!p || p.nodeName === "HTML") {
          return false;
        }
    
        if (getPropValue(element, "position") === "fixed") {
          return true;
        }
    
        return isFixed(p);
      }
    
      var floor$1 = Math.floor;
      var replace = ''.replace;
      var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
      var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;
    
      // https://tc39.es/ecma262/#sec-getsubstitution
      var getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
        var tailPos = position + matched.length;
        var m = captures.length;
        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
        if (namedCaptures !== undefined) {
          namedCaptures = toObject(namedCaptures);
          symbols = SUBSTITUTION_SYMBOLS;
        }
        return replace.call(replacement, symbols, function (match, ch) {
          var capture;
          switch (ch.charAt(0)) {
            case '$': return '$';
            case '&': return matched;
            case '`': return str.slice(0, position);
            case "'": return str.slice(tailPos);
            case '<':
              capture = namedCaptures[ch.slice(1, -1)];
              break;
            default: // \d\d?
              var n = +ch;
              if (n === 0) return match;
              if (n > m) {
                var f = floor$1(n / 10);
                if (f === 0) return match;
                if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                return match;
              }
              capture = captures[n - 1];
          }
          return capture === undefined ? '' : capture;
        });
      };
    
      var max$1 = Math.max;
      var min$3 = Math.min;
    
      var maybeToString = function (it) {
        return it === undefined ? it : String(it);
      };
    
      // @@replace logic
      fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
        var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
        var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
        var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    
        return [
          // `String.prototype.replace` method
          // https://tc39.es/ecma262/#sec-string.prototype.replace
          function replace(searchValue, replaceValue) {
            var O = requireObjectCoercible(this);
            var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
            return replacer !== undefined
              ? replacer.call(searchValue, O, replaceValue)
              : nativeReplace.call(String(O), searchValue, replaceValue);
          },
          // `RegExp.prototype[@@replace]` method
          // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
          function (regexp, replaceValue) {
            if (
              (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
              (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
            ) {
              var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
              if (res.done) return res.value;
            }
    
            var rx = anObject(regexp);
            var S = String(this);
    
            var functionalReplace = typeof replaceValue === 'function';
            if (!functionalReplace) replaceValue = String(replaceValue);
    
            var global = rx.global;
            if (global) {
              var fullUnicode = rx.unicode;
              rx.lastIndex = 0;
            }
            var results = [];
            while (true) {
              var result = regexpExecAbstract(rx, S);
              if (result === null) break;
    
              results.push(result);
              if (!global) break;
    
              var matchStr = String(result[0]);
              if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }
    
            var accumulatedResult = '';
            var nextSourcePosition = 0;
            for (var i = 0; i < results.length; i++) {
              result = results[i];
    
              var matched = String(result[0]);
              var position = max$1(min$3(toInteger(result.index), S.length), 0);
              var captures = [];
              // NOTE: This is equivalent to
              //   captures = result.slice(1).map(maybeToString)
              // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
              // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
              // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
              for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
              var namedCaptures = result.groups;
              if (functionalReplace) {
                var replacerArgs = [matched].concat(captures, position, S);
                if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                var replacement = String(replaceValue.apply(undefined, replacerArgs));
              } else {
                replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
              }
              if (position >= nextSourcePosition) {
                accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                nextSourcePosition = position + matched.length;
              }
            }
            return accumulatedResult + S.slice(nextSourcePosition);
          }
        ];
      });
    
      /**
       * Remove a class from an element
       *
       * @api private
       * @method _removeClass
       * @param {Object} element
       * @param {RegExp|String} classNameRegex can be regex or string
       * @returns null
       */
      function removeClass(element, classNameRegex) {
        if (element instanceof SVGElement) {
          var pre = element.getAttribute("class") || "";
          element.setAttribute("class", pre.replace(classNameRegex, "").replace(/^\s+|\s+$/g, ""));
        } else {
          element.className = element.className.replace(classNameRegex, "").replace(/^\s+|\s+$/g, "");
        }
      }
    
      /**
       * Sets the style of an DOM element
       *
       * @param {Object} element
       * @param {Object|string} style
       * @return null
       */
      function setStyle(element, style) {
        var cssText = "";
    
        if (element.style.cssText) {
          cssText += element.style.cssText;
        }
    
        if (typeof style === "string") {
          cssText += style;
        } else {
          for (var rule in style) {
            cssText += "".concat(rule, ":").concat(style[rule], ";");
          }
        }
    
        element.style.cssText = cssText;
      }
    
      /**
       * Update the position of the helper layer on the screen
       *
       * @api private
       * @method _setHelperLayerPosition
       * @param {Object} helperLayer
       */
    
      function setHelperLayerPosition(helperLayer) {
        if (helperLayer) {
          //prevent error when `this._currentStep` in undefined
          if (!this._introItems[this._currentStep]) return;
          var currentElement = this._introItems[this._currentStep];
          var elementPosition = getOffset(currentElement.element);
          var widthHeightPadding = this._options.helperElementPadding; // If the target element is fixed, the tooltip should be fixed as well.
          // Otherwise, remove a fixed class that may be left over from the previous
          // step.
    
          if (isFixed(currentElement.element)) {
            addClass(helperLayer, "introjs-fixedTooltip");
          } else {
            removeClass(helperLayer, "introjs-fixedTooltip");
          }
    
          if (currentElement.position === "floating") {
            widthHeightPadding = 0;
          } //set new position to helper layer
    
    
          setStyle(helperLayer, {
            width: "".concat(elementPosition.width + widthHeightPadding, "px"),
            height: "".concat(elementPosition.height + widthHeightPadding, "px"),
            top: "".concat(elementPosition.top - widthHeightPadding / 2, "px"),
            left: "".concat(elementPosition.left - widthHeightPadding / 2, "px")
          });
        }
      }
    
      // optional / simple context binding
      var functionBindContext = function (fn, that, length) {
        aFunction$1(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 0: return function () {
            return fn.call(that);
          };
          case 1: return function (a) {
            return fn.call(that, a);
          };
          case 2: return function (a, b) {
            return fn.call(that, a, b);
          };
          case 3: return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
        }
        return function (/* ...args */) {
          return fn.apply(that, arguments);
        };
      };
    
      var push = [].push;
    
      // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
      var createMethod$2 = function (TYPE) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var IS_FILTER_OUT = TYPE == 7;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        return function ($this, callbackfn, that, specificCreate) {
          var O = toObject($this);
          var self = indexedObject(O);
          var boundFunction = functionBindContext(callbackfn, that, 3);
          var length = toLength(self.length);
          var index = 0;
          var create = specificCreate || arraySpeciesCreate;
          var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
          var value, result;
          for (;length > index; index++) if (NO_HOLES || index in self) {
            value = self[index];
            result = boundFunction(value, index, O);
            if (TYPE) {
              if (IS_MAP) target[index] = result; // map
              else if (result) switch (TYPE) {
                case 3: return true;              // some
                case 5: return value;             // find
                case 6: return index;             // findIndex
                case 2: push.call(target, value); // filter
              } else switch (TYPE) {
                case 4: return false;             // every
                case 7: push.call(target, value); // filterOut
              }
            }
          }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
      };
    
      var arrayIteration = {
        // `Array.prototype.forEach` method
        // https://tc39.es/ecma262/#sec-array.prototype.foreach
        forEach: createMethod$2(0),
        // `Array.prototype.map` method
        // https://tc39.es/ecma262/#sec-array.prototype.map
        map: createMethod$2(1),
        // `Array.prototype.filter` method
        // https://tc39.es/ecma262/#sec-array.prototype.filter
        filter: createMethod$2(2),
        // `Array.prototype.some` method
        // https://tc39.es/ecma262/#sec-array.prototype.some
        some: createMethod$2(3),
        // `Array.prototype.every` method
        // https://tc39.es/ecma262/#sec-array.prototype.every
        every: createMethod$2(4),
        // `Array.prototype.find` method
        // https://tc39.es/ecma262/#sec-array.prototype.find
        find: createMethod$2(5),
        // `Array.prototype.findIndex` method
        // https://tc39.es/ecma262/#sec-array.prototype.findIndex
        findIndex: createMethod$2(6),
        // `Array.prototype.filterOut` method
        // https://github.com/tc39/proposal-array-filtering
        filterOut: createMethod$2(7)
      };
    
      var defineProperty = Object.defineProperty;
      var cache = {};
    
      var thrower = function (it) { throw it; };
    
      var arrayMethodUsesToLength = function (METHOD_NAME, options) {
        if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
        if (!options) options = {};
        var method = [][METHOD_NAME];
        var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
        var argument0 = has(options, 0) ? options[0] : thrower;
        var argument1 = has(options, 1) ? options[1] : undefined;
    
        return cache[METHOD_NAME] = !!method && !fails(function () {
          if (ACCESSORS && !descriptors) return true;
          var O = { length: -1 };
    
          if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
          else O[1] = 1;
    
          method.call(O, argument0, argument1);
        });
      };
    
      var $filter = arrayIteration.filter;
    
    
    
      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
      // Edge 14- issue
      var USES_TO_LENGTH = arrayMethodUsesToLength('filter');
    
      // `Array.prototype.filter` method
      // https://tc39.es/ecma262/#sec-array.prototype.filter
      // with adding support of @@species
      _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
        filter: function filter(callbackfn /* , thisArg */) {
          return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
    
      // `Object.keys` method
      // https://tc39.es/ecma262/#sec-object.keys
      var objectKeys = Object.keys || function keys(O) {
        return objectKeysInternal(O, enumBugKeys);
      };
    
      // `Object.defineProperties` method
      // https://tc39.es/ecma262/#sec-object.defineproperties
      var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
        return O;
      };
    
      var html = getBuiltIn('document', 'documentElement');
    
      var GT = '>';
      var LT = '<';
      var PROTOTYPE = 'prototype';
      var SCRIPT = 'script';
      var IE_PROTO = sharedKey('IE_PROTO');
    
      var EmptyConstructor = function () { /* empty */ };
    
      var scriptTag = function (content) {
        return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
      };
    
      // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
      var NullProtoObjectViaActiveX = function (activeXDocument) {
        activeXDocument.write(scriptTag(''));
        activeXDocument.close();
        var temp = activeXDocument.parentWindow.Object;
        activeXDocument = null; // avoid memory leak
        return temp;
      };
    
      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      var NullProtoObjectViaIFrame = function () {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = documentCreateElement('iframe');
        var JS = 'java' + SCRIPT + ':';
        var iframeDocument;
        iframe.style.display = 'none';
        html.appendChild(iframe);
        // https://github.com/zloirock/core-js/issues/475
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag('document.F=Object'));
        iframeDocument.close();
        return iframeDocument.F;
      };
    
      // Check for document.domain and active x support
      // No need to use active x approach when document.domain is not set
      // see https://github.com/es-shims/es5-shim/issues/150
      // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
      // avoid IE GC bug
      var activeXDocument;
      var NullProtoObject = function () {
        try {
          /* global ActiveXObject */
          activeXDocument = document.domain && new ActiveXObject('htmlfile');
        } catch (error) { /* ignore */ }
        NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
        var length = enumBugKeys.length;
        while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };
    
      hiddenKeys[IE_PROTO] = true;
    
      // `Object.create` method
      // https://tc39.es/ecma262/#sec-object.create
      var objectCreate = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          // add "__proto__" for Object.getPrototypeOf polyfill
          result[IE_PROTO] = O;
        } else result = NullProtoObject();
        return Properties === undefined ? result : objectDefineProperties(result, Properties);
      };
    
      var UNSCOPABLES = wellKnownSymbol('unscopables');
      var ArrayPrototype = Array.prototype;
    
      // Array.prototype[@@unscopables]
      // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
      if (ArrayPrototype[UNSCOPABLES] == undefined) {
        objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: objectCreate(null)
        });
      }
    
      // add a key to Array.prototype[@@unscopables]
      var addToUnscopables = function (key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
      };
    
      var $includes = arrayIncludes.includes;
    
    
    
      var USES_TO_LENGTH$1 = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });
    
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      _export({ target: 'Array', proto: true, forced: !USES_TO_LENGTH$1 }, {
        includes: function includes(el /* , fromIndex = 0 */) {
          return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
    
      // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
      addToUnscopables('includes');
    
      var arrayMethodIsStrict = function (METHOD_NAME, argument) {
        var method = [][METHOD_NAME];
        return !!method && fails(function () {
          // eslint-disable-next-line no-useless-call,no-throw-literal
          method.call(null, argument || function () { throw 1; }, 1);
        });
      };
    
      var $indexOf = arrayIncludes.indexOf;
    
    
    
      var nativeIndexOf = [].indexOf;
    
      var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
      var STRICT_METHOD = arrayMethodIsStrict('indexOf');
      var USES_TO_LENGTH$2 = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });
    
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      _export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH$2 }, {
        indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
          return NEGATIVE_ZERO
            // convert -0 to +0
            ? nativeIndexOf.apply(this, arguments) || 0
            : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
    
      var nativeJoin = [].join;
    
      var ES3_STRINGS = indexedObject != Object;
      var STRICT_METHOD$1 = arrayMethodIsStrict('join', ',');
    
      // `Array.prototype.join` method
      // https://tc39.es/ecma262/#sec-array.prototype.join
      _export({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$1 }, {
        join: function join(separator) {
          return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
        }
      });
    
      var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('slice');
      var USES_TO_LENGTH$3 = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });
    
      var SPECIES$4 = wellKnownSymbol('species');
      var nativeSlice = [].slice;
      var max$2 = Math.max;
    
      // `Array.prototype.slice` method
      // https://tc39.es/ecma262/#sec-array.prototype.slice
      // fallback for not array-like ES3 strings and DOM objects
      _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 || !USES_TO_LENGTH$3 }, {
        slice: function slice(start, end) {
          var O = toIndexedObject(this);
          var length = toLength(O.length);
          var k = toAbsoluteIndex(start, length);
          var fin = toAbsoluteIndex(end === undefined ? length : end, length);
          // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
          var Constructor, result, n;
          if (isArray(O)) {
            Constructor = O.constructor;
            // cross-realm fallback
            if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
              Constructor = undefined;
            } else if (isObject(Constructor)) {
              Constructor = Constructor[SPECIES$4];
              if (Constructor === null) Constructor = undefined;
            }
            if (Constructor === Array || Constructor === undefined) {
              return nativeSlice.call(O, k, fin);
            }
          }
          result = new (Constructor === undefined ? Array : Constructor)(max$2(fin - k, 0));
          for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
          result.length = n;
          return result;
        }
      });
    
      var notARegexp = function (it) {
        if (isRegexp(it)) {
          throw TypeError("The method doesn't accept regular expressions");
        } return it;
      };
    
      var MATCH$1 = wellKnownSymbol('match');
    
      var correctIsRegexpLogic = function (METHOD_NAME) {
        var regexp = /./;
        try {
          '/./'[METHOD_NAME](regexp);
        } catch (error1) {
          try {
            regexp[MATCH$1] = false;
            return '/./'[METHOD_NAME](regexp);
          } catch (error2) { /* empty */ }
        } return false;
      };
    
      // `String.prototype.includes` method
      // https://tc39.es/ecma262/#sec-string.prototype.includes
      _export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
        includes: function includes(searchString /* , position = 0 */) {
          return !!~String(requireObjectCoercible(this))
            .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
        }
      });
    
      /**
       * Set tooltip left so it doesn't go off the right side of the window
       *
       * @return boolean true, if tooltipLayerStyleLeft is ok.  false, otherwise.
       */
      function checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer) {
        if (targetOffset.left + tooltipLayerStyleLeft + tooltipOffset.width > windowSize.width) {
          // off the right side of the window
          tooltipLayer.left = "".concat(windowSize.width - tooltipOffset.width - targetOffset.left, "px");
          return false;
        }
    
        tooltipLayer.left = "".concat(tooltipLayerStyleLeft, "px");
        return true;
      }
    
      /**
       * Set tooltip right so it doesn't go off the left side of the window
       *
       * @return boolean true, if tooltipLayerStyleRight is ok.  false, otherwise.
       */
      function checkLeft(targetOffset, tooltipLayerStyleRight, tooltipOffset, tooltipLayer) {
        if (targetOffset.left + targetOffset.width - tooltipLayerStyleRight - tooltipOffset.width < 0) {
          // off the left side of the window
          tooltipLayer.style.left = "".concat(-targetOffset.left, "px");
          return false;
        }
    
        tooltipLayer.style.right = "".concat(tooltipLayerStyleRight, "px");
        return true;
      }
    
      var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('splice');
      var USES_TO_LENGTH$4 = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });
    
      var max$3 = Math.max;
      var min$4 = Math.min;
      var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
      var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';
    
      // `Array.prototype.splice` method
      // https://tc39.es/ecma262/#sec-array.prototype.splice
      // with adding support of @@species
      _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 || !USES_TO_LENGTH$4 }, {
        splice: function splice(start, deleteCount /* , ...items */) {
          var O = toObject(this);
          var len = toLength(O.length);
          var actualStart = toAbsoluteIndex(start, len);
          var argumentsLength = arguments.length;
          var insertCount, actualDeleteCount, A, k, from, to;
          if (argumentsLength === 0) {
            insertCount = actualDeleteCount = 0;
          } else if (argumentsLength === 1) {
            insertCount = 0;
            actualDeleteCount = len - actualStart;
          } else {
            insertCount = argumentsLength - 2;
            actualDeleteCount = min$4(max$3(toInteger(deleteCount), 0), len - actualStart);
          }
          if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER$1) {
            throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
          }
          A = arraySpeciesCreate(O, actualDeleteCount);
          for (k = 0; k < actualDeleteCount; k++) {
            from = actualStart + k;
            if (from in O) createProperty(A, k, O[from]);
          }
          A.length = actualDeleteCount;
          if (insertCount < actualDeleteCount) {
            for (k = actualStart; k < len - actualDeleteCount; k++) {
              from = k + actualDeleteCount;
              to = k + insertCount;
              if (from in O) O[to] = O[from];
              else delete O[to];
            }
            for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
          } else if (insertCount > actualDeleteCount) {
            for (k = len - actualDeleteCount; k > actualStart; k--) {
              from = k + actualDeleteCount - 1;
              to = k + insertCount - 1;
              if (from in O) O[to] = O[from];
              else delete O[to];
            }
          }
          for (k = 0; k < insertCount; k++) {
            O[k + actualStart] = arguments[k + 2];
          }
          O.length = len - actualDeleteCount + insertCount;
          return A;
        }
      });
    
      /**
       * Remove an entry from a string array if it's there, does nothing if it isn't there.
       *
       * @param {Array} stringArray
       * @param {String} stringToRemove
       */
      function removeEntry(stringArray, stringToRemove) {
        if (stringArray.includes(stringToRemove)) {
          stringArray.splice(stringArray.indexOf(stringToRemove), 1);
        }
      }
    
      /**
       * auto-determine alignment
       * @param {Integer}  offsetLeft
       * @param {Integer}  tooltipWidth
       * @param {Object}   windowSize
       * @param {String}   desiredAlignment
       * @return {String}  calculatedAlignment
       */
    
      function _determineAutoAlignment(offsetLeft, tooltipWidth, _ref, desiredAlignment) {
        var width = _ref.width;
        var halfTooltipWidth = tooltipWidth / 2;
        var winWidth = Math.min(width, window.screen.width);
        var possibleAlignments = ["-left-aligned", "-middle-aligned", "-right-aligned"];
        var calculatedAlignment = ""; // valid left must be at least a tooltipWidth
        // away from right side
    
        if (winWidth - offsetLeft < tooltipWidth) {
          removeEntry(possibleAlignments, "-left-aligned");
        } // valid middle must be at least half
        // width away from both sides
    
    
        if (offsetLeft < halfTooltipWidth || winWidth - offsetLeft < halfTooltipWidth) {
          removeEntry(possibleAlignments, "-middle-aligned");
        } // valid right must be at least a tooltipWidth
        // width away from left side
    
    
        if (offsetLeft < tooltipWidth) {
          removeEntry(possibleAlignments, "-right-aligned");
        }
    
        if (possibleAlignments.length) {
          if (possibleAlignments.includes(desiredAlignment)) {
            // the desired alignment is valid
            calculatedAlignment = desiredAlignment;
          } else {
            // pick the first valid position, in order
            calculatedAlignment = possibleAlignments[0];
          }
        } else {
          // if screen width is too small
          // for ANY alignment, middle is
          // probably the best for visibility
          calculatedAlignment = "-middle-aligned";
        }
    
        return calculatedAlignment;
      }
      /**
       * Determines the position of the tooltip based on the position precedence and availability
       * of screen space.
       *
       * @param {Object}    targetElement
       * @param {Object}    tooltipLayer
       * @param {String}    desiredTooltipPosition
       * @return {String}   calculatedPosition
       */
    
    
      function _determineAutoPosition(targetElement, tooltipLayer, desiredTooltipPosition) {
        // Take a clone of position precedence. These will be the available
        var possiblePositions = this._options.positionPrecedence.slice();
    
        var windowSize = getWinSize();
        var tooltipHeight = getOffset(tooltipLayer).height + 10;
        var tooltipWidth = getOffset(tooltipLayer).width + 20;
        var targetElementRect = targetElement.getBoundingClientRect(); // If we check all the possible areas, and there are no valid places for the tooltip, the element
        // must take up most of the screen real estate. Show the tooltip floating in the middle of the screen.
    
        var calculatedPosition = "floating";
        /*
         * auto determine position
         */
        // Check for space below
    
        if (targetElementRect.bottom + tooltipHeight > windowSize.height) {
          removeEntry(possiblePositions, "bottom");
        } // Check for space above
    
    
        if (targetElementRect.top - tooltipHeight < 0) {
          removeEntry(possiblePositions, "top");
        } // Check for space to the right
    
    
        if (targetElementRect.right + tooltipWidth > windowSize.width) {
          removeEntry(possiblePositions, "right");
        } // Check for space to the left
    
    
        if (targetElementRect.left - tooltipWidth < 0) {
          removeEntry(possiblePositions, "left");
        } // @var {String}  ex: 'right-aligned'
    
    
        var desiredAlignment = function (pos) {
          var hyphenIndex = pos.indexOf("-");
    
          if (hyphenIndex !== -1) {
            // has alignment
            return pos.substr(hyphenIndex);
          }
    
          return "";
        }(desiredTooltipPosition || ""); // strip alignment from position
    
    
        if (desiredTooltipPosition) {
          // ex: "bottom-right-aligned"
          // should return 'bottom'
          desiredTooltipPosition = desiredTooltipPosition.split("-")[0];
        }
    
        if (possiblePositions.length) {
          if (possiblePositions.includes(desiredTooltipPosition)) {
            // If the requested position is in the list, choose that
            calculatedPosition = desiredTooltipPosition;
          } else {
            // Pick the first valid position, in order
            calculatedPosition = possiblePositions[0];
          }
        } // only top and bottom positions have optional alignments
    
    
        if (["top", "bottom"].includes(calculatedPosition)) {
          calculatedPosition += _determineAutoAlignment(targetElementRect.left, tooltipWidth, windowSize, desiredAlignment);
        }
    
        return calculatedPosition;
      }
      /**
       * Render tooltip box in the page
       *
       * @api private
       * @method placeTooltip
       * @param {HTMLElement} targetElement
       * @param {HTMLElement} tooltipLayer
       * @param {HTMLElement} arrowLayer
       * @param {Boolean} hintMode
       */
    
    
      function placeTooltip(targetElement, tooltipLayer, arrowLayer, hintMode) {
        var tooltipCssClass = "";
        var currentStepObj;
        var tooltipOffset;
        var targetOffset;
        var windowSize;
        var currentTooltipPosition;
        hintMode = hintMode || false; //reset the old style
    
        tooltipLayer.style.top = null;
        tooltipLayer.style.right = null;
        tooltipLayer.style.bottom = null;
        tooltipLayer.style.left = null;
        tooltipLayer.style.marginLeft = null;
        tooltipLayer.style.marginTop = null;
        arrowLayer.style.display = "inherit"; //prevent error when `this._currentStep` is undefined
    
        if (!this._introItems[this._currentStep]) return; //if we have a custom css class for each step
    
        currentStepObj = this._introItems[this._currentStep];
    
        if (typeof currentStepObj.tooltipClass === "string") {
          tooltipCssClass = currentStepObj.tooltipClass;
        } else {
          tooltipCssClass = this._options.tooltipClass;
        }
    
        tooltipLayer.className = ["introjs-tooltip", tooltipCssClass].filter(Boolean).join(" ");
        tooltipLayer.setAttribute("role", "dialog");
        currentTooltipPosition = this._introItems[this._currentStep].position; // Floating is always valid, no point in calculating
    
        if (currentTooltipPosition !== "floating" && this._options.autoPosition) {
          currentTooltipPosition = _determineAutoPosition.call(this, targetElement, tooltipLayer, currentTooltipPosition);
        }
    
        var tooltipLayerStyleLeft;
        targetOffset = getOffset(targetElement);
        tooltipOffset = getOffset(tooltipLayer);
        windowSize = getWinSize();
        addClass(tooltipLayer, "introjs-".concat(currentTooltipPosition));
    
        switch (currentTooltipPosition) {
          case "top-right-aligned":
            arrowLayer.className = "introjs-arrow bottom-right";
            var tooltipLayerStyleRight = 0;
            checkLeft(targetOffset, tooltipLayerStyleRight, tooltipOffset, tooltipLayer);
            tooltipLayer.style.bottom = "".concat(targetOffset.height + 20, "px");
            break;
    
          case "top-middle-aligned":
            arrowLayer.className = "introjs-arrow bottom-middle";
            var tooltipLayerStyleLeftRight = targetOffset.width / 2 - tooltipOffset.width / 2; // a fix for middle aligned hints
    
            if (hintMode) {
              tooltipLayerStyleLeftRight += 5;
            }
    
            if (checkLeft(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, tooltipLayer)) {
              tooltipLayer.style.right = null;
              checkRight(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, windowSize, tooltipLayer);
            }
    
            tooltipLayer.style.bottom = "".concat(targetOffset.height + 20, "px");
            break;
    
          case "top-left-aligned": // top-left-aligned is the same as the default top
    
          case "top":
            arrowLayer.className = "introjs-arrow bottom";
            tooltipLayerStyleLeft = hintMode ? 0 : 15;
            checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer);
            tooltipLayer.style.bottom = "".concat(targetOffset.height + 20, "px");
            break;
    
          case "right":
            tooltipLayer.style.left = "".concat(targetOffset.width + 20, "px");
    
            if (targetOffset.top + tooltipOffset.height > windowSize.height) {
              // In this case, right would have fallen below the bottom of the screen.
              // Modify so that the bottom of the tooltip connects with the target
              arrowLayer.className = "introjs-arrow left-bottom";
              tooltipLayer.style.top = "-".concat(tooltipOffset.height - targetOffset.height - 20, "px");
            } else {
              arrowLayer.className = "introjs-arrow left";
            }
    
            break;
    
          case "left":
            if (!hintMode && this._options.showStepNumbers === true) {
              tooltipLayer.style.top = "15px";
            }
    
            if (targetOffset.top + tooltipOffset.height > windowSize.height) {
              // In this case, left would have fallen below the bottom of the screen.
              // Modify so that the bottom of the tooltip connects with the target
              tooltipLayer.style.top = "-".concat(tooltipOffset.height - targetOffset.height - 20, "px");
              arrowLayer.className = "introjs-arrow right-bottom";
            } else {
              arrowLayer.className = "introjs-arrow right";
            }
    
            tooltipLayer.style.right = "".concat(targetOffset.width + 20, "px");
            break;
    
          case "floating":
            arrowLayer.style.display = "none"; //we have to adjust the top and left of layer manually for intro items without element
    
            tooltipLayer.style.left = "50%";
            tooltipLayer.style.top = "50%";
            tooltipLayer.style.marginLeft = "-".concat(tooltipOffset.width / 2, "px");
            tooltipLayer.style.marginTop = "-".concat(tooltipOffset.height / 2, "px");
            break;
    
          case "bottom-right-aligned":
            arrowLayer.className = "introjs-arrow top-right";
            tooltipLayerStyleRight = 0;
            checkLeft(targetOffset, tooltipLayerStyleRight, tooltipOffset, tooltipLayer);
            tooltipLayer.style.top = "".concat(targetOffset.height + 20, "px");
            break;
    
          case "bottom-middle-aligned":
            arrowLayer.className = "introjs-arrow top-middle";
            tooltipLayerStyleLeftRight = targetOffset.width / 2 - tooltipOffset.width / 2; // a fix for middle aligned hints
    
            if (hintMode) {
              tooltipLayerStyleLeftRight += 5;
            }
    
            if (checkLeft(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, tooltipLayer)) {
              tooltipLayer.style.right = null;
              checkRight(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, windowSize, tooltipLayer);
            }
    
            tooltipLayer.style.top = "".concat(targetOffset.height + 20, "px");
            break;
          // case 'bottom-left-aligned':
          // Bottom-left-aligned is the same as the default bottom
          // case 'bottom':
          // Bottom going to follow the default behavior
    
          default:
            arrowLayer.className = "introjs-arrow top";
            tooltipLayerStyleLeft = 0;
            checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer);
            tooltipLayer.style.top = "".concat(targetOffset.height + 20, "px");
        }
      }
    
      /**
       * To remove all show element(s)
       *
       * @api private
       * @method _removeShowElement
       */
    
      function removeShowElement() {
        var elms = document.querySelectorAll(".introjs-showElement");
        forEach(elms, function (elm) {
          removeClass(elm, /introjs-[a-zA-Z]+/g);
        });
      }
    
      function _createElement(tagname, attrs) {
        var element = document.createElement(tagname);
        attrs = attrs || {}; // regex for matching attributes that need to be set with setAttribute
    
        var setAttRegex = /^(?:role|data-|aria-)/;
    
        for (var k in attrs) {
          var v = attrs[k];
    
          if (k === "style") {
            setStyle(element, v);
          } else if (k.match(setAttRegex)) {
            element.setAttribute(k, v);
          } else {
            element[k] = v;
          }
        }
    
        return element;
      }
    
      /**
       * Appends `element` to `parentElement`
       *
       * @param {Element} parentElement
       * @param {Element} element
       * @param {Boolean} [animate=false]
       */
    
      function appendChild(parentElement, element, animate) {
        if (animate) {
          var existingOpacity = element.style.opacity || "1";
          setStyle(element, {
            opacity: "0"
          });
          window.setTimeout(function () {
            setStyle(element, {
              opacity: existingOpacity
            });
          }, 10);
        }
    
        parentElement.appendChild(element);
      }
    
      /**
       * Gets the current progress percentage
       *
       * @api private
       * @method _getProgress
       * @returns current progress percentage
       */
    
      function _getProgress() {
        // Steps are 0 indexed
        var currentStep = parseInt(this._currentStep + 1, 10);
        return currentStep / this._introItems.length * 100;
      }
      /**
       * Add disableinteraction layer and adjust the size and position of the layer
       *
       * @api private
       * @method _disableInteraction
       */
    
    
      function _disableInteraction() {
        var disableInteractionLayer = document.querySelector(".introjs-disableInteraction");
    
        if (disableInteractionLayer === null) {
          disableInteractionLayer = _createElement("div", {
            className: "introjs-disableInteraction"
          });
    
          this._targetElement.appendChild(disableInteractionLayer);
        }
    
        setHelperLayerPosition.call(this, disableInteractionLayer);
      }
      /**
       * Show an element on the page
       *
       * @api private
       * @method _showElement
       * @param {Object} targetElement
       */
    
    
      function _showElement(targetElement) {
        var _this = this;
    
        if (typeof this._introChangeCallback !== "undefined") {
          this._introChangeCallback.call(this, targetElement.element);
        }
    
        var self = this;
        var oldHelperLayer = document.querySelector(".introjs-helperLayer");
        var oldReferenceLayer = document.querySelector(".introjs-tooltipReferenceLayer");
        var highlightClass = "introjs-helperLayer";
        var nextTooltipButton;
        var prevTooltipButton;
        var skipTooltipButton;
    
        if (typeof targetElement.highlightClass === "string") {
          highlightClass += " ".concat(targetElement.highlightClass);
        } //check for options highlight class
    
    
        if (typeof this._options.highlightClass === "string") {
          highlightClass += " ".concat(this._options.highlightClass);
        }
    
        if (oldHelperLayer !== null) {
          var oldHelperNumberLayer = oldReferenceLayer.querySelector(".introjs-helperNumberLayer");
          var oldtooltipLayer = oldReferenceLayer.querySelector(".introjs-tooltiptext");
          var oldTooltipTitleLayer = oldReferenceLayer.querySelector(".introjs-tooltip-title");
          var oldArrowLayer = oldReferenceLayer.querySelector(".introjs-arrow");
          var oldtooltipContainer = oldReferenceLayer.querySelector(".introjs-tooltip");
          skipTooltipButton = oldReferenceLayer.querySelector(".introjs-skipbutton");
          prevTooltipButton = oldReferenceLayer.querySelector(".introjs-prevbutton");
          nextTooltipButton = oldReferenceLayer.querySelector(".introjs-nextbutton"); //update or reset the helper highlight class
    
          oldHelperLayer.className = highlightClass; //hide the tooltip
    
          oldtooltipContainer.style.opacity = 0;
          oldtooltipContainer.style.display = "none"; // if the target element is within a scrollable element
    
          scrollParentToElement.call(self, targetElement); // set new position to helper layer
    
          setHelperLayerPosition.call(self, oldHelperLayer);
          setHelperLayerPosition.call(self, oldReferenceLayer); //remove old classes if the element still exist
    
          removeShowElement(); //we should wait until the CSS3 transition is competed (it's 0.3 sec) to prevent incorrect `height` and `width` calculation
    
          if (self._lastShowElementTimer) {
            window.clearTimeout(self._lastShowElementTimer);
          }
    
          self._lastShowElementTimer = window.setTimeout(function () {
            // set current step to the label
            if (oldHelperNumberLayer !== null) {
              oldHelperNumberLayer.innerHTML = "".concat(targetElement.step, " of ").concat(_this._introItems.length);
            } // set current tooltip text
    
    
            oldtooltipLayer.innerHTML = targetElement.intro; // set current tooltip title
    
            oldTooltipTitleLayer.innerHTML = targetElement.title; //set the tooltip position
    
            oldtooltipContainer.style.display = "block";
            placeTooltip.call(self, targetElement.element, oldtooltipContainer, oldArrowLayer); //change active bullet
    
            if (self._options.showBullets) {
              oldReferenceLayer.querySelector(".introjs-bullets li > a.active").className = "";
              oldReferenceLayer.querySelector(".introjs-bullets li > a[data-stepnumber=\"".concat(targetElement.step, "\"]")).className = "active";
            }
    
            oldReferenceLayer.querySelector(".introjs-progress .introjs-progressbar").style.cssText = "width:".concat(_getProgress.call(self), "%;");
            oldReferenceLayer.querySelector(".introjs-progress .introjs-progressbar").setAttribute("aria-valuenow", _getProgress.call(self)); //show the tooltip
    
            oldtooltipContainer.style.opacity = 1; //reset button focus
    
            if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null && /introjs-donebutton/gi.test(nextTooltipButton.className)) {
              // skip button is now "done" button
              nextTooltipButton.focus();
            } else if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
              //still in the tour, focus on next
              nextTooltipButton.focus();
            } // change the scroll of the window, if needed
    
    
            scrollTo.call(self, targetElement.scrollTo, targetElement, oldtooltipLayer);
          }, 350); // end of old element if-else condition
        } else {
          var helperLayer = _createElement("div", {
            className: highlightClass
          });
          var referenceLayer = _createElement("div", {
            className: "introjs-tooltipReferenceLayer"
          });
          var arrowLayer = _createElement("div", {
            className: "introjs-arrow"
          });
          var tooltipLayer = _createElement("div", {
            className: "introjs-tooltip"
          });
          var tooltipTextLayer = _createElement("div", {
            className: "introjs-tooltiptext"
          });
          var tooltipHeaderLayer = _createElement("div", {
            className: "introjs-tooltip-header"
          });
          var tooltipTitleLayer = _createElement("h1", {
            className: "introjs-tooltip-title"
          });
          var bulletsLayer = _createElement("div", {
            className: "introjs-bullets"
          });
          var progressLayer = _createElement("div");
          var buttonsLayer = _createElement("div");
          setStyle(helperLayer, {
            "box-shadow": "0 0 1px 2px rgba(33, 33, 33, 0.8), rgba(33, 33, 33, ".concat(self._options.overlayOpacity.toString(), ") 0 0 0 5000px")
          }); // target is within a scrollable element
    
          scrollParentToElement.call(self, targetElement); //set new position to helper layer
    
          setHelperLayerPosition.call(self, helperLayer);
          setHelperLayerPosition.call(self, referenceLayer); //add helper layer to target element
    
          appendChild(this._targetElement, helperLayer, true);
          appendChild(this._targetElement, referenceLayer);
          tooltipTextLayer.innerHTML = targetElement.intro;
          tooltipTitleLayer.innerHTML = targetElement.title;
    
          if (this._options.showBullets === false) {
            bulletsLayer.style.display = "none";
          }
    
          var ulContainer = _createElement("ul");
          ulContainer.setAttribute("role", "tablist");
    
          var anchorClick = function anchorClick() {
            self.goToStep(this.getAttribute("data-stepnumber"));
          };
    
          forEach(this._introItems, function (_ref, i) {
            var step = _ref.step;
            var innerLi = _createElement("li");
            var anchorLink = _createElement("a");
            innerLi.setAttribute("role", "presentation");
            anchorLink.setAttribute("role", "tab");
            anchorLink.onclick = anchorClick;
    
            if (i === targetElement.step - 1) {
              anchorLink.className = "active";
            }
    
            setAnchorAsButton(anchorLink);
            anchorLink.innerHTML = "&nbsp;";
            anchorLink.setAttribute("data-stepnumber", step);
            innerLi.appendChild(anchorLink);
            ulContainer.appendChild(innerLi);
          });
          bulletsLayer.appendChild(ulContainer);
          progressLayer.className = "introjs-progress";
    
          if (this._options.showProgress === false) {
            progressLayer.style.display = "none";
          }
    
          var progressBar = _createElement("div", {
            className: "introjs-progressbar"
          });
    
          if (this._options.progressBarAdditionalClass) {
            progressBar.className += " " + this._options.progressBarAdditionalClass;
          }
    
          progressBar.setAttribute("role", "progress");
          progressBar.setAttribute("aria-valuemin", 0);
          progressBar.setAttribute("aria-valuemax", 100);
          progressBar.setAttribute("aria-valuenow", _getProgress.call(this));
          progressBar.style.cssText = "width:".concat(_getProgress.call(this), "%;");
          progressLayer.appendChild(progressBar);
          buttonsLayer.className = "introjs-tooltipbuttons";
    
          if (this._options.showButtons === false) {
            buttonsLayer.style.display = "none";
          }
    
          tooltipHeaderLayer.appendChild(tooltipTitleLayer);
          tooltipLayer.appendChild(tooltipHeaderLayer);
          tooltipLayer.appendChild(tooltipTextLayer);
          tooltipLayer.appendChild(bulletsLayer);
          tooltipLayer.appendChild(progressLayer); // add helper layer number
    
          var helperNumberLayer = _createElement("div");
    
          if (this._options.showStepNumbers === true) {
            helperNumberLayer.className = "introjs-helperNumberLayer";
            helperNumberLayer.innerHTML = "".concat(targetElement.step, " of ").concat(this._introItems.length);
            tooltipLayer.appendChild(helperNumberLayer);
          }
    
          tooltipLayer.appendChild(arrowLayer);
          referenceLayer.appendChild(tooltipLayer); //next button
    
          nextTooltipButton = _createElement("a");
    
          nextTooltipButton.onclick = function () {
            if (self._introItems.length - 1 !== self._currentStep) {
              nextStep.call(self);
            } else if (/introjs-donebutton/gi.test(nextTooltipButton.className)) {
              if (typeof self._introCompleteCallback === "function") {
                self._introCompleteCallback.call(self);
              }
    
              exitIntro.call(self, self._targetElement);
            }
          };
    
          setAnchorAsButton(nextTooltipButton);
          nextTooltipButton.innerHTML = this._options.nextLabel; //previous button
    
          prevTooltipButton = _createElement("a");
    
          prevTooltipButton.onclick = function () {
            if (self._currentStep !== 0) {
              previousStep.call(self);
            }
          };
    
          setAnchorAsButton(prevTooltipButton);
          prevTooltipButton.innerHTML = this._options.prevLabel; //skip button
    
          skipTooltipButton = _createElement("a", {
            className: "introjs-skipbutton"
          });
          setAnchorAsButton(skipTooltipButton);
          skipTooltipButton.innerHTML = this._options.skipLabel;
    
          skipTooltipButton.onclick = function () {
            if (self._introItems.length - 1 === self._currentStep && typeof self._introCompleteCallback === "function") {
              self._introCompleteCallback.call(self);
            }
    
            if (typeof self._introSkipCallback === "function") {
              self._introSkipCallback.call(self);
            }
    
            exitIntro.call(self, self._targetElement);
          };
    
          tooltipHeaderLayer.appendChild(skipTooltipButton); //in order to prevent displaying previous button always
    
          if (this._introItems.length > 1) {
            buttonsLayer.appendChild(prevTooltipButton);
          } // we always need the next button because this
          // button changes to "Done" in the last step of the tour
    
    
          buttonsLayer.appendChild(nextTooltipButton);
          tooltipLayer.appendChild(buttonsLayer); //set proper position
    
          placeTooltip.call(self, targetElement.element, tooltipLayer, arrowLayer); // change the scroll of the window, if needed
    
          scrollTo.call(this, targetElement.scrollTo, targetElement, tooltipLayer); //end of new element if-else condition
        } // removing previous disable interaction layer
    
    
        var disableInteractionLayer = self._targetElement.querySelector(".introjs-disableInteraction");
    
        if (disableInteractionLayer) {
          disableInteractionLayer.parentNode.removeChild(disableInteractionLayer);
        } //disable interaction
    
    
        if (targetElement.disableInteraction) {
          _disableInteraction.call(self);
        } // when it's the first step of tour
    
    
        if (this._currentStep === 0 && this._introItems.length > 1) {
          if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
            nextTooltipButton.className = "".concat(this._options.buttonClass, " introjs-nextbutton");
            nextTooltipButton.innerHTML = this._options.nextLabel;
          }
    
          if (this._options.hidePrev === true) {
            if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
              prevTooltipButton.className = "".concat(this._options.buttonClass, " introjs-prevbutton introjs-hidden");
            }
    
            if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
              addClass(nextTooltipButton, "introjs-fullbutton");
            }
          } else {
            if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
              prevTooltipButton.className = "".concat(this._options.buttonClass, " introjs-prevbutton introjs-disabled");
            }
          }
        } else if (this._introItems.length - 1 === this._currentStep || this._introItems.length === 1) {
          // last step of tour
          if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
            prevTooltipButton.className = "".concat(this._options.buttonClass, " introjs-prevbutton");
          }
    
          if (this._options.hideNext === true) {
            if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
              nextTooltipButton.className = "".concat(this._options.buttonClass, " introjs-nextbutton introjs-hidden");
            }
    
            if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
              addClass(prevTooltipButton, "introjs-fullbutton");
            }
          } else {
            if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
              if (this._options.nextToDone === true) {
                nextTooltipButton.innerHTML = this._options.doneLabel;
                addClass(nextTooltipButton, "".concat(this._options.buttonClass, " introjs-nextbutton introjs-donebutton"));
              } else {
                nextTooltipButton.className = "".concat(this._options.buttonClass, " introjs-nextbutton introjs-disabled");
              }
            }
          }
        } else {
          // steps between start and end
          if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
            prevTooltipButton.className = "".concat(this._options.buttonClass, " introjs-prevbutton");
          }
    
          if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
            nextTooltipButton.className = "".concat(this._options.buttonClass, " introjs-nextbutton");
            nextTooltipButton.innerHTML = this._options.nextLabel;
          }
        }
    
        if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
          prevTooltipButton.setAttribute("role", "button");
        }
    
        if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
          nextTooltipButton.setAttribute("role", "button");
        }
    
        if (typeof skipTooltipButton !== "undefined" && skipTooltipButton !== null) {
          skipTooltipButton.setAttribute("role", "button");
        } //Set focus on "next" button, so that hitting Enter always moves you onto the next step
    
    
        if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
          nextTooltipButton.focus();
        }
    
        setShowElement(targetElement);
    
        if (typeof this._introAfterChangeCallback !== "undefined") {
          this._introAfterChangeCallback.call(this, targetElement.element);
        }
      }
    
      /**
       * Go to specific step of introduction
       *
       * @api private
       * @method _goToStep
       */
    
      function goToStep(step) {
        //because steps starts with zero
        this._currentStep = step - 2;
    
        if (typeof this._introItems !== "undefined") {
          nextStep.call(this);
        }
      }
      /**
       * Go to the specific step of introduction with the explicit [data-step] number
       *
       * @api private
       * @method _goToStepNumber
       */
    
      function goToStepNumber(step) {
        this._currentStepNumber = step;
    
        if (typeof this._introItems !== "undefined") {
          nextStep.call(this);
        }
      }
      /**
       * Go to next step on intro
       *
       * @api private
       * @method _nextStep
       */
    
      function nextStep() {
        var _this = this;
    
        this._direction = "forward";
    
        if (typeof this._currentStepNumber !== "undefined") {
          forEach(this._introItems, function (_ref, i) {
            var step = _ref.step;
    
            if (step === _this._currentStepNumber) {
              _this._currentStep = i - 1;
              _this._currentStepNumber = undefined;
            }
          });
        }
    
        if (typeof this._currentStep === "undefined") {
          this._currentStep = 0;
        } else {
          ++this._currentStep;
        }
    
        var nextStep = this._introItems[this._currentStep];
        var continueStep = true;
    
        if (typeof this._introBeforeChangeCallback !== "undefined") {
          continueStep = this._introBeforeChangeCallback.call(this, nextStep && nextStep.element);
        } // if `onbeforechange` returned `false`, stop displaying the element
    
    
        if (continueStep === false) {
          --this._currentStep;
          return false;
        }
    
        if (this._introItems.length <= this._currentStep) {
          //end of the intro
          //check if any callback is defined
          if (typeof this._introCompleteCallback === "function") {
            this._introCompleteCallback.call(this);
          }
    
          exitIntro.call(this, this._targetElement);
          return;
        }
    
        _showElement.call(this, nextStep);
      }
      /**
       * Go to previous step on intro
       *
       * @api private
       * @method _previousStep
       */
    
      function previousStep() {
        this._direction = "backward";
    
        if (this._currentStep === 0) {
          return false;
        }
    
        --this._currentStep;
        var nextStep = this._introItems[this._currentStep];
        var continueStep = true;
    
        if (typeof this._introBeforeChangeCallback !== "undefined") {
          continueStep = this._introBeforeChangeCallback.call(this, nextStep && nextStep.element);
        } // if `onbeforechange` returned `false`, stop displaying the element
    
    
        if (continueStep === false) {
          ++this._currentStep;
          return false;
        }
    
        _showElement.call(this, nextStep);
      }
      /**
       * Returns the current step of the intro
       *
       * @returns {number | boolean}
       */
    
      function currentStep() {
        return this._currentStep;
      }
    
      /**
       * on keyCode:
       * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
       * This feature has been removed from the Web standards.
       * Though some browsers may still support it, it is in
       * the process of being dropped.
       * Instead, you should use KeyboardEvent.code,
       * if it's implemented.
       *
       * jQuery's approach is to test for
       *   (1) e.which, then
       *   (2) e.charCode, then
       *   (3) e.keyCode
       * https://github.com/jquery/jquery/blob/a6b0705294d336ae2f63f7276de0da1195495363/src/event.js#L638
       *
       * @param type var
       * @return type
       */
    
      function onKeyDown(e) {
        var code = e.code === undefined ? e.which : e.code; // if e.which is null
    
        if (code === null) {
          code = e.charCode === null ? e.keyCode : e.charCode;
        }
    
        if ((code === "Escape" || code === 27) && this._options.exitOnEsc === true) {
          //escape key pressed, exit the intro
          //check if exit callback is defined
          exitIntro.call(this, this._targetElement);
        } else if (code === "ArrowLeft" || code === 37) {
          //left arrow
          previousStep.call(this);
        } else if (code === "ArrowRight" || code === 39) {
          //right arrow
          nextStep.call(this);
        } else if (code === "Enter" || code === "NumpadEnter" || code === 13) {
          //srcElement === ie
          var target = e.target || e.srcElement;
    
          if (target && target.className.match("introjs-prevbutton")) {
            //user hit enter while focusing on previous button
            previousStep.call(this);
          } else if (target && target.className.match("introjs-skipbutton")) {
            //user hit enter while focusing on skip button
            if (this._introItems.length - 1 === this._currentStep && typeof this._introCompleteCallback === "function") {
              this._introCompleteCallback.call(this);
            }
    
            exitIntro.call(this, this._targetElement);
          } else if (target && target.getAttribute("data-stepnumber")) {
            // user hit enter while focusing on step bullet
            target.click();
          } else {
            //default behavior for responding to enter
            nextStep.call(this);
          } //prevent default behaviour on hitting Enter, to prevent steps being skipped in some browsers
    
    
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
        }
      }
    
      /*
       * makes a copy of the object
       * @api private
       * @method _cloneObject
       */
      function cloneObject(object) {
        if (object === null || _typeof(object) !== "object" || typeof object.nodeType !== "undefined") {
          return object;
        }
    
        var temp = {};
    
        for (var key in object) {
          if (typeof window.jQuery !== "undefined" && object[key] instanceof window.jQuery) {
            temp[key] = object[key];
          } else {
            temp[key] = cloneObject(object[key]);
          }
        }
    
        return temp;
      }
    
      /**
       * Get a queryselector within the hint wrapper
       *
       * @param {String} selector
       * @return {NodeList|Array}
       */
    
      function hintQuerySelectorAll(selector) {
        var hintsWrapper = document.querySelector(".introjs-hints");
        return hintsWrapper ? hintsWrapper.querySelectorAll(selector) : [];
      }
      /**
       * Hide a hint
       *
       * @api private
       * @method hideHint
       */
    
      function hideHint(stepId) {
        var hint = hintQuerySelectorAll(".introjs-hint[data-step=\"".concat(stepId, "\"]"))[0];
        removeHintTooltip.call(this);
    
        if (hint) {
          addClass(hint, "introjs-hidehint");
        } // call the callback function (if any)
    
    
        if (typeof this._hintCloseCallback !== "undefined") {
          this._hintCloseCallback.call(this, stepId);
        }
      }
      /**
       * Hide all hints
       *
       * @api private
       * @method hideHints
       */
    
      function hideHints() {
        var _this = this;
    
        var hints = hintQuerySelectorAll(".introjs-hint");
        forEach(hints, function (hint) {
          hideHint.call(_this, hint.getAttribute("data-step"));
        });
      }
      /**
       * Show all hints
       *
       * @api private
       * @method _showHints
       */
    
      function showHints() {
        var _this2 = this;
    
        var hints = hintQuerySelectorAll(".introjs-hint");
    
        if (hints && hints.length) {
          forEach(hints, function (hint) {
            showHint.call(_this2, hint.getAttribute("data-step"));
          });
        } else {
          populateHints.call(this, this._targetElement);
        }
      }
      /**
       * Show a hint
       *
       * @api private
       * @method showHint
       */
    
      function showHint(stepId) {
        var hint = hintQuerySelectorAll(".introjs-hint[data-step=\"".concat(stepId, "\"]"))[0];
    
        if (hint) {
          removeClass(hint, /introjs-hidehint/g);
        }
      }
      /**
       * Removes all hint elements on the page
       * Useful when you want to destroy the elements and add them again (e.g. a modal or popup)
       *
       * @api private
       * @method removeHints
       */
    
      function removeHints() {
        var _this3 = this;
    
        var hints = hintQuerySelectorAll(".introjs-hint");
        forEach(hints, function (hint) {
          removeHint.call(_this3, hint.getAttribute("data-step"));
        });
      }
      /**
       * Remove one single hint element from the page
       * Useful when you want to destroy the element and add them again (e.g. a modal or popup)
       * Use removeHints if you want to remove all elements.
       *
       * @api private
       * @method removeHint
       */
    
      function removeHint(stepId) {
        var hint = hintQuerySelectorAll(".introjs-hint[data-step=\"".concat(stepId, "\"]"))[0];
    
        if (hint) {
          hint.parentNode.removeChild(hint);
        }
      }
      /**
       * Add all available hints to the page
       *
       * @api private
       * @method addHints
       */
    
      function addHints() {
        var _this4 = this;
    
        var self = this;
        var hintsWrapper = document.querySelector(".introjs-hints");
    
        if (hintsWrapper === null) {
          hintsWrapper = _createElement("div", {
            className: "introjs-hints"
          });
        }
        /**
         * Returns an event handler unique to the hint iteration
         *
         * @param {Integer} i
         * @return {Function}
         */
    
    
        var getHintClick = function getHintClick(i) {
          return function (e) {
            var evt = e ? e : window.event;
    
            if (evt.stopPropagation) {
              evt.stopPropagation();
            }
    
            if (evt.cancelBubble !== null) {
              evt.cancelBubble = true;
            }
    
            showHintDialog.call(self, i);
          };
        };
    
        forEach(this._introItems, function (item, i) {
          // avoid append a hint twice
          if (document.querySelector(".introjs-hint[data-step=\"".concat(i, "\"]"))) {
            return;
          }
    
          var hint = _createElement("a", {
            className: "introjs-hint"
          });
          setAnchorAsButton(hint);
          hint.onclick = getHintClick(i);
    
          if (!item.hintAnimation) {
            addClass(hint, "introjs-hint-no-anim");
          } // hint's position should be fixed if the target element's position is fixed
    
    
          if (isFixed(item.element)) {
            addClass(hint, "introjs-fixedhint");
          }
    
          var hintDot = _createElement("div", {
            className: "introjs-hint-dot"
          });
          var hintPulse = _createElement("div", {
            className: "introjs-hint-pulse"
          });
          hint.appendChild(hintDot);
          hint.appendChild(hintPulse);
          hint.setAttribute("data-step", i); // we swap the hint element with target element
          // because _setHelperLayerPosition uses `element` property
    
          item.targetElement = item.element;
          item.element = hint; // align the hint position
    
          alignHintPosition.call(_this4, item.hintPosition, hint, item.targetElement);
          hintsWrapper.appendChild(hint);
        }); // adding the hints wrapper
    
        document.body.appendChild(hintsWrapper); // call the callback function (if any)
    
        if (typeof this._hintsAddedCallback !== "undefined") {
          this._hintsAddedCallback.call(this);
        }
      }
      /**
       * Aligns hint position
       *
       * @api private
       * @method alignHintPosition
       * @param {String} position
       * @param {Object} hint
       * @param {Object} element
       */
    
      function alignHintPosition(position, _ref, element) {
        var style = _ref.style;
        // get/calculate offset of target element
        var offset = getOffset.call(this, element);
        var iconWidth = 20;
        var iconHeight = 20; // align the hint element
    
        switch (position) {
          default:
          case "top-left":
            style.left = "".concat(offset.left, "px");
            style.top = "".concat(offset.top, "px");
            break;
    
          case "top-right":
            style.left = "".concat(offset.left + offset.width - iconWidth, "px");
            style.top = "".concat(offset.top, "px");
            break;
    
          case "bottom-left":
            style.left = "".concat(offset.left, "px");
            style.top = "".concat(offset.top + offset.height - iconHeight, "px");
            break;
    
          case "bottom-right":
            style.left = "".concat(offset.left + offset.width - iconWidth, "px");
            style.top = "".concat(offset.top + offset.height - iconHeight, "px");
            break;
    
          case "middle-left":
            style.left = "".concat(offset.left, "px");
            style.top = "".concat(offset.top + (offset.height - iconHeight) / 2, "px");
            break;
    
          case "middle-right":
            style.left = "".concat(offset.left + offset.width - iconWidth, "px");
            style.top = "".concat(offset.top + (offset.height - iconHeight) / 2, "px");
            break;
    
          case "middle-middle":
            style.left = "".concat(offset.left + (offset.width - iconWidth) / 2, "px");
            style.top = "".concat(offset.top + (offset.height - iconHeight) / 2, "px");
            break;
    
          case "bottom-middle":
            style.left = "".concat(offset.left + (offset.width - iconWidth) / 2, "px");
            style.top = "".concat(offset.top + offset.height - iconHeight, "px");
            break;
    
          case "top-middle":
            style.left = "".concat(offset.left + (offset.width - iconWidth) / 2, "px");
            style.top = "".concat(offset.top, "px");
            break;
        }
      }
      /**
       * Triggers when user clicks on the hint element
       *
       * @api private
       * @method _showHintDialog
       * @param {Number} stepId
       */
    
      function showHintDialog(stepId) {
        var hintElement = document.querySelector(".introjs-hint[data-step=\"".concat(stepId, "\"]"));
        var item = this._introItems[stepId]; // call the callback function (if any)
    
        if (typeof this._hintClickCallback !== "undefined") {
          this._hintClickCallback.call(this, hintElement, item, stepId);
        } // remove all open tooltips
    
    
        var removedStep = removeHintTooltip.call(this); // to toggle the tooltip
    
        if (parseInt(removedStep, 10) === stepId) {
          return;
        }
    
        var tooltipLayer = _createElement("div", {
          className: "introjs-tooltip"
        });
        var tooltipTextLayer = _createElement("div");
        var arrowLayer = _createElement("div");
        var referenceLayer = _createElement("div");
    
        tooltipLayer.onclick = function (e) {
          //IE9 & Other Browsers
          if (e.stopPropagation) {
            e.stopPropagation();
          } //IE8 and Lower
          else {
              e.cancelBubble = true;
            }
        };
    
        tooltipTextLayer.className = "introjs-tooltiptext";
        var tooltipWrapper = _createElement("p");
        tooltipWrapper.innerHTML = item.hint;
        var closeButton = _createElement("a");
        closeButton.className = this._options.buttonClass;
        closeButton.setAttribute("role", "button");
        closeButton.innerHTML = this._options.hintButtonLabel;
        closeButton.onclick = hideHint.bind(this, stepId);
        tooltipTextLayer.appendChild(tooltipWrapper);
        tooltipTextLayer.appendChild(closeButton);
        arrowLayer.className = "introjs-arrow";
        tooltipLayer.appendChild(arrowLayer);
        tooltipLayer.appendChild(tooltipTextLayer); // set current step for _placeTooltip function
    
        this._currentStep = hintElement.getAttribute("data-step"); // align reference layer position
    
        referenceLayer.className = "introjs-tooltipReferenceLayer introjs-hintReference";
        referenceLayer.setAttribute("data-step", hintElement.getAttribute("data-step"));
        setHelperLayerPosition.call(this, referenceLayer);
        referenceLayer.appendChild(tooltipLayer);
        document.body.appendChild(referenceLayer); //set proper position
    
        placeTooltip.call(this, hintElement, tooltipLayer, arrowLayer, true);
      }
      /**
       * Removes open hint (tooltip hint)
       *
       * @api private
       * @method _removeHintTooltip
       */
    
      function removeHintTooltip() {
        var tooltip = document.querySelector(".introjs-hintReference");
    
        if (tooltip) {
          var step = tooltip.getAttribute("data-step");
          tooltip.parentNode.removeChild(tooltip);
          return step;
        }
      }
      /**
       * Start parsing hint items
       *
       * @api private
       * @param {Object} targetElm
       * @method _startHint
       */
    
      function populateHints(targetElm) {
        var _this5 = this;
    
        this._introItems = [];
    
        if (this._options.hints) {
          forEach(this._options.hints, function (hint) {
            var currentItem = cloneObject(hint);
    
            if (typeof currentItem.element === "string") {
              //grab the element with given selector from the page
              currentItem.element = document.querySelector(currentItem.element);
            }
    
            currentItem.hintPosition = currentItem.hintPosition || _this5._options.hintPosition;
            currentItem.hintAnimation = currentItem.hintAnimation || _this5._options.hintAnimation;
    
            if (currentItem.element !== null) {
              _this5._introItems.push(currentItem);
            }
          });
        } else {
          var hints = targetElm.querySelectorAll("*[data-hint]");
    
          if (!hints || !hints.length) {
            return false;
          } //first add intro items with data-step
    
    
          forEach(hints, function (currentElement) {
            // hint animation
            var hintAnimation = currentElement.getAttribute("data-hintanimation");
    
            if (hintAnimation) {
              hintAnimation = hintAnimation === "true";
            } else {
              hintAnimation = _this5._options.hintAnimation;
            }
    
            _this5._introItems.push({
              element: currentElement,
              hint: currentElement.getAttribute("data-hint"),
              hintPosition: currentElement.getAttribute("data-hintposition") || _this5._options.hintPosition,
              hintAnimation: hintAnimation,
              tooltipClass: currentElement.getAttribute("data-tooltipclass"),
              position: currentElement.getAttribute("data-position") || _this5._options.tooltipPosition
            });
          });
        }
    
        addHints.call(this);
        /*
        todo:
        these events should be removed at some point
        */
    
        DOMEvent.on(document, "click", removeHintTooltip, this, false);
        DOMEvent.on(window, "resize", reAlignHints, this, true);
      }
      /**
       * Re-aligns all hint elements
       *
       * @api private
       * @method _reAlignHints
       */
    
      function reAlignHints() {
        var _this6 = this;
    
        forEach(this._introItems, function (_ref2) {
          var targetElement = _ref2.targetElement,
              hintPosition = _ref2.hintPosition,
              element = _ref2.element;
    
          if (typeof targetElement === "undefined") {
            return;
          }
    
          alignHintPosition.call(_this6, hintPosition, element, targetElement);
        });
      }
    
      /**
       * Update placement of the intro objects on the screen
       * @api private
       */
    
      function refresh() {
        // re-align intros
        setHelperLayerPosition.call(this, document.querySelector(".introjs-helperLayer"));
        setHelperLayerPosition.call(this, document.querySelector(".introjs-tooltipReferenceLayer"));
        setHelperLayerPosition.call(this, document.querySelector(".introjs-disableInteraction")); // re-align tooltip
    
        if (this._currentStep !== undefined && this._currentStep !== null) {
          var oldArrowLayer = document.querySelector(".introjs-arrow");
          var oldtooltipContainer = document.querySelector(".introjs-tooltip");
          placeTooltip.call(this, this._introItems[this._currentStep].element, oldtooltipContainer, oldArrowLayer);
        } //re-align hints
    
    
        reAlignHints.call(this);
        return this;
      }
    
      function onResize() {
        refresh.call(this);
      }
    
      /**
       * Removes `element` from `parentElement`
       *
       * @param {Element} element
       * @param {Boolean} [animate=false]
       */
    
      function removeChild(element, animate) {
        if (!element || !element.parentElement) return;
        var parentElement = element.parentElement;
    
        if (animate) {
          setStyle(element, {
            opacity: "0"
          });
          window.setTimeout(function () {
            parentElement.removeChild(element);
          }, 500);
        } else {
          parentElement.removeChild(element);
        }
      }
    
      /**
       * Exit from intro
       *
       * @api private
       * @method _exitIntro
       * @param {Object} targetElement
       * @param {Boolean} force - Setting to `true` will skip the result of beforeExit callback
       */
    
      function exitIntro(targetElement, force) {
        var continueExit = true; // calling onbeforeexit callback
        //
        // If this callback return `false`, it would halt the process
    
        if (this._introBeforeExitCallback !== undefined) {
          continueExit = this._introBeforeExitCallback.call(this);
        } // skip this check if `force` parameter is `true`
        // otherwise, if `onbeforeexit` returned `false`, don't exit the intro
    
    
        if (!force && continueExit === false) return; // remove overlay layers from the page
    
        var overlayLayers = targetElement.querySelectorAll(".introjs-overlay");
    
        if (overlayLayers && overlayLayers.length) {
          forEach(overlayLayers, function (overlayLayer) {
            return removeChild(overlayLayer);
          });
        } //remove all helper layers
    
    
        var helperLayer = targetElement.querySelector(".introjs-helperLayer");
        removeChild(helperLayer, true);
        var referenceLayer = targetElement.querySelector(".introjs-tooltipReferenceLayer");
        removeChild(referenceLayer); //remove disableInteractionLayer
    
        var disableInteractionLayer = targetElement.querySelector(".introjs-disableInteraction");
        removeChild(disableInteractionLayer); //remove intro floating element
    
        var floatingElement = document.querySelector(".introjsFloatingElement");
        removeChild(floatingElement);
        removeShowElement(); //clean listeners
    
        DOMEvent.off(window, "keydown", onKeyDown, this, true);
        DOMEvent.off(window, "resize", onResize, this, true); //check if any callback is defined
    
        if (this._introExitCallback !== undefined) {
          this._introExitCallback.call(this);
        } //set the step to zero
    
    
        this._currentStep = undefined;
      }
    
      /**
       * Add overlay layer to the page
       *
       * @api private
       * @method _addOverlayLayer
       * @param {Object} targetElm
       */
    
      function addOverlayLayer(targetElm) {
        var overlayLayer = _createElement("div", {
          className: "introjs-overlay"
        });
        var self = this; // check if the target element is body, we should calculate the size of overlay layer in a better way
    
        if (!targetElm.tagName || targetElm.tagName.toLowerCase() === "body") {
          setStyle(overlayLayer, {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            position: "fixed"
          });
        } else {
          // set overlay layer position
          var elementPosition = getOffset(targetElm);
    
          if (elementPosition) {
            setStyle(overlayLayer, {
              width: "".concat(elementPosition.width, "px"),
              height: "".concat(elementPosition.height, "px"),
              top: "".concat(elementPosition.top, "px"),
              left: "".concat(elementPosition.left, "px")
            });
          }
        }
    
        targetElm.appendChild(overlayLayer);
    
        if (self._options.exitOnOverlayClick === true) {
          setStyle(overlayLayer, {
            cursor: "pointer"
          });
    
          overlayLayer.onclick = function () {
            exitIntro.call(self, targetElm);
          };
        }
    
        return true;
      }
    
      /**
       * Initiate a new introduction/guide from an element in the page
       *
       * @api private
       * @method _introForElement
       * @param {Object} targetElm
       * @param {String} group
       * @returns {Boolean} Success or not?
       */
    
      function introForElement(targetElm, group) {
        var _this = this;
    
        var allIntroSteps = targetElm.querySelectorAll("*[data-intro]");
        var introItems = [];
    
        if (this._options.steps) {
          //use steps passed programmatically
          forEach(this._options.steps, function (step) {
            var currentItem = cloneObject(step); //set the step
    
            currentItem.step = introItems.length + 1;
            currentItem.title = currentItem.title || ""; //use querySelector function only when developer used CSS selector
    
            if (typeof currentItem.element === "string") {
              //grab the element with given selector from the page
              currentItem.element = document.querySelector(currentItem.element);
            } //intro without element
    
    
            if (typeof currentItem.element === "undefined" || currentItem.element === null) {
              var floatingElementQuery = document.querySelector(".introjsFloatingElement");
    
              if (floatingElementQuery === null) {
                floatingElementQuery = _createElement("div", {
                  className: "introjsFloatingElement"
                });
                document.body.appendChild(floatingElementQuery);
              }
    
              currentItem.element = floatingElementQuery;
              currentItem.position = "floating";
            }
    
            currentItem.scrollTo = currentItem.scrollTo || _this._options.scrollTo;
    
            if (typeof currentItem.disableInteraction === "undefined") {
              currentItem.disableInteraction = _this._options.disableInteraction;
            }
    
            if (currentItem.element !== null) {
              introItems.push(currentItem);
            }
          });
        } else {
          //use steps from data-* annotations
          var elmsLength = allIntroSteps.length;
          var disableInteraction; //if there's no element to intro
    
          if (elmsLength < 1) {
            return false;
          }
    
          forEach(allIntroSteps, function (currentElement) {
            // PR #80
            // start intro for groups of elements
            if (group && currentElement.getAttribute("data-intro-group") !== group) {
              return;
            } // skip hidden elements
    
    
            if (currentElement.style.display === "none") {
              return;
            }
    
            var step = parseInt(currentElement.getAttribute("data-step"), 10);
    
            if (currentElement.hasAttribute("data-disable-interaction")) {
              disableInteraction = !!currentElement.getAttribute("data-disable-interaction");
            } else {
              disableInteraction = _this._options.disableInteraction;
            }
    
            if (step > 0) {
              introItems[step - 1] = {
                element: currentElement,
                title: currentElement.getAttribute("data-title") || "",
                intro: currentElement.getAttribute("data-intro"),
                step: parseInt(currentElement.getAttribute("data-step"), 10),
                tooltipClass: currentElement.getAttribute("data-tooltipclass"),
                highlightClass: currentElement.getAttribute("data-highlightclass"),
                position: currentElement.getAttribute("data-position") || _this._options.tooltipPosition,
                scrollTo: currentElement.getAttribute("data-scrollto") || _this._options.scrollTo,
                disableInteraction: disableInteraction
              };
            }
          }); //next add intro items without data-step
          //todo: we need a cleanup here, two loops are redundant
    
          var _nextStep = 0;
          forEach(allIntroSteps, function (currentElement) {
            // PR #80
            // start intro for groups of elements
            if (group && currentElement.getAttribute("data-intro-group") !== group) {
              return;
            }
    
            if (currentElement.getAttribute("data-step") === null) {
              while (true) {
                if (typeof introItems[_nextStep] === "undefined") {
                  break;
                } else {
                  _nextStep++;
                }
              }
    
              if (currentElement.hasAttribute("data-disable-interaction")) {
                disableInteraction = !!currentElement.getAttribute("data-disable-interaction");
              } else {
                disableInteraction = _this._options.disableInteraction;
              }
    
              introItems[_nextStep] = {
                element: currentElement,
                title: currentElement.getAttribute("data-title") || "",
                intro: currentElement.getAttribute("data-intro"),
                step: _nextStep + 1,
                tooltipClass: currentElement.getAttribute("data-tooltipclass"),
                highlightClass: currentElement.getAttribute("data-highlightclass"),
                position: currentElement.getAttribute("data-position") || _this._options.tooltipPosition,
                scrollTo: currentElement.getAttribute("data-scrollto") || _this._options.scrollTo,
                disableInteraction: disableInteraction
              };
            }
          });
        } //removing undefined/null elements
    
    
        var tempIntroItems = [];
    
        for (var z = 0; z < introItems.length; z++) {
          if (introItems[z]) {
            // copy non-falsy values to the end of the array
            tempIntroItems.push(introItems[z]);
          }
        }
    
        introItems = tempIntroItems; //Ok, sort all items with given steps
    
        introItems.sort(function (a, b) {
          return a.step - b.step;
        }); //set it to the introJs object
    
        this._introItems = introItems; //add overlay layer to the page
    
        if (addOverlayLayer.call(this, targetElm)) {
          //then, start the show
          nextStep.call(this);
    
          if (this._options.keyboardNavigation) {
            DOMEvent.on(window, "keydown", onKeyDown, this, true);
          } //for window resize
    
    
          DOMEvent.on(window, "resize", onResize, this, true);
        }
    
        return false;
      }
    
      var version$1 = "3.3.1";
    
      /**
       * IntroJs main class
       *
       * @class IntroJs
       */
    
      function IntroJs(obj) {
        this._targetElement = obj;
        this._introItems = [];
        this._options = {
          /* Next button label in tooltip box */
          nextLabel: "Next",
    
          /* Previous button label in tooltip box */
          prevLabel: "Back",
    
          /* Skip button label in tooltip box */
          skipLabel: "×",
    
          /* Done button label in tooltip box */
          doneLabel: "Done",
    
          /* Hide previous button in the first step? Otherwise, it will be disabled button. */
          hidePrev: false,
    
          /* Hide next button in the last step? Otherwise, it will be disabled button (note: this will also hide the "Done" button) */
          hideNext: false,
    
          /* Change the Next button to Done in the last step of the intro? otherwise, it will render a disabled button */
          nextToDone: true,
    
          /* Default tooltip box position */
          tooltipPosition: "bottom",
    
          /* Next CSS class for tooltip boxes */
          tooltipClass: "",
    
          /* CSS class that is added to the helperLayer */
          highlightClass: "",
    
          /* Close introduction when pressing Escape button? */
          exitOnEsc: true,
    
          /* Close introduction when clicking on overlay layer? */
          exitOnOverlayClick: true,
    
          /* Show step numbers in introduction? */
          showStepNumbers: false,
    
          /* Let user use keyboard to navigate the tour? */
          keyboardNavigation: true,
    
          /* Show tour control buttons? */
          showButtons: true,
    
          /* Show tour bullets? */
          showBullets: true,
    
          /* Show tour progress? */
          showProgress: false,
    
          /* Scroll to highlighted element? */
          scrollToElement: true,
    
          /*
           * Should we scroll the tooltip or target element?
           *
           * Options are: 'element' or 'tooltip'
           */
          scrollTo: "element",
    
          /* Padding to add after scrolling when element is not in the viewport (in pixels) */
          scrollPadding: 30,
    
          /* Set the overlay opacity */
          overlayOpacity: 0.5,
    
          /* To determine the tooltip position automatically based on the window.width/height */
          autoPosition: true,
    
          /* Precedence of positions, when auto is enabled */
          positionPrecedence: ["bottom", "top", "right", "left"],
    
          /* Disable an interaction with element? */
          disableInteraction: false,
    
          /* Set how much padding to be used around helper element */
          helperElementPadding: 10,
    
          /* Default hint position */
          hintPosition: "top-middle",
    
          /* Hint button label */
          hintButtonLabel: "Got it",
    
          /* Adding animation to hints? */
          hintAnimation: true,
    
          /* additional classes to put on the buttons */
          buttonClass: "introjs-button",
    
          /* additional classes to put on progress bar */
          progressBarAdditionalClass: false
        };
      }
    
      var introJs = function introJs(targetElm) {
        var instance;
    
        if (_typeof(targetElm) === "object") {
          //Ok, create a new instance
          instance = new IntroJs(targetElm);
        } else if (typeof targetElm === "string") {
          //select the target element with query selector
          var targetElement = document.querySelector(targetElm);
    
          if (targetElement) {
            instance = new IntroJs(targetElement);
          } else {
            throw new Error("There is no element with given selector.");
          }
        } else {
          instance = new IntroJs(document.body);
        } // add instance to list of _instances
        // passing group to stamp to increment
        // from 0 onward somewhat reliably
    
    
        introJs.instances[stamp(instance, "introjs-instance")] = instance;
        return instance;
      };
      /**
       * Current IntroJs version
       *
       * @property version
       * @type String
       */
    
    
      introJs.version = version$1;
      /**
       * key-val object helper for introJs instances
       *
       * @property instances
       * @type Object
       */
    
      introJs.instances = {}; //Prototype
    
      introJs.fn = IntroJs.prototype = {
        clone: function clone() {
          return new IntroJs(this);
        },
        setOption: function setOption(option, value) {
          this._options[option] = value;
          return this;
        },
        setOptions: function setOptions(options) {
          this._options = mergeOptions(this._options, options);
          return this;
        },
        start: function start(group) {
          introForElement.call(this, this._targetElement, group);
          return this;
        },
        goToStep: function goToStep$1(step) {
          goToStep.call(this, step);
    
          return this;
        },
        addStep: function addStep(options) {
          if (!this._options.steps) {
            this._options.steps = [];
          }
    
          this._options.steps.push(options);
    
          return this;
        },
        addSteps: function addSteps(steps) {
          if (!steps.length) return;
    
          for (var index = 0; index < steps.length; index++) {
            this.addStep(steps[index]);
          }
    
          return this;
        },
        goToStepNumber: function goToStepNumber$1(step) {
          goToStepNumber.call(this, step);
    
          return this;
        },
        nextStep: function nextStep$1() {
          nextStep.call(this);
    
          return this;
        },
        previousStep: function previousStep$1() {
          previousStep.call(this);
    
          return this;
        },
        currentStep: function currentStep$1() {
          return currentStep.call(this);
        },
        exit: function exit(force) {
          exitIntro.call(this, this._targetElement, force);
          return this;
        },
        refresh: function refresh$1() {
          refresh.call(this);
    
          return this;
        },
        onbeforechange: function onbeforechange(providedCallback) {
          if (typeof providedCallback === "function") {
            this._introBeforeChangeCallback = providedCallback;
          } else {
            throw new Error("Provided callback for onbeforechange was not a function");
          }
    
          return this;
        },
        onchange: function onchange(providedCallback) {
          if (typeof providedCallback === "function") {
            this._introChangeCallback = providedCallback;
          } else {
            throw new Error("Provided callback for onchange was not a function.");
          }
    
          return this;
        },
        onafterchange: function onafterchange(providedCallback) {
          if (typeof providedCallback === "function") {
            this._introAfterChangeCallback = providedCallback;
          } else {
            throw new Error("Provided callback for onafterchange was not a function");
          }
    
          return this;
        },
        oncomplete: function oncomplete(providedCallback) {
          if (typeof providedCallback === "function") {
            this._introCompleteCallback = providedCallback;
          } else {
            throw new Error("Provided callback for oncomplete was not a function.");
          }
    
          return this;
        },
        onhintsadded: function onhintsadded(providedCallback) {
          if (typeof providedCallback === "function") {
            this._hintsAddedCallback = providedCallback;
          } else {
            throw new Error("Provided callback for onhintsadded was not a function.");
          }
    
          return this;
        },
        onhintclick: function onhintclick(providedCallback) {
          if (typeof providedCallback === "function") {
            this._hintClickCallback = providedCallback;
          } else {
            throw new Error("Provided callback for onhintclick was not a function.");
          }
    
          return this;
        },
        onhintclose: function onhintclose(providedCallback) {
          if (typeof providedCallback === "function") {
            this._hintCloseCallback = providedCallback;
          } else {
            throw new Error("Provided callback for onhintclose was not a function.");
          }
    
          return this;
        },
        onexit: function onexit(providedCallback) {
          if (typeof providedCallback === "function") {
            this._introExitCallback = providedCallback;
          } else {
            throw new Error("Provided callback for onexit was not a function.");
          }
    
          return this;
        },
        onskip: function onskip(providedCallback) {
          if (typeof providedCallback === "function") {
            this._introSkipCallback = providedCallback;
          } else {
            throw new Error("Provided callback for onskip was not a function.");
          }
    
          return this;
        },
        onbeforeexit: function onbeforeexit(providedCallback) {
          if (typeof providedCallback === "function") {
            this._introBeforeExitCallback = providedCallback;
          } else {
            throw new Error("Provided callback for onbeforeexit was not a function.");
          }
    
          return this;
        },
        addHints: function addHints() {
          populateHints.call(this, this._targetElement);
          return this;
        },
        hideHint: function hideHint$1(stepId) {
          hideHint.call(this, stepId);
    
          return this;
        },
        hideHints: function hideHints$1() {
          hideHints.call(this);
    
          return this;
        },
        showHint: function showHint$1(stepId) {
          showHint.call(this, stepId);
    
          return this;
        },
        showHints: function showHints$1() {
          showHints.call(this);
    
          return this;
        },
        removeHints: function removeHints$1() {
          removeHints.call(this);
    
          return this;
        },
        removeHint: function removeHint$1(stepId) {
          removeHint().call(this, stepId);
    
          return this;
        },
        showHintDialog: function showHintDialog$1(stepId) {
          showHintDialog.call(this, stepId);
    
          return this;
        }
      };
    
      return introJs;
    
    })));
    
    /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28)))
    
    /***/ }),
    /* 5 */,
    /* 6 */,
    /* 7 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BRAccordion {
      constructor(name, component) {
        this.name = name
        this.component = component
        this._setBehavior()
      }
    
      _setBehavior() {
        for (const button of this.component.querySelectorAll('button.header')) {
          button.addEventListener('click', (event) => {
            this._collapse(event)
            this._changeIcon(event)
          })
        }
      }
    
      _collapse(event) {
        if (this.component.hasAttribute('single')) {
          for (const field of this.component.querySelectorAll('.item')) {
            if (field === event.currentTarget.parentNode) {
              if (field.hasAttribute('active')) {
                field.removeAttribute('active')
              } else {
                field.setAttribute('active', '')
              }
            } else {
              if (field.hasAttribute('active')) {
                field.removeAttribute('active')
              }
            }
          }
        } else {
          for (const field of this.component.querySelectorAll('.item')) {
            if (field === event.currentTarget.parentNode) {
              if (field.hasAttribute('active')) {
                field.removeAttribute('active')
              } else {
                field.setAttribute('active', '')
              }
            }
          }
        }
      }
    
      _changeIcon() {
        for (const field of this.component.querySelectorAll('.item')) {
          if (field.hasAttribute('active')) {
            for (const icon of field.querySelectorAll('.icon')) {
              icon.children[0].classList.remove('fa-angle-down')
              icon.children[0].classList.add('fa-angle-up')
            }
          } else {
            for (const icon of field.querySelectorAll('.icon')) {
              icon.children[0].classList.remove('fa-angle-up')
              icon.children[0].classList.add('fa-angle-down')
            }
          }
        }
      }
    }
    const accordionList = []
    for (const brAccordion of window.document.querySelectorAll('.br-accordion')) {
      accordionList.push(
        Object.create(new BRAccordion('br-accordion', brAccordion))
      )
    }
    /* harmony default export */ __webpack_exports__["default"] = (BRAccordion);
    
    
    /***/ }),
    /* 8 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BRBreadcrumb {
      constructor(name, component) {
        this.name = name
        this.component = component
        this._setBehavior()
      }
    
      _setBehavior() {
        this._setView()
        window.addEventListener('resize', () => {
          this._setView()
        })
        window.document.addEventListener('click', (event) => {
          if (
            !this.component.contains(event.target) &&
            this.component.querySelector('.br-card')
          ) {
            this.component.querySelector('.br-card').remove()
          }
        })
      }
    
      _setView() {
        this._reset()
        for (const crumbList of this.component.querySelectorAll('.crumb-list')) {
          const crumbs = crumbList.querySelectorAll('.crumb:not([data-active])')
          if (window.innerWidth < 575) {
            crumbs.forEach((crumb) => {
              crumb.classList.add('d-none')
            })
            this._insertExpandButton()
          } else {
            if (
              crumbList.scrollWidth > crumbList.offsetWidth ||
              crumbs.length > 5
            ) {
              crumbs.forEach((crumb, index) => {
                if (index > 0 && index < crumbs.length - 1) {
                  crumb.classList.add('d-none')
                }
              })
              this._insertExpandButton()
            }
          }
        }
      }
    
      _insertExpandButton() {
        const crumb = this._createCrumb()
        const crumbList = this.component.querySelector('.crumb-list')
        const crumbs = crumbList.querySelectorAll('.crumb')
        crumbList.insertBefore(crumb, crumbs[1])
      }
    
      _reset() {
        this.component.querySelectorAll('.crumb-list .crumb').forEach((crumb) => {
          if (crumb.classList.contains('menu-mobil')) {
            crumb.remove()
          } else {
            crumb.classList.remove('d-none')
          }
        })
      }
    
      _createCrumb() {
        const crumb = document.createElement('li')
        crumb.classList.add('crumb', 'menu-mobil')
        crumb.setAttribute('data-toggle', 'dropdown')
    
        const button = document.createElement('button')
        button.classList.add('br-button', 'circle')
    
        const span = document.createElement('span')
        span.classList.add('sr-only')
        span.innerHTML = 'Botão Menu'
    
        const folderIcon = document.createElement('i')
        folderIcon.classList.add('icon', 'fas', 'fa-folder-plus')
    
        const chevronIcon = document.createElement('i')
        chevronIcon.classList.add('icon', 'fas', 'fa-chevron-right')
    
        crumb.appendChild(chevronIcon)
        crumb.appendChild(button)
        button.appendChild(span)
        button.appendChild(folderIcon)
    
        crumb.addEventListener('click', () => {
          let card = this.component.querySelector('.br-card')
          if (card) {
            card.remove()
          } else {
            card = this._createList()
            this.component.appendChild(card)
          }
        })
    
        return crumb
      }
    
      _createList() {
        const card = document.createElement('div')
        card.classList.add('br-card')
    
        const front = document.createElement('div')
        front.classList.add('front')
    
        const content = document.createElement('div')
        content.classList.add('content')
    
        const list = document.createElement('div')
        list.classList.add('br-list')
    
        card.appendChild(front)
        front.appendChild(content)
        content.appendChild(list)
    
        this.component.querySelectorAll('.crumb-list .crumb').forEach((crumb) => {
          if (crumb.classList.contains('d-none')) {
            const item = document.createElement('div')
            item.classList.add('br-item', 'py-3')
    
            const row = document.createElement('div')
            row.classList.add('row', 'align-items-center')
    
            const col = document.createElement('div')
            col.classList.add('col')
            if (!crumb.classList.contains('home')) {
              col.appendChild(crumb.querySelector('a').cloneNode(true))
              row.appendChild(col)
              item.appendChild(row)
              list.appendChild(item)
            }
          }
        })
    
        return card
      }
    }
    
    const breadcrumbList = []
    for (const brBreadcrumb of window.document.querySelectorAll('.br-breadcrumb')) {
      breadcrumbList.push(new BRBreadcrumb('br-breadcrumb', brBreadcrumb))
    }
    /* harmony default export */ __webpack_exports__["default"] = (BRBreadcrumb);
    
    
    /***/ }),
    /* 9 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BRCard {
      constructor(name, component, id) {
        this.name = name
        this.component = component
        this.component.setAttribute('id', `card${id}`)
        this._setBehavior()
        new BRCardFlip()
        new BRCardCollapse()
      }
    
      _setBehavior() {
        this._setFlipBehavior()
        this._setExpandBehavior()
        this._setDragBehavior()
      }
    
      _setFlipBehavior() {
        for (const flip of this.component.querySelectorAll('button.flip')) {
          flip.addEventListener('click', () => {
            if (this.component.getAttribute('flipped') === 'off') {
              this.component.setAttribute('flipped', 'on')
            } else {
              this.component.setAttribute('flipped', 'off')
            }
          })
        }
      }
    
      _setExpandBehavior() {
        for (const expand of this.component.querySelectorAll('button.expand')) {
          expand.addEventListener('click', () => {
            if (this.component.getAttribute('expanded') === 'off') {
              this.component.setAttribute('expanded', 'on')
            } else {
              this.component.setAttribute('expanded', 'off')
            }
          })
        }
      }
    
      _setDragBehavior() {
        for (const img of this.component.querySelectorAll('img')) {
          img.setAttribute('draggable', 'false')
        }
        for (const link of this.component.querySelectorAll('a')) {
          link.setAttribute('draggable', 'false')
        }
        this.component.addEventListener('dragstart', (event) => {
          event.stopPropagation()
          event.dataTransfer.setData(
            'text/plain',
            this.component.getAttribute('id')
          )
          event.dropEffect = 'move'
        })
      }
    }
    
    class BRCardFlip {
      constructor() {
        this._setBehavior()
      }
    
      _setBehavior() {
        const cardFlippers = document.querySelectorAll('.br-card[data-flip]')
    
        for (const cardFlip of cardFlippers) {
          const cardFront = cardFlip.querySelector('.front')
          const cardBack = cardFlip.querySelector('.back')
          const cardFrontTrigger = cardFlip.querySelector(
            '.front [data-toggle="flip"]'
          )
          const cardBackTrigger = cardFlip.querySelector(
            '.back [data-toggle="flip"]'
          )
          this._cardFlipInit(cardFront, cardBack, cardFrontTrigger, cardBackTrigger)
          this._setCardFrontTrigger(
            cardFrontTrigger,
            cardFront,
            cardBack,
            cardBackTrigger
          )
          this._setCardBackTrigger(
            cardBackTrigger,
            cardFront,
            cardBack,
            cardFrontTrigger
          )
        }
      }
    
      _setCardFrontTrigger(cardFrontTrigger, cardFront, cardBack, cardBackTrigger) {
        cardFrontTrigger.addEventListener('click', () => {
          return this._cardFlipShowBack(
            cardFront,
            cardBack,
            cardFrontTrigger,
            cardBackTrigger
          )
        })
      }
    
      _setCardBackTrigger(cardBackTrigger, cardFront, cardBack, cardFrontTrigger) {
        cardBackTrigger.addEventListener('click', () => {
          return this._cardFlipShowFront(
            cardFront,
            cardBack,
            cardFrontTrigger,
            cardBackTrigger
          )
        })
      }
    
      _cardFlipInit(cardFront, cardBack, cardFrontTrigger, cardBackTrigger) {
        this._cardFlipShowFront(
          cardFront,
          cardBack,
          cardFrontTrigger,
          cardBackTrigger
        )
      }
    
      _cardFlipShowFront(cardFront, cardBack, cardFrontTrigger, cardBackTrigger) {
        cardFront.removeAttribute('hidden')
        cardFront.setAttribute('aria-hidden', 'false')
        cardFrontTrigger.setAttribute('aria-expanded', 'true')
        cardBack.setAttribute('aria-hidden', 'true')
        cardBack.setAttribute('hidden', '')
        cardBackTrigger.setAttribute('aria-expanded', 'false')
      }
    
      _cardFlipShowBack(cardFront, cardBack, cardFrontTrigger, cardBackTrigger) {
        cardFront.setAttribute('hidden', '')
        cardFront.setAttribute('aria-hidden', 'true')
        cardFrontTrigger.setAttribute('aria-expanded', 'false')
        cardBack.removeAttribute('hidden')
        cardBack.setAttribute('aria-hidden', 'false')
        cardBackTrigger.setAttribute('aria-expanded', 'true')
      }
    }
    
    class BRCardCollapse {
      constructor() {
        this._setBehavior()
      }
    
      _setBehavior() {
        // Padrão de toggle no card
        const cardToggler = document.querySelector('[data-toggle="collapse"]')
        if (cardToggler !== null) {
          const cardTogglerTarget = document.querySelector(
            cardToggler.dataset.target
          )
          this._cardCollapseInit(cardToggler, cardTogglerTarget)
          cardToggler.addEventListener('click', () => {
            if (cardToggler.getAttribute('aria-expanded') === 'true') {
              this._cardHiddenContent(cardToggler, cardTogglerTarget)
            } else {
              this._cardShowContent(cardToggler, cardTogglerTarget)
            }
          })
        }
      }
    
      _cardShowContent(cardToggler, cardTogglerTarget) {
        cardToggler.setAttribute('aria-expanded', 'true')
        cardTogglerTarget.setAttribute('aria-hidden', 'true')
        cardTogglerTarget.removeAttribute('hidden')
      }
    
      _cardHiddenContent(cardToggler, cardTogglerTarget) {
        cardToggler.setAttribute('aria-expanded', 'false')
        cardTogglerTarget.setAttribute('aria-hidden', 'false')
        cardTogglerTarget.setAttribute('hidden', '')
      }
    
      _cardCollapseInit(cardToggler, cardTogglerTarget) {
        if (cardToggler.dataset.visible) {
          if (cardToggler.dataset.visible === 'true') {
            this._cardShowContent(cardToggler, cardTogglerTarget)
          } else {
            this._cardHiddenContent(cardToggler, cardTogglerTarget)
          }
        } else {
          this._cardHiddenContent(cardToggler, cardTogglerTarget)
        }
      }
    }
    
    const listCard = []
    for (const [index, brCard] of window.document
      .querySelectorAll('.br-card')
      .entries()) {
      listCard.push(new BRCard('br-card', brCard, index))
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (BRCard);
    
    
    /***/ }),
    /* 10 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BRCookiebar {
      constructor(name, component, data, lang, callback) {
        this.name = name
        this.component = component
        this.data = this._setData(data, lang)
        this.callback = callback
        this._setUp()
        this._setBehavior()
      }
    
      _setData(data, lang) {
        if (data) {
          const dataObj = JSON.parse(data).filter((obj) => {
            return obj.lang === lang
          })
          if (dataObj.length > 0) {
            return dataObj[0]
          } else {
            return JSON.parse(data)[0]
          }
        } else {
          return null
        }
      }
    
      _setUp() {
        this._setAllOptOut()
        this._setGroupOptOut()
        this._setCookieOptOut()
        this._setPriorityValues()
        this._setConsistency()
        this._setPrimaryButton()
        this._setSecondaryButton()
        this._setCloseButton()
        this._setInfoText()
        this._setMainTitle()
        this._setLastUpdate()
        this._setListHeader()
        this._setEntryText()
        this._setGroupInfo()
        this._setNotification()
        this._setLinks()
      }
    
      _setBehavior() {
        this._setGroupBehavior()
        this._setCookieSelection()
        this._setAcceptBehavior()
        this._setOutputJSON()
        this._setResize()
      }
    
      _setPrimaryButton() {
        this.component
          .querySelectorAll('.actions .br-button.primary')
          .forEach((button) => {
            if (this.data.acceptButton && this.data.acceptButton.length > 0) {
              button.innerHTML = this.data.acceptButton
            } else {
              button.innerHTML = 'Aceitar'
            }
            if (window.matchMedia('(max-width: 574px)').matches) {
              button.classList.add('block')
            }
            if (window.matchMedia('(min-width: 575px)').matches) {
              button.classList.remove('block')
            }
          })
      }
    
      _setSecondaryButton() {
        this.component
          .querySelectorAll('.actions .br-button.secondary')
          .forEach((button) => {
            if (this.data.allOptOut) {
              if (this.data.optOutButton && this.data.optOutButton.length > 0) {
                button.innerHTML = this.data.optOutButton
              } else {
                button.innerHTML = 'Definir Cookies'
              }
            } else {
              if (this.data.optInButton && this.data.optInButton.length > 0) {
                button.innerHTML = this.data.optInButton
              } else {
                button.innerHTML = 'Ver Política de Cookies'
              }
            }
    
            if (window.matchMedia('(max-width: 574px)').matches) {
              button.classList.add('block')
            }
            if (window.matchMedia('(min-width: 575px)').matches) {
              button.classList.remove('block')
            }
    
            // Expande o cookiebar
            button.addEventListener('click', () => {
              this.component.classList.remove('default')
              button.classList.add('d-none')
              document.body.style.overflowY = 'hidden'
              this._setOpenView()
            })
          })
      }
    
      _setCloseButton() {
        this.component
          .querySelectorAll('.br-modal-header .close')
          .forEach((closeButton) => {
            // encolhe o cookiebar (volta ao cookiebar default)
            closeButton.addEventListener('click', () => {
              // this.component.classList.remove('active')
              this.component.classList.add('default')
              this.component
                .querySelector('.actions .br-button.secondary')
                .classList.remove('d-none')
              document.body.style.overflowY = 'auto'
              this._setCloseView()
            })
          })
      }
    
      _setOpenView() {
        const wrapper = this.component.querySelector(
          '.br-modal > .br-card .wrapper'
        )
        const containerFluid = this.component.querySelector(
          '.br-modal > .br-card .container-fluid'
        )
        const padding = window
          .getComputedStyle(containerFluid, null)
          .getPropertyValue('padding')
          .match(/\d+/)
        const height = `${window.innerHeight - padding * 2}px`
        wrapper.style.height = height
      }
    
      _setCloseView() {
        const wrapper = this.component.querySelector(
          '.br-modal > .br-card .wrapper'
        )
        wrapper.removeAttribute('style')
      }
    
      _setResize() {
        window.addEventListener('resize', () => {
          if (!this.component.classList.contains('default')) {
            this._setOpenView()
          }
          this.component
            .querySelectorAll('.actions .br-button')
            .forEach((button) => {
              if (window.matchMedia('(max-width: 574px)').matches) {
                button.classList.add('block')
              }
              if (window.matchMedia('(min-width: 575px)').matches) {
                button.classList.remove('block')
              }
            })
        })
      }
    
      _setInfoText() {
        this.component
          .querySelectorAll('.br-modal-body .info-text')
          .forEach((infoText) => {
            infoText.innerHTML = this.data.infoText
          })
      }
    
      _setMainTitle() {
        this.component
          .querySelectorAll('.br-modal-header .br-modal-title')
          .forEach((mainTitle) => {
            const title = `<div class="row">
                            <div class="col">
                              <p>${this.data.mainTitle}</p>
                            </div>
                          </div>`
            mainTitle.innerHTML = title
          })
      }
    
      _setLastUpdate() {
        if (this.data.lastUpdate) {
          this.component
            .querySelectorAll('.br-modal-header .last-update')
            .forEach((lastUpdate) => {
              lastUpdate.innerHTML = `Última atualização: <span>${this.data.lastUpdate}</span>`
            })
        }
      }
    
      _setListHeader() {
        this.component
          .querySelectorAll('.br-modal-body .main-content')
          .forEach((mainContent) => {
            const listHeader = `<div class="header">
                                <div class="row justify-content-between flex-fill">
                                  <div class="col align-self-center">
                                    <div class="title">Classes de cookies</div>
                                  </div>
                                  <div class="col-auto">
                                    ${
                                      this.data.allOptOut
                                        ? this._createSwitchAll(this.data.selectAll)
                                        : ''
                                    }
                                  </div>
                                </div>
                              </div>`
            mainContent.insertAdjacentHTML('afterbegin', listHeader)
          })
      }
    
      _setEntryText() {
        this.component
          .querySelectorAll('.br-modal-header .entry-text')
          .forEach((entryText) => {
            entryText.innerHTML = this.data.entryText
          })
      }
    
      _setGroupInfo() {
        this.component
          .querySelectorAll('.br-modal-body .main-content')
          .forEach((mainContent) => {
            this.data.cookieGroups.forEach((item, index) => {
              const group = `<hr>
                          <div class="br-item group-info">
                            <div class="row mb-1">
                              <div class="col align-self-center">
                                <span class="group-name">${item.groupName}</span>
                                <span class="group-size">(${
                                  item.cookieList.length
                                })</span>
                              </div>
                              <div class="col-2-auto align-self-center d-flex justify-content-lg-end">
                                ${
                                  item.groupOptOut
                                    ? this._createSwitchButton(
                                        index,
                                        'group-',
                                        item.groupSelected
                                      )
                                    : '<span class="always-active">Sempre ativo</span>'
                                }
                              </div>
                              <div class="col-auto align-self-center">
                                <button class="br-button circle small" type="button"><i class="fas fa-angle-down" aria-hidden="true"></i>
                                </button>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <p class="group-description">${item.groupText}</p>
                              </div>
                            </div>
                          </div>
                          <div class="br-list cookie-info">
                            <div class="br-item">
                              <div class="row">
                                <div class="col">
                                  ${this._buildCookieInfo(index, item.cookieList)}
                                </div>
                              </div>
                            </div>
                          </div>`
    
              mainContent.insertAdjacentHTML('beforeend', group)
            })
          })
      }
    
      _setNotification() {
        if (this.data.noteList && this.data.noteList.length > 0) {
          this.component
            .querySelectorAll('.br-modal-body .main-content')
            .forEach((mainContent) => {
              const note = `<hr>
                          <div class="br-item">
                          <div class="row">
                            <div class="col align-self-center">
                              <span class="group-name">${this.data.noteTitle}</span>
                            </div>
                            <div class="col-auto">
                              <button class="br-button circle small" type="button"><i class="fas fa-angle-down" aria-hidden="true"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="br-list">
                          ${this._buildNotificationInfo()}
                        </div>`
    
              mainContent.insertAdjacentHTML('beforeend', note)
            })
        }
      }
    
      _setLinks() {
        if (this.data.links && this.data.links.length > 0) {
          this.component.querySelectorAll('.br-modal-body').forEach((modalBody) => {
            const link = `<div class="br-list parallel-content">
                            ${this._buildLinkInfo()}
                          </div>`
    
            modalBody.insertAdjacentHTML('beforeend', link)
          })
        }
      }
    
      _buildCookieInfo(groupIndex, cookieList) {
        let cookieInfo = ''
        cookieList.forEach((cookie, index) => {
          cookieInfo += `<div class="br-card">
                          <div class="card-content">
                            <div class="row mb-1">
                              <div class="col text-right">
                                ${
                                  cookie.cookieOptOut
                                    ? this._createSwitchButton(
                                        index,
                                        `cookie-${groupIndex}`,
                                        cookie.cookieSelected
                                      )
                                    : ''
                                }
                              </div>
                            </div>
                            <div class="row mb-1">
                              ${
                                !cookie.cookieSelected && cookie.alertMessage
                                  ? `<div class="col text-right message">
                                      <span class="feedback warning" role="alert">
                                        <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
                                        ${this.data.cookieGroups[groupIndex].cookieList[index].alertMessage}
                                      </span>
                                    </div>`
                                  : ''
                              }
                            </div>
                            <div class="row">
                              <div class="col-4 col-sm-2 mb-1 cookie-term"><span>Cookies</span></div>
                              <div class="col mb-1 cookie-data"><span>${
                                cookie.cookieName
                              }</span></div>
                            </div>
                            <div class="row">
                              <div class="col-4 col-sm-2 mb-1 cookie-term"><span>Vencimento</span></div>
                              <div class="col mb-1 cookie-data"><span>${
                                cookie.expires
                              }</span></div>
                            </div>
                            <div class="row">
                              <div class="col-4 col-sm-2 mb-1 cookie-term"><span>Domínio</span></div>
                              <div class="col mb-1 cookie-data"><span>${
                                cookie.domain
                              }</span></div>
                            </div>
                            <div class="row">
                              <div class="col-4 col-sm-2 mb-1 cookie-term"><span>Empresa</span></div>
                              <div class="col mb-1 cookie-data"><span>${
                                cookie.entreprise
                              }</span></div>
                            </div>
                            <div class="row">
                              <div class="col-4 col-sm-2 mb-1 cookie-term"><span>Finalidade</span></div>
                              <div class="col mb-1 cookie-data"><span>${
                                cookie.purpose
                              }</span></div>
                            </div>
                            <div class="row">
                              <div class="col-4 col-sm-2 mb-1 cookie-term"><span>Descrição</span></div>
                              <div class="col mb-1 cookie-data"><span>${
                                cookie.description
                              }</span></div>
                            </div>
                          </div>
                        </div>`
        })
        return cookieInfo
      }
    
      _createSwitchAll(selected) {
        const switchAll = `<div class="br-switch small icon">
                              <input id="switch-all" type="checkbox" ${
                                selected ? 'checked' : ''
                              }>
                              <label for="switch-all">Selecionar Tudo</label>
                            </div>`
    
        return switchAll
      }
      _createSwitchButton(index, piece, selected) {
        const switchButton = `<div class="br-switch small icon">
                                <input id="switch-${
                                  piece + index
                                }" type="checkbox" ${selected ? 'checked' : ''}>
                                <label for="switch-${piece + index}"></label>
                                <div class="switch-data" data-enabled="Ligado" data-disabled="Desligado"></div>
                              </div>`
    
        return switchButton
      }
    
      _buildNotificationInfo() {
        let noteInfo = ''
        this.data.noteList.forEach((item) => {
          noteInfo += `<div class="br-item notes">
                        <div class="row">
                          <div class="col">
                            <p>${item.question}</p>
                            <p>${item.answer}</p>
                          </div>
                        </div>
                      </div>`
        })
        return noteInfo
      }
    
      _buildLinkInfo() {
        let linkInfo = ''
        this.data.links.forEach((link) => {
          linkInfo += `<div class="br-item text-center">
                        <div class="row">
                          <div class="col">
                            <a href="${link.url}">${link.name}<i class="fas fa-external-link-alt" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>`
        })
        return linkInfo
      }
    
      _setPriorityValues() {
        if (this.data.selectAll) {
          this.data.cookieGroups.forEach((group) => {
            group.groupSelected = true
            group.cookieList.forEach((cookie) => {
              cookie.cookieSelected = true
            })
          })
        } else {
          this.data.cookieGroups.forEach((group) => {
            if (group.groupSelected) {
              group.cookieList.forEach((cookie) => {
                cookie.cookieSelected = true
              })
            }
          })
        }
      }
    
      _setConsistency() {
        let allGroupsTrue = true
        this.data.cookieGroups.forEach((group) => {
          let allCookiesTrue = true
          group.cookieList.forEach((cookie) => {
            if (!cookie.cookieSelected) {
              allCookiesTrue = false
            }
          })
          if (allCookiesTrue) {
            group.groupSelected = true
          }
          if (!group.groupSelected) {
            allGroupsTrue = false
          }
        })
        if (allGroupsTrue) {
          this.data.selectAll = true
        }
      }
    
      _setAllOptOut() {
        if (!this.data.allOptOut) {
          this.data.selectAll = true
          this.data.cookieGroups.forEach((group) => {
            group.groupOptOut = false
            group.groupSelected = true
            group.cookieList.forEach((cookie) => {
              cookie.cookieOptOut = false
              cookie.cookieSelected = true
            })
          })
        }
      }
    
      _setGroupOptOut() {
        this.data.cookieGroups.forEach((group) => {
          if (!group.groupOptOut) {
            group.groupSelected = true
            group.cookieList.forEach((cookie) => {
              cookie.cookieOptOut = false
              cookie.cookieSelected = true
            })
          }
        })
      }
    
      _setCookieOptOut() {
        this.data.cookieGroups.forEach((group) => {
          group.cookieList.forEach((cookie) => {
            if (!cookie.cookieOptOut) {
              cookie.cookieSelected = true
            }
          })
        })
      }
    
      _insertAlertMessage(indexGroup, indexCookie) {
        if (
          this.data.cookieGroups[indexGroup].cookieList[indexCookie].alertMessage &&
          this.data.cookieGroups[indexGroup].cookieList[indexCookie]
            .alertMessage !== ''
        ) {
          const messageTemplate = `<div class="col text-right message">
                                    <span class="feedback warning" role="alert">
                                      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
                                      ${this.data.cookieGroups[indexGroup].cookieList[indexCookie].alertMessage}
                                    </span>
                                  </div>`
    
          for (const [indexGr, group] of this.component
            .querySelectorAll('.main-content .group-info')
            .entries()) {
            if (indexGr === indexGroup) {
              for (const [
                indexCo,
                cookie,
              ] of group.nextElementSibling
                .querySelectorAll('.main-content .cookie-info .br-card')
                .entries()) {
                if (indexCo === indexCookie) {
                  const firstRow = cookie.querySelector('.row:nth-child(2)')
                  firstRow.insertAdjacentHTML('afterbegin', messageTemplate)
                  break
                }
              }
              break
            }
          }
        }
      }
    
      _removeAlertMessage(indexGroup, indexCookie) {
        for (const [indexGr, group] of this.component
          .querySelectorAll('.main-content .group-info')
          .entries()) {
          if (indexGr === indexGroup) {
            for (const [
              indexCo,
              cookie,
            ] of group.nextElementSibling
              .querySelectorAll('.main-content .cookie-info .br-card')
              .entries()) {
              if (indexCo === indexCookie) {
                const messageCol = cookie.querySelector(
                  '.row:nth-child(2) .message'
                )
                if (messageCol) {
                  messageCol.remove()
                }
                break
              }
            }
            break
          }
        }
      }
    
      _setCookieSelection() {
        this.component
          .querySelectorAll(
            '.main-content .header .br-switch input[type="checkbox"]'
          )
          .forEach((switchAll) => {
            switchAll.addEventListener('click', () => {
              this.data.selectAll = switchAll.checked
              if (switchAll.checked) {
                switchAll.nextElementSibling.innerHTML = 'Desselecionar Tudo'
              } else {
                switchAll.nextElementSibling.innerHTML = 'Selecionar Tudo'
              }
              this.component
                .querySelectorAll(
                  '.main-content .group-info .br-switch input[type="checkbox"]'
                )
                .forEach((switchGroup) => {
                  if (switchGroup.checked !== switchAll.checked) {
                    switchGroup.click()
                  }
                })
            })
          })
    
        this.component
          .querySelectorAll('.main-content .group-info')
          .forEach((group, groupIndex) => {
            group
              .querySelectorAll('.br-switch input[type="checkbox"]')
              .forEach((switchGroup) => {
                switchGroup.addEventListener('click', () => {
                  this.data.cookieGroups[groupIndex].groupSelected =
                    switchGroup.checked
                  group.nextElementSibling
                    .querySelectorAll('.br-switch input[type="checkbox"]')
                    .forEach((switchCookie) => {
                      if (switchCookie.checked !== switchGroup.checked) {
                        switchCookie.click()
                      }
                    })
                  this.component
                    .querySelectorAll(
                      '.main-content .header .br-switch input[type="checkbox"]'
                    )
                    .forEach((switchAll) => {
                      if (!switchGroup.checked) {
                        if (switchAll.checked) {
                          switchAll.nextElementSibling.innerHTML = 'Selecionar Tudo'
                          switchAll.checked = false
                          this.data.selectAll = false
                        }
                      } else {
                        let allTrue = true
                        this.component
                          .querySelectorAll('.main-content .group-info')
                          .forEach((group) => {
                            group
                              .querySelectorAll('.br-switch input[type="checkbox"]')
                              .forEach((switchItem) => {
                                if (!switchItem.checked) {
                                  allTrue = false
                                }
                              })
                          })
                        if (allTrue) {
                          switchAll.click()
                        }
                      }
                    })
                })
              })
          })
    
        this.component
          .querySelectorAll('.main-content .group-info')
          .forEach((group, groupIndex) => {
            group.nextElementSibling
              .querySelectorAll('.br-switch input[type="checkbox"]')
              .forEach((switchCookie, cookieIndex) => {
                switchCookie.addEventListener('click', () => {
                  this.data.cookieGroups[groupIndex].cookieList[
                    cookieIndex
                  ].cookieSelected = switchCookie.checked
                  if (switchCookie.checked) {
                    this._removeAlertMessage(groupIndex, cookieIndex)
                  } else {
                    this._insertAlertMessage(groupIndex, cookieIndex)
                  }
                  group
                    .querySelectorAll('.br-switch input[type="checkbox"]')
                    .forEach((switchGroup) => {
                      if (!switchCookie.checked) {
                        if (switchGroup.checked) {
                          switchGroup.checked = false
                          this.data.cookieGroups[groupIndex].groupSelected = false
                          this.component
                            .querySelectorAll(
                              '.main-content .header .br-switch input[type="checkbox"]'
                            )
                            .forEach((switchAll) => {
                              if (!switchGroup.checked) {
                                if (switchAll.checked) {
                                  switchAll.nextElementSibling.innerHTML =
                                    'Selecionar Tudo'
                                  switchAll.checked = false
                                  this.data.selectAll = false
                                }
                              } else {
                                let allTrue = true
                                this.component
                                  .querySelectorAll('.main-content .group-info')
                                  .forEach((group) => {
                                    group
                                      .querySelectorAll(
                                        '.br-switch input[type="checkbox"]'
                                      )
                                      .forEach((switchItem) => {
                                        if (!switchItem.checked) {
                                          allTrue = false
                                        }
                                      })
                                  })
                                if (allTrue) {
                                  switchAll.click()
                                }
                              }
                            })
                        }
                      } else {
                        let allTrue = true
                        group.nextElementSibling
                          .querySelectorAll('.br-switch input[type="checkbox"]')
                          .forEach((switchItem) => {
                            if (!switchItem.checked) {
                              allTrue = false
                            }
                          })
                        if (allTrue) {
                          switchGroup.click()
                        }
                      }
                    })
                })
              })
          })
      }
    
      _setSwitchBehavior() {
        const switchAll = this.component.querySelector('#switch-all')
        switchAll.addEventListener('click', () => {
          this.component
            .querySelectorAll(
              '.main-content .group-info .br-switch input[type="checkbox"], .main-content .cookie-info .br-switch input[type="checkbox"]'
            )
            .forEach((switchItem) => {
              if (switchItem.checked !== switchAll.checked) {
                switchItem.click()
              }
            })
        })
    
        this.component
          .querySelectorAll('.main-content .group-info')
          .forEach((group, indexGroup) => {
            const switchGroup = group.querySelector(
              '.br-switch input[type="checkbox"]'
            )
            if (switchGroup) {
              switchGroup.addEventListener('click', () => {
                group.nextElementSibling
                  .querySelectorAll('.br-switch input[type="checkbox"]')
                  .forEach((switchCookie) => {
                    if (switchCookie.checked !== switchGroup.checked) {
                      switchCookie.click()
                    }
                  })
                if (switchGroup.checked) {
                  if (this._getAllSwitchesState() === true) {
                    switchAll.checked = true
                    this.data.selectAll = switchAll.checked
                  }
                } else {
                  switchAll.checked = false
                  this.data.selectAll = switchAll.checked
                }
              })
    
              group.nextElementSibling
                .querySelectorAll('.br-switch input[type="checkbox"]')
                .forEach((switchCookie) => {
                  switchCookie.addEventListener('click', () => {
                    if (switchCookie.checked) {
                      if (this._getAllGroupSwitchesState(group) === true) {
                        switchGroup.checked = true
                        this.data.cookieGroups[indexGroup].groupSelected =
                          switchGroup.checked
                        if (this._getAllSwitchesState() === true) {
                          switchAll.checked = true
                          this.data.selectAll = switchAll.checked
                        }
                      }
                    } else {
                      switchGroup.checked = false
                      this.data.cookieGroups[indexGroup].groupSelected =
                        switchGroup.checked
                      switchAll.checked = false
                      this.data.selectAll = switchAll.checked
                    }
                  })
                })
            }
          })
      }
    
      _getAllSwitchesState() {
        let state = true
        this.component
          .querySelectorAll(
            '.main-content .group-info .br-switch input[type="checkbox"], .main-content .cookie-info .br-switch input[type="checkbox"]'
          )
          .forEach((item) => {
            if (!item.checked) {
              state = false
            }
          })
        return state
      }
    
      _getAllGroupSwitchesState(group) {
        let state = true
        group.nextElementSibling
          .querySelectorAll('.br-switch input[type="checkbox"]')
          .forEach((item) => {
            if (!item.checked) {
              state = false
            }
          })
        return state
      }
    
      _setGroupBehavior() {
        this.component
          .querySelectorAll('.main-content .br-item .br-button')
          .forEach((button) => {
            button.addEventListener('click', () => {
              let element = button
              const icon = button.querySelector('i.fas')
              while (!element.classList.contains('br-item')) {
                element = element.parentNode
              }
              if (element.classList.contains('open')) {
                element.classList.remove('open')
                icon.classList.remove('fa-angle-up')
                icon.classList.add('fa-angle-down')
              } else {
                element.classList.add('open')
                icon.classList.remove('fa-angle-down')
                icon.classList.add('fa-angle-up')
              }
            })
          })
      }
    
      _setAcceptBehavior() {
        const acceptButton = this.component.querySelector(
          '.actions .br-button.primary'
        )
        acceptButton.addEventListener('click', () => {
          this.callback(this._setOutputJSON())
        })
      }
    
      _setOutputJSON() {
        this.output = {}
        this.output.selectAll = this.data.selectAll
        this.output.cookieGroups = []
        this.data.cookieGroups.forEach((group) => {
          const cookies = []
          group.cookieList.forEach((cookie) => {
            cookies.push({
              cookieId: cookie.cookieId,
              cookieName: cookie.cookieName,
              cookieSelected: cookie.cookieSelected,
            })
          })
          this.output.cookieGroups.push({
            groupId: group.groupId,
            groupName: group.groupName,
            groupSelected: group.groupSelected,
            cookieList: cookies,
          })
        })
        return JSON.stringify(this.output)
      }
    }
    
    const cookiebarData = [
      {
        lang: 'pt-br',
        allOptOut: true,
        acceptButton: 'Aceitar',
        optInButton: 'Ver Política de Cookies',
        infoText: 'Minim pariatur amet laboris sint consectetur enim do voluptate',
        mainTitle: 'Exercitation et proident',
        lastUpdate: '01/02/2021',
        entryText:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus aspernatur neque culpa nisi alias. Voluptatem dicta nihil magnam, cumque voluptatum animi distinctio molestias recusandae ipsam, sapiente unde error repellendus quibusdam?',
        selectAll: false,
        cookieGroups: [
          {
            groupId: 'necessarios',
            groupName: 'Estritamente necessários',
            groupOptOut: true,
            groupSelected: false,
            groupText:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus fuga omnis, placeat harum id aliquam, blanditiis consectetur est cupiditate ipsam alias vitae veritatis beatae, aperiam totam assumenda. Sed, modi!',
            cookieList: [
              {
                cookieId: 'necessario-1',
                cookieOptOut: true,
                cookieSelected: false,
                alertMessage: 'Alerta group 0 - cookie 0',
                cookieName: 'optimizelyEndUserId',
                expires: '30 minutos',
                domain: 'serpro.gov.br',
                entreprise: 'Serpro',
                purpose: 'Autorização',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum.',
              },
              {
                cookieId: 'necessario-2',
                cookieOptOut: true,
                cookieSelected: false,
                alertMessage: 'Alerta group 0 - cookie 1',
                cookieName: 'optimizelyEndUserId',
                expires: '30 minutos',
                domain: 'serpro.gov.br',
                entreprise: 'Serpro',
                purpose: 'Autorização',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum.',
              },
            ],
          },
          {
            groupId: 'desempenho',
            groupName: 'Desempenho, funcionamento, marketing e personalização',
            groupOptOut: true,
            groupSelected: false,
            groupText:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus fuga omnis, placeat harum id aliquam, blanditiis consectetur est cupiditate ipsam alias vitae veritatis beatae, aperiam totam assumenda. Sed, modi!',
            cookieList: [
              {
                cookieId: 'desempenho-2',
                cookieOptOut: true,
                cookieSelected: false,
                cookieName: 'optimizelyEndUserId',
                expires: '30 minutos',
                domain: 'serpro.gov.br',
                entreprise: 'Serpro',
                purpose: 'Autorização',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum.',
              },
              {
                cookieId: 'desempenho-2',
                cookieOptOut: true,
                cookieSelected: true,
                cookieName: 'optimizelyEndUserId',
                expires: '30 minutos',
                domain: 'serpro.gov.br',
                entreprise: 'Serpro',
                purpose: 'Autorização',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum.',
              },
            ],
          },
          {
            groupId: 'experiencia',
            groupName: 'Experiência do site',
            groupOptOut: true,
            groupSelected: false,
            groupText:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus fuga omnis, placeat harum id aliquam, blanditiis consectetur est cupiditate ipsam alias vitae veritatis beatae, aperiam totam assumenda. Sed, modi!',
            cookieList: [
              {
                cookieId: 'experiencia-1',
                cookieOptOut: true,
                cookieSelected: true,
                alertMessage: 'Alerta group 2 - cookie 0',
                cookieName: 'optimizelyEndUserId',
                expires: '30 minutos',
                domain: 'serpro.gov.br',
                entreprise: 'Serpro',
                purpose: 'Autorização',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum.',
              },
              {
                cookieId: 'experiencia-2',
                cookieOptOut: true,
                cookieSelected: true,
                cookieName: 'optimizelyEndUserId',
                expires: '30 minutos',
                domain: 'serpro.gov.br',
                entreprise: 'Serpro',
                purpose: 'Autorização',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum.',
              },
            ],
          },
        ],
        noteTitle: 'Aviso sobre cookies',
        noteList: [
          {
            question: 'O que são cookies?',
            answer:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius distinctio rerum ad, maxime alias vel minima, asperiores sequi eveniet non optio officiis quaerat reiciendis quae odio explicabo ut debitis?',
          },
          {
            question: 'Durabilidade?',
            answer:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius distinctio rerum ad, maxime alias vel minima, asperiores sequi eveniet non optio officiis quaerat reiciendis quae odio explicabo ut debitis?',
          },
          {
            question: 'Proveniência?',
            answer:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius distinctio rerum ad, maxime alias vel minima, asperiores sequi eveniet non optio officiis quaerat reiciendis quae odio explicabo ut debitis?',
          },
          {
            question: 'Finalidade?',
            answer:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius distinctio rerum ad, maxime alias vel minima, asperiores sequi eveniet non optio officiis quaerat reiciendis quae odio explicabo ut debitis?',
          },
        ],
        links: [
          {
            name:
              'Declaração de Conformidade com os Princípios de Proteção de Dados',
            url: '#',
          },
        ],
      },
      {
        lang: 'en',
        allOptOut: true,
        infoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        mainTitle: 'Respeitamos a sua Privacidade',
        lastUpdate: '01/02/2021',
        entryText:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt culpa corrupti quia minus ullam veniam odit, deleniti reiciendis voluptatum officiis adipisci, commodi perspiciatis aspernatur, libero ratione. Molestias vero accusamus sapiente!',
        selectAll: false,
        cookieGroups: [
          {
            groupId: 'necessarios',
            groupName: 'Estritamente necessários',
            groupOptOut: true,
            groupSelected: false,
            groupText:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus fuga omnis, placeat harum id aliquam, blanditiis consectetur est cupiditate ipsam alias vitae veritatis beatae, aperiam totam assumenda. Sed, modi!',
            cookieList: [
              {
                cookieId: 'necessario-1',
                cookieOptOut: true,
                cookieSelected: true,
                alertMessage:
                  'Ao clicar nessa opção sua navegação ficará comprometida',
                cookieName: 'optimizelyEndUserId',
                expires: '30 minutos',
                domain: 'serpro.gov.br',
                entreprise: 'Serpro',
                purpose: 'Autorização',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum.',
              },
              {
                cookieId: 'necessario-2',
                cookieOptOut: true,
                cookieSelected: true,
                alertMessage:
                  'Ao clicar nessa opção sua navegação ficará comprometida',
                cookieName: 'optimizelyEndUserId',
                expires: '30 minutos',
                domain: 'serpro.gov.br',
                entreprise: 'Serpro',
                purpose: 'Autorização',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum.',
              },
            ],
          },
          {
            groupId: 'desempenho',
            groupName: 'Desempenho, funcionamento, marketing e personalização',
            groupOptOut: true,
            groupSelected: false,
            groupText:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus fuga omnis, placeat harum id aliquam, blanditiis consectetur est cupiditate ipsam alias vitae veritatis beatae, aperiam totam assumenda. Sed, modi!',
            cookieList: [
              {
                cookieId: 'desempenho-1',
                cookieOptOut: true,
                cookieSelected: false,
                alertMessage:
                  'Ao clicar nessa opção sua navegação ficará comprometida',
                cookieName: 'optimizelyEndUserId',
                expires: '30 minutos',
                domain: 'serpro.gov.br',
                entreprise: 'Serpro',
                purpose: 'Autorização',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum.',
              },
              {
                cookieId: 'desempenho-2',
                cookieOptOut: true,
                cookieSelected: true,
                alertMessage:
                  'Ao clicar nessa opção sua navegação ficará comprometida',
                cookieName: 'optimizelyEndUserId',
                expires: '30 minutos',
                domain: 'serpro.gov.br',
                entreprise: 'Serpro',
                purpose: 'Autorização',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum.',
              },
            ],
          },
          {
            groupId: 'experiencia',
            groupName: 'Experiência do site',
            groupOptOut: true,
            groupSelected: true,
            groupText:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus fuga omnis, placeat harum id aliquam, blanditiis consectetur est cupiditate ipsam alias vitae veritatis beatae, aperiam totam assumenda. Sed, modi!',
            cookieList: [
              {
                cookieId: 'experiencia-1',
                cookieOptOut: true,
                cookieSelected: true,
                alertMessage:
                  'Ao clicar nessa opção sua navegação ficará comprometida',
                cookieName: 'optimizelyEndUserId',
                expires: '30 minutos',
                domain: 'serpro.gov.br',
                entreprise: 'Serpro',
                purpose: 'Autorização',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum.',
              },
              {
                cookieId: 'experiencia-2',
                cookieOptOut: true,
                cookieSelected: true,
                alertMessage:
                  'Ao clicar nessa opção sua navegação ficará comprometida',
                cookieName: 'optimizelyEndUserId',
                expires: '30 minutos',
                domain: 'serpro.gov.br',
                entreprise: 'Serpro',
                purpose: 'Autorização',
                description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam inventore fuga consectetur minus accusantium sapiente, distinctio dolorum illum, doloremque rem deleniti recusandae quod rerum quidem amet? Unde, laudantium cum.',
              },
            ],
          },
        ],
        noteTitle: 'Aviso sobre cookies',
        noteList: [
          {
            question: 'O que são cookies?',
            answer:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius distinctio rerum ad, maxime alias vel minima, asperiores sequi eveniet non optio officiis quaerat reiciendis quae odio explicabo ut debitis?',
          },
          {
            question: 'Durabilidade?',
            answer:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius distinctio rerum ad, maxime alias vel minima, asperiores sequi eveniet non optio officiis quaerat reiciendis quae odio explicabo ut debitis?',
          },
          {
            question: 'Proveniência?',
            answer:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius distinctio rerum ad, maxime alias vel minima, asperiores sequi eveniet non optio officiis quaerat reiciendis quae odio explicabo ut debitis?',
          },
          {
            question: 'Finalidade?',
            answer:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius distinctio rerum ad, maxime alias vel minima, asperiores sequi eveniet non optio officiis quaerat reiciendis quae odio explicabo ut debitis?',
          },
        ],
        links: [
          {
            name:
              'Declaração de Conformidade com os Princípios de Proteção de Dados',
            url: '#',
          },
        ],
      },
    ]
    
    function callback(json) {
      // console.log(json)
    }
    
    // new BRCookiebar
    const cookiebarList = []
    for (const brCookiebar of window.document.querySelectorAll('.br-cookiebar')) {
      cookiebarList.push(
        new BRCookiebar(
          'br-cookiebar',
          brCookiebar,
          JSON.stringify(cookiebarData),
          'pt-br',
          callback
        )
      )
    }
    /* harmony default export */ __webpack_exports__["default"] = (BRCookiebar);
    
    
    /***/ }),
    /* 11 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BRHeader {
      constructor(name, component) {
        this.name = name
        this.component = component
        this.componentSearch = this.component.querySelector('.header-search')
        this.componentSearchInput = this.component.querySelector(
          '.header-search input'
        )
        this.componentSearchTrigger = this.component.querySelector(
          '[data-toggle="search"]'
        )
        this.componentSearchDismiss = this.component.querySelector(
          '[data-dismiss="search"]'
        )
        this._setBehavior()
      }
    
      _setBehavior() {
        this._setLoginBehavior()
        this._setLogoutBehavior()
        this._setSearchBehaviors()
        this._setKeyboardBehaviors()
        this._setDropdownBehavior()
        this._setSticky()
      }
    
      _setLoginBehavior() {
        for (const login of this.component.querySelectorAll(
          '[data-trigger="login"]'
        )) {
          login.addEventListener('click', () => {
            const loginParent = login.closest('.header-login')
            loginParent.querySelector('.header-sign-in').classList.add('d-none')
            loginParent.querySelector('.header-avatar').classList.remove('d-none')
          })
        }
      }
    
      _setLogoutBehavior() {
        for (const logout of this.component.querySelectorAll(
          '[data-trigger="logout"]'
        )) {
          logout.addEventListener('click', () => {
            const logoutParent = logout.closest('.header-login')
            logoutParent.querySelector('.avatar').classList.remove('show')
            logoutParent
              .querySelector('[data-toggle="dropdown"]')
              .classList.remove('active')
            logoutParent.querySelector('.header-sign-in').classList.remove('d-none')
            logoutParent.querySelector('.header-avatar').classList.add('d-none')
          })
        }
      }
    
      _setSearchBehaviors() {
        // Abrir busca
        if (this.componentSearchTrigger) {
          this.componentSearchTrigger.addEventListener('click', () => {
            this._openSearch()
          })
        }
    
        // Fechar busca
        if (this.componentSearchDismiss) {
          this.componentSearchDismiss.addEventListener('click', () => {
            this._closeSearch()
          })
        }
      }
    
      _setKeyboardBehaviors() {
        if (this.componentSearchInput) {
          this.componentSearchInput.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
              // Tecla ESC
              case 27:
                this._closeSearch()
                break
              default:
                break
            }
          })
        }
      }
      _openSearch() {
        if (this.componentSearch) {
          this.componentSearch.classList.add('active')
          this.componentSearch.querySelector('input').focus()
        }
      }
    
      _closeSearch() {
        if (this.componentSearch) {
          this.componentSearch.classList.remove('active')
          this.componentSearchTrigger.focus()
        }
      }
    
      _setDropdownBehavior() {
        for (const trigger of this.component.querySelectorAll(
          '.dropdown [data-toggle="dropdown"]'
        )) {
          trigger.addEventListener('click', () => {
            if (trigger.parentNode.classList.contains('show')) {
              trigger.classList.remove('active')
              trigger.parentNode.classList.remove('show')
              return
            }
            trigger.classList.add('active')
            trigger.parentNode.classList.add('show')
          })
        }
      }
    
      _setSticky() {
        if (this.component.hasAttribute('data-sticky')) {
          window.onscroll = () => {
            if (window.pageYOffset > this.component.offsetHeight) {
              this.component.classList.add('sticky', 'compact')
            } else {
              this.component.classList.remove('sticky', 'compact')
            }
          }
        }
      }
    }
    
    const headerList = []
    for (const brHeader of window.document.querySelectorAll(
      '.br-header:not(.dsgov)'
    )) {
      headerList.push(new BRHeader('br-header', brHeader))
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (BRHeader);
    
    
    /***/ }),
    /* 12 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BRInput {
      constructor(name, component) {
        this.name = name
        this.component = component
        this._currentFocus = -1
        this._setBehavior()
      }
    
      _setBehavior() {
        this._setPasswordViewBehavior()
        this._setAutocompleteBehavior()
      }
    
      _setPasswordViewBehavior() {
        for (const inputPassword of this.component.querySelectorAll(
          'input[type="password"]'
        )) {
          if (!inputPassword.disabled) {
            for (const buttonIcon of inputPassword.parentNode.querySelectorAll(
              'button.icon'
            )) {
              buttonIcon.addEventListener(
                'click',
                (event) => {
                  this._toggleShowPassword(event)
                },
                false
              )
            }
          }
        }
      }
    
      _toggleShowPassword(event) {
        for (const icon of event.currentTarget.querySelectorAll(
          '.svg-inline--fa'
        )) {
          if (icon.classList.contains('fa-eye')) {
            icon.classList.remove('fa-eye')
            icon.classList.add('fa-eye-slash')
            for (const input of this.component.querySelectorAll(
              'input[type="password"]'
            )) {
              input.setAttribute('type', 'text')
            }
          } else if (icon.classList.contains('fa-eye-slash')) {
            icon.classList.remove('fa-eye-slash')
            icon.classList.add('fa-eye')
            for (const input of this.component.querySelectorAll(
              'input[type="text"]'
            )) {
              input.setAttribute('type', 'password')
            }
          }
        }
      }
    
      _setAutocompleteBehavior() {
        for (const inputAutocomplete of this.component.querySelectorAll(
          'input.search-autocomplete'
        )) {
          inputAutocomplete.addEventListener(
            'input',
            (event) => {
              this._clearSearchItems()
              this._buildSearchItems(event.currentTarget)
            },
            false
          )
          inputAutocomplete.addEventListener(
            'keydown',
            (event) => {
              this._handleArrowKeys(event)
            },
            false
          )
        }
      }
    
      _buildSearchItems(element) {
        const searchList = window.document.createElement('div')
        searchList.setAttribute('class', 'search-items')
        this.component.appendChild(searchList)
        if (element.value !== '') {
          for (const data of this.dataList) {
            if (
              data.substr(0, element.value.length).toUpperCase() ===
              element.value.toUpperCase()
            ) {
              const item = window.document.createElement('div')
              item.innerHTML = `<strong>${data.substr(
                0,
                element.value.length
              )}</strong>`
              item.innerHTML += data.substr(element.value.length)
              item.innerHTML += `<input type="hidden" value="${data}">`
              item.addEventListener(
                'click',
                (event) => {
                  for (const input of event.currentTarget.querySelectorAll(
                    'input[type="hidden"]'
                  )) {
                    element.value = input.value
                  }
                  this._clearSearchItems()
                },
                false
              )
              searchList.appendChild(item)
            }
          }
        } else {
          this._clearSearchItems()
        }
      }
    
      _clearSearchItems() {
        for (const searchItems of this.component.querySelectorAll(
          '.search-items'
        )) {
          for (const item of searchItems.querySelectorAll('div')) {
            searchItems.removeChild(item)
          }
          this.component.removeChild(searchItems)
        }
      }
    
      _handleArrowKeys(event) {
        switch (event.keyCode) {
          case 13:
            if (this._currentFocus > -1) {
              event.preventDefault()
              for (const searchItems of this.component.querySelectorAll(
                '.search-items'
              )) {
                for (const itemActive of searchItems.querySelectorAll(
                  'div.is-active'
                )) {
                  itemActive.click()
                }
              }
              this._currentFocus = -1
            }
            break
          case 38:
            if (this._currentFocus > 0) {
              this._currentFocus -= 1
            }
            this._switchFocus()
            break
          case 40:
            for (const searchItems of this.component.querySelectorAll(
              '.search-items'
            )) {
              if (
                this._currentFocus <
                searchItems.querySelectorAll('div').length - 1
              ) {
                this._currentFocus += 1
              }
            }
            this._switchFocus()
            break
          default:
            break
        }
      }
    
      _switchFocus() {
        for (const searchItems of this.component.querySelectorAll(
          '.search-items'
        )) {
          for (const [index, item] of searchItems
            .querySelectorAll('div')
            .entries()) {
            if (index === this._currentFocus) {
              item.classList.add('is-active')
            }
            if (index !== this._currentFocus) {
              item.classList.remove('is-active')
            }
          }
        }
      }
    
      setAutocompleteData(dataList) {
        this.dataList = dataList
      }
    }
    const countries = [
      'Afeganistão',
      'África do Sul',
      'Albânia',
      'Alemanha',
      'Andorra',
      'Angola',
      'Anguilla',
      'Antártida',
      'Antígua e Barbuda',
      'Antilhas Holandesas',
      'Arábia Saudita',
      'Argélia',
      'Argentina',
      'Armênia',
      'Aruba',
      'Austrália',
      'Áustria',
      'Azerbaijão',
      'Bahamas',
      'Bahrein',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Bélgica',
      'Belize',
      'Benin',
      'Bermudas',
      'Bolívia',
      'Bósnia-Herzegóvina',
      'Botsuana',
      'Brasil',
      'Brunei',
      'Bulgária',
      'Burkina Fasso',
      'Burundi',
      'Butão',
      'Cabo Verde',
      'Camarões',
      'Camboja',
      'Canadá',
      'Cazaquistão',
      'Chade',
      'Chile',
      'China',
      'Chipre',
      'Cingapura',
      'Colômbia',
      'Congo',
      'Coréia do Norte',
      'Coréia do Sul',
      'Costa do Marfim',
      'Costa Rica',
      'Croácia (Hrvatska)',
      'Cuba',
      'Dinamarca',
      'Djibuti',
      'Dominica',
      'Egito',
      'El Salvador',
      'Emirados Árabes Unidos',
      'Equador',
      'Eritréia',
      'Eslováquia',
      'Eslovênia',
      'Espanha',
      'Estados Unidos',
      'Estônia',
      'Etiópia',
      'Fiji',
      'Filipinas',
      'Finlândia',
      'França',
      'Gabão',
      'Gâmbia',
      'Gana',
      'Geórgia',
      'Gibraltar',
      'Grã-Bretanha (Reino Unido, UK)',
      'Granada',
      'Grécia',
      'Groelândia',
      'Guadalupe',
      'Guam (Território dos Estados Unidos)',
      'Guatemala',
      'Guernsey',
      'Guiana',
      'Guiana Francesa',
      'Guiné',
      'Guiné Equatorial',
      'Guiné-Bissau',
      'Haiti',
      'Holanda',
      'Honduras',
      'Hong Kong',
      'Hungria',
      'Iêmen',
      'Ilha Bouvet (Território da Noruega)',
      'Ilha do Homem',
      'Ilha Natal',
      'Ilha Pitcairn',
      'Ilha Reunião',
      'Ilhas Aland',
      'Ilhas Cayman',
      'Ilhas Cocos',
      'Ilhas Comores',
      'Ilhas Cook',
      'Ilhas Faroes',
      'Ilhas Falkland (Malvinas)',
      'Ilhas Geórgia do Sul e Sandwich do Sul',
      'Ilhas Heard e McDonald (Território da Austrália)',
      'Ilhas Marianas do Norte',
      'Ilhas Marshall',
      'Ilhas Menores dos Estados Unidos',
      'Ilhas Norfolk',
      'Ilhas Seychelles',
      'Ilhas Solomão',
      'Ilhas Svalbard e Jan Mayen',
      'Ilhas Tokelau',
      'Ilhas Turks e Caicos',
      'Ilhas Virgens (Estados Unidos)',
      'Ilhas Virgens (Inglaterra)',
      'Ilhas Wallis e Futuna',
      'índia',
      'Indonésia',
      'Irã',
      'Iraque',
      'Irlanda',
      'Islândia',
      'Israel',
      'Itália',
      'Jamaica',
      'Japão',
      'Jersey',
      'Jordânia',
      'Kênia',
      'Kiribati',
      'Kuait',
      'Laos',
      'Látvia',
      'Lesoto',
      'Líbano',
      'Libéria',
      'Líbia',
      'Liechtenstein',
      'Lituânia',
      'Luxemburgo',
      'Macau',
      'Macedônia (República Yugoslava)',
      'Madagascar',
      'Malásia',
      'Malaui',
      'Maldivas',
      'Mali',
      'Malta',
      'Marrocos',
      'Martinica',
      'Maurício',
      'Mauritânia',
      'Mayotte',
      'México',
      'Micronésia',
      'Moçambique',
      'Moldova',
      'Mônaco',
      'Mongólia',
      'Montenegro',
      'Montserrat',
      'Myanma',
      'Namíbia',
      'Nauru',
      'Nepal',
      'Nicarágua',
      'Níger',
      'Nigéria',
      'Niue',
      'Noruega',
      'Nova Caledônia',
      'Nova Zelândia',
      'Omã',
      'Palau',
      'Panamá',
      'Papua-Nova Guiné',
      'Paquistão',
      'Paraguai',
      'Peru',
      'Polinésia Francesa',
      'Polônia',
      'Porto Rico',
      'Portugal',
      'Qatar',
      'Quirguistão',
      'República Centro-Africana',
      'República Democrática do Congo',
      'República Dominicana',
      'República Tcheca',
      'Romênia',
      'Ruanda',
      'Rússia (antiga URSS) - Federação Russa',
      'Saara Ocidental',
      'Saint Vincente e Granadinas',
      'Samoa Americana',
      'Samoa Ocidental',
      'San Marino',
      'Santa Helena',
      'Santa Lúcia',
      'São Bartolomeu',
      'São Cristóvão e Névis',
      'São Martim',
      'São Tomé e Príncipe',
      'Senegal',
      'Serra Leoa',
      'Sérvia',
      'Síria',
      'Somália',
      'Sri Lanka',
      'St. Pierre and Miquelon',
      'Suazilândia',
      'Sudão',
      'Suécia',
      'Suíça',
      'Suriname',
      'Tadjiquistão',
      'Tailândia',
      'Taiwan',
      'Tanzânia',
      'Território Britânico do Oceano índico',
      'Territórios do Sul da França',
      'Territórios Palestinos Ocupados',
      'Timor Leste',
      'Togo',
      'Tonga',
      'Trinidad and Tobago',
      'Tunísia',
      'Turcomenistão',
      'Turquia',
      'Tuvalu',
      'Ucrânia',
      'Uganda',
      'Uruguai',
      'Uzbequistão',
      'Vanuatu',
      'Vaticano',
      'Venezuela',
      'Vietnã',
      'Zâmbia',
      'Zimbábue',
    ]
    const inputList = []
    for (const brInput of window.document.querySelectorAll('.br-input')) {
      inputList.push(new BRInput('br-input', brInput))
    }
    for (const brInput of inputList) {
      brInput.component
        .querySelectorAll('input.search-autocomplete')
        .forEach(() => {
          brInput.setAutocompleteData(countries)
        })
    }
    /* harmony default export */ __webpack_exports__["default"] = (BRInput);
    
    
    /***/ }),
    /* 13 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BRMenu {
      constructor(name, component) {
        this.name = name
        this.component = component
        this.trigger = this.component.querySelector('[data-toggle="menu"]')
        this.scrim = this.component.querySelector('.menu-scrim')
        this.dismiss = this.component.querySelectorAll('[data-dismiss="menu"]')
        this.componentFolders = this.component.querySelectorAll('.menu-folder')
        this.componentItems = this.component.querySelectorAll('.menu-item')
        this._setBehavior()
      }
    
      _setBehavior() {
        this._toggleMenu()
        this._closeMenu()
        this._setDropMenu()
        this._setSideMenu()
        this._setKeyboardBehaviors()
        this._initType2Menu()
      }
    
      _setKeyboardBehaviors() {
        // Fechar com tecla ESC
        this.component.addEventListener('keyup', (event) => {
          switch (event.keyCode) {
            case 27:
              this._closeMenu()
              break
            default:
              break
          }
        })
        // Fechar com Tab fora do menu
        if (this.scrim) {
          this.scrim.addEventListener('keyup', () => {
            return this._closeMenu()
          })
        }
      }
    
      _toggleMenu() {
        // Clicar no trigger
        if (this.trigger) {
          this.trigger.addEventListener('click', () => {
            // Fechar Menu caso esteja aberto
            if (this.component.classList.contains('active')) {
              this._closeMenu()
              return
            }
            // Abre Menu
            this._openMenu()
          })
        }
        // Clicar no dismiss
        for (const close of this.dismiss) {
          close.addEventListener('click', () => {
            return this._closeMenu()
          })
        }
      }
    
      _openMenu() {
        return this.component.classList.add('active')
      }
    
      _closeMenu() {
        return this.component.classList.remove('active')
      }
    
      _setDropMenu() {
        // Configura Drop Menu para filho imediato de ".menu-folder"
        for (const item of this.component.querySelectorAll(
          '.menu-folder > a.menu-item'
        )) {
          // Inclui ícone de Drop Menu
          this._createIcon(item, 'fa-angle-down')
          // Configura como Drop Menu
          item.parentNode.classList.add('drop-menu')
          // Inicializa Drop Menu
          this._toggleDropMenu(item)
        }
      }
    
      _setSideMenu() {
        // Configura Side Menu para quem não for filho imediato de ".menu-folder"
        for (const ul of this.component.querySelectorAll('a.menu-item + ul')) {
          if (!ul.parentNode.classList.contains('menu-folder')) {
            // Inclui ícone de Side Menu
            this._createIcon(ul.previousElementSibling, 'fa-angle-right')
            // Configura como Side Menu
            ul.parentNode.classList.add('side-menu')
            // Inicializa Side Menu
            this._toggleSideMenu(ul.previousElementSibling)
          }
        }
      }
    
      _toggleDropMenu(element) {
        element.addEventListener('click', () => {
          // Fecha Drop Menu caso esteja aberto
          if (element.parentNode.classList.contains('active')) {
            element.parentNode.classList.remove('active')
            return
          }
    
          // Abre Drop Menu
          element.parentNode.classList.add('active')
        })
      }
    
      _toggleSideMenu(element) {
        element.addEventListener('click', () => {
          // Esconde todos os itens
          this._hideItems(element)
    
          // Mostra itens do Side Menu ativo
          this._showItems(element.parentNode)
    
          // Fecha Side Menu caso esteja aberto
          if (element.parentNode.classList.contains('active')) {
            this._closeSideMenu(element)
            element.focus()
            return
          }
    
          // Abre Side Menu
          element.parentNode.classList.add('active')
          element.focus()
        })
      }
    
      _closeSideMenu(element) {
        element.parentNode.classList.remove('active')
        // Verifica se existe Side Menu anterior, caso contrário mostra todos os itens de volta
        const parentFolder = element.parentNode.closest('.side-menu.active')
          ? element.parentNode.closest('.side-menu.active')
          : element.closest('.menu-body')
        this._showItems(parentFolder)
      }
    
      _hideItems(element) {
        for (const item of element
          .closest('.menu-body')
          .querySelectorAll('.menu-item')) {
          item.setAttribute('hidden', '')
        }
      }
    
      _showItems(element) {
        for (const item of element.querySelectorAll('.menu-item')) {
          item.removeAttribute('hidden')
        }
      }
    
      _createIcon(element, icon) {
        const menuIconContainer = document.createElement('span')
        menuIconContainer.classList.add('support')
    
        const menuIcon = document.createElement('i')
        menuIcon.classList.add('fas')
        menuIcon.classList.add(icon)
        menuIcon.setAttribute('aria-hidden', 'true')
    
        menuIconContainer.appendChild(menuIcon)
        element.appendChild(menuIconContainer)
      }
    
      _initType2Menu() {
        const ativadorMenu = document.querySelector(
          '[data-toggle="menu"][data-target="#navigation"]'
        )
        if (ativadorMenu) {
          ativadorMenu.addEventListener('click', () => {
            document
              .querySelector(ativadorMenu.dataset.target)
              .classList.toggle('active')
          })
        }
      }
    }
    
    const menuList = []
    for (const brMenu of window.document.querySelectorAll('.br-menu:not(.dsgov)')) {
      menuList.push(new BRMenu('br-menu', brMenu))
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (BRMenu);
    
    
    /***/ }),
    /* 14 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BRAlert {
      constructor(name, component) {
        this.name = name
        this.component = component
        this._setBehavior()
      }
    
      _setBehavior() {
        for (const button of this.component.querySelectorAll(
          '.br-message .close'
        )) {
          button.addEventListener('click', () => {
            this._dismiss(this.component)
          })
        }
      }
    
      _dismiss(component) {
        component.parentNode.removeChild(component)
      }
    }
    /* Instancia a classe */
    const alertList = []
    for (const brAlert of window.document.querySelectorAll('.br-message')) {
      alertList.push(new BRAlert('br-message', brAlert))
    }
    /* harmony default export */ __webpack_exports__["default"] = (BRAlert);
    
    
    /***/ }),
    /* 15 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _scrim_scrim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    
    class BRModal {
      constructor(name, component) {
        this.name = name
        this.component = component
        this._setBehavior()
      }
    
      _setBehavior() {
        for (const brScrim of window.document.querySelectorAll('.br-scrim')) {
          const scrim = new _scrim_scrim__WEBPACK_IMPORTED_MODULE_0__["default"]('br-scrim', brScrim)
          for (const button of window.document.querySelectorAll(
            '.br-scrim + button'
          )) {
            button.addEventListener('click', () => {
              scrim.showScrim()
            })
          }
        }
      }
    }
    /* harmony default export */ __webpack_exports__["default"] = (BRModal);
    const modalList = []
    for (const brModal of window.document.querySelectorAll('.br-modal')) {
      modalList.push(new BRModal('br-modal', brModal))
    }
    
    
    /***/ }),
    /* 16 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BRNotification {
      constructor(name, component) {
        this.name = name
        this.component = component
        this.menuBtns = component.querySelectorAll('.contextual-btn')
        this.hideEvents = ['mouseleave', 'blur']
        this._setMenu()
      }
    
      _setMenu() {
        for (const btn of this.menuBtns) {
          const menu = btn.parentNode.querySelector('.contextual-menu')
          btn.addEventListener('click', () => {
            menu.toggleAttribute('show')
          })
          this.hideEvents.forEach((event) => {
            menu.addEventListener(event, () => {
              menu.removeAttribute('show')
            })
          })
          if (menu.children[0]) {
            menu.children[0].addEventListener('click', () => {
              this._hideNotification(menu.children[0])
            })
          }
          if (menu.children[1]) {
            menu.children[1].addEventListener('click', () => {
              this._hideAllNotifications(menu.children[1])
            })
          }
        }
      }
    
      _hideNotification(action) {
        const notification = action.parentNode.parentNode
        notification.setAttribute('hidden', '')
      }
    
      _hideAllNotifications(action) {
        const notifications = action.parentNode.parentNode.parentNode.querySelectorAll(
          '.br-item'
        )
        notifications.forEach((notification) => {
          notification.setAttribute('hidden', '')
        })
      }
    }
    const notificationList = []
    for (const brNotification of window.document.querySelectorAll(
      '.br-notification'
    )) {
      notificationList.push(new BRNotification('br-notification', brNotification))
    }
    /* harmony default export */ __webpack_exports__["default"] = (BRNotification);
    
    
    /***/ }),
    /* 17 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BRPagination {
      constructor(name, component) {
        this.name = name
        this.component = component
        this.currentPage = 1
        this._setBehaviors()
      }
    
      _setBehaviors() {
        this._setActive()
        this._dropdownBehavior()
      }
    
      _setLayout() {
        const ul = this.component.querySelector('ul')
        const pages = this.component.querySelectorAll('.page')
        pages.forEach((page) => {
          if (page.classList.contains('active')) {
            this.currentPage = parseInt(page.querySelector('a'))
          }
          page.classList.remove('d-none')
        })
    
        if (this.currentPage === 1) {
          ul.querySelector('[data-previous-page]').setAttribute('disabled', '')
        } else {
          ul.querySelector('[data-previous-page]').removeAttribute('disabled')
        }
    
        if (this.currentPage === pages.length) {
          ul.querySelector('[data-next-page').setAttribute('disabled', '')
        } else {
          ul.querySelector('[data-next-page]').removeAttribute('disabled')
        }
    
        if (pages.length > 9) {
          if (this.currentPage < 6) {
            if (ul.querySelector('[data-previous-interval]')) {
              ul.querySelector('[data-previous-interval]').remove()
            }
            for (let page = 7; page < pages.length - 1; page++) {
              pages[page].classList.add('d-none')
            }
            if (!ul.querySelector('[data-next-interval]')) {
              ul.insertBefore(
                this._createIntervalElement('next'),
                ul.children[ul.children.length - 2]
              )
            }
          }
          if (this.currentPage >= 6 && this.currentPage < pages.length - 4) {
            for (let page = this.currentPage - 4; page > 0; page--) {
              pages[page].classList.add('d-none')
            }
            if (!ul.querySelector('[data-previous-interval]')) {
              ul.insertBefore(
                this._createIntervalElement('previous'),
                ul.children[2]
              )
            }
            for (let page = this.currentPage + 2; page < pages.length - 1; page++) {
              pages[page].classList.add('d-none')
            }
            if (!ul.querySelector('[data-next-interval]')) {
              ul.insertBefore(
                this._createIntervalElement('next'),
                ul.children[ul.children.length - 2]
              )
            }
          }
          if (this.currentPage >= pages.length - 4) {
            if (ul.querySelector('[data-next-interval]')) {
              ul.querySelector('[data-next-interval]').remove()
            }
            for (let page = pages.length - 8; page > 0; page--) {
              pages[page].classList.add('d-none')
            }
            if (!ul.querySelector('[data-previous-interval]')) {
              ul.insertBefore(
                this._createIntervalElement('previous'),
                ul.children[2]
              )
            }
          }
        }
      }
    
      _createIntervalElement(type) {
        const interval = document.createElement('li')
        interval.setAttribute(`data-${type}-interval`, '')
    
        const a = document.createElement('a')
        a.setAttribute('href', 'javascript:void(0)')
    
        const icon = document.createElement('i')
        icon.classList.add('fas', 'fa-ellipsis-h')
    
        a.appendChild(icon)
        interval.appendChild(a)
    
        return interval
      }
    
      _setActive() {
        for (const page of this.component.querySelectorAll('.page')) {
          page.addEventListener('click', (event) => {
            this._selectPage(event.currentTarget)
          })
        }
      }
    
      _dropdownBehavior() {
        for (const dropdown of this.component.querySelectorAll(
          '[data-toggle="dropdown"]'
        )) {
          this._dropdownInit(dropdown)
          this._dropdownToggle(dropdown)
        }
      }
    
      _dropdownToggle(element) {
        element.addEventListener('click', () => {
          if (element.getAttribute('aria-expanded') === 'false') {
            this._dropdownOpen(element)
            return
          }
          this._dropdownClose(element)
        })
        window.document.addEventListener('click', (event) => {
          if (!this.component.contains(event.target)) {
            this._dropdownClose(element)
          }
        })
      }
    
      _dropdownInit(element) {
        element.parentElement.classList.add('dropdown')
        element.nextElementSibling.setAttribute('role', 'menu')
        element.setAttribute('aria-haspopup', 'true')
        this._dropdownClose(element)
      }
    
      _dropdownOpen(element) {
        element.setAttribute('aria-expanded', 'true')
        element.nextElementSibling.removeAttribute('hidden')
      }
    
      _dropdownClose(element) {
        element.setAttribute('aria-expanded', 'false')
        element.nextElementSibling.setAttribute('hidden', '')
      }
    
      _selectPage(currentPage) {
        this.component.querySelectorAll('.page').forEach((page) => {
          page.classList.remove('active')
        })
        currentPage.classList.add('active')
        this._setLayout()
      }
    }
    
    const paginationList = []
    for (const brPagination of window.document.querySelectorAll('.br-pagination')) {
      paginationList.push(new BRPagination('br-pagination', brPagination))
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (BRPagination);
    
    
    /***/ }),
    /* 18 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _item_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
    
    
    class BRSelect {
      constructor(name, component) {
        this.name = name
        this.component = component
        this.multiple = component.hasAttribute('multiple')
        this.optionsList = this._setOptionsList()
        this._setBehavior()
      }
    
      get selected() {
        let selected = []
        for (const [index, option] of this.optionsList.entries()) {
          if (!this.multiple) {
            if (option.selected) {
              selected = option.value
              break
            }
          } else {
            if (index > 0 && option.selected) {
              selected.push(option.value)
            }
          }
        }
        return selected
      }
      _setOptionsList() {
        const optionsList = []
        for (const item of this.component.querySelectorAll('.br-list .br-item')) {
          for (const label of item.querySelectorAll(
            '.br-radio label, .br-checkbox label'
          )) {
            const option = {
              focus: false,
              selected: false,
              value: label.innerText,
              visible: true,
            }
            optionsList.push(option)
          }
        }
        return optionsList
      }
    
      _setBehavior() {
        this._setDropdownBehavior()
        this._setKeyboardBehavior()
        this._setSelectionBehavior()
        this._setFilterBehavior()
      }
    
      _setDropdownBehavior() {
        for (const input of this.component.querySelectorAll(
          '.br-input input[type="text"]'
        )) {
          input.addEventListener('focus', () => {
            this._openSelect()
            this._resetFocus()
          })
        }
        for (const trigger of this.component.querySelectorAll(
          '.br-input .br-button[data-trigger]'
        )) {
          trigger.addEventListener('click', () => {
            for (const list of this.component.querySelectorAll('.br-list')) {
              if (list.hasAttribute('expanded')) {
                this._closeSelect()
              } else {
                this._openSelect()
              }
            }
          })
        }
        window.document.addEventListener('click', (event) => {
          if (!this.component.contains(event.target)) {
            this._closeSelect()
          }
        })
      }
    
      _setKeyboardBehavior() {
        for (const input of this.component.querySelectorAll(
          '.br-input input[type="text"]'
        )) {
          input.addEventListener('keydown', (event) => {
            //Close Select
            if (event.shiftKey && event.key === 'Tab') {
              this._closeSelect()
              this._resetFocus()
            }
            if (event.keyCode === 40) {
              event.preventDefault()
              for (const list of this.component.querySelectorAll('.br-list')) {
                list.focus()
                if (list === document.activeElement) {
                  this._getNextItem().focus()
                }
              }
            }
          })
        }
        for (const list of this.component.querySelectorAll('.br-list')) {
          // eslint-disable-next-line complexity
          list.addEventListener('keydown', (event) => {
            event.preventDefault()
            switch (event.keyCode) {
              case 9:
                this._closeSelect()
                this._resetFocus()
                break
              case 27:
                this._closeSelect()
                break
              case 32:
                this._setKeyClickOnOption(list)
                break
              case 38:
                this._getPreviousItem().focus()
                break
              case 40:
                this._getNextItem().focus()
                break
              default:
                break
            }
          })
        }
      }
    
      _setKeyClickOnOption(list) {
        for (const [index, item] of list.querySelectorAll('.br-item').entries()) {
          if (this.optionsList[index].focus) {
            for (const check of item.querySelectorAll(
              '.br-radio input[type="radio"], .br-checkbox input[type="checkbox"]'
            )) {
              check.click()
            }
          }
        }
      }
    
      _setDefaultSelected() {
        const selectedItems = this.component.querySelectorAll('.br-list .selected')
    
        const iterable = typeof selectedItems[Symbol.iterator]
        if (selectedItems !== null && iterable === 'function') {
          for (const item of selectedItems) {
            this._setSelected(this._positionSelected(item), item)
          }
        }
      }
    
      _positionSelected(component) {
        for (const [index, componente] of this.component
          .querySelectorAll('.br-list .br-item')
          .entries()) {
          if (componente === component) {
            return index
          }
        }
        return 0
      }
    
      _setSelectionBehavior() {
        this._setDefaultSelected()
        const itemList = []
        for (const [index, item] of this.component
          .querySelectorAll('.br-list .br-item')
          .entries()) {
          for (const check of item.querySelectorAll(
            '.br-radio input[type="radio"], .br-checkbox input[type="checkbox"]'
          )) {
            itemList.push(new _item_item__WEBPACK_IMPORTED_MODULE_0__["default"]('br-item', item))
            check.addEventListener('click', (event) => {
              if (!this.multiple) {
                for (const [index2, item2] of this.component
                  .querySelectorAll('.br-list .br-item')
                  .entries()) {
                  this._removeSelected(index2, item2)
                }
                this._setSelected(index, item)
                this._closeSelect()
              } else if (!event.currentTarget.hasAttribute('checked')) {
                this._removeSelected(index, item)
              } else {
                this._setSelected(index, item)
              }
              if (item.hasAttribute('data-all')) {
                for (const check of item.querySelectorAll(
                  '.br-checkbox input[type="checkbox"]'
                )) {
                  if (!check.hasAttribute('checked')) {
                    this._setAttribute()
                    item.querySelectorAll('label')[0].innerText = 'Selecionar Todos'
                  } else {
                    for (const item2 of this.component.querySelectorAll(
                      '.br-list .br-item'
                    )) {
                      for (const check2 of item2.querySelectorAll(
                        '.br-checkbox input[type="checkbox"]'
                      )) {
                        if (!check2.hasAttribute('checked')) {
                          check2.click()
                        }
                      }
                    }
                    item.querySelectorAll('label')[0].innerText =
                      'Desselecionar Todos'
                  }
                }
              }
            })
          }
        }
      }
    
      _setFilterBehavior() {
        for (const input of this.component.querySelectorAll(
          '.br-input input[type="text"]'
        )) {
          input.addEventListener('input', (event) => {
            let allHidden = true
            this._filter(event.currentTarget.value)
            for (const option of this.optionsList) {
              if (option.visible) {
                allHidden = false
              }
            }
            if (allHidden) {
              event.currentTarget.value = event.currentTarget.value.slice(0, -1)
              this._filter(event.currentTarget.value)
            }
          })
        }
      }
    
      _filter(value) {
        for (const [index, item] of this.component
          .querySelectorAll('.br-list .br-item')
          .entries()) {
          if (
            this.optionsList[index].value
              .toUpperCase()
              .indexOf(value.toUpperCase()) === -1
          ) {
            item.classList.add('d-none')
            this.optionsList[index].visible = false
          } else {
            item.classList.remove('d-none')
            this.optionsList[index].visible = true
          }
        }
      }
    
      _setAttribute() {
        for (const item2 of this.component.querySelectorAll('.br-list .br-item')) {
          for (const check2 of item2.querySelectorAll(
            '.br-checkbox input[type="checkbox"]'
          )) {
            if (check2.hasAttribute('checked')) {
              check2.click()
            }
          }
        }
      }
      _setSelected(index, item) {
        item.classList.add('selected')
        for (const check of item.querySelectorAll('.br-radio, .br-checkbox')) {
          for (const input of check.querySelectorAll(
            'input[type="radio"], input[type="checkbox"]'
          )) {
            input.setAttribute('checked', '')
          }
        }
        this.optionsList[index].selected = true
        this._setInput()
      }
    
      _removeSelected(index, item) {
        item.classList.remove('selected')
        for (const check of item.querySelectorAll('.br-radio, .br-checkbox')) {
          for (const input of check.querySelectorAll(
            'input[type="radio"], input[type="checkbox"'
          )) {
            input.removeAttribute('checked')
          }
          this.optionsList[index].selected = false
          this._setInput()
        }
      }
    
      _setInput() {
        for (const input of this.component.querySelectorAll(
          '.br-input input[type="text"]'
        )) {
          if (!this.multiple) {
            input.value = this.selected
          } else if (this.selected.length === 0) {
            input.value = ''
          } else if (this.selected.length === 1) {
            input.value = this.selected
          } else {
            input.value = `${this.selected[0]} + (${this.selected.length - 1})`
          }
        }
      }
    
      // eslint-disable-next-line complexity
      _getNextItem() {
        const list = this.component.querySelectorAll('.br-list .br-item')
        let iFocused
        let iVisible
        for (iFocused = 0; iFocused < this.optionsList.length; iFocused++) {
          if (this.optionsList[iFocused].focus) {
            for (
              iVisible = iFocused + 1;
              iVisible < this.optionsList.length;
              iVisible++
            ) {
              if (this.optionsList[iVisible].visible) {
                break
              }
            }
            break
          }
        }
        if (iFocused === this.optionsList.length) {
          for (const [index, option] of this.optionsList.entries()) {
            if (option.visible) {
              option.focus = true
              return list[index]
            }
          }
        } else if (iVisible < this.optionsList.length) {
          this.optionsList[iFocused].focus = false
          this.optionsList[iVisible].focus = true
          return list[iVisible]
        } else {
          return list[iFocused]
        }
        return ''
      }
    
      _getPreviousItem() {
        const list = this.component.querySelectorAll('.br-list .br-item')
        let iFocused
        let iVisible
        for (iFocused = 0; iFocused < this.optionsList.length; iFocused++) {
          if (this.optionsList[iFocused].focus) {
            for (iVisible = iFocused - 1; iVisible > 0; iVisible--) {
              if (this.optionsList[iVisible].visible) {
                break
              }
            }
            break
          }
        }
        if (iFocused === 0) {
          return list[iFocused]
        } else {
          this.optionsList[iFocused].focus = false
          this.optionsList[iVisible].focus = true
          return list[iVisible]
        }
      }
    
      _resetInput() {
        for (const input of this.component.querySelectorAll(
          '.br-input input[type="text"]'
        )) {
          input.value = ''
        }
      }
    
      _resetFocus() {
        for (const option of this.optionsList) {
          option.focus = false
        }
      }
    
      _resetVisible() {
        const list = this.component.querySelectorAll('.br-list .br-item')
        for (const [index, option] of this.optionsList.entries()) {
          option.visible = true
          list[index].classList.remove('d-none')
        }
      }
    
      _openSelect() {
        for (const list of this.component.querySelectorAll('.br-list')) {
          list.setAttribute('expanded', '')
        }
        for (const icon of this.component.querySelectorAll(
          '.br-input .br-button i'
        )) {
          icon.classList.remove('fa-angle-down')
          icon.classList.add('fa-angle-up')
        }
        this._resetInput()
      }
    
      _closeSelect() {
        for (const list of this.component.querySelectorAll('.br-list')) {
          list.removeAttribute('expanded')
        }
        for (const icon of this.component.querySelectorAll(
          '.br-input .br-button i'
        )) {
          icon.classList.remove('fa-angle-up')
          icon.classList.add('fa-angle-down')
        }
        this._setInput()
        this._resetFocus()
        this._resetVisible()
      }
    }
    
    const selectList = []
    for (const brSelect of window.document.querySelectorAll('.br-select')) {
      selectList.push(new BRSelect('br-select', brSelect))
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (BRSelect);
    
    
    /***/ }),
    /* 19 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BRTab {
      constructor(name, component) {
        this.name = name
        this.component = component
        this._setBehavior()
      }
    
      _setBehavior() {
        for (const ancor of this.component.querySelectorAll('.tab-nav')) {
          this.height = ancor.clientHeight
          this.scollsizes = ancor.scrollHeight - ancor.clientHeight
    
          this.scrollHeight = Math.max(
            this.component.scrollWidth,
            document.documentElement.scrollWidth,
            this.component.offsetWidth,
            document.documentElement.offsetWidth,
            this.component.clientWidth,
            document.documentElement.clientWidth
          )
          this.leftPosition = this.component.offsetWidth - 1
          // debugger
          ancor.style.setProperty('--height-nav', `${this.height}px`)
          ancor.style.setProperty('--right-gradient-nav', `${this.leftPosition}px`)
    
          this.positionScroll(ancor, this.component)
    
          this.navigationRight = this.navigationRight + 4
    
          if (this.navigationRight <= this.lastItempos - 5) {
            ancor.classList.add('tab-nav-right')
          }
    
          ancor.onscroll = (event) => {
            this.positionScroll(ancor, this.component)
    
            if (this.navigationLeft <= 0) {
              ancor.classList.add('tab-nav-left')
            } else {
              ancor.classList.remove('tab-nav-left')
            }
    
            if (this.navigationRight <= this.lastItempos - 5) {
              ancor.classList.add('tab-nav-right')
            } else {
              ancor.classList.remove('tab-nav-right')
            }
          }
        }
    
        for (const ancor of this.component.querySelectorAll(
          '.tab-nav .tab-item:not([not-tab="true"]) button'
        )) {
          ancor.addEventListener(
            'click',
            (event) => {
              this._switchTab(event.currentTarget.parentElement)
              this._switchContent(event.currentTarget.parentElement)
            },
            false
          )
          ancor.addEventListener('keyup', (e) => {
            this.positionKeyboard(e, this)
          })
        }
        this.tabitems = this.component.querySelectorAll('tab-item')
      }
    
      positionKeyboard(event, componentTab) {
        event.preventDefault()
        const keys = {
          end: 35,
          home: 36,
          left: 37,
          right: 39,
        }
        const key = event.keyCode
    
        this.tabitems = this.component.querySelectorAll('.tab-item')
    
        this.buttons = this.component.querySelectorAll('button')
    
        switch (key) {
          case keys.end:
            event.preventDefault()
            // Activate last tab
            this.clean()
            this._switchTab(this.tabitems[this.tabitems.length - 1])
            this._switchContent(this.tabitems[this.tabitems.length - 1])
            this.tabitems[this.tabitems.length - 1].focus()
    
            break
          case keys.home:
            event.preventDefault()
            this.clean()
    
            this._switchTab(this.tabitems[0])
            this._switchContent(this.tabitems[0])
            this.tabitems[0].focus()
            event.stopPropagation()
            break
    
          // Up and down are in keydown
          // because we need to prevent page scroll >:)
          case keys.left:
            event.preventDefault()
            const contComponent = 0
            const contComponentActive = 0
            this.position(event.target, -1)
            event.stopPropagation()
            break
          case keys.right:
            event.preventDefault()
            this.position(event.target, 1)
            event.stopPropagation()
            break
          default:
            break
        }
      }
    
      position(target, direction) {
        let contComponent = 0
        let contComponentActive = 0
    
        const tabItems2 = target.parentElement.parentElement.querySelectorAll(
          '.tab-item'
        )
        for (const component of tabItems2) {
          if (component.classList.contains('is-active')) {
            contComponentActive = contComponent
          }
          contComponent += 1
        }
        if (
          tabItems2.length > contComponentActive + direction &&
          contComponentActive + direction >= 0
        ) {
          this.clean()
          this._switchTab(tabItems2[contComponentActive + direction])
          this._switchContent(tabItems2[contComponentActive + direction])
          tabItems2[contComponentActive + direction].focus()
    
          let x = ''
    
          if (tabItems2[contComponentActive + direction].querySelector('button')) {
            x = tabItems2[contComponentActive + direction].querySelector('button')
            x.focus()
          }
    
          // x[0].focus()
        }
      }
      clean() {
        for (const ancor of event.currentTarget.parentElement.querySelectorAll(
          'button'
        )) {
          ancor.classList.remove('focus-visible')
          ancor.classList.remove('is-active')
        }
        for (const ancor of event.currentTarget.parentElement.querySelectorAll(
          'tab-item'
        )) {
          ancor.classList.remove('is-active')
        }
      }
    
      positionScroll(ancor, component) {
        this.navItems = ancor.querySelectorAll('.tab-item')
        this.lastItempos = Math.ceil(
          this.navItems[this.navItems.length - 1].getBoundingClientRect().right
        )
        this.navigationLeft = Math.floor(
          this.navItems[0].getBoundingClientRect().left
        )
        this.navigationRight = Math.floor(ancor.getBoundingClientRect().right)
      }
      _switchTab(currentTab) {
        for (const tabItem of this.component.querySelectorAll(
          '.tab-nav .tab-item:not([not-tab="true"])'
        )) {
          if (tabItem === currentTab) {
            tabItem.classList.add('is-active')
          } else {
            tabItem.classList.remove('is-active')
          }
        }
      }
    
      _switchContent(currentTab) {
        for (const button of currentTab.querySelectorAll('button')) {
          for (const tabPanel of this.component.querySelectorAll(
            '.tab-content .tab-panel'
          )) {
            if (button.getAttribute('data-panel') === tabPanel.getAttribute('id')) {
              tabPanel.classList.add('is-active')
            } else {
              tabPanel.classList.remove('is-active')
            }
          }
        }
      }
    }
    const abasList = []
    for (const brTab of window.document.querySelectorAll('.br-tab')) {
      abasList.push(new BRTab('br-tab', brTab))
    }
    /* harmony default export */ __webpack_exports__["default"] = (BRTab);
    
    
    /***/ }),
    /* 20 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* eslint-disable complexity */
    class BRTable {
      constructor(name, component, sequence) {
        this.name = name
        this.component = component
        this._header = this.component.querySelector('.header, .table-header')
        this._table = this.component.querySelector('table')
        this._sequence = sequence
        this._setBehaviors()
      }
    
      _setBehaviors() {
        this._makeResponsiveTable()
        this._headerBehavior()
        this._setHeaderWidth()
        this._searchBehavior()
        this._dropdownBehavior()
        this._densityBehavior()
        this._setClickActions()
      }
    
      _makeResponsiveTable() {
        const responsiveClass = 'responsive'
        if (!this.component.querySelector(`.${responsiveClass}`)) {
          const responsiveElement = document.createElement('div')
          responsiveElement.classList.add(responsiveClass)
          responsiveElement.appendChild(this._table)
          this._header.after(responsiveElement)
        }
      }
    
      _headerBehavior() {
        // this._hideThead()
    
        window.addEventListener('resize', () => {
          // this._hideThead()
        })
    
        for (const responsive of this.component.querySelectorAll('.responsive')) {
          if (window.innerWidth > 575) {
            // this._setSyncScroll(responsive)
          }
        }
    
        // this._cloneHeaders()
      }
    
      _makeScroller() {
        const scrollerTag = document.createElement('div')
        // this._setSyncScroll(scrollerTag)
        scrollerTag.classList.add('scroller')
        for (const header of this._table.querySelectorAll('thead tr th')) {
          const clonedHeader = document.createElement('div')
          clonedHeader.classList.add('item')
          clonedHeader.innerHTML = header.innerHTML
          if (header.offsetWidth) {
            clonedHeader.style.flex = `1 0 ${header.offsetWidth}px`
          }
          scrollerTag.appendChild(clonedHeader)
          const checkbox = clonedHeader.querySelector('.br-checkbox')
          if (checkbox) {
            const input = checkbox.querySelector('input')
            const label = checkbox.querySelector('label')
            input.id = `${input.id}-clone`
            label.setAttribute('for', input.id)
          }
        }
        return scrollerTag
      }
    
      _cloneHeaders() {
        const headersTag = document.createElement('div')
        headersTag.classList.add('headers')
        headersTag.style.top = `${this._header.offsetHeight}px`
        headersTag.appendChild(this._makeScroller())
        this._header.after(headersTag)
      }
    
      _hideThead() {
        this._table.style.marginTop = `-${
          this._table.querySelector('thead').offsetHeight
        }px`
      }
    
      _setSyncScroll(element) {
        element.classList.add('syncscroll')
        element.setAttribute('name', `table-${this._sequence}`)
        element.setAttribute('style', 'overflow-y: hidden')
        // element.setAttribute('tabindex', 0)
      }
    
      _setHeaderWidth() {
        for (const clonedHeader of this.component.querySelectorAll(
          '.headers > div'
        )) {
          for (const [index, header] of this.component
            .querySelectorAll('table thead tr th')
            .entries()) {
            clonedHeader.children[index].style.flex = `1 0 ${header.offsetWidth}px`
          }
        }
      }
    
      _dropdownBehavior() {
        for (const dropdown of this.component.querySelectorAll(
          '[data-toggle="dropdown"]'
        )) {
          this._dropdownInit(dropdown)
          this._dropdownToggle(dropdown)
        }
      }
    
      _dropdownToggle(element) {
        element.addEventListener('click', () => {
          if (element.getAttribute('aria-expanded') === 'false') {
            this._dropdownOpen(element)
            return
          }
          this._dropdownClose(element)
        })
        window.document.addEventListener('click', (event) => {
          if (!this.component.contains(event.target)) {
            this._dropdownClose(element)
          }
        })
      }
    
      _dropdownInit(element) {
        element.parentElement.classList.add('dropdown')
        element.nextElementSibling.setAttribute('role', 'menu')
        element.setAttribute('aria-haspopup', 'true')
        this._dropdownClose(element)
      }
    
      _dropdownOpen(element) {
        element.setAttribute('aria-expanded', 'true')
        element.nextElementSibling.classList.add('show')
      }
    
      _dropdownClose(element) {
        element.setAttribute('aria-expanded', 'false')
        element.nextElementSibling.classList.remove('show')
      }
    
      _searchBehavior() {
        if (this.component.dataset.search) {
          const trigger = this.component.querySelector('[data-toggle="search"]')
          const target = this.component.querySelector('.search-bar')
          const dismiss = this.component.querySelector('[data-dismiss="search"]')
    
          // Inicializar
          this._searchInit(trigger)
    
          // Abre busca
          trigger.addEventListener('click', () => {
            return this._searchOpen(trigger, target)
          })
    
          // Fecha busca
          dismiss.addEventListener('click', () => {
            return this._searchClose(trigger, target)
          })
          target.querySelector('input').addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
              this._searchClose(trigger, target)
            }
          })
        }
      }
    
      _searchInit(trigger) {
        trigger.setAttribute('aria-expanded', 'false')
      }
    
      _searchOpen(trigger, target) {
        trigger.setAttribute('aria-expanded', 'true')
        target.classList.add('show')
        target.querySelector('input').focus()
      }
    
      _searchClose(trigger, target) {
        target.querySelector('input').value = ''
        target.classList.remove('show')
        trigger.focus()
        trigger.setAttribute('aria-expanded', 'false')
      }
    
      _densityBehavior() {
        const desityTriggers = this.component.querySelectorAll('[data-density]')
        for (const desityTrigger of desityTriggers) {
          desityTrigger.addEventListener('click', () => {
            this.component.classList.remove('small', 'medium', 'large')
            this.component.classList.add(desityTrigger.dataset.density)
            this._hideThead()
            this._dropdownClose(
              desityTrigger
                .closest('.dropdown')
                .querySelector('[data-toggle="dropdown"]')
            )
          })
        }
      }
    
      _setClickActions() {
        const headerCheckbox = this.component.querySelector(
          '.headers [type="checkbox"]'
        )
        const tableCheckboxes = this.component.querySelectorAll(
          'tbody [type="checkbox"]'
        )
        const selectedBar = this.component.querySelector('.selected-bar')
        const checkAlls = this.component.querySelectorAll(
          '[data-toggle="check-all"]'
        )
        for (const checkAll of checkAlls) {
          checkAll.addEventListener('click', () => {
            this._checkAllTable(selectedBar, tableCheckboxes, headerCheckbox)
            if (checkAll.parentElement.classList.contains('br-list')) {
              this._dropdownClose(
                checkAll
                  .closest('.dropdown')
                  .querySelector('[data-toggle="dropdown"]')
              )
            }
          })
        }
        if (tableCheckboxes) {
          for (const checkbox of tableCheckboxes) {
            checkbox.addEventListener('click', () => {
              this._checkRow(checkbox, selectedBar, tableCheckboxes, headerCheckbox)
            })
          }
        }
      }
    
      _setRow(checkbox, check) {
        const tr = checkbox.parentNode.parentNode.parentNode
        if (check) {
          tr.classList.add('is-selected')
          checkbox.parentNode.classList.add('is-inverted')
          checkbox.checked = true
        } else {
          tr.classList.remove('is-selected')
          checkbox.parentNode.classList.remove('is-inverted')
          checkbox.checked = false
        }
      }
    
      _checkRow(checkbox, selectedBar, tableCheckboxes, headerCheckbox) {
        const check = checkbox.checked
        this._setRow(checkbox, check)
        this._setSelectedBar(
          check ? 1 : -1,
          selectedBar,
          tableCheckboxes,
          headerCheckbox
        )
      }
    
      _checkAllRows(tableCheckboxes) {
        for (const checkbox of tableCheckboxes) {
          this._setRow(checkbox, true)
        }
      }
    
      _uncheckAllRows(tableCheckboxes) {
        for (const checkbox of tableCheckboxes) {
          this._setRow(checkbox, false)
        }
      }
    
      _checkAllTable(selectedBar, tableCheckboxes, headerCheckbox) {
        let count = tableCheckboxes.length
        const infoCount = selectedBar.querySelector('.info .count')
        const total = parseInt(infoCount.innerHTML, 10)
        if (total === count) {
          this._uncheckAllRows(tableCheckboxes)
          count = -1 * count
        } else {
          this._checkAllRows(tableCheckboxes)
        }
        this._setSelectedBar(count, selectedBar, tableCheckboxes, headerCheckbox)
      }
    
      _setSelectedBar(count, selectedBar, tableCheckboxes, headerCheckbox) {
        const infoCount = selectedBar.querySelector('.info .count')
        const infoText = selectedBar.querySelector('.info .text')
        const total = count < 2 ? parseInt(infoCount.innerHTML, 10) + count : count
        if (total > 0) {
          selectedBar.classList.add('show')
          infoCount.innerHTML = total
          infoText.innerHTML = total > 1 ? 'itens selecionados' : 'item selecionado'
          if (headerCheckbox) headerCheckbox.parentNode.classList.add('is-checking')
          if (total === tableCheckboxes.length) {
            if (headerCheckbox) {
              headerCheckbox.checked = true
              headerCheckbox.parentNode.classList.remove('is-checking')
            }
          }
        } else {
          infoCount.innerHTML = 0
          if (headerCheckbox) {
            headerCheckbox.checked = false
            headerCheckbox.parentNode.classList.remove('is-checking')
          }
          selectedBar.classList.remove('show')
        }
      }
    
      /**
       * @fileoverview syncscroll - scroll several areas simultaniously
       * @version 0.0.3
       *
       * @license MIT, see http://github.com/asvd/intence
       * @copyright 2015 asvd <heliosframework@gmail.com>
       */
      // static _syncscroll() {
      //   const scroll = 'scroll'
      //   const elems = document.getElementsByClassName(`sync${scroll}`)
      //   const EventListener = 'EventListener'
      //   const length = 'length'
      //   const names = {}
      //   // clearing existing listeners
      //   let i, j, el, found, name
      //   for (name in names) {
      //     if (Object.prototype.hasOwnProperty.call(names, name)) {
      //       for (i = 0; i < names[name][length]; i++) {
      //         names[name][i][`remove${EventListener}`](
      //           scroll,
      //           names[name][i].syn,
      //           0
      //         )
      //       }
      //     }
      //   }
      //   // setting-up the new listeners
      //   for (i = 0; i < elems[length]; i++) {
      //     found = j = 0
      //     el = elems[i]
      //     if (!(name = el.getAttribute('name'))) {
      //       // name attribute is not set
      //       continue
      //     }
      //     el = el[`${scroll}er`] || el // needed for intence
      //     // searching for existing entry in array of names;
      //     // searching for the element in that entry
      //     for (; j < (names[name] = names[name] || [])[length]; j++) {
      //       found |= names[name][j] === el
      //     }
      //     if (!found) {
      //       names[name].push(el)
      //     }
      //     el.eX = el.eY = 0
      //     this._elSyn(el, name, scroll, elems, EventListener, length, names)
      //   }
      // }
    
      static _elSyn(el, name, scroll, elems, EventListener, length, names) {
        const addEventListener = `add${EventListener}`
        const client = 'client'
        const Height = 'Height'
        const Left = 'Left'
        const mathRound = Math.round
        const Top = 'Top'
        const Width = 'Width'
        el[addEventListener](
          scroll,
          () => {
            const otherElems = names[name]
            let scrollX = el[scroll + Left]
            let scrollY = el[scroll + Top]
            const xRate = scrollX / (el[scroll + Width] - el[client + Width])
            const yRate = scrollY / (el[scroll + Height] - el[client + Height])
            const updateX = scrollX !== el.eX
            const updateY = scrollY !== el.eY
            el.eX = scrollX
            el.eY = scrollY
            otherElems.forEach((element) => {
              if (element !== el) {
                if (
                  updateX &&
                  mathRound(
                    element[scroll + Left] -
                      (scrollX = element.eX = mathRound(
                        xRate * (element[scroll + Width] - element[client + Width])
                      ))
                  )
                ) {
                  element[scroll + Left] = scrollX
                }
                if (
                  updateY &&
                  mathRound(
                    element[scroll + Top] -
                      (scrollY = element.eY = mathRound(
                        yRate *
                          (element[scroll + Height] - element[client + Height])
                      ))
                  )
                ) {
                  element[scroll + Top] = scrollY
                }
              }
            })
          },
          0
        )
      }
    }
    const tableList = []
    for (const [index, brTable] of window.document
      .querySelectorAll('.br-table')
      .entries()) {
      tableList.push(new BRTable('br-table', brTable, index))
    }
    // BRTable._syncscroll()
    /* harmony default export */ __webpack_exports__["default"] = (BRTable);
    
    
    /***/ }),
    /* 21 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    class BRTag {
      constructor(name, component) {
        this.name = name
        this.component = component
        this._setBehavior()
      }
    
      _setBehavior() {
        if (this.component.classList.contains('interaction-select')) {
          // Inicializa selecionado
          if (this.component.querySelector('input').getAttribute('checked')) {
            this.component.classList.add('selected')
          }
          // TODO: O comportamento não diferencia checkbox de radio button, fazer essa verificação.
          this._setSelection()
        }
        this._closeTag()
      }
    
      _setSelection() {
        const label = this.component.querySelector('label')
        const input = this.component.querySelector('input')
        label.addEventListener('click', (event) => {
          this._toggleSelection(input, event)
        })
        input.addEventListener('keydown', (event) => {
          if (event.code === 'Space' || event.code === 'Enter') {
            this._toggleSelection(input, event)
          }
        })
      }
    
      _toggleSelection(input, event) {
        event.preventDefault()
        if (input.getAttribute('checked')) {
          this._removeCheck(input)
          return
        }
        this._setCheck(input)
      }
    
      _setCheck(input) {
        input.setAttribute('checked', 'checked')
        this.component.classList.add('selected')
      }
    
      _removeCheck(input) {
        input.removeAttribute('checked')
        this.component.classList.remove('selected')
      }
    
      _closeTag() {
        const button = this.component.querySelector('.br-button.close')
    
        if (button) {
          const brTag = button.closest('.br-tag')
    
          brTag.addEventListener('click', () => {
            button.closest('.br-tag').remove()
          })
        }
      }
    }
    
    const tagList = []
    for (const brTag of window.document.querySelectorAll('.br-tag')) {
      tagList.push(new BRTag('br-tab', brTag))
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (BRTag);
    
    
    /***/ }),
    /* 22 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _components_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
    
    class BRUpload {
      /**
       *
       * @param {*} name nome do componente
       * @param {*} component componente
       * @param {*} uploadFiles  promisse de status do upload
       */
      constructor(name, component, uploadFiles) {
        this.name = name
        this.component = component
        this._inputElement = this.component.querySelector('.upload-input')
        this._fileList = this.component.querySelector('.upload-list')
        this._btnUpload = this.component.querySelector('.upload-button')
        this._label = this.component.querySelector('label')
        this._textHelp = document.querySelector('.text-base')
        this._fileArray = []
        this._uploadFiles = uploadFiles
        this._setBehavior()
      }
    
      _setBehavior() {
        this.component.addEventListener('dragover', (event) => {
          event.stopPropagation()
          event.preventDefault()
        })
    
        this.component.addEventListener('dragenter', () => {
          this.component.classList.add('dragging')
        })
    
        this.component.addEventListener('dragleave', () => {
          this.component.classList.remove('dragging')
        })
    
        this.component.addEventListener('drop', (event) => {
          event.stopPropagation()
          event.preventDefault()
          this.component.classList.remove('dragging')
          const dt = event.dataTransfer
          const { files } = dt
          this._handleFiles(files)
        })
    
        if (this._inputElement) {
          const button = document.createElement('button')
          button.className = 'br-button upload-button'
          button.setAttribute('type', 'button')
    
          if (this._inputElement.getAttribute('multiple'))
            button.innerHTML =
              '<i class="fas fa-upload" aria-hidden="true"></i><span>Selecione o(s) arquivo(s)</span>'
          else
            button.innerHTML =
              '<i class="fas fa-upload" aria-hidden="true"></i><span>Selecione o arquivo</span>'
    
          this.component.append(this._label)
          this.component.append(this._inputElement)
          this.component.appendChild(button)
          this.component.append(this._fileList)
          this._btnUpload = this.component.querySelector('.upload-button')
          this._btnUpload.addEventListener(
            'click',
            () => {
              this._clickUpload()
            },
            false
          )
          if (this.component.getAttribute('disabled')) {
            const message = document.createElement('span')
            message.classList.add('feedback', 'warning', 'mt-1')
            message.setAttribute('role', 'alert')
            message.innerHTML =
              '<i class="fas fa-exclamation-triangle" aria-hidden="true"></i>Upload desabilitado'
            this.component.after(message)
          }
    
          this._fileArray = Array.from(this._inputElement.files)
          this._inputElement.addEventListener(
            'change',
            (event) => {
              this._handleFiles(event)
            },
            false
          )
        }
      }
      _clickUpload() {
        this._inputElement.click()
      }
    
      _removeMessage() {
        for (const message of this.component.querySelectorAll('.feedback')) {
          message.parentNode.removeChild(message)
          message.innerHTML = ''
        }
      }
    
      _removeStatus() {
        const remStatus = ['danger', 'warning', 'info', 'success']
        remStatus.forEach((el) => {
          if (this.component.dataset.hasOwnProperty(el))
            this.component.removeAttribute(`data-${el}`)
        })
      }
    
      _feedback(status, text) {
        const icone = `<i class="fas fa-times-circle" aria-hidden="true"></i>${text}`
        const dataStatus = `data-${status}`
        const message = document.createElement('span')
        message.classList.add('feedback', status, 'mt-1')
        message.setAttribute('role', 'alert')
        switch (status) {
          case 'danger':
            message.innerHTML = icone
            break
          case 'info':
            message.innerHTML = icone.replace('fa-times-circle', 'fa-info-circle')
            break
          case 'success':
            message.innerHTML = icone.replace('fa-times-circle', 'fa-check-circle')
            break
          case 'warning':
            message.innerHTML = icone.replace(
              'fa-times-circle',
              'fa-exclamation-triangle'
            )
            break
          default:
            message.innerHTML = ''
        }
        this._removeStatus()
        this.component.setAttribute(dataStatus, dataStatus)
        this._fileList.before(message)
      }
    
      _concatFiles(files) {
        const newFiles = !files.length
          ? Array.from(this._inputElement.files)
          : Array.from(files)
        this._fileArray = this._fileArray.concat(newFiles)
      }
      _handleFiles(files) {
        this._removeMessage()
        if (!this._inputElement.multiple && files.length > 1) {
          this._feedback('danger', 'É permitido o envio de somente um arquivo.')
        } else if (!this._inputElement.multiple && this._fileArray.length > 0) {
          this._fileArray = []
          this._concatFiles(files)
          this._updateFileList()
          this._feedback(
            'warning',
            'O arquivo enviado anteriormente foi substituído'
          )
        } else {
          this._concatFiles(files)
          this._updateFileList()
        }
      }
    
      _updateFileList() {
        this._removeStatus()
        if (this.component.nextElementSibling === this._textHelp) {
          this._textHelp.style.display = 'none'
        }
        if (!this._fileArray.length) {
          this._fileList.innerHTML = ''
          if (this.component.nextElementSibling === this._textHelp) {
            this._textHelp.style.display = ''
          }
        } else {
          this._fileList.innerHTML = ''
    
          for (let i = 0; i < this._fileArray.length; i++) {
            if ('nowait' in this._fileArray[i]) {
              if (this._fileArray[i].nowait) {
                this._renderItem(i)
              }
            } else {
              const loading = document.createElement('div')
              const carga = document.createElement('span')
              carga.classList.add('cargas')
              carga.innerText = 'Carregando...'
              loading.setAttribute('sm', '')
              loading.classList.add('my-3')
              loading.setAttribute('loading', '')
              loading.appendChild(carga)
              this._fileList.appendChild(loading)
              if (this._uploadFiles()) {
                // FIXME: Essa promise está repetindo essa ação exponencialmente
                this._uploadFiles().then(() => {
                  this._fileArray[i].nowait = true
                  this._updateFileList()
                })
              }
            }
          }
        }
      }
    
      _renderItem(position) {
        const li = document.createElement('div')
        li.className = 'br-item'
        this._fileList.appendChild(li)
        li.innerHTML = ''
        const name = document.createElement('div')
        name.className = 'name'
        li.appendChild(name)
        this._fileList.appendChild(li)
        const info = document.createElement('div')
        info.className = 'content'
        info.innerHTML = this._fileArray[position].name
        const tooltip = document.createElement('div')
        tooltip.classList.add('br-tooltip')
        tooltip.setAttribute('role', 'tooltip')
        tooltip.setAttribute('place', 'top')
        tooltip.setAttribute('info', 'info')
        const textTooltip = document.createElement('span')
        textTooltip.classList.add('text')
        textTooltip.setAttribute('role', 'tooltip')
        textTooltip.innerHTML = this._fileArray[position].name
        tooltip.appendChild(textTooltip)
        li.appendChild(info)
        li.appendChild(name)
        li.appendChild(tooltip)
        info.classList.add('text-primary-default', 'mr-auto')
        const del = document.createElement('div')
        del.className = 'support'
        const btndel = document.createElement('button')
        const spanSize = document.createElement('span')
        spanSize.className = 'mr-1'
        spanSize.innerHTML = this._calcSize(this._fileArray[position].size)
        del.appendChild(spanSize)
        btndel.className = 'br-button'
        btndel.type = 'button'
        btndel.setAttribute('circle', '')
        btndel.addEventListener(
          'click',
          (event) => {
            this._removeFile(position, event)
          },
          false
        )
        const img = document.createElement('i')
        img.className = 'fa fa-trash'
        btndel.appendChild(img)
        del.appendChild(btndel)
        li.appendChild(del)
        this._fileArray[position].nowait = true
        const tooltipList = []
        for (const brTooltip of window.document.querySelectorAll('.br-tooltip')) {
          tooltipList.push(new _components_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__["default"]('br-tooltip', brTooltip))
        }
      }
    
      _calcSize(nBytes) {
        let sOutput = ''
        for (
          let aMultiples = ['KB', 'MB', 'GB', 'TB'],
            nMultiple = 0,
            nApprox = nBytes / 1024;
          nApprox > 1;
          nApprox /= 1024, nMultiple++
        ) {
          sOutput = `${nApprox.toFixed(2)} ${aMultiples[nMultiple]}`
        }
        return sOutput
      }
    
      _removeFile(index, event) {
        event.stopPropagation()
        event.preventDefault()
        this._removeStatus()
        this._removeMessage()
        this._fileArray.splice(index, 1)
        this._updateFileList()
    
        if (this._inputElement.multiple)
          this._inputElement.files = this._updateFileListItems(this._fileArray)
        if (!this._inputElement.multiple) this._inputElement.value = ''
      }
    
      _updateFileListItems(files) {
        const fileInput = new ClipboardEvent('').clipboardData || new DataTransfer()
        for (let i = 0, len = files.length; i < len; i++)
          fileInput.items.add(files[i])
        return fileInput.files
      }
    }
    const uploadList = []
    
    function uploadTimeout() {
      return new Promise((resolve) => {
        // Colocar aqui um upload para o servidor e retirar o timeout
        return setTimeout(resolve, 3000)
      })
    }
    
    for (const brUpload of window.document.querySelectorAll('.br-upload')) {
      uploadList.push(new BRUpload('br-upload', brUpload, uploadTimeout))
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (BRUpload);
    
    
    /***/ }),
    /* 23 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__);
    
    // CONCATENATED MODULE: ./node_modules/flatpickr/dist/esm/types/options.js
    const HOOKS = [
        "onChange",
        "onClose",
        "onDayCreate",
        "onDestroy",
        "onKeyDown",
        "onMonthChange",
        "onOpen",
        "onParseConfig",
        "onReady",
        "onValueUpdate",
        "onYearChange",
        "onPreCalendarPosition",
    ];
    const options_defaults = {
        _disable: [],
        allowInput: false,
        allowInvalidPreload: false,
        altFormat: "F j, Y",
        altInput: false,
        altInputClass: "form-control input",
        animate: typeof window === "object" &&
            window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        autoFillDefaultTime: true,
        clickOpens: true,
        closeOnSelect: true,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: false,
        enableSeconds: false,
        enableTime: false,
        errorHandler: (err) => typeof console !== "undefined" && console.warn(err),
        getWeek: (givenDate) => {
            const date = new Date(givenDate.getTime());
            date.setHours(0, 0, 0, 0);
            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
            var week1 = new Date(date.getFullYear(), 0, 4);
            return (1 +
                Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                    3 +
                    ((week1.getDay() + 6) % 7)) /
                    7));
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: false,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: false,
        now: new Date(),
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: false,
        showMonths: 1,
        static: false,
        time_24hr: false,
        weekNumbers: false,
        wrap: false,
    };
    
    // CONCATENATED MODULE: ./node_modules/flatpickr/dist/esm/l10n/default.js
    const english = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            longhand: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: (nth) => {
            const s = nth % 100;
            if (s > 3 && s < 21)
                return "th";
            switch (s % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        monthAriaLabel: "Month",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: false,
    };
    /* harmony default export */ var l10n_default = (english);
    
    // CONCATENATED MODULE: ./node_modules/flatpickr/dist/esm/utils/index.js
    const pad = (number, length = 2) => `000${number}`.slice(length * -1);
    const utils_int = (bool) => (bool === true ? 1 : 0);
    function debounce(fn, wait) {
        let t;
        return function () {
            clearTimeout(t);
            t = setTimeout(() => fn.apply(this, arguments), wait);
        };
    }
    const arrayify = (obj) => obj instanceof Array ? obj : [obj];
    
    // CONCATENATED MODULE: ./node_modules/flatpickr/dist/esm/utils/dom.js
    function toggleClass(elem, className, bool) {
        if (bool === true)
            return elem.classList.add(className);
        elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
        const e = window.document.createElement(tag);
        className = className || "";
        content = content || "";
        e.className = className;
        if (content !== undefined)
            e.textContent = content;
        return e;
    }
    function clearNode(node) {
        while (node.firstChild)
            node.removeChild(node.firstChild);
    }
    function findParent(node, condition) {
        if (condition(node))
            return node;
        else if (node.parentNode)
            return findParent(node.parentNode, condition);
        return undefined;
    }
    function createNumberInput(inputClassName, opts) {
        const wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
        if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
            numInput.type = "number";
        }
        else {
            numInput.type = "text";
            numInput.pattern = "\\d*";
        }
        if (opts !== undefined)
            for (const key in opts)
                numInput.setAttribute(key, opts[key]);
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        return wrapper;
    }
    function getEventTarget(event) {
        try {
            if (typeof event.composedPath === "function") {
                const path = event.composedPath();
                return path[0];
            }
            return event.target;
        }
        catch (error) {
            return event.target;
        }
    }
    
    // CONCATENATED MODULE: ./node_modules/flatpickr/dist/esm/utils/formatting.js
    
    const doNothing = () => undefined;
    const monthToStr = (monthNumber, shorthand, locale) => locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
    const revFormat = {
        D: doNothing,
        F: function (dateObj, monthName, locale) {
            dateObj.setMonth(locale.months.longhand.indexOf(monthName));
        },
        G: (dateObj, hour) => {
            dateObj.setHours(parseFloat(hour));
        },
        H: (dateObj, hour) => {
            dateObj.setHours(parseFloat(hour));
        },
        J: (dateObj, day) => {
            dateObj.setDate(parseFloat(day));
        },
        K: (dateObj, amPM, locale) => {
            dateObj.setHours((dateObj.getHours() % 12) +
                12 * utils_int(new RegExp(locale.amPM[1], "i").test(amPM)));
        },
        M: function (dateObj, shortMonth, locale) {
            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
        },
        S: (dateObj, seconds) => {
            dateObj.setSeconds(parseFloat(seconds));
        },
        U: (_, unixSeconds) => new Date(parseFloat(unixSeconds) * 1000),
        W: function (dateObj, weekNum, locale) {
            const weekNumber = parseInt(weekNum);
            const date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
            date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
            return date;
        },
        Y: (dateObj, year) => {
            dateObj.setFullYear(parseFloat(year));
        },
        Z: (_, ISODate) => new Date(ISODate),
        d: (dateObj, day) => {
            dateObj.setDate(parseFloat(day));
        },
        h: (dateObj, hour) => {
            dateObj.setHours(parseFloat(hour));
        },
        i: (dateObj, minutes) => {
            dateObj.setMinutes(parseFloat(minutes));
        },
        j: (dateObj, day) => {
            dateObj.setDate(parseFloat(day));
        },
        l: doNothing,
        m: (dateObj, month) => {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        n: (dateObj, month) => {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        s: (dateObj, seconds) => {
            dateObj.setSeconds(parseFloat(seconds));
        },
        u: (_, unixMillSeconds) => new Date(parseFloat(unixMillSeconds)),
        w: doNothing,
        y: (dateObj, year) => {
            dateObj.setFullYear(2000 + parseFloat(year));
        },
    };
    const tokenRegex = {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})",
    };
    const formatting_formats = {
        Z: (date) => date.toISOString(),
        D: function (date, locale, options) {
            return locale.weekdays.shorthand[formatting_formats.w(date, locale, options)];
        },
        F: function (date, locale, options) {
            return monthToStr(formatting_formats.n(date, locale, options) - 1, false, locale);
        },
        G: function (date, locale, options) {
            return pad(formatting_formats.h(date, locale, options));
        },
        H: (date) => pad(date.getHours()),
        J: function (date, locale) {
            return locale.ordinal !== undefined
                ? date.getDate() + locale.ordinal(date.getDate())
                : date.getDate();
        },
        K: (date, locale) => locale.amPM[utils_int(date.getHours() > 11)],
        M: function (date, locale) {
            return monthToStr(date.getMonth(), true, locale);
        },
        S: (date) => pad(date.getSeconds()),
        U: (date) => date.getTime() / 1000,
        W: function (date, _, options) {
            return options.getWeek(date);
        },
        Y: (date) => pad(date.getFullYear(), 4),
        d: (date) => pad(date.getDate()),
        h: (date) => (date.getHours() % 12 ? date.getHours() % 12 : 12),
        i: (date) => pad(date.getMinutes()),
        j: (date) => date.getDate(),
        l: function (date, locale) {
            return locale.weekdays.longhand[date.getDay()];
        },
        m: (date) => pad(date.getMonth() + 1),
        n: (date) => date.getMonth() + 1,
        s: (date) => date.getSeconds(),
        u: (date) => date.getTime(),
        w: (date) => date.getDay(),
        y: (date) => String(date.getFullYear()).substring(2),
    };
    
    // CONCATENATED MODULE: ./node_modules/flatpickr/dist/esm/utils/dates.js
    
    
    
    const createDateFormatter = ({ config = options_defaults, l10n = english, isMobile = false, }) => (dateObj, frmt, overrideLocale) => {
        const locale = overrideLocale || l10n;
        if (config.formatDate !== undefined && !isMobile) {
            return config.formatDate(dateObj, frmt, locale);
        }
        return frmt
            .split("")
            .map((c, i, arr) => formatting_formats[c] && arr[i - 1] !== "\\"
            ? formatting_formats[c](dateObj, locale, config)
            : c !== "\\"
                ? c
                : "")
            .join("");
    };
    const createDateParser = ({ config = options_defaults, l10n = english }) => (date, givenFormat, timeless, customLocale) => {
        if (date !== 0 && !date)
            return undefined;
        const locale = customLocale || l10n;
        let parsedDate;
        const dateOrig = date;
        if (date instanceof Date)
            parsedDate = new Date(date.getTime());
        else if (typeof date !== "string" &&
            date.toFixed !== undefined)
            parsedDate = new Date(date);
        else if (typeof date === "string") {
            const format = givenFormat || (config || options_defaults).dateFormat;
            const datestr = String(date).trim();
            if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
            }
            else if (/Z$/.test(datestr) ||
                /GMT$/.test(datestr))
                parsedDate = new Date(date);
            else if (config && config.parseDate)
                parsedDate = config.parseDate(date, format);
            else {
                parsedDate =
                    !config || !config.noCalendar
                        ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                        : new Date(new Date().setHours(0, 0, 0, 0));
                let matched, ops = [];
                for (let i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                    const token = format[i];
                    const isBackSlash = token === "\\";
                    const escaped = format[i - 1] === "\\" || isBackSlash;
                    if (tokenRegex[token] && !escaped) {
                        regexStr += tokenRegex[token];
                        const match = new RegExp(regexStr).exec(date);
                        if (match && (matched = true)) {
                            ops[token !== "Y" ? "push" : "unshift"]({
                                fn: revFormat[token],
                                val: match[++matchIndex],
                            });
                        }
                    }
                    else if (!isBackSlash)
                        regexStr += ".";
                    ops.forEach(({ fn, val }) => (parsedDate = fn(parsedDate, val, locale) || parsedDate));
                }
                parsedDate = matched ? parsedDate : undefined;
            }
        }
        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
            config.errorHandler(new Error(`Invalid date provided: ${dateOrig}`));
            return undefined;
        }
        if (timeless === true)
            parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
    };
    function compareDates(date1, date2, timeless = true) {
        if (timeless !== false) {
            return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
                new Date(date2.getTime()).setHours(0, 0, 0, 0));
        }
        return date1.getTime() - date2.getTime();
    }
    function compareTimes(date1, date2) {
        return (3600 * (date1.getHours() - date2.getHours()) +
            60 * (date1.getMinutes() - date2.getMinutes()) +
            date1.getSeconds() -
            date2.getSeconds());
    }
    const isBetween = (ts, ts1, ts2) => {
        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    const duration = {
        DAY: 86400000,
    };
    function getDefaultHours(config) {
        let hours = config.defaultHour;
        let minutes = config.defaultMinute;
        let seconds = config.defaultSeconds;
        if (config.minDate !== undefined) {
            const minHour = config.minDate.getHours();
            const minMinutes = config.minDate.getMinutes();
            const minSeconds = config.minDate.getSeconds();
            if (hours < minHour) {
                hours = minHour;
            }
            if (hours === minHour && minutes < minMinutes) {
                minutes = minMinutes;
            }
            if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
                seconds = config.minDate.getSeconds();
        }
        if (config.maxDate !== undefined) {
            const maxHr = config.maxDate.getHours();
            const maxMinutes = config.maxDate.getMinutes();
            hours = Math.min(hours, maxHr);
            if (hours === maxHr)
                minutes = Math.min(maxMinutes, minutes);
            if (hours === maxHr && minutes === maxMinutes)
                seconds = config.maxDate.getSeconds();
        }
        return { hours, minutes, seconds };
    }
    
    // EXTERNAL MODULE: ./node_modules/flatpickr/dist/esm/utils/polyfills.js
    var polyfills = __webpack_require__(26);
    
    // CONCATENATED MODULE: ./node_modules/flatpickr/dist/esm/index.js
    
    
    
    
    
    
    
    const DEBOUNCED_CHANGE_MS = 300;
    function FlatpickrInstance(element, instanceConfig) {
        const self = {
            config: Object.assign(Object.assign({}, options_defaults), flatpickr.defaultConfig),
            l10n: l10n_default,
        };
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        self._handlers = [];
        self.pluginElements = [];
        self.loadedPlugins = [];
        self._bind = bind;
        self._setHoursFromDate = setHoursFromDate;
        self._positionCalendar = positionCalendar;
        self.changeMonth = changeMonth;
        self.changeYear = changeYear;
        self.clear = clear;
        self.close = close;
        self._createElement = createElement;
        self.destroy = destroy;
        self.isEnabled = isEnabled;
        self.jumpToDate = jumpToDate;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;
        function setupHelperFunctions() {
            self.utils = {
                getDaysInMonth(month = self.currentMonth, yr = self.currentYear) {
                    if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                        return 29;
                    return self.l10n.daysInMonth[month];
                },
            };
        }
        function init() {
            self.element = self.input = element;
            self.isOpen = false;
            parseConfig();
            setupLocale();
            setupInputs();
            setupDates();
            setupHelperFunctions();
            if (!self.isMobile)
                build();
            bindEvents();
            if (self.selectedDates.length || self.config.noCalendar) {
                if (self.config.enableTime) {
                    setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
                }
                updateValue(false);
            }
            setCalendarWidth();
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            if (!self.isMobile && isSafari) {
                positionCalendar();
            }
            triggerEvent("onReady");
        }
        function bindToInstance(fn) {
            return fn.bind(self);
        }
        function setCalendarWidth() {
            const config = self.config;
            if (config.weekNumbers === false && config.showMonths === 1) {
                return;
            }
            else if (config.noCalendar !== true) {
                window.requestAnimationFrame(function () {
                    if (self.calendarContainer !== undefined) {
                        self.calendarContainer.style.visibility = "hidden";
                        self.calendarContainer.style.display = "block";
                    }
                    if (self.daysContainer !== undefined) {
                        const daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                        self.daysContainer.style.width = daysWidth + "px";
                        self.calendarContainer.style.width =
                            daysWidth +
                                (self.weekWrapper !== undefined
                                    ? self.weekWrapper.offsetWidth
                                    : 0) +
                                "px";
                        self.calendarContainer.style.removeProperty("visibility");
                        self.calendarContainer.style.removeProperty("display");
                    }
                });
            }
        }
        function updateTime(e) {
            if (self.selectedDates.length === 0) {
                const defaultDate = self.config.minDate === undefined ||
                    compareDates(new Date(), self.config.minDate) >= 0
                    ? new Date()
                    : new Date(self.config.minDate.getTime());
                const defaults = getDefaultHours(self.config);
                defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
                self.selectedDates = [defaultDate];
                self.latestSelectedDateObj = defaultDate;
            }
            if (e !== undefined && e.type !== "blur") {
                timeWrapper(e);
            }
            const prevValue = self._input.value;
            setHoursFromInputs();
            updateValue();
            if (self._input.value !== prevValue) {
                self._debouncedChange();
            }
        }
        function ampm2military(hour, amPM) {
            return (hour % 12) + 12 * utils_int(amPM === self.l10n.amPM[1]);
        }
        function military2ampm(hour) {
            switch (hour % 24) {
                case 0:
                case 12:
                    return 12;
                default:
                    return hour % 12;
            }
        }
        function setHoursFromInputs() {
            if (self.hourElement === undefined || self.minuteElement === undefined)
                return;
            let hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
                ? (parseInt(self.secondElement.value, 10) || 0) % 60
                : 0;
            if (self.amPM !== undefined) {
                hours = ampm2military(hours, self.amPM.textContent);
            }
            const limitMinHours = self.config.minTime !== undefined ||
                (self.config.minDate &&
                    self.minDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
                        0);
            const limitMaxHours = self.config.maxTime !== undefined ||
                (self.config.maxDate &&
                    self.maxDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
                        0);
            if (limitMaxHours) {
                const maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                const minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours() && minutes < minTime.getMinutes())
                    minutes = minTime.getMinutes();
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
            setHours(hours, minutes, seconds);
        }
        function setHoursFromDate(dateObj) {
            const date = dateObj || self.latestSelectedDateObj;
            if (date) {
                setHours(date.getHours(), date.getMinutes(), date.getSeconds());
            }
        }
        function setHours(hours, minutes, seconds) {
            if (self.latestSelectedDateObj !== undefined) {
                self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
            }
            if (!self.hourElement || !self.minuteElement || self.isMobile)
                return;
            self.hourElement.value = pad(!self.config.time_24hr
                ? ((12 + hours) % 12) + 12 * utils_int(hours % 12 === 0)
                : hours);
            self.minuteElement.value = pad(minutes);
            if (self.amPM !== undefined)
                self.amPM.textContent = self.l10n.amPM[utils_int(hours >= 12)];
            if (self.secondElement !== undefined)
                self.secondElement.value = pad(seconds);
        }
        function onYearInput(event) {
            const eventTarget = getEventTarget(event);
            const year = parseInt(eventTarget.value) + (event.delta || 0);
            if (year / 1000 > 1 ||
                (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
                changeYear(year);
            }
        }
        function bind(element, event, handler, options) {
            if (event instanceof Array)
                return event.forEach((ev) => bind(element, ev, handler, options));
            if (element instanceof Array)
                return element.forEach((el) => bind(el, event, handler, options));
            element.addEventListener(event, handler, options);
            self._handlers.push({
                remove: () => element.removeEventListener(event, handler),
            });
        }
        function triggerChange() {
            triggerEvent("onChange");
        }
        function bindEvents() {
            if (self.config.wrap) {
                ["open", "close", "toggle", "clear"].forEach((evt) => {
                    Array.prototype.forEach.call(self.element.querySelectorAll(`[data-${evt}]`), (el) => bind(el, "click", self[evt]));
                });
            }
            if (self.isMobile) {
                setupMobile();
                return;
            }
            const debouncedResize = debounce(onResize, 50);
            self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
                bind(self.daysContainer, "mouseover", (e) => {
                    if (self.config.mode === "range")
                        onMouseOver(getEventTarget(e));
                });
            bind(window.document.body, "keydown", onKeyDown);
            if (!self.config.inline && !self.config.static)
                bind(window, "resize", debouncedResize);
            if (window.ontouchstart !== undefined)
                bind(window.document, "touchstart", documentClick);
            else
                bind(window.document, "mousedown", documentClick);
            bind(window.document, "focus", documentClick, { capture: true });
            if (self.config.clickOpens === true) {
                bind(self._input, "focus", self.open);
                bind(self._input, "click", self.open);
            }
            if (self.daysContainer !== undefined) {
                bind(self.monthNav, "click", onMonthNavClick);
                bind(self.monthNav, ["keyup", "increment"], onYearInput);
                bind(self.daysContainer, "click", selectDate);
            }
            if (self.timeContainer !== undefined &&
                self.minuteElement !== undefined &&
                self.hourElement !== undefined) {
                const selText = (e) => getEventTarget(e).select();
                bind(self.timeContainer, ["increment"], updateTime);
                bind(self.timeContainer, "blur", updateTime, { capture: true });
                bind(self.timeContainer, "click", timeIncrement);
                bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
                if (self.secondElement !== undefined)
                    bind(self.secondElement, "focus", () => self.secondElement && self.secondElement.select());
                if (self.amPM !== undefined) {
                    bind(self.amPM, "click", (e) => {
                        updateTime(e);
                        triggerChange();
                    });
                }
            }
            if (self.config.allowInput) {
                bind(self._input, "blur", onBlur);
            }
        }
        function jumpToDate(jumpDate, triggerChange) {
            const jumpTo = jumpDate !== undefined
                ? self.parseDate(jumpDate)
                : self.latestSelectedDateObj ||
                    (self.config.minDate && self.config.minDate > self.now
                        ? self.config.minDate
                        : self.config.maxDate && self.config.maxDate < self.now
                            ? self.config.maxDate
                            : self.now);
            const oldYear = self.currentYear;
            const oldMonth = self.currentMonth;
            try {
                if (jumpTo !== undefined) {
                    self.currentYear = jumpTo.getFullYear();
                    self.currentMonth = jumpTo.getMonth();
                }
            }
            catch (e) {
                e.message = "Invalid date supplied: " + jumpTo;
                self.config.errorHandler(e);
            }
            if (triggerChange && self.currentYear !== oldYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            if (triggerChange &&
                (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
                triggerEvent("onMonthChange");
            }
            self.redraw();
        }
        function timeIncrement(e) {
            const eventTarget = getEventTarget(e);
            if (~eventTarget.className.indexOf("arrow"))
                incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
        }
        function incrementNumInput(e, delta, inputElem) {
            const target = e && getEventTarget(e);
            const input = inputElem ||
                (target && target.parentNode && target.parentNode.firstChild);
            const event = createEvent("increment");
            event.delta = delta;
            input && input.dispatchEvent(event);
        }
        function build() {
            const fragment = window.document.createDocumentFragment();
            self.calendarContainer = createElement("div", "flatpickr-calendar");
            self.calendarContainer.tabIndex = -1;
            if (!self.config.noCalendar) {
                fragment.appendChild(buildMonthNav());
                self.innerContainer = createElement("div", "flatpickr-innerContainer");
                if (self.config.weekNumbers) {
                    const { weekWrapper, weekNumbers } = buildWeeks();
                    self.innerContainer.appendChild(weekWrapper);
                    self.weekNumbers = weekNumbers;
                    self.weekWrapper = weekWrapper;
                }
                self.rContainer = createElement("div", "flatpickr-rContainer");
                self.rContainer.appendChild(buildWeekdays());
                if (!self.daysContainer) {
                    self.daysContainer = createElement("div", "flatpickr-days");
                    self.daysContainer.tabIndex = -1;
                }
                buildDays();
                self.rContainer.appendChild(self.daysContainer);
                self.innerContainer.appendChild(self.rContainer);
                fragment.appendChild(self.innerContainer);
            }
            if (self.config.enableTime) {
                fragment.appendChild(buildTime());
            }
            toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
            toggleClass(self.calendarContainer, "animate", self.config.animate === true);
            toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
            self.calendarContainer.appendChild(fragment);
            const customAppend = self.config.appendTo !== undefined &&
                self.config.appendTo.nodeType !== undefined;
            if (self.config.inline || self.config.static) {
                self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                if (self.config.inline) {
                    if (!customAppend && self.element.parentNode)
                        self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                    else if (self.config.appendTo !== undefined)
                        self.config.appendTo.appendChild(self.calendarContainer);
                }
                if (self.config.static) {
                    const wrapper = createElement("div", "flatpickr-wrapper");
                    if (self.element.parentNode)
                        self.element.parentNode.insertBefore(wrapper, self.element);
                    wrapper.appendChild(self.element);
                    if (self.altInput)
                        wrapper.appendChild(self.altInput);
                    wrapper.appendChild(self.calendarContainer);
                }
            }
            if (!self.config.static && !self.config.inline)
                (self.config.appendTo !== undefined
                    ? self.config.appendTo
                    : window.document.body).appendChild(self.calendarContainer);
        }
        function createDay(className, date, dayNumber, i) {
            const dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
            dayElement.dateObj = date;
            dayElement.$i = i;
            dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
            if (className.indexOf("hidden") === -1 &&
                compareDates(date, self.now) === 0) {
                self.todayDateElem = dayElement;
                dayElement.classList.add("today");
                dayElement.setAttribute("aria-current", "date");
            }
            if (dateIsEnabled) {
                dayElement.tabIndex = -1;
                if (isDateSelected(date)) {
                    dayElement.classList.add("selected");
                    self.selectedDateElem = dayElement;
                    if (self.config.mode === "range") {
                        toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                            compareDates(date, self.selectedDates[0], true) === 0);
                        toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                            compareDates(date, self.selectedDates[1], true) === 0);
                        if (className === "nextMonthDay")
                            dayElement.classList.add("inRange");
                    }
                }
            }
            else {
                dayElement.classList.add("flatpickr-disabled");
            }
            if (self.config.mode === "range") {
                if (isDateInRange(date) && !isDateSelected(date))
                    dayElement.classList.add("inRange");
            }
            if (self.weekNumbers &&
                self.config.showMonths === 1 &&
                className !== "prevMonthDay" &&
                dayNumber % 7 === 1) {
                self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
            }
            triggerEvent("onDayCreate", dayElement);
            return dayElement;
        }
        function focusOnDayElem(targetNode) {
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        }
        function getFirstAvailableDay(delta) {
            const startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
            const endMonth = delta > 0 ? self.config.showMonths : -1;
            for (let m = startMonth; m != endMonth; m += delta) {
                const month = self.daysContainer.children[m];
                const startIndex = delta > 0 ? 0 : month.children.length - 1;
                const endIndex = delta > 0 ? month.children.length : -1;
                for (let i = startIndex; i != endIndex; i += delta) {
                    const c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                        return c;
                }
            }
            return undefined;
        }
        function getNextAvailableDay(current, delta) {
            const givenMonth = current.className.indexOf("Month") === -1
                ? current.dateObj.getMonth()
                : self.currentMonth;
            const endMonth = delta > 0 ? self.config.showMonths : -1;
            const loopDelta = delta > 0 ? 1 : -1;
            for (let m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                const month = self.daysContainer.children[m];
                const startIndex = givenMonth - self.currentMonth === m
                    ? current.$i + delta
                    : delta < 0
                        ? month.children.length - 1
                        : 0;
                const numMonthDays = month.children.length;
                for (let i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                    const c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 &&
                        isEnabled(c.dateObj) &&
                        Math.abs(current.$i - i) >= Math.abs(delta))
                        return focusOnDayElem(c);
                }
            }
            self.changeMonth(loopDelta);
            focusOnDay(getFirstAvailableDay(loopDelta), 0);
            return undefined;
        }
        function focusOnDay(current, offset) {
            const dayFocused = isInView(document.activeElement || document.body);
            const startElem = current !== undefined
                ? current
                : dayFocused
                    ? document.activeElement
                    : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                        ? self.selectedDateElem
                        : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                            ? self.todayDateElem
                            : getFirstAvailableDay(offset > 0 ? 1 : -1);
            if (startElem === undefined) {
                self._input.focus();
            }
            else if (!dayFocused) {
                focusOnDayElem(startElem);
            }
            else {
                getNextAvailableDay(startElem, offset);
            }
        }
        function buildMonthDays(year, month) {
            const firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
            const prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
            const daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
            let dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
                days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
            }
            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
                days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
            }
            for (let dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
                (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
                days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
            }
            const dayContainer = createElement("div", "dayContainer");
            dayContainer.appendChild(days);
            return dayContainer;
        }
        function buildDays() {
            if (self.daysContainer === undefined) {
                return;
            }
            clearNode(self.daysContainer);
            if (self.weekNumbers)
                clearNode(self.weekNumbers);
            const frag = document.createDocumentFragment();
            for (let i = 0; i < self.config.showMonths; i++) {
                const d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
            }
            self.daysContainer.appendChild(frag);
            self.days = self.daysContainer.firstChild;
            if (self.config.mode === "range" && self.selectedDates.length === 1) {
                onMouseOver();
            }
        }
        function buildMonthSwitch() {
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType !== "dropdown")
                return;
            const shouldBuildMonth = function (month) {
                if (self.config.minDate !== undefined &&
                    self.currentYear === self.config.minDate.getFullYear() &&
                    month < self.config.minDate.getMonth()) {
                    return false;
                }
                return !(self.config.maxDate !== undefined &&
                    self.currentYear === self.config.maxDate.getFullYear() &&
                    month > self.config.maxDate.getMonth());
            };
            self.monthsDropdownContainer.tabIndex = -1;
            self.monthsDropdownContainer.innerHTML = "";
            for (let i = 0; i < 12; i++) {
                if (!shouldBuildMonth(i))
                    continue;
                const month = createElement("option", "flatpickr-monthDropdown-month");
                month.value = new Date(self.currentYear, i).getMonth().toString();
                month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
                month.tabIndex = -1;
                if (self.currentMonth === i) {
                    month.selected = true;
                }
                self.monthsDropdownContainer.appendChild(month);
            }
        }
        function buildMonth() {
            const container = createElement("div", "flatpickr-month");
            const monthNavFragment = window.document.createDocumentFragment();
            let monthElement;
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                monthElement = createElement("span", "cur-month");
            }
            else {
                self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
                self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
                bind(self.monthsDropdownContainer, "change", (e) => {
                    const target = getEventTarget(e);
                    const selectedMonth = parseInt(target.value, 10);
                    self.changeMonth(selectedMonth - self.currentMonth);
                    triggerEvent("onMonthChange");
                });
                buildMonthSwitch();
                monthElement = self.monthsDropdownContainer;
            }
            const yearInput = createNumberInput("cur-year", { tabindex: "-1" });
            const yearElement = yearInput.getElementsByTagName("input")[0];
            yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
            if (self.config.minDate) {
                yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
            }
            if (self.config.maxDate) {
                yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
                yearElement.disabled =
                    !!self.config.minDate &&
                        self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
            }
            const currentMonth = createElement("div", "flatpickr-current-month");
            currentMonth.appendChild(monthElement);
            currentMonth.appendChild(yearInput);
            monthNavFragment.appendChild(currentMonth);
            container.appendChild(monthNavFragment);
            return {
                container,
                yearElement,
                monthElement,
            };
        }
        function buildMonths() {
            clearNode(self.monthNav);
            self.monthNav.appendChild(self.prevMonthNav);
            if (self.config.showMonths) {
                self.yearElements = [];
                self.monthElements = [];
            }
            for (let m = self.config.showMonths; m--;) {
                const month = buildMonth();
                self.yearElements.push(month.yearElement);
                self.monthElements.push(month.monthElement);
                self.monthNav.appendChild(month.container);
            }
            self.monthNav.appendChild(self.nextMonthNav);
        }
        function buildMonthNav() {
            self.monthNav = createElement("div", "flatpickr-months");
            self.yearElements = [];
            self.monthElements = [];
            self.prevMonthNav = createElement("span", "flatpickr-prev-month");
            self.prevMonthNav.innerHTML = self.config.prevArrow;
            self.nextMonthNav = createElement("span", "flatpickr-next-month");
            self.nextMonthNav.innerHTML = self.config.nextArrow;
            buildMonths();
            Object.defineProperty(self, "_hidePrevMonthArrow", {
                get: () => self.__hidePrevMonthArrow,
                set(bool) {
                    if (self.__hidePrevMonthArrow !== bool) {
                        toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                        self.__hidePrevMonthArrow = bool;
                    }
                },
            });
            Object.defineProperty(self, "_hideNextMonthArrow", {
                get: () => self.__hideNextMonthArrow,
                set(bool) {
                    if (self.__hideNextMonthArrow !== bool) {
                        toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                        self.__hideNextMonthArrow = bool;
                    }
                },
            });
            self.currentYearElement = self.yearElements[0];
            updateNavigationCurrentMonth();
            return self.monthNav;
        }
        function buildTime() {
            self.calendarContainer.classList.add("hasTime");
            if (self.config.noCalendar)
                self.calendarContainer.classList.add("noCalendar");
            const defaults = getDefaultHours(self.config);
            self.timeContainer = createElement("div", "flatpickr-time");
            self.timeContainer.tabIndex = -1;
            const separator = createElement("span", "flatpickr-time-separator", ":");
            const hourInput = createNumberInput("flatpickr-hour", {
                "aria-label": self.l10n.hourAriaLabel,
            });
            self.hourElement = hourInput.getElementsByTagName("input")[0];
            const minuteInput = createNumberInput("flatpickr-minute", {
                "aria-label": self.l10n.minuteAriaLabel,
            });
            self.minuteElement = minuteInput.getElementsByTagName("input")[0];
            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
            self.hourElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getHours()
                : self.config.time_24hr
                    ? defaults.hours
                    : military2ampm(defaults.hours));
            self.minuteElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getMinutes()
                : defaults.minutes);
            self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
            self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
            self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
            self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
            self.hourElement.setAttribute("maxlength", "2");
            self.minuteElement.setAttribute("min", "0");
            self.minuteElement.setAttribute("max", "59");
            self.minuteElement.setAttribute("maxlength", "2");
            self.timeContainer.appendChild(hourInput);
            self.timeContainer.appendChild(separator);
            self.timeContainer.appendChild(minuteInput);
            if (self.config.time_24hr)
                self.timeContainer.classList.add("time24hr");
            if (self.config.enableSeconds) {
                self.timeContainer.classList.add("hasSeconds");
                const secondInput = createNumberInput("flatpickr-second");
                self.secondElement = secondInput.getElementsByTagName("input")[0];
                self.secondElement.value = pad(self.latestSelectedDateObj
                    ? self.latestSelectedDateObj.getSeconds()
                    : defaults.seconds);
                self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
                self.secondElement.setAttribute("min", "0");
                self.secondElement.setAttribute("max", "59");
                self.secondElement.setAttribute("maxlength", "2");
                self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
                self.timeContainer.appendChild(secondInput);
            }
            if (!self.config.time_24hr) {
                self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[utils_int((self.latestSelectedDateObj
                    ? self.hourElement.value
                    : self.config.defaultHour) > 11)]);
                self.amPM.title = self.l10n.toggleTitle;
                self.amPM.tabIndex = -1;
                self.timeContainer.appendChild(self.amPM);
            }
            return self.timeContainer;
        }
        function buildWeekdays() {
            if (!self.weekdayContainer)
                self.weekdayContainer = createElement("div", "flatpickr-weekdays");
            else
                clearNode(self.weekdayContainer);
            for (let i = self.config.showMonths; i--;) {
                const container = createElement("div", "flatpickr-weekdaycontainer");
                self.weekdayContainer.appendChild(container);
            }
            updateWeekdays();
            return self.weekdayContainer;
        }
        function updateWeekdays() {
            if (!self.weekdayContainer) {
                return;
            }
            const firstDayOfWeek = self.l10n.firstDayOfWeek;
            let weekdays = [...self.l10n.weekdays.shorthand];
            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
                weekdays = [
                    ...weekdays.splice(firstDayOfWeek, weekdays.length),
                    ...weekdays.splice(0, firstDayOfWeek),
                ];
            }
            for (let i = self.config.showMonths; i--;) {
                self.weekdayContainer.children[i].innerHTML = `
          <span class='flatpickr-weekday'>
            ${weekdays.join("</span><span class='flatpickr-weekday'>")}
          </span>
          `;
            }
        }
        function buildWeeks() {
            self.calendarContainer.classList.add("hasWeeks");
            const weekWrapper = createElement("div", "flatpickr-weekwrapper");
            weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
            const weekNumbers = createElement("div", "flatpickr-weeks");
            weekWrapper.appendChild(weekNumbers);
            return {
                weekWrapper,
                weekNumbers,
            };
        }
        function changeMonth(value, isOffset = true) {
            const delta = isOffset ? value : value - self.currentMonth;
            if ((delta < 0 && self._hidePrevMonthArrow === true) ||
                (delta > 0 && self._hideNextMonthArrow === true))
                return;
            self.currentMonth += delta;
            if (self.currentMonth < 0 || self.currentMonth > 11) {
                self.currentYear += self.currentMonth > 11 ? 1 : -1;
                self.currentMonth = (self.currentMonth + 12) % 12;
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            buildDays();
            triggerEvent("onMonthChange");
            updateNavigationCurrentMonth();
        }
        function clear(triggerChangeEvent = true, toInitial = true) {
            self.input.value = "";
            if (self.altInput !== undefined)
                self.altInput.value = "";
            if (self.mobileInput !== undefined)
                self.mobileInput.value = "";
            self.selectedDates = [];
            self.latestSelectedDateObj = undefined;
            if (toInitial === true) {
                self.currentYear = self._initialDate.getFullYear();
                self.currentMonth = self._initialDate.getMonth();
            }
            if (self.config.enableTime === true) {
                const { hours, minutes, seconds } = getDefaultHours(self.config);
                setHours(hours, minutes, seconds);
            }
            self.redraw();
            if (triggerChangeEvent)
                triggerEvent("onChange");
        }
        function close() {
            self.isOpen = false;
            if (!self.isMobile) {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.classList.remove("open");
                }
                if (self._input !== undefined) {
                    self._input.classList.remove("active");
                }
            }
            triggerEvent("onClose");
        }
        function destroy() {
            if (self.config !== undefined)
                triggerEvent("onDestroy");
            for (let i = self._handlers.length; i--;) {
                self._handlers[i].remove();
            }
            self._handlers = [];
            if (self.mobileInput) {
                if (self.mobileInput.parentNode)
                    self.mobileInput.parentNode.removeChild(self.mobileInput);
                self.mobileInput = undefined;
            }
            else if (self.calendarContainer && self.calendarContainer.parentNode) {
                if (self.config.static && self.calendarContainer.parentNode) {
                    const wrapper = self.calendarContainer.parentNode;
                    wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                    if (wrapper.parentNode) {
                        while (wrapper.firstChild)
                            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                    }
                }
                else
                    self.calendarContainer.parentNode.removeChild(self.calendarContainer);
            }
            if (self.altInput) {
                self.input.type = "text";
                if (self.altInput.parentNode)
                    self.altInput.parentNode.removeChild(self.altInput);
                delete self.altInput;
            }
            if (self.input) {
                self.input.type = self.input._type;
                self.input.classList.remove("flatpickr-input");
                self.input.removeAttribute("readonly");
            }
            [
                "_showTimeInput",
                "latestSelectedDateObj",
                "_hideNextMonthArrow",
                "_hidePrevMonthArrow",
                "__hideNextMonthArrow",
                "__hidePrevMonthArrow",
                "isMobile",
                "isOpen",
                "selectedDateElem",
                "minDateHasTime",
                "maxDateHasTime",
                "days",
                "daysContainer",
                "_input",
                "_positionElement",
                "innerContainer",
                "rContainer",
                "monthNav",
                "todayDateElem",
                "calendarContainer",
                "weekdayContainer",
                "prevMonthNav",
                "nextMonthNav",
                "monthsDropdownContainer",
                "currentMonthElement",
                "currentYearElement",
                "navigationCurrentMonth",
                "selectedDateElem",
                "config",
            ].forEach((k) => {
                try {
                    delete self[k];
                }
                catch (_) { }
            });
        }
        function isCalendarElem(elem) {
            if (self.config.appendTo && self.config.appendTo.contains(elem))
                return true;
            return self.calendarContainer.contains(elem);
        }
        function documentClick(e) {
            if (self.isOpen && !self.config.inline) {
                const eventTarget = getEventTarget(e);
                const isCalendarElement = isCalendarElem(eventTarget);
                const isInput = eventTarget === self.input ||
                    eventTarget === self.altInput ||
                    self.element.contains(eventTarget) ||
                    (e.path &&
                        e.path.indexOf &&
                        (~e.path.indexOf(self.input) ||
                            ~e.path.indexOf(self.altInput)));
                const lostFocus = e.type === "blur"
                    ? isInput &&
                        e.relatedTarget &&
                        !isCalendarElem(e.relatedTarget)
                    : !isInput &&
                        !isCalendarElement &&
                        !isCalendarElem(e.relatedTarget);
                const isIgnored = !self.config.ignoredFocusElements.some((elem) => elem.contains(eventTarget));
                if (lostFocus && isIgnored) {
                    if (self.timeContainer !== undefined &&
                        self.minuteElement !== undefined &&
                        self.hourElement !== undefined &&
                        self.input.value !== "" &&
                        self.input.value !== undefined) {
                        updateTime();
                    }
                    self.close();
                    if (self.config &&
                        self.config.mode === "range" &&
                        self.selectedDates.length === 1) {
                        self.clear(false);
                        self.redraw();
                    }
                }
            }
        }
        function changeYear(newYear) {
            if (!newYear ||
                (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
                (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
                return;
            const newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
            self.currentYear = newYearNum || self.currentYear;
            if (self.config.maxDate &&
                self.currentYear === self.config.maxDate.getFullYear()) {
                self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
            }
            else if (self.config.minDate &&
                self.currentYear === self.config.minDate.getFullYear()) {
                self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
            }
            if (isNewYear) {
                self.redraw();
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
        }
        function isEnabled(date, timeless = true) {
            var _a;
            const dateToCheck = self.parseDate(date, undefined, timeless);
            if ((self.config.minDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
                (self.config.maxDate &&
                    dateToCheck &&
                    compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
                return false;
            if (!self.config.enable && self.config.disable.length === 0)
                return true;
            if (dateToCheck === undefined)
                return false;
            const bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
            for (let i = 0, d; i < array.length; i++) {
                d = array[i];
                if (typeof d === "function" &&
                    d(dateToCheck))
                    return bool;
                else if (d instanceof Date &&
                    dateToCheck !== undefined &&
                    d.getTime() === dateToCheck.getTime())
                    return bool;
                else if (typeof d === "string") {
                    const parsed = self.parseDate(d, undefined, true);
                    return parsed && parsed.getTime() === dateToCheck.getTime()
                        ? bool
                        : !bool;
                }
                else if (typeof d === "object" &&
                    dateToCheck !== undefined &&
                    d.from &&
                    d.to &&
                    dateToCheck.getTime() >= d.from.getTime() &&
                    dateToCheck.getTime() <= d.to.getTime())
                    return bool;
            }
            return !bool;
        }
        function isInView(elem) {
            if (self.daysContainer !== undefined)
                return (elem.className.indexOf("hidden") === -1 &&
                    elem.className.indexOf("flatpickr-disabled") === -1 &&
                    self.daysContainer.contains(elem));
            return false;
        }
        function onBlur(e) {
            const isInput = e.target === self._input;
            if (isInput &&
                (self.selectedDates.length > 0 || self._input.value.length > 0) &&
                !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
                self.setDate(self._input.value, true, e.target === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
            }
        }
        function onKeyDown(e) {
            const eventTarget = getEventTarget(e);
            const isInput = self.config.wrap
                ? element.contains(eventTarget)
                : eventTarget === self._input;
            const allowInput = self.config.allowInput;
            const allowKeydown = self.isOpen && (!allowInput || !isInput);
            const allowInlineKeydown = self.config.inline && isInput && !allowInput;
            if (e.keyCode === 13 && isInput) {
                if (allowInput) {
                    self.setDate(self._input.value, true, eventTarget === self.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                    return eventTarget.blur();
                }
                else {
                    self.open();
                }
            }
            else if (isCalendarElem(eventTarget) ||
                allowKeydown ||
                allowInlineKeydown) {
                const isTimeObj = !!self.timeContainer &&
                    self.timeContainer.contains(eventTarget);
                switch (e.keyCode) {
                    case 13:
                        if (isTimeObj) {
                            e.preventDefault();
                            updateTime();
                            focusAndClose();
                        }
                        else
                            selectDate(e);
                        break;
                    case 27:
                        e.preventDefault();
                        focusAndClose();
                        break;
                    case 8:
                    case 46:
                        if (isInput && !self.config.allowInput) {
                            e.preventDefault();
                            self.clear();
                        }
                        break;
                    case 37:
                    case 39:
                        if (!isTimeObj && !isInput) {
                            e.preventDefault();
                            if (self.daysContainer !== undefined &&
                                (allowInput === false ||
                                    (document.activeElement && isInView(document.activeElement)))) {
                                const delta = e.keyCode === 39 ? 1 : -1;
                                if (!e.ctrlKey)
                                    focusOnDay(undefined, delta);
                                else {
                                    e.stopPropagation();
                                    changeMonth(delta);
                                    focusOnDay(getFirstAvailableDay(1), 0);
                                }
                            }
                        }
                        else if (self.hourElement)
                            self.hourElement.focus();
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        const delta = e.keyCode === 40 ? 1 : -1;
                        if ((self.daysContainer &&
                            eventTarget.$i !== undefined) ||
                            eventTarget === self.input ||
                            eventTarget === self.altInput) {
                            if (e.ctrlKey) {
                                e.stopPropagation();
                                changeYear(self.currentYear - delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                            else if (!isTimeObj)
                                focusOnDay(undefined, delta * 7);
                        }
                        else if (eventTarget === self.currentYearElement) {
                            changeYear(self.currentYear - delta);
                        }
                        else if (self.config.enableTime) {
                            if (!isTimeObj && self.hourElement)
                                self.hourElement.focus();
                            updateTime(e);
                            self._debouncedChange();
                        }
                        break;
                    case 9:
                        if (isTimeObj) {
                            const elems = [
                                self.hourElement,
                                self.minuteElement,
                                self.secondElement,
                                self.amPM,
                            ]
                                .concat(self.pluginElements)
                                .filter((x) => x);
                            const i = elems.indexOf(eventTarget);
                            if (i !== -1) {
                                const target = elems[i + (e.shiftKey ? -1 : 1)];
                                e.preventDefault();
                                (target || self._input).focus();
                            }
                        }
                        else if (!self.config.noCalendar &&
                            self.daysContainer &&
                            self.daysContainer.contains(eventTarget) &&
                            e.shiftKey) {
                            e.preventDefault();
                            self._input.focus();
                        }
                        break;
                    default:
                        break;
                }
            }
            if (self.amPM !== undefined && eventTarget === self.amPM) {
                switch (e.key) {
                    case self.l10n.amPM[0].charAt(0):
                    case self.l10n.amPM[0].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[0];
                        setHoursFromInputs();
                        updateValue();
                        break;
                    case self.l10n.amPM[1].charAt(0):
                    case self.l10n.amPM[1].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[1];
                        setHoursFromInputs();
                        updateValue();
                        break;
                }
            }
            if (isInput || isCalendarElem(eventTarget)) {
                triggerEvent("onKeyDown", e);
            }
        }
        function onMouseOver(elem) {
            if (self.selectedDates.length !== 1 ||
                (elem &&
                    (!elem.classList.contains("flatpickr-day") ||
                        elem.classList.contains("flatpickr-disabled"))))
                return;
            const hoverDate = elem
                ? elem.dateObj.getTime()
                : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
            let containsDisabled = false;
            let minRange = 0, maxRange = 0;
            for (let t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
                if (!isEnabled(new Date(t), true)) {
                    containsDisabled =
                        containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                    if (t < initialDate && (!minRange || t > minRange))
                        minRange = t;
                    else if (t > initialDate && (!maxRange || t < maxRange))
                        maxRange = t;
                }
            }
            for (let m = 0; m < self.config.showMonths; m++) {
                const month = self.daysContainer.children[m];
                for (let i = 0, l = month.children.length; i < l; i++) {
                    const dayElem = month.children[i], date = dayElem.dateObj;
                    const timestamp = date.getTime();
                    const outOfRange = (minRange > 0 && timestamp < minRange) ||
                        (maxRange > 0 && timestamp > maxRange);
                    if (outOfRange) {
                        dayElem.classList.add("notAllowed");
                        ["inRange", "startRange", "endRange"].forEach((c) => {
                            dayElem.classList.remove(c);
                        });
                        continue;
                    }
                    else if (containsDisabled && !outOfRange)
                        continue;
                    ["startRange", "inRange", "endRange", "notAllowed"].forEach((c) => {
                        dayElem.classList.remove(c);
                    });
                    if (elem !== undefined) {
                        elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                            ? "startRange"
                            : "endRange");
                        if (initialDate < hoverDate && timestamp === initialDate)
                            dayElem.classList.add("startRange");
                        else if (initialDate > hoverDate && timestamp === initialDate)
                            dayElem.classList.add("endRange");
                        if (timestamp >= minRange &&
                            (maxRange === 0 || timestamp <= maxRange) &&
                            isBetween(timestamp, initialDate, hoverDate))
                            dayElem.classList.add("inRange");
                    }
                }
            }
        }
        function onResize() {
            if (self.isOpen && !self.config.static && !self.config.inline)
                positionCalendar();
        }
        function open(e, positionElement = self._positionElement) {
            if (self.isMobile === true) {
                if (e) {
                    e.preventDefault();
                    const eventTarget = getEventTarget(e);
                    if (eventTarget) {
                        eventTarget.blur();
                    }
                }
                if (self.mobileInput !== undefined) {
                    self.mobileInput.focus();
                    self.mobileInput.click();
                }
                triggerEvent("onOpen");
                return;
            }
            else if (self._input.disabled || self.config.inline) {
                return;
            }
            const wasOpen = self.isOpen;
            self.isOpen = true;
            if (!wasOpen) {
                self.calendarContainer.classList.add("open");
                self._input.classList.add("active");
                triggerEvent("onOpen");
                positionCalendar(positionElement);
            }
            if (self.config.enableTime === true && self.config.noCalendar === true) {
                if (self.config.allowInput === false &&
                    (e === undefined ||
                        !self.timeContainer.contains(e.relatedTarget))) {
                    setTimeout(() => self.hourElement.select(), 50);
                }
            }
        }
        function minMaxDateSetter(type) {
            return (date) => {
                const dateObj = (self.config[`_${type}Date`] = self.parseDate(date, self.config.dateFormat));
                const inverseDateObj = self.config[`_${type === "min" ? "max" : "min"}Date`];
                if (dateObj !== undefined) {
                    self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                        dateObj.getHours() > 0 ||
                            dateObj.getMinutes() > 0 ||
                            dateObj.getSeconds() > 0;
                }
                if (self.selectedDates) {
                    self.selectedDates = self.selectedDates.filter((d) => isEnabled(d));
                    if (!self.selectedDates.length && type === "min")
                        setHoursFromDate(dateObj);
                    updateValue();
                }
                if (self.daysContainer) {
                    redraw();
                    if (dateObj !== undefined)
                        self.currentYearElement[type] = dateObj.getFullYear().toString();
                    else
                        self.currentYearElement.removeAttribute(type);
                    self.currentYearElement.disabled =
                        !!inverseDateObj &&
                            dateObj !== undefined &&
                            inverseDateObj.getFullYear() === dateObj.getFullYear();
                }
            };
        }
        function parseConfig() {
            const boolOpts = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "allowInvalidPreload",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile",
            ];
            const userConfig = Object.assign(Object.assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
            const formats = {};
            self.config.parseDate = userConfig.parseDate;
            self.config.formatDate = userConfig.formatDate;
            Object.defineProperty(self.config, "enable", {
                get: () => self.config._enable,
                set: (dates) => {
                    self.config._enable = parseDateRules(dates);
                },
            });
            Object.defineProperty(self.config, "disable", {
                get: () => self.config._disable,
                set: (dates) => {
                    self.config._disable = parseDateRules(dates);
                },
            });
            const timeMode = userConfig.mode === "time";
            if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                const defaultDateFormat = flatpickr.defaultConfig.dateFormat || options_defaults.dateFormat;
                formats.dateFormat =
                    userConfig.noCalendar || timeMode
                        ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                        : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
            }
            if (userConfig.altInput &&
                (userConfig.enableTime || timeMode) &&
                !userConfig.altFormat) {
                const defaultAltFormat = flatpickr.defaultConfig.altFormat || options_defaults.altFormat;
                formats.altFormat =
                    userConfig.noCalendar || timeMode
                        ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                        : defaultAltFormat + ` h:i${userConfig.enableSeconds ? ":S" : ""} K`;
            }
            Object.defineProperty(self.config, "minDate", {
                get: () => self.config._minDate,
                set: minMaxDateSetter("min"),
            });
            Object.defineProperty(self.config, "maxDate", {
                get: () => self.config._maxDate,
                set: minMaxDateSetter("max"),
            });
            const minMaxTimeSetter = (type) => (val) => {
                self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
            };
            Object.defineProperty(self.config, "minTime", {
                get: () => self.config._minTime,
                set: minMaxTimeSetter("min"),
            });
            Object.defineProperty(self.config, "maxTime", {
                get: () => self.config._maxTime,
                set: minMaxTimeSetter("max"),
            });
            if (userConfig.mode === "time") {
                self.config.noCalendar = true;
                self.config.enableTime = true;
            }
            Object.assign(self.config, formats, userConfig);
            for (let i = 0; i < boolOpts.length; i++)
                self.config[boolOpts[i]] =
                    self.config[boolOpts[i]] === true ||
                        self.config[boolOpts[i]] === "true";
            HOOKS.filter((hook) => self.config[hook] !== undefined).forEach((hook) => {
                self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
            });
            self.isMobile =
                !self.config.disableMobile &&
                    !self.config.inline &&
                    self.config.mode === "single" &&
                    !self.config.disable.length &&
                    !self.config.enable &&
                    !self.config.weekNumbers &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            for (let i = 0; i < self.config.plugins.length; i++) {
                const pluginConf = self.config.plugins[i](self) || {};
                for (const key in pluginConf) {
                    if (HOOKS.indexOf(key) > -1) {
                        self.config[key] = arrayify(pluginConf[key])
                            .map(bindToInstance)
                            .concat(self.config[key]);
                    }
                    else if (typeof userConfig[key] === "undefined")
                        self.config[key] = pluginConf[key];
                }
            }
            if (!userConfig.altInputClass) {
                self.config.altInputClass =
                    getInputElem().className + " " + self.config.altInputClass;
            }
            triggerEvent("onParseConfig");
        }
        function getInputElem() {
            return self.config.wrap
                ? element.querySelector("[data-input]")
                : element;
        }
        function setupLocale() {
            if (typeof self.config.locale !== "object" &&
                typeof flatpickr.l10ns[self.config.locale] === "undefined")
                self.config.errorHandler(new Error(`flatpickr: invalid locale ${self.config.locale}`));
            self.l10n = Object.assign(Object.assign({}, flatpickr.l10ns.default), (typeof self.config.locale === "object"
                ? self.config.locale
                : self.config.locale !== "default"
                    ? flatpickr.l10ns[self.config.locale]
                    : undefined));
            tokenRegex.K = `(${self.l10n.amPM[0]}|${self.l10n.amPM[1]}|${self.l10n.amPM[0].toLowerCase()}|${self.l10n.amPM[1].toLowerCase()})`;
            const userConfig = Object.assign(Object.assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
            if (userConfig.time_24hr === undefined &&
                flatpickr.defaultConfig.time_24hr === undefined) {
                self.config.time_24hr = self.l10n.time_24hr;
            }
            self.formatDate = createDateFormatter(self);
            self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        }
        function positionCalendar(customPositionElement) {
            if (typeof self.config.position === "function") {
                return void self.config.position(self, customPositionElement);
            }
            if (self.calendarContainer === undefined)
                return;
            triggerEvent("onPreCalendarPosition");
            const positionElement = customPositionElement || self._positionElement;
            const calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, ((acc, child) => acc + child.offsetHeight), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
                (configPosVertical !== "below" &&
                    distanceFromBottom < calendarHeight &&
                    inputBounds.top > calendarHeight);
            const top = window.pageYOffset +
                inputBounds.top +
                (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
            toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
            toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
            if (self.config.inline)
                return;
            let left = window.pageXOffset + inputBounds.left;
            let isCenter = false;
            let isRight = false;
            if (configPosHorizontal === "center") {
                left -= (calendarWidth - inputBounds.width) / 2;
                isCenter = true;
            }
            else if (configPosHorizontal === "right") {
                left -= calendarWidth - inputBounds.width;
                isRight = true;
            }
            toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
            toggleClass(self.calendarContainer, "arrowCenter", isCenter);
            toggleClass(self.calendarContainer, "arrowRight", isRight);
            const right = window.document.body.offsetWidth -
                (window.pageXOffset + inputBounds.right);
            const rightMost = left + calendarWidth > window.document.body.offsetWidth;
            const centerMost = right + calendarWidth > window.document.body.offsetWidth;
            toggleClass(self.calendarContainer, "rightMost", rightMost);
            if (self.config.static)
                return;
            self.calendarContainer.style.top = `${top}px`;
            if (!rightMost) {
                self.calendarContainer.style.left = `${left}px`;
                self.calendarContainer.style.right = "auto";
            }
            else if (!centerMost) {
                self.calendarContainer.style.left = "auto";
                self.calendarContainer.style.right = `${right}px`;
            }
            else {
                const doc = getDocumentStyleSheet();
                if (doc === undefined)
                    return;
                const bodyWidth = window.document.body.offsetWidth;
                const centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                const centerBefore = ".flatpickr-calendar.centerMost:before";
                const centerAfter = ".flatpickr-calendar.centerMost:after";
                const centerIndex = doc.cssRules.length;
                const centerStyle = `{left:${inputBounds.left}px;right:auto;}`;
                toggleClass(self.calendarContainer, "rightMost", false);
                toggleClass(self.calendarContainer, "centerMost", true);
                doc.insertRule(`${centerBefore},${centerAfter}${centerStyle}`, centerIndex);
                self.calendarContainer.style.left = `${centerLeft}px`;
                self.calendarContainer.style.right = "auto";
            }
        }
        function getDocumentStyleSheet() {
            let editableSheet = null;
            for (let i = 0; i < document.styleSheets.length; i++) {
                const sheet = document.styleSheets[i];
                try {
                    sheet.cssRules;
                }
                catch (err) {
                    continue;
                }
                editableSheet = sheet;
                break;
            }
            return editableSheet != null ? editableSheet : createStyleSheet();
        }
        function createStyleSheet() {
            const style = document.createElement("style");
            document.head.appendChild(style);
            return style.sheet;
        }
        function redraw() {
            if (self.config.noCalendar || self.isMobile)
                return;
            buildMonthSwitch();
            updateNavigationCurrentMonth();
            buildDays();
        }
        function focusAndClose() {
            self._input.focus();
            if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
                navigator.msMaxTouchPoints !== undefined) {
                setTimeout(self.close, 0);
            }
            else {
                self.close();
            }
        }
        function selectDate(e) {
            e.preventDefault();
            e.stopPropagation();
            const isSelectable = (day) => day.classList &&
                day.classList.contains("flatpickr-day") &&
                !day.classList.contains("flatpickr-disabled") &&
                !day.classList.contains("notAllowed");
            const t = findParent(getEventTarget(e), isSelectable);
            if (t === undefined)
                return;
            const target = t;
            const selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
            const shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
                selectedDate.getMonth() >
                    self.currentMonth + self.config.showMonths - 1) &&
                self.config.mode !== "range";
            self.selectedDateElem = target;
            if (self.config.mode === "single")
                self.selectedDates = [selectedDate];
            else if (self.config.mode === "multiple") {
                const selectedIndex = isDateSelected(selectedDate);
                if (selectedIndex)
                    self.selectedDates.splice(parseInt(selectedIndex), 1);
                else
                    self.selectedDates.push(selectedDate);
            }
            else if (self.config.mode === "range") {
                if (self.selectedDates.length === 2) {
                    self.clear(false, false);
                }
                self.latestSelectedDateObj = selectedDate;
                self.selectedDates.push(selectedDate);
                if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                    self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
            }
            setHoursFromInputs();
            if (shouldChangeMonth) {
                const isNewYear = self.currentYear !== selectedDate.getFullYear();
                self.currentYear = selectedDate.getFullYear();
                self.currentMonth = selectedDate.getMonth();
                if (isNewYear) {
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                triggerEvent("onMonthChange");
            }
            updateNavigationCurrentMonth();
            buildDays();
            updateValue();
            if (!shouldChangeMonth &&
                self.config.mode !== "range" &&
                self.config.showMonths === 1)
                focusOnDayElem(target);
            else if (self.selectedDateElem !== undefined &&
                self.hourElement === undefined) {
                self.selectedDateElem && self.selectedDateElem.focus();
            }
            if (self.hourElement !== undefined)
                self.hourElement !== undefined && self.hourElement.focus();
            if (self.config.closeOnSelect) {
                const single = self.config.mode === "single" && !self.config.enableTime;
                const range = self.config.mode === "range" &&
                    self.selectedDates.length === 2 &&
                    !self.config.enableTime;
                if (single || range) {
                    focusAndClose();
                }
            }
            triggerChange();
        }
        const CALLBACKS = {
            locale: [setupLocale, updateWeekdays],
            showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
            minDate: [jumpToDate],
            maxDate: [jumpToDate],
            clickOpens: [
                () => {
                    if (self.config.clickOpens === true) {
                        bind(self._input, "focus", self.open);
                        bind(self._input, "click", self.open);
                    }
                    else {
                        self._input.removeEventListener("focus", self.open);
                        self._input.removeEventListener("click", self.open);
                    }
                },
            ],
        };
        function set(option, value) {
            if (option !== null && typeof option === "object") {
                Object.assign(self.config, option);
                for (const key in option) {
                    if (CALLBACKS[key] !== undefined)
                        CALLBACKS[key].forEach((x) => x());
                }
            }
            else {
                self.config[option] = value;
                if (CALLBACKS[option] !== undefined)
                    CALLBACKS[option].forEach((x) => x());
                else if (HOOKS.indexOf(option) > -1)
                    self.config[option] = arrayify(value);
            }
            self.redraw();
            updateValue(true);
        }
        function setSelectedDate(inputDate, format) {
            let dates = [];
            if (inputDate instanceof Array)
                dates = inputDate.map((d) => self.parseDate(d, format));
            else if (inputDate instanceof Date || typeof inputDate === "number")
                dates = [self.parseDate(inputDate, format)];
            else if (typeof inputDate === "string") {
                switch (self.config.mode) {
                    case "single":
                    case "time":
                        dates = [self.parseDate(inputDate, format)];
                        break;
                    case "multiple":
                        dates = inputDate
                            .split(self.config.conjunction)
                            .map((date) => self.parseDate(date, format));
                        break;
                    case "range":
                        dates = inputDate
                            .split(self.l10n.rangeSeparator)
                            .map((date) => self.parseDate(date, format));
                        break;
                    default:
                        break;
                }
            }
            else
                self.config.errorHandler(new Error(`Invalid date supplied: ${JSON.stringify(inputDate)}`));
            self.selectedDates = (self.config.allowInvalidPreload
                ? dates
                : dates.filter((d) => d instanceof Date && isEnabled(d, false)));
            if (self.config.mode === "range")
                self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
        }
        function setDate(date, triggerChange = false, format = self.config.dateFormat) {
            if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
                return self.clear(triggerChange);
            setSelectedDate(date, format);
            self.latestSelectedDateObj =
                self.selectedDates[self.selectedDates.length - 1];
            self.redraw();
            jumpToDate(undefined, triggerChange);
            setHoursFromDate();
            if (self.selectedDates.length === 0) {
                self.clear(false);
            }
            updateValue(triggerChange);
            if (triggerChange)
                triggerEvent("onChange");
        }
        function parseDateRules(arr) {
            return arr
                .slice()
                .map((rule) => {
                if (typeof rule === "string" ||
                    typeof rule === "number" ||
                    rule instanceof Date) {
                    return self.parseDate(rule, undefined, true);
                }
                else if (rule &&
                    typeof rule === "object" &&
                    rule.from &&
                    rule.to)
                    return {
                        from: self.parseDate(rule.from, undefined),
                        to: self.parseDate(rule.to, undefined),
                    };
                return rule;
            })
                .filter((x) => x);
        }
        function setupDates() {
            self.selectedDates = [];
            self.now = self.parseDate(self.config.now) || new Date();
            const preloadedDate = self.config.defaultDate ||
                ((self.input.nodeName === "INPUT" ||
                    self.input.nodeName === "TEXTAREA") &&
                    self.input.placeholder &&
                    self.input.value === self.input.placeholder
                    ? null
                    : self.input.value);
            if (preloadedDate)
                setSelectedDate(preloadedDate, self.config.dateFormat);
            self._initialDate =
                self.selectedDates.length > 0
                    ? self.selectedDates[0]
                    : self.config.minDate &&
                        self.config.minDate.getTime() > self.now.getTime()
                        ? self.config.minDate
                        : self.config.maxDate &&
                            self.config.maxDate.getTime() < self.now.getTime()
                            ? self.config.maxDate
                            : self.now;
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
            if (self.selectedDates.length > 0)
                self.latestSelectedDateObj = self.selectedDates[0];
            if (self.config.minTime !== undefined)
                self.config.minTime = self.parseDate(self.config.minTime, "H:i");
            if (self.config.maxTime !== undefined)
                self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
            self.minDateHasTime =
                !!self.config.minDate &&
                    (self.config.minDate.getHours() > 0 ||
                        self.config.minDate.getMinutes() > 0 ||
                        self.config.minDate.getSeconds() > 0);
            self.maxDateHasTime =
                !!self.config.maxDate &&
                    (self.config.maxDate.getHours() > 0 ||
                        self.config.maxDate.getMinutes() > 0 ||
                        self.config.maxDate.getSeconds() > 0);
        }
        function setupInputs() {
            self.input = getInputElem();
            if (!self.input) {
                self.config.errorHandler(new Error("Invalid input element specified"));
                return;
            }
            self.input._type = self.input.type;
            self.input.type = "text";
            self.input.classList.add("flatpickr-input");
            self._input = self.input;
            if (self.config.altInput) {
                self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
                self._input = self.altInput;
                self.altInput.placeholder = self.input.placeholder;
                self.altInput.disabled = self.input.disabled;
                self.altInput.required = self.input.required;
                self.altInput.tabIndex = self.input.tabIndex;
                self.altInput.type = "text";
                self.input.setAttribute("type", "hidden");
                if (!self.config.static && self.input.parentNode)
                    self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
            }
            if (!self.config.allowInput)
                self._input.setAttribute("readonly", "readonly");
            self._positionElement = self.config.positionElement || self._input;
        }
        function setupMobile() {
            const inputType = self.config.enableTime
                ? self.config.noCalendar
                    ? "time"
                    : "datetime-local"
                : "date";
            self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
            self.mobileInput.tabIndex = 1;
            self.mobileInput.type = inputType;
            self.mobileInput.disabled = self.input.disabled;
            self.mobileInput.required = self.input.required;
            self.mobileInput.placeholder = self.input.placeholder;
            self.mobileFormatStr =
                inputType === "datetime-local"
                    ? "Y-m-d\\TH:i:S"
                    : inputType === "date"
                        ? "Y-m-d"
                        : "H:i:S";
            if (self.selectedDates.length > 0) {
                self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
            }
            if (self.config.minDate)
                self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
            if (self.config.maxDate)
                self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
            if (self.input.getAttribute("step"))
                self.mobileInput.step = String(self.input.getAttribute("step"));
            self.input.type = "hidden";
            if (self.altInput !== undefined)
                self.altInput.type = "hidden";
            try {
                if (self.input.parentNode)
                    self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
            }
            catch (_a) { }
            bind(self.mobileInput, "change", (e) => {
                self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
                triggerEvent("onChange");
                triggerEvent("onClose");
            });
        }
        function toggle(e) {
            if (self.isOpen === true)
                return self.close();
            self.open(e);
        }
        function triggerEvent(event, data) {
            if (self.config === undefined)
                return;
            const hooks = self.config[event];
            if (hooks !== undefined && hooks.length > 0) {
                for (let i = 0; hooks[i] && i < hooks.length; i++)
                    hooks[i](self.selectedDates, self.input.value, self, data);
            }
            if (event === "onChange") {
                self.input.dispatchEvent(createEvent("change"));
                self.input.dispatchEvent(createEvent("input"));
            }
        }
        function createEvent(name) {
            const e = document.createEvent("Event");
            e.initEvent(name, true, true);
            return e;
        }
        function isDateSelected(date) {
            for (let i = 0; i < self.selectedDates.length; i++) {
                if (compareDates(self.selectedDates[i], date) === 0)
                    return "" + i;
            }
            return false;
        }
        function isDateInRange(date) {
            if (self.config.mode !== "range" || self.selectedDates.length < 2)
                return false;
            return (compareDates(date, self.selectedDates[0]) >= 0 &&
                compareDates(date, self.selectedDates[1]) <= 0);
        }
        function updateNavigationCurrentMonth() {
            if (self.config.noCalendar || self.isMobile || !self.monthNav)
                return;
            self.yearElements.forEach((yearElement, i) => {
                const d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                if (self.config.showMonths > 1 ||
                    self.config.monthSelectorType === "static") {
                    self.monthElements[i].textContent =
                        monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
                }
                else {
                    self.monthsDropdownContainer.value = d.getMonth().toString();
                }
                yearElement.value = d.getFullYear().toString();
            });
            self._hidePrevMonthArrow =
                self.config.minDate !== undefined &&
                    (self.currentYear === self.config.minDate.getFullYear()
                        ? self.currentMonth <= self.config.minDate.getMonth()
                        : self.currentYear < self.config.minDate.getFullYear());
            self._hideNextMonthArrow =
                self.config.maxDate !== undefined &&
                    (self.currentYear === self.config.maxDate.getFullYear()
                        ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                        : self.currentYear > self.config.maxDate.getFullYear());
        }
        function getDateStr(format) {
            return self.selectedDates
                .map((dObj) => self.formatDate(dObj, format))
                .filter((d, i, arr) => self.config.mode !== "range" ||
                self.config.enableTime ||
                arr.indexOf(d) === i)
                .join(self.config.mode !== "range"
                ? self.config.conjunction
                : self.l10n.rangeSeparator);
        }
        function updateValue(triggerChange = true) {
            if (self.mobileInput !== undefined && self.mobileFormatStr) {
                self.mobileInput.value =
                    self.latestSelectedDateObj !== undefined
                        ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                        : "";
            }
            self.input.value = getDateStr(self.config.dateFormat);
            if (self.altInput !== undefined) {
                self.altInput.value = getDateStr(self.config.altFormat);
            }
            if (triggerChange !== false)
                triggerEvent("onValueUpdate");
        }
        function onMonthNavClick(e) {
            const eventTarget = getEventTarget(e);
            const isPrevMonth = self.prevMonthNav.contains(eventTarget);
            const isNextMonth = self.nextMonthNav.contains(eventTarget);
            if (isPrevMonth || isNextMonth) {
                changeMonth(isPrevMonth ? -1 : 1);
            }
            else if (self.yearElements.indexOf(eventTarget) >= 0) {
                eventTarget.select();
            }
            else if (eventTarget.classList.contains("arrowUp")) {
                self.changeYear(self.currentYear + 1);
            }
            else if (eventTarget.classList.contains("arrowDown")) {
                self.changeYear(self.currentYear - 1);
            }
        }
        function timeWrapper(e) {
            e.preventDefault();
            const isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
            if (self.amPM !== undefined && eventTarget === self.amPM) {
                self.amPM.textContent =
                    self.l10n.amPM[utils_int(self.amPM.textContent === self.l10n.amPM[0])];
            }
            const min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
                (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
            let newValue = curValue + step * delta;
            if (typeof input.value !== "undefined" && input.value.length === 2) {
                const isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                if (newValue < min) {
                    newValue =
                        max +
                            newValue +
                            utils_int(!isHourElem) +
                            (utils_int(isHourElem) && utils_int(!self.amPM));
                    if (isMinuteElem)
                        incrementNumInput(undefined, -1, self.hourElement);
                }
                else if (newValue > max) {
                    newValue =
                        input === self.hourElement ? newValue - max - utils_int(!self.amPM) : min;
                    if (isMinuteElem)
                        incrementNumInput(undefined, 1, self.hourElement);
                }
                if (self.amPM &&
                    isHourElem &&
                    (step === 1
                        ? newValue + curValue === 23
                        : Math.abs(newValue - curValue) > step)) {
                    self.amPM.textContent =
                        self.l10n.amPM[utils_int(self.amPM.textContent === self.l10n.amPM[0])];
                }
                input.value = pad(newValue);
            }
        }
        init();
        return self;
    }
    function _flatpickr(nodeList, config) {
        const nodes = Array.prototype.slice
            .call(nodeList)
            .filter((x) => x instanceof HTMLElement);
        const instances = [];
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            try {
                if (node.getAttribute("data-fp-omit") !== null)
                    continue;
                if (node._flatpickr !== undefined) {
                    node._flatpickr.destroy();
                    node._flatpickr = undefined;
                }
                node._flatpickr = FlatpickrInstance(node, config || {});
                instances.push(node._flatpickr);
            }
            catch (e) {
                console.error(e);
            }
        }
        return instances.length === 1 ? instances[0] : instances;
    }
    if (typeof HTMLElement !== "undefined" &&
        typeof HTMLCollection !== "undefined" &&
        typeof NodeList !== "undefined") {
        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
        HTMLElement.prototype.flatpickr = function (config) {
            return _flatpickr([this], config);
        };
    }
    var flatpickr = function (selector, config) {
        if (typeof selector === "string") {
            return _flatpickr(window.document.querySelectorAll(selector), config);
        }
        else if (selector instanceof Node) {
            return _flatpickr([selector], config);
        }
        else {
            return _flatpickr(selector, config);
        }
    };
    flatpickr.defaultConfig = {};
    flatpickr.l10ns = {
        en: Object.assign({}, l10n_default),
        default: Object.assign({}, l10n_default),
    };
    flatpickr.localize = (l10n) => {
        flatpickr.l10ns.default = Object.assign(Object.assign({}, flatpickr.l10ns.default), l10n);
    };
    flatpickr.setDefaults = (config) => {
        flatpickr.defaultConfig = Object.assign(Object.assign({}, flatpickr.defaultConfig), config);
    };
    flatpickr.parseDate = createDateParser({});
    flatpickr.formatDate = createDateFormatter({});
    flatpickr.compareDates = compareDates;
    if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
        jQuery.fn.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
    }
    Date.prototype.fp_incr = function (days) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };
    if (typeof window !== "undefined") {
        window.flatpickr = flatpickr;
    }
    /* harmony default export */ var esm = (flatpickr);
    
    // CONCATENATED MODULE: ./src/components/datetimepicker/datetimepicker.js
    
    const Brazilian = __webpack_require__(27).default.pt
    
    class datetimepicker_BRDateTimePicker {
      constructor(name, component) {
        this.name = name
        this.component = component
        // localization global
        esm.localize(Brazilian)
    
        this._buildDateTimePicker()
      }
    
      _buildDateTimePicker() {
        let format = 'd/m/Y'
        let time = false
        let noCalendar = false
        switch (this.component.getAttribute('data-type')) {
          case 'date':
            format = 'd/m/Y'
            time = false
            noCalendar = false
            break
          case 'time':
            format = 'H:i'
            time = true
            noCalendar = true
            break
          case 'datetime-local':
            format = 'd/m/Y H:i'
            time = true
            noCalendar = false
            break
          default:
            format = 'd/m/Y'
            time = false
            noCalendar = false
            break
        }
    
        const config = {
          dateFormat: format,
          enableTime: time,
          minDate: 'today',
          minuteIncrement: 1,
          mode: this.component.getAttribute('data-mode'),
          nextArrow:
            '<button class="br-button circle small" type="button"><i class="fas fa-angle-right"></i></button>',
          noCalendar: noCalendar,
          prevArrow:
            '<button class="br-button circle small" type="button"><i class="fas fas fa-angle-left"></i></button>',
          time_24hr: true,
          wrap: true,
        }
    
        esm(this.component, config)
      }
    }
    
    const datetimepickerList = []
    for (const brDateTimePicker of window.document.querySelectorAll(
      '.br-datetimepicker'
    )) {
      datetimepickerList.push(
        new datetimepicker_BRDateTimePicker('br-datetimepicker', brDateTimePicker)
      )
    }
    
    /* harmony default export */ var datetimepicker = __webpack_exports__["default"] = (datetimepicker_BRDateTimePicker);
    
    
    /***/ }),
    /* 24 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__);
    
    // CONCATENATED MODULE: ./src/components/swipe/swipe.js
    class SwipeEventDispatcher {
      constructor(element, options = {}) {
        this.evtMap = {
          SWIPE_DOWN: [],
          SWIPE_LEFT: [],
          SWIPE_RIGHT: [],
          SWIPE_UP: [],
        }
        this.xDown = null
        this.yDown = null
        this.element = element
        this.options = Object.assign({ triggerPercent: 0.3 }, options)
        element.addEventListener(
          'touchstart',
          (evt) => {
            return this.handleTouchStart(evt)
          },
          false
        )
        element.addEventListener(
          'touchend',
          (evt) => {
            return this.handleTouchEnd(evt)
          },
          false
        )
      }
    
      on(evt, cb) {
        this.evtMap[evt].push(cb)
      }
    
      off(evt, lcb) {
        this.evtMap[evt] = this.evtMap[evt].filter((cb) => {
          return cb !== lcb
        })
      }
    
      trigger(evt, data) {
        this.evtMap[evt].map((handler) => {
          return handler(data)
        })
      }
    
      handleTouchStart(evt) {
        this.xDown = evt.touches[0].clientX
        this.yDown = evt.touches[0].clientY
      }
    
      handleTouchEnd(evt) {
        const deltaX = evt.changedTouches[0].clientX - this.xDown
        const deltaY = evt.changedTouches[0].clientY - this.yDown
        const distMoved = Math.abs(
          Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY
        )
        const activePct = distMoved / this.element.offsetWidth
        if (activePct > this.options.triggerPercent) {
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            deltaX < 0 ? this.trigger('SWIPE_LEFT') : this.trigger('SWIPE_RIGHT')
          } else {
            deltaY > 0 ? this.trigger('SWIPE_DOWN') : this.trigger('SWIPE_UP')
          }
        }
      }
    }
    /* harmony default export */ var swipe = (SwipeEventDispatcher);
    
    // CONCATENATED MODULE: ./src/components/wizard/wizard.js
    
    class wizard_BRWizard {
      constructor(name, component) {
        this.name = name
        this.component = component
        // DOM elements
        this.DOMstrings = {
          stepFormPanelClass: 'wizard-panel',
          // stepFormPanels: document.querySelectorAll('.wizard-panel'),
          stepFormPanels: this.component.querySelectorAll('.wizard-panel'),
          stepNextBtnClass: 'wizard-btn-next',
          stepPrevBtnClass: 'wizard-btn-prev',
          // stepsBar: document.querySelector('.wizard-progress'),
          stepsBar: this.component.querySelector('.wizard-progress'),
          stepsBarClass: 'wizard-progress',
          stepsBtnClass: 'wizard-progress-btn',
          // stepsBtns: document.querySelectorAll(`.wizard-progress-btn`),
          stepsBtns: this.component.querySelectorAll('.wizard-progress-btn'),
          // stepsForm: document.querySelector('.wizard-form'),
          stepsForm: this.component.querySelector('.wizard-form'),
        }
        // remove class from a set of items
        this.removeAttributes = (elemSet, attrName) => {
          elemSet.forEach((elem) => {
            elem.removeAttribute(attrName)
          })
        }
        // return exect parent node of the element
        this.findParent = (elem, parentClass) => {
          let currentNode = elem
          while (!currentNode.classList.contains(parentClass)) {
            currentNode = currentNode.parentNode
          }
          return currentNode
        }
        // get active button step number
        this.getActiveStep = (elem) => {
          return Array.from(this.DOMstrings.stepsBtns).indexOf(elem)
        }
        // set all steps before clicked (and clicked too) to active
        this.setActiveStep = (activeStepNum) => {
          // remove active state from all the state
          this.removeAttributes(this.DOMstrings.stepsBtns, 'active')
          // this.removeAttributes(this.DOMstrings.stepsBtns, 'disabled')
    
          // set picked items to active
          this.DOMstrings.stepsBtns.forEach((elem, index) => {
            if (index === activeStepNum) {
              elem.removeAttribute('disabled')
              elem.setAttribute('active', '')
            }
            // if (index > activeStepNum) {
            //   elem.setAttribute('disabled', 'disabled')
            // }
          })
        }
        // get active panel
        this.getActivePanel = () => {
          let activePanel
          this.DOMstrings.stepFormPanels.forEach((elem) => {
            if (elem.hasAttribute('active')) {
              activePanel = elem
            }
          })
          return activePanel
        }
        // open active panel (and close unactive panels)
        this.setActivePanel = (activePanelNum) => {
          // remove active class from all the panels
          this.removeAttributes(this.DOMstrings.stepFormPanels, 'active')
          // show active panel
          this.DOMstrings.stepFormPanels.forEach((elem, index) => {
            if (index === activePanelNum) {
              elem.setAttribute('active', '')
            }
          })
        }
        this.setStepsNum = () => {
          this.DOMstrings.stepsBtns.forEach((elem, index) => {
            elem.setAttribute('step', index + 1)
          })
        }
        this.setStep = (num) => {
          const activeStep = num <= this.DOMstrings.stepsBtns.length ? num - 1 : 0
          this.setActiveStep(activeStep)
          this.setActivePanel(activeStep)
        }
        this.collapseSteps = () => {
          this.component.setAttribute('collapsed', '')
        }
        this.expandSteps = () => {
          this.component.removeAttribute('collapsed')
        }
        this._setBehavior()
      }
    
      _setBehavior() {
        // STEPS BAR CLICK FUNCTION
        this.DOMstrings.stepsBar.addEventListener('click', (e) => {
          // check if click target is a step button
          const eventTarget = e.target
          if (!eventTarget.classList.contains(`${this.DOMstrings.stepsBtnClass}`)) {
            e.target.parentNode.click()
            return
          }
          // get active button step number
          const activeStep = this.getActiveStep(eventTarget)
          // set all steps before clicked (and clicked too) to active
          this.setActiveStep(activeStep)
          // open active panel
          this.setActivePanel(activeStep)
        })
        // PREV/NEXT BTNS CLICK
        this.DOMstrings.stepsForm.addEventListener('click', (e) => {
          const eventTarget = e.target
          // check if we clicked on `PREV` or NEXT` buttons
          if (
            !(
              eventTarget.classList.contains(
                `${this.DOMstrings.stepPrevBtnClass}`
              ) ||
              eventTarget.classList.contains(`${this.DOMstrings.stepNextBtnClass}`)
            )
          ) {
            return
          }
          // find active panel
          const activePanel = this.findParent(
            eventTarget,
            `${this.DOMstrings.stepFormPanelClass}`
          )
          let activePanelNum = Array.from(this.DOMstrings.stepFormPanels).indexOf(
            activePanel
          )
          // set active step and active panel onclick
          if (
            eventTarget.classList.contains(`${this.DOMstrings.stepPrevBtnClass}`)
          ) {
            activePanelNum -= 1
            activePanel.style.left = '1%'
          } else {
            activePanelNum += 1
            activePanel.style.left = '-1%'
          }
          this.setActiveStep(activePanelNum)
          this.setActivePanel(activePanelNum)
        })
        // Set Steps label number
        this.setStepsNum()
        // Set default active step
        if (this.component.hasAttribute('step')) {
          this.setStep(this.component.getAttribute('step'))
        }
        // set steps buttons grid style if it needs to scroll horizontaly
        if (
          this.component.hasAttribute('scroll') &&
          !this.component.hasAttribute('vertical')
        ) {
          const stepsWidth =
            Math.round(100 / this.DOMstrings.stepsBtns.length) - 0.5
          this.DOMstrings.stepsBar.style.gridTemplateColumns = `repeat(auto-fit, minmax(100px, ${stepsWidth}% ))`
        }
        // Swipe
        const dispatcher = new swipe(this.DOMstrings.stepsBar)
        if (this.component.hasAttribute('vertical')) {
          dispatcher.on('SWIPE_LEFT', () => {
            this.collapseSteps()
          })
          dispatcher.on('SWIPE_RIGHT', () => {
            this.expandSteps()
          })
          this.DOMstrings.stepsForm.ontouchstart = () => {
            this.collapseSteps()
          }
        } else {
          this.DOMstrings.stepsBar.ontouchstart = () => {
            this.expandSteps()
          }
          this.DOMstrings.stepsForm.ontouchstart = () => {
            this.collapseSteps()
          }
        }
      }
    }
    const wizardList = []
    for (const brWizard of window.document.querySelectorAll('.br-wizard')) {
      wizardList.push(new wizard_BRWizard('br-wizard', brWizard))
    }
    /* harmony default export */ var wizard = __webpack_exports__["default"] = (wizard_BRWizard);
    
    
    /***/ }),
    /* 25 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
    /* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intro_js__WEBPACK_IMPORTED_MODULE_0__);
    
    
    class BROnboarding {
      constructor (name, component) {
        this.name = name
        this.component = component
        this.introJs = new intro_js__WEBPACK_IMPORTED_MODULE_0___default.a()
        this._setBehavior()
      }
    
      buscarSteps (url) {
        window
          .fetch(url)
          .then(response => response.json())
          .then(data => (this.stepsjson = data))
          .catch(console.error)
      }
    
      _setBehavior () {
        if (this.component) {
          if (
            this.component.getAttribute('data-steps') !== undefined &&
            this.component.getAttribute('data-steps') !== null
          ) {
            this.steps = this.component.getAttribute('data-steps')
            this.buscarSteps(this.component.getAttribute('data-steps'))
          }
          this.component.addEventListener('click', event => {
            this.start(this.stepsjson)
          })
        }
      }
    
      introJsConfig () {
        const introjsTooltip = window.document.querySelector('.introjs-tooltip')
        const introjsTooltipSkip = introjsTooltip.querySelector(
          '.introjs-skipbutton'
        )
    
        const introjsSkip = document.createElement('div')
        const introjsSkipButton = document.createElement('button')
    
        introjsSkipButton.textContent = introjsTooltipSkip.text
        introjsSkipButton.classList.add('br-button', 'small')
        introjsSkipButton.addEventListener('click', () => intro_js__WEBPACK_IMPORTED_MODULE_0___default()().exit())
    
        introjsSkip.classList.add('introjs-skip')
        introjsSkip.appendChild(introjsSkipButton)
    
        introjsTooltip.querySelector('.introjs-tooltipbuttons').before(introjsSkip)
      }
    
      start (steps) {
        this.introJs
          .setOptions({
            prevLabel: '<i class="fas fa-angle-left" aria-hidden="true"></i>',
            nextLabel: '<i class="fas fa-angle-right" aria-hidden="true"></i>',
            skipLabel: 'Pular Tutorial',
            doneLabel: 'Fechar',
            steps: steps
          })
          .onafterchange(targetElement => {
            if (document.querySelector('.introjs-skip')) {
            } else {
              new BROnboarding().introJsConfig()
            }
          })
          .start()
      }
    }
    
    const bronboardinglist = []
    for (const brOnBoarding of window.document.querySelectorAll(
      '[data-trigger="onboarding"]'
    )) {
      bronboardinglist.push(new BROnboarding('br-boarding', brOnBoarding))
    }
    
    /* harmony default export */ __webpack_exports__["default"] = (BROnboarding);
    
    
    /***/ }),
    /* 26 */
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    if (typeof Object.assign !== "function") {
        Object.assign = function (target, ...args) {
            if (!target) {
                throw TypeError("Cannot convert undefined or null to object");
            }
            for (const source of args) {
                if (source) {
                    Object.keys(source).forEach((key) => (target[key] = source[key]));
                }
            }
            return target;
        };
    }
    
    
    /***/ }),
    /* 27 */
    /***/ (function(module, exports, __webpack_require__) {
    
    (function (global, factory) {
       true ? factory(exports) :
      undefined;
    }(this, (function (exports) { 'use strict';
    
      var fp = typeof window !== "undefined" && window.flatpickr !== undefined
          ? window.flatpickr
          : {
              l10ns: {},
          };
      var Portuguese = {
          weekdays: {
              shorthand: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
              longhand: [
                  "Domingo",
                  "Segunda-feira",
                  "Terça-feira",
                  "Quarta-feira",
                  "Quinta-feira",
                  "Sexta-feira",
                  "Sábado",
              ],
          },
          months: {
              shorthand: [
                  "Jan",
                  "Fev",
                  "Mar",
                  "Abr",
                  "Mai",
                  "Jun",
                  "Jul",
                  "Ago",
                  "Set",
                  "Out",
                  "Nov",
                  "Dez",
              ],
              longhand: [
                  "Janeiro",
                  "Fevereiro",
                  "Março",
                  "Abril",
                  "Maio",
                  "Junho",
                  "Julho",
                  "Agosto",
                  "Setembro",
                  "Outubro",
                  "Novembro",
                  "Dezembro",
              ],
          },
          rangeSeparator: " até ",
          time_24hr: true,
      };
      fp.l10ns.pt = Portuguese;
      var pt = fp.l10ns;
    
      exports.Portuguese = Portuguese;
      exports.default = pt;
    
      Object.defineProperty(exports, '__esModule', { value: true });
    
    })));
    
    
    /***/ }),
    /* 28 */
    /***/ (function(module, exports) {
    
    var g;
    
    // This works in non-strict mode
    g = (function() {
        return this;
    })();
    
    try {
        // This works if eval is allowed (see CSP)
        g = g || new Function("return this")();
    } catch (e) {
        // This works if the window reference is available
        if (typeof window === "object") g = window;
    }
    
    // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}
    
    module.exports = g;
    
    
    /***/ }),
    /* 29 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Globals; });
    /* harmony import */ var _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
    /* harmony import */ var _components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
    /* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
    /* harmony import */ var _components_cookiebar_cookiebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
    /* harmony import */ var _components_datetimepicker_datetimepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
    /* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
    /* harmony import */ var _components_input_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
    /* harmony import */ var _components_item_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
    /* harmony import */ var _components_list_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
    /* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
    /* harmony import */ var _components_message_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);
    /* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15);
    /* harmony import */ var _components_notification_notification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16);
    /* harmony import */ var _components_pagination_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17);
    /* harmony import */ var _components_scrim_scrim__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(0);
    /* harmony import */ var _components_select_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18);
    /* harmony import */ var _components_tab_tab__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19);
    /* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20);
    /* harmony import */ var _components_tag_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(21);
    /* harmony import */ var _components_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2);
    /* harmony import */ var _components_upload_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(22);
    /* harmony import */ var _components_wizard_wizard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(24);
    /* harmony import */ var _pages_onboarding_onboarding__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(25);
    // Script Templates
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    class Globals {
      initInstanceAll() {
        this.initInstanceAccordion()
        this.initInstanceBreadcrumb()
        this.initInstanceCard()
        this.initInstanceCookiebar()
        this.initInstanceDateTimePicker()
        this.initInstanceHeader()
        this.initInstanceInput()
        this.initInstanceItem()
        this.initInstanceList()
        this.initInstanceMenu()
        this.initInstanceMessage()
        this.initInstanceModal()
        this.initInstanceNotification()
        this.initInstanceOnboarding()
        this.initInstancePagination()
        this.initInstanceScrim()
        this.initInstanceSelect()
        this.initInstanceTable()
        this.initInstanceTabs()
        this.initInstanceTab()
        this.initInstanceTooltip()
        this.initInstanceUpload()
        this.initInstanceWizard()
      }
    
      initInstanceOnboarding() {
        const bronboardinglist = []
        for (const brOnBoarding of window.document.querySelectorAll(
          '[data-trigger="onboarding"]'
        )) {
          bronboardinglist.push(new _pages_onboarding_onboarding__WEBPACK_IMPORTED_MODULE_22__["default"]('br-boarding', brOnBoarding))
        }
      }
    
      initInstanceAccordion() {
        const accordionList = []
        for (const brAccordion of window.document.querySelectorAll(
          '.br-accordion'
        )) {
          accordionList.push(new _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__["default"]('br-accordion', brAccordion))
        }
      }
    
      initInstanceBreadcrumb() {
        const breadcrumbList = []
        for (const brBreadcrumb of window.document.querySelectorAll(
          '.br-breadcrumb'
        )) {
          breadcrumbList.push(new _components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"]('br-breadcrumb', brBreadcrumb))
        }
      }
    
      initInstanceDateTimePicker() {
        const datetimepickerList = []
        for (const brDateTimePicker of window.document.querySelectorAll(
          '.br-datetimepicker'
        )) {
          datetimepickerList.push(
            new _components_datetimepicker_datetimepicker__WEBPACK_IMPORTED_MODULE_4__["default"]('br-datetimepicker', brDateTimePicker)
          )
        }
      }
    
      initInstanceHeader() {
        const headerList = []
    
        for (const brHeader of window.document.querySelectorAll('.br-header')) {
          headerList.push(new _components_header_header__WEBPACK_IMPORTED_MODULE_5__["default"]('br-header', brHeader))
        }
      }
    
      initInstanceInput() {
        const countries = [
          'Afeganistão',
          'África do Sul',
          'Albânia',
          'Alemanha',
          'Andorra',
          'Angola',
          'Anguilla',
          'Antártida',
          'Antígua e Barbuda',
          'Antilhas Holandesas',
          'Arábia Saudita',
          'Argélia',
          'Argentina',
          'Armênia',
          'Aruba',
          'Austrália',
          'Áustria',
          'Azerbaijão',
          'Bahamas',
          'Bahrein',
          'Bangladesh',
          'Barbados',
          'Belarus',
          'Bélgica',
          'Belize',
          'Benin',
          'Bermudas',
          'Bolívia',
          'Bósnia-Herzegóvina',
          'Botsuana',
          'Brasil',
          'Brunei',
          'Bulgária',
          'Burkina Fasso',
          'Burundi',
          'Butão',
          'Cabo Verde',
          'Camarões',
          'Camboja',
          'Canadá',
          'Cazaquistão',
          'Chade',
          'Chile',
          'China',
          'Chipre',
          'Cingapura',
          'Colômbia',
          'Congo',
          'Coréia do Norte',
          'Coréia do Sul',
          'Costa do Marfim',
          'Costa Rica',
          'Croácia (Hrvatska)',
          'Cuba',
          'Dinamarca',
          'Djibuti',
          'Dominica',
          'Egito',
          'El Salvador',
          'Emirados Árabes Unidos',
          'Equador',
          'Eritréia',
          'Eslováquia',
          'Eslovênia',
          'Espanha',
          'Estados Unidos',
          'Estônia',
          'Etiópia',
          'Fiji',
          'Filipinas',
          'Finlândia',
          'França',
          'Gabão',
          'Gâmbia',
          'Gana',
          'Geórgia',
          'Gibraltar',
          'Grã-Bretanha (Reino Unido, UK)',
          'Granada',
          'Grécia',
          'Groelândia',
          'Guadalupe',
          'Guam (Território dos Estados Unidos)',
          'Guatemala',
          'Guernsey',
          'Guiana',
          'Guiana Francesa',
          'Guiné',
          'Guiné Equatorial',
          'Guiné-Bissau',
          'Haiti',
          'Holanda',
          'Honduras',
          'Hong Kong',
          'Hungria',
          'Iêmen',
          'Ilha Bouvet (Território da Noruega)',
          'Ilha do Homem',
          'Ilha Natal',
          'Ilha Pitcairn',
          'Ilha Reunião',
          'Ilhas Aland',
          'Ilhas Cayman',
          'Ilhas Cocos',
          'Ilhas Comores',
          'Ilhas Cook',
          'Ilhas Faroes',
          'Ilhas Falkland (Malvinas)',
          'Ilhas Geórgia do Sul e Sandwich do Sul',
          'Ilhas Heard e McDonald (Território da Austrália)',
          'Ilhas Marianas do Norte',
          'Ilhas Marshall',
          'Ilhas Menores dos Estados Unidos',
          'Ilhas Norfolk',
          'Ilhas Seychelles',
          'Ilhas Solomão',
          'Ilhas Svalbard e Jan Mayen',
          'Ilhas Tokelau',
          'Ilhas Turks e Caicos',
          'Ilhas Virgens (Estados Unidos)',
          'Ilhas Virgens (Inglaterra)',
          'Ilhas Wallis e Futuna',
          'índia',
          'Indonésia',
          'Irã',
          'Iraque',
          'Irlanda',
          'Islândia',
          'Israel',
          'Itália',
          'Jamaica',
          'Japão',
          'Jersey',
          'Jordânia',
          'Kênia',
          'Kiribati',
          'Kuait',
          'Laos',
          'Látvia',
          'Lesoto',
          'Líbano',
          'Libéria',
          'Líbia',
          'Liechtenstein',
          'Lituânia',
          'Luxemburgo',
          'Macau',
          'Macedônia (República Yugoslava)',
          'Madagascar',
          'Malásia',
          'Malaui',
          'Maldivas',
          'Mali',
          'Malta',
          'Marrocos',
          'Martinica',
          'Maurício',
          'Mauritânia',
          'Mayotte',
          'México',
          'Micronésia',
          'Moçambique',
          'Moldova',
          'Mônaco',
          'Mongólia',
          'Montenegro',
          'Montserrat',
          'Myanma',
          'Namíbia',
          'Nauru',
          'Nepal',
          'Nicarágua',
          'Níger',
          'Nigéria',
          'Niue',
          'Noruega',
          'Nova Caledônia',
          'Nova Zelândia',
          'Omã',
          'Palau',
          'Panamá',
          'Papua-Nova Guiné',
          'Paquistão',
          'Paraguai',
          'Peru',
          'Polinésia Francesa',
          'Polônia',
          'Porto Rico',
          'Portugal',
          'Qatar',
          'Quirguistão',
          'República Centro-Africana',
          'República Democrática do Congo',
          'República Dominicana',
          'República Tcheca',
          'Romênia',
          'Ruanda',
          'Rússia (antiga URSS) - Federação Russa',
          'Saara Ocidental',
          'Saint Vincente e Granadinas',
          'Samoa Americana',
          'Samoa Ocidental',
          'San Marino',
          'Santa Helena',
          'Santa Lúcia',
          'São Bartolomeu',
          'São Cristóvão e Névis',
          'São Martim',
          'São Tomé e Príncipe',
          'Senegal',
          'Serra Leoa',
          'Sérvia',
          'Síria',
          'Somália',
          'Sri Lanka',
          'St. Pierre and Miquelon',
          'Suazilândia',
          'Sudão',
          'Suécia',
          'Suíça',
          'Suriname',
          'Tadjiquistão',
          'Tailândia',
          'Taiwan',
          'Tanzânia',
          'Território Britânico do Oceano índico',
          'Territórios do Sul da França',
          'Territórios Palestinos Ocupados',
          'Timor Leste',
          'Togo',
          'Tonga',
          'Trinidad and Tobago',
          'Tunísia',
          'Turcomenistão',
          'Turquia',
          'Tuvalu',
          'Ucrânia',
          'Uganda',
          'Uruguai',
          'Uzbequistão',
          'Vanuatu',
          'Vaticano',
          'Venezuela',
          'Vietnã',
          'Zâmbia',
          'Zimbábue',
        ]
        const inputList = []
        for (const brInput of window.document.querySelectorAll('.br-input')) {
          inputList.push(new _components_input_input__WEBPACK_IMPORTED_MODULE_6__["default"]('br-input', brInput))
        }
        for (const brInput of inputList) {
          brInput.component
            .querySelectorAll('input.search-autocomplete')
            .forEach(() => {
              brInput.setAutocompleteData(countries)
            })
        }
      }
    
      initInstanceItem() {
        const itemList = []
        for (const brItem of window.document.querySelectorAll('.br-item')) {
          itemList.push(new _components_item_item__WEBPACK_IMPORTED_MODULE_7__["default"]('br-item', brItem))
        }
      }
    
      initInstanceList() {
        const listList = []
        for (const brList of window.document.querySelectorAll(
          '.br-list[collapsible]'
        )) {
          listList.push(new _components_list_list__WEBPACK_IMPORTED_MODULE_8__["default"]('br-list-collapsible', brList))
        }
        for (const brList of window.document.querySelectorAll(
          '.br-list[checkable]'
        )) {
          listList.push(new _components_list_list__WEBPACK_IMPORTED_MODULE_8__["default"]('br-list-checkable', brList))
        }
      }
    
      initInstanceMenu() {
        const menuList = []
        for (const brMenu of window.document.querySelectorAll('.br-menu')) {
          menuList.push(new _components_menu_menu__WEBPACK_IMPORTED_MODULE_9__["default"]('br-menu', brMenu))
        }
      }
    
      initInstanceMessage() {
        const alertList = []
        for (const brMessage of window.document.querySelectorAll('.br-message')) {
          alertList.push(new _components_message_message__WEBPACK_IMPORTED_MODULE_10__["default"]('br-message', brMessage))
        }
      }
    
      initInstanceModal() {
        const modalList = []
        for (const brModal of window.document.querySelectorAll('.br-modal')) {
          modalList.push(new _components_modal_modal__WEBPACK_IMPORTED_MODULE_11__["default"]('br-modal', brModal))
        }
        for (const brScrim of window.document.querySelectorAll('.br-scrim')) {
          const scrim = new _components_scrim_scrim__WEBPACK_IMPORTED_MODULE_14__["default"]('br-scrim', brScrim)
          for (const button of window.document.querySelectorAll(
            '.br-scrim + button'
          )) {
            button.addEventListener('click', () => {
              scrim.showScrim()
            })
          }
        }
      }
    
      initInstanceNotification() {
        const notificationList = []
        for (const brNotification of window.document.querySelectorAll(
          '.br-notification'
        )) {
          notificationList.push(
            new _components_notification_notification__WEBPACK_IMPORTED_MODULE_12__["default"]('br-notification', brNotification)
          )
        }
      }
    
      initInstancePagination() {
        const paginationList = []
        for (const brPagination of window.document.querySelectorAll(
          '.br-pagination'
        )) {
          paginationList.push(new _components_pagination_pagination__WEBPACK_IMPORTED_MODULE_13__["default"]('br-pagination', brPagination))
        }
      }
    
      initInstanceScrim() {
        const scrimList = []
        for (const brScrim of window.document.querySelectorAll('.br-scrim')) {
          scrimList.push(new _components_scrim_scrim__WEBPACK_IMPORTED_MODULE_14__["default"]('br-scrim', brScrim))
        }
        for (const buttonBloco1 of window.document.querySelectorAll(
          '.bloco1 button'
        )) {
          buttonBloco1.addEventListener('click', () => {
            for (const brScrim of scrimList) {
              brScrim.showScrim()
            }
          })
        }
      }
    
      initInstanceSelect() {
        const selectList = []
        for (const brSelect of window.document.querySelectorAll('.br-select')) {
          selectList.push(new _components_select_select__WEBPACK_IMPORTED_MODULE_15__["default"]('br-select', brSelect))
        }
      }
    
      initInstanceTable() {
        const tableList = []
        for (const [index, brTable] of window.document
          .querySelectorAll('.br-table')
          .entries()) {
          tableList.push(new _components_table_table__WEBPACK_IMPORTED_MODULE_17__["default"]('br-table', brTable, index))
        }
      }
    
      initInstanceTag() {
        const tagList = []
        for (const brTag of window.document.querySelectorAll('.br-tag')) {
          tagList.push(new _components_tag_tag__WEBPACK_IMPORTED_MODULE_18__["default"]('br-tag', brTag))
        }
      }
    
      initInstanceTabs() {
        const abasList = []
        for (const brTab of window.document.querySelectorAll('.br-tab')) {
          abasList.push(new _components_tab_tab__WEBPACK_IMPORTED_MODULE_16__["default"]('br-tab', brTab))
        }
      }
    
      initInstanceTooltip() {
        const tooltipList = []
        for (const brTooltip of window.document.querySelectorAll('.br-tooltip')) {
          tooltipList.push(new _components_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_19__["default"]('br-tooltip', brTooltip))
        }
      }
    
      initInstanceUpload() {
        const uploadList = []
        for (const brUpload of window.document.querySelectorAll('.br-upload')) {
          uploadList.push(new _components_upload_upload__WEBPACK_IMPORTED_MODULE_20__["default"]('br-upload', brUpload))
        }
      }
    
      initInstanceWizard() {
        const wizardList = []
        for (const brWizard of window.document.querySelectorAll('.br-wizard')) {
          wizardList.push(new _components_wizard_wizard__WEBPACK_IMPORTED_MODULE_21__["default"]('br-wizard', brWizard))
        }
      }
    
      initInstanceCard() {
        const listCard = []
        for (const brCard of window.document.querySelectorAll('.br-card')) {
          listCard.push(new _components_card_card__WEBPACK_IMPORTED_MODULE_2__["default"]('br-card', brCard))
        }
      }
    
      initInstanceCookiebar() {
        const cookiebarList = []
        for (const brCookiebar of window.document.querySelectorAll(
          '.br-cookiebar'
        )) {
          cookiebarList.push(new _components_cookiebar_cookiebar__WEBPACK_IMPORTED_MODULE_3__["default"]('br-cookiebar', brCookiebar))
        }
      }
    }
    
    
    /***/ }),
    /* 30 */,
    /* 31 */,
    /* 32 */,
    /* 33 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
    /* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _globals_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
    /* eslint-disable no-unused-vars */
    
    
    
    const globals = new _globals_class__WEBPACK_IMPORTED_MODULE_1__["default"]()
    
    
    /***/ }),
    /* 34 */
    /***/ (function(module, exports, __webpack_require__) {
    
    (function (global, factory) {
       true ? factory() :
      undefined;
    }(this, (function () { 'use strict';
    
      /**
       * Applies the :focus-visible polyfill at the given scope.
       * A scope in this case is either the top-level Document or a Shadow Root.
       *
       * @param {(Document|ShadowRoot)} scope
       * @see https://github.com/WICG/focus-visible
       */
      function applyFocusVisiblePolyfill(scope) {
        var hadKeyboardEvent = true;
        var hadFocusVisibleRecently = false;
        var hadFocusVisibleRecentlyTimeout = null;
    
        var inputTypesAllowlist = {
          text: true,
          search: true,
          url: true,
          tel: true,
          email: true,
          password: true,
          number: true,
          date: true,
          month: true,
          week: true,
          time: true,
          datetime: true,
          'datetime-local': true
        };
    
        /**
         * Helper function for legacy browsers and iframes which sometimes focus
         * elements like document, body, and non-interactive SVG.
         * @param {Element} el
         */
        function isValidFocusTarget(el) {
          if (
            el &&
            el !== document &&
            el.nodeName !== 'HTML' &&
            el.nodeName !== 'BODY' &&
            'classList' in el &&
            'contains' in el.classList
          ) {
            return true;
          }
          return false;
        }
    
        /**
         * Computes whether the given element should automatically trigger the
         * `focus-visible` class being added, i.e. whether it should always match
         * `:focus-visible` when focused.
         * @param {Element} el
         * @return {boolean}
         */
        function focusTriggersKeyboardModality(el) {
          var type = el.type;
          var tagName = el.tagName;
    
          if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
            return true;
          }
    
          if (tagName === 'TEXTAREA' && !el.readOnly) {
            return true;
          }
    
          if (el.isContentEditable) {
            return true;
          }
    
          return false;
        }
    
        /**
         * Add the `focus-visible` class to the given element if it was not added by
         * the author.
         * @param {Element} el
         */
        function addFocusVisibleClass(el) {
          if (el.classList.contains('focus-visible')) {
            return;
          }
          el.classList.add('focus-visible');
          el.setAttribute('data-focus-visible-added', '');
        }
    
        /**
         * Remove the `focus-visible` class from the given element if it was not
         * originally added by the author.
         * @param {Element} el
         */
        function removeFocusVisibleClass(el) {
          if (!el.hasAttribute('data-focus-visible-added')) {
            return;
          }
          el.classList.remove('focus-visible');
          el.removeAttribute('data-focus-visible-added');
        }
    
        /**
         * If the most recent user interaction was via the keyboard;
         * and the key press did not include a meta, alt/option, or control key;
         * then the modality is keyboard. Otherwise, the modality is not keyboard.
         * Apply `focus-visible` to any current active element and keep track
         * of our keyboard modality state with `hadKeyboardEvent`.
         * @param {KeyboardEvent} e
         */
        function onKeyDown(e) {
          if (e.metaKey || e.altKey || e.ctrlKey) {
            return;
          }
    
          if (isValidFocusTarget(scope.activeElement)) {
            addFocusVisibleClass(scope.activeElement);
          }
    
          hadKeyboardEvent = true;
        }
    
        /**
         * If at any point a user clicks with a pointing device, ensure that we change
         * the modality away from keyboard.
         * This avoids the situation where a user presses a key on an already focused
         * element, and then clicks on a different element, focusing it with a
         * pointing device, while we still think we're in keyboard modality.
         * @param {Event} e
         */
        function onPointerDown(e) {
          hadKeyboardEvent = false;
        }
    
        /**
         * On `focus`, add the `focus-visible` class to the target if:
         * - the target received focus as a result of keyboard navigation, or
         * - the event target is an element that will likely require interaction
         *   via the keyboard (e.g. a text box)
         * @param {Event} e
         */
        function onFocus(e) {
          // Prevent IE from focusing the document or HTML element.
          if (!isValidFocusTarget(e.target)) {
            return;
          }
    
          if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
            addFocusVisibleClass(e.target);
          }
        }
    
        /**
         * On `blur`, remove the `focus-visible` class from the target.
         * @param {Event} e
         */
        function onBlur(e) {
          if (!isValidFocusTarget(e.target)) {
            return;
          }
    
          if (
            e.target.classList.contains('focus-visible') ||
            e.target.hasAttribute('data-focus-visible-added')
          ) {
            // To detect a tab/window switch, we look for a blur event followed
            // rapidly by a visibility change.
            // If we don't see a visibility change within 100ms, it's probably a
            // regular focus change.
            hadFocusVisibleRecently = true;
            window.clearTimeout(hadFocusVisibleRecentlyTimeout);
            hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
              hadFocusVisibleRecently = false;
            }, 100);
            removeFocusVisibleClass(e.target);
          }
        }
    
        /**
         * If the user changes tabs, keep track of whether or not the previously
         * focused element had .focus-visible.
         * @param {Event} e
         */
        function onVisibilityChange(e) {
          if (document.visibilityState === 'hidden') {
            // If the tab becomes active again, the browser will handle calling focus
            // on the element (Safari actually calls it twice).
            // If this tab change caused a blur on an element with focus-visible,
            // re-apply the class when the user switches back to the tab.
            if (hadFocusVisibleRecently) {
              hadKeyboardEvent = true;
            }
            addInitialPointerMoveListeners();
          }
        }
    
        /**
         * Add a group of listeners to detect usage of any pointing devices.
         * These listeners will be added when the polyfill first loads, and anytime
         * the window is blurred, so that they are active when the window regains
         * focus.
         */
        function addInitialPointerMoveListeners() {
          document.addEventListener('mousemove', onInitialPointerMove);
          document.addEventListener('mousedown', onInitialPointerMove);
          document.addEventListener('mouseup', onInitialPointerMove);
          document.addEventListener('pointermove', onInitialPointerMove);
          document.addEventListener('pointerdown', onInitialPointerMove);
          document.addEventListener('pointerup', onInitialPointerMove);
          document.addEventListener('touchmove', onInitialPointerMove);
          document.addEventListener('touchstart', onInitialPointerMove);
          document.addEventListener('touchend', onInitialPointerMove);
        }
    
        function removeInitialPointerMoveListeners() {
          document.removeEventListener('mousemove', onInitialPointerMove);
          document.removeEventListener('mousedown', onInitialPointerMove);
          document.removeEventListener('mouseup', onInitialPointerMove);
          document.removeEventListener('pointermove', onInitialPointerMove);
          document.removeEventListener('pointerdown', onInitialPointerMove);
          document.removeEventListener('pointerup', onInitialPointerMove);
          document.removeEventListener('touchmove', onInitialPointerMove);
          document.removeEventListener('touchstart', onInitialPointerMove);
          document.removeEventListener('touchend', onInitialPointerMove);
        }
    
        /**
         * When the polfyill first loads, assume the user is in keyboard modality.
         * If any event is received from a pointing device (e.g. mouse, pointer,
         * touch), turn off keyboard modality.
         * This accounts for situations where focus enters the page from the URL bar.
         * @param {Event} e
         */
        function onInitialPointerMove(e) {
          // Work around a Safari quirk that fires a mousemove on <html> whenever the
          // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
          if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
            return;
          }
    
          hadKeyboardEvent = false;
          removeInitialPointerMoveListeners();
        }
    
        // For some kinds of state, we are interested in changes at the global scope
        // only. For example, global pointer input, global key presses and global
        // visibility change should affect the state at every scope:
        document.addEventListener('keydown', onKeyDown, true);
        document.addEventListener('mousedown', onPointerDown, true);
        document.addEventListener('pointerdown', onPointerDown, true);
        document.addEventListener('touchstart', onPointerDown, true);
        document.addEventListener('visibilitychange', onVisibilityChange, true);
    
        addInitialPointerMoveListeners();
    
        // For focus and blur, we specifically care about state changes in the local
        // scope. This is because focus / blur events that originate from within a
        // shadow root are not re-dispatched from the host element if it was already
        // the active element in its own scope:
        scope.addEventListener('focus', onFocus, true);
        scope.addEventListener('blur', onBlur, true);
    
        // We detect that a node is a ShadowRoot by ensuring that it is a
        // DocumentFragment and also has a host property. This check covers native
        // implementation and polyfill implementation transparently. If we only cared
        // about the native implementation, we could just check if the scope was
        // an instance of a ShadowRoot.
        if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
          // Since a ShadowRoot is a special kind of DocumentFragment, it does not
          // have a root element to add a class to. So, we add this attribute to the
          // host element instead:
          scope.host.setAttribute('data-js-focus-visible', '');
        } else if (scope.nodeType === Node.DOCUMENT_NODE) {
          document.documentElement.classList.add('js-focus-visible');
          document.documentElement.setAttribute('data-js-focus-visible', '');
        }
      }
    
      // It is important to wrap all references to global window and document in
      // these checks to support server-side rendering use cases
      // @see https://github.com/WICG/focus-visible/issues/199
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        // Make the polyfill helper globally available. This can be used as a signal
        // to interested libraries that wish to coordinate with the polyfill for e.g.,
        // applying the polyfill to a shadow root:
        window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;
    
        // Notify interested libraries of the polyfill's presence, in case the
        // polyfill was loaded lazily:
        var event;
    
        try {
          event = new CustomEvent('focus-visible-polyfill-ready');
        } catch (error) {
          // IE11 does not support using CustomEvent as a constructor directly:
          event = document.createEvent('CustomEvent');
          event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
        }
    
        window.dispatchEvent(event);
      }
    
      if (typeof document !== 'undefined') {
        // Apply the polyfill to the global document, so that no JavaScript
        // coordination is required to use the polyfill in the top-level document:
        applyFocusVisiblePolyfill(document);
      }
    
    })));
    
    
    /***/ }),
    /* 35 */,
    /* 36 */,
    /* 37 */,
    /* 38 */,
    /* 39 */,
    /* 40 */,
    /* 41 */,
    /* 42 */,
    /* 43 */,
    /* 44 */,
    /* 45 */,
    /* 46 */,
    /* 47 */,
    /* 48 */,
    /* 49 */,
    /* 50 */,
    /* 51 */,
    /* 52 */,
    /* 53 */,
    /* 54 */,
    /* 55 */,
    /* 56 */,
    /* 57 */,
    /* 58 */,
    /* 59 */,
    /* 60 */,
    /* 61 */,
    /* 62 */,
    /* 63 */,
    /* 64 */,
    /* 65 */,
    /* 66 */,
    /* 67 */,
    /* 68 */,
    /* 69 */,
    /* 70 */,
    /* 71 */,
    /* 72 */,
    /* 73 */,
    /* 74 */,
    /* 75 */,
    /* 76 */,
    /* 77 */,
    /* 78 */,
    /* 79 */,
    /* 80 */,
    /* 81 */,
    /* 82 */,
    /* 83 */,
    /* 84 */,
    /* 85 */,
    /* 86 */,
    /* 87 */,
    /* 88 */,
    /* 89 */,
    /* 90 */,
    /* 91 */,
    /* 92 */,
    /* 93 */,
    /* 94 */,
    /* 95 */,
    /* 96 */,
    /* 97 */,
    /* 98 */,
    /* 99 */,
    /* 100 */,
    /* 101 */
    /***/ (function(module, exports, __webpack_require__) {
    
    __webpack_require__(102);
    module.exports = __webpack_require__(33);
    
    
    /***/ }),
    /* 102 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    // extracted by mini-css-extract-plugin
    
    
    /***/ })
    /******/ ]);
    //# sourceMappingURL=dsgov.js.map