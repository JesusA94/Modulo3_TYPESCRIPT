var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Colores;
(function (Colores) {
    //color de fondo si esta Encendio o no la Luz
    Colores["si"] = "yellow";
    Colores["no"] = "black";
    Colores["marco"] = "brown";
})(Colores || (Colores = {}));
var Figura = /** @class */ (function () {
    function Figura(contexto, x, y) {
        this._x = (x == undefined) ? Math.random() * 1 : x;
        this._y = (y == undefined) ? Math.random() * 1 : y;
        this.ctx = contexto;
    }
    return Figura;
}());
var Ventana = /** @class */ (function (_super) {
    __extends(Ventana, _super);
    function Ventana(contexto, x, y, conMarco, luzEncendida) {
        var _this = _super.call(this, contexto, x, y) || this;
        if (_this.luzEncendida == true) {
            _this. = "yellow";
        }
        if (_this.luzEncendida == false) {
            _this.color = "black";
        }
        return _this;
    }
    Object.defineProperty(Ventana.prototype, "luzEncendida", {
        get: function () {
            return this._luzEncendida;
        },
        set: function (luzEncendida) {
            this._luzEncendida = luzEncendida;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ventana.prototype, "Marco", {
        get: function () {
            return this._conMarco;
        },
        set: function (conMarco) {
            this._conMarco = conMarco;
        },
        enumerable: true,
        configurable: true
    });
    Ventana.prototype.dibujar = function () {
        this.ctx.beginPath();
        if (this._luzEncendida == true) {
            Figura._color = Colores.si;
        }
        else {
            Figura._color = Colores.no;
        }
        this.ctx.fillStyle = Figura._color;
        this.ctx.fillRect(this._x, this._y, this, .250, this.tamañoh);
        if (this._conMarco == true) {
            this.ctx.strokeRect(this._x, this._y, this.tamañow, this.tamañoh);
            this.ctx.lineWidth = 3;
            this.ctx.strokeStyle = Colores.marco;
        }
        else {
            this.ctx.strokeRect(this._x, this._y, 0, 0);
        }
        this.ctx.closePath();
    };
    return Ventana;
}(Figura));
var Piso = /** @class */ (function (_super) {
    __extends(Piso, _super);
    function Piso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Piso.prototype.dibujar = function () {
    };
    return Piso;
}(Figura));
var Edificio = /** @class */ (function (_super) {
    __extends(Edificio, _super);
    function Edificio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Edificio.prototype.dibujar = function () {
    };
    return Edificio;
}(Figura));
var canvas = document.getElementById("lienzo");
var ctx = canvas.getContext("2d");
