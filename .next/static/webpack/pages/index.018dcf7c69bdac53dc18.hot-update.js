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
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar _interopRequireWildcard = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _bar = __webpack_require__(/*! @nivo/bar */ \"./node_modules/@nivo/bar/dist/nivo-bar.es.js\");\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\n\nvar _jsxFileName = \"/Users/malcolmmarshall/Desktop/TakeHome/AdcellerantAssessment/pages/components/ByPlatform.js\",\n    _this = void 0,\n    _s = $RefreshSig$();\n\nvar ByPlatform = function ByPlatform(_ref) {\n  _s();\n\n  var data = _ref.data;\n\n  var _useState = (0, _react.useState)([]),\n      amazon = _useState[0],\n      setAmazon = _useState[1];\n\n  var _useState2 = (0, _react.useState)({}),\n      facebook = _useState2[0],\n      setFacebook = _useState2[1];\n\n  var _useState3 = (0, _react.useState)({}),\n      google = _useState3[0],\n      setGoogle = _useState3[1];\n\n  var _useState4 = (0, _react.useState)({}),\n      linkedin = _useState4[0],\n      setLinkedin = _useState4[1];\n\n  var _useState5 = (0, _react.useState)({}),\n      twitter = _useState5[0],\n      setTwitter = _useState5[1];\n\n  var amazonObj = {\n    platform: 'Amazon',\n    clicks: 0,\n    impressions: 0\n  };\n  var facebookObj = {\n    platform: 'Facebook',\n    clicks: 0,\n    impressions: 0\n  };\n  var linkedInObj = {\n    platform: 'LinkedIn',\n    clicks: 0,\n    impressions: 0\n  };\n  var twitterObj = {\n    platform: 'Twitter',\n    clicks: 0,\n    impressions: 0\n  };\n  var googleObj = {\n    platform: 'Google',\n    clicks: 0,\n    impressions: 0\n  };\n  data.forEach(function (row) {\n    if (row.platform === 'Amazon') {\n      amazonObj.clicks += row.clicks;\n      amazonObj.impressions += row.impressions;\n    } else if (row.platform === 'Facebook') {\n      facebookObj.clicks += row.clicks;\n      facebookObj.impressions += row.impressions;\n    } else if (row.platform === 'LinkedIn') {\n      linkedInObj.clicks += row.clicks;\n      linkedInObj.impressions += row.impressions;\n    } else if (row.platform === 'Twitter') {\n      twitterObj.clicks += row.clicks;\n      twitterObj.impressions += row.impressions;\n    } else if (row.platform === 'Google') {\n      googleObj.clicks += row.clicks;\n      googleObj.impressions += row.impressions;\n    }\n  });\n  console.log(amazonObj);\n  console.log(facebookObj);\n  console.log(linkedInObj);\n  console.log(twitterObj);\n  console.log(googleObj);\n  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(\"div\", {\n    children: \"hi\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 12\n  }, _this) // <ResponsiveBar\n  //   data={amazonObj}\n  //   keys={['Clicks', 'Impressions']}\n  //   indexBy=\"product\"\n  //   margin={{ top: 50, right: 130, bottom: 50, left: 60 }}\n  //   padding={0.3}\n  //   valueScale={{ type: 'linear' }}\n  //   indexScale={{ type: 'band', round: true }}\n  //   colors={{ scheme: 'nivo' }}\n  //   defs={[\n  //     {\n  //       id: 'dots',\n  //       type: 'patternDots',\n  //       background: 'inherit',\n  //       color: '#38bcb2',\n  //       size: 4,\n  //       padding: 1,\n  //       stagger: true\n  //     },\n  //     {\n  //       id: 'lines',\n  //       type: 'patternLines',\n  //       background: 'inherit',\n  //       color: '#eed312',\n  //       rotation: -45,\n  //       lineWidth: 6,\n  //       spacing: 10\n  //     }\n  //   ]}\n  //   fill={[\n  //     {\n  //       match: {\n  //         id: 'fries'\n  //       },\n  //       id: 'dots'\n  //     },\n  //     {\n  //       match: {\n  //         id: 'sandwich'\n  //       },\n  //       id: 'lines'\n  //     }\n  //   ]}\n  //   borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}\n  //   axisTop={null}\n  //   axisRight={null}\n  //   axisBottom={{\n  //     tickSize: 5,\n  //     tickPadding: 5,\n  //     tickRotation: 0,\n  //     legend: 'Product',\n  //     legendPosition: 'middle',\n  //     legendOffset: 32\n  //   }}\n  //   axisLeft={{\n  //     tickSize: 5,\n  //     tickPadding: 5,\n  //     tickRotation: 0,\n  //     legend: 'Amount',\n  //     legendPosition: 'middle',\n  //     legendOffset: -40\n  //   }}\n  //   labelSkipWidth={12}\n  //   labelSkipHeight={12}\n  //   labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}\n  //   legends={[\n  //     {\n  //       dataFrom: 'keys',\n  //       anchor: 'bottom-right',\n  //       direction: 'column',\n  //       justify: false,\n  //       translateX: 120,\n  //       translateY: 0,\n  //       itemsSpacing: 2,\n  //       itemWidth: 100,\n  //       itemHeight: 20,\n  //       itemDirection: 'left-to-right',\n  //       itemOpacity: 0.85,\n  //       symbolSize: 20,\n  //       effects: [\n  //         {\n  //           on: 'hover',\n  //           style: {\n  //             itemOpacity: 1\n  //           }\n  //         }\n  //       ]\n  //     }\n  //   ]}\n  //   animate={true}\n  //   motionStiffness={90}\n  //   motionDamping={15}\n  // />\n  ;\n};\n\n_s(ByPlatform, \"p2rB0W5PCszd/8rRWGM/3wsRjCI=\");\n\n_c = ByPlatform;\nmodule.exports = ByPlatform;\n\nvar _c;\n\n$RefreshReg$(_c, \"ByPlatform\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9CeVBsYXRmb3JtLmpzPzEzM2QiXSwibmFtZXMiOlsiQnlQbGF0Zm9ybSIsImRhdGEiLCJhbWF6b24iLCJzZXRBbWF6b24iLCJmYWNlYm9vayIsInNldEZhY2Vib29rIiwiZ29vZ2xlIiwic2V0R29vZ2xlIiwibGlua2VkaW4iLCJzZXRMaW5rZWRpbiIsInR3aXR0ZXIiLCJzZXRUd2l0dGVyIiwiYW1hem9uT2JqIiwicGxhdGZvcm0iLCJjbGlja3MiLCJpbXByZXNzaW9ucyIsImZhY2Vib29rT2JqIiwibGlua2VkSW5PYmoiLCJ0d2l0dGVyT2JqIiwiZ29vZ2xlT2JqIiwiZm9yRWFjaCIsInJvdyIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFFSCxxQkFBUyxFQUFULENBRkc7QUFBQSxNQUV4QkMsTUFGd0I7QUFBQSxNQUVoQkMsU0FGZ0I7O0FBQUEsbUJBR0MscUJBQVMsRUFBVCxDQUhEO0FBQUEsTUFHeEJDLFFBSHdCO0FBQUEsTUFHZEMsV0FIYzs7QUFBQSxtQkFJSCxxQkFBUyxFQUFULENBSkc7QUFBQSxNQUl4QkMsTUFKd0I7QUFBQSxNQUloQkMsU0FKZ0I7O0FBQUEsbUJBS0MscUJBQVMsRUFBVCxDQUxEO0FBQUEsTUFLeEJDLFFBTHdCO0FBQUEsTUFLZEMsV0FMYzs7QUFBQSxtQkFNRCxxQkFBUyxFQUFULENBTkM7QUFBQSxNQU14QkMsT0FOd0I7QUFBQSxNQU1mQyxVQU5lOztBQVEvQixNQUFJQyxTQUFTLEdBQUc7QUFDZEMsWUFBUSxFQUFFLFFBREk7QUFFZEMsVUFBTSxFQUFFLENBRk07QUFHZEMsZUFBVyxFQUFFO0FBSEMsR0FBaEI7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0ZGO0FBK0ZELENBekpEOztHQUFNbkIsVTs7S0FBQUEsVTtBQTJKTndCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpCLFVBQWpCIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9CeVBsYXRmb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IFJlc3BvbnNpdmVCYXIgfSBmcm9tICdAbml2by9iYXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQnlQbGF0Zm9ybSA9ICh7IGRhdGEgfSkgPT4ge1xuXG4gIGNvbnN0IFthbWF6b24sIHNldEFtYXpvbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmYWNlYm9vaywgc2V0RmFjZWJvb2tdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbZ29vZ2xlLCBzZXRHb29nbGVdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbbGlua2VkaW4sIHNldExpbmtlZGluXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3R3aXR0ZXIsIHNldFR3aXR0ZXJdID0gdXNlU3RhdGUoe30pO1xuXG4gIGxldCBhbWF6b25PYmogPSB7XG4gICAgcGxhdGZvcm06ICdBbWF6b24nLFxuICAgIGNsaWNrczogMCxcbiAgICBpbXByZXNzaW9uczogMFxuICB9O1xuICBsZXQgZmFjZWJvb2tPYmogPSB7XG4gICAgcGxhdGZvcm06ICdGYWNlYm9vaycsXG4gICAgY2xpY2tzOiAwLFxuICAgIGltcHJlc3Npb25zOiAwXG4gIH1cbiAgbGV0IGxpbmtlZEluT2JqID0ge1xuICAgIHBsYXRmb3JtOiAnTGlua2VkSW4nLFxuICAgIGNsaWNrczogMCxcbiAgICBpbXByZXNzaW9uczogMFxuICB9XG4gIGxldCB0d2l0dGVyT2JqID0ge1xuICAgIHBsYXRmb3JtOiAnVHdpdHRlcicsXG4gICAgY2xpY2tzOiAwLFxuICAgIGltcHJlc3Npb25zOiAwXG4gIH1cbiAgbGV0IGdvb2dsZU9iaiA9IHtcbiAgICBwbGF0Zm9ybTogJ0dvb2dsZScsXG4gICAgY2xpY2tzOiAwLFxuICAgIGltcHJlc3Npb25zOiAwXG4gIH1cblxuICBkYXRhLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGlmIChyb3cucGxhdGZvcm0gPT09ICdBbWF6b24nKSB7XG4gICAgICBhbWF6b25PYmouY2xpY2tzICs9IHJvdy5jbGlja3M7XG4gICAgICBhbWF6b25PYmouaW1wcmVzc2lvbnMgKz0gcm93LmltcHJlc3Npb25zO1xuICAgIH0gZWxzZSBpZiAocm93LnBsYXRmb3JtID09PSAnRmFjZWJvb2snKSB7XG4gICAgICBmYWNlYm9va09iai5jbGlja3MgKz0gcm93LmNsaWNrcztcbiAgICAgIGZhY2Vib29rT2JqLmltcHJlc3Npb25zICs9IHJvdy5pbXByZXNzaW9ucztcbiAgICB9IGVsc2UgaWYgKHJvdy5wbGF0Zm9ybSA9PT0gJ0xpbmtlZEluJykge1xuICAgICAgbGlua2VkSW5PYmouY2xpY2tzICs9IHJvdy5jbGlja3M7XG4gICAgICBsaW5rZWRJbk9iai5pbXByZXNzaW9ucyArPSByb3cuaW1wcmVzc2lvbnM7XG4gICAgfSBlbHNlIGlmIChyb3cucGxhdGZvcm0gPT09ICdUd2l0dGVyJykge1xuICAgICAgdHdpdHRlck9iai5jbGlja3MgKz0gcm93LmNsaWNrcztcbiAgICAgIHR3aXR0ZXJPYmouaW1wcmVzc2lvbnMgKz0gcm93LmltcHJlc3Npb25zO1xuICAgIH0gZWxzZSBpZiAocm93LnBsYXRmb3JtID09PSAnR29vZ2xlJykge1xuICAgICAgZ29vZ2xlT2JqLmNsaWNrcyArPSByb3cuY2xpY2tzO1xuICAgICAgZ29vZ2xlT2JqLmltcHJlc3Npb25zICs9IHJvdy5pbXByZXNzaW9ucztcbiAgICB9XG4gfSlcbiAgY29uc29sZS5sb2coYW1hem9uT2JqKVxuICBjb25zb2xlLmxvZyhmYWNlYm9va09iailcbiAgY29uc29sZS5sb2cobGlua2VkSW5PYmopXG4gIGNvbnNvbGUubG9nKHR3aXR0ZXJPYmopXG4gIGNvbnNvbGUubG9nKGdvb2dsZU9iailcblxuICByZXR1cm4gKCA8ZGl2PmhpPC9kaXY+XG4gICAgLy8gPFJlc3BvbnNpdmVCYXJcbiAgICAvLyAgIGRhdGE9e2FtYXpvbk9ian1cbiAgICAvLyAgIGtleXM9e1snQ2xpY2tzJywgJ0ltcHJlc3Npb25zJ119XG4gICAgLy8gICBpbmRleEJ5PVwicHJvZHVjdFwiXG4gICAgLy8gICBtYXJnaW49e3sgdG9wOiA1MCwgcmlnaHQ6IDEzMCwgYm90dG9tOiA1MCwgbGVmdDogNjAgfX1cbiAgICAvLyAgIHBhZGRpbmc9ezAuM31cbiAgICAvLyAgIHZhbHVlU2NhbGU9e3sgdHlwZTogJ2xpbmVhcicgfX1cbiAgICAvLyAgIGluZGV4U2NhbGU9e3sgdHlwZTogJ2JhbmQnLCByb3VuZDogdHJ1ZSB9fVxuICAgIC8vICAgY29sb3JzPXt7IHNjaGVtZTogJ25pdm8nIH19XG4gICAgLy8gICBkZWZzPXtbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBpZDogJ2RvdHMnLFxuICAgIC8vICAgICAgIHR5cGU6ICdwYXR0ZXJuRG90cycsXG4gICAgLy8gICAgICAgYmFja2dyb3VuZDogJ2luaGVyaXQnLFxuICAgIC8vICAgICAgIGNvbG9yOiAnIzM4YmNiMicsXG4gICAgLy8gICAgICAgc2l6ZTogNCxcbiAgICAvLyAgICAgICBwYWRkaW5nOiAxLFxuICAgIC8vICAgICAgIHN0YWdnZXI6IHRydWVcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIGlkOiAnbGluZXMnLFxuICAgIC8vICAgICAgIHR5cGU6ICdwYXR0ZXJuTGluZXMnLFxuICAgIC8vICAgICAgIGJhY2tncm91bmQ6ICdpbmhlcml0JyxcbiAgICAvLyAgICAgICBjb2xvcjogJyNlZWQzMTInLFxuICAgIC8vICAgICAgIHJvdGF0aW9uOiAtNDUsXG4gICAgLy8gICAgICAgbGluZVdpZHRoOiA2LFxuICAgIC8vICAgICAgIHNwYWNpbmc6IDEwXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIF19XG4gICAgLy8gICBmaWxsPXtbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBtYXRjaDoge1xuICAgIC8vICAgICAgICAgaWQ6ICdmcmllcydcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIGlkOiAnZG90cydcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIG1hdGNoOiB7XG4gICAgLy8gICAgICAgICBpZDogJ3NhbmR3aWNoJ1xuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAgaWQ6ICdsaW5lcydcbiAgICAvLyAgICAgfVxuICAgIC8vICAgXX1cbiAgICAvLyAgIGJvcmRlckNvbG9yPXt7IGZyb206ICdjb2xvcicsIG1vZGlmaWVyczogW1snZGFya2VyJywgMS42XV0gfX1cbiAgICAvLyAgIGF4aXNUb3A9e251bGx9XG4gICAgLy8gICBheGlzUmlnaHQ9e251bGx9XG4gICAgLy8gICBheGlzQm90dG9tPXt7XG4gICAgLy8gICAgIHRpY2tTaXplOiA1LFxuICAgIC8vICAgICB0aWNrUGFkZGluZzogNSxcbiAgICAvLyAgICAgdGlja1JvdGF0aW9uOiAwLFxuICAgIC8vICAgICBsZWdlbmQ6ICdQcm9kdWN0JyxcbiAgICAvLyAgICAgbGVnZW5kUG9zaXRpb246ICdtaWRkbGUnLFxuICAgIC8vICAgICBsZWdlbmRPZmZzZXQ6IDMyXG4gICAgLy8gICB9fVxuICAgIC8vICAgYXhpc0xlZnQ9e3tcbiAgICAvLyAgICAgdGlja1NpemU6IDUsXG4gICAgLy8gICAgIHRpY2tQYWRkaW5nOiA1LFxuICAgIC8vICAgICB0aWNrUm90YXRpb246IDAsXG4gICAgLy8gICAgIGxlZ2VuZDogJ0Ftb3VudCcsXG4gICAgLy8gICAgIGxlZ2VuZFBvc2l0aW9uOiAnbWlkZGxlJyxcbiAgICAvLyAgICAgbGVnZW5kT2Zmc2V0OiAtNDBcbiAgICAvLyAgIH19XG4gICAgLy8gICBsYWJlbFNraXBXaWR0aD17MTJ9XG4gICAgLy8gICBsYWJlbFNraXBIZWlnaHQ9ezEyfVxuICAgIC8vICAgbGFiZWxUZXh0Q29sb3I9e3sgZnJvbTogJ2NvbG9yJywgbW9kaWZpZXJzOiBbWydkYXJrZXInLCAxLjZdXSB9fVxuICAgIC8vICAgbGVnZW5kcz17W1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgZGF0YUZyb206ICdrZXlzJyxcbiAgICAvLyAgICAgICBhbmNob3I6ICdib3R0b20tcmlnaHQnLFxuICAgIC8vICAgICAgIGRpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgLy8gICAgICAganVzdGlmeTogZmFsc2UsXG4gICAgLy8gICAgICAgdHJhbnNsYXRlWDogMTIwLFxuICAgIC8vICAgICAgIHRyYW5zbGF0ZVk6IDAsXG4gICAgLy8gICAgICAgaXRlbXNTcGFjaW5nOiAyLFxuICAgIC8vICAgICAgIGl0ZW1XaWR0aDogMTAwLFxuICAgIC8vICAgICAgIGl0ZW1IZWlnaHQ6IDIwLFxuICAgIC8vICAgICAgIGl0ZW1EaXJlY3Rpb246ICdsZWZ0LXRvLXJpZ2h0JyxcbiAgICAvLyAgICAgICBpdGVtT3BhY2l0eTogMC44NSxcbiAgICAvLyAgICAgICBzeW1ib2xTaXplOiAyMCxcbiAgICAvLyAgICAgICBlZmZlY3RzOiBbXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgIG9uOiAnaG92ZXInLFxuICAgIC8vICAgICAgICAgICBzdHlsZToge1xuICAgIC8vICAgICAgICAgICAgIGl0ZW1PcGFjaXR5OiAxXG4gICAgLy8gICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICBdXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIF19XG4gICAgLy8gICBhbmltYXRlPXt0cnVlfVxuICAgIC8vICAgbW90aW9uU3RpZmZuZXNzPXs5MH1cbiAgICAvLyAgIG1vdGlvbkRhbXBpbmc9ezE1fVxuICAgIC8vIC8+XG4gIClcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQnlQbGF0Zm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/ByPlatform.js\n");

/***/ })

});