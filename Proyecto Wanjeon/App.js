function validarFormulario() {
  // Obtenemos los valores de los campos del formulario
  const tipoDocumento = document.getElementById("doctype").value;
  const numeroDocumento = document.getElementById("docnumber").value;
  const nombres = document.getElementById("name").value;
  const apellidos = document.getElementById("apellidos").value;
  const departamento = document.getElementById("residence").value;

  // Verificamos que los campos obligatorios estén llenos
  if (!tipoDocumento || !numeroDocumento || !nombres || !apellidos || !departamento) {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  }

  // Verificamos que el tipo de documento sea válido
  if (tipoDocumento === "Seleccione") {
    alert("Por favor, seleccione un tipo de documento válido.");
    return false;
  }

  // Verificamos que el número de documento sea válido
  const regexNumeroDocumento = /^[0-9]+$/;
  if (!regexNumeroDocumento.test(numeroDocumento)) {
    alert("Por favor, ingrese un número de documento válido.");
    return false;
  }

  // Si llegamos hasta aquí, es porque todo está correcto
  return true;
}

<form class="Formulario" onsubmit="return validarFormulario()">
  ...
</form>