abstract class Figura{

    constructor(x:number,y:number,color:string) {
        this._X=x;
        this._Y=y;
        this._Color=color;
    }

    protected ctx:CanvasRenderingContext2D;

    protected _X : number;
    get X() : number {
        return this._X;
    }
    set X(x : number) {
        this._X = x;
    }

    
    protected _Y : number;
    get Y() : number {
        return this._Y;
    }
    set Y(y : number) {
        this._Y = y;
    }
    
    
    protected _Color : string;
    get Color() : string {
        return this._Color;
    }
    set Color(color : string) {
        this._Color = color;
    }

    public abstract dibujar();
}

class Triangulo extends Figura {

    private _Size : number;
    get Size() : number {
        return this._Size;
    }
    set Size(size : number) {
        this._Size = size;
    }
    
    constructor(x:number,y:number,color:string, size:number, ctx:CanvasRenderingContext2D) {
        super(x,y,color);
        this._Size=size;
        this.ctx=ctx;
    }

    public dibujar(){
        this.ctx.fillStyle = this._Color;
        this.ctx.beginPath();
        this.ctx.moveTo(this._X-this._Size/2,this._Y+this._Size/2);
        this.ctx.lineTo(this._X, this._Y-this._Size/2);
        this.ctx.lineTo(this._X+this._Size/2, this._Y+this._Size/2);
        this.ctx.lineTo(this._X-this._Size/2,this._Y+this._Size/2);
        this.ctx.stroke();
        this.ctx.closePath();
        
        this.ctx.fill();
    }
}

class Rectangulo extends Figura {
    
    private _Width : number;
    get Width() : number {
        return this._Width;
    }
    set Width(width : number) {
        this._Width = width;
    }
    
    private _Height : number;
    get Height() : number {
        return this._Height;
    }
    set Height(height : number) {
        this._Height = height;
    }

    constructor(x:number,y:number,color:string, width:number, height:number,ctx:CanvasRenderingContext2D) {
        super(x,y,color);
        this._Width=width;
        this._Height=height;
        this.ctx=ctx;
    }

    public dibujar(){
        this.ctx.fillStyle = this._Color;
        this.ctx.beginPath();
        this.ctx.fillRect(this._X-this._Width/2, this._Y - this._Height/2 ,this._Width,this._Height);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.fill();
    }
}

class Tablero {
    private canvas:HTMLCanvasElement;
    private ctx:CanvasRenderingContext2D;
    private lastColor:string="black";

    constructor(canvas:HTMLCanvasElement){
        this.canvas=canvas;
        this.ctx=this.canvas.getContext('2d');
    }

    public pintarTablero() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.horizontales();
        this.verticales();
        this.pintarFiguras();
    }
    
    private horizontales() {
        let division:number=this.canvas.height/8;
        let y:number=0;
        this.ctx.beginPath();
        for (let i = 0; i <= 8; i++) {
            this.ctx.moveTo(0,y);
            this.ctx.lineTo(this.canvas.width,y);
            this.cuadros(division,y);
            y+=division;
        }
        this.ctx.stroke();
        this.ctx.closePath();
    }
    private verticales() {
        let division:number=this.canvas.width/8;
        let x:number=0;
        this.ctx.beginPath();
        for (let i = 0; i <= 8; i++) {
            this.ctx.moveTo(x,0);
            this.ctx.lineTo(x,this.canvas.height);
            x+=division;
        }
        this.ctx.stroke();
        this.ctx.closePath();
    }
    private cuadros(width:number,y:number) {
        let x:number=0;
        for (let i = 0; i <= 7; i++) {
            this.ctx.fillStyle=this.lastColor;
            this.ctx.fillRect(x,y,width,width);
            x+=width;
            this.lastColor=(this.lastColor=="black")?"white":"black";
        }
        this.lastColor=(this.lastColor=="black")?"white":"black";
    }

    private pintarFiguras(){
        let division:number=this.canvas.height/8;
        let y:number=division/2;
        for (let n = 0; n < 8; n++) {
            let x:number=division/2;
            for (let i = 0; i < 8; i++) {
            let rndColor:string='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
            let figure:Figura=(Math.random()>0.5)?new Triangulo(x,y,rndColor,division/2,this.ctx):new Rectangulo(x,y,rndColor,division/2,division/2,this.ctx);
            x+=division;
            figure.dibujar();
            }
        y+=division;
        }
    }
}

function resizeCanvas() {
    let canvas:HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvitas');
    canvas.width=window.innerHeight-50;//Para no dejar el boton por fuera
    canvas.height=canvas.width;
}

function onInit() {
    window.addEventListener('resize', resizeCanvas, false); //Canvitas responsive
    resizeCanvas();
}

function pintar() {
    let canvas:HTMLCanvasElement=<HTMLCanvasElement> document.getElementById('canvitas');
    let tablero:Tablero=new Tablero(canvas);
    tablero.pintarTablero();
}