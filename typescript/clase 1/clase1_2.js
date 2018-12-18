function calcular_distancia(x1, y1, x2, y2) {
    if (x2 === void 0) { x2 = 0; }
    if (y2 === void 0) { y2 = 0; }
    var a = Math.pow(x2 - x1, 2);
    var b = Math.pow(y2 - y1, 2);
    return Math.sqrt(a + b);
    //Math.sqrt(Math.pow(x2-x1,2)+ Math.pow(y2-y1,2))
}
var d = calcular_distancia(15, 5);
console.log("la distancia es ", d);
var e = calcular_distancia(15, 5, 20, 2);
console.log("la distancia es", e);
var f = calcular_distancia(20, 2);
console.log("la distancia es", f);
var j = calcular_distancia(20, 10);
console.log("la distancia es", j);
