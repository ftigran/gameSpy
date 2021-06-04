(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(108);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 14 modules
var Box = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Rating/Rating.js + 1 modules
var Rating = __webpack_require__(119);

// EXTERNAL MODULE: ./src/components/App/pages/settings/settings.scss
var settings_settings = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(13);

// EXTERNAL MODULE: ./src/store/actions.js
var actions = __webpack_require__(5);

// CONCATENATED MODULE: ./src/store/locations.js
var locations = ["Автобус", "Автозаправка", "Автосалон", "Аквапарк", "Анонимное собрание", "Аэропорт", "Банк", "Бар", "Бар", "Бар", "Бассейн", "Библиотека", "Больница", "Вертолёт", "Воинская часть", "Вооенная база", "Встреча выпускников", "Гараж", "Горящяя квартира", "Детский садик", "Застрявший лифт", "Зоопарк", "Избирательный участок", "Казино", "Каток", "Кафе", "Киностудия", "Кинотеатр", "Конфетная фабрика", "Корабль", "Корпоратив", "Круизный корабль", "Лес", "Магазин сантехники", "Маршрутка", "Мастерская по ремонту телевизоров", "Метро", "Море", "Музей", "Музей", "Мясная фабрика", "Наркопритон", "Ночной клуб", "Орбитальная станция", "Отель", "Парк", "Парковка", "Пиратский корабль", "Подводная лодка", "Поезд", "Поезд", "Полицейский участок", "Рай", "Ресторан", "Рынок", "Салон красоты", "Самолёт", "Свадьба", "Стадион", "Стройка", "Стройка", "Студия программистов", "Супермаркет", "Такси", "Такси", "Театр", "Театр", "Тренажёрный зал", "Туристический автобус", "Тюрьма", "Университет", "Цирк", "Школа", "Школа", "Школа", "Школьный автобус", "Электрозаправка"];
/* harmony default export */ var store_locations = (locations);
// CONCATENATED MODULE: ./src/sounds/start.mp3
/* harmony default export */ var start = (__webpack_require__.p + "sounds/start.mp3");
// EXTERNAL MODULE: ./src/sounds/toggle.mp3
var toggle = __webpack_require__(74);

// EXTERNAL MODULE: ./src/sounds/click.mp3
var click = __webpack_require__(75);

// CONCATENATED MODULE: ./src/components/App/pages/settings/settings.js











var sound = new Audio(start);
var settings_toggle = new Audio(toggle["a" /* default */]);
var settings_click = new Audio(click["a" /* default */]);

var settings_settings_settings = function settings() {
  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  var onSubmit = function onSubmit(data) {
    sound.play();
    getSpyArray();
    dispatch(Object(actions["k" /* setLocation */])(store_locations[randomInteger(0, store_locations.length - 1)]));
    dispatch(Object(actions["i" /* setGameProgress */])("cards"));
  };

  var humans = Object(es["d" /* useSelector */])(function (state) {
    return state.humans;
  });
  var spys = Object(es["d" /* useSelector */])(function (state) {
    return state.spys;
  });
  var dispatch = Object(es["c" /* useDispatch */])();
  var spyLost = spys;

  var getSpyArray = function getSpyArray() {
    var arr = [];
    var humansIsSpy = [];
    var hums = 0;

    while (hums != humans) {
      arr.push(hums);
      humansIsSpy.push(false);
      hums++;
    }

    while (spyLost) {
      var rnd = randomInteger(0, humans - 1);

      if (!humansIsSpy[rnd]) {
        humansIsSpy[rnd] = true;
        spyLost--;
      }
    }

    dispatch(Object(actions["m" /* setSpysArray */])(humansIsSpy));
  };

  var isDarkTheme = Object(es["d" /* useSelector */])(function (state) {
    return state.isDarkTheme;
  });

  var toggleTheme = function toggleTheme() {
    if (isDarkTheme == false) {
      dispatch(Object(actions["n" /* setTheme */])(true));
    } else {
      dispatch(Object(actions["n" /* setTheme */])(false));
    }

    settings_toggle.play();
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "ratings"
  }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    component: "h2",
    variant: "h4"
  }, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"), /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    component: "fieldset",
    mb: 3,
    borderColor: "transparent"
  }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    component: "legend"
  }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0438\u0433\u0440\u043E\u043A\u043E\u0432: ", humans), /*#__PURE__*/react_default.a.createElement(Rating["a" /* default */], {
    name: "humans",
    value: humans,
    className: "humans",
    icon: "\uD83E\uDDD2",
    max: 10,
    onChange: function onChange(event, newValue) {
      if (newValue < 3) {
        newValue = 3;
      }

      var floor = Math.floor(newValue / 2);

      if (floor <= spys) {
        dispatch(Object(actions["l" /* setSpys */])(floor));
      }

      settings_click.play();
      dispatch(Object(actions["j" /* setHumans */])(newValue));
      dispatch(Object(actions["o" /* setTimer */])(2 + newValue));
    }
  })), /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    component: "fieldset",
    mb: 3,
    borderColor: "transparent"
  }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    component: "legend"
  }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0448\u043F\u0438\u043E\u043D\u043E\u0432: ", spys), /*#__PURE__*/react_default.a.createElement(Rating["a" /* default */], {
    name: "spys",
    className: "spys",
    value: spys,
    icon: "\uD83D\uDD74\uFE0F",
    max: Math.floor(humans / 2),
    onChange: function onChange(event, newValue) {
      settings_click.play();

      if (newValue < 1) {
        newValue = 1;
      }

      dispatch(Object(actions["l" /* setSpys */])(newValue));
    }
  })), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "contained",
    onClick: onSubmit
  }, "\u041D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443"), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "outlined",
    className: isDarkTheme ? "themeButton dark" : "themeButton",
    onClick: toggleTheme
  }, /*#__PURE__*/react_default.a.createElement("span", null, "\u2600\uFE0F"), /*#__PURE__*/react_default.a.createElement("span", null, "\uD83C\uDF19")));
};

/* harmony default export */ var pages_settings_settings = __webpack_exports__["default"] = (settings_settings_settings);

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

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);