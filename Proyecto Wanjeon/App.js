function validarDocumento() {
    // Obtener el valor del tipo de documento y del número de documento
    var tipoDocumento = document.getElementById("doctype").value;
    var numeroDocumento = document.getElementById("docnumber").value;
  
    // Verificar que se haya seleccionado un tipo de documento
    if (tipoDocumento === "") {
      alert("Por favor seleccione un tipo de documento.");
      return false;
    }
  
    // Verificar que se haya ingresado un número de documento
    if (numeroDocumento === "") {
      alert("Por favor ingrese un número de documento.");
      return false;
    }
  
    // Verificar que el número de documento tenga la longitud correcta según el tipo de documento
    if (tipoDocumento === "carne" && numeroDocumento.length !== 8) {
      alert("El número de carné diplomático debe tener 8 caracteres.");
      return false;
    } else if (tipoDocumento === "cedulaC" && numeroDocumento.length !== 10) {
      alert("La cédula de ciudadanía debe tener 10 caracteres.");
      return false;
    } else if (tipoDocumento === "cedulaE" && numeroDocumento.length !== 10) {
      alert("La cédula de extranjería debe tener 10 caracteres.");
      return false;
    } else if (tipoDocumento === "ti" && numeroDocumento.length !== 11) {
      alert("La tarjeta de identidad debe tener 11 caracteres.");
      return false;
    } else if (tipoDocumento === "dni" && numeroDocumento.length !== 8) {
      alert("El DNI debe tener 8 caracteres.");
      return false;
    } else if (tipoDocumento === "pasaporte" && numeroDocumento.length < 6) {
      alert("El número de pasaporte debe tener al menos 6 caracteres.");
      return false;
    } else if (tipoDocumento === "registroCivil" && numeroDocumento.length !== 12) {
      alert("El registro civil debe tener 12 caracteres.");
      return false;
    }
  
    // Si se llega hasta aquí, el formulario es válido
    alert("El formulario es válido.");
    return true;
  }