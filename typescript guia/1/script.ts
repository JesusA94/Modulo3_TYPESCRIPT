function pintarEstrella(x:number=100,y:number=100,color:string="lightblue") {
    var canvas:HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvitas');
    if (canvas.getContext('2d')) {
        var ctx:CanvasRenderingContext2D = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+11,y+23);
        ctx.lineTo(x+37,y+26);
        ctx.lineTo(x+18,y+44);
        ctx.lineTo(x+22,y+68);
        ctx.lineTo(x,y+57);
        ctx.lineTo(x-22,y+68);
        ctx.lineTo(x-18,y+44);
        ctx.lineTo(x-36,y+26);
        ctx.lineTo(x-11,y+23);
        ctx.lineTo(x,y+0);
        ctx.stroke();
        ctx.closePath();
        ctx.fill();
    }
}
function pintarCielo(estrellas:number) {
    let height:number=window.innerHeight;
    let width:number=window.innerWidth;
    for (let i = 0; i < estrellas; i++) {
        let rndColor:string='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        let x:number=Math.floor(Math.random() * (width-100)); //Para que no se salga del contexto
        let y:number=Math.floor(Math.random() * (height-100));
        pintarEstrella(x,y,rndColor);
    }
}
function resizeCanvas() {
    var canvas:HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvitas');
    canvas.height=window.innerHeight-50; //Para mostrar el boton
    canvas.width=window.innerWidth;
}
function onInit() {
    window.addEventListener('resize', resizeCanvas, false); //Canvitas responsive
    resizeCanvas();
}