"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ScrollDownBtn/scrolldownBtn.js":
/*!*******************************************************!*\
  !*** ./src/components/ScrollDownBtn/scrolldownBtn.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _scrolldownBtn_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrolldownBtn.css */ \"(app-pages-browser)/./src/components/ScrollDownBtn/scrolldownBtn.css\");\n\n\nconst ScrollDown = ()=>{\n    const gotoBottomWindow = ()=>{\n        window.scroll({\n            top: 860,\n            behavior: \"smooth\"\n        });\n    };\n    return(// <button className=\"scrolldownBtnStyle\" onClick={gotoBottomWindow}>\n    //     <svg width=\"34\" height=\"34\" viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    //         <path d=\"M25.5995 20.4426L17.0003 29.0417L8.40112 20.4426\" stroke=\"white\" stroke-width=\"2.125\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n    //         <path d=\"M17 4.95828L17 28.8008\" stroke=\"white\" stroke-width=\"2.125\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n    //     </svg>\n    // </button>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"scrolldownBtnStyle\",\n        onClick: gotoBottomWindow,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"btn-arrow-style\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"./arrow-up.png\",\n                alt: \"arrow-up\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Nextjs\\\\lyncc\\\\src\\\\components\\\\ScrollDownBtn\\\\scrolldownBtn.js\",\n                lineNumber: 20,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"F:\\\\Nextjs\\\\lyncc\\\\src\\\\components\\\\ScrollDownBtn\\\\scrolldownBtn.js\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\Nextjs\\\\lyncc\\\\src\\\\components\\\\ScrollDownBtn\\\\scrolldownBtn.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined));\n};\n_c = ScrollDown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollDown);\nvar _c;\n$RefreshReg$(_c, \"ScrollDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Njcm9sbERvd25CdG4vc2Nyb2xsZG93bkJ0bi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQTZCO0FBRTdCLE1BQU1BLGFBQWE7SUFDZixNQUFNQyxtQkFBbUI7UUFDckJDLE9BQU9DLE1BQU0sQ0FBQztZQUNWQyxLQUFJO1lBQ0pDLFVBQVU7UUFDZDtJQUNKO0lBQ0EsT0FDSSxxRUFBcUU7SUFDckUsc0dBQXNHO0lBQ3RHLGtMQUFrTDtJQUNsTCx3SkFBd0o7SUFDeEosYUFBYTtJQUViLFlBQVk7a0JBQ1osOERBQUNDO1FBQU9DLFdBQVU7UUFBcUJDLFNBQVNQO2tCQUM1Qyw0RUFBQ1E7WUFBSUYsV0FBVTtzQkFDWCw0RUFBQ0c7Z0JBQUlDLEtBQUk7Z0JBQWdCQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FBSTdDO0tBckJNWjtBQXVCTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TY3JvbGxEb3duQnRuL3Njcm9sbGRvd25CdG4uanM/YTYzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3Njcm9sbGRvd25CdG4uY3NzXCI7XHJcblxyXG5jb25zdCBTY3JvbGxEb3duID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ290b0JvdHRvbVdpbmRvdyA9ICgpID0+e1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGwoe1xyXG4gICAgICAgICAgICB0b3A6ODYwLFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyA8YnV0dG9uIGNsYXNzTmFtZT1cInNjcm9sbGRvd25CdG5TdHlsZVwiIG9uQ2xpY2s9e2dvdG9Cb3R0b21XaW5kb3d9PlxyXG4gICAgICAgIC8vICAgICA8c3ZnIHdpZHRoPVwiMzRcIiBoZWlnaHQ9XCIzNFwiIHZpZXdCb3g9XCIwIDAgMzQgMzRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAvLyAgICAgICAgIDxwYXRoIGQ9XCJNMjUuNTk5NSAyMC40NDI2TDE3LjAwMDMgMjkuMDQxN0w4LjQwMTEyIDIwLjQ0MjZcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjIuMTI1XCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICA8cGF0aCBkPVwiTTE3IDQuOTU4MjhMMTcgMjguODAwOFwiIHN0cm9rZT1cIndoaXRlXCIgc3Ryb2tlLXdpZHRoPVwiMi4xMjVcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgLz5cclxuICAgICAgICAvLyAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgIC8vIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2Nyb2xsZG93bkJ0blN0eWxlXCIgb25DbGljaz17Z290b0JvdHRvbVdpbmRvd30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWFycm93LXN0eWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXJyb3ctdXAucG5nXCJhbHQ9XCJhcnJvdy11cFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxEb3duIl0sIm5hbWVzIjpbIlNjcm9sbERvd24iLCJnb3RvQm90dG9tV2luZG93Iiwid2luZG93Iiwic2Nyb2xsIiwidG9wIiwiYmVoYXZpb3IiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGl2IiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ScrollDownBtn/scrolldownBtn.js\n"));

/***/ })

});