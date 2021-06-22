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
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _bar = __webpack_require__(/*! @nivo/bar */ \"./node_modules/@nivo/bar/dist/nivo-bar.es.js\");\n\nvar _jsxFileName = \"/Users/malcolmmarshall/Desktop/TakeHome/AdcellerantAssessment/pages/components/ByProduct.js\",\n    _this = void 0;\n\nvar ByProduct = function ByProduct(_ref) {\n  var data = _ref.data;\n  var formatData = {};\n  var finalDataFormat = [];\n\n  for (var i = 0; i < data.length; i++) {\n    var productObj = {\n      clicks: 0,\n      impressions: 0\n    };\n\n    if (!formatData[data[i].product]) {\n      formatData[data[i].product] = Object.create(productObj);\n      formatData[data[i].product].clicks = data[i].clicks;\n      formatData[data[i].product].impressions = data[i].impressions;\n    } else {\n      formatData[data[i].product].clicks += data[i].clicks;\n      formatData[data[i].product].impressions += data[i].impressions;\n    }\n  }\n\n  for (var key in formatData) {\n    var formatObj = {};\n    formatObj[\"product\"] = key;\n    formatObj['Clicks'] = formatData[key].clicks;\n    formatObj['Impressions'] = formatData[key].impressions;\n    finalDataFormat.push(formatObj);\n  }\n\n  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_bar.ResponsiveBar, {\n    data: finalDataFormat,\n    keys: ['Clicks', 'Impressions'],\n    indexBy: \"product\",\n    margin: {\n      top: 50,\n      right: 130,\n      bottom: 50,\n      left: 60\n    },\n    padding: 0.3,\n    valueScale: {\n      type: 'linear'\n    },\n    indexScale: {\n      type: 'band',\n      round: true\n    },\n    colors: {\n      scheme: 'nivo'\n    },\n    defs: [{\n      id: 'dots',\n      type: 'patternDots',\n      background: 'inherit',\n      color: '#38bcb2',\n      size: 4,\n      padding: 1,\n      stagger: true\n    }, {\n      id: 'lines',\n      type: 'patternLines',\n      background: 'inherit',\n      color: '#eed312',\n      rotation: -45,\n      lineWidth: 6,\n      spacing: 10\n    }],\n    fill: [{\n      match: {\n        id: 'fries'\n      },\n      id: 'dots'\n    }, {\n      match: {\n        id: 'sandwich'\n      },\n      id: 'lines'\n    }],\n    borderColor: {\n      from: 'color',\n      modifiers: [['darker', 1.6]]\n    },\n    axisTop: null,\n    axisRight: null,\n    axisBottom: {\n      tickSize: 5,\n      tickPadding: 5,\n      tickRotation: 0,\n      legend: 'Product',\n      legendPosition: 'middle',\n      legendOffset: 32\n    },\n    axisLeft: {\n      tickSize: 5,\n      tickPadding: 5,\n      tickRotation: 0,\n      legend: 'Amount',\n      legendPosition: 'middle',\n      legendOffset: -55\n    },\n    labelSkipWidth: 12,\n    labelSkipHeight: 12,\n    labelTextColor: {\n      from: 'color',\n      modifiers: [['darker', 1.6]]\n    },\n    legends: [{\n      dataFrom: 'keys',\n      anchor: 'bottom-right',\n      direction: 'column',\n      justify: false,\n      translateX: 120,\n      translateY: 0,\n      itemsSpacing: 2,\n      itemWidth: 100,\n      itemHeight: 20,\n      itemDirection: 'left-to-right',\n      itemOpacity: 0.85,\n      symbolSize: 20,\n      effects: [{\n        on: 'hover',\n        style: {\n          itemOpacity: 1\n        }\n      }]\n    }],\n    animate: true,\n    motionStiffness: 90,\n    motionDamping: 15\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ByProduct;\nmodule.exports = ByProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"ByProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9CeVByb2R1Y3QuanM/MzAzMyJdLCJuYW1lcyI6WyJCeVByb2R1Y3QiLCJkYXRhIiwiZm9ybWF0RGF0YSIsImZpbmFsRGF0YUZvcm1hdCIsImkiLCJsZW5ndGgiLCJwcm9kdWN0T2JqIiwiY2xpY2tzIiwiaW1wcmVzc2lvbnMiLCJwcm9kdWN0IiwiT2JqZWN0IiwiY3JlYXRlIiwia2V5IiwiZm9ybWF0T2JqIiwicHVzaCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInR5cGUiLCJyb3VuZCIsInNjaGVtZSIsImlkIiwiYmFja2dyb3VuZCIsImNvbG9yIiwic2l6ZSIsInBhZGRpbmciLCJzdGFnZ2VyIiwicm90YXRpb24iLCJsaW5lV2lkdGgiLCJzcGFjaW5nIiwibWF0Y2giLCJmcm9tIiwibW9kaWZpZXJzIiwidGlja1NpemUiLCJ0aWNrUGFkZGluZyIsInRpY2tSb3RhdGlvbiIsImxlZ2VuZCIsImxlZ2VuZFBvc2l0aW9uIiwibGVnZW5kT2Zmc2V0IiwiZGF0YUZyb20iLCJhbmNob3IiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5IiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJpdGVtc1NwYWNpbmciLCJpdGVtV2lkdGgiLCJpdGVtSGVpZ2h0IiwiaXRlbURpcmVjdGlvbiIsIml0ZW1PcGFjaXR5Iiwic3ltYm9sU2l6ZSIsImVmZmVjdHMiLCJvbiIsInN0eWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFFOUIsTUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsTUFBSUMsZUFBZSxHQUFHLEVBQXRCOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsSUFBSSxDQUFD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VSxFQUFFLEVBVGQ7QUFVRUMsbUJBQWEsRUFBRSxlQVZqQjtBQVdFQyxpQkFBVyxFQUFFLElBWGY7QUFZRUMsZ0JBQVUsRUFBRSxFQVpkO0FBYUVDLGFBQU8sRUFBRSxDQUNQO0FBQ0VDLFVBQUUsRUFBRSxPQUROO0FBRUVDLGFBQUssRUFBRTtBQUNMSixxQkFBVyxFQUFFO0FBRFI7QUFGVCxPQURPO0FBYlgsS0FETyxDQWpFWDtBQXlGRSxXQUFPLEVBQUUsSUF6Rlg7QUEwRkUsbUJBQWUsRUFBRSxFQTFGbkI7QUEyRkUsaUJBQWEsRUFBRTtBQTNGakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBOEZELENBM0hIOztLQUFNbEQsUztBQTZISnVELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnhELFNBQWpCIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9CeVByb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBSZXNwb25zaXZlQmFyIH0gZnJvbSAnQG5pdm8vYmFyJztcblxuY29uc3QgQnlQcm9kdWN0ID0gKHsgZGF0YSB9KSA9PiB7XG5cbiAgbGV0IGZvcm1hdERhdGEgPSB7fTtcbiAgbGV0IGZpbmFsRGF0YUZvcm1hdCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2R1Y3RPYmogPSB7XG4gICAgICBjbGlja3M6IDAsXG4gICAgICBpbXByZXNzaW9uczogMFxuICAgIH07XG5cbiAgICBpZiAoIWZvcm1hdERhdGFbZGF0YVtpXS5wcm9kdWN0XSkge1xuICAgICAgZm9ybWF0RGF0YVtkYXRhW2ldLnByb2R1Y3RdID0gT2JqZWN0LmNyZWF0ZShwcm9kdWN0T2JqKTtcbiAgICAgIGZvcm1hdERhdGFbZGF0YVtpXS5wcm9kdWN0XS5jbGlja3MgPSBkYXRhW2ldLmNsaWNrcztcbiAgICAgIGZvcm1hdERhdGFbZGF0YVtpXS5wcm9kdWN0XS5pbXByZXNzaW9ucyA9IGRhdGFbaV0uaW1wcmVzc2lvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1hdERhdGFbZGF0YVtpXS5wcm9kdWN0XS5jbGlja3MgKz0gZGF0YVtpXS5jbGlja3M7XG4gICAgICBmb3JtYXREYXRhW2RhdGFbaV0ucHJvZHVjdF0uaW1wcmVzc2lvbnMgKz0gZGF0YVtpXS5pbXByZXNzaW9ucztcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gZm9ybWF0RGF0YSkge1xuICAgIGxldCBmb3JtYXRPYmogPSB7fTtcbiAgICBmb3JtYXRPYmpbXCJwcm9kdWN0XCJdID0ga2V5O1xuICAgIGZvcm1hdE9ialsnQ2xpY2tzJ10gPSBmb3JtYXREYXRhW2tleV0uY2xpY2tzO1xuICAgIGZvcm1hdE9ialsnSW1wcmVzc2lvbnMnXSA9IGZvcm1hdERhdGFba2V5XS5pbXByZXNzaW9ucztcbiAgICBmaW5hbERhdGFGb3JtYXQucHVzaChmb3JtYXRPYmopO1xuICB9XG5cbiAgICByZXR1cm4gKFxuICAgIDxSZXNwb25zaXZlQmFyXG4gICAgICBkYXRhPXtmaW5hbERhdGFGb3JtYXR9XG4gICAgICBrZXlzPXtbJ0NsaWNrcycsICdJbXByZXNzaW9ucyddfVxuICAgICAgaW5kZXhCeT1cInByb2R1Y3RcIlxuICAgICAgbWFyZ2luPXt7IHRvcDogNTAsIHJpZ2h0OiAxMzAsIGJvdHRvbTogNTAsIGxlZnQ6IDYwIH19XG4gICAgICBwYWRkaW5nPXswLjN9XG4gICAgICB2YWx1ZVNjYWxlPXt7IHR5cGU6ICdsaW5lYXInIH19XG4gICAgICBpbmRleFNjYWxlPXt7IHR5cGU6ICdiYW5kJywgcm91bmQ6IHRydWUgfX1cbiAgICAgIGNvbG9ycz17eyBzY2hlbWU6ICduaXZvJyB9fVxuICAgICAgZGVmcz17W1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdkb3RzJyxcbiAgICAgICAgICB0eXBlOiAncGF0dGVybkRvdHMnLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICdpbmhlcml0JyxcbiAgICAgICAgICBjb2xvcjogJyMzOGJjYjInLFxuICAgICAgICAgIHNpemU6IDQsXG4gICAgICAgICAgcGFkZGluZzogMSxcbiAgICAgICAgICBzdGFnZ2VyOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2xpbmVzJyxcbiAgICAgICAgICB0eXBlOiAncGF0dGVybkxpbmVzJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnaW5oZXJpdCcsXG4gICAgICAgICAgY29sb3I6ICcjZWVkMzEyJyxcbiAgICAgICAgICByb3RhdGlvbjogLTQ1LFxuICAgICAgICAgIGxpbmVXaWR0aDogNixcbiAgICAgICAgICBzcGFjaW5nOiAxMFxuICAgICAgICB9XG4gICAgICBdfVxuICAgICAgZmlsbD17W1xuICAgICAgICB7XG4gICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgIGlkOiAnZnJpZXMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpZDogJ2RvdHMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgaWQ6ICdzYW5kd2ljaCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlkOiAnbGluZXMnXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgICBib3JkZXJDb2xvcj17eyBmcm9tOiAnY29sb3InLCBtb2RpZmllcnM6IFtbJ2RhcmtlcicsIDEuNl1dIH19XG4gICAgICBheGlzVG9wPXtudWxsfVxuICAgICAgYXhpc1JpZ2h0PXtudWxsfVxuICAgICAgYXhpc0JvdHRvbT17e1xuICAgICAgICB0aWNrU2l6ZTogNSxcbiAgICAgICAgdGlja1BhZGRpbmc6IDUsXG4gICAgICAgIHRpY2tSb3RhdGlvbjogMCxcbiAgICAgICAgbGVnZW5kOiAnUHJvZHVjdCcsXG4gICAgICAgIGxlZ2VuZFBvc2l0aW9uOiAnbWlkZGxlJyxcbiAgICAgICAgbGVnZW5kT2Zmc2V0OiAzMlxuICAgICAgfX1cbiAgICAgIGF4aXNMZWZ0PXt7XG4gICAgICAgIHRpY2tTaXplOiA1LFxuICAgICAgICB0aWNrUGFkZGluZzogNSxcbiAgICAgICAgdGlja1JvdGF0aW9uOiAwLFxuICAgICAgICBsZWdlbmQ6ICdBbW91bnQnLFxuICAgICAgICBsZWdlbmRQb3NpdGlvbjogJ21pZGRsZScsXG4gICAgICAgIGxlZ2VuZE9mZnNldDogLTU1XG4gICAgICB9fVxuICAgICAgbGFiZWxTa2lwV2lkdGg9ezEyfVxuICAgICAgbGFiZWxTa2lwSGVpZ2h0PXsxMn1cbiAgICAgIGxhYmVsVGV4dENvbG9yPXt7IGZyb206ICdjb2xvcicsIG1vZGlmaWVyczogW1snZGFya2VyJywgMS42XV0gfX1cbiAgICAgIGxlZ2VuZHM9e1tcbiAgICAgICAge1xuICAgICAgICAgIGRhdGFGcm9tOiAna2V5cycsXG4gICAgICAgICAgYW5jaG9yOiAnYm90dG9tLXJpZ2h0JyxcbiAgICAgICAgICBkaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgIGp1c3RpZnk6IGZhbHNlLFxuICAgICAgICAgIHRyYW5zbGF0ZVg6IDEyMCxcbiAgICAgICAgICB0cmFuc2xhdGVZOiAwLFxuICAgICAgICAgIGl0ZW1zU3BhY2luZzogMixcbiAgICAgICAgICBpdGVtV2lkdGg6IDEwMCxcbiAgICAgICAgICBpdGVtSGVpZ2h0OiAyMCxcbiAgICAgICAgICBpdGVtRGlyZWN0aW9uOiAnbGVmdC10by1yaWdodCcsXG4gICAgICAgICAgaXRlbU9wYWNpdHk6IDAuODUsXG4gICAgICAgICAgc3ltYm9sU2l6ZTogMjAsXG4gICAgICAgICAgZWZmZWN0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjogJ2hvdmVyJyxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBpdGVtT3BhY2l0eTogMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdfVxuICAgICAgYW5pbWF0ZT17dHJ1ZX1cbiAgICAgIG1vdGlvblN0aWZmbmVzcz17OTB9XG4gICAgICBtb3Rpb25EYW1waW5nPXsxNX1cbiAgICAvPilcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IEJ5UHJvZHVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/ByProduct.js\n");

/***/ })

});