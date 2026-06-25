// arrancamos desde cero, sin ahorros
let total = 0;
let objetivo = 1000;

// el ciclo sigue pidiendo montos hasta llegar al objetivo
while (total < objetivo) {
  let monto = parseFloat(prompt("¿Cuánto ahorraste hoy? Ingresá un monto:"));

  // si mete un número negativo lo ignoramos y volvemos a preguntar
  if (monto < 0) {
    alert("❌ El monto no puede ser negativo. Ingresá un valor válido.");
    continue;
  }

  total = total + monto;
  alert("💰 Total acumulado: $" + total);
}

// cuando sale del while es porque ya llegó o superó los $1000
alert("🎉 ¡Objetivo alcanzado! Ahorraste $" + total);
