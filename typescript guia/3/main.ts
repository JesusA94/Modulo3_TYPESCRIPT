class Tablero {
    
    constructor(fil:number,col:number,canv:HTMLCanvasElement) {
        this.filas=fil;
        this.columnas=col;
        this.canvas=canv;
    }
    private filas:number;
    private columnas:number;
    private canvas:HTMLCanvasElement

    public pintarCuadricula() {
        let ctx:CanvasRenderingContext2D=this.canvas.getContext('2d');
        let division:number=this.canvas.width/this.columnas;
        let x:number=0;
        ctx.beginPath();

        for (let i = 0; i <= this.columnas; i++) {
            ctx.moveTo(x,0);
            ctx.lineTo(x,this.canvas.height);
            x+=division;
        }

        division=this.canvas.height/this.filas;
        let y:number=0;
        for (let i = 0; i <= this.filas; i++) {
            ctx.moveTo(0,y);
            ctx.lineTo(this.canvas.width,y);
            y+=division;
        }

        ctx.stroke();
        ctx.closePath();
    }

    public pintarDiagonal() {
        let ctx:CanvasRenderingContext2D=this.canvas.getContext('2d');
        let xdivision:number=(this.canvas.width/this.filas)*2;
        let ydivision:number=(this.canvas.height/this.columnas)*2;
        let x:number=0;
        ctx.beginPath();

        ctx.moveTo(0,0);
        ctx.lineTo(this.canvas.width,0);
        ctx.moveTo(this.canvas.width,0);
        ctx.lineTo(this.canvas.width,this.canvas.height);
        ctx.moveTo(this.canvas.width,this.canvas.height);
        ctx.lineTo(0,this.canvas.height);
        ctx.moveTo(0,this.canvas.height);
        ctx.lineTo(0,0);
        

        for (let i = 0; i <= this.filas; i++) {
            x+=xdivision;
            ctx.moveTo(x,0);
            ctx.lineTo(0,x);
        }

        let y:number=this.canvas.height;
        let y2:number=0;
        for (let i = 0; i <= this.columnas; i++) {
            y-=ydivision;
            y2+=ydivision;
            ctx.moveTo(0,y);
            ctx.lineTo(y2,this.canvas.height);
        }

        ctx.stroke();
        ctx.closePath();
    }

    public clear() {
        let ctx:CanvasRenderingContext2D=this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function nuevoTablero() {
    let form:HTMLFormElement=document.forms[0];
    let filas:number=form.filas.value;
    let columnas:number=form.columnas.value;
    let tipo:string=form.tipo.value;
    if (filas<2 || columnas<2) {
        alert("Minimo de filas o columnas es 2");
        return;
    }
    let canvas:HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvitas');
    let tablero:Tablero=new Tablero(filas,columnas,canvas);
    tablero.clear();
    if (tipo=="cuadricula") tablero.pintarCuadricula();
    else tablero.pintarDiagonal();
}

function resizeCanvas() {
    let canvas:HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvitas');
    canvas.width=window.innerHeight-125;//Para no dejar el boton por fuera
    canvas.height=canvas.width;
}
function onInit() {
    window.addEventListener('resize', resizeCanvas, false); //Canvitas responsive
    resizeCanvas();
}