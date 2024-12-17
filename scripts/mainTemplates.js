function getRenderBasketViewTemplate(basket, i) {
    return  `
    <div class="basket-sorting">
        <img class="basket-img" src="${basket[i].img}" alt="">
        <div class="basket-sorting1">
            <p class="basket-name">${basket[i].name}</p>
            <p class="basket-price">${basket[i].price} €</p>
            <div class="basket-calculate">
                <button class="basket-cursor" onclick="increaseQuantity(${i})">+</button>
                <span id="quantity-${i}">${basket[i].quantity}</span>
                <button class="basket-cursor" onclick="decreaseQuantity(${i})">-</button>
            </div>
        </div>
    </div>
    `
}

function getRenderPriceTemplate(priceTotal, priceDelivery) {
    return `
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
        <div>
            <button class="basket-checkout checkout-div basket-cursor" onclick="checkout()">Zur Kasse</button>
        </div>
        `
}

function getFoodTemplate(indexFood) {
    return `
        <div class="mainsection content-section">
            <div class="food-sorting">
                <div class="food-sorting2">
                    <img class="food-img" src="${basket_items[indexFood].img}" alt="">
                    <div class="food-sorting-new">
                        <div class="food-info">
                            <p class="price">${basket_items[indexFood].price} €</p>
                            <h3 class="food-name">${basket_items[indexFood].name}</h3>
                        </div> 
                    </div>
                    <div class="food-sorting3">
                        <button type="button" class="food-button" id="basket${indexFood}" onclick="addToBasket(${indexFood})">+</button>
                    </div>
                </div>
            </div>
        </div>
    `
}

function getUpdateWarenkorbTemplate(totalItems, totalPrice) {
    return `
    <button class="warenkorb-resp" onclick="openBasket()">
            <h2 class="warenkorb-resp">Warenkorb (${totalItems} Artikel, Gesamt: ${totalPrice.toFixed(2)} €)</h2>
        </button>`;
}