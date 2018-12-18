function calc_distancia(x1, y1, x2, y2) {
    if (x2 === void 0) { x2 = 0; }
    if (y2 === void 0) { y2 = 0; }
    var a = Math.pow(x2 - x1, 2);
    var b = Math.pow(y2 - y1, 2);
    return Math.sqrt(a + b);
}
var d = calc_distancia(15, 5);
console.log("La Distancia es ", d);
var e = calc_distancia(15, 5, 20, 2);
console.log("La Distancia es ", e);
var f = calc_distancia(20, 2);
console.log("La Distancia es ", f);
var g = calc_distancia(0, 10);
console.log("La Distancia es ", g);
var h = calc_distancia(10, 10);
console.log("La Distancia es ", h);
var i = calc_distancia(-10, -10);
console.log("La Distancia es ", i);
var j = calc_distancia(0, 10, 0, 20);
console.log("La Distancia es ", j);
