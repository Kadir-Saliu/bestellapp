let myDishes = [
  {
    name: "Pizza Krabben",
    price: 9.5,
    description: "Mit Krabben ",
    ammount: 1,
  },
  {
    name: "Pizza Margherita",
    price: 5.9,
    description: "mit Mozarella ",
    ammount: 1,
  },
  {
    name: "Pizza Diavolo (scharf)",
    price: 8.5,
    description: "mit Salami, Zwieblen, Peperoni und Knoblauch ",
    ammount: 1,
  },
  {
    name: "Pizzabrötchen",
    price: 12.9,
    description: "mit Pizzabrötchen ",
    ammount: 1,
  },
];

let basketCarts = [];



function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < myDishes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
    
  }
}

function getNoteTemplate(indexNote) {
  return `<div class="menu" >
        <div>
            <h3> ${myDishes[indexNote].name}</h3>
            <p> <strong> Preis: </strong> ${myDishes[indexNote].price} €</p>
            <p> <strong> Beschreibung: </strong> ${myDishes[indexNote].description}</p>
        </div>
            <div>
            <button onclick="NoteToBasket(${indexNote})" >+</button>
            </div>

         </div>`;
}


function renderBasket() {
    let contentRef = document.getElementById('basket-cart-container');
    contentRef.innerHTML = "";
    for (let indexBasket = 0; indexBasket < basketCarts.length; indexBasket++) {
      contentRef.innerHTML += getBasketTemplate(indexBasket);
    }
  }
  
  function getBasketTemplate(indexBasket) {
    return `<div class="menu" >
          <div>
              <h3> ${myDishes[indexBasket].name}</h3>
              <p> ${myDishes[indexBasket].price} €</p>
              <p> ${myDishes[indexBasket].description}</p>
          </div>
             
           </div>`;
  }

function NoteToBasket(indexNote) {
    let basketCart = myDishes.splice(indexNote,0)
    console.log(basketCart);
    
    basketCarts.push(basketCart);
    
    renderBasket()
  }