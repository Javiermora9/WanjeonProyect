const productos= ()=>[

  {
    "id": 1,
    "title": "Crema nivea",
    
},

]
const producto= productos();


const productsCard =`

<div class="card" style="">
                <img src="" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${products[0].title}/h5>
                  <p class="card-text"></p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

`

const cardP=document.getElementById("cardP");
cardP.innerHTML = productsCard;
