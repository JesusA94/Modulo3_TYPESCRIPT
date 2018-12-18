//Habia hecho el desafio al principio con un boton y que mostrara un mensaje del numero de estrellas que iba a ingresar
//pero lo quite porque, no se si era valido para el Desafio, y ahora no me muestra nada las estrellas punteadas, ni las redondas

class Elemento
{
    private _color:string;
    private _contexto:CanvasRenderingContext2D;
    constructor(contexto:CanvasRenderingContext2D,color?:string)
    {
       this._contexto=contexto
       this._color=(color==undefined)? '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6):color;
    }
    //Set y Get de Color
    public get color()
    {
        return this._color
    }
    public set color(color:string)
    {
        this._color=color
    }

    //Set y Get de Contexto
    public get contexto()
    {
        return this._contexto
    }
    public set contexto(contexto:CanvasRenderingContext2D)
    {
        this._contexto=contexto
    }
}

class Estrellas extends Elemento
{
  protected _X:number
  protected _Y:number

  //Get y Set de X
  public get X()
  {
      return this._X
  }
  public set X(X:number)
  {
      this._X=X
  }
  //Get y Set de Y
  public get Y()
  {
      return this._Y
  }
  public set Y(Y:number)
  {
      this._Y=Y
  }

  constructor(contexto:CanvasRenderingContext2D,color?:string)
  {
        super(contexto,color)
        this.X=Math.random()*1200;
        this.Y=Math.random()*600;
  } 

}


class EstrellaRedonda extends Estrellas
{
    constructor(contexto:CanvasRenderingContext2D,color?:string)
    {
        super(contexto,color)
    }
    pintar(contexto,_color)
    {
        contexto.beginPath();
        contexto.fillStyle=this.color;
        contexto.moveTo(this.X,this.Y);
        contexto.lineTo(this.X+11,this.Y+23);
        contexto.lineTo(this.X+37,this.Y+26);
        contexto.lineTo(this.X+10,this.Y+44);
        contexto.lineTo(this.X-3,this.Y+68);
        contexto.lineTo(this.X-10,this.Y+44);
        contexto.lineTo(this.X-38,this.Y+26);
        contexto.lineTo(this.X-11,this.Y+23);
        contexto.lineTo(this.X,this.Y+0);
        contexto.arc(this._X,this._Y+33,20,0,Math.PI*2)
        contexto.stroke();
        contexto.closePath();
        contexto.fill();
    }
}

class EstrellaPunteada extends Estrellas
{
    constructor(contexto:CanvasRenderingContext2D,color?:string)
    {
        super(contexto,color)
    }
   
    pintar(contexto,_color)
  {
    if (lienzo.getContext("2d"))
    {
        CanvasRenderingContext2D=lienzo.getContext("2d")

        
       contexto.fillStyle = this.color;
        //Estrella Punteada
       contexto.beginPath();
       contexto.moveTo(this.X,this.Y);
        //Lado Izquierdo Estrella
       contexto.lineTo(this.X+11,this.Y+23);
       contexto.lineTo(this.X+37,this.Y+26);
       contexto.lineTo(this.X+18,this.Y+44);
       contexto.lineTo(this.X+22,this.Y+68);
       contexto.lineTo(this.X,this.Y+57);
        //Lado Derecho Estrella
       contexto.lineTo(this.X-22,this.Y+68);
       contexto.lineTo(this.X-18,this.Y+44);
       contexto.lineTo(this.X-36,this.Y+26);
       contexto.lineTo(this.X-11,this.Y+23);
       contexto.lineTo(this.X,this.Y+0);
       contexto.stroke();
       contexto.closePath();
       contexto.fill();
    }

 }
}

class Cielo extends Elemento
{
        constructor(contexto)
        {
        super(contexto);
        

        }
     public pintarCielo()
    {
       
        
    }

} 

var lienzo:any = document.getElementById("lienzo");
var ctx = lienzo.getContext("2d");
new Cielo(ctx).pintarCielo();

