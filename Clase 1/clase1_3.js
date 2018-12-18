function calc_distancia(p1, p2) {
    if (p2 === void 0) { p2 = { x: 0, y: 0 }; }
    return 0;
}
var p1 = { x: 20, y: 2 };
var p2 = { x: 0, y: 0 };
var a = calc_distancia(p1, p2);
var b = calc_distancia(p2);
p2.x = 10;
p2.y = 5;
console.log(p1);
console.log(p2);
