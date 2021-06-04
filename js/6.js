(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(13);

// EXTERNAL MODULE: ./src/store/actions.js
var actions = __webpack_require__(5);

// CONCATENATED MODULE: ./src/sounds/card.mp3
/* harmony default export */ var card = (__webpack_require__.p + "sounds/card.mp3");
// EXTERNAL MODULE: ./src/components/App/pages/cards/cards.scss
var cards_cards = __webpack_require__(93);

// CONCATENATED MODULE: ./src/components/App/pages/cards/cards.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var sound = new Audio(card);


var cards_cards_cards = function cards() {
  var spyArray = Object(es["d" /* useSelector */])(function (state) {
    return state.spyArray;
  });
  var humans = Object(es["d" /* useSelector */])(function (state) {
    return state.humans;
  });
  var location = Object(es["d" /* useSelector */])(function (state) {
    return state.location;
  });

  var _useState = Object(react["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var dispatch = Object(es["c" /* useDispatch */])(); //const humans = useSelector(state=>state.humans)

  var clickHandler = function clickHandler() {
    sound.play();
    setFlipped(!flipped);
    setTimeout(function () {
      if (!flipped) {
        if (humans - 1 == count) {
          dispatch(Object(actions["i" /* setGameProgress */])("timer"));
        } else {
          setCount(function (count) {
            return count + 1;
          });
        }
      }
    }, 300);
  };

  var _useState3 = Object(react["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      flipped = _useState4[0],
      setFlipped = _useState4[1];

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "page-container"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    onClick: clickHandler,
    className: "card-container" + (flipped ? " flipped" : "")
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "back"
  }, "\uD83D\uDD75\uFE0F\u200D\u2642\uFE0F"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "front"
  }, spyArray[count] ? /*#__PURE__*/react_default.a.createElement("span", {
    className: "spyCard"
  }, "\u0428\u043F\u0438\u043E\u043D") : location)));
};

/* harmony default export */ var pages_cards_cards = __webpack_exports__["default"] = (cards_cards_cards);

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);