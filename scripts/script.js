function onload() {
    renderFood();
}

function renderFood() {
    let foodContent = document.getElementById('content');

    for (let indexFood = 0; indexFood < basket_items.length; indexFood++) {
        foodContent.innerHTML += getFoodTemplate(indexFood);
    }
}

function addToBasket(indexFood) {
    basket.push(basket_items[indexFood]);



    renderBasketView();
    // for (let indexBasket = 0; indexBasket < 1; indexBasket++) {
    // }

    // let name = basket_items[indexFood].name;
    // let img = basket_items[indexFood].img;
    // let price = basket_items[indexFood].price;

    // return `
    //         <div class="basket-sorting">
    //             <img class="basket-img" src="${img}" alt="">
    //             <p class="basket-name">${name}</p>
    //             <p class="basket-price">${price} €</p>
    //             <button class="basket-button">+</button>
    //             <span></span>
    //             <button class="basket-button">-</button>
    //         </div>
    //     `;

}

function renderBasketView() {
    let basketWrapper = document.getElementById('basket-items');

    basketWrapper.innerHTML = '';

    for (let i = 0; i < basket.length; i++) {
        basketWrapper.innerHTML += `
        <div class="basket-sorting">
            <img class="basket-img" src="${basket[i].img}" alt="">
                <div class="basket-sorting1">
                    <p class="basket-name">${basket[i].name}</p>
                    <p class="basket-price">${basket[i].price} €</p>
                        <div class="basket-calculate">
                            <button class="basket-button">+</button>
                            <span>XXXX</span>
                            <button class="basket-button">-</button>
                        </div>
                </div>
            </div>
        `
    }
}

function getBasketContent(indexFood) {
    let basketElement = document.getElementById('basket');
    basketElement.innerHTML += addToBasket(indexFood);
}


function getFoodTemplate(indexFood) {
    return `
        <div class="mainsection content-section">
            <div class="food-sorting">
                <div class="food-sorting2">
                    <img class="food-img" src="${basket_items[indexFood].img}" alt="">
                    <p class="price">${basket_items[indexFood].price} €</p>
                    <h3 class="food-name">${basket_items[indexFood].name}</h3>
                </div>
                <div class="food-sorting3">
                    <button type="button" class="food-button" id="basket${indexFood}" onclick="addToBasket(${indexFood})">+</button>
                </div>
            </div>
        </div>
    `
}