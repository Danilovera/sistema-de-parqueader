let valorPorHora;
let carroTipo;
let horas;
let descuento;
let valorInicial;
let valorTotal;

document.getElementById("montos").style.display="none";
document.getElementById("btnImprimir").style.display="none";

function calcular (){
    Number(document.getElementById("salida").value);
    tipo = (document.getElementById("tipo").value).toLowerCase();
}
