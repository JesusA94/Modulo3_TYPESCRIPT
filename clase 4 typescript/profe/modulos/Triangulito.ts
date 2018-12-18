import {Triangulo} from "./Triangulo"
import {Colores} from "./Colores"
import {Figura} from "./Figura"

export class Triangulito extends Triangulo{
    dibujar(){
        this.cxt.fillText("Triangulito",this.x,this.y);
        super.dibujar();
        Figura._color = Colores.green
    }
    constructor(context:CanvasRenderingContext2D){
        super(context)
    }
}