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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootswatch_dist_lux_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootswatch/dist/lux/bootstrap.min.css */ \"./node_modules/bootswatch/dist/lux/bootstrap.min.css\");\n/* harmony import */ var bootswatch_dist_lux_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootswatch_dist_lux_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ByProduct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ByProduct.js */ \"./pages/components/ByProduct.js\");\n/* harmony import */ var _components_ByProduct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_ByProduct_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_ByPlatform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ByPlatform.js */ \"./pages/components/ByPlatform.js\");\n/* harmony import */ var _components_ByPlatform_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_ByPlatform_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nivo/bar */ \"./node_modules/@nivo/bar/dist/nivo-bar.es.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/malcolmmarshall/Desktop/TakeHome/AdcellerantAssessment/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction HomePage() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      product = _useState2[0],\n      setProduct = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      platform = _useState3[0],\n      setPlatform = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    getData();\n  }, []);\n\n  var getData = function getData() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/getData').then(function (res) {\n      setData(res.data.slice(0, 650));\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Row, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {\n        style: {\n          display: 'flex',\n          justifyContent: 'center',\n          paddingTop: 10\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Dropdown, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Dropdown.Toggle, {\n            variant: \"secondary\",\n            id: \"dropdown-basic\",\n            children: \"View\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Dropdown.Menu, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Dropdown.Item, {\n              href: \"#/action-1\",\n              onClick: function onClick() {\n                return setProduct(true);\n              },\n              children: \"Product\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Dropdown.Item, {\n              href: \"#/action-2\",\n              onClick: function onClick() {\n                return setPlatform(true);\n              },\n              children: \"Platform\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Dropdown.Item, {\n              href: \"#/action-3\",\n              children: \"Something else\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Row, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {\n        style: {\n          height: '700px'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ByProduct_js__WEBPACK_IMPORTED_MODULE_5___default()), {\n          data: data\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Row, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {\n        style: {\n          height: '700px'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ByPlatform_js__WEBPACK_IMPORTED_MODULE_6___default()), {\n          data: data\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, this);\n}\n\n_s(HomePage, \"3od0Czgsq2USCSc5UdUq/tLYzBM=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInBsYXRmb3JtIiwic2V0UGxhdGZvcm0iLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwic2xpY2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ1RvcCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFFTUMsK0NBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUVYQyxJQUZXO0FBQUEsTUFFTEMsT0FGSzs7QUFBQSxtQkFHWUYsK0NBQVEsQ0FBQyxLQUFELENBSHBCO0FBQUEsTUFHWEcsT0FIVztBQUFBLE1BR0ZDLFVBSEU7O0FBQUEsbUJBSWNKLCtDQUFRLENBQUMsS0FBRCxDQUp0QjtBQUFBLE1BSVhLLFFBSlc7QUFBQSxNQUlEQyxXQUpDOztBQU1sQkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU87QUFDUixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEJDLG9EQUFBLENBQVUsY0FBVixFQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JULGFBQU8sQ0FBQ1MsR0FBRyxDQUFDVixJQUFKLENBQVNXLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLEdBQWxCLENBQUQsQ0FBUDtBQUNELEtBSEgsV0FHVyxVQUFDQyxHQUFEO0FBQUEsYUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBVDtBQUFBLEtBSFg7QUFJRCxHQUxEOztBQU9BLHNCQUNFLDhEQUFDLHNEQUFEO0FBQUEsNEJBQ0UsOERBQUMsZ0RBQUQ7QUFBQSw2QkFDRSw4REFBQyxnREFBRDtBQUFLLGFBQUssRUFBRTtBQUFFRyxpQkFBTyxFQUFFLE1BQVg7QUFBbUJDLHdCQUFjLEVBQUUsUUFBbkM7QUFBNkNDLG9CQUFVLEVBQUU7QUFBekQsU0FBWjtBQUFBLCtCQUNFLDhEQUFDLHFEQUFEO0FBQUEsa0NBQ0UsOERBQUMsNERBQUQ7QUFBaUIsbUJBQU8sRUFBQyxXQUF6QjtBQUFxQyxjQUFFLEVBQUMsZ0JBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBS0UsOERBQUMsMERBQUQ7QUFBQSxvQ0FDRSw4REFBQywwREFBRDtBQUFlLGtCQUFJLEVBQUMsWUFBcEI7QUFBaUMscUJBQU8sRUFBRTtBQUFBLHVCQUFNZCxVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLGVBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBZSxrQkFBSSxFQUFDLFlBQXBCO0FBQWlDLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUUsV0FBVyxDQUFDLElBQUQsQ0FBakI7QUFBQSxlQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFLDhEQUFDLDBEQUFEO0FBQWUsa0JBQUksRUFBQyxZQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWdCRSw4REFBQyxnREFBRDtBQUFBLDZCQUNFLDhEQUFDLGdEQUFEO0FBQUssYUFBSyxFQUFFO0FBQUVhLGdCQUFNLEVBQUU7QUFBVixTQUFaO0FBQUEsK0JBQ0UsOERBQUMsaUVBQUQ7QUFBVyxjQUFJLEVBQUVsQjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkYsZUFxQkUsOERBQUMsZ0RBQUQ7QUFBQSw2QkFDRSw4REFBQyxnREFBRDtBQUFLLGFBQUssRUFBRTtBQUFFa0IsZ0JBQU0sRUFBRTtBQUFWLFNBQVo7QUFBQSwrQkFDRSw4REFBQyxrRUFBRDtBQUFZLGNBQUksRUFBRWxCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZCRDs7R0E5Q1FGLFE7O0tBQUFBLFE7QUFnRFQsK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEJ1dHRvbiwgRHJvcGRvd24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdib290c3dhdGNoL2Rpc3QvbHV4L2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBCeVByb2R1Y3QgZnJvbSAnLi9jb21wb25lbnRzL0J5UHJvZHVjdC5qcyc7XG5pbXBvcnQgQnlQbGF0Zm9ybSBmcm9tICcuL2NvbXBvbmVudHMvQnlQbGF0Zm9ybS5qcyc7XG5pbXBvcnQgeyBSZXNwb25zaXZlQmFyIH0gZnJvbSAnQG5pdm8vYmFyJztcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwbGF0Zm9ybSwgc2V0UGxhdGZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGF0YSgpO1xuICB9LCBbXSlcblxuICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnL2FwaS9nZXREYXRhJylcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0RGF0YShyZXMuZGF0YS5zbGljZSgwLCA2NTApKTtcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcGFkZGluZ1RvcDogMTAgfX0+XG4gICAgICAgICAgPERyb3Bkb3duPlxuICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWQ9XCJkcm9wZG93bi1iYXNpY1wiPlxuICAgICAgICAgICAgICBWaWV3XG4gICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cblxuICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0xXCIgb25DbGljaz17KCkgPT4gc2V0UHJvZHVjdCh0cnVlKX0+UHJvZHVjdDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTJcIiBvbkNsaWNrPXsoKSA9PiBzZXRQbGF0Zm9ybSh0cnVlKX0+UGxhdGZvcm08L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0zXCI+U29tZXRoaW5nIGVsc2U8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc3R5bGU9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxuICAgICAgICAgIDxCeVByb2R1Y3QgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc3R5bGU9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxuICAgICAgICAgIDxCeVBsYXRmb3JtIGRhdGE9e2RhdGF9IC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});