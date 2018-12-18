class Circulo
{
   private radio:number=100
   private _color:string
   private _x:number
   private _y:number

   constructor(x?:number,y?:number)
   {
       this._x=(x==undefined)? Math.random()*200:x
       this._y=(y==undefined)? Math.random()*200:y
       this._color="yellow"

   }

   public get color():string
   {
      return this._color;
   }

   public set color(color:string)
   {
       this._color=color;
   }

   public getRadio():number
   {
       return this.radio;
   }
   public setRadio(radio:number)
   {
       this.radio=radio
   }

   public dibujar(contexto:CanvasRenderingContext2D)
   {
     contexto.fillStyle=this._color
     contexto.beginPath();
     contexto.arc(this._x,this._y,this.radio,0,Math.PI*2)
     contexto.fill();
     contexto.stroke();
     contexto.closePath();
   }

}

var c:Circulo=new Circulo();
c.setRadio(50);
c.color="blue"
console.log("El Color del circulo es ", c.color)
console.log("El Radio del circulo es ", c.getRadio())

var canvas:any=document.getElementById("canvas")
var ctx=canvas.getContext("2d")
c.dibujar(ctx)
new Circulo().dibujar(ctx)