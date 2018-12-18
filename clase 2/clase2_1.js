var lienzo = document.getElementById("lienzo");
var ancho = lienzo.width;
var alto = lienzo.height;
if (lienzo.getContext) {
    var ctx1;
    ctx1 = lienzo.getContext("2d");
    ctx1.beginPath();
    ctx1.moveTo(20, 20);
    ctx1.lineTo(ancho, alto);
    ctx1.stroke();
    //ctx1.beginPath();
    //ctx1.moveTo(100,0)
    //ctx1.lineTo(50,25);
    //ctx1.stroke();
    //Triangulo
    ctx1.beginPath();
    ctx1.moveTo(ancho, 0);
    ctx1.lineTo(ancho - 70, 0);
    ctx1.lineTo(ancho, 70);
    ctx1.fill();
    ctx1.closePath();
    ctx1.stroke();
    //Circulo
    ctx1.beginPath();
    ctx1.arc(150, 150, 100, 0, Math.PI * 2);
    ctx1.fillStyle = "blue";
    ctx1.fill();
    ctx1.stroke();
    //Cuadrado dentro del circulo
    ctx1.fillStyle = "red";
    ctx1.fillRect(80, 80, 140, 140);
}
