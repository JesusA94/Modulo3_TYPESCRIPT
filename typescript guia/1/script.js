function pintarEstrella(x, y, color) {
    if (x === void 0) { x = 100; }
    if (y === void 0) { y = 100; }
    if (color === void 0) { color = "lightblue"; }
    var canvas = document.getElementById('canvitas');
    if (canvas.getContext('2d')) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 11, y + 23);
        ctx.lineTo(x + 37, y + 26);
        ctx.lineTo(x + 18, y + 44);
        ctx.lineTo(x + 22, y + 68);
        ctx.lineTo(x, y + 57);
        ctx.lineTo(x - 22, y + 68);
        ctx.lineTo(x - 18, y + 44);
        ctx.lineTo(x - 36, y + 26);
        ctx.lineTo(x - 11, y + 23);
        ctx.lineTo(x, y + 0);
        ctx.stroke();
        ctx.closePath();
        ctx.fill();
    }
}
function pintarCielo(estrellas) {
    var height = window.innerHeight;
    var width = window.innerWidth;
    for (var i = 0; i < estrellas; i++) {
        var rndColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        var x = Math.floor(Math.random() * (width - 100)); //Para que no se salga del contexto
        var y = Math.floor(Math.random() * (height - 100));
        pintarEstrella(x, y, rndColor);
    }
}
function resizeCanvas() {
    var canvas = document.getElementById('canvitas');
    canvas.height = window.innerHeight - 50; //Para mostrar el boton
    canvas.width = window.innerWidth;
}
function onInit() {
    window.addEventListener('resize', resizeCanvas, false); //Canvitas responsive
    resizeCanvas();
}
