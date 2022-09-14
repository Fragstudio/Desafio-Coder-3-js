let listaDeConsultas = [];
let finDeCiclo = prompt("Ingrese ESC para salir");
let producto = parseInt(prompt("cantidad de producto deseado"));
let cuotas = parseInt(prompt("cantidad de cuotas deseadas, 1, 3, 6 o 12"));
finDeCiclo = finDeCiclo.toUpperCase();
//$100 es el valor estatico del producto en el cual baso el simulador
const valorCuota = (a, b) => 100 * a + 100 * a * (b / 100);
const datoValido = (a, b) => (a > 0 && b == 1) || b == 3 || b == 6 || b == 12;
const datoInvalido = (a, b) => datoValido(a,b) == false;
const fin = (a) => a != "ESC";

do {
  if (fin(finDeCiclo)) {
    while (datoValido(producto, cuotas) && fin(finDeCiclo)) {
      let valor = 0;
      switch (cuotas) {
        case 1:
          valor = valorCuota(producto, cuotas);
          listaDeConsultas.push(valor);
          alert("El valor de la cuota es: " + valor);
          break;
        case 3:
          valor = valorCuota(producto, cuotas);
          listaDeConsultas.push(valor);
          alert("El valor de la cuota es: " + valor);
          break;
        case 6:
          valor = valorCuota(producto, cuotas);
          listaDeConsultas.push(valor);
          alert("El valor de la cuota es: " + valor);
          break;
        case 12:
          valor = valorCuota(producto, cuotas);
          listaDeConsultas.push(valor);
          alert("El valor de la cuota es: " + valor);
          break;
      }
      producto = parseInt(prompt("cantidad de producto deseado"));
      cuotas = parseInt(prompt("cantidad de cuotas deseadas, 1, 3, 6 o 12"));
      finDeCiclo = prompt("Ingrese ESC para salir");
      finDeCiclo = finDeCiclo.toUpperCase();
    }
  } else {
    break;
  }
  while (datoInvalido(producto, cuotas)) {
    alert(
      "los datos ingresados son incorrectos, por favor, vuelva a ingresar los datos"
    );
    producto = parseInt(prompt("cantidad de producto deseado"));
    cuotas = parseInt(prompt("cantidad de cuotas deseadas, 1, 3, 6 o 12"));
  }
} while (datoValido(producto, cuotas) && fin(finDeCiclo));

let consulta = prompt(
  "Desea ver alguna consulta ya realizada? Ingrese si o no"
);
consulta = consulta.toUpperCase();
do {
  let numDeConsulta = parseInt(prompt("Ingrese el numero de consulta"));
  if (numDeConsulta > 0 && numDeConsulta <= listaDeConsultas.length) {
    numDeConsulta = numDeConsulta - 1;
    alert("La consulta fue " + listaDeConsultas[consulta]);
  } else {
    alert("El numero de caso es incorrecto");
  }
  consulta = prompt("Desea ver alguna consulta ya realizada? Ingrese si o no");
  consulta = consulta.toUpperCase();
} while (consulta == "SI");
