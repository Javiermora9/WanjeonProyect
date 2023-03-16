function validarDocumento() {
    // Obtener el valor del número de documento
    var docnumber = document.getElementById("docnumber").value;
    
    // Obtener el valor del tipo de documento
    var doctype = document.getElementById("doctype").value;
    
    // Validar el número de documento según el tipo de documento seleccionado
    switch (doctype) {
      case "dni":
        // El DNI debe tener 8 dígitos
        if (/^\d{8}$/.test(docnumber)) {
          alert("El número de DNI es válido");
        } else {
          alert("El número de DNI es inválido");
        }
        break;
      case "pasaporte":
        // El pasaporte debe tener entre 6 y 10 caracteres alfanuméricos
        if (/^[a-zA-Z0-9]{6,10}$/.test(docnumber)) {
          alert("El número de pasaporte es válido");
        } else {
          alert("El número de pasaporte es inválido");
        }
        break;
      case "cedula":
        // La cédula debe tener entre 7 y 10 dígitos
        if (/^\d{7,10}$/.test(docnumber)) {
          alert("El número de cédula es válido");
        } else {
          alert("El número de cédula es inválido");
        }
        break;
      default:
        alert("Seleccione un tipo de documento válido");
    }
  }
  