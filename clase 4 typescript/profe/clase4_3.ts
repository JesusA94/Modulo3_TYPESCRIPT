import {Figura} from "./modulos/Figura"
import {Circulo} from "./modulos/Circulo"

var canvas:any=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

Figura._color=Colores.yellow
for (let i=1;i<=10;i++){
    let c:Circulo=new Circulo(ctx);
    //c.setColor(Colores.yellow)
    c.dibujar();
}

for (let i=0;i<10;i++){
    Figura._color=getColor(i);
    new Triangulo(ctx).dibujar();
}

new Triangulito(ctx).dibujar();