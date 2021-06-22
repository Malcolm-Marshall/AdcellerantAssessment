/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/ByProduct.js":
/*!***************************************!*\
  !*** ./pages/components/ByProduct.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _bar = __webpack_require__(/*! @nivo/bar */ \"./node_modules/@nivo/bar/dist/nivo-bar.es.js\");\n\nvar _jsxFileName = \"/Users/malcolmmarshall/Desktop/TakeHome/AdcellerantAssessment/pages/components/ByProduct.js\",\n    _this = void 0;\n\nvar ByProduct = function ByProduct(_ref) {\n  var data = _ref.data;\n  var formatData = {};\n  var finalDataFormat = [];\n\n  for (var i = 0; i < data.length; i++) {\n    var productObj = {\n      clicks: 0,\n      impressions: 0\n    };\n\n    if (!formatData[data[i].product]) {\n      formatData[data[i].product] = Object.create(productObj);\n      formatData[data[i].product].clicks = data[i].clicks;\n      formatData[data[i].product].impressions = data[i].impressions;\n    } else {\n      formatData[data[i].product].clicks += data[i].clicks;\n      formatData[data[i].product].impressions += data[i].impressions;\n    }\n  }\n\n  for (var key in formatData) {\n    var formatObj = {};\n    formatObj[\"product\"] = key;\n    formatObj['Clicks'] = formatData[key].clicks;\n    formatObj['Impressions'] = formatData[key].impressions;\n    finalDataFormat.push(formatObj);\n  }\n\n  console.log(finalDataFormat);\n  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_bar.ResponsiveBar, {\n    data: finalDataFormat,\n    keys: ['Clicks', 'Impressions'],\n    indexBy: \"product\",\n    margin: {\n      top: 50,\n      right: 130,\n      bottom: 50,\n      left: 60\n    },\n    padding: 0.3,\n    valueScale: {\n      type: 'linear'\n    },\n    indexScale: {\n      type: 'band',\n      round: true\n    },\n    colors: {\n      scheme: 'nivo'\n    },\n    defs: [{\n      id: 'dots',\n      type: 'patternDots',\n      background: 'inherit',\n      color: '#38bcb2',\n      size: 4,\n      padding: 1,\n      stagger: true\n    }, {\n      id: 'lines',\n      type: 'patternLines',\n      background: 'inherit',\n      color: '#eed312',\n      rotation: -45,\n      lineWidth: 6,\n      spacing: 10\n    }],\n    fill: [{\n      match: {\n        id: 'fries'\n      },\n      id: 'dots'\n    }, {\n      match: {\n        id: 'sandwich'\n      },\n      id: 'lines'\n    }],\n    borderColor: {\n      from: 'color',\n      modifiers: [['darker', 1.6]]\n    },\n    axisTop: null,\n    axisRight: null,\n    axisBottom: {\n      tickSize: 5,\n      tickPadding: 5,\n      tickRotation: 0,\n      legend: 'Product',\n      legendPosition: 'middle',\n      legendOffset: 32\n    },\n    axisLeft: {\n      tickSize: 5,\n      tickPadding: 5,\n      tickRotation: 0,\n      legend: 'Amount',\n      legendPosition: 'middle',\n      legendOffset: -40\n    },\n    labelSkipWidth: 12,\n    labelSkipHeight: 12,\n    labelTextColor: {\n      from: 'color',\n      modifiers: [['darker', 1.6]]\n    },\n    legends: [{\n      dataFrom: 'keys',\n      anchor: 'bottom-right',\n      direction: 'column',\n      justify: false,\n      translateX: 120,\n      translateY: 0,\n      itemsSpacing: 2,\n      itemWidth: 100,\n      itemHeight: 20,\n      itemDirection: 'left-to-right',\n      itemOpacity: 0.85,\n      symbolSize: 20,\n      effects: [{\n        on: 'hover',\n        style: {\n          itemOpacity: 1\n        }\n      }]\n    }],\n    animate: true,\n    motionStiffness: 90,\n    motionDamping: 15\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ByProduct;\nmodule.exports = ByProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"ByProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9CeVByb2R1Y3QuanM/MzAzMyJdLCJuYW1lcyI6WyJCeVByb2R1Y3QiLCJkYXRhIiwiZm9ybWF0RGF0YSIsImZpbmFsRGF0YUZvcm1hdCIsImkiLCJsZW5ndGgiLCJwcm9kdWN0T2JqIiwiY2xpY2tzIiwiaW1wcmVzc2lvbnMiLCJwcm9kdWN0IiwiT2JqZWN0IiwiY3JlYXRlIiwia2V5IiwiZm9ybWF0T2JqIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ0eXBlIiwicm91bmQiLCJzY2hlbWUiLCJpZCIsImJhY2tncm91bmQiLCJjb2xvciIsInNpemUiLCJwYWRkaW5nIiwic3RhZ2dlciIsInJvdGF0aW9uIiwibGluZVdpZHRoIiwic3BhY2luZyIsIm1hdGNoIiwiZnJvbSIsIm1vZGlmaWVycyIsInRpY2tTaXplIiwidGlja1BhZGRpbmciLCJ0aWNrUm90YXRpb24iLCJsZWdlbmQiLCJsZWdlbmRQb3NpdGlvbiIsImxlZ2VuZE9mZnNldCIsImRhdGFGcm9tIiwiYW5jaG9yIiwiZGlyZWN0aW9uIiwianVzdGlmeSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwiaXRlbXNTcGFjaW5nIiwiaXRlbVdpZHRoIiwiaXRlbUhlaWdodCIsIml0ZW1EaXJlY3Rpb24iLCJpdGVtT3BhY2l0eSIsInN5bWJvbFNpemUiLCJlZmZlY3RzIiwib24iLCJzdHlsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBRTlCLE1BQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBLE1BQUlDLGVBQWUsR0FBRyxFQUF0Qjs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFD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LGtCQUFZLEVBQUUsQ0FQaEI7QUFRRUMsZUFBUyxFQUFFLEdBUmI7QUFTRUMsZ0JBQVUsRUFBRSxFQVRkO0FBVUVDLG1CQUFhLEVBQUUsZUFWakI7QUFXRUMsaUJBQVcsRUFBRSxJQVhmO0FBWUVDLGdCQUFVLEVBQUUsRUFaZDtBQWFFQyxhQUFPLEVBQUUsQ0FDUDtBQUNFQyxVQUFFLEVBQUUsT0FETjtBQUVFQyxhQUFLLEVBQUU7QUFDTEoscUJBQVcsRUFBRTtBQURSO0FBRlQsT0FETztBQWJYLEtBRE8sQ0FqRVg7QUF5RkUsV0FBTyxFQUFFLElBekZYO0FBMEZFLG1CQUFlLEVBQUUsRUExRm5CO0FBMkZFLGlCQUFhLEVBQUU7QUEzRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQThGRCxDQTVISDs7S0FBTXBELFM7QUE4SEp5RCxNQUFNLENBQUNDLE9BQVAsR0FBaUIxRCxTQUFqQiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvQnlQcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUJhciB9IGZyb20gJ0BuaXZvL2Jhcic7XG5cbmNvbnN0IEJ5UHJvZHVjdCA9ICh7IGRhdGEgfSkgPT4ge1xuXG4gIGxldCBmb3JtYXREYXRhID0ge307XG4gIGxldCBmaW5hbERhdGFGb3JtYXQgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcm9kdWN0T2JqID0ge1xuICAgICAgY2xpY2tzOiAwLFxuICAgICAgaW1wcmVzc2lvbnM6IDBcbiAgICB9O1xuXG4gICAgaWYgKCFmb3JtYXREYXRhW2RhdGFbaV0ucHJvZHVjdF0pIHtcbiAgICAgIGZvcm1hdERhdGFbZGF0YVtpXS5wcm9kdWN0XSA9IE9iamVjdC5jcmVhdGUocHJvZHVjdE9iaik7XG4gICAgICBmb3JtYXREYXRhW2RhdGFbaV0ucHJvZHVjdF0uY2xpY2tzID0gZGF0YVtpXS5jbGlja3M7XG4gICAgICBmb3JtYXREYXRhW2RhdGFbaV0ucHJvZHVjdF0uaW1wcmVzc2lvbnMgPSBkYXRhW2ldLmltcHJlc3Npb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtYXREYXRhW2RhdGFbaV0ucHJvZHVjdF0uY2xpY2tzICs9IGRhdGFbaV0uY2xpY2tzO1xuICAgICAgZm9ybWF0RGF0YVtkYXRhW2ldLnByb2R1Y3RdLmltcHJlc3Npb25zICs9IGRhdGFbaV0uaW1wcmVzc2lvbnM7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIGZvcm1hdERhdGEpIHtcbiAgICBsZXQgZm9ybWF0T2JqID0ge307XG4gICAgZm9ybWF0T2JqW1wicHJvZHVjdFwiXSA9IGtleTtcbiAgICBmb3JtYXRPYmpbJ0NsaWNrcyddID0gZm9ybWF0RGF0YVtrZXldLmNsaWNrcztcbiAgICBmb3JtYXRPYmpbJ0ltcHJlc3Npb25zJ10gPSBmb3JtYXREYXRhW2tleV0uaW1wcmVzc2lvbnM7XG4gICAgZmluYWxEYXRhRm9ybWF0LnB1c2goZm9ybWF0T2JqKTtcbiAgfVxuXG5jb25zb2xlLmxvZyhmaW5hbERhdGFGb3JtYXQpXG4gICAgcmV0dXJuIChcbiAgICA8UmVzcG9uc2l2ZUJhclxuICAgICAgZGF0YT17ZmluYWxEYXRhRm9ybWF0fVxuICAgICAga2V5cz17WydDbGlja3MnLCAnSW1wcmVzc2lvbnMnXX1cbiAgICAgIGluZGV4Qnk9XCJwcm9kdWN0XCJcbiAgICAgIG1hcmdpbj17eyB0b3A6IDUwLCByaWdodDogMTMwLCBib3R0b206IDUwLCBsZWZ0OiA2MCB9fVxuICAgICAgcGFkZGluZz17MC4zfVxuICAgICAgdmFsdWVTY2FsZT17eyB0eXBlOiAnbGluZWFyJyB9fVxuICAgICAgaW5kZXhTY2FsZT17eyB0eXBlOiAnYmFuZCcsIHJvdW5kOiB0cnVlIH19XG4gICAgICBjb2xvcnM9e3sgc2NoZW1lOiAnbml2bycgfX1cbiAgICAgIGRlZnM9e1tcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnZG90cycsXG4gICAgICAgICAgdHlwZTogJ3BhdHRlcm5Eb3RzJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnaW5oZXJpdCcsXG4gICAgICAgICAgY29sb3I6ICcjMzhiY2IyJyxcbiAgICAgICAgICBzaXplOiA0LFxuICAgICAgICAgIHBhZGRpbmc6IDEsXG4gICAgICAgICAgc3RhZ2dlcjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdsaW5lcycsXG4gICAgICAgICAgdHlwZTogJ3BhdHRlcm5MaW5lcycsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ2luaGVyaXQnLFxuICAgICAgICAgIGNvbG9yOiAnI2VlZDMxMicsXG4gICAgICAgICAgcm90YXRpb246IC00NSxcbiAgICAgICAgICBsaW5lV2lkdGg6IDYsXG4gICAgICAgICAgc3BhY2luZzogMTBcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICAgIGZpbGw9e1tcbiAgICAgICAge1xuICAgICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgICBpZDogJ2ZyaWVzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaWQ6ICdkb3RzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgIGlkOiAnc2FuZHdpY2gnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpZDogJ2xpbmVzJ1xuICAgICAgICB9XG4gICAgICBdfVxuICAgICAgYm9yZGVyQ29sb3I9e3sgZnJvbTogJ2NvbG9yJywgbW9kaWZpZXJzOiBbWydkYXJrZXInLCAxLjZdXSB9fVxuICAgICAgYXhpc1RvcD17bnVsbH1cbiAgICAgIGF4aXNSaWdodD17bnVsbH1cbiAgICAgIGF4aXNCb3R0b209e3tcbiAgICAgICAgdGlja1NpemU6IDUsXG4gICAgICAgIHRpY2tQYWRkaW5nOiA1LFxuICAgICAgICB0aWNrUm90YXRpb246IDAsXG4gICAgICAgIGxlZ2VuZDogJ1Byb2R1Y3QnLFxuICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ21pZGRsZScsXG4gICAgICAgIGxlZ2VuZE9mZnNldDogMzJcbiAgICAgIH19XG4gICAgICBheGlzTGVmdD17e1xuICAgICAgICB0aWNrU2l6ZTogNSxcbiAgICAgICAgdGlja1BhZGRpbmc6IDUsXG4gICAgICAgIHRpY2tSb3RhdGlvbjogMCxcbiAgICAgICAgbGVnZW5kOiAnQW1vdW50JyxcbiAgICAgICAgbGVnZW5kUG9zaXRpb246ICdtaWRkbGUnLFxuICAgICAgICBsZWdlbmRPZmZzZXQ6IC00MFxuICAgICAgfX1cbiAgICAgIGxhYmVsU2tpcFdpZHRoPXsxMn1cbiAgICAgIGxhYmVsU2tpcEhlaWdodD17MTJ9XG4gICAgICBsYWJlbFRleHRDb2xvcj17eyBmcm9tOiAnY29sb3InLCBtb2RpZmllcnM6IFtbJ2RhcmtlcicsIDEuNl1dIH19XG4gICAgICBsZWdlbmRzPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhRnJvbTogJ2tleXMnLFxuICAgICAgICAgIGFuY2hvcjogJ2JvdHRvbS1yaWdodCcsXG4gICAgICAgICAgZGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICBqdXN0aWZ5OiBmYWxzZSxcbiAgICAgICAgICB0cmFuc2xhdGVYOiAxMjAsXG4gICAgICAgICAgdHJhbnNsYXRlWTogMCxcbiAgICAgICAgICBpdGVtc1NwYWNpbmc6IDIsXG4gICAgICAgICAgaXRlbVdpZHRoOiAxMDAsXG4gICAgICAgICAgaXRlbUhlaWdodDogMjAsXG4gICAgICAgICAgaXRlbURpcmVjdGlvbjogJ2xlZnQtdG8tcmlnaHQnLFxuICAgICAgICAgIGl0ZW1PcGFjaXR5OiAwLjg1LFxuICAgICAgICAgIHN5bWJvbFNpemU6IDIwLFxuICAgICAgICAgIGVmZmVjdHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246ICdob3ZlcicsXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgaXRlbU9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXX1cbiAgICAgIGFuaW1hdGU9e3RydWV9XG4gICAgICBtb3Rpb25TdGlmZm5lc3M9ezkwfVxuICAgICAgbW90aW9uRGFtcGluZz17MTV9XG4gICAgLz4pXG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBCeVByb2R1Y3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/ByProduct.js\n");

/***/ })

});