"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Store = (function () {
    function Store() {
        this.listeners = [];
        this.stateHistory = [];
        this.listenerHistory = [];
    }
    Store.prototype.reducer = function (state, action) {
        var newState;
        return newState;
    };
    Store.prototype.ngOnInit = function () { this.state = this.reducer(null, {}); };
    Store.prototype.getState = function () { return this.state; };
    Store.prototype.dispatch = function (action) {
        this.stateHistory.push(this.state);
        this.state = this.reducer(this.state, action.type);
        this.listeners.forEach(function (l) { return l(); });
    };
    Store.prototype.subscribe = function (fn) {
        var _this = this;
        this.listenerHistory.push(this.listeners);
        this.listeners = this.listeners.concat(fn);
        return function () {
            _this.listenerHistory.push(_this.listeners);
            _this.listeners = _this.listeners.filter(function (func) { return func !== fn; });
        };
    };
    return Store;
}());
Store = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Store);
exports.Store = Store;
//# sourceMappingURL=state.directive.js.map