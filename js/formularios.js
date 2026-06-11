// JS hecho por Diego Alexander Ramirez Rodriguez
// Muestra avisos según ?estado= de la URL
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const estado = params.get("estado");
    if (!estado) return;

    const motivo = params.get("motivo");

    const mensajes = {
        ok: { texto: "Operación realizada correctamente.", tipo: "exito" },
        "error:vacios": { texto: "Completa todos los campos.", tipo: "error" },
        "error:password": { texto: "Las contraseñas no coinciden.", tipo: "error" },
        "error:existe": { texto: "Ese correo o usuario ya está registrado.", tipo: "error" },
        "error:credenciales": { texto: "Usuario o contraseña incorrectos.", tipo: "error" },
        "error:sesion": { texto: "Inicia sesión para publicar una reseña.", tipo: "error" },
        "error:servidor": { texto: "Hubo un problema en el servidor. Intenta de nuevo.", tipo: "error" },
    };

    const pagina = location.pathname.split("/").pop();
    if (estado === "ok") {
        if (pagina === "crear_cuenta.html")
            mensajes.ok.texto = "Cuenta creada correctamente. Ya puedes iniciar sesión.";
        if (pagina === "contacto.html") mensajes.ok.texto = "Mensaje enviado. Gracias por escribirnos.";
        if (pagina === "resenas.html") mensajes.ok.texto = "Reseña publicada. Gracias por tu opinión.";
    }

    const clave = motivo ? `${estado}:${motivo}` : estado;
    const aviso = mensajes[clave] || mensajes[estado] || { texto: "", tipo: "error" };
    if (!aviso.texto) return;

    mostrarAviso(aviso.texto, aviso.tipo);
});

// Crea el recuadro del aviso
function mostrarAviso(texto, tipo) {
    const form = document.querySelector("form");
    const caja = document.createElement("div");
    caja.className = "aviso-form aviso-" + tipo;
    caja.setAttribute("role", "status");
    caja.textContent = texto;

    caja.style.cssText =
        "max-width:640px;margin:16px auto;padding:12px 16px;border-radius:8px;" + "font-size:15px;text-align:center;";
    if (tipo === "exito") {
        caja.style.background = "#1e3a2a";
        caja.style.color = "#9be7b4";
        caja.style.border = "1px solid #2f6f47";
    } else {
        caja.style.background = "#3a1e22";
        caja.style.color = "#f0a6ad";
        caja.style.border = "1px solid #7a2f38";
    }

    if (form && form.parentNode) {
        form.parentNode.insertBefore(caja, form);
    } else {
        document.body.prepend(caja);
    }
}
