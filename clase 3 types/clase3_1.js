var Circulo = /** @class */ (function () {
    function Circulo(x, y) {
        this.radio = 100;
        this._x = (x == undefined) ? Math.random() * 200 : x;
        this._y = (y == undefined) ? Math.random() * 200 : y;
        this._color = "yellow";
    }
    Object.defineProperty(Circulo.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Circulo.prototype.getRadio = function () {
        return this.radio;
    };
    Circulo.prototype.setRadio = function (radio) {
        this.radio = radio;
    };
    Circulo.prototype.dibujar = function (contexto) {
        contexto.fillStyle = this._color;
        contexto.beginPath();
        contexto.arc(this._x, this._y, this.radio, 0, Math.PI * 2);
        contexto.fill();
        contexto.stroke();
        contexto.closePath();
    };
    return Circulo;
}());
var c = new Circulo();
c.setRadio(50);
c.color = "blue";
console.log("El Color del circulo es ", c.color);
console.log("El Radio del circulo es ", c.getRadio());
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
c.dibujar(ctx);
new Circulo().dibujar(ctx);
