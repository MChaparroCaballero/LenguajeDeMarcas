var meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"

];

window.addEventListener("load", () => { cargar(); })

function cargar() {
    var destino = document.getElementById("smeses");
    for (var i = 0; i < meses.length; i++) {
        var h = document.createElement("option");
        h.text = meses[i];
        h.value = i;
        destino.appendChild(h);
    }


    var destino = document.getElementById("saños");

    for (var i = 2000; i <= 2020; i++) {
        var h = document.createElement("option");
        h.text = i;
        h.value = i;
        destino.appendChild(h);
    }
    document.getElementById("smeses").addEventListener("change", () => {
        cambio();
    })

    document.getElementById("saños").addEventListener("change", () => {

        cambio();
    })
}
function cambio() {
    var nmes =parseInt(document.getElementById("smeses").value);
    var naño =parseInt(document.getElementById("saños").value);
    switch(nmes){
        case 0 : case 2: case 4: case 6: case 7: case 9: case 11:
            document.getElementById("ndias").innerHTML=31;
            break;
             case 3: case 5: case 8: case 10:
            document.getElementById("ndias").innerHTML=30;
            case 1://febrero
            poner=esbisiesto (naño) ? 29 : 28;
            break;
    }
    document.getElementById("ndias").innerHTML=poner;
}

function esbisiesto(a){
    if (a % 4 == 0 && a % 100 != 0 || a % 400 == 0) {
        return true;
    } else {
        return false;
    }


}