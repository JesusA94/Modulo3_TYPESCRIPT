function calcular_distancia(x1:number,y1:number,x2=0,y2=0):number
{
    var a:number=Math.pow(x2-x1,2)
    var b:number=Math.pow(y2-y1,2)


   return Math.sqrt(a+b)
   //Math.sqrt(Math.pow(x2-x1,2)+ Math.pow(y2-y1,2))
}

var d:number=calcular_distancia(15,5);
console.log("la distancia es ", d )
var e:number=calcular_distancia(15,5,20,2)
console.log("la distancia es", e )
var f:number=calcular_distancia(20,2)
console.log("la distancia es", f)
