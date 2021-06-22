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
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar _interopRequireWildcard = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _bar = __webpack_require__(/*! @nivo/bar */ \"./node_modules/@nivo/bar/dist/nivo-bar.es.js\");\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\n\nvar _jsxFileName = \"/Users/malcolmmarshall/Desktop/TakeHome/AdcellerantAssessment/pages/components/ByPlatform.js\",\n    _this = void 0;\n\nvar ByPlatform = function ByPlatform(_ref) {\n  var data = _ref.data;\n  var formattedData = [];\n  var amazonObj = {\n    platform: 'Amazon',\n    clicks: 0,\n    impressions: 0\n  };\n  var facebookObj = {\n    platform: 'Facebook',\n    clicks: 0,\n    impressions: 0\n  };\n  var linkedInObj = {\n    platform: 'LinkedIn',\n    clicks: 0,\n    impressions: 0\n  };\n  var twitterObj = {\n    platform: 'Twitter',\n    clicks: 0,\n    impressions: 0\n  };\n  var googleObj = {\n    platform: 'Google',\n    clicks: 0,\n    impressions: 0\n  };\n  data.forEach(function (row) {\n    if (row.platform === 'Amazon') {\n      amazonObj.clicks += row.clicks;\n      amazonObj.impressions += row.impressions;\n    } else if (row.platform === 'Facebook') {\n      facebookObj.clicks += row.clicks;\n      facebookObj.impressions += row.impressions;\n    } else if (row.platform === 'LinkedIn') {\n      linkedInObj.clicks += row.clicks;\n      linkedInObj.impressions += row.impressions;\n    } else if (row.platform === 'Twitter') {\n      twitterObj.clicks += row.clicks;\n      twitterObj.impressions += row.impressions;\n    } else if (row.platform === 'Google') {\n      googleObj.clicks += row.clicks;\n      googleObj.impressions += row.impressions;\n    }\n  });\n  formattedData.push(amazonObj, facebookObj, linkedInObj, twitterObj, googleObj);\n  console.log(formattedData);\n  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_bar.ResponsiveBar, {\n    data: formattedData,\n    keys: ['Clicks', 'Impressions'],\n    indexBy: \"product\",\n    margin: {\n      top: 50,\n      right: 130,\n      bottom: 50,\n      left: 60\n    },\n    padding: 0.3,\n    valueScale: {\n      type: 'linear'\n    },\n    indexScale: {\n      type: 'band',\n      round: true\n    },\n    colors: {\n      scheme: 'nivo'\n    },\n    defs: [{\n      id: 'dots',\n      type: 'patternDots',\n      background: 'inherit',\n      color: '#38bcb2',\n      size: 4,\n      padding: 1,\n      stagger: true\n    }, {\n      id: 'lines',\n      type: 'patternLines',\n      background: 'inherit',\n      color: '#eed312',\n      rotation: -45,\n      lineWidth: 6,\n      spacing: 10\n    }],\n    fill: [{\n      match: {\n        id: 'fries'\n      },\n      id: 'dots'\n    }, {\n      match: {\n        id: 'sandwich'\n      },\n      id: 'lines'\n    }],\n    borderColor: {\n      from: 'color',\n      modifiers: [['darker', 1.6]]\n    },\n    axisTop: null,\n    axisRight: null,\n    axisBottom: {\n      tickSize: 5,\n      tickPadding: 5,\n      tickRotation: 0,\n      legend: 'Product',\n      legendPosition: 'middle',\n      legendOffset: 32\n    },\n    axisLeft: {\n      tickSize: 5,\n      tickPadding: 5,\n      tickRotation: 0,\n      legend: 'Amount',\n      legendPosition: 'middle',\n      legendOffset: -40\n    },\n    labelSkipWidth: 12,\n    labelSkipHeight: 12,\n    labelTextColor: {\n      from: 'color',\n      modifiers: [['darker', 1.6]]\n    },\n    legends: [{\n      dataFrom: 'keys',\n      anchor: 'bottom-right',\n      direction: 'column',\n      justify: false,\n      translateX: 120,\n      translateY: 0,\n      itemsSpacing: 2,\n      itemWidth: 100,\n      itemHeight: 20,\n      itemDirection: 'left-to-right',\n      itemOpacity: 0.85,\n      symbolSize: 20,\n      effects: [{\n        on: 'hover',\n        style: {\n          itemOpacity: 1\n        }\n      }]\n    }],\n    animate: true,\n    motionStiffness: 90,\n    motionDamping: 15\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ByPlatform;\nmodule.exports = ByPlatform;\n\nvar _c;\n\n$RefreshReg$(_c, \"ByPlatform\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9CeVBsYXRmb3JtLmpzPzEzM2QiXSwibmFtZXMiOlsiQnlQbGF0Zm9ybSIsImRhdGEiLCJmb3JtYXR0ZWREYXRhIiwiYW1hem9uT2JqIiwicGxhdGZvcm0iLCJjbGlja3MiLCJpbXByZXNzaW9ucyIsImZhY2Vib29rT2JqIiwibGlua2VkSW5PYmoiLCJ0d2l0dGVyT2JqIiwiZ29vZ2xlT2JqIiwiZm9yRWFjaCIsInJvdyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwidHlwZSIsInJvdW5kIiwic2NoZW1lIiwiaWQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJzaXplIiwicGFkZGluZyIsInN0YWdnZXIiLCJyb3RhdGlvbiIsImxpbmVXaWR0aCIsInNwYWNpbmciLCJtYXRjaCIsImZyb20iLCJtb2RpZmllcnMiLCJ0aWNrU2l6ZSIsInRpY2tQYWRkaW5nIiwidGlja1JvdGF0aW9uIiwibGVnZW5kIiwibGVnZW5kUG9zaXRpb24iLCJsZWdlbmRPZmZzZXQiLCJkYXRhRnJvbSIsImFuY2hvciIsImRpcmVjdGlvbiIsImp1c3RpZnkiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsIml0ZW1zU3BhY2luZyIsIml0ZW1XaWR0aCIsIml0ZW1IZWlnaHQiLCJpdGVtRGlyZWN0aW9uIiwiaXRlbU9wYWNpdHkiLCJzeW1ib2xTaXplIiwiZWZmZWN0cyIsIm9uIiwic3R5bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBRS9CLE1BQUlDLGFBQWEsR0FBRyxFQUFwQjtBQUVBLE1BQUlDLFNBQVMsR0FBRztBQUNkQyxZQUFRLEVBQUUsUUFESTtBQUVkQyxVQUFNLEVB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bkI7QUFnRUUsa0JBQWMsRUFBRTtBQUFFUCxVQUFJLEVBQUUsT0FBUjtBQUFpQkMsZUFBUyxFQUFFLENBQUMsQ0FBQyxRQUFELEVBQVcsR0FBWCxDQUFEO0FBQTVCLEtBaEVsQjtBQWlFRSxXQUFPLEVBQUUsQ0FDUDtBQUNFTyxjQUFRLEVBQUUsTUFEWjtBQUVFQyxZQUFNLEVBQUUsY0FGVjtBQUdFQyxlQUFTLEVBQUUsUUFIYjtBQUlFQyxhQUFPLEVBQUUsS0FKWDtBQUtFQyxnQkFBVSxFQUFFLEdBTGQ7QUFNRUMsZ0JBQVUsRUFBRSxDQU5kO0FBT0VDLGtCQUFZLEVBQUUsQ0FQaEI7QUFRRUMsZUFBUyxFQUFFLEdBUmI7QUFTRUMsZ0JBQVUsRUFBRSxFQVRkO0FBVUVDLG1CQUFhLEVBQUUsZUFWakI7QUFXRUMsaUJBQVcsRUFBRSxJQVhmO0FBWUVDLGdCQUFVLEVBQUUsRUFaZDtBQWFFQyxhQUFPLEVBQUUsQ0FDUDtBQUNFQyxVQUFFLEVBQUUsT0FETjtBQUVFQyxhQUFLLEVBQUU7QUFDTEoscUJBQVcsRUFBRTtBQURSO0FBRlQsT0FETztBQWJYLEtBRE8sQ0FqRVg7QUF5RkUsV0FBTyxFQUFFLElBekZYO0FBMEZFLG1CQUFlLEVBQUUsRUExRm5CO0FBMkZFLGlCQUFhLEVBQUU7QUEzRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStGRCxDQW5KRDs7S0FBTW5ELFU7QUFxSk53RCxNQUFNLENBQUNDLE9BQVAsR0FBaUJ6RCxVQUFqQiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvQnlQbGF0Zm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBSZXNwb25zaXZlQmFyIH0gZnJvbSAnQG5pdm8vYmFyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEJ5UGxhdGZvcm0gPSAoeyBkYXRhIH0pID0+IHtcblxuICBsZXQgZm9ybWF0dGVkRGF0YSA9IFtdO1xuXG4gIGxldCBhbWF6b25PYmogPSB7XG4gICAgcGxhdGZvcm06ICdBbWF6b24nLFxuICAgIGNsaWNrczogMCxcbiAgICBpbXByZXNzaW9uczogMFxuICB9O1xuICBsZXQgZmFjZWJvb2tPYmogPSB7XG4gICAgcGxhdGZvcm06ICdGYWNlYm9vaycsXG4gICAgY2xpY2tzOiAwLFxuICAgIGltcHJlc3Npb25zOiAwXG4gIH1cbiAgbGV0IGxpbmtlZEluT2JqID0ge1xuICAgIHBsYXRmb3JtOiAnTGlua2VkSW4nLFxuICAgIGNsaWNrczogMCxcbiAgICBpbXByZXNzaW9uczogMFxuICB9XG4gIGxldCB0d2l0dGVyT2JqID0ge1xuICAgIHBsYXRmb3JtOiAnVHdpdHRlcicsXG4gICAgY2xpY2tzOiAwLFxuICAgIGltcHJlc3Npb25zOiAwXG4gIH1cbiAgbGV0IGdvb2dsZU9iaiA9IHtcbiAgICBwbGF0Zm9ybTogJ0dvb2dsZScsXG4gICAgY2xpY2tzOiAwLFxuICAgIGltcHJlc3Npb25zOiAwXG4gIH1cblxuICBkYXRhLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGlmIChyb3cucGxhdGZvcm0gPT09ICdBbWF6b24nKSB7XG4gICAgICBhbWF6b25PYmouY2xpY2tzICs9IHJvdy5jbGlja3M7XG4gICAgICBhbWF6b25PYmouaW1wcmVzc2lvbnMgKz0gcm93LmltcHJlc3Npb25zO1xuICAgIH0gZWxzZSBpZiAocm93LnBsYXRmb3JtID09PSAnRmFjZWJvb2snKSB7XG4gICAgICBmYWNlYm9va09iai5jbGlja3MgKz0gcm93LmNsaWNrcztcbiAgICAgIGZhY2Vib29rT2JqLmltcHJlc3Npb25zICs9IHJvdy5pbXByZXNzaW9ucztcbiAgICB9IGVsc2UgaWYgKHJvdy5wbGF0Zm9ybSA9PT0gJ0xpbmtlZEluJykge1xuICAgICAgbGlua2VkSW5PYmouY2xpY2tzICs9IHJvdy5jbGlja3M7XG4gICAgICBsaW5rZWRJbk9iai5pbXByZXNzaW9ucyArPSByb3cuaW1wcmVzc2lvbnM7XG4gICAgfSBlbHNlIGlmIChyb3cucGxhdGZvcm0gPT09ICdUd2l0dGVyJykge1xuICAgICAgdHdpdHRlck9iai5jbGlja3MgKz0gcm93LmNsaWNrcztcbiAgICAgIHR3aXR0ZXJPYmouaW1wcmVzc2lvbnMgKz0gcm93LmltcHJlc3Npb25zO1xuICAgIH0gZWxzZSBpZiAocm93LnBsYXRmb3JtID09PSAnR29vZ2xlJykge1xuICAgICAgZ29vZ2xlT2JqLmNsaWNrcyArPSByb3cuY2xpY2tzO1xuICAgICAgZ29vZ2xlT2JqLmltcHJlc3Npb25zICs9IHJvdy5pbXByZXNzaW9ucztcbiAgICB9XG4gfSlcblxuIGZvcm1hdHRlZERhdGEucHVzaChhbWF6b25PYmosIGZhY2Vib29rT2JqLCBsaW5rZWRJbk9iaiwgdHdpdHRlck9iaiwgZ29vZ2xlT2JqKTtcbiBjb25zb2xlLmxvZyhmb3JtYXR0ZWREYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxSZXNwb25zaXZlQmFyXG4gICAgICBkYXRhPXtmb3JtYXR0ZWREYXRhfVxuICAgICAga2V5cz17WydDbGlja3MnLCAnSW1wcmVzc2lvbnMnXX1cbiAgICAgIGluZGV4Qnk9XCJwcm9kdWN0XCJcbiAgICAgIG1hcmdpbj17eyB0b3A6IDUwLCByaWdodDogMTMwLCBib3R0b206IDUwLCBsZWZ0OiA2MCB9fVxuICAgICAgcGFkZGluZz17MC4zfVxuICAgICAgdmFsdWVTY2FsZT17eyB0eXBlOiAnbGluZWFyJyB9fVxuICAgICAgaW5kZXhTY2FsZT17eyB0eXBlOiAnYmFuZCcsIHJvdW5kOiB0cnVlIH19XG4gICAgICBjb2xvcnM9e3sgc2NoZW1lOiAnbml2bycgfX1cbiAgICAgIGRlZnM9e1tcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnZG90cycsXG4gICAgICAgICAgdHlwZTogJ3BhdHRlcm5Eb3RzJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnaW5oZXJpdCcsXG4gICAgICAgICAgY29sb3I6ICcjMzhiY2IyJyxcbiAgICAgICAgICBzaXplOiA0LFxuICAgICAgICAgIHBhZGRpbmc6IDEsXG4gICAgICAgICAgc3RhZ2dlcjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdsaW5lcycsXG4gICAgICAgICAgdHlwZTogJ3BhdHRlcm5MaW5lcycsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ2luaGVyaXQnLFxuICAgICAgICAgIGNvbG9yOiAnI2VlZDMxMicsXG4gICAgICAgICAgcm90YXRpb246IC00NSxcbiAgICAgICAgICBsaW5lV2lkdGg6IDYsXG4gICAgICAgICAgc3BhY2luZzogMTBcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICAgIGZpbGw9e1tcbiAgICAgICAge1xuICAgICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgICBpZDogJ2ZyaWVzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaWQ6ICdkb3RzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgIGlkOiAnc2FuZHdpY2gnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpZDogJ2xpbmVzJ1xuICAgICAgICB9XG4gICAgICBdfVxuICAgICAgYm9yZGVyQ29sb3I9e3sgZnJvbTogJ2NvbG9yJywgbW9kaWZpZXJzOiBbWydkYXJrZXInLCAxLjZdXSB9fVxuICAgICAgYXhpc1RvcD17bnVsbH1cbiAgICAgIGF4aXNSaWdodD17bnVsbH1cbiAgICAgIGF4aXNCb3R0b209e3tcbiAgICAgICAgdGlja1NpemU6IDUsXG4gICAgICAgIHRpY2tQYWRkaW5nOiA1LFxuICAgICAgICB0aWNrUm90YXRpb246IDAsXG4gICAgICAgIGxlZ2VuZDogJ1Byb2R1Y3QnLFxuICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ21pZGRsZScsXG4gICAgICAgIGxlZ2VuZE9mZnNldDogMzJcbiAgICAgIH19XG4gICAgICBheGlzTGVmdD17e1xuICAgICAgICB0aWNrU2l6ZTogNSxcbiAgICAgICAgdGlja1BhZGRpbmc6IDUsXG4gICAgICAgIHRpY2tSb3RhdGlvbjogMCxcbiAgICAgICAgbGVnZW5kOiAnQW1vdW50JyxcbiAgICAgICAgbGVnZW5kUG9zaXRpb246ICdtaWRkbGUnLFxuICAgICAgICBsZWdlbmRPZmZzZXQ6IC00MFxuICAgICAgfX1cbiAgICAgIGxhYmVsU2tpcFdpZHRoPXsxMn1cbiAgICAgIGxhYmVsU2tpcEhlaWdodD17MTJ9XG4gICAgICBsYWJlbFRleHRDb2xvcj17eyBmcm9tOiAnY29sb3InLCBtb2RpZmllcnM6IFtbJ2RhcmtlcicsIDEuNl1dIH19XG4gICAgICBsZWdlbmRzPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhRnJvbTogJ2tleXMnLFxuICAgICAgICAgIGFuY2hvcjogJ2JvdHRvbS1yaWdodCcsXG4gICAgICAgICAgZGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICBqdXN0aWZ5OiBmYWxzZSxcbiAgICAgICAgICB0cmFuc2xhdGVYOiAxMjAsXG4gICAgICAgICAgdHJhbnNsYXRlWTogMCxcbiAgICAgICAgICBpdGVtc1NwYWNpbmc6IDIsXG4gICAgICAgICAgaXRlbVdpZHRoOiAxMDAsXG4gICAgICAgICAgaXRlbUhlaWdodDogMjAsXG4gICAgICAgICAgaXRlbURpcmVjdGlvbjogJ2xlZnQtdG8tcmlnaHQnLFxuICAgICAgICAgIGl0ZW1PcGFjaXR5OiAwLjg1LFxuICAgICAgICAgIHN5bWJvbFNpemU6IDIwLFxuICAgICAgICAgIGVmZmVjdHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246ICdob3ZlcicsXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgaXRlbU9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXX1cbiAgICAgIGFuaW1hdGU9e3RydWV9XG4gICAgICBtb3Rpb25TdGlmZm5lc3M9ezkwfVxuICAgICAgbW90aW9uRGFtcGluZz17MTV9XG4gICAgLz5cbiAgKVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCeVBsYXRmb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/ByPlatform.js\n");

/***/ })

});