function calc_distancia(x1:number,y1:number,x2:number=0,y2:number=0):number{
    var a:number=Math.pow(x2-x1,2)
    var b:number=Math.pow(y2-y1,2)
    return Math.sqrt(a+b)
}
var d:number=calc_distancia(15,5);
console.log("La Distancia es ",d)
var e:number=calc_distancia(15,5,20,2)
console.log("La Distancia es ",e)
var f:number=calc_distancia(20,2)
console.log("La Distancia es ",f)
var g:number=calc_distancia(0,10)
console.log("La Distancia es ",g)
var h:number=calc_distancia(10,10)
console.log("La Distancia es ",h)
var i:number=calc_distancia(-10,-10)
console.log("La Distancia es ",i)
var j:number=calc_distancia(0,10,0,20)
console.log("La Distancia es ",j)