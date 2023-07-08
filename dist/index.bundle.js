'use strict';
(self['webpackChunkgetting_started_using_a_configuration'] =
  self['webpackChunkgetting_started_using_a_configuration'] || []).push([
  [826],
  {
    /***/ 138: /***/ (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(486);
      /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          lodash__WEBPACK_IMPORTED_MODULE_0__
        );

      function component() {
        const element = document.createElement('div');

        // Lodash, now imported by this script
        element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(
          ['Hello', 'webpack'],
          ' '
        );

        return element;
      }

      document.body.appendChild(component());

      /***/
    },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ __webpack_require__.O(0, [712], () => __webpack_exec__(138));
    /******/ var __webpack_exports__ = __webpack_require__.O();
    /******/
  },
]);
