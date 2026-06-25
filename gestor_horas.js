let totalHoras = 0;

for (let dia = 1; dia <= 7; dia++) {
  let horas = parseFloat(
    prompt("¿Cuántas horas estudiaste el día " + dia + "?"),
  );

  // si mete un negativo lo ignoramos y ese día no cuenta
  if (horas < 0) {
    alert("⚠️ Valor inválido. Ese día se registra como 0 horas.");
    horas = 0;
  }

  totalHoras = totalHoras + horas;
}

// al terminar los 7 días calculamos el promedio
let promedio = totalHoras / 7;

alert(
  "📚 Total de horas en la semana: " +
    totalHoras +
    "hs\n⏱️ Promedio diario: " +
    promedio.toFixed(2) +
    "hs",
);
