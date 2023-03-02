// Scripts.js

// obtener el botón "Realiza tu cita"
const citaBtn = document.querySelector('.btn');

// agregar un listener al botón
citaBtn.addEventListener('click', () => {
  alert('Haz clic en Realiza tu cita!');
});

// Crear el elemento nav
const nav = document.createElement("nav");
nav.className = "navbar navbar-expand";

// Crear el elemento div con la clase container-fluid
const container = document.createElement("div");
container.className = "container-fluid";

// Crear el elemento div con la clase collapse navbar-collapse
const collapseDiv = document.createElement("div");
collapseDiv.className = "collapse navbar-collapse";
collapseDiv.id = "navbarNav";

// Crear el elemento ul con la clase navbar-nav
const ul = document.createElement("ul");
ul.className = "navbar-nav";

// Crear los elementos li con los enlaces correspondientes
const liInicio = document.createElement("li");
liInicio.className = "nav-item";
const aInicio = document.createElement("a");
aInicio.className = "nav-link";
aInicio.href = "#";
aInicio.textContent = "Inicio";
liInicio.appendChild(aInicio);

const liProveedores = document.createElement("li");
liProveedores.className = "nav-item";
const aProveedores = document.createElement("a");
aProveedores.className = "nav-link";
aProveedores.href = "#";
aProveedores.textContent = "Proveedores";
liProveedores.appendChild(aProveedores);

const liCitas = document.createElement("li");
liCitas.className = "nav-item";
const aCitas = document.createElement("a");
aCitas.className = "nav-link";
aCitas.href = "#";
aCitas.textContent = "Citas";
liCitas.appendChild(aCitas);

const liResultados = document.createElement("li");
liResultados.className = "nav-item";
const aResultados = document.createElement("a");
aResultados.className = "nav-link";
aResultados.href = "#";
aResultados.textContent = "Resultados";
liResultados.appendChild(aResultados);

const liEspecialistas = document.createElement("li");
liEspecialistas.className = "nav-item";
const aEspecialistas = document.createElement("a");
aEspecialistas.className = "nav-link";
aEspecialistas.href = "#";
aEspecialistas.textContent = "Especialistas";
liEspecialistas.appendChild(aEspecialistas);

// Agregar los elementos creados al nav
ul.appendChild(liInicio);
ul.appendChild(liProveedores);
ul.appendChild(liCitas);
ul.appendChild(liResultados);
ul.appendChild(liEspecialistas);
collapseDiv.appendChild(ul);
container.appendChild(collapseDiv);
nav.appendChild(container);

// Agregar el nav al body del documento HTML
document.body.appendChild(nav);




const miDiv = document.getElementById("miDiv");

const divSolicitud = document.createElement("div");
divSolicitud.className = "Solicitud_cita";

const linkUsuario = document.createElement("a");
linkUsuario.href = "";
const imgUsuario = document.createElement("img");
imgUsuario.src = "Imagenes/usuario.png";
imgUsuario.alt = "";
imgUsuario.id = "imagen_usuario";
linkUsuario.appendChild(imgUsuario);

const btnCita = document.createElement("button");
btnCita.className = "btn";
btnCita.type = "button";
btnCita.textContent = "Realiza tu cita!!";

divSolicitud.appendChild(linkUsuario);
divSolicitud.appendChild(btnCita);

miDiv.appendChild(divSolicitud);


