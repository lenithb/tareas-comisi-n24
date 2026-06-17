// Ejercicio 1: Comparar números enteros

const num1 = parseInt(prompt("[Ejercicio 1] Ingresá el primer número entero:"));
const num2 = parseInt(
  prompt("[Ejercicio 1] Ingresá el segundo número entero:"),
);

if (num1 > num2) {
  console.log(`Ejercicio 1 - El número mayor es: ${num1}`);
} else if (num2 > num1) {
  console.log(`Ejercicio 1 - El número mayor es: ${num2}`);
} else {
  console.log("Ejercicio 1 - Los dos números son iguales.");
}

// Ejercicio 2: Calcular promedio de notas

const nota1 = parseFloat(prompt("[Ejercicio 2] Ingresá la primera nota:"));
const nota2 = parseFloat(prompt("[Ejercicio 2] Ingresá la segunda nota:"));
const nota3 = parseFloat(prompt("[Ejercicio 2] Ingresá la tercera nota:"));

const promedio = (nota1 + nota2 + nota3) / 3;

console.log(`Ejercicio 2 - El promedio es: ${promedio.toFixed(2)}`);

if (promedio >= 6) {
  console.log("Ejercicio 2 - Aprobado.");
} else {
  console.log("Ejercicio 2 - Desaprobado.");
}

// Ejercicio 3: Calculadora básica

const a = parseFloat(prompt("[Ejercicio 3] Ingresá el primer número:"));
const b = parseFloat(prompt("[Ejercicio 3] Ingresá el segundo número:"));
const operacion = prompt(
  "[Ejercicio 3] Ingresá la operación (suma, resta, multiplicacion, division):",
);

if (operacion === "suma") {
  console.log(`Ejercicio 3 - Resultado: ${a + b}`);
} else if (operacion === "resta") {
  console.log(`Ejercicio 3 - Resultado: ${a - b}`);
} else if (operacion === "multiplicacion") {
  console.log(`Ejercicio 3 - Resultado: ${a * b}`);
} else if (operacion === "division") {
  if (b === 0) {
    console.log("Ejercicio 3 - Error: no se puede dividir por cero.");
  } else {
    console.log(`Ejercicio 3 - Resultado: ${a / b}`);
  }
} else {
  console.log(
    "Ejercicio 3 - Operación no válida. Usá: suma, resta, multiplicacion o division.",
  );
}
