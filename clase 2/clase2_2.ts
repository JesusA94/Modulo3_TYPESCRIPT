class figura
{
    x:number
    y:number
    color:string
    relleno:boolean

    mostrarInformacion()
    {
        console.log("Posicion:")
        console.log("x: "+this.x,"y:"+this.y)
    }

    moverTriangulo(derecha:number,abajo:number)
    {
        this.x+=derecha;
        this.y+=abajo;
    }

    dibujar(c:CanvasRenderingContext2D)
    {
        if (this.relleno)
        {
            c.fillStyle=this.color;
            c.fillRect(this.x,this.y,50,50)
        }
        else
        {
            c.rect(this.x,this.y,50,50);
            c.stroke();
        }
        
    }

}

var lienzo:any=document.getElementById("lienzo")


let f:figura=new figura();
f.x=10;
f.y=10;
f.relleno=true;
f.color="yellow"

f.mostrarInformacion();
f.dibujar(lienzo.getContext("2d"));
for (let i=1;i<=100;i++)
{
    f.moverTriangulo(20+i*5,30+i*5)
    f.dibujar(lienzo.getContext("2d"))
}

f.moverTriangulo(20,30);





