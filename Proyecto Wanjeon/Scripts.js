import productos from "./Productos.js"
const products = productos();


let currentIndex = 0;

function renderProduct() {
    const product = products[currentIndex];

    
    const Cardproducts = `

  <div class=" Contenedero"> 


        <div class="card" ">
                <img src="src-eco-store/${product.id}.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                
                <button type="button" class="btn btn-danger"></button>
                <button type="button" class="btn btn-success"></button>
                <button type="button" class="btn btn-primary"></button>  
                  
                </div>
        </div>


 
    <div class="container ">
      <div class="row">
        <div class="col">
          <div class="ID">
            <label for="formGroupExampleInput" class="form-label">ID</label>
            <input type="text" class="form-control" id="formGroupExampleInput_ID"  placeholder="${product.id}">
          </div>
          
          <div class="mb">
            <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="${product.description}"></textarea>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Title</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="${product.title}">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="mb-2">
            <label for="formGroupExampleInput" class="form-label">Precio</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="${product.price}">
          </div>
        </div>
        <div class="col">
          <div class="mb-2">
            <label for="formGroupExampleInput" class="form-label">Cantidad</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="${product.amount}">
          </div>
        </div>
        <div class="col">
          <div class="mb-6">
            <label for="formGroupExampleInput" class="form-label">Descuento</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="${product.discount}">
          </div>
        </div>
        <div class="col">
          <div class="mb-6">
            <label for="formGroupExampleInput" class="form-label">%</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="${product.discountPer}">
          </div>
        </div>
        <div class="col">
          <div class="mb-6">
            <label for="formGroupExampleInput" class="form-label">Unid.</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="${product.discountUni}">
          </div>
        </div>
      </div>
      
    </div>


</div>  
  `;

    const lugarProductos = document.getElementById('lugarProductos');
    lugarProductos.innerHTML = Cardproducts;


}

function handleNextClick() {

  if (currentIndex >= 26) {
    currentIndex = 0;
  }
    currentIndex = (currentIndex + 1) % products.length;
    renderProduct();
}

function handleNextClickleft() {

  if (currentIndex <= 0) {
    currentIndex = 26;
  }

    currentIndex = (currentIndex - 1) % products.length;
    
    renderProduct();
}


const btnNext = document.getElementById('btnNext');
btnNext.addEventListener('click', handleNextClick);


const btnleft = document.getElementById('btnleft');
btnleft.addEventListener('click', handleNextClickleft);

renderProduct();
