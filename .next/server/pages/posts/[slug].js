"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./lib/posts.js":
/*!**********************!*\
  !*** ./lib/posts.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPost\": () => (/* binding */ getPost)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ \"marked\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_1__]);\nmarked__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function getPost(slug) {\n    //const data = await readFile(`content/posts/${slug}.json`, 'utf8');\n    //return JSON.parse(data);   \n    //above two lined used for getting data from json\n    //below lines used for marked down\n    const source = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(`content/posts/${slug}.md`, \"utf-8\");\n    const html = (0,marked__WEBPACK_IMPORTED_MODULE_1__.marked)(source);\n    return {\n        body: html\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUNUO0FBRXZCLGVBQWVFLFFBQVFDLElBQUksRUFBQztJQUMvQixvRUFBb0U7SUFDcEUsNkJBQTZCO0lBQzdCLGlEQUFpRDtJQUVqRCxrQ0FBa0M7SUFFbEMsTUFBTUMsU0FBUyxNQUFNSixxREFBUUEsQ0FBQyxDQUFDLGNBQWMsRUFBRUcsS0FBSyxHQUFHLENBQUMsRUFBRTtJQUMxRCxNQUFNRSxPQUFPSiw4Q0FBTUEsQ0FBQ0c7SUFDcEIsT0FBTTtRQUNGRSxNQUFNRDtJQUNWO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYmxvZy8uL2xpYi9wb3N0cy5qcz9mNGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnO1xuaW1wb3J0IHttYXJrZWR9IGZyb20gJ21hcmtlZCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0KHNsdWcpe1xuICAgIC8vY29uc3QgZGF0YSA9IGF3YWl0IHJlYWRGaWxlKGBjb250ZW50L3Bvc3RzLyR7c2x1Z30uanNvbmAsICd1dGY4Jyk7XG4gICAgLy9yZXR1cm4gSlNPTi5wYXJzZShkYXRhKTsgICBcbiAgICAvL2Fib3ZlIHR3byBsaW5lZCB1c2VkIGZvciBnZXR0aW5nIGRhdGEgZnJvbSBqc29uXG4gICAgXG4gICAgLy9iZWxvdyBsaW5lcyB1c2VkIGZvciBtYXJrZWQgZG93blxuXG4gICAgY29uc3Qgc291cmNlID0gYXdhaXQgcmVhZEZpbGUoYGNvbnRlbnQvcG9zdHMvJHtzbHVnfS5tZGAsICd1dGYtOCcpO1xuICAgIGNvbnN0IGh0bWwgPSBtYXJrZWQoc291cmNlKTtcbiAgICByZXR1cm57XG4gICAgICAgIGJvZHk6IGh0bWwsXG4gICAgfTtcbn0iXSwibmFtZXMiOlsicmVhZEZpbGUiLCJtYXJrZWQiLCJnZXRQb3N0Iiwic2x1ZyIsInNvdXJjZSIsImh0bWwiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/posts.js\n");

/***/ }),

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/posts */ \"./lib/posts.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_2__]);\n_lib_posts__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst getStaticPaths = async ()=>{\n    return {\n        paths: [\n            {\n                params: {\n                    slug: \"first-post\"\n                }\n            },\n            {\n                params: {\n                    slug: \"second-post\"\n                }\n            }\n        ],\n        fallback: false\n    };\n};\nconst getStaticProps = async ({ params: { slug  }  })=>{\n    const post = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_2__.getPost)(slug);\n    return {\n        props: {\n            post\n        }\n    };\n};\nconst Post = ({ post  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: post.title\n                }, void 0, false, {\n                    fileName: \"/Users/bks-ggs/Desktop/react_practice1/next-blog/pages/posts/[slug].js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bks-ggs/Desktop/react_practice1/next-blog/pages/posts/[slug].js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/bks-ggs/Desktop/react_practice1/next-blog/pages/posts/[slug].js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        dangerouslySetInnerHTML: {\n                            __html: post.body\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bks-ggs/Desktop/react_practice1/next-blog/pages/posts/[slug].js\",\n                        lineNumber: 30,\n                        columnNumber: 16\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bks-ggs/Desktop/react_practice1/next-blog/pages/posts/[slug].js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNhO0FBRW5DLE1BQU1FLGlCQUFpQixVQUFZO0lBQ3RDLE9BQU07UUFDRkMsT0FBTTtZQUNGO2dCQUFFQyxRQUFRO29CQUFFQyxNQUFNO2dCQUFhO1lBQUU7WUFDakM7Z0JBQUVELFFBQVE7b0JBQUVDLE1BQU07Z0JBQWM7WUFBRTtTQUNyQztRQUNEQyxVQUFVLEtBQUs7SUFDbkI7QUFDSixFQUFDO0FBRU0sTUFBTUMsaUJBQWlCLE9BQU8sRUFBRUgsUUFBUSxFQUFDQyxLQUFJLEVBQUMsR0FBQyxHQUFHO0lBQ3RELE1BQU1HLE9BQU8sTUFBTVAsbURBQU9BLENBQUNJO0lBRTNCLE9BQU07UUFDREksT0FBTztZQUFFRDtRQUFLO0lBQ2xCO0FBQ0osRUFBQztBQUVELE1BQU1FLE9BQU8sQ0FBQyxFQUFDRixLQUFJLEVBQUMsR0FBRztJQUNuQixxQkFDSTs7MEJBQ0ksOERBQUNSLGtEQUFJQTswQkFDRCw0RUFBQ1c7OEJBQU9ILEtBQUtHLEtBQUs7Ozs7Ozs7Ozs7OzBCQUV0Qiw4REFBQ0M7O2tDQUNHLDhEQUFDQztrQ0FBSUwsS0FBS0csS0FBSzs7Ozs7O2tDQUNoQiw4REFBQ0c7d0JBQVFDLHlCQUF5Qjs0QkFBQ0MsUUFBUVIsS0FBS1MsSUFBSTt3QkFBQzs7Ozs7Ozs7Ozs7Ozs7QUFJcEU7QUFFQSxpRUFBZVAsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYmxvZy8uL3BhZ2VzL3Bvc3RzL1tzbHVnXS5qcz82OTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IGdldFBvc3QgfSBmcm9tIFwiLi4vLi4vbGliL3Bvc3RzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgICByZXR1cm57XG4gICAgICAgIHBhdGhzOltcbiAgICAgICAgICAgIHsgcGFyYW1zOiB7IHNsdWc6ICdmaXJzdC1wb3N0JyB9IH0sXG4gICAgICAgICAgICB7IHBhcmFtczogeyBzbHVnOiAnc2Vjb25kLXBvc3QnIH0gfSxcbiAgICAgICAgXSxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zOiB7c2x1Z319KT0+eyAvL3JlbmRlcmVkIG9uIHNlcnZlclxuICAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFBvc3Qoc2x1Zyk7XG4gICBcbiAgIHJldHVybntcbiAgICAgICAgcHJvcHM6IHsgcG9zdCB9LFxuICAgIH07XG59XG5cbmNvbnN0IFBvc3QgPSAoe3Bvc3R9KT0+e1xuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICA8YXJ0aWNsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcG9zdC5ib2R5IH19IC8+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sIm5hbWVzIjpbIkhlYWQiLCJnZXRQb3N0IiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsInBhcmFtcyIsInNsdWciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicG9zdCIsInByb3BzIiwiUG9zdCIsInRpdGxlIiwibWFpbiIsImgxIiwiYXJ0aWNsZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("marked");;

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[slug].js"));
module.exports = __webpack_exports__;

})();