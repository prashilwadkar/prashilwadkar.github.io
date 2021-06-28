(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkabdo_host"] = self["webpackChunkabdo_host"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _components_content_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/content/content.component */
      8828);
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/sidebar/sidebar.component */
      9201);

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [[1, "wrapper"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_content_content_component__WEBPACK_IMPORTED_MODULE_0__.ContentComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent],
        styles: [".wrapper[_ngcontent-%COMP%] {\n  background: transparent;\n  max-width: 1170px;\n  margin: 30px auto;\n  position: relative;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);\n  border-radius: 7px;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFxhc3NldHNcXHNjc3NcXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUNBRSwyQ0RHa0I7RUNXbEIsa0JEVnFCO0VDWXJCLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtBRFJKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9hc3NldHMvc2Nzcy9taXhpbnNcIjtcblxuLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWF4LXdpZHRoOiAxMTcwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy92aXNpYmlsaXR5OiBoaWRkZW47XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoN3B4KTtcbn1cbiIsIkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHN0cmluZzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSkpIHtcbiAgICB0ZXh0LXNoYWRvdzogJHN0cmluZztcbn1cbkBtaXhpbiBib3gtc2hhZG93ICgkc3RyaW5nKSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc3RyaW5nO1xuICAgIC1tb3otYm94LXNoYWRvdzogICAgJHN0cmluZztcbiAgICBib3gtc2hhZG93OiAgICAgICAgICRzdHJpbmc7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkdHlwZTogYm9yZGVyLWJveCkge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogJHR5cGU7XG4gICAgLW1vei1ib3gtc2l6aW5nOiAgICAkdHlwZTtcbiAgICBib3gtc2l6aW5nOiAgICAgICAgICR0eXBlO1xufVxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1czogNXB4KSB7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogICAgJHJhZGl1cztcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogICAgICRyYWRpdXM7XG4gICAgLW8tYm9yZGVyLXJhZGl1czogICAgICAkcmFkaXVzO1xuICAgIGJvcmRlci1yYWRpdXM6ICAgICAgICAgJHJhZGl1cztcblxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiAgICBwYWRkaW5nO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6ICAgICAgICAgcGFkZGluZy1ib3g7XG59XG5AbWl4aW4gYm9yZGVyLXJhZGl1c2VzICgkdG9wcmlnaHQ6IDAsICRib3R0b21yaWdodDogMCwgJGJvdHRvbWxlZnQ6IDAsICR0b3BsZWZ0OiAwKSB7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogICAgJHRvcHJpZ2h0O1xuICAgIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21yaWdodDtcbiAgICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICAkYm90dG9tbGVmdDtcbiAgICAtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICAgICAkdG9wbGVmdDtcblxuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDogICAgICAgICR0b3ByaWdodDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tcmlnaHQ6ICAgICAkYm90dG9tcmlnaHQ7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6ICAgICAgJGJvdHRvbWxlZnQ7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6ICAgICAgICAgJHRvcGxlZnQ7XG5cbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogICAgICAgICAgICAkdG9wcmlnaHQ7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICAgICAgICAgJGJvdHRvbXJpZ2h0O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICAgICAgICAgICRib3R0b21sZWZ0O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICAgICAgICAgICAgICR0b3BsZWZ0O1xuXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6ICAgIHBhZGRpbmc7IFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDsgXG4gICAgYmFja2dyb3VuZC1jbGlwOiAgICAgICAgIHBhZGRpbmctYm94OyBcbn1cblxuQG1peGluIG9wYWNpdHkgKCRvcGFjaXR5OiAwLjUpIHtcbiAgICAtd2Via2l0LW9wYWNpdHk6IFx0JG9wYWNpdHk7XG4gICAgLW1vei1vcGFjaXR5OiBcdFx0JG9wYWNpdHk7XG4gICAgb3BhY2l0eTogXHRcdCRvcGFjaXR5O1xufVxuXG5AbWl4aW4gZ3JhZGllbnQgKCRzdGFydENvbG9yOiAjZWVlLCAkZW5kQ29sb3I6IHdoaXRlKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN0YXJ0Q29sb3I7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgkc3RhcnRDb2xvciksIHRvKCRlbmRDb2xvcikpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG59XG5AbWl4aW4gaG9yaXpvbnRhbC1ncmFkaWVudCAoJHN0YXJ0Q29sb3I6ICNlZWUsICRlbmRDb2xvcjogd2hpdGUpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3RhcnRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgkc3RhcnRDb2xvciksIHRvKCRlbmRDb2xvcikpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uICgkbmFtZSwgJGR1cmF0aW9uOiAzMDBtcywgJGRlbGF5OiAwLCAkZWFzZTogZWFzZSkge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAkbmFtZSAkZHVyYXRpb24gJGRlbGF5ICRlYXNlO1xuICAgIC1tb3otYW5pbWF0aW9uOiAgICAkbmFtZSAkZHVyYXRpb24gJGRlbGF5ICRlYXNlO1xuICAgIC1tcy1hbmltYXRpb246ICAgICAkbmFtZSAkZHVyYXRpb24gJGRlbGF5ICRlYXNlO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHRyYW5zaXRpb24pIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uOyAgXG4gICAgLW1vei10cmFuc2l0aW9uOiAgICAkdHJhbnNpdGlvbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogICAgICR0cmFuc2l0aW9uOyBcbiAgICAtby10cmFuc2l0aW9uOiAgICAgICR0cmFuc2l0aW9uOyAgXG59XG5AbWl4aW4gdHJhbnNmb3JtKCRzdHJpbmcpe1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAgJHN0cmluZztcbiAgICAtbW96LXRyYW5zZm9ybTogXHQgJHN0cmluZztcbiAgICAtbXMtdHJhbnNmb3JtOiBcdFx0ICRzdHJpbmc7XG4gICAgLW8tdHJhbnNmb3JtOiBcdFx0ICRzdHJpbmc7XG59XG5AbWl4aW4gc2NhbGUgKCRmYWN0b3IpIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJGZhY3Rvcik7XG4gICAgLW1vei10cmFuc2Zvcm06IFx0IHNjYWxlKCRmYWN0b3IpO1xuICAgIC1tcy10cmFuc2Zvcm06IFx0XHQgc2NhbGUoJGZhY3Rvcik7XG4gICAgLW8tdHJhbnNmb3JtOiBcdFx0IHNjYWxlKCRmYWN0b3IpO1xufVxuQG1peGluIHJvdGF0ZSAoJGRlZykge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IFx0IHJvdGF0ZSgkZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBcdFx0IHJvdGF0ZSgkZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IFx0XHQgcm90YXRlKCRkZWcpO1xufVxuQG1peGluIHNrZXcgKCRkZWcsICRkZWcyKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICAgICAgIHNrZXcoJGRlZywgJGRlZzIpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBcdCBza2V3KCRkZWcsICRkZWcyKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBcdFx0IHNrZXcoJGRlZywgJGRlZzIpO1xuICAgIC1vLXRyYW5zZm9ybTogXHRcdCBza2V3KCRkZWcsICRkZWcyKTtcbn1cbkBtaXhpbiB0cmFuc2xhdGUgKCR4LCAkeTowKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICAgICAgIHRyYW5zbGF0ZSgkeCwgJHkpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBcdCB0cmFuc2xhdGUoJHgsICR5KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBcdFx0IHRyYW5zbGF0ZSgkeCwgJHkpO1xuICAgIC1vLXRyYW5zZm9ybTogXHRcdCB0cmFuc2xhdGUoJHgsICR5KTtcbn1cbkBtaXhpbiB0cmFuc2xhdGUzZCAoJHgsICR5OiAwLCAkejogMCkge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAgICAgICB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAtbW96LXRyYW5zZm9ybTogXHQgdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgLW1zLXRyYW5zZm9ybTogXHRcdCB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAtby10cmFuc2Zvcm06IFx0XHQgdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG59XG5AbWl4aW4gcGVyc3BlY3RpdmUgKCR2YWx1ZTogMTAwMCkge1xuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IFx0JHZhbHVlO1xuICAgIC1tb3otcGVyc3BlY3RpdmU6IFx0JHZhbHVlO1xuICAgIC1tcy1wZXJzcGVjdGl2ZTogXHQkdmFsdWU7XG4gICAgcGVyc3BlY3RpdmU6IFx0XHQkdmFsdWU7XG59XG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbiAoJHg6Y2VudGVyLCAkeTpjZW50ZXIpIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICR4ICR5O1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogICAgJHggJHk7XG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46ICAgICAkeCAkeTtcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAgICAgICR4ICR5O1xufVxuXG5AbWl4aW4gcmVzZXQtYm94LXNpemluZyAoJHNpemU6Y29udGVudC1ib3gpIHtcbiAgICAmLFxuICAgICosXG4gICAgKjpiZWZvcmUsXG4gICAgICAgICo6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBib3gtc2l6aW5nKCRzaXplKTtcbiAgICB9XG59XG5cbkBtaXhpbiB0cnVuY2F0ZSAoJG1heC13aWR0aDogMjUwcHgpIHtcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYmFja2dyb3VuZC1zaXplICgkc3RyaW5nOiBjb250YWluKSB7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6ICRzdHJpbmc7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6ICRzdHJpbmc7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiAkc3RyaW5nO1xuICAgIGJhY2tncm91bmQtc2l6ZTogJHN0cmluZztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyICgkY29sb3I6ICM5OTkpIHtcbiAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogV2ViS2l0IGJyb3dzZXJzICovXG4gICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgfVxuICAgICY6LW1vei1wbGFjZWhvbGRlciB7IC8qIE1vemlsbGEgRmlyZWZveCA0IHRvIDE4ICovXG4gICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgfVxuICAgICY6Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBNb3ppbGxhIEZpcmVmb3ggMTkrICovXG4gICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgfVxuICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXG4gICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG4iXX0= */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-pagination */
      2533);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/sidebar/sidebar.component */
      9201);
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      4662);
      /* harmony import */


      var _components_content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/content/content.component */
      8828);
      /* harmony import */


      var _pipes_orderby_orderby_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pipes/orderby/orderby.pipe */
      6781);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      5835);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/chips */
      8341);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientJsonpModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_0__.NgxPaginationModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components_content_content_component__WEBPACK_IMPORTED_MODULE_4__.ContentComponent, _pipes_orderby_orderby_pipe__WEBPACK_IMPORTED_MODULE_5__.OrderbyPipe],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientJsonpModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_0__.NgxPaginationModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule]
        });
      })();
      /***/

    },

    /***/
    8828:
    /*!*********************************************************!*\
      !*** ./src/app/components/content/content.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContentComponent": function ContentComponent() {
          return (
            /* binding */
            _ContentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _services_behance_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../services/behance.service */
      9704);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-pagination */
      2533);
      /* harmony import */


      var _pipes_orderby_orderby_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../pipes/orderby/orderby.pipe */
      6781);

      function ContentComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](experience_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", experience_r2.fromDate.month, " ", experience_r2.fromDate.year, " - ", experience_r2.toDate, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](experience_r2.company);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](experience_r2.description);
        }
      }

      function ContentComponent_div_27_div_15_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](field_r6);
        }
      }

      function ContentComponent_div_27_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ul", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ContentComponent_div_27_div_15_li_2_Template, 2, 1, "li", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r3.fields);
        }
      }

      function ContentComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ul", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ContentComponent_div_27_div_15_Template, 3, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", item_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", item_r3.covers["404"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", item_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r3.stats.views, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r3.stats.appreciations, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r3.fields.length);
        }
      }

      var _c0 = function _c0(a1) {
        return {
          itemsPerPage: 4,
          currentPage: a1
        };
      };

      var _ContentComponent = /*#__PURE__*/function () {
        function _ContentComponent(behance) {
          _classCallCheck(this, _ContentComponent);

          this.behance = behance;
          this.p = 1;
          this.experiences = [{
            title: 'Software Engineer',
            company: 'Parinati Solution',
            fromDate: {
              year: '2016',
              month: 'Aug'
            },
            toDate: 'Jun 2019',
            // tslint:disable-next-line:max-line-length
            description: 'Work as a web Developer, UI developer and java developer with J2EE/jsp/servlet and javascript libraries (jQuery, Angular, Angularjs). work as Internal Team lead for Application development/Deployment.'
          }, {
            title: 'UI/UX Designer and Frontend Developer',
            company: 'CodeMax IT Solutions',
            fromDate: {
              year: '2019',
              month: 'Jun'
            },
            toDate: 'Nov 2020',
            // tslint:disable-next-line:max-line-length
            description: 'Work as UI/UX designer and frontend developer using Amgular 9 to create websites.'
          }, {
            title: 'Software Engineer',
            company: 'Ne Techology Pvt. ltd',
            fromDate: {
              year: '2020',
              month: 'Nov'
            },
            toDate: 'Present,',
            // tslint:disable-next-line:max-line-length
            description: 'Working as Full stack Developer for web applications with Java Spring-boot/Angular 5.'
          }];
          this.get_portfolio();
        }

        _createClass(_ContentComponent, [{
          key: "get_portfolio",
          value: function get_portfolio() {
            this.portfolio = [{
              "name": "SBIEpay",
              "url": "https://sbi.co.in/web/personal-banking/sbiepay",
              "covers": {
                "404": "assets/images/portfolio/SBIePay.jpg"
              },
              "fields": ["Web Development", "Java", "Jsp/Servlets"],
              "stats": {
                "views": 0,
                "appreciations": 0,
                "comments": 0
              }
            }, {
              "name": "cleartrack",
              "url": "https://www2.cleartrack.com/",
              "covers": {
                "404": "assets/images/portfolio/cleartrack.png"
              },
              "fields": ["Web Development", "UI", "Angularjs"],
              "stats": {
                "views": 0,
                "appreciations": 0,
                "comments": 0
              }
            }, {
              "name": "Remit2india",
              "url": "https://www.remit2india.com/",
              "covers": {
                "404": "assets/images/portfolio/remit2india.png"
              },
              "fields": ["Web Development", "Java", "J2EE", "UI", "Jsp/Servlets", "jquery"],
              "stats": {
                "views": 0,
                "appreciations": 0,
                "comments": 0
              }
            }, {
              "name": "Moneynetint",
              "url": "https://moneynetint.com/",
              "covers": {
                "404": "assets/images/portfolio/moneynetint.png"
              },
              "fields": ["Web Development", "UI/UX", "Angular 9", "Nodejs"],
              "stats": {
                "views": 0,
                "appreciations": 0,
                "comments": 0
              }
            }, {
              "name": "universal order connect",
              "url": "https://www.home.neustar/resources/product-literature/ethernet-ordering-service-sheet",
              "covers": {
                "404": "assets/images/portfolio/uom.png"
              },
              "fields": ["Web Development", "UI/UX", "Angular 5", "Java", "Spring boot"],
              "stats": {
                "views": 0,
                "appreciations": 0,
                "comments": 0
              }
            }];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ContentComponent;
      }();

      _ContentComponent.ɵfac = function ContentComponent_Factory(t) {
        return new (t || _ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_behance_service__WEBPACK_IMPORTED_MODULE_0__.BehanceService));
      };

      _ContentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ContentComponent,
        selectors: [["app-content"]],
        decls: 31,
        vars: 11,
        consts: [[1, "main-wrapper"], [1, "section", "summary-section"], [1, "section-title"], [1, "icon-holder"], [1, "fas", "fa-user"], [1, "summary"], [1, "color-blod"], [1, "section", "experiences-section"], [1, "fas", "fa-briefcase"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "section", "portfolio-section"], [1, "fas", "fa-th-large"], [1, "portfolio-content"], [1, "row"], ["class", "col-xl-6", 4, "ngFor", "ngForOf"], [1, "text-center"], [3, "pageChange"], [1, "item"], [1, "meta"], [1, "upper-row"], [1, "job-title"], [1, "time"], [1, "company"], [1, "details"], [1, "col-xl-6"], [1, "portfolio-item"], ["target", "_blank", 3, "href"], [3, "src", "alt"], [1, "stats"], [1, "list-unstyled"], [1, "far", "fa-eye"], [1, "far", "fa-thumbs-up"], ["class", "tags", 4, "ngIf"], [1, "tags"], [4, "ngFor", "ngForOf"]],
        template: function ContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Career Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " I'M Prashil a full-stack developer with over 5 years of professional experience in web development, i currently living in Goa India. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " I have a Bachelor of Engineering in information Technology, and diploma in electronics and communication engineering. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " My best qualities include being a creative thinker, a leader, a cheerleader, a team player, a multi-tasker, a hard worker and someone who understands that behind every great development is an important business objective. I\u2019m always seeking new technical skills and new solutions. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "section", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Experiences");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ContentComponent_div_18_Template, 12, 6, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "orderBy");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "section", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Portfolio ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ContentComponent_div_27_Template, 16, 7, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "paginate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "pagination-controls", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function ContentComponent_Template_pagination_controls_pageChange_30_listener($event) {
              return ctx.p = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](19, 2, ctx.experiences, "desc", "fromDate.year"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](28, 6, ctx.portfolio, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx.p)));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        pipes: [_pipes_orderby_orderby_pipe__WEBPACK_IMPORTED_MODULE_2__.OrderbyPipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.PaginatePipe],
        styles: [".main-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 60px;\n  padding-left: 360px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 500;\n  color: #da1313;\n  position: relative;\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   .icon-holder[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  margin-right: 10px;\n  display: inline-block;\n  color: #fff;\n  border-radius: 3px;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  background: #093648;\n  text-align: center;\n  font-size: 20px;\n  position: relative;\n}\n.main-wrapper[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   .icon-holder[_ngcontent-%COMP%]   .svg-inline--fa[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 10px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .section.summary-section[_ngcontent-%COMP%]   p.color-blod[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: 500;\n}\n.main-wrapper[_ngcontent-%COMP%]   .experiences-section[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 2px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%] {\n  color: #3F4650;\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-weight: 500;\n}\n.main-wrapper[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  color: #97AAC3;\n}\n.main-wrapper[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #97AAC3;\n}\n.main-wrapper[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .projects-section[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .projects-section[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .portfolio-section[_ngcontent-%COMP%] {\n  height: 45em;\n}\n.main-wrapper[_ngcontent-%COMP%]   .portfolio-content[_ngcontent-%COMP%] {\n  margin: 0px;\n  height: 104%;\n}\n.main-wrapper[_ngcontent-%COMP%]   .portfolio-content[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 300px;\n  border-radius: 5px;\n  margin-bottom: 30px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .portfolio-content[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  left: 0px;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .portfolio-content[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  border-radius: 5px;\n  transition: all 0.4s ease-in-out;\n}\n.main-wrapper[_ngcontent-%COMP%]   .portfolio-content[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.9) 100%) repeat scroll 0 0;\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n  position: absolute;\n  z-index: 5;\n  bottom: 0px;\n  left: 0px;\n  padding: 40px 15px 10px 15px;\n  transition: all 0.2s ease-in-out;\n}\n.main-wrapper[_ngcontent-%COMP%]   .portfolio-content[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n  margin: 0px;\n  width: 70%;\n}\n.main-wrapper[_ngcontent-%COMP%]   .portfolio-content[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  bottom: -5px;\n  transition: all 0.2s ease-in-out;\n}\n.main-wrapper[_ngcontent-%COMP%]   .portfolio-content[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 15px;\n  color: #fff;\n}\n.main-wrapper[_ngcontent-%COMP%]   .portfolio-content[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  bottom: -60px;\n  transition: all 0.2s ease-in-out;\n}\n.main-wrapper[_ngcontent-%COMP%]   .portfolio-content[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: #0056b3;\n  display: inline-block;\n  margin-right: 15px;\n  color: #fff;\n  font-size: 13px;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .portfolio-content[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1, 1.1);\n}\n.main-wrapper[_ngcontent-%COMP%]   .portfolio-content[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]:hover   .details[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .portfolio-content[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]:hover   .details[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  bottom: 40px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .portfolio-content[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]:hover   .details[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  bottom: 0px;\n}\n.skillset[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  overflow: hidden;\n}\n.skillset[_ngcontent-%COMP%]   .level-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n.skillset[_ngcontent-%COMP%]   .level-bar[_ngcontent-%COMP%] {\n  height: 12px;\n  background: #f5f5f5;\n  border-radius: 2px;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n}\n.skillset[_ngcontent-%COMP%]   .theme-progress-bar[_ngcontent-%COMP%] {\n  background: #f37a7a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VDRkYsa0JER3lCO0VDRHpCLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFREFFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFNTjtBQUpNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBTVI7QUFBRTtFQUNFLG1CQUFBO0FBRUo7QUFDTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNSO0FBS0k7RUFDRSxtQkFBQTtBQUhOO0FBT0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFMSjtBQVFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQU5KO0FBU0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtBQVBKO0FBVUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFSSjtBQVdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBVEo7QUFhSTtFQUNFLG1CQUFBO0FBWE47QUFjSTtFQUNFLG1CQUFBO0FBWk47QUFnQkU7RUFDRSxZQUFBO0FBZEo7QUFnQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWRKO0FBZ0JJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBZE47QUFnQk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBZFI7QUFpQk07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFmUjtBQWtCTTtFQUNFLHdIQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtBQWhCUjtBQWtCUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFoQlY7QUFtQlE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFqQlY7QUFtQlU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQWpCWjtBQXFCUTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQW5CVjtBQXFCVTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQW5CWjtBQXlCUTtFQUNFLDBCQUFBO0FBdkJWO0FBMEJRO0VBQ0Usb0JBQUE7QUF4QlY7QUEwQlU7RUFDRSxZQUFBO0FBeEJaO0FBMkJVO0VBQ0UsV0FBQTtBQXpCWjtBQW9DRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFqQ0o7QUFvQ0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBbENKO0FBc0NFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VDbk1BLGtCRG9NdUI7RUNsTXZCLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtBRG1LSjtBQWdDRTtFQUNFLG1CQUFBO0FBOUJKIiwiZmlsZSI6ImNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvbWl4aW5zXCI7XG5cbi5tYWluLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA2MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDM2MHB4O1xuXG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiBkYXJrZW4oI2VmNGI0YiwgMTUlKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgLmljb24taG9sZGVyIHtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoM3B4KTtcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigjMTE2YThjLCAxNSUpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuc3ZnLWlubGluZS0tZmEge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAuc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcblxuICAgICYuc3VtbWFyeS1zZWN0aW9uIHtcbiAgICAgIHAuY29sb3ItYmxvZCB7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5leHBlcmllbmNlcy1zZWN0aW9uIHtcbiAgICAuaXRlbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgfVxuXG4gIC51cHBlci1yb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgfVxuXG4gIC5qb2ItdGl0bGUge1xuICAgIGNvbG9yOiAjM0Y0NjUwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC50aW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGNvbG9yOiAjOTdBQUMzO1xuICB9XG5cbiAgLmNvbXBhbnkge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6ICM5N0FBQzM7XG4gIH1cblxuICAucHJvamVjdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cblxuICAucHJvamVjdHMtc2VjdGlvbiB7XG4gICAgLmludHJvIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgLml0ZW0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG4gIH1cblxuICAucG9ydGZvbGlvLXNlY3Rpb257XG4gICAgaGVpZ2h0OiA0NWVtO1xuICB9XG4gIC5wb3J0Zm9saW8tY29udGVudCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgaGVpZ2h0OjEwNCU7XG5cbiAgICAucG9ydGZvbGlvLWl0ZW0ge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgICBhIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAuZGV0YWlscyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSAwcHgsIHJnYmEoMCwgMCwgMCwgMC45KSAxMDAlKSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBwYWRkaW5nOiA0MHB4IDE1cHggMTBweCAxNXB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcblxuICAgICAgICBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdHMge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICBib3R0b206IC01cHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50YWdzIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgICBib3R0b206IC02MHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwNTZiMztcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XG4gICAgICAgIH1cblxuICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG5cbiAgICAgICAgICAuc3RhdHMge1xuICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50YWdzIHtcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cblxuLnNraWxsc2V0IHtcbiAgLml0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5sZXZlbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxuXG5cbiAgLmxldmVsLWJhciB7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygycHgpO1xuICB9XG5cbiAgLnRoZW1lLXByb2dyZXNzLWJhciB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRlbigjZWY0YjRiLCAxMCUpO1xuICB9XG59XG4iLCJAbWl4aW4gdGV4dC1zaGFkb3cgKCRzdHJpbmc6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpKSB7XG4gICAgdGV4dC1zaGFkb3c6ICRzdHJpbmc7XG59XG5AbWl4aW4gYm94LXNoYWRvdyAoJHN0cmluZykge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHN0cmluZztcbiAgICAtbW96LWJveC1zaGFkb3c6ICAgICRzdHJpbmc7XG4gICAgYm94LXNoYWRvdzogICAgICAgICAkc3RyaW5nO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHR5cGU6IGJvcmRlci1ib3gpIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6ICR0eXBlO1xuICAgIC1tb3otYm94LXNpemluZzogICAgJHR5cGU7XG4gICAgYm94LXNpemluZzogICAgICAgICAkdHlwZTtcbn1cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXM6IDVweCkge1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6ICAgICRyYWRpdXM7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6ICAgICAkcmFkaXVzO1xuICAgIC1vLWJvcmRlci1yYWRpdXM6ICAgICAgJHJhZGl1cztcbiAgICBib3JkZXItcmFkaXVzOiAgICAgICAgICRyYWRpdXM7XG5cbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogICAgcGFkZGluZztcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYmFja2dyb3VuZC1jbGlwOiAgICAgICAgIHBhZGRpbmctYm94O1xufVxuQG1peGluIGJvcmRlci1yYWRpdXNlcyAoJHRvcHJpZ2h0OiAwLCAkYm90dG9tcmlnaHQ6IDAsICRib3R0b21sZWZ0OiAwLCAkdG9wbGVmdDogMCkge1xuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAgICR0b3ByaWdodDtcbiAgICAtd2Via2l0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tcmlnaHQ7XG4gICAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgJGJvdHRvbWxlZnQ7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAgICAgJHRvcGxlZnQ7XG5cbiAgICAtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6ICAgICAgICAkdG9wcmlnaHQ7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbXJpZ2h0OiAgICAgJGJvdHRvbXJpZ2h0O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiAgICAgICRib3R0b21sZWZ0O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiAgICAgICAgICR0b3BsZWZ0O1xuXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAgICAgICAgICAgJHRvcHJpZ2h0O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAgICAgICAgICRib3R0b21yaWdodDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgICAgICAgICAkYm90dG9tbGVmdDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAgICAgICAgICAgICAkdG9wbGVmdDtcblxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiAgICBwYWRkaW5nOyBcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IFxuICAgIGJhY2tncm91bmQtY2xpcDogICAgICAgICBwYWRkaW5nLWJveDsgXG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkb3BhY2l0eTogMC41KSB7XG4gICAgLXdlYmtpdC1vcGFjaXR5OiBcdCRvcGFjaXR5O1xuICAgIC1tb3otb3BhY2l0eTogXHRcdCRvcGFjaXR5O1xuICAgIG9wYWNpdHk6IFx0XHQkb3BhY2l0eTtcbn1cblxuQG1peGluIGdyYWRpZW50ICgkc3RhcnRDb2xvcjogI2VlZSwgJGVuZENvbG9yOiB3aGl0ZSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdGFydENvbG9yO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oJHN0YXJ0Q29sb3IpLCB0bygkZW5kQ29sb3IpKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xufVxuQG1peGluIGhvcml6b250YWwtZ3JhZGllbnQgKCRzdGFydENvbG9yOiAjZWVlLCAkZW5kQ29sb3I6IHdoaXRlKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN0YXJ0Q29sb3I7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oJHN0YXJ0Q29sb3IpLCB0bygkZW5kQ29sb3IpKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbn1cblxuQG1peGluIGFuaW1hdGlvbiAoJG5hbWUsICRkdXJhdGlvbjogMzAwbXMsICRkZWxheTogMCwgJGVhc2U6IGVhc2UpIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogJG5hbWUgJGR1cmF0aW9uICRkZWxheSAkZWFzZTtcbiAgICAtbW96LWFuaW1hdGlvbjogICAgJG5hbWUgJGR1cmF0aW9uICRkZWxheSAkZWFzZTtcbiAgICAtbXMtYW5pbWF0aW9uOiAgICAgJG5hbWUgJGR1cmF0aW9uICRkZWxheSAkZWFzZTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCR0cmFuc2l0aW9uKSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjsgIFxuICAgIC1tb3otdHJhbnNpdGlvbjogICAgJHRyYW5zaXRpb247XG4gICAgLW1zLXRyYW5zaXRpb246ICAgICAkdHJhbnNpdGlvbjsgXG4gICAgLW8tdHJhbnNpdGlvbjogICAgICAkdHJhbnNpdGlvbjsgIFxufVxuQG1peGluIHRyYW5zZm9ybSgkc3RyaW5nKXtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogICRzdHJpbmc7XG4gICAgLW1vei10cmFuc2Zvcm06IFx0ICRzdHJpbmc7XG4gICAgLW1zLXRyYW5zZm9ybTogXHRcdCAkc3RyaW5nO1xuICAgIC1vLXRyYW5zZm9ybTogXHRcdCAkc3RyaW5nO1xufVxuQG1peGluIHNjYWxlICgkZmFjdG9yKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCRmYWN0b3IpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBcdCBzY2FsZSgkZmFjdG9yKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBcdFx0IHNjYWxlKCRmYWN0b3IpO1xuICAgIC1vLXRyYW5zZm9ybTogXHRcdCBzY2FsZSgkZmFjdG9yKTtcbn1cbkBtaXhpbiByb3RhdGUgKCRkZWcpIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBcdCByb3RhdGUoJGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogXHRcdCByb3RhdGUoJGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiBcdFx0IHJvdGF0ZSgkZGVnKTtcbn1cbkBtaXhpbiBza2V3ICgkZGVnLCAkZGVnMikge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAgICAgICBza2V3KCRkZWcsICRkZWcyKTtcbiAgICAtbW96LXRyYW5zZm9ybTogXHQgc2tldygkZGVnLCAkZGVnMik7XG4gICAgLW1zLXRyYW5zZm9ybTogXHRcdCBza2V3KCRkZWcsICRkZWcyKTtcbiAgICAtby10cmFuc2Zvcm06IFx0XHQgc2tldygkZGVnLCAkZGVnMik7XG59XG5AbWl4aW4gdHJhbnNsYXRlICgkeCwgJHk6MCkge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAgICAgICB0cmFuc2xhdGUoJHgsICR5KTtcbiAgICAtbW96LXRyYW5zZm9ybTogXHQgdHJhbnNsYXRlKCR4LCAkeSk7XG4gICAgLW1zLXRyYW5zZm9ybTogXHRcdCB0cmFuc2xhdGUoJHgsICR5KTtcbiAgICAtby10cmFuc2Zvcm06IFx0XHQgdHJhbnNsYXRlKCR4LCAkeSk7XG59XG5AbWl4aW4gdHJhbnNsYXRlM2QgKCR4LCAkeTogMCwgJHo6IDApIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogICAgICAgdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgLW1vei10cmFuc2Zvcm06IFx0IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xuICAgIC1tcy10cmFuc2Zvcm06IFx0XHQgdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgLW8tdHJhbnNmb3JtOiBcdFx0IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xufVxuQG1peGluIHBlcnNwZWN0aXZlICgkdmFsdWU6IDEwMDApIHtcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiBcdCR2YWx1ZTtcbiAgICAtbW96LXBlcnNwZWN0aXZlOiBcdCR2YWx1ZTtcbiAgICAtbXMtcGVyc3BlY3RpdmU6IFx0JHZhbHVlO1xuICAgIHBlcnNwZWN0aXZlOiBcdFx0JHZhbHVlO1xufVxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4gKCR4OmNlbnRlciwgJHk6Y2VudGVyKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkeCAkeTtcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICAgICR4ICR5O1xuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAgICAgJHggJHk7XG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogICAgICAkeCAkeTtcbn1cblxuQG1peGluIHJlc2V0LWJveC1zaXppbmcgKCRzaXplOmNvbnRlbnQtYm94KSB7XG4gICAgJixcbiAgICAqLFxuICAgICo6YmVmb3JlLFxuICAgICAgICAqOmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgYm94LXNpemluZygkc2l6ZSk7XG4gICAgfVxufVxuXG5AbWl4aW4gdHJ1bmNhdGUgKCRtYXgtd2lkdGg6IDI1MHB4KSB7XG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJhY2tncm91bmQtc2l6ZSAoJHN0cmluZzogY29udGFpbikge1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAkc3RyaW5nO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiAkc3RyaW5nO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogJHN0cmluZztcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICRzdHJpbmc7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciAoJGNvbG9yOiAjOTk5KSB7XG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIFdlYktpdCBicm93c2VycyAqL1xuICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgIH1cbiAgICAmOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xuICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgIH1cbiAgICAmOjotbW96LXBsYWNlaG9sZGVyIHsgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xuICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgIH1cbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xuICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgIH1cbn1cblxuXG5cblxuXG5cblxuIl19 */"]
      });
      /***/
    },

    /***/
    4662:
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 4,
        vars: 0,
        consts: [[1, "footer"], [1, "text-center"], [1, "copyright"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Copyright 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    9201:
    /*!*********************************************************!*\
      !*** ./src/app/components/sidebar/sidebar.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidebarComponent": function SidebarComponent() {
          return (
            /* binding */
            _SidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/chips */
      8341);

      var _SidebarComponent = /*#__PURE__*/function () {
        function _SidebarComponent() {
          _classCallCheck(this, _SidebarComponent);

          this.myName = 'Prashil Wadkar';
          this.myJob = 'Full Stack Developer';
          this.contactDetails = {
            phone: '+91-9011277645',
            email: 'prashiln79@gmail.com',
            behance: 'https://prashiln79.github.io/VSPLus/',
            github: 'https://github.com/prashiln79',
            stackoverflow: 'https://stackoverflow.com/users/12459264/prashil-wadkar',
            linkedin: 'https://www.linkedin.com/in/prashiln79',
            twitter: 'https://twitter.com/PrashilWadkar'
          };
        }

        _createClass(_SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SidebarComponent;
      }();

      _SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || _SidebarComponent)();
      };

      _SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 103,
        vars: 10,
        consts: [[1, "sidebar-wrapper"], [1, "profile-container"], ["src", "assets/images/prashil.jpg", "alt", "Prashil Wadkar", 1, "profile"], [1, "name"], [1, "tagline"], [1, "contact-container", "container-block"], [1, "list-unstyled", "contact-list"], [1, "email"], [1, "fas", "fa-envelope"], [3, "href"], [1, "phone"], [1, "fas", "fa-phone"], [1, "github"], [1, "fab", "fa-github"], ["target", "_blank", 3, "href"], [1, "fab", "fa-stack-overflow"], [1, "linkedin"], [1, "fab", "fa-linkedin-in"], [1, "twitter"], [1, "fab", "fa-twitter"], [1, "education-container", "container-block"], [1, "container-block-title"], [1, "item"], [1, "degree"], [1, "meta"], [1, "time"], [1, "languages-container", "container-block"], [1, "list-unstyled", "interests-list"], [1, "lang-desc"], [1, "interests-container", "container-block"], ["aria-label", "Fish selection"], ["color", "primary", "selected", ""]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Github");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Stack Overflow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Linkedin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Graduation in Information Technology");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Goa Engineering College");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2013 \u2013 2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Awards");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2nd place in Exhibition held in College");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "bitcoin wallet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "3rd Prize in Goa Diploma level");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h5", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "wireless video streaming robot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Languages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Hindi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "(Native)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "English ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "(Advanced)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Technical Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-chip-list", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-chip", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "JAVA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-chip", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Node.js");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "JavaScript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Angular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "React");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Spring");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Spring boot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Ngrx/store");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Rxjs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "CSS3 ( LESS , SCSS )");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Bootstrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Material UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Photoshop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "HTML5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Mongodb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Mysql");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myJob);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.contactDetails.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactDetails.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx.contactDetails.phone, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactDetails.phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.contactDetails.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.contactDetails.stackoverflow, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.contactDetails.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.contactDetails.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_1__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__.MatChip],
        styles: [".sidebar-wrapper[_ngcontent-%COMP%] {\n  background: #116a8c;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 300px;\n  height: 100%;\n  min-height: 800px;\n  color: #fff;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .profile-container[_ngcontent-%COMP%] {\n  padding: 30px;\n  background: rgba(0, 0, 0, 0.25);\n  text-align: center;\n  color: #fff;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 900;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  margin: 0px auto 15px auto;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.35);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: block;\n  border-radius: 4%;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  font-size: 18px;\n  vertical-align: middle;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .contact-list[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .svg-inline--fa[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .container-block[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .container-block-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .degree[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .education-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .education-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .education-container[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  margin-bottom: 0px;\n  margin-top: 0;\n  font-size: 14px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .education-container[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  margin-bottom: 0px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .languages-container[_ngcontent-%COMP%]   .lang-desc[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .languages-list[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .languages-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .languages-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .interests-list[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .interests-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .interests-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFFQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUhKO0FBTUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU9FO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQVFFO0VBQ0UsMEJBQUE7RUFDQSwyQ0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtBQU5KO0FBVUk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQVJOO0FBV0k7RUFDRSxtQkFBQTtBQVROO0FBV007RUFDRSxnQkFBQTtBQVRSO0FBY007RUFDRSxlQUFBO0FBWlI7QUFpQkU7RUFDRSxhQUFBO0FBZko7QUFrQkU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWhCSjtBQW1CRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFqQko7QUFxQkk7RUFDRSxtQkFBQTtBQW5CTjtBQXFCTTtFQUNFLGdCQUFBO0FBbkJSO0FBdUJJO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFyQk47QUF3Qkk7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF0Qk47QUEyQkk7RUFDRSwrQkFBQTtBQXpCTjtBQTZCRTtFQUNFLGdCQUFBO0FBM0JKO0FBNkJJO0VBQ0UsbUJBQUE7QUEzQk47QUE2Qk07RUFDRSxnQkFBQTtBQTNCUjtBQWdDRTtFQUNFLGdCQUFBO0FBOUJKO0FBZ0NJO0VBQ0UsbUJBQUE7QUE5Qk47QUFnQ007RUFDRSxnQkFBQTtBQTlCUiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL21peGluc1wiO1xuXG4uc2lkZWJhci13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogIzExNmE4YztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogODAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuXG4gIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLnByb2ZpbGUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIC8vYmFja2dyb3VuZDogZGFya2VuKCNlZjRiNGIsIDEwJSk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAubmFtZSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLnRhZ2xpbmUge1xuICAgIGNvbG9yOiByZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNik7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLnByb2ZpbGUge1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMTVweCBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNCU7XG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIH1cblxuICAuY29udGFjdC1saXN0IHtcbiAgICAuZmFiLCAuZmFzIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5lbWFpbCB7XG4gICAgICAuc3ZnLWlubGluZS0tZmEge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRhaW5lci1ibG9jayB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxuXG4gIC5jb250YWluZXItYmxvY2stdGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgLmRlZ3JlZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgLmVkdWNhdGlvbi1jb250YWluZXIge1xuICAgIC5pdGVtIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1ldGEge1xuICAgICAgY29sb3I6IHJnYmEoMjU2LCAyNTYsIDI1NiwgMC42KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC50aW1lIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNik7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5sYW5ndWFnZXMtY29udGFpbmVyIHtcbiAgICAubGFuZy1kZXNjIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNik7XG4gICAgfVxuICB9XG5cbiAgLmxhbmd1YWdlcy1saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgbGkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaW50ZXJlc3RzLWxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICBsaSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    6781:
    /*!***********************************************!*\
      !*** ./src/app/pipes/orderby/orderby.pipe.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderbyPipe": function OrderbyPipe() {
          return (
            /* binding */
            _OrderbyPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash */
      3815);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _OrderbyPipe = /*#__PURE__*/function () {
        function _OrderbyPipe() {
          _classCallCheck(this, _OrderbyPipe);
        }

        _createClass(_OrderbyPipe, [{
          key: "transform",
          value: function transform(value) {
            var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var column = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

            if (!value || order === '' || !order) {
              return value;
            } // no array


            if (!column || column === '') {
              return (0, lodash__WEBPACK_IMPORTED_MODULE_0__.orderBy)(value);
            } // sort 1d array


            if (value.length <= 1) {
              return value;
            } // array with only one item


            return (0, lodash__WEBPACK_IMPORTED_MODULE_0__.orderBy)(value, [column], [order]);
          }
        }]);

        return _OrderbyPipe;
      }();

      _OrderbyPipe.ɵfac = function OrderbyPipe_Factory(t) {
        return new (t || _OrderbyPipe)();
      };

      _OrderbyPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "orderBy",
        type: _OrderbyPipe,
        pure: true
      });
      /***/
    },

    /***/
    9704:
    /*!*********************************************!*\
      !*** ./src/app/services/behance.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BehanceService": function BehanceService() {
          return (
            /* binding */
            _BehanceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _BehanceService = /*#__PURE__*/function () {
        function _BehanceService(http) {
          _classCallCheck(this, _BehanceService);

          this.http = http;
          this.behance_api_url = 'https://www.behance.net/v2/users/Abdo-Host/projects?api_key=XkdIqoC84eTbW55NUWXS3Eudym6rgBQw';
        }

        _createClass(_BehanceService, [{
          key: "getPortfolio",
          value: function getPortfolio() {
            return this.http.jsonp(this.behance_api_url, 'callback');
          }
        }]);

        return _BehanceService;
      }();

      _BehanceService.ɵfac = function BehanceService_Factory(t) {
        return new (t || _BehanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _BehanceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _BehanceService,
        factory: _BehanceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map