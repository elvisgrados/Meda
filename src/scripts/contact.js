  function enviarPorWhatsApp(e) {
      e.preventDefault();

      // Obtiene los valores del formulario
      const nombre = document.querySelector('[name="nombre"]').value;
      const telefono = document.querySelector('[name="number"]').value;
      const correo = document.querySelector('[name="email"]').value;
      const comentario = document.querySelector('[name="comentario"]').value;

      // Número de WhatsApp al que se enviará el mensaje (con código de país, sin espacios)
      const numeroWhatsApp = "51952315225"; // ← reemplaza con el número real

      // Construcción del mensaje
      const mensaje = `Hola, soy *${nombre}* (%0ATeléfono: ${telefono}, %0ACorreo: ${correo}).%0A%0A*Mensaje:* ${comentario}`;

      // Crear el enlace
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURI(mensaje)}`;

      // Abrir WhatsApp en una nueva ventana
      window.open(url, '_blank');
    }
