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
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar _interopRequireWildcard = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _bar = __webpack_require__(/*! @nivo/bar */ \"./node_modules/@nivo/bar/dist/nivo-bar.es.js\");\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\n\nvar _jsxFileName = \"/Users/malcolmmarshall/Desktop/TakeHome/AdcellerantAssessment/pages/components/ByPlatform.js\",\n    _this = void 0,\n    _s = $RefreshSig$();\n\nvar ByPlatform = function ByPlatform(_ref) {\n  _s();\n\n  var data = _ref.data;\n\n  var _useState = (0, _react.useState)({}),\n      amazon = _useState[0],\n      setAmazon = _useState[1];\n\n  var _useState2 = (0, _react.useState)({}),\n      facebook = _useState2[0],\n      setFacebook = _useState2[1];\n\n  var _useState3 = (0, _react.useState)({}),\n      google = _useState3[0],\n      setGoogle = _useState3[1];\n\n  var _useState4 = (0, _react.useState)({}),\n      linkedin = _useState4[0],\n      setLinkedin = _useState4[1];\n\n  var _useState5 = (0, _react.useState)({}),\n      twitter = _useState5[0],\n      setTwitter = _useState5[1];\n\n  (0, _react.useEffect)(function () {\n    getPlatforms();\n  }, []);\n\n  var getPlatforms = function getPlatforms() {\n    _axios[\"default\"].get('/api/getPlatform').then(function (res) {\n      console.log(res);\n      setAmazon(res.slice(0, 130));\n      console.log(amazon);\n      console.log('inAmazon');\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(\"div\", {\n    children: \"hi\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 7\n  }, _this) // <ResponsiveBar\n  //   data={finalDataFormat}\n  //   keys={['Clicks', 'Impressions']}\n  //   indexBy=\"product\"\n  //   margin={{ top: 50, right: 130, bottom: 50, left: 60 }}\n  //   padding={0.3}\n  //   valueScale={{ type: 'linear' }}\n  //   indexScale={{ type: 'band', round: true }}\n  //   colors={{ scheme: 'nivo' }}\n  //   defs={[\n  //     {\n  //       id: 'dots',\n  //       type: 'patternDots',\n  //       background: 'inherit',\n  //       color: '#38bcb2',\n  //       size: 4,\n  //       padding: 1,\n  //       stagger: true\n  //     },\n  //     {\n  //       id: 'lines',\n  //       type: 'patternLines',\n  //       background: 'inherit',\n  //       color: '#eed312',\n  //       rotation: -45,\n  //       lineWidth: 6,\n  //       spacing: 10\n  //     }\n  //   ]}\n  //   fill={[\n  //     {\n  //       match: {\n  //         id: 'fries'\n  //       },\n  //       id: 'dots'\n  //     },\n  //     {\n  //       match: {\n  //         id: 'sandwich'\n  //       },\n  //       id: 'lines'\n  //     }\n  //   ]}\n  //   borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}\n  //   axisTop={null}\n  //   axisRight={null}\n  //   axisBottom={{\n  //     tickSize: 5,\n  //     tickPadding: 5,\n  //     tickRotation: 0,\n  //     legend: 'Product',\n  //     legendPosition: 'middle',\n  //     legendOffset: 32\n  //   }}\n  //   axisLeft={{\n  //     tickSize: 5,\n  //     tickPadding: 5,\n  //     tickRotation: 0,\n  //     legend: 'Amount',\n  //     legendPosition: 'middle',\n  //     legendOffset: -40\n  //   }}\n  //   labelSkipWidth={12}\n  //   labelSkipHeight={12}\n  //   labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}\n  //   legends={[\n  //     {\n  //       dataFrom: 'keys',\n  //       anchor: 'bottom-right',\n  //       direction: 'column',\n  //       justify: false,\n  //       translateX: 120,\n  //       translateY: 0,\n  //       itemsSpacing: 2,\n  //       itemWidth: 100,\n  //       itemHeight: 20,\n  //       itemDirection: 'left-to-right',\n  //       itemOpacity: 0.85,\n  //       symbolSize: 20,\n  //       effects: [\n  //         {\n  //           on: 'hover',\n  //           style: {\n  //             itemOpacity: 1\n  //           }\n  //         }\n  //       ]\n  //     }\n  //   ]}\n  //   animate={true}\n  //   motionStiffness={90}\n  //   motionDamping={15}\n  // />\n  ;\n};\n\n_s(ByPlatform, \"iOOuMdFCKcjWCcVcuDtmMX/MZrc=\");\n\n_c = ByPlatform;\nmodule.exports = ByPlatform;\n\nvar _c;\n\n$RefreshReg$(_c, \"ByPlatform\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9CeVBsYXRmb3JtLmpzPzEzM2QiXSwibmFtZXMiOlsiQnlQbGF0Zm9ybSIsImRhdGEiLCJhbWF6b24iLCJzZXRBbWF6b24iLCJmYWNlYm9vayIsInNldEZhY2Vib29rIiwiZ29vZ2xlIiwic2V0R29vZ2xlIiwibGlua2VkaW4iLCJzZXRMaW5rZWRpbiIsInR3aXR0ZXIiLCJzZXRUd2l0dGVyIiwiZ2V0UGxhdGZvcm1zIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInNsaWNlIiwiZXJyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBRUgscUJBQVMsRUFBVCxDQUZHO0FBQUEsTUFFeEJDLE1BRndCO0FBQUEsTUFFaEJDLFNBRmdCOztBQUFBLG1CQUdDLHFCQUFTLEVBQVQsQ0FIRDtBQUFBLE1BR3hCQyxRQUh3QjtBQUFBLE1BR2RDLFdBSGM7O0FBQUEsbUJBSUgscUJBQVMsRUFBVCxDQUpHO0FBQUEsTUFJeEJDLE1BSndCO0FBQUEsTUFJaEJDLFNBSmdCOztBQUFBLG1CQUtDLHFCQUFTLEVBQVQsQ0FMRDtBQUFBLE1BS3hCQyxRQUx3QjtBQUFBLE1BS2RDLFdBTGM7O0FBQUEsbUJBTUQscUJBQVMsRUFBVCxDQU5DO0FBQUEsTUFNeEJDLE9BTndCO0FBQUEsTUFNZkMsVUFOZTs7QUFRL0Isd0JBQVUsWUFBTTtBQUNkQyxnQkFBWTtBQUNiLEdBRkQsRUFFRyxFQUZIOztBQUlBLE1BQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJDLHNCQUFNQyxHQUFOLENBQVUsa0JBQVYsRUFDR0MsSUFESCxDQUNRLFVBQUNDLEdBQUQsRUFBUztBQUNiQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBYixlQUFTLENBQUNhLEdBQUcsQ0FBQ0csS0FBSixDQUFVLENBQVYsRUFBYSxHQUFiLENBQUQsQ0FBVDtBQUNSRixhQUFPLENBQUNDLEdBQVIsQ0FBWWhCLE1BQVo7QUFDQWUsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNPLEtBTkgsV0FNVyxVQUFDRSxHQUFEO0FBQUEsYUFBU0gsT0FBTyxDQUFDQyxHQUFSLENBQVlFLEdBQVosQ0FBVDtBQUFBLEtBTlg7QUFPRCxHQVJEOztBQVVFLHNCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREYsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5RkE7QUFnR0QsQ0F0SEg7O0dBQU1wQixVOztLQUFBQSxVO0FBd0hKcUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdEIsVUFBakIiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0J5UGxhdGZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUJhciB9IGZyb20gJ0BuaXZvL2Jhcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBCeVBsYXRmb3JtID0gKHsgZGF0YSB9KSA9PiB7XG5cbiAgY29uc3QgW2FtYXpvbiwgc2V0QW1hem9uXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2ZhY2Vib29rLCBzZXRGYWNlYm9va10gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtnb29nbGUsIHNldEdvb2dsZV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtsaW5rZWRpbiwgc2V0TGlua2VkaW5dID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbdHdpdHRlciwgc2V0VHdpdHRlcl0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQbGF0Zm9ybXMoKTtcbiAgfSwgW10pXG5cbiAgY29uc3QgZ2V0UGxhdGZvcm1zID0gKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnL2FwaS9nZXRQbGF0Zm9ybScpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHNldEFtYXpvbihyZXMuc2xpY2UoMCwgMTMwKSk7XG5jb25zb2xlLmxvZyhhbWF6b24pXG5jb25zb2xlLmxvZygnaW5BbWF6b24nKVxuICAgICAgfSkuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+aGk8L2Rpdj5cbiAgICAvLyA8UmVzcG9uc2l2ZUJhclxuICAgIC8vICAgZGF0YT17ZmluYWxEYXRhRm9ybWF0fVxuICAgIC8vICAga2V5cz17WydDbGlja3MnLCAnSW1wcmVzc2lvbnMnXX1cbiAgICAvLyAgIGluZGV4Qnk9XCJwcm9kdWN0XCJcbiAgICAvLyAgIG1hcmdpbj17eyB0b3A6IDUwLCByaWdodDogMTMwLCBib3R0b206IDUwLCBsZWZ0OiA2MCB9fVxuICAgIC8vICAgcGFkZGluZz17MC4zfVxuICAgIC8vICAgdmFsdWVTY2FsZT17eyB0eXBlOiAnbGluZWFyJyB9fVxuICAgIC8vICAgaW5kZXhTY2FsZT17eyB0eXBlOiAnYmFuZCcsIHJvdW5kOiB0cnVlIH19XG4gICAgLy8gICBjb2xvcnM9e3sgc2NoZW1lOiAnbml2bycgfX1cbiAgICAvLyAgIGRlZnM9e1tcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIGlkOiAnZG90cycsXG4gICAgLy8gICAgICAgdHlwZTogJ3BhdHRlcm5Eb3RzJyxcbiAgICAvLyAgICAgICBiYWNrZ3JvdW5kOiAnaW5oZXJpdCcsXG4gICAgLy8gICAgICAgY29sb3I6ICcjMzhiY2IyJyxcbiAgICAvLyAgICAgICBzaXplOiA0LFxuICAgIC8vICAgICAgIHBhZGRpbmc6IDEsXG4gICAgLy8gICAgICAgc3RhZ2dlcjogdHJ1ZVxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgaWQ6ICdsaW5lcycsXG4gICAgLy8gICAgICAgdHlwZTogJ3BhdHRlcm5MaW5lcycsXG4gICAgLy8gICAgICAgYmFja2dyb3VuZDogJ2luaGVyaXQnLFxuICAgIC8vICAgICAgIGNvbG9yOiAnI2VlZDMxMicsXG4gICAgLy8gICAgICAgcm90YXRpb246IC00NSxcbiAgICAvLyAgICAgICBsaW5lV2lkdGg6IDYsXG4gICAgLy8gICAgICAgc3BhY2luZzogMTBcbiAgICAvLyAgICAgfVxuICAgIC8vICAgXX1cbiAgICAvLyAgIGZpbGw9e1tcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIG1hdGNoOiB7XG4gICAgLy8gICAgICAgICBpZDogJ2ZyaWVzJ1xuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAgaWQ6ICdkb3RzJ1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgbWF0Y2g6IHtcbiAgICAvLyAgICAgICAgIGlkOiAnc2FuZHdpY2gnXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICBpZDogJ2xpbmVzJ1xuICAgIC8vICAgICB9XG4gICAgLy8gICBdfVxuICAgIC8vICAgYm9yZGVyQ29sb3I9e3sgZnJvbTogJ2NvbG9yJywgbW9kaWZpZXJzOiBbWydkYXJrZXInLCAxLjZdXSB9fVxuICAgIC8vICAgYXhpc1RvcD17bnVsbH1cbiAgICAvLyAgIGF4aXNSaWdodD17bnVsbH1cbiAgICAvLyAgIGF4aXNCb3R0b209e3tcbiAgICAvLyAgICAgdGlja1NpemU6IDUsXG4gICAgLy8gICAgIHRpY2tQYWRkaW5nOiA1LFxuICAgIC8vICAgICB0aWNrUm90YXRpb246IDAsXG4gICAgLy8gICAgIGxlZ2VuZDogJ1Byb2R1Y3QnLFxuICAgIC8vICAgICBsZWdlbmRQb3NpdGlvbjogJ21pZGRsZScsXG4gICAgLy8gICAgIGxlZ2VuZE9mZnNldDogMzJcbiAgICAvLyAgIH19XG4gICAgLy8gICBheGlzTGVmdD17e1xuICAgIC8vICAgICB0aWNrU2l6ZTogNSxcbiAgICAvLyAgICAgdGlja1BhZGRpbmc6IDUsXG4gICAgLy8gICAgIHRpY2tSb3RhdGlvbjogMCxcbiAgICAvLyAgICAgbGVnZW5kOiAnQW1vdW50JyxcbiAgICAvLyAgICAgbGVnZW5kUG9zaXRpb246ICdtaWRkbGUnLFxuICAgIC8vICAgICBsZWdlbmRPZmZzZXQ6IC00MFxuICAgIC8vICAgfX1cbiAgICAvLyAgIGxhYmVsU2tpcFdpZHRoPXsxMn1cbiAgICAvLyAgIGxhYmVsU2tpcEhlaWdodD17MTJ9XG4gICAgLy8gICBsYWJlbFRleHRDb2xvcj17eyBmcm9tOiAnY29sb3InLCBtb2RpZmllcnM6IFtbJ2RhcmtlcicsIDEuNl1dIH19XG4gICAgLy8gICBsZWdlbmRzPXtbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBkYXRhRnJvbTogJ2tleXMnLFxuICAgIC8vICAgICAgIGFuY2hvcjogJ2JvdHRvbS1yaWdodCcsXG4gICAgLy8gICAgICAgZGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAvLyAgICAgICBqdXN0aWZ5OiBmYWxzZSxcbiAgICAvLyAgICAgICB0cmFuc2xhdGVYOiAxMjAsXG4gICAgLy8gICAgICAgdHJhbnNsYXRlWTogMCxcbiAgICAvLyAgICAgICBpdGVtc1NwYWNpbmc6IDIsXG4gICAgLy8gICAgICAgaXRlbVdpZHRoOiAxMDAsXG4gICAgLy8gICAgICAgaXRlbUhlaWdodDogMjAsXG4gICAgLy8gICAgICAgaXRlbURpcmVjdGlvbjogJ2xlZnQtdG8tcmlnaHQnLFxuICAgIC8vICAgICAgIGl0ZW1PcGFjaXR5OiAwLjg1LFxuICAgIC8vICAgICAgIHN5bWJvbFNpemU6IDIwLFxuICAgIC8vICAgICAgIGVmZmVjdHM6IFtcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgb246ICdob3ZlcicsXG4gICAgLy8gICAgICAgICAgIHN0eWxlOiB7XG4gICAgLy8gICAgICAgICAgICAgaXRlbU9wYWNpdHk6IDFcbiAgICAvLyAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgIF1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgXX1cbiAgICAvLyAgIGFuaW1hdGU9e3RydWV9XG4gICAgLy8gICBtb3Rpb25TdGlmZm5lc3M9ezkwfVxuICAgIC8vICAgbW90aW9uRGFtcGluZz17MTV9XG4gICAgLy8gLz5cbiAgICApXG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBCeVBsYXRmb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/ByPlatform.js\n");

/***/ })

});