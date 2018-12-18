class Figura {
    constructor(x, y, color) {
        this._X = x;
        this._Y = y;
        this._Color = color;
    }
    get X() {
        return this._X;
    }
    set X(x) {
        this._X = x;
    }
    get Y() {
        return this._Y;
    }
    set Y(y) {
        this._Y = y;
    }
    get Color() {
        return this._Color;
    }
    set Color(color) {
        this._Color = color;
    }
}
class Triangulo extends Figura {
    get Size() {
        return this._Size;
    }
    set Size(size) {
        this._Size = size;
    }
    constructor(x, y, color, size, ctx) {
        super(x, y, color);
        this._Size = size;
        this.ctx = ctx;
    }
    dibujar() {
        this.ctx.fillStyle = this._Color;
        this.ctx.beginPath();
        this.ctx.moveTo(this._X - this._Size / 2, this._Y + this._Size / 2);
        this.ctx.lineTo(this._X, this._Y - this._Size / 2);
        this.ctx.lineTo(this._X + this._Size / 2, this._Y + this._Size / 2);
        this.ctx.lineTo(this._X - this._Size / 2, this._Y + this._Size / 2);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.fill();
    }
}
class Rectangulo extends Figura {
    get Width() {
        return this._Width;
    }
    set Width(width) {
        this._Width = width;
    }
    get Height() {
        return this._Height;
    }
    set Height(height) {
        this._Height = height;
    }
    constructor(x, y, color, width, height, ctx) {
        super(x, y, color);
        this._Width = width;
        this._Height = height;
        this.ctx = ctx;
    }
    dibujar() {
        this.ctx.fillStyle = this._Color;
        this.ctx.beginPath();
        this.ctx.fillRect(this._X - this._Width / 2, this._Y - this._Height / 2, this._Width, this._Height);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.fill();
    }
}
class Tablero {
    constructor(canvas) {
        this.lastColor = "black";
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }
    pintarTablero() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.horizontales();
        this.verticales();
        this.pintarFiguras();
    }
    horizontales() {
        let division = this.canvas.height / 8;
        let y = 0;
        this.ctx.beginPath();
        for (let i = 0; i <= 8; i++) {
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.cuadros(division, y);
            y += division;
        }
        this.ctx.stroke();
        this.ctx.closePath();
    }
    verticales() {
        let division = this.canvas.width / 8;
        let x = 0;
        this.ctx.beginPath();
        for (let i = 0; i <= 8; i++) {
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            x += division;
        }
        this.ctx.stroke();
        this.ctx.closePath();
    }
    cuadros(width, y) {
        let x = 0;
        for (let i = 0; i <= 7; i++) {
            this.ctx.fillStyle = this.lastColor;
            this.ctx.fillRect(x, y, width, width);
            x += width;
            this.lastColor = (this.lastColor == "black") ? "white" : "black";
        }
        this.lastColor = (this.lastColor == "black") ? "white" : "black";
    }
    pintarFiguras() {
        let division = this.canvas.height / 8;
        let y = division / 2;
        for (let n = 0; n < 8; n++) {
            let x = division / 2;
            for (let i = 0; i < 8; i++) {
                let rndColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
                let figure = (Math.random() > 0.5) ? new Triangulo(x, y, rndColor, division / 2, this.ctx) : new Rectangulo(x, y, rndColor, division / 2, division / 2, this.ctx);
                x += division;
                figure.dibujar();
            }
            y += division;
        }
    }
}
function resizeCanvas() {
    let canvas = document.getElementById('canvitas');
    canvas.width = window.innerHeight - 50; //Para no dejar el boton por fuera
    canvas.height = canvas.width;
}
function onInit() {
    window.addEventListener('resize', resizeCanvas, false); //Canvitas responsive
    resizeCanvas();
}
function pintar() {
    let canvas = document.getElementById('canvitas');
    let tablero = new Tablero(canvas);
    tablero.pintarTablero();
}
