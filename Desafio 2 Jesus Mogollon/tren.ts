class Tren
{
    nombre:string
   
    pintar(ctx1:CanvasRenderingContext2D)
 {

        //camino
        
        ctx1.fillStyle='#515A5A';
        ctx1.fillRect(0,498,1400,15);


    
    //Nombre del Tren
    ctx1.font="50px Georgia"
    ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    ctx1.fillText("Tren de la PESADILLA",50,50)
      
        
    //sostener ruedas
    ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    ctx1.fillRect(30,389,1000,30);


     //figura del primer vagon
     ctx1.beginPath();                  
     ctx1.moveTo(170,170);
     ctx1.lineTo(110,170);
     ctx1.lineTo(75,220);
     ctx1.lineTo(120,290);
     ctx1.lineTo(180,340);
     ctx1.lineTo(150,340);
     ctx1.lineTo(200,220);
     ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
     ctx1.fill();
     ctx1.closePath();
     ctx1.stroke();

     //figura del primer vagon
     //ctx1.beginPath();
     //ctx1.moveTo(50,15);
     //ctx1.lineTo(112,15);
     //ctx1.lineTo(143,69);
     //ctx1.lineTo(112,123);
     //ctx1.lineTo(50,123);
     //ctx1.lineTo(19,69);
    // ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    // ctx1.fill();
     //ctx1.closePath();
    // ctx1.stroke();
     
      
      




     
     //vagon1
    ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    ctx1.fillRect(60,280,150,150);
    
    //circulo 1
    ctx1.beginPath();
    ctx1.arc(130,450,50,0,Math.PI*2);
    ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    ctx1.fill();
    ctx1.stroke();


    //figura del vagon 2

        ctx1.beginPath();                 
        ctx1.moveTo(350,170);
        ctx1.lineTo(350,170);
        ctx1.lineTo(290,210);              
        ctx1.lineTo(350,320);              
        ctx1.lineTo(410,220);
        ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        ctx1.fill();
        ctx1.closePath();
        ctx1.stroke();

     //vagon2
     ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
     ctx1.fillRect(275,280,150,150);

    //circulo 2
    ctx1.beginPath();
    ctx1.arc(350,450,50,0,Math.PI*2);
    ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    ctx1.fill();
    ctx1.stroke();


    //figura del 3er vagon
    ctx1.beginPath();                  
    ctx1.moveTo(520,180);
    ctx1.lineTo(630,180);
    ctx1.lineTo(530,190);
    ctx1.lineTo(600,220);
    ctx1.lineTo(550,250);
    ctx1.lineTo(600,500);
    
   
    ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1,6);
    ctx1.fill();
    ctx1.closePath();
    ctx1.stroke();


    //vagon3
    ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    ctx1.fillRect(495,280,150,150);

     //circulo 3
     ctx1.beginPath();
     ctx1.arc(570,450,50,0,Math.PI*2);
     ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
     ctx1.fill();
     ctx1.stroke();


      //cuadro donde va el chofer
      ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
      ctx1.fillRect(675,135,250,300);


     //techo donde va el chofer
     ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
     ctx1.fillRect(650,100,300,60);



      //Cuadro pequeño
     ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
     ctx1.fillRect(730,200,130,130);

     //circulo 4
     ctx1.beginPath();
     ctx1.arc(800,427,75,0,Math.PI*2);
     ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
     ctx1.fill();
     ctx1.stroke();


     ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
     ctx1.fillRect(1000,188,65,70);
      

     //parte delantera
     ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
     ctx1.fillRect(925,255,170,180);

      //parte del techo
      ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
     ctx1.fillRect(982,125,100,70);
    

      //circulo 6
      ctx1.beginPath();
      ctx1.arc(1050,465,35,0,Math.PI*2);
      ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
      ctx1.fill();
      ctx1.stroke();


     //circulo 5
    ctx1.beginPath();
    ctx1.arc(959,465,35,0,Math.PI*2);
    ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    ctx1.fill();
    ctx1.stroke();

     //Otra parte del Tren triangulo
     ctx1.beginPath();                 
     ctx1.moveTo(1095,325);
     ctx1.lineTo(1095,435);
     ctx1.lineTo(1220,435);
     ctx1.fillStyle='#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
     ctx1.fill();
     ctx1.closePath();
     ctx1.stroke();


    
 }

}

var lienzo:any=document.getElementById("lienzo")
var ctx1:CanvasRenderingContext2D; 
ctx1 = lienzo.getContext("2d");
var t:Tren=new Tren()
t.pintar(ctx1)