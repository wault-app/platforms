"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var aliases_1 = __importDefault(require("./aliases"));
var list_1 = __importDefault(require("./list"));
var Platforms = /** @class */ (function () {
    function Platforms() {
    }
    Platforms.get = function (hostname) {
        return list_1.default[hostname] || list_1.default[aliases_1.default[hostname]] || {
            name: hostname,
            categories: [],
        };
    };
    Platforms.getAll = function () {
        return Object.keys(list_1.default).map(function (domain) { return (__assign({ domain: domain }, Platforms.get(domain))); });
    };
    return Platforms;
}());
exports.default = Platforms;
