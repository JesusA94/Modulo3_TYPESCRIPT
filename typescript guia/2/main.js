var lastColor = "black";
function tablerito() {
    horizontales();
    verticales();
}
function horizontales() {
    var canvas = document.getElementById('canvitas');
    var ctx = canvas.getContext('2d');
    var division = canvas.height / 8;
    var y = 0;
    ctx.beginPath();
    for (var i = 0; i <= 7; i++) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        cuadros(division, y, ctx);
        y += division;
    }
    ctx.stroke();
    ctx.closePath();
}
function verticales() {
    var canvas = document.getElementById('canvitas');
    var ctx = canvas.getContext('2d');
    var division = canvas.width / 8;
    var x = 0;
    ctx.beginPath();
    for (var i = 0; i <= 7; i++) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        x += division;
    }
    ctx.stroke();
    ctx.closePath();
}
function cuadros(width, y, ctx) {
    var x = 0;
    for (var i = 0; i <= 7; i++) {
        ctx.fillStyle = lastColor;
        ctx.fillRect(x, y, width, width);
        x += width;
        lastColor = (lastColor == "black") ? "white" : "black";
        console.log(x);
    }
    lastColor = (lastColor == "black") ? "white" : "black";
}
function resizeCanvas() {
    var canvas = document.getElementById('canvitas');
    canvas.width = window.innerHeight - 50; //Para no dejar el boton por fuera
    canvas.height = canvas.width;
}
function onInit() {
    window.addEventListener('resize', resizeCanvas, false); //Canvitas responsive
    resizeCanvas();
}
