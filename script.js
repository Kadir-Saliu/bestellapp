let myDishes = [
  {
    name: "Pizza Krabben",
    price: 9.50,
    description: "Mit Krabben ",
    ammount: 1,
  },
  {
    name: "Pizza Margherita",
    price: 5.90,
    description: "mit Mozarella ",
    ammount: 1,
  },
  {
    name: "Pizza Diavolo (scharf)",
    price: 8.50,
    description: "mit Salami, Zwieblen, Peperoni und Knoblauch ",
    ammount: 1,
  },
  {
    name: "Pizzabrötchen",
    price: 12.90,
    description: "mit Pizzabrötchen ",
    ammount: 1,
  },
];

let basketCarts = [];

let deliveryPrice = [];  

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
  return `
          
  <div  class="basket-menu" >
          <button onclick="minusAmmountPrice(${indexBasket})">-</button>
          <div>
              <p id="ammountPriceUp${indexBasket}"> ${basketCarts[indexBasket].ammount} x</p>
              <h3> ${basketCarts[indexBasket].name}</h3>
              <p id='changePrice${indexBasket}'> ${basketCarts[indexBasket].price} €</p>
              <p> ${basketCarts[indexBasket].description}</p>
          </div>
            <button onclick="plusAmmountPrice(${indexBasket})" >+</button>
             
  </div>`;
}

function informationToBasket(indexNote) {
  let basketCart = myDishes[indexNote];
  basketCarts.push(basketCart);
  renderBasket();
 
}



function plusAmmountPrice(indexBasket) {
  let contetRef = document.getElementById(`ammountPriceUp${indexBasket}`);
  basketCarts[indexBasket].ammount = basketCarts[indexBasket].ammount + 1;
  contetRef.innerHTML = `  <p>${basketCarts[indexBasket].ammount} x </p>`;

  let currentPrice = document.getElementById(`changePrice${indexBasket}`);
  currentPrice.innerHTML = "";
  let sum = basketCarts[indexBasket].ammount * basketCarts[indexBasket].price;
  sum.toFixed(2)
  currentPrice.innerHTML = sum + " €";
  
}

function minusAmmountPrice(indexBasket) {
  let contetRef = document.getElementById(`ammountPriceUp${indexBasket}`);
  basketCarts[indexBasket].ammount = basketCarts[indexBasket].ammount - 1;
  contetRef.innerHTML = `  <p>${basketCarts[indexBasket].ammount} x </p>`;

  let currentPrice = document.getElementById(`changePrice${indexBasket}`);
  currentPrice.innerHTML = "";
  let sum = basketCarts[indexBasket].ammount * basketCarts[indexBasket].price;
  currentPrice.innerHTML += sum + "€";

  if (basketCarts[indexBasket].ammount < 1) {
    let basketCart = basketCarts[indexBasket];
    basketCarts.splice(basketCart, 1);
    console.log(basketCarts[indexBasket]);
    renderBasket();
  }
}
