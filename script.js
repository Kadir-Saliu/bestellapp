 let myDishes = [
  {
    name: "Pizza Krabben",
    price: 9.50,
    description: "Mit Krabben ",
  },
  {
    name: "Pizza Margherita",
    price: 6.00,
    description: "mit Mozarella ",
  },
  {
    name: "Pizza Diavolo (scharf)",
    price: 8.50,
    description: "mit Salami, Zwieblen, Peperoni und Knoblauch ",
  },
  {
    name: "Pizzabrötchen",
    price: 13.00,
    description: "mit Pizzabrötchen ",
  },
];

let dessert = [];

let basketCarts = [];

let finalSum = [];  

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
            <p> <strong> Preis: </strong> ${myDishes[indexNote].price.toFixed(2)} €</p>
            <p> <strong> Beschreibung: </strong> ${myDishes[indexNote].description}</p>
        </div>
            <div>
            <button onclick="addToBasket(${indexNote})" >+</button>
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
              <p id="ammountPriceUp${indexBasket}"> ${basketCarts[indexBasket].amount} x</p>
              <h3> ${basketCarts[indexBasket].name}</h3>
              <p id='changePrice${indexBasket}'> ${basketCarts[indexBasket].price.toFixed(2) * basketCarts[indexBasket].amount} €</p>
              <p> ${basketCarts[indexBasket].description}</p>
          </div>
            <button onclick="plusAmmountPrice(${indexBasket})" >+</button>
             
  </div>`;
}



function addToBasket(indexNote) {
  let dishName = myDishes[indexNote]['name']
  const dishBasketIndex = basketCarts.findIndex((dish) => {
      return dish.name === dishName;
  });

  if(dishBasketIndex !== -1) {
    basketCarts[dishBasketIndex]['amount']++
  } else {
    let newDish = {
      name: myDishes[indexNote]['name'],
      description: myDishes[indexNote]['description'],
      price: myDishes[indexNote]['price'],
      amount: 1
    }
    basketCarts.push(newDish)
  }
  renderBasket();
  cost()
}




function plusAmmountPrice(indexBasket) {
  let contetRef = document.getElementById(`ammountPriceUp${indexBasket}`);
  basketCarts[indexBasket].amount = basketCarts[indexBasket].amount + 1;
  contetRef.innerHTML = `  <p>${basketCarts[indexBasket].amount} x </p>`;

  let currentPrice = document.getElementById(`changePrice${indexBasket}`);
  currentPrice.innerHTML = "";
  let sum = basketCarts[indexBasket].amount * basketCarts[indexBasket].price;
  currentPrice.innerHTML = sum + " €";
  cost()
  
}

function minusAmmountPrice(indexBasket) {
  let contetRef = document.getElementById(`ammountPriceUp${indexBasket}`);
  basketCarts[indexBasket].amount = basketCarts[indexBasket].amount - 1;
  contetRef.innerHTML = `  <p>${basketCarts[indexBasket].amount} x </p>`;



  let currentPrice = document.getElementById(`changePrice${indexBasket}`);
  currentPrice.innerHTML = "";
  let sum = basketCarts[indexBasket].amount * basketCarts[indexBasket].price;
  currentPrice.innerHTML = sum + "€";

  if (basketCarts[indexBasket].amount < 1) {
    let basketCart = basketCarts[indexBasket];
    basketCarts.splice(basketCart,1);
    console.log(basketCarts);
    renderBasket();
  }

  
 cost() 
 
}

function cost(){
  let currentCost = document.getElementById('subtotal')
  console.log('basket: ', basketCarts);
  sum = 0;
  for(let index = 0; index < basketCarts.length; index++){
    sum += basketCarts[index].amount * basketCarts[index].price.toFixed(2)
  }
  currentCost.innerHTML = 'Zwischensumme: ' + sum + " €";
  console.log('sum: ', sum);

  let deliveryCosts = document.getElementById('delivery')
  deliveryCosts.innerHTML = '<p> Lieferkosten: 5 €</p>';

  let total = document.getElementById('total-sum');
 
  total.innerHTML = "Gesamtsumme: " + (sum + 5) + " €";

}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}