
var opcion = document.getElementById("modo");

opcion.addEventListener("change", calcular, false);
function calcular() {
    var elemento = this.options[this.selectedIndex].value;
    var numero = document.getElementById("numero").value;
    var nn = parseInt(numero)
    var resultado = document.getElementById("resultado");
    switch (elemento) {

        case "1":
            //codigo que pasa de decimal a binario
            resultado.value = nn.toString(2);
            break;
        case "2":
            //codigo para pasar de decimal a octal
            resultado.value = nn.toString(8);
            break;
        case "3":
            //codigo para pasar de decimal a hexadecimal
            resultado.value = nn.toString(16);
            break;
        case "4":
            //codigo para pasar de binario a decimal
            var binDec = parseInt(numero, 2);
            resultado.value = binDec;
            break;
        case "5":
            //codigo para pasar de octal a decimal 
            var octDec = parseInt(numero, 8);
            resultado.value = octDec;
            break;
        case "6":
            //codigo para pasar de hexadecimal a decimal
            var hexDec = parseInt (numero,16);
            resultado.value = hexDec;
            break;

    }
}
