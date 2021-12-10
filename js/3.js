(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(13);

// EXTERNAL MODULE: ./src/components/App/pages/timer/timer.scss
var timer = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Modal/Modal.js + 6 modules
var Modal = __webpack_require__(113);

// EXTERNAL MODULE: ./src/components/Modal/Modal.scss
var Modal_Modal = __webpack_require__(95);

// EXTERNAL MODULE: ./src/store/actions.js
var actions = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js
var Backdrop = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Fade/Fade.js + 3 modules
var Fade = __webpack_require__(116);

// EXTERNAL MODULE: ./src/sounds/click.mp3
var click = __webpack_require__(75);

// CONCATENATED MODULE: ./src/components/Modal/Modal.js



 //import {WrapedUserError} from '../UserLoginErrorModal/UserLoginErrorModal'






var Modal_click = new Audio(click["a" /* default */]);
function LoginModal() {
  var open = Object(es["d" /* useSelector */])(function (state) {
    return state.showModal;
  });
  var location = Object(es["d" /* useSelector */])(function (state) {
    return state.location;
  });
  var spys = Object(es["d" /* useSelector */])(function (state) {
    return state.spys;
  });
  var spyArray = Object(es["d" /* useSelector */])(function (state) {
    return state.spyArray;
  });
  var dispatch = Object(es["c" /* useDispatch */])();
  var isDarkTheme = Object(es["d" /* useSelector */])(function (state) {
    return state.isDarkTheme;
  });

  var handleClose = function handleClose() {
    Modal_click.play();
    dispatch(Object(actions["p" /* showFinalModal */])(false));
    dispatch(Object(actions["i" /* setGameProgress */])("settings"));
  };

  return /*#__PURE__*/react_default.a.createElement(Modal["a" /* default */], {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    className: "modal",
    open: open,
    closeAfterTransition: true,
    BackdropComponent: Backdrop["a" /* default */],
    BackdropProps: {
      timeout: 500
    } // disableScrollLock={true}

  }, /*#__PURE__*/react_default.a.createElement(Fade["a" /* default */], {
    "in": open
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: isDarkTheme ? "modalWindow dark" : "modalWindow"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    id: "transition-modal-title",
    className: "light"
  }, "\u0418\u0433\u0440\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430!"), /*#__PURE__*/react_default.a.createElement("h4", {
    className: "light"
  }, "\u041B\u043E\u043A\u0430\u0446\u0438\u044F: ", /*#__PURE__*/react_default.a.createElement("b", null, location)), /*#__PURE__*/react_default.a.createElement("h4", {
    className: "light"
  }, "\u0428\u043F\u0438\u043E\u043D", spys > 1 ? "ы" : null, ":"), spyArray.map(function (isSpy, index) {
    if (isSpy) {
      return /*#__PURE__*/react_default.a.createElement("p", {
        key: index
      }, "\u0418\u0433\u0440\u043E\u043A ", ++index);
      return null;
    }
  }), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    onClick: handleClose,
    variant: "contained"
  }, "\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437"))));
}
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayCircleOutline.js
var PlayCircleOutline = __webpack_require__(98);
var PlayCircleOutline_default = /*#__PURE__*/__webpack_require__.n(PlayCircleOutline);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PauseCircleOutline.js
var PauseCircleOutline = __webpack_require__(96);
var PauseCircleOutline_default = /*#__PURE__*/__webpack_require__.n(PauseCircleOutline);

// CONCATENATED MODULE: ./src/sounds/timer1.mp3
/* harmony default export */ var timer1 = (__webpack_require__.p + "sounds/timer1.mp3");
// CONCATENATED MODULE: ./src/sounds/timer2.mp3
/* harmony default export */ var timer2 = (__webpack_require__.p + "sounds/timer2.mp3");
// CONCATENATED MODULE: ./src/sounds/gameEnd.mp3
/* harmony default export */ var gameEnd = (__webpack_require__.p + "sounds/gameEnd.mp3");
// EXTERNAL MODULE: ./src/sounds/toggle.mp3
var toggle = __webpack_require__(74);

// CONCATENATED MODULE: ./src/components/App/pages/timer/timer.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // import cn from 'classnames/bind'


 //const cx = cn.bind(styles)












var sound1 = new Audio(timer1);
var sound2 = new Audio(timer2);
var gameEndSound = new Audio(gameEnd);
var timer_toggle = new Audio(toggle["a" /* default */]);

var timer_CountDown = /*#__PURE__*/function (_Component) {
  _inherits(CountDown, _Component);

  var _super = _createSuper(CountDown);

  function CountDown(props) {
    var _this;

    _classCallCheck(this, CountDown);

    _this = _super.call(this, props);
    _this.count = _this.count.bind(_assertThisInitialized(_this));
    _this.timeIsUp = _this.timeIsUp.bind(_assertThisInitialized(_this));
    _this.timerPause = _this.timerPause.bind(_assertThisInitialized(_this));
    _this.state = {
      minutes: 0,
      secounds: 0,
      active: false
    };

    var getWord = function getWord() {
      if (_this.props.spys == 1) {
        return "шпиона";
      } else {
        return _this.props.spys + "х шпионов";
      }
    };

    _this.title = "Вычислите среди игроков " + getWord();
    _this.deadline = props.timer * 60 * 1000;
    _this.x = null;
    return _this;
  }

  _createClass(CountDown, [{
    key: "count",
    value: function count() {
      this.deadline -= 1000;
      var minutes = Math.floor(this.deadline % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(this.deadline % (1000 * 60) / 1000);
      this.sound();
      this.setState({
        minutes: minutes,
        seconds: seconds
      });

      if (this.deadline < 0) {
        this.timeIsUp();
      }
    }
  }, {
    key: "sound",
    value: function sound() {
      if (this.tick) {
        sound1.play();
      } else {
        sound2.play();
      }

      this.tick != this.tick;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.count();
      this.x = setInterval(this.count, 1000);
      this.setState({
        active: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.x);
      this.x = null;
    }
  }, {
    key: "timerPause",
    value: function timerPause() {
      timer_toggle.play();

      if (this.state.active) {
        this.setState({
          active: false
        });
        clearInterval(this.x);
        this.x = null;
      } else {
        this.setState({
          active: true
        });
        this.x = setInterval(this.count, 1000);
      }
    }
  }, {
    key: "timeIsUp",
    value: function timeIsUp() {
      clearInterval(this.x);
      gameEndSound.play();
      this.props.showFinalModal(true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          seconds = _this$state.seconds,
          minutes = _this$state.minutes,
          active = _this$state.active;
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "timer"
      }, /*#__PURE__*/react_default.a.createElement("h1", null, this.title), /*#__PURE__*/react_default.a.createElement(IconButton["a" /* default */], {
        onClick: this.timerPause,
        "aria-label": "upload picture",
        component: "span"
      }, active ? /*#__PURE__*/react_default.a.createElement(PauseCircleOutline_default.a, {
        className: "button active"
      }) : /*#__PURE__*/react_default.a.createElement(PlayCircleOutline_default.a, {
        className: "button"
      })), /*#__PURE__*/react_default.a.createElement("div", {
        id: "clockdiv",
        className: active ? "active" : null,
        onClick: this.timerPause
      }, /*#__PURE__*/react_default.a.createElement("span", {
        className: "minutes",
        id: "minute"
      }, minutes), /*#__PURE__*/react_default.a.createElement("span", {
        className: "seconds",
        id: "second"
      }, seconds)), /*#__PURE__*/react_default.a.createElement(LoginModal, null), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
        variant: "contained",
        onClick: this.timeIsUp
      }, "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C"));
    }
  }]);

  return CountDown;
}(react["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    timer: state.timer,
    spys: state.spys
  };
};

var timer_putActionsToProps = function putActionsToProps(dispatch) {
  return {
    showFinalModal: Object(redux["a" /* bindActionCreators */])(actions["p" /* showFinalModal */], dispatch)
  };
};

/* harmony default export */ var timer_timer = __webpack_exports__["default"] = (Object(es["b" /* connect */])(mapStateToProps, timer_putActionsToProps)(timer_CountDown));

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "sounds/toggle.mp3");

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "sounds/click.mp3");

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);