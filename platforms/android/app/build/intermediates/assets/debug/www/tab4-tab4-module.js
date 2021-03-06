(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");







var routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]
    }
];
var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
    Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
        })
    ], Tab4PageModule);
    return Tab4PageModule;
}());



/***/ }),

/***/ "./src/app/tab4/tab4.page.html":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <img src = \"https://www.locss.org/theme/images/logo.svg\"/>\r\n      LOCSS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"background\">\r\n  <ion-card class=\"card\">\r\n \r\n   \r\n    <ion-card-header>\r\n      \r\n      <ion-card-title></ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n        <ion-text>\r\n          <h1 class=\"h1class\">The Lake Observations by Citizen Scientists & Satellites project seeks to\r\n             better understand how the quanity of water in lakes is changing.</h1>\r\n            <br>\r\n      </ion-text>\r\n      </ion-card-content>\r\n\r\n      </ion-card>\r\n\r\n\r\n\r\n      <ion-card class=\"card1\">\r\n \r\n   \r\n        <ion-card-header>\r\n          \r\n        <ion-card-title>\r\n          <h1 class=\"para\">\r\n          Project developed by: </h1></ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n            <ion-text>\r\n              <img src = \"https://www.locss.org/uploads/assets/partners/_full/UNC_logo_RGB-300x82.png\"/><br><br>\r\n              \r\n              <h1 class=\"para\"> In collaboration with: </h1><br><br>\r\n              <img src = \"https://www.locss.org/uploads/assets/partners/_full/TT-UW-Logo-collage-halfspace.png\"/><br><br>\r\n              \r\n              <h1 class=\"para\">With funding provided by: </h1><br><br>\r\n              <div class=\"d-flex justify-content-lg-center\">\r\n                <img src=\"https://www.locss.org/uploads/assets/partners/_full/NASA_logo.svg.png\"/>\r\n              </div>\r\n            </ion-text>\r\n          </ion-card-content>\r\n    \r\n          </ion-card>\r\n\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url(https://www.locss.org/uploads/assets/_full/east-loon.JPG) 0 0/100% 100% no-repeat; }\n\n.card {\n  background-color: #0074D9; }\n\n.card1 {\n  background-color: #001f3f; }\n\n.imgclass {\n  width: 275px;\n  height: 200px;\n  padding-left: 50px; }\n\n.h1class {\n  font-size: 1.75rem;\n  font-family: 'Comic Sans MS';\n  font-weight: bold;\n  color: #f8f9fa !important; }\n\n.para {\n  font-size: 1.50rem;\n  font-family: 'Roboto';\n  color: #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNC9DOlxcVXNlcnNcXERpcGF5YW4gQmFuaWtcXERlc2t0b3BcXExPQ1NTX0lPTklDL3NyY1xcYXBwXFx0YWI0XFx0YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1HQUFhLEVBQUE7O0FBR2pCO0VBRUkseUJBQXdCLEVBQUE7O0FBRzVCO0VBR0kseUJBQXlCLEVBQUE7O0FBSTdCO0VBRUksWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFHdEI7RUFFSSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQix5QkFBd0IsRUFBQTs7QUFJNUI7RUFFSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG5cclxuICAgIC0tYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vd3d3LmxvY3NzLm9yZy91cGxvYWRzL2Fzc2V0cy9fZnVsbC9lYXN0LWxvb24uSlBHKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmNhcmR7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3NEQ5O1xyXG5cclxufVxyXG4uY2FyZDF7XHJcblxyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiMwMDMzNjY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxZjNmO1xyXG5cclxufVxyXG5cclxuLmltZ2NsYXNze1xyXG5cclxuICAgIHdpZHRoOiAyNzVweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5oMWNsYXNze1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ29taWMgU2FucyBNUyc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZjhmOWZhIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5wYXJhe1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMS41MHJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGNvbG9yOiM5OTk7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab4Page = /** @class */ (function () {
    function Tab4Page() {
    }
    Tab4Page.prototype.ngOnInit = function () {
    };
    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab4',
            template: __webpack_require__(/*! ./tab4.page.html */ "./src/app/tab4/tab4.page.html"),
            styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab4Page);
    return Tab4Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module.js.map