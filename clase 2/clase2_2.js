var figura = /** @class */ (function () {
    function figura() {
    }
    figura.prototype.mostrarInformacion = function () {
        console.log("Posicion:");
        console.log("x: " + this.x, "y:" + this.y);
    };
    figura.prototype.moverTriangulo = function (derecha, abajo) {
        this.x += derecha;
        this.y += abajo;
    };
    figura.prototype.dibujar = function (c) {
        if (this.relleno) {
            c.fillStyle = this.color;
            c.fillRect(this.x, this.y, 50, 50);
        }
        else {
            c.rect(this.x, this.y, 50, 50);
            c.stroke();
        }
    };
    return figura;
}());
var lienzo = document.getElementById("lienzo");
var f = new figura();
f.x = 10;
f.y = 10;
f.relleno = true;
f.color = "yellow";
f.mostrarInformacion();
f.dibujar(lienzo.getContext("2d"));
for (var i = 1; i <= 100; i++) {
    f.moverTriangulo(20 + i * 5, 30 + i * 5);
    f.dibujar(lienzo.getContext("2d"));
}
f.moverTriangulo(20, 30);
