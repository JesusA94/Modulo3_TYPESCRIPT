
enum Colores {
    blue    = "blue",
    yellow  = "white",
    red     = "red",        
    green   = "green",
    orange  = "orange"
}

 abstract class Figura{
    private _x:number
    private _y:number
    static _color:Colores
    protected cxt:CanvasRenderingContext2D

    public abstract dibujar();

    constructor(
            contexto:CanvasRenderingContext2D,
            x?:number,y?:number){
        this._x = (x==undefined) ? Math.random()*300 : x;
        this._y = (y==undefined) ? Math.random()*300 : y;
        this.cxt = contexto
    }
    public get x():number{
        return this._x;
    }
    public set x(x:number){
        this._x = x;
    }
    public get y():number{
        return this._y;
    }
    public set y(y:number){
        this._y = y;
    }
}

class Circulo extends Figura{
    private _radio:number

    constructor(context:CanvasRenderingContext2D,
                radio?:number,x?:number,y?:number){
        super(context,x,y)
        if (radio==undefined)
            this._radio=Math.random()*100;
        else
            this._radio = radio
    }
    public get radio():number{
        return this._radio;
    }
    public set radio(radio:number){
        this._radio = radio;
    }
    public dibujar(){
        this.cxt.beginPath();
        this.cxt.arc(this.x,this.y,this._radio,0,Math.PI*2);
        // color es un atributo estatico
        this.cxt.fillStyle=Figura._color;
        this.cxt.fill();
        this.cxt.closePath();
        this.cxt.stroke();
    }
}
class Triangulo extends Figura{
    private h:number
    public dibujar(){
        this.cxt.beginPath();
        this.cxt.moveTo(this.x,this.y);
        this.cxt.lineTo(this.x-this.h/2,this.y+this.h)
        this.cxt.lineTo(this.x+this.h/2,this.y+this.h)
        this.cxt.closePath();
        this.cxt.fillStyle=Figura._color;
        this.cxt.fill();
        this.cxt.stroke();
    }
    constructor(
            contexto:CanvasRenderingContext2D,
            h?:number){
        super(contexto);
        this.h=(h==undefined)?Math.random()*300:h;
    }
}
class Triangulito extends Triangulo{
    dibujar(){
        this.cxt.fillText("Triangulito",this.x,this.y);
        super.dibujar();
    }
    constructor(context:CanvasRenderingContext2D){
        super(context)
    }
}
function getColor(i:number):Colores{
    switch (i){
        case 0: return Colores.blue;
        case 1: return Colores.green;
        case 2: return Colores.orange;
        case 3: return Colores.red;
        case 4: return Colores.yellow;
        default:
            return Colores.blue;
    }
}

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

//new Triangulito(ctx).dibujar();

