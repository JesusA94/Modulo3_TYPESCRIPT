enum Colores
{
    //color de fondo si esta Encendio o no la Luz
    si="yellow",  no="black",
    marco="brown"

}
abstract class Figura 
{


    public _x:number
    public _y:number
    static _color:string
    protected ctx:CanvasRenderingContext2D

    constructor(contexto:CanvasRenderingContext2D,x?:number,y?:number)
    {
        this._x = (x==undefined) ? Math.random()*1 : x;
        this._y = (y==undefined) ? Math.random()*1: y;
        this.ctx = contexto;
        
    }

   public abstract dibujar()
    
}


class Ventana extends Figura
{
    public tamano:number;
    public _conMarco:boolean;
    public _luzEncendida:boolean;


    constructor(contexto:CanvasRenderingContext2D,x:number,y:number,conMarco?:boolean,luzEncendida?:boolean)
    {
        super(contexto,x,y)

        if (this.luzEncendida == true)
        {
            this.= "yellow";
        }
        if (this.luzEncendida == false)
        {
            this.color = "black";
        }
    }

    public get luzEncendida():boolean
    {
        return this._luzEncendida;
    }
    public set luzEncendida(luzEncendida:boolean)
    {
        this._luzEncendida = luzEncendida;
    }
    public get Marco():boolean
    {
        return this._conMarco;
    }
    public set Marco(conMarco:boolean)
    {
        this._conMarco = conMarco;
    }         
    

    public dibujar()
    {
        this.ctx.beginPath();
        if (this._luzEncendida==true)
        {
            Figura._color=Colores.si
        }
        else
        {
            Figura._color=Colores.no
        }
        this.ctx.fillStyle=Figura._color;
        this.ctx.fillRect(this._x,this._y,this.250,this.tamañoh);
        if (this._conMarco==true)
        {
            this.ctx.strokeRect(this._x,this._y,this.tamañow,this.tamañoh);
            this.ctx.lineWidth=3
            this.ctx.strokeStyle=Colores.marco
        }
        else
        {
          this.ctx.strokeRect(this._x,this._y,0,0);
        }
           this.ctx.closePath()
        
        
    
    }
 
}





class Piso extends Figura
{
    //Atributos para la clase PISO
    public nroVentanas:number;
    public ancho:number;
    static alto:number;


    public dibujar()
    {
        
    }
    

}



class Edificio extends Figura
{
      //Atributos para la clase EDIFICIO
      nroPisos:number;
      anchoE:number;
      nombre:string;
  
    public dibujar()
    {
        
    }
   
}



var canvas:any=document.getElementById("lienzo");
var ctx=canvas.getContext("2d");