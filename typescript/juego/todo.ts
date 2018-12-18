abstract class Objeto {
	protected x :number;
	protected y :number;
	protected canvas :any;
	protected color :any;
	
	public constructor(x:number,y:number,color:any,canvas:any){
		this.x = x;
		this.y = y;
		this.canvas = canvas;
		this.color = color;
	}
	abstract pintar():void;
}

class Rect extends Objeto {

	private ancho:number;
	private alto:number;
	
	public constructor(ancho:number,alto:number,x:number,y:number,color:any,canvas:any) {
		super(x,y,color,canvas);
		this.ancho = ancho;
		this.alto = alto;
	}
	
	public pintar():void{
		var ctx = this.canvas.getContext("2d");
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.ancho, this.alto);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}
}

class Ball extends Objeto {

	private radio:number;
	
	public constructor(radio:number,x:number,y:number,color:any,canvas:any) {
		super(x,y,color,canvas);
		this.radio = radio
	}
	
	public pintar():void{
		var ctx = this.canvas.getContext("2d");
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radio, 0, Math.PI*2);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}
}

class Padle extends Rect {

	public constructor(ancho:number,alto:number,x:number,y:number,color:any,canvas:any) {
		super(ancho,alto,x,y,color,canvas);

	}
	
}

class Brick extends Rect {

	public constructor(ancho:number,alto:number,x:number,y:number,color:any,canvas:any) {
		super(ancho,alto,x,y,color,canvas);
	}
	
}

function inicializarJuego(canvas)
{
	juego = new Juego(canvas);
	juego.inicializarJuego();
}

var juego:Juego;

class Juego {

	private canvas:any;
	private bloques:Brick[];
	private pelota:Ball;
	private paleta:Padle;
	private score :number;
	
	public inicializarJuego():void {
		this.score = 0;
		this.pelota = new Ball(10,this.canvas.width/2,this.canvas.height-30,"#0095DD",this.canvas);
		this.paleta = new Padle(75,10,(this.canvas.width-75)/2,this.canvas.height-10,"#0095DD",this.canvas);
		
		var brickWidth = 75;
		var brickHeight = 20;
		var brickPadding = 10;
		var brickOffsetTop = 30;
		var brickOffsetLeft = 30;
		
		let i=0;
		this.bloques=[];
		for (let col=0;col<5;col++)
			for (let fila=0;fila<3;fila++) {
				var brickX = (col*(brickWidth+brickPadding))+brickOffsetLeft;
				var brickY = (fila*(brickHeight+brickPadding))+brickOffsetTop;
				
				this.bloques.push(new Brick(brickWidth,brickHeight,brickX,brickY,"#0095DD",this.canvas));
				i++;
			}
	}
	
	public constructor(canvas:any) {
		this.canvas = canvas;
		this.inicializarJuego();
		this.pintarEscenario();
	}
	
	public pintarEscenario():void {
		this.pelota.pintar();
		this.paleta.pintar();
		this.pintarScore();
		for (let b of this.bloques)
			b.pintar();

	}
	
	public pintarScore():void {
		var ctx = this.canvas.getContext("2d");
		ctx.font = "16px Arial";
		ctx.fillStyle = "#0095DD";
		ctx.fillText("Score: "+this.score, 8, 20);
	}
}