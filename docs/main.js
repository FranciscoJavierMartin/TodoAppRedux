(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-todo></app-todo>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todoapp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _todo_todos_list_todos_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo/todos-list/todos-list.component */ "./src/app/todo/todos-list/todos-list.component.ts");
/* harmony import */ var _todo_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo/todo-item/todo-item.component */ "./src/app/todo/todo-item/todo-item.component.ts");
/* harmony import */ var _todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todo/todo-footer/todo-footer.component */ "./src/app/todo/todo-footer/todo-footer.component.ts");
/* harmony import */ var _todo_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todo/todo-add/todo-add.component */ "./src/app/todo/todo-add/todo-add.component.ts");
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.reducers */ "./src/app/app.reducers.ts");
/* harmony import */ var _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filter/filter.pipe */ "./src/app/filter/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// ngrx


 // Angular CLI environemnt
// Forms










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_8__["TodoComponent"],
                _todo_todos_list_todos_list_component__WEBPACK_IMPORTED_MODULE_9__["TodosListComponent"],
                _todo_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_10__["TodoItemComponent"],
                _todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_11__["TodoFooterComponent"],
                _todo_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_12__["TodoAddComponent"],
                _filter_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(_app_reducers__WEBPACK_IMPORTED_MODULE_13__["appReducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.reducers.ts":
/*!*********************************!*\
  !*** ./src/app/app.reducers.ts ***!
  \*********************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _todo_todo_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo/todo.reducer */ "./src/app/todo/todo.reducer.ts");
/* harmony import */ var _filter_filter_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter/filter.reducer */ "./src/app/filter/filter.reducer.ts");


var appReducers = {
    todos: _todo_todo_reducer__WEBPACK_IMPORTED_MODULE_0__["todoReducer"],
    filter: _filter_filter_reducer__WEBPACK_IMPORTED_MODULE_1__["filterReducer"]
};


/***/ }),

/***/ "./src/app/filter/filter.actions.ts":
/*!******************************************!*\
  !*** ./src/app/filter/filter.actions.ts ***!
  \******************************************/
/*! exports provided: SET_FILTER, SetFilterAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FILTER", function() { return SET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFilterAction", function() { return SetFilterAction; });
var SET_FILTER = '[Filter] Set Filtro';
var SetFilterAction = /** @class */ (function () {
    function SetFilterAction(filter) {
        this.filter = filter;
        this.type = SET_FILTER;
    }
    return SetFilterAction;
}());



/***/ }),

/***/ "./src/app/filter/filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/filter/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (todos, filter) {
        var res;
        switch (filter) {
            case 'completed':
                res = todos.filter(function (todo) { return todo.completed; });
                break;
            case 'active':
                res = todos.filter(function (todo) { return !todo.completed; });
                break;
            default:
                res = todos;
        }
        return res;
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterTodo'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/filter/filter.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/filter/filter.reducer.ts ***!
  \******************************************/
/*! exports provided: filterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterReducer", function() { return filterReducer; });
/* harmony import */ var _filter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.actions */ "./src/app/filter/filter.actions.ts");

var initialState = 'all';
function filterReducer(state, action) {
    if (state === void 0) { state = initialState; }
    var res;
    switch (action.type) {
        case _filter_actions__WEBPACK_IMPORTED_MODULE_0__["SET_FILTER"]:
            res = action.filter;
            break;
        default:
            res = state;
    }
    return res;
}


/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"info\">\n  <p>Double-click to edit a todo</p>\n  <!-- Remove the below line ↓ -->\n  <p>Template by <a href=\"http://sindresorhus.com\">Sindre Sorhus</a></p>\n  <!-- Change this out with your name and url ↓ -->\n  <p>Created by <a href=\"http://todomvc.com\">you</a></p>\n  <p>Part of <a href=\"http://todomvc.com\">TodoMVC</a></p>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/todo/model/todo.model.ts":
/*!******************************************!*\
  !*** ./src/app/todo/model/todo.model.ts ***!
  \******************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(text) {
        this.text = text.charAt(0).toUpperCase() + text.slice(1);
        this.completed = false;
        // This is an example app,
        // On a real app, please use another method to assign an id.
        this.id = Math.random();
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/todo/todo-add/todo-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-add/todo-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <h1>todos</h1>\n  <input class=\"new-todo\" \n    placeholder=\"What needs to be done?\" \n    [formControl]=\"txtInput\"\n    (keyup.enter)=\"addTodo()\"\n    autofocus>\n</header>"

/***/ }),

/***/ "./src/app/todo/todo-add/todo-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/todo/todo-add/todo-add.component.ts ***!
  \*****************************************************/
/*! exports provided: TodoAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAddComponent", function() { return TodoAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo.actions */ "./src/app/todo/todo.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoAddComponent = /** @class */ (function () {
    function TodoAddComponent(store) {
        this.store = store;
    }
    TodoAddComponent.prototype.ngOnInit = function () {
        this.txtInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    };
    TodoAddComponent.prototype.addTodo = function () {
        if (this.txtInput.valid) {
            var action = new _todo_actions__WEBPACK_IMPORTED_MODULE_3__["AddTodoAction"](this.txtInput.value);
            this.store.dispatch(action);
            this.txtInput.setValue('');
        }
    };
    TodoAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-add',
            template: __webpack_require__(/*! ./todo-add.component.html */ "./src/app/todo/todo-add/todo-add.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TodoAddComponent);
    return TodoAddComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo-footer/todo-footer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/todo/todo-footer/todo-footer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <!-- This should be `0 items left` by default -->\n  <span class=\"todo-count\"><strong>{{active}}</strong> item left</span>\n  <!-- Remove this if you don't implement routing -->\n  <ul class=\"filters\">\n    <li (click)=\"changeFilter(filter)\" *ngFor=\"let filter of validFilters\">\n      <a [ngClass]=\"{ 'selected': filter === currentFilter }\">{{filter}}</a>\n    </li>\n  </ul>\n  <!-- Hidden if no completed items are left ↓ -->\n  <button (click)=\"removeCompleted()\" class=\"clear-completed\">Clear completed</button>\n</footer>"

/***/ }),

/***/ "./src/app/todo/todo-footer/todo-footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/todo/todo-footer/todo-footer.component.ts ***!
  \***********************************************************/
/*! exports provided: TodoFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFooterComponent", function() { return TodoFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _filter_filter_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../filter/filter.actions */ "./src/app/filter/filter.actions.ts");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo.actions */ "./src/app/todo/todo.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoFooterComponent = /** @class */ (function () {
    function TodoFooterComponent(store) {
        this.store = store;
        this.validFilters = ['all', 'completed', 'active'];
    }
    TodoFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.subscribe(function (state) {
            _this.currentFilter = state.filter;
            _this.countActive(state.todos);
        });
    };
    TodoFooterComponent.prototype.changeFilter = function (newFilter) {
        var action = new _filter_filter_actions__WEBPACK_IMPORTED_MODULE_2__["SetFilterAction"](newFilter);
        this.store.dispatch(action);
    };
    TodoFooterComponent.prototype.countActive = function (todos) {
        this.active = todos.filter(function (todo) { return !todo.completed; }).length;
    };
    TodoFooterComponent.prototype.removeCompleted = function () {
        var action = new _todo_actions__WEBPACK_IMPORTED_MODULE_3__["RemoveAllTodoAction"]();
        this.store.dispatch(action);
    };
    TodoFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-footer',
            template: __webpack_require__(/*! ./todo-footer.component.html */ "./src/app/todo/todo-footer/todo-footer.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TodoFooterComponent);
    return TodoFooterComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo-item/todo-item.component.html":
/*!*********************************************************!*\
  !*** ./src/app/todo/todo-item/todo-item.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li [ngClass]=\"{ 'completed': todo.completed,\n                  'editing': editing }\" >\n  <div class=\"view\">\n    <input \n      class=\"toggle\" \n      type=\"checkbox\"\n      [formControl]=\"chkField\"\n      [checked]=\"todo.completed\">\n    <label (dblclick)=\"edit()\" >{{todo.text}}</label>\n    <button (click)=\"remove()\" class=\"destroy\"></button>\n  </div>\n  <input \n    class=\"edit\" \n    [value]=\"todo.text\"\n    [formControl]=\"txtInput\"\n    (blur)=\"finishEdition()\"\n    #txtInputFisico>\n</li>"

/***/ }),

/***/ "./src/app/todo/todo-item/todo-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-item/todo-item.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _model_todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/todo.model */ "./src/app/todo/model/todo.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todo.actions */ "./src/app/todo/todo.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent(store) {
        this.store = store;
    }
    TodoItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chkField = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.todo.completed);
        this.txtInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.todo.text, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.chkField.valueChanges
            .subscribe(function () {
            var action = new _todo_actions__WEBPACK_IMPORTED_MODULE_4__["ToggleTodoAction"](_this.todo.id);
            _this.store.dispatch(action);
        });
    };
    TodoItemComponent.prototype.edit = function () {
        var _this = this;
        this.editing = true;
        setTimeout(function () {
            _this.txtInputElem.nativeElement.select();
        }, 1);
    };
    TodoItemComponent.prototype.finishEdition = function () {
        this.editing = false;
        if (this.txtInput.valid && this.txtInput.value !== this.todo.text) {
            var action = new _todo_actions__WEBPACK_IMPORTED_MODULE_4__["EditTodoAction"](this.todo.id, this.txtInput.value);
            this.store.dispatch(action);
        }
    };
    TodoItemComponent.prototype.remove = function () {
        var action = new _todo_actions__WEBPACK_IMPORTED_MODULE_4__["RemoveTodoAction"](this.todo.id);
        this.store.dispatch(action);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_todo_model__WEBPACK_IMPORTED_MODULE_2__["Todo"])
    ], TodoItemComponent.prototype, "todo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('txtInputElem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TodoItemComponent.prototype, "txtInputElem", void 0);
    TodoItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-item',
            template: __webpack_require__(/*! ./todo-item.component.html */ "./src/app/todo/todo-item/todo-item.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TodoItemComponent);
    return TodoItemComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.actions.ts":
/*!**************************************!*\
  !*** ./src/app/todo/todo.actions.ts ***!
  \**************************************/
/*! exports provided: ADD_TODO, TOGGLE_TODO, TOGGLE_ALL_TODO, EDIT_TODO, REMOVE_TODO, REMOVE_ALL_TODO, AddTodoAction, ToggleTodoAction, EditTodoAction, RemoveTodoAction, ToggleAllTodoAction, RemoveAllTodoAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_TODO", function() { return TOGGLE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_ALL_TODO", function() { return TOGGLE_ALL_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_TODO", function() { return EDIT_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TODO", function() { return REMOVE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALL_TODO", function() { return REMOVE_ALL_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoAction", function() { return AddTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleTodoAction", function() { return ToggleTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodoAction", function() { return EditTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveTodoAction", function() { return RemoveTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleAllTodoAction", function() { return ToggleAllTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveAllTodoAction", function() { return RemoveAllTodoAction; });
var ADD_TODO = '[TODO] Add todo';
var TOGGLE_TODO = '[TODO] Toggle todo';
var TOGGLE_ALL_TODO = '[TODO] Toggle all todo';
var EDIT_TODO = '[TODO] Edit todo';
var REMOVE_TODO = '[TODO] Remove todo';
var REMOVE_ALL_TODO = '[TODO] Remove all todo';
var AddTodoAction = /** @class */ (function () {
    function AddTodoAction(text) {
        this.text = text;
        this.type = ADD_TODO;
    }
    return AddTodoAction;
}());

var ToggleTodoAction = /** @class */ (function () {
    function ToggleTodoAction(id) {
        this.id = id;
        this.type = TOGGLE_TODO;
    }
    return ToggleTodoAction;
}());

var EditTodoAction = /** @class */ (function () {
    function EditTodoAction(id, text) {
        this.id = id;
        this.text = text;
        this.type = EDIT_TODO;
    }
    return EditTodoAction;
}());

var RemoveTodoAction = /** @class */ (function () {
    function RemoveTodoAction(id) {
        this.id = id;
        this.type = REMOVE_TODO;
    }
    return RemoveTodoAction;
}());

var ToggleAllTodoAction = /** @class */ (function () {
    function ToggleAllTodoAction(completed) {
        this.completed = completed;
        this.type = TOGGLE_ALL_TODO;
    }
    return ToggleAllTodoAction;
}());

var RemoveAllTodoAction = /** @class */ (function () {
    function RemoveAllTodoAction() {
        this.type = REMOVE_ALL_TODO;
    }
    return RemoveAllTodoAction;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"todoapp\">\n\n  <app-todo-add></app-todo-add>\n\n  <!-- This section should be hidden by default and shown when there are todos -->\n  <section class=\"main\">\n    <input id=\"toggle-all\" class=\"toggle-all\" type=\"checkbox\">\n    <label (click)=\"toggleAll()\" for=\"toggle-all\">Mark all as complete</label>\n    <app-todo-list></app-todo-list>\n  </section>\n  <!-- This footer should hidden by default and shown when there are todos -->\n  <app-todo-footer></app-todo-footer>\n</section>"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.actions */ "./src/app/todo/todo.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = /** @class */ (function () {
    function TodoComponent(store) {
        this.store = store;
        this.completed = false;
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent.prototype.toggleAll = function () {
        this.completed = !this.completed;
        var action = new _todo_actions__WEBPACK_IMPORTED_MODULE_1__["ToggleAllTodoAction"](this.completed);
        this.store.dispatch(action);
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/todo/todo.reducer.ts ***!
  \**************************************/
/*! exports provided: todoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.actions */ "./src/app/todo/todo.actions.ts");
/* harmony import */ var _model_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/todo.model */ "./src/app/todo/model/todo.model.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var INITIAL_STATE = [];
function todoReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    var res;
    switch (action.type) {
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TODO"]:
            var todo = new _model_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"](action.text);
            res = state.concat([todo]);
            break;
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_TODO"]:
            res = state.map(function (todoEdit) {
                var resTodo;
                if (todoEdit.id === action.id) {
                    resTodo = __assign({}, todoEdit, { completed: !todoEdit.completed });
                }
                else {
                    resTodo = todoEdit;
                }
                return resTodo;
            });
            break;
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_ALL_TODO"]:
            res = state.map(function (currentTodo) { return (__assign({}, currentTodo, { completed: action.completed })); });
            break;
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["EDIT_TODO"]:
            res = state.map(function (todoEdit) {
                var resTodo;
                if (todoEdit.id === action.id && todoEdit.text !== '') {
                    resTodo = __assign({}, todoEdit, { text: action.text });
                }
                else {
                    resTodo = todoEdit;
                }
                return resTodo;
            });
            break;
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_TODO"]:
            res = state.filter(function (x) { return x.id !== action.id; });
            break;
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ALL_TODO"]:
            res = state.filter(function (x) { return !x.completed; });
            break;
        default:
            res = state;
    }
    return res;
}


/***/ }),

/***/ "./src/app/todo/todos-list/todos-list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/todo/todos-list/todos-list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"todo-list\">\n  <app-todo-item [todo]=\"todo\" *ngFor=\"let todo of todos | filterTodo : filter\"></app-todo-item>\n</ul>"

/***/ }),

/***/ "./src/app/todo/todos-list/todos-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/todo/todos-list/todos-list.component.ts ***!
  \*********************************************************/
/*! exports provided: TodosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosListComponent", function() { return TodosListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosListComponent = /** @class */ (function () {
    function TodosListComponent(store) {
        this.store = store;
        this.todos = [];
    }
    TodosListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.subscribe(function (state) {
            _this.todos = state.todos;
            _this.filter = state.filter;
        });
    };
    TodosListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todos-list.component.html */ "./src/app/todo/todos-list/todos-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TodosListComponent);
    return TodosListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/francisco/Workspace/Angular/todoapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map