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
    updateWarenkorb();
}

function increaseQuantity(index) {
    basket[index].quantity += 1;

    renderBasketView();
    saveToLocalStorage();
    updateWarenkorb();
}

function decreaseQuantity(index) {
    if (basket[index].quantity > 1) {
        basket[index].quantity -= 1;
    } else {
        basket.splice(index, 1);
    }

    renderBasketView();
    saveToLocalStorage();
    updateWarenkorb();
}

function renderBasketView() {
    let basketWrapper = document.getElementById('basket-items');

    basketWrapper.innerHTML = '';

    for (let i = 0; i < basket.length; i++) {
        basketWrapper.innerHTML += getRenderBasketViewTemplate(basket, i);
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

function checkout() {
    if (basket.length === 0) {
        alert('Ihr Warenkorb ist leer!');
        return;
    }

    let overlay = document.getElementById('checkout-overlay');
    overlay.classList.remove('hidden');

    setTimeout(() => {
        basket = [];
        renderBasketView();
        saveToLocalStorage();
        updateWarenkorb();
    }, 2000);
}

function closeOverlay() {
    let overlay = document.getElementById('checkout-overlay');
    overlay.classList.add('hidden');
}

function renderPrice() {
    renderPriceTotal(basket)
    let priceElement = document.getElementById('price');

    priceElement.innerHTML = getRenderPriceTemplate(priceTotal, priceDeliveriy);
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
    updateWarenkorb();
}