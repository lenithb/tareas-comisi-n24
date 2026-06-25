let total = 0;
let seguir = "si";

// sigue pidiendo productos mientras el usuario quiera agregar más
while (seguir === "si") {
  let precio = parseFloat(prompt("Ingresá el precio del producto:"));

  if (precio < 0) {
    alert("⚠️ Precio inválido. Ingresá un valor mayor a 0.");
    continue;
  }

  total = total + precio;

  seguir = prompt("¿Querés agregar otro producto? (si/no)").toLowerCase();
}

// el descuento se aplica una sola vez al final
if (total > 5000) {
  let descuento = total * 0.1;
  total = total - descuento;
  alert(
    "🛒 Total: $" + total.toFixed(2) + "\n¡Has obtenido un 10% de descuento!",
  );
} else {
  alert("🛒 Total a pagar: $" + total.toFixed(2));
}
