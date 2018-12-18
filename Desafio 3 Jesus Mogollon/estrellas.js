//Habia hecho el desafio al principio con un boton y que mostrara un mensaje del numero de estrellas que iba a ingresar
//pero lo quite porque, no se si era valido para el Desafio, y ahora no me muestra nada las estrellas punteadas, ni las redondas
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
var Elemento = /** @class */ (function () {
    function Elemento(contexto, color) {
        this._contexto = contexto;
        this._color = (color == undefined) ? '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6) : color;
    }
    Object.defineProperty(Elemento.prototype, "color", {
        //Set y Get de Color
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Elemento.prototype, "contexto", {
        //Set y Get de Contexto
        get: function () {
            return this._contexto;
        },
        set: function (contexto) {
            this._contexto = contexto;
        },
        enumerable: true,
        configurable: true
    });
    return Elemento;
}());
var Estrellas = /** @class */ (function (_super) {
    __extends(Estrellas, _super);
    function Estrellas(contexto, color) {
        var _this = _super.call(this, contexto, color) || this;
        _this.X = Math.random() * 1200;
        _this.Y = Math.random() * 600;
        return _this;
    }
    Object.defineProperty(Estrellas.prototype, "X", {
        //Get y Set de X
        get: function () {
            return this._X;
        },
        set: function (X) {
            this._X = X;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Estrellas.prototype, "Y", {
        //Get y Set de Y
        get: function () {
            return this._Y;
        },
        set: function (Y) {
            this._Y = Y;
        },
        enumerable: true,
        configurable: true
    });
    return Estrellas;
}(Elemento));
var EstrellaRedonda = /** @class */ (function (_super) {
    __extends(EstrellaRedonda, _super);
    function EstrellaRedonda(contexto, color) {
        return _super.call(this, contexto, color) || this;
    }
    EstrellaRedonda.prototype.pintar = function (contexto, _color) {
        contexto.beginPath();
        contexto.fillStyle = this.color;
        contexto.moveTo(this.X, this.Y);
        contexto.lineTo(this.X + 11, this.Y + 23);
        contexto.lineTo(this.X + 37, this.Y + 26);
        contexto.lineTo(this.X + 10, this.Y + 44);
        contexto.lineTo(this.X - 3, this.Y + 68);
        contexto.lineTo(this.X - 10, this.Y + 44);
        contexto.lineTo(this.X - 38, this.Y + 26);
        contexto.lineTo(this.X - 11, this.Y + 23);
        contexto.lineTo(this.X, this.Y + 0);
        contexto.arc(this._X, this._Y + 33, 20, 0, Math.PI * 2);
        contexto.stroke();
        contexto.closePath();
        contexto.fill();
    };
    return EstrellaRedonda;
}(Estrellas));
var EstrellaPunteada = /** @class */ (function (_super) {
    __extends(EstrellaPunteada, _super);
    function EstrellaPunteada(contexto, color) {
        return _super.call(this, contexto, color) || this;
    }
    EstrellaPunteada.prototype.pintar = function (contexto, _color) {
        if (lienzo.getContext("2d")) {
            CanvasRenderingContext2D = lienzo.getContext("2d");
            contexto.fillStyle = this.color;
            //Estrella Punteada
            contexto.beginPath();
            contexto.moveTo(this.X, this.Y);
            //Lado Izquierdo Estrella
            contexto.lineTo(this.X + 11, this.Y + 23);
            contexto.lineTo(this.X + 37, this.Y + 26);
            contexto.lineTo(this.X + 18, this.Y + 44);
            contexto.lineTo(this.X + 22, this.Y + 68);
            contexto.lineTo(this.X, this.Y + 57);
            //Lado Derecho Estrella
            contexto.lineTo(this.X - 22, this.Y + 68);
            contexto.lineTo(this.X - 18, this.Y + 44);
            contexto.lineTo(this.X - 36, this.Y + 26);
            contexto.lineTo(this.X - 11, this.Y + 23);
            contexto.lineTo(this.X, this.Y + 0);
            contexto.stroke();
            contexto.closePath();
            contexto.fill();
        }
    };
    return EstrellaPunteada;
}(Estrellas));
var Cielo = /** @class */ (function (_super) {
    __extends(Cielo, _super);
    function Cielo(contexto) {
        return _super.call(this, contexto) || this;
    }
    Cielo.prototype.pintarCielo = function () {
    };
    return Cielo;
}(Elemento));
var lienzo = document.getElementById("lienzo");
var ctx = lienzo.getContext("2d");
new Cielo(ctx).pintarCielo();
