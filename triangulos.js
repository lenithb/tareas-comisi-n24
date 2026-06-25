// cada vuelta del for externo es una fila del triángulo
for (let fila = 1; fila <= 5; fila++) {
  let linea = "";

  // el interno agrega un asterisco más por cada fila
  for (let columna = 1; columna <= fila; columna++) {
    linea = linea + "*";
  }

  console.log(linea);
}
