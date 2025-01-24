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

function renderInformation() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < myDishes.length; indexNote++) {
    contentRef.innerHTML += getInformationTemplate(indexNote);
  }
}

function getInformationTemplate(indexNote) {
  return `<div class="menu" >
        <div>
            <h3> ${myDishes[indexNote].name}</h3>
            <p> <strong> Preis: </strong> ${myDishes[indexNote].price} €</p>
            <p> <strong> Beschreibung: </strong> ${myDishes[indexNote].description}</p>
        </div>
            <div>
            <button onclick="informationToBasket(${indexNote})" >+</button>
            </div>

         </div>`;
}

function renderBasket() {
  let contentRef = document.getElementById("basket-cart-container");
  contentRef.innerHTML = "";
  for (let indexBasket = 0; indexBasket < basketCarts.length; indexBasket++) {
    contentRef.innerHTML += getBasketTemplate(indexBasket);
  }
}

function getBasketTemplate(indexBasket) {
  return `<div class="basket-menu" >
          <div>
              <h3> ${basketCarts[indexBasket].name}</h3>
              <p> ${basketCarts[indexBasket].price} €</p>
              <p> ${basketCarts[indexBasket].description}</p>
          </div>
             
           </div>`;
}

function informationToBasket(indexNote) {
  let basketCart = myDishes[indexNote];
  console.log(myDishes[indexNote]);

  basketCarts.push(basketCart);
  console.log(basketCarts);
  renderBasket();
}



