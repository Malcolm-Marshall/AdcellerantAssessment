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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootswatch_dist_lux_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootswatch/dist/lux/bootstrap.min.css */ \"./node_modules/bootswatch/dist/lux/bootstrap.min.css\");\n/* harmony import */ var bootswatch_dist_lux_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootswatch_dist_lux_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ByProduct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ByProduct.js */ \"./pages/components/ByProduct.js\");\n/* harmony import */ var _components_ByProduct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_ByProduct_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_ByPlatform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ByPlatform.js */ \"./pages/components/ByPlatform.js\");\n/* harmony import */ var _components_ByPlatform_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_ByPlatform_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nivo/bar */ \"./node_modules/@nivo/bar/dist/nivo-bar.es.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/malcolmmarshall/Desktop/TakeHome/AdcellerantAssessment/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction HomePage() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      product = _useState2[0],\n      setProduct = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      platform = _useState3[0],\n      setPlatform = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    getData();\n  }, []);\n\n  var getData = function getData() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/getData').then(function (res) {\n      setData(res.data.slice(0, 650));\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  var view = function view(e) {\n    console.log(e.target.id);\n\n    if (e.target.id === 'product') {\n      setProduct(true);\n      setPlatform(false);\n    }\n\n    if (e.target.id === 'platform') {\n      setPlatform(true);\n      setProduct(false);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Row, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {\n        style: {\n          display: 'flex',\n          justifyContent: 'center',\n          paddingTop: 10\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Dropdown, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Dropdown.Toggle, {\n            variant: \"secondary\",\n            id: \"dropdown-basic\",\n            children: \"View\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Dropdown.Menu, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Dropdown.Item, {\n              href: \"#/action-1\",\n              id: \"product\",\n              onClick: function onClick(e) {\n                return view(e);\n              },\n              children: \"Product\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Dropdown.Item, {\n              href: \"#/action-2\",\n              id: \"platform\",\n              onClick: function onClick(e) {\n                return view(e);\n              },\n              children: \"Platform\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Dropdown.Item, {\n              href: \"#/action-3\",\n              children: \"Something else\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), product ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Row, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {\n        style: {\n          height: '700px'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ByProduct_js__WEBPACK_IMPORTED_MODULE_5___default()), {\n          data: data\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }, this) : null, platform ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Row, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {\n        style: {\n          height: '700px'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ByPlatform_js__WEBPACK_IMPORTED_MODULE_6___default()), {\n          data: data\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }, this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n\n_s(HomePage, \"3od0Czgsq2USCSc5UdUq/tLYzBM=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInBsYXRmb3JtIiwic2V0UGxhdGZvcm0iLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwic2xpY2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidmlldyIsImUiLCJ0YXJnZXQiLCJpZCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmdUb3AiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBRU1DLCtDQUFRLENBQUMsRUFBRCxDQUZkO0FBQUEsTUFFWEMsSUFGVztBQUFBLE1BRUxDLE9BRks7O0FBQUEsbUJBR1lGLCtDQUFRLENBQUMsS0FBRCxDQUhwQjtBQUFBLE1BR1hHLE9BSFc7QUFBQSxNQUdGQyxVQUhFOztBQUFBLG1CQUljSiwrQ0FBUSxDQUFDLEtBQUQsQ0FKdEI7QUFBQSxNQUlYSyxRQUpXO0FBQUEsTUFJREMsV0FKQzs7QUFNbEJDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPO0FBQ1IsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCQyxvREFBQSxDQUFVLGNBQVYsRUFDR0MsSUFESCxDQUNRLFVBQUNDLEdBQUQsRUFBUztBQUNiVCxhQUFPLENBQUNTLEdBQUcsQ0FBQ1YsSUFBSixDQUFTVyxLQUFULENBQWUsQ0FBZixFQUFrQixHQUFsQixDQUFELENBQVA7QUFDRCxLQUhILFdBR1csVUFBQ0MsR0FBRDtBQUFBLGFBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixH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cnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBCdXR0b24sIERyb3Bkb3duIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnYm9vdHN3YXRjaC9kaXN0L2x1eC9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgQnlQcm9kdWN0IGZyb20gJy4vY29tcG9uZW50cy9CeVByb2R1Y3QuanMnO1xuaW1wb3J0IEJ5UGxhdGZvcm0gZnJvbSAnLi9jb21wb25lbnRzL0J5UGxhdGZvcm0uanMnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUJhciB9IGZyb20gJ0BuaXZvL2Jhcic7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGxhdGZvcm0sIHNldFBsYXRmb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERhdGEoKTtcbiAgfSwgW10pXG5cbiAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcbiAgICBheGlvcy5nZXQoJy9hcGkvZ2V0RGF0YScpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldERhdGEocmVzLmRhdGEuc2xpY2UoMCwgNjUwKSk7XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICB9O1xuXG4gIGNvbnN0IHZpZXcgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKVxuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3Byb2R1Y3QnKSB7XG4gICAgICBzZXRQcm9kdWN0KHRydWUpO1xuICAgICAgc2V0UGxhdGZvcm0oZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdwbGF0Zm9ybScpIHtcbiAgICAgIHNldFBsYXRmb3JtKHRydWUpO1xuICAgICAgc2V0UHJvZHVjdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcGFkZGluZ1RvcDogMTAgfX0+XG4gICAgICAgICAgPERyb3Bkb3duPlxuICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWQ9XCJkcm9wZG93bi1iYXNpY1wiPlxuICAgICAgICAgICAgICBWaWV3XG4gICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cbiAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxuICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMVwiIGlkPVwicHJvZHVjdFwiIG9uQ2xpY2s9eyhlKSA9PiB2aWV3KGUpfT5Qcm9kdWN0PC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMlwiIGlkPVwicGxhdGZvcm1cIiBvbkNsaWNrPXsoZSkgPT4gdmlldyhlKX0+UGxhdGZvcm08L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0zXCI+U29tZXRoaW5nIGVsc2U8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIHtwcm9kdWN0ID9cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHN0eWxlPXt7IGhlaWdodDogJzcwMHB4JyB9fT5cbiAgICAgICAgICAgIDxCeVByb2R1Y3QgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDogbnVsbFxuICAgICAgfVxuICAgICAge3BsYXRmb3JtID9cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHN0eWxlPXt7IGhlaWdodDogJzcwMHB4JyB9fT5cbiAgICAgICAgICAgIDxCeVBsYXRmb3JtIGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PiA6IG51bGxcbiAgICAgIH1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});