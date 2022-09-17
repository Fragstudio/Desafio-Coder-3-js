let listaDeConsultas = [];
let productos = [];
let cuotas = [];
let producto = parseInt(prompt("cantidad de producto deseado"));
let cuota = parseInt(prompt("cantidad de cuotas deseadas, 1, 3, 6 o 12"));
let finDeCiclo = prompt("Ingrese ESC para salir").toUpperCase();
//$100 es el valor estatico del producto en el cual baso el simulador
const valorCuota = (a, b) => 100 * a + 100 * a * (b / 100);
const datoValido = (a, b) => (a > 0 && b == 1) || b == 3 || b == 6 || b == 12;
const datoInvalido = (a, b) => datoValido(a, b) == false;
const fin = (a) => a != "ESC";

do {
  if (fin(finDeCiclo)) {
    while (datoValido(producto, cuota) && fin(finDeCiclo)) {
      let valor = 0;
      switch (cuota) {
        case 1:
          valor = valorCuota(producto, cuota);
          listaDeConsultas.push(valor);
          productos.push(producto);
          cuotas.push(cuota);
          alert("El valor de la cuota es: " + valor);
          break;
        case 3:
          valor = valorCuota(producto, cuotas);
          listaDeConsultas.push(valor);
          productos.push(producto);
          cuotas.push(cuota);
          alert("El valor de la cuota es: " + valor);
          break;
        case 6:
          valor = valorCuota(producto, cuota);
          listaDeConsultas.push(valor);
          productos.push(producto);
          cuotas.push(cuota);
          alert("El valor de la cuota es: " + valor);
          break;
        case 12:
          valor = valorCuota(producto, cuota);
          listaDeConsultas.push(valor);
          productos.push(producto);
          cuotas.push(cuota);
          alert("El valor de la cuota es: " + valor);
          break;
      }
      producto = parseInt(prompt("cantidad de producto deseado"));
      cuota = parseInt(prompt("cantidad de cuotas deseadas, 1, 3, 6 o 12"));
      finDeCiclo = prompt("Ingrese ESC para salir").toUpperCase();
    }
  } else {
    break;
  }
  while (datoInvalido(producto, cuota)) {
    alert(
      "los datos ingresados son incorrectos, por favor, vuelva a ingresar los datos"
    );
    producto = parseInt(prompt("cantidad de producto deseado"));
    cuota = parseInt(prompt("cantidad de cuotas deseadas, 1, 3, 6 o 12"));
  }
} while (datoValido(producto, cuota) && fin(finDeCiclo));

let consulta = prompt(
  "Desea revisar el detalle de las consultas realizadas? Ingrese si o no"
).toUpperCase();

do {
  alert("las consultas realizadas fueron las sigiuientes: " + listaDeConsultas);
  let opcion = parseInt(
    prompt("Ingrese la consulta de la cual desea ver el detalle")
  );
  if (opcion <= listaDeConsultas.length && opcion > 0) {
    alert(
      "Detalle: " +
        " " +
        "Cantidad de producto: " +
        productos[opcion - 1] +
        " " +
        "Cantidad de cuotas: " +
        cuotas[opcion - 1] +
        " " +
        "Valor total: " +
        listaDeConsultas[opcion - 1]
    );
  } else {
    alert("la opcion ingresada es incorrecta, vuelva a intentar");
    opcion = parseInt(
      prompt("Ingrese la consulta de la cual desea ver el detalle")
    );
  }
  consulta = prompt(
    "Desea revisar el detalle de las consultas realizadas? Ingrese si o no"
  ).toUpperCase();
} while (consulta == "SI");
