// variables declaradas
let codigoCorrecto = 5555;
let intentos = 0;
let ingresado = null;

// el while verifica las dos condiciones: código incorrecto y que queden intentos
while (ingresado != codigoCorrecto && intentos < 3) {
  ingresado = parseInt(
    prompt(
      "🔐 Ingresá el código de seguridad (tenés " +
        (3 - intentos) +
        " intento/s):",
    ),
  );
  intentos++;

  if (ingresado != codigoCorrecto && intentos < 3) {
    alert("❌ Código incorrecto. Te quedan " + (3 - intentos) + " intento/s.");
  }
}

// si salió porque acertó
if (ingresado == codigoCorrecto) {
  alert("✅ Acceso concedido. Bienvenido.");
} else {
  // si salió porque se acabaron los intentos
  alert("🚫 Demasiados intentos fallidos. Sistema bloqueado.");
}
