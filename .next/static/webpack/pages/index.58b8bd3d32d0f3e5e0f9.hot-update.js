/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootswatch_dist_lux_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootswatch/dist/lux/bootstrap.min.css */ \"./node_modules/bootswatch/dist/lux/bootstrap.min.css\");\n/* harmony import */ var bootswatch_dist_lux_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootswatch_dist_lux_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ByProduct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ByProduct.js */ \"./pages/components/ByProduct.js\");\n/* harmony import */ var _components_ByProduct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_ByProduct_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_ByPlatform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ByPlatform.js */ \"./pages/components/ByPlatform.js\");\n/* harmony import */ var _components_ByPlatform_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_ByPlatform_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nivo/bar */ \"./node_modules/@nivo/bar/dist/nivo-bar.es.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/malcolmmarshall/Desktop/TakeHome/AdcellerantAssessment/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction HomePage() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    getData();\n  }, []);\n\n  var getData = function getData() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/getData').then(function (res) {\n      setData(res.data.slice(0, 650));\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Row, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {\n        style: {\n          display: 'flex',\n          justifyContent: 'center',\n          paddingTop: 10\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Button, {\n          children: \"View Product\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Row, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {\n        style: {\n          height: '700px'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ByProduct_js__WEBPACK_IMPORTED_MODULE_5___default()), {\n          data: data\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Row, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {\n        style: {\n          height: '700px'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ByPlatform_js__WEBPACK_IMPORTED_MODULE_6___default()), {\n          data: data\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n\n_s(HomePage, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwic2xpY2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ1RvcCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFFTUMsK0NBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUVYQyxJQUZXO0FBQUEsTUFFTEMsT0FGSzs7QUFJbEJDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPO0FBQ1IsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCQyxvREFBQSxDQUFVLGNBQVYsRUFDR0MsSUFESCxDQUNRLFVBQUNDLEdBQUQsRUFBUztBQUNiTCxhQUFPLENBQUNLLEdBQUcsQ0FBQ04sSUFBSixDQUFTTyxLQUFULENBQWUsQ0FBZixFQUFrQixHQUFsQixDQUFELENBQVA7QUFDRCxLQUhILFdBR1csVUFBQ0MsR0FBRDtBQUFBLGFBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxLQUhYO0FBSUQsR0FMRDs7QUFPQSxzQkFDRSw4REFBQyxzREFBRDtBQUFBLDRCQUNFLDhEQUFDLGdEQUFEO0FBQUEsNkJBQ0UsOERBQUMsZ0RBQUQ7QUFBSyxhQUFLLEVBQUU7QUFBRUcsaUJBQU8sRUFBRSxNQUFYO0FBQW1CQyx3QkFBYyxFQUFFLFFBQW5DO0FBQTZDQyxvQkFBVSxFQUFFO0FBQXpELFNBQVo7QUFBQSwrQkFDRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRSw4REFBQyxnREFBRDtBQUFBLDZCQUNFLDhEQUFDLGdEQUFEO0FBQUssYUFBSyxFQUFFO0FBQUNDLGdCQUFNLEVBQUU7QUFBVCxTQUFaO0FBQUEsK0JBQ0EsOERBQUMsaUVBQUQ7QUFBVyxjQUFJLEVBQUVkO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBV0UsOERBQUMsZ0RBQUQ7QUFBQSw2QkFDRSw4REFBQyxnREFBRDtBQUFLLGFBQUssRUFBRTtBQUFDYyxnQkFBTSxFQUFFO0FBQVQsU0FBWjtBQUFBLCtCQUNBLDhEQUFDLGtFQUFEO0FBQVksY0FBSSxFQUFFZDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7R0FsQ1FGLFE7O0tBQUFBLFE7QUFvQ1QsK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ2Jvb3Rzd2F0Y2gvZGlzdC9sdXgvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IEJ5UHJvZHVjdCBmcm9tICcuL2NvbXBvbmVudHMvQnlQcm9kdWN0LmpzJztcbmltcG9ydCBCeVBsYXRmb3JtIGZyb20gJy4vY29tcG9uZW50cy9CeVBsYXRmb3JtLmpzJztcbmltcG9ydCB7IFJlc3BvbnNpdmVCYXIgfSBmcm9tICdAbml2by9iYXInO1xuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcblxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREYXRhKCk7XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KCcvYXBpL2dldERhdGEnKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXREYXRhKHJlcy5kYXRhLnNsaWNlKDAsIDY1MCkpO1xuICAgICAgfSkuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBwYWRkaW5nVG9wOiAxMH19PlxuICAgICAgICAgIDxCdXR0b24+VmlldyBQcm9kdWN0PC9CdXR0b24+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHN0eWxlPXt7aGVpZ2h0OiAnNzAwcHgnfX0+XG4gICAgICAgIDxCeVByb2R1Y3QgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc3R5bGU9e3toZWlnaHQ6ICc3MDBweCd9fT5cbiAgICAgICAgPEJ5UGxhdGZvcm0gZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});