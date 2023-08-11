

function Edad() {
    var edad = parseInt(document.getElementById("Edad").value);

    if (edad >= 18) {
        alert("Ya puedes conducir")

    } else {
        alert("Aun no puedes conducir")

    }
}

function Calificacion() {
    var nota = parseInt(document.getElementById("nota").value);

    switch (nota) {
        case 0:
        case 1:
        case 2:
        case 3:
            alert("Muy deficiente");
            break;
        case 4:
        case 5:
            alert("Insuficiente");
            break;
        case 6:
            alert("Suficiente");
            break;
        case 7:
            alert("Bien");
            break;
        case 8:
        case 9:
            alert("Notable");
            break;
        case 10:
            alert("Sobresaliente");
            break;
        default:
            alert("Digite una nota valida");
    }
}

var cadenaA=" ";

function CadenaTexto() {
    var cadena = document.getElementById("cadena").value;
   
    cadenaA += cadena+ "-";
    
    document.getElementById("cadena").value= " ";
}

function  Cancelar() {
document.getElementById("ResultadoCadena").textContent=cadenaA;

}


var SumaT= 0;

function Suma(){
   
    var num = parseInt( document.getElementById("suma").value);
    if (!isNaN(num)) {
        SumaT += num;
        document.getElementById("suma").value = "";
    } else {
        alert("Debe digitar un número válido");
        document.getElementById("suma").value = "";
    }
    
}

function CancelarSuma() {
    document.getElementById("sumaTotal").textContent = "La suma total es: " + SumaT;
}

function CalcularLetra() {
    var cedula = document.getElementById("cedulaInput").value;
    if (!isNaN(cedula) && cedula >= 0 && cedula <= 999999999) {
        var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        var resto = cedula % 23;
        var letra = letras.charAt(resto);
        document.getElementById("resultadoSuma").textContent = "La letra de la cédula " + cedula + " es: " + letra;
    } else {
        alert("Debe digitar un número válido entre 0 y 99999999");
    }
}

function GenerarTabla() {
    var filas = parseInt(document.getElementById("filas").value);
    var columnas = parseInt(document.getElementById("columnas").value);
    
    var numero = filas * columnas;
    var tablaHTML = '<table border="1">';
    
    for (var i = 0; i < filas; i++) {
        tablaHTML += '<tr>';
        for (var j = 0; j < columnas; j++) {
            tablaHTML += '<td>' + numero + '</td>';
            numero--;
        }
        tablaHTML += '</tr>';
    }
    
    tablaHTML += '</table>';
    document.getElementById("tablaContainer").innerHTML = tablaHTML;
}

function calcularPrecioConIVA(precio, iva = 0.13) {
    var precioConIVA = precio * (1 + iva);
    return precioConIVA;
}

function PrecioIVA(precio, iva){

    precio = document.getElementById("textoPrecio").value;
    iva = document.getElementById("textoIVA").value;
    
    var resultado = 0;
    
    
    
    resultado = precio * (iva / 100);
    
    
    document.getElementById("resultadoIVA").innerHTML = "El precio con IVA es: "+resultado;
    }