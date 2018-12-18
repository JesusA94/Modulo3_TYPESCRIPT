var lastColor:string="black";
function tablerito() {
    horizontales();
    verticales();
}
function horizontales() {
    let canvas:HTMLCanvasElement=<HTMLCanvasElement>document.getElementById('canvitas');
    let ctx:CanvasRenderingContext2D=canvas.getContext('2d');
    let division:number=canvas.height/8;
    let y:number=0;
    ctx.beginPath();
    for (let i = 0; i <= 7; i++) {
        ctx.moveTo(0,y);
        ctx.lineTo(canvas.width,y);
        cuadros(division,y,ctx);
        y+=division;
    }
    ctx.stroke();
    ctx.closePath();
}
function verticales() {
    let canvas:HTMLCanvasElement=<HTMLCanvasElement>document.getElementById('canvitas');
    let ctx:CanvasRenderingContext2D=canvas.getContext('2d');
    let division:number=canvas.width/8;
    let x:number=0;
    ctx.beginPath();
    for (let i = 0; i <= 7; i++) {
        ctx.moveTo(x,0);
        ctx.lineTo(x,canvas.height);
        x+=division;
    }
    ctx.stroke();
    ctx.closePath();
}
function cuadros(width:number,y:number,ctx:CanvasRenderingContext2D) {
    let x:number=0;
    for (let i = 0; i <= 7; i++) {
        ctx.fillStyle=lastColor;
        ctx.fillRect(x,y,width,width);
        x+=width;
        lastColor=(lastColor=="black")?"white":"black";
        console.log(x);
    }
    lastColor=(lastColor=="black")?"white":"black";
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