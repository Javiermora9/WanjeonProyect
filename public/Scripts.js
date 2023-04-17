import productos from "./Productos.js"
const products = productos();


const productsPerPage = 8;
let currentPage = 1;

function renderProducts() {
  // se calcula el numero de paginas, con relacion a los productos que uno quiera mostrar
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = products.slice(startIndex, endIndex);

  // plantilla de presentacion de las cartas
  let cardsHtml = '';
  for (let i = 0; i < productsToDisplay.length; i++) {
    const cardHtml = `
      <div class="col">
        <div class="card" >
          
          <img src="productos/${productsToDisplay[i].id}.jpg" class="card-img-top" alt="..." >
          <div class="card-body" >
            <h5 class="card-title">${productsToDisplay[i].title}</h5>
            <p class="card-amount"> ${productsToDisplay[i].amount}</p>
            <h6 class="card-price"> $ ${productsToDisplay[i].price} </h6>
            <a href="#" class="btn btn-primary">Agregar al carrito</a>
          </div>
        </div>
      </div>`;
    cardsHtml += cardHtml;
  }

  const lugarProductos = document.getElementById('lugarProductos');
  lugarProductos.innerHTML = cardsHtml;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const paginationButtons = document.getElementById('pagination-buttons');

  // funcionamiento de la paginacion
  paginationButtons.innerHTML = '';
  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    const button = document.createElement('button');
    button.textContent = pageNumber;
    button.addEventListener('click', () => {
      currentPage = pageNumber;
      renderProducts();
    });
    paginationButtons.appendChild(button);
  }
}

// muestra la funcion de rederproducts, la deja activa siempre
renderProducts();
