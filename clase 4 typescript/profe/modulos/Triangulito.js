"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Triangulo_1 = require("./Triangulo");
var Colores_1 = require("./Colores");
var Figura_1 = require("./Figura");
var Triangulito = /** @class */ (function (_super) {
    __extends(Triangulito, _super);
    function Triangulito(context) {
        return _super.call(this, context) || this;
    }
    Triangulito.prototype.dibujar = function () {
        this.cxt.fillText("Triangulito", this.x, this.y);
        _super.prototype.dibujar.call(this);
        Figura_1.Figura._color = Colores_1.Colores.green;
    };
    return Triangulito;
}(Triangulo_1.Triangulo));
exports.Triangulito = Triangulito;
