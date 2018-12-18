"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Colores;
(function (Colores) {
    Colores["blue"] = "blue";
    Colores["yellow"] = "white";
    Colores["red"] = "red";
    Colores["green"] = "green";
    Colores["orange"] = "orange";
})(Colores = exports.Colores || (exports.Colores = {}));
function getColor(i) {
    switch (i) {
        case 0: return Colores.blue;
        case 1: return Colores.green;
        case 2: return Colores.orange;
        case 3: return Colores.red;
        case 4: return Colores.yellow;
        default:
            return Colores.blue;
    }
}
exports.getColor = getColor;
