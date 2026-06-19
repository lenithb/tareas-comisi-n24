// ---------- tabs ----------

function cambiarTab(btn) {
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".panel")
    .forEach((p) => p.classList.remove("active"));

  btn.classList.add("active");
  document.getElementById(btn.dataset.panel).classList.add("active");
}

// ---------- helpers ----------

function mostrar(id, texto, tipo) {
  const el = document.getElementById(id);
  el.textContent = texto;
  el.className = "resultado visible " + tipo;
}

// ---------- ejercicio 1: strings ----------

function buscarPalabra() {
  const frase = document.getElementById("frase").value.trim();
  const palabra = document.getElementById("palabra").value.trim();

  if (!frase || !palabra) {
    mostrar("resultado-string", "⚠️ Completá los dos campos.", "aviso");
    return;
  }

  if (frase.toLowerCase().includes(palabra.toLowerCase())) {
    mostrar(
      "resultado-string",
      `✅ ¡Encontrada! La palabra "${palabra}" está en la frase.`,
      "ok",
    );
  } else {
    mostrar(
      "resultado-string",
      `❌ La palabra "${palabra}" no está en la frase.`,
      "error",
    );
  }
}

// ---------- ejercicio 2: math ----------

let numeroSecreto = generarNumero();

function generarNumero() {
  return Math.floor(Math.random() * 10) + 1;
}

function adivinar() {
  const intento = parseInt(document.getElementById("numero").value);

  if (!intento || intento < 1 || intento > 10) {
    mostrar("resultado-math", "⚠️ Ingresá un número entre 1 y 10.", "aviso");
    return;
  }

  if (intento === numeroSecreto) {
    mostrar(
      "resultado-math",
      `🎉 ¡Adivinaste! El número era el ${numeroSecreto}.`,
      "ok",
    );
  } else {
    mostrar(
      "resultado-math",
      `😢 No era ese. El número secreto era el ${numeroSecreto}.`,
      "error",
    );
  }
}

function nuevoJuego() {
  numeroSecreto = generarNumero();
  document.getElementById("numero").value = "";
  document.getElementById("resultado-math").className = "resultado";
  document.getElementById("resultado-math").textContent = "";
}

// ---------- ejercicio 3: switch ----------

function elegirMenu() {
  const menu = document.getElementById("menu").value;
  let mensaje = "";
  let tipo = "info";

  switch (menu) {
    case "carne":
      mensaje =
        "🍷 Con el menú de carne te ofrecemos un vino tinto. ¡Buen provecho!";
      break;
    case "pescado":
      mensaje =
        "🥂 Con el menú de pescado te ofrecemos un vino blanco. ¡Disfrutá!";
      break;
    case "verdura":
      mensaje = "💧 Con el menú de verdura te ofrecemos agua. ¡Salud!";
      break;
    default:
      mensaje = "⚠️ Elija carne, pescado o verdura.";
      tipo = "aviso";
  }

  mostrar("resultado-switch", mensaje, tipo);
}
