/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/ByPlatform.js":
/*!****************************************!*\
  !*** ./pages/components/ByPlatform.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar _interopRequireWildcard = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _bar = __webpack_require__(/*! @nivo/bar */ \"./node_modules/@nivo/bar/dist/nivo-bar.es.js\");\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\n\nvar _jsxFileName = \"/Users/malcolmmarshall/Desktop/TakeHome/AdcellerantAssessment/pages/components/ByPlatform.js\",\n    _this = void 0,\n    _s = $RefreshSig$();\n\nvar ByPlatform = function ByPlatform(_ref) {\n  _s();\n\n  var data = _ref.data;\n\n  var _useState = (0, _react.useState)([]),\n      amazon = _useState[0],\n      setAmazon = _useState[1];\n\n  var _useState2 = (0, _react.useState)({}),\n      facebook = _useState2[0],\n      setFacebook = _useState2[1];\n\n  var _useState3 = (0, _react.useState)({}),\n      google = _useState3[0],\n      setGoogle = _useState3[1];\n\n  var _useState4 = (0, _react.useState)({}),\n      linkedin = _useState4[0],\n      setLinkedin = _useState4[1];\n\n  var _useState5 = (0, _react.useState)({}),\n      twitter = _useState5[0],\n      setTwitter = _useState5[1];\n\n  (0, _react.useEffect)(function () {\n    getPlatforms();\n  }, []);\n\n  var getPlatforms = function getPlatforms() {\n    _axios[\"default\"].get('/api/getPlatform').then(function (res) {\n      setAmazon(res.data.slice(0, 130));\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }; // console.log(amazon)\n\n\n  var amazonObj = {\n    platform: 'Amazon',\n    clicks: 0,\n    impressions: 0\n  };\n  amazon.forEach(function (row) {\n    amazonObj.clicks += row.clicks;\n    amazonObj.impressions += row.impressions;\n  });\n  console.log(amazonObj);\n  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_bar.ResponsiveBar, {\n    data: finalDataFormat,\n    keys: ['Clicks', 'Impressions'],\n    indexBy: \"product\",\n    margin: {\n      top: 50,\n      right: 130,\n      bottom: 50,\n      left: 60\n    },\n    padding: 0.3,\n    valueScale: {\n      type: 'linear'\n    },\n    indexScale: {\n      type: 'band',\n      round: true\n    },\n    colors: {\n      scheme: 'nivo'\n    },\n    defs: [{\n      id: 'dots',\n      type: 'patternDots',\n      background: 'inherit',\n      color: '#38bcb2',\n      size: 4,\n      padding: 1,\n      stagger: true\n    }, {\n      id: 'lines',\n      type: 'patternLines',\n      background: 'inherit',\n      color: '#eed312',\n      rotation: -45,\n      lineWidth: 6,\n      spacing: 10\n    }],\n    fill: [{\n      match: {\n        id: 'fries'\n      },\n      id: 'dots'\n    }, {\n      match: {\n        id: 'sandwich'\n      },\n      id: 'lines'\n    }],\n    borderColor: {\n      from: 'color',\n      modifiers: [['darker', 1.6]]\n    },\n    axisTop: null,\n    axisRight: null,\n    axisBottom: {\n      tickSize: 5,\n      tickPadding: 5,\n      tickRotation: 0,\n      legend: 'Product',\n      legendPosition: 'middle',\n      legendOffset: 32\n    },\n    axisLeft: {\n      tickSize: 5,\n      tickPadding: 5,\n      tickRotation: 0,\n      legend: 'Amount',\n      legendPosition: 'middle',\n      legendOffset: -40\n    },\n    labelSkipWidth: 12,\n    labelSkipHeight: 12,\n    labelTextColor: {\n      from: 'color',\n      modifiers: [['darker', 1.6]]\n    },\n    legends: [{\n      dataFrom: 'keys',\n      anchor: 'bottom-right',\n      direction: 'column',\n      justify: false,\n      translateX: 120,\n      translateY: 0,\n      itemsSpacing: 2,\n      itemWidth: 100,\n      itemHeight: 20,\n      itemDirection: 'left-to-right',\n      itemOpacity: 0.85,\n      symbolSize: 20,\n      effects: [{\n        on: 'hover',\n        style: {\n          itemOpacity: 1\n        }\n      }]\n    }],\n    animate: true,\n    motionStiffness: 90,\n    motionDamping: 15\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ByPlatform, \"h2BDq4Wc2Za2NnY19lny5vNNrdo=\");\n\n_c = ByPlatform;\nmodule.exports = ByPlatform;\n\nvar _c;\n\n$RefreshReg$(_c, \"ByPlatform\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9CeVBsYXRmb3JtLmpzPzEzM2QiXSwibmFtZXMiOlsiQnlQbGF0Zm9ybSIsImRhdGEiLCJhbWF6b24iLCJzZXRBbWF6b24iLCJmYWNlYm9vayIsInNldEZhY2Vib29rIiwiZ29vZ2xlIiwic2V0R29vZ2xlIiwibGlua2VkaW4iLCJzZXRMaW5rZWRpbiIsInR3aXR0ZXIiLCJzZXRUd2l0dGVyIiwiZ2V0UGxhdGZvcm1zIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwic2xpY2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYW1hem9uT2JqIiwicGxhdGZvcm0iLCJjbGlja3MiLCJpbXByZXNzaW9ucyIsImZvckVhY2giLCJyb3ciLCJmaW5hbERhdGFGb3JtYXQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ0eXBlIiwicm91bmQiLCJzY2hlbWUiLCJpZCIsImJhY2tncm91bmQiLCJjb2xvciIsInNpemUiLCJwYWRkaW5nIiwic3RhZ2dlciIsInJvdGF0aW9uIiwibGluZVdpZHRoIiwic3BhY2luZyIsIm1hdGNoIiwiZnJvbSIsIm1vZGlmaWVycyIsInRpY2tTaXplIiwidGlja1BhZGRpbmciLCJ0aWNrUm90YXRpb24iLCJsZWdlbmQiLCJsZWdlbmRQb3NpdGlvbiIsImxlZ2VuZE9mZnNldCIsImRhdGFGcm9tIiwiYW5jaG9yIiwiZGlyZWN0aW9uIiwianVzdGlmeSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwiaXRlbXNTcGFjaW5nIiwiaXRlbVdpZHRoIiwiaXRlbUhlaWdodCIsIml0ZW1EaXJlY3Rpb24iLCJpdGVtT3BhY2l0eSIsInN5bWJvbFNpemUiLCJlZmZlY3RzIiwib24iLCJzdHlsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxP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QyxnQkFBVSxFQUFFLEVBWmQ7QUFhRUMsYUFBTyxFQUFFLENBQ1A7QUFDRUMsVUFBRSxFQUFFLE9BRE47QUFFRUMsYUFBSyxFQUFFO0FBQ0xKLHFCQUFXLEVBQUU7QUFEUjtBQUZULE9BRE87QUFiWCxLQURPLENBakVYO0FBeUZFLFdBQU8sRUFBRSxJQXpGWDtBQTBGRSxtQkFBZSxFQUFFLEVBMUZuQjtBQTJGRSxpQkFBYSxFQUFFO0FBM0ZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErRkQsQ0EvSEQ7O0dBQU0vRCxVOztLQUFBQSxVO0FBaUlOb0UsTUFBTSxDQUFDQyxPQUFQLEdBQWlCckUsVUFBakIiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0J5UGxhdGZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUJhciB9IGZyb20gJ0BuaXZvL2Jhcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBCeVBsYXRmb3JtID0gKHsgZGF0YSB9KSA9PiB7XG5cbiAgY29uc3QgW2FtYXpvbiwgc2V0QW1hem9uXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZhY2Vib29rLCBzZXRGYWNlYm9va10gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtnb29nbGUsIHNldEdvb2dsZV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtsaW5rZWRpbiwgc2V0TGlua2VkaW5dID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbdHdpdHRlciwgc2V0VHdpdHRlcl0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQbGF0Zm9ybXMoKTtcbiAgfSwgW10pXG5cbiAgY29uc3QgZ2V0UGxhdGZvcm1zID0gKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnL2FwaS9nZXRQbGF0Zm9ybScpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldEFtYXpvbihyZXMuZGF0YS5zbGljZSgwLCAxMzApKTtcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gIH1cbiAgLy8gY29uc29sZS5sb2coYW1hem9uKVxuXG4gIGxldCBhbWF6b25PYmogPSB7XG4gICAgcGxhdGZvcm06ICdBbWF6b24nLFxuICAgIGNsaWNrczogMCxcbiAgICBpbXByZXNzaW9uczogMFxuICB9O1xuXG4gIGFtYXpvbi5mb3JFYWNoKChyb3cpID0+IHtcbiAgICBhbWF6b25PYmouY2xpY2tzICs9IHJvdy5jbGlja3M7XG4gICAgYW1hem9uT2JqLmltcHJlc3Npb25zICs9IHJvdy5pbXByZXNzaW9ucztcbiAgfSlcbiAgY29uc29sZS5sb2coYW1hem9uT2JqKVxuXG4gIHJldHVybiAoXG4gICAgPFJlc3BvbnNpdmVCYXJcbiAgICAgIGRhdGE9e2ZpbmFsRGF0YUZvcm1hdH1cbiAgICAgIGtleXM9e1snQ2xpY2tzJywgJ0ltcHJlc3Npb25zJ119XG4gICAgICBpbmRleEJ5PVwicHJvZHVjdFwiXG4gICAgICBtYXJnaW49e3sgdG9wOiA1MCwgcmlnaHQ6IDEzMCwgYm90dG9tOiA1MCwgbGVmdDogNjAgfX1cbiAgICAgIHBhZGRpbmc9ezAuM31cbiAgICAgIHZhbHVlU2NhbGU9e3sgdHlwZTogJ2xpbmVhcicgfX1cbiAgICAgIGluZGV4U2NhbGU9e3sgdHlwZTogJ2JhbmQnLCByb3VuZDogdHJ1ZSB9fVxuICAgICAgY29sb3JzPXt7IHNjaGVtZTogJ25pdm8nIH19XG4gICAgICBkZWZzPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2RvdHMnLFxuICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuRG90cycsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ2luaGVyaXQnLFxuICAgICAgICAgIGNvbG9yOiAnIzM4YmNiMicsXG4gICAgICAgICAgc2l6ZTogNCxcbiAgICAgICAgICBwYWRkaW5nOiAxLFxuICAgICAgICAgIHN0YWdnZXI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnbGluZXMnLFxuICAgICAgICAgIHR5cGU6ICdwYXR0ZXJuTGluZXMnLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICdpbmhlcml0JyxcbiAgICAgICAgICBjb2xvcjogJyNlZWQzMTInLFxuICAgICAgICAgIHJvdGF0aW9uOiAtNDUsXG4gICAgICAgICAgbGluZVdpZHRoOiA2LFxuICAgICAgICAgIHNwYWNpbmc6IDEwXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgICBmaWxsPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgaWQ6ICdmcmllcydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlkOiAnZG90cydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgICBpZDogJ3NhbmR3aWNoJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaWQ6ICdsaW5lcydcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICAgIGJvcmRlckNvbG9yPXt7IGZyb206ICdjb2xvcicsIG1vZGlmaWVyczogW1snZGFya2VyJywgMS42XV0gfX1cbiAgICAgIGF4aXNUb3A9e251bGx9XG4gICAgICBheGlzUmlnaHQ9e251bGx9XG4gICAgICBheGlzQm90dG9tPXt7XG4gICAgICAgIHRpY2tTaXplOiA1LFxuICAgICAgICB0aWNrUGFkZGluZzogNSxcbiAgICAgICAgdGlja1JvdGF0aW9uOiAwLFxuICAgICAgICBsZWdlbmQ6ICdQcm9kdWN0JyxcbiAgICAgICAgbGVnZW5kUG9zaXRpb246ICdtaWRkbGUnLFxuICAgICAgICBsZWdlbmRPZmZzZXQ6IDMyXG4gICAgICB9fVxuICAgICAgYXhpc0xlZnQ9e3tcbiAgICAgICAgdGlja1NpemU6IDUsXG4gICAgICAgIHRpY2tQYWRkaW5nOiA1LFxuICAgICAgICB0aWNrUm90YXRpb246IDAsXG4gICAgICAgIGxlZ2VuZDogJ0Ftb3VudCcsXG4gICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAnbWlkZGxlJyxcbiAgICAgICAgbGVnZW5kT2Zmc2V0OiAtNDBcbiAgICAgIH19XG4gICAgICBsYWJlbFNraXBXaWR0aD17MTJ9XG4gICAgICBsYWJlbFNraXBIZWlnaHQ9ezEyfVxuICAgICAgbGFiZWxUZXh0Q29sb3I9e3sgZnJvbTogJ2NvbG9yJywgbW9kaWZpZXJzOiBbWydkYXJrZXInLCAxLjZdXSB9fVxuICAgICAgbGVnZW5kcz17W1xuICAgICAgICB7XG4gICAgICAgICAgZGF0YUZyb206ICdrZXlzJyxcbiAgICAgICAgICBhbmNob3I6ICdib3R0b20tcmlnaHQnLFxuICAgICAgICAgIGRpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAganVzdGlmeTogZmFsc2UsXG4gICAgICAgICAgdHJhbnNsYXRlWDogMTIwLFxuICAgICAgICAgIHRyYW5zbGF0ZVk6IDAsXG4gICAgICAgICAgaXRlbXNTcGFjaW5nOiAyLFxuICAgICAgICAgIGl0ZW1XaWR0aDogMTAwLFxuICAgICAgICAgIGl0ZW1IZWlnaHQ6IDIwLFxuICAgICAgICAgIGl0ZW1EaXJlY3Rpb246ICdsZWZ0LXRvLXJpZ2h0JyxcbiAgICAgICAgICBpdGVtT3BhY2l0eTogMC44NSxcbiAgICAgICAgICBzeW1ib2xTaXplOiAyMCxcbiAgICAgICAgICBlZmZlY3RzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiAnaG92ZXInLFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGl0ZW1PcGFjaXR5OiAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgICBhbmltYXRlPXt0cnVlfVxuICAgICAgbW90aW9uU3RpZmZuZXNzPXs5MH1cbiAgICAgIG1vdGlvbkRhbXBpbmc9ezE1fVxuICAgIC8+XG4gIClcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQnlQbGF0Zm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/ByPlatform.js\n");

/***/ })

});