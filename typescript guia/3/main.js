var Tablero = /** @class */ (function () {
    function Tablero(fil, col, canv) {
        this.filas = fil;
        this.columnas = col;
        this.canvas = canv;
    }
    Tablero.prototype.pintarCuadricula = function () {
        var ctx = this.canvas.getContext('2d');
        var division = this.canvas.width / this.columnas;
        var x = 0;
        ctx.beginPath();
        for (var i = 0; i <= this.columnas; i++) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, this.canvas.height);
            x += division;
        }
        division = this.canvas.height / this.filas;
        var y = 0;
        for (var i = 0; i <= this.filas; i++) {
            ctx.moveTo(0, y);
            ctx.lineTo(this.canvas.width, y);
            y += division;
        }
        ctx.stroke();
        ctx.closePath();
    };
    Tablero.prototype.pintarDiagonal = function () {
        var ctx = this.canvas.getContext('2d');
        var xdivision = (this.canvas.width / this.filas) * 2;
        var ydivision = (this.canvas.height / this.columnas) * 2;
        var x = 0;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.canvas.width, 0);
        ctx.moveTo(this.canvas.width, 0);
        ctx.lineTo(this.canvas.width, this.canvas.height);
        ctx.moveTo(this.canvas.width, this.canvas.height);
        ctx.lineTo(0, this.canvas.height);
        ctx.moveTo(0, this.canvas.height);
        ctx.lineTo(0, 0);
        for (var i = 0; i <= this.filas; i++) {
            x += xdivision;
            ctx.moveTo(x, 0);
            ctx.lineTo(0, x);
        }
        var y = this.canvas.height;
        var y2 = 0;
        for (var i = 0; i <= this.columnas; i++) {
            y -= ydivision;
            y2 += ydivision;
            ctx.moveTo(0, y);
            ctx.lineTo(y2, this.canvas.height);
        }
        ctx.stroke();
        ctx.closePath();
    };
    Tablero.prototype.clear = function () {
        var ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return Tablero;
}());
function nuevoTablero() {
    var form = document.forms[0];
    var filas = form.filas.value;
    var columnas = form.columnas.value;
    var tipo = form.tipo.value;
    if (filas < 2 || columnas < 2) {
        alert("Minimo de filas o columnas es 2");
        return;
    }
    var canvas = document.getElementById('canvitas');
    var tablero = new Tablero(filas, columnas, canvas);
    tablero.clear();
    if (tipo == "cuadricula")
        tablero.pintarCuadricula();
    else
        tablero.pintarDiagonal();
}
function resizeCanvas() {
    var canvas = document.getElementById('canvitas');
    canvas.width = window.innerHeight - 125; //Para no dejar el boton por fuera
    canvas.height = canvas.width;
}
function onInit() {
    window.addEventListener('resize', resizeCanvas, false); //Canvitas responsive
    resizeCanvas();
}
