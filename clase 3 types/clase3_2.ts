class Figura
{
    private _x:number
    private _y:number
    protected _color:string
    protected ctx:CanvasRenderingContext2D

    constructor(color:string,contexto:CanvasRenderingContext2D,x?:number,y?:number)
    {
        this._x=(x==undefined)? Math.random()*300:x
        this._y=(y==undefined)? Math.random()*300:y
        this._color=color
        this.ctx=contexto
    }
    public get x()
    {
        return this._x;
    }
    public set x(x:number)
    {
        this._x=x;
    }
    public get y()
    {
        return this._y
    }
    public set y(y:number)
    {
        this._y=y
    }
}

class Triangulo extends Figura
{
    private h:number
    public dibujar()
    {
       this.ctx.beginPath()
       this.ctx.moveTo(this.x,this.y)
       this.ctx.lineTo(this.x-this.h/2,this.y+this.h)
       this.ctx.lineTo(this.x+this.h/2,this.y+this.h)
       this.ctx.closePath();
       this.ctx.fillStyle=this._color
       this.ctx.fill()
       this.ctx.stroke()
    }
    constructor(color:string,contexto:CanvasRenderingContext2D,h?:number)
    {
        super(color,contexto)
        this.h=(h==undefined)? Math.random()*300:h
    }
}
var canvas:any=document.getElementById("canvas")
var ctx=canvas.getContext("2d")

new Triangulo("red",ctx).dibujar();