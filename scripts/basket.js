let priceTotal = 0;
let priceDeliveriy = 0;

function addToBasket(indexFood) {
    let product = basket_items[indexFood];
    let existingProduct = basket.find(item => item.name === product.name);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        basket.push({ ...product, quantity: 1 });
    }

    renderBasketView();
    saveToLocalStorage();
}

function increaseQuantity(index) {
    basket[index].quantity += 1;

    renderBasketView();
    saveToLocalStorage();
}

function decreaseQuantity(index) {
    if (basket[index].quantity > 1) {
        basket[index].quantity -= 1;
    } else {
        basket.splice(index, 1);
    }

    renderBasketView();
    saveToLocalStorage();
}

function renderBasketView() {
    let basketWrapper = document.getElementById('basket-items');

    basketWrapper.innerHTML = '';

    for (let i = 0; i < basket.length; i++) {
        basketWrapper.innerHTML +=
            `
        <div class="basket-sorting">
            <img class="basket-img" src="${basket[i].img}" alt="">
            <div class="basket-sorting1">
                <p class="basket-name">${basket[i].name}</p>
                <p class="basket-price">${basket[i].price} €</p>
                <div class="basket-calculate">
                    <button onclick="increaseQuantity(${i})">+</button>
                    <span id="quantity-${i}">${basket[i].quantity}</span>
                    <button onclick="decreaseQuantity(${i})">-</button>
                </div>
            </div>
        </div>
        `
    }
    renderPrice()
}

function renderPriceTotal(basket) {
    priceTotal = 0;

    for (let b = 0; b < basket.length; b++) {
        priceTotal += basket[b].price * basket[b].quantity;

        if (priceTotal > 20) {
            priceDeliveriy = 0;
        } else {
            priceDeliveriy = 5;
        }
    }
}

function renderPrice() {
    renderPriceTotal(basket)
    let priceElement = document.getElementById('price');

    priceElement.innerHTML =
        `
        <div class="price-sorting">
            <div class="price-names">
                <p class="basket-price">Zwischensumme:</p>        
                <p class="basket-price">Lieferkosten:</p>
                <p class="basket-price">Gesamt:</p>
                </div>
            <div class="price-general">
                <p class="basket-price">${priceTotal.toFixed(2)} €</p>
                <p class="basket-price">${priceDeliveriy} €</p>
                <p class="basket-price">${(priceTotal + priceDeliveriy).toFixed(2)}€</p>        
            </div>
        </div>
        `

}

function getBasketContent(indexFood) {
    let basketElement = document.getElementById('basket');
    basketElement.innerHTML += addToBasket(indexFood);
}


function saveToLocalStorage() {
    localStorage.setItem("basket", JSON.stringify(basket));
}

function getFromLocalStorage() {
    let savedBasket = JSON.parse(localStorage.getItem("basket"));
    basket = Array.isArray(savedBasket) ? savedBasket : [];

    renderBasketView();
}