var hijos:number;
var antiguedad:number;
var salario_base:number;
var n_empleados:number=5;
function calcular(hijos:number=0,antiguedad:number=1,salario_base:number)
{
    var bono_hijo:number=0;
    var bono_antiguedad:number=0;
    if (hijos>=0 && hijos<=3)
    {
        bono_hijo=hijos*1000;
    }
    else
    {
        if (hijos>3)
        {
          bono_hijo=3000 + ((hijos-3)*500);
        }
    }
    if (antiguedad>5)
    {
        bono_antiguedad=salario_base*0.125;
    }
    return (salario_base+bono_antiguedad+bono_hijo);
}

for (let i=1; i<n_empleados; i++ )
{
   salario_base=Math.round(Math.random()*3000);
   antiguedad=Math.round(Math.random()*7);
   hijos=Math.round(Math.random()*8);
   console.log("Empleado Numero: " + i)
   console.log("Salario Base: " + salario_base + " $" )
   console.log("Cantidad de Años de Antiguedad: " + antiguedad + " años")
   console.log("Numeros de Hijos:" + hijos + " hijos")
   console.log("Salario Total: " + calcular(hijos,antiguedad,salario_base) + " $")
   console.log("")
}
var cantidad:number=(parseInt(prompt("Numero de Vendedores")));
if (isNaN(cantidad))
{
    alert("Ingrese Numero no letras")
}
else
{
    for (let i=0;i<cantidad;i++)
    {
       salario_base=parseInt(prompt("Ingrese Sueldo Base"));
       antiguedad=parseInt(prompt("Ingrese los Años de Antiguedad"));
       hijos=parseInt(prompt("Ingrese los Hijos"));
       if(isNaN(salario_base)|| isNaN(antiguedad)|| isNaN(hijos))
       {
           alert("Ingrese los Datos Correspondientes")
       }
       else
       {
           alert("Salario Base: " + salario_base+ "$"+"\n" + "Años de Antiguedad: " + antiguedad+ "\n"+
                 "Hijos: " + hijos + "\n" + "Salario Total: " + calcular(hijos,antiguedad,salario_base)+ " $")
       }
    }
}
   