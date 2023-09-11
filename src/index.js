document.getElementById("calcularPropina").onclick=function(){

    let precio = Number(document.getElementById("precio").value);
    let porcentaje = Number(document.getElementById("porcentaje").value);
    let propinaCalculada =precio *porcentaje/100;
    document.getElementById("propinaCalculada").innerHTML=propinaCalculada;
    document.getElementById("totalPagar").innerHTML=precio+propinaCalculada;
}