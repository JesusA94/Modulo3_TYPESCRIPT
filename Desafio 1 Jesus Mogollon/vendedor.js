var hijos;
var antiguedad;
var salario_base;
var n_empleados = 5;
function calcular(hijos, antiguedad, salario_base) {
    if (hijos === void 0) { hijos = 0; }
    if (antiguedad === void 0) { antiguedad = 1; }
    var bono_hijo = 0;
    var bono_antiguedad = 0;
    if (hijos >= 0 && hijos <= 3) {
        bono_hijo = hijos * 1000;
    }
    else {
        if (hijos > 3) {
            bono_hijo = 3000 + ((hijos - 3) * 500);
        }
    }
    if (antiguedad > 5) {
        bono_antiguedad = salario_base * 0.125;
    }
    return (salario_base + bono_antiguedad + bono_hijo);
}
for (var i = 1; i < n_empleados; i++) {
    salario_base = Math.round(Math.random() * 3000);
    antiguedad = Math.round(Math.random() * 7);
    hijos = Math.round(Math.random() * 8);
    console.log("Empleado Numero: " + i);
    console.log("Salario Base: " + salario_base + " $");
    console.log("Cantidad de Años de Antiguedad: " + antiguedad + " años");
    console.log("Numeros de Hijos:" + hijos + " hijos");
    console.log("Salario Total: " + calcular(hijos, antiguedad, salario_base) + " $");
    console.log("");
}
var cantidad = (parseInt(prompt("Numero de Vendedores")));
if (isNaN(cantidad)) {
    alert("Ingrese Numero no letras");
}
else {
    for (var i = 0; i < cantidad; i++) {
        salario_base = parseInt(prompt("Ingrese Sueldo Base"));
        antiguedad = parseInt(prompt("Ingrese los Años de Antiguedad"));
        hijos = parseInt(prompt("Ingrese los Hijos"));
        if (isNaN(salario_base) || isNaN(antiguedad) || isNaN(hijos)) {
            alert("Ingrese los Datos Correspondientes");
        }
        else {
            alert("Salario Base: " + salario_base + "$" + "\n" + "Años de Antiguedad: " + antiguedad + "\n" +
                "Hijos: " + hijos + "\n" + "Salario Total: " + calcular(hijos, antiguedad, salario_base) + " $");
        }
    }
}
