function onload() {
    getFromLocalStorage();
    renderFood();
}

function renderFood() {
    let mainfood = document.getElementById('content');
    let sidedished = document.getElementById('sidedish');
    let salad = document.getElementById('salate');
    let drink = document.getElementById('drinks');

    for (let indexFood = 0; indexFood < basket_items.length; indexFood++) {
        mainfood.innerHTML += getFoodTemplate(indexFood);
    }

    for (let indexSideDished = 0; indexSideDished < sidedish.length; indexSideDished++) {
        sidedished.innerHTML += getSideDishedTemplate(indexSideDished);
    }

    for (let indexSalads = 0; indexSalads < salads.length; indexSalads++) {
        salad.innerHTML += getSaladeTemplate(indexSalads);
    }

    for (let indexDrinks = 0; indexDrinks < drinks.length; indexDrinks++) {
        drink.innerHTML += getDrinksTemplate(indexDrinks);
    }

}

function getFoodTemplate(indexFood) {
    return `
        <div class="mainsection content-section">
            <div class="food-sorting">
                <div class="food-sorting2">
                    <img class="food-img" src="${basket_items[indexFood].img}" alt="">
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
    `
}

function getSideDishedTemplate(indexSideDished) {
    return `
        <div class="mainsection content-section">
            <div class="food-sorting">
                <div class="food-sorting2">
                    <img class="food-img" src="${sidedish[indexSideDished].img}" alt="">
                    <div class="food-info">
                        <p class="price">${sidedish[indexSideDished].price} €</p>
                        <h3 class="food-name">${sidedish[indexSideDished].name}</h3>
                    </div>
                    </div>
                <div class="food-sorting3">
                    <button type="button" class="food-button" id="basket${indexSideDished}" onclick="addToBasket(${indexSideDished})">+</button>
                </div>
            </div>
        </div>
    `
}

function getSaladeTemplate(indexSalads) {
    return `
        <div class="mainsection content-section">
            <div class="food-sorting">
                <div class="food-sorting2">
                    <img class="food-img" src="${salads[indexSalads].img}" alt="">
                    <div class="food-info">
                        <p class="price">${salads[indexSalads].price} €</p>
                        <h3 class="food-name">${salads[indexSalads].name}</h3>
                    </div>
                    </div>
                <div class="food-sorting3">
                    <button type="button" class="food-button" id="basket${indexSalads}" onclick="addToBasket(${indexSalads})">+</button>
                </div>
            </div>
        </div>
    `
}

function getDrinksTemplate(indexDrinks) {
    return `
        <div class="mainsection content-section">
            <div class="food-sorting">
                <div class="food-sorting2">
                    <img class="food-img" src="${drinks[indexDrinks].img}" alt="">
                    <div class="food-info">
                        <p class="price">${drinks[indexDrinks].price} €</p>
                        <h3 class="food-name">${drinks[indexDrinks].name}</h3>
                    </div>
                    </div>
                <div class="food-sorting3">
                    <button type="button" class="food-button" id="basket${indexDrinks}" onclick="addToBasket(${indexDrinks})">+</button>
                </div>
            </div>
        </div>
    `
}