function onload() {
    getFromLocalStorage();
    renderFood();
}

function renderFood() {
    // let maindishes = document.getElementById('content');
    // let sidedishes = document.getElementById('sidedish');
    // let salad = document.getElementById('salate');
    // let drink = document.getElementById('drinks');

    for (let indexFood = 0; indexFood < basket_items.length; indexFood++) {
        let category = basket_items[indexFood].category;


        if (category === "maindishes") {
            document.getElementById('maindishes').innerHTML += getFoodTemplate(indexFood);
        } else if (category === "sidedishes") {
            document.getElementById('sidedishes').innerHTML += getFoodTemplate(indexFood);
        } else if (category === "salads") {
            document.getElementById('salads').innerHTML += getFoodTemplate(indexFood);
        } else if (category === "drinks") {
            document.getElementById('drinks').innerHTML += getFoodTemplate(indexFood);
        }
    }
}

// let sidedishes = basket_items[indexFood].category.sidedishes;
// let salad = basket_items[indexFood].category.salads;
// let drink = basket_items[indexFood].category.drinks;
// console.log(maindishes);
// console.log(basket_items[indexFood].category.sidedishes);
// console.log(basket_items[indexFood].category);
// console.log(basket_items[indexFood].category);


// maindishes.innerHTML += getFoodTemplate(indexFood);




// for (let indexSideDishes = 0; indexSideDishes < sidedish.length; indexSideDishes++) {
//     sidedishes.innerHTML += getSideDishedTemplate(indexSideDished);
// }

// for (let indexSalads = 0; indexSalads < salads.length; indexSalads++) {
//     salad.innerHTML += getSaladeTemplate(indexSalads);
// }

// for (let indexDrinks = 0; indexDrinks < drinks.length; indexDrinks++) {
//     drink.innerHTML += getDrinksTemplate(indexDrinks);
// }



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


// function getSideDishedTemplate(indexFood) {
//     return `
//         <div class="mainsection content-section">
//             <div class="food-sorting">
//                 <div class="food-sorting2">
//                     <img class="food-img" src="${sidedish[indexFood].img}" alt="">
//                     <div class="food-info">
//                         <p class="price">${sidedish[indexFood].price} €</p>
//                         <h3 class="food-name">${sidedish[indexFood].name}</h3>
//                     </div>
//                     </div>
//                 <div class="food-sorting3">
//                     <button type="button" class="food-button" id="basket${indexFood}" onclick="addToBasket(${indexFood})">+</button>
//                 </div>
//             </div>
//         </div>
//     `
// }

// function getSaladeTemplate(indexSalads) {
//     return `
//         <div class="mainsection content-section">
//             <div class="food-sorting">
//                 <div class="food-sorting2">
//                     <img class="food-img" src="${salads[indexSalads].img}" alt="">
//                     <div class="food-info">
//                         <p class="price">${salads[indexSalads].price} €</p>
//                         <h3 class="food-name">${salads[indexSalads].name}</h3>
//                     </div>
//                     </div>
//                 <div class="food-sorting3">
//                     <button type="button" class="food-button" id="basket${indexSalads}" onclick="addToBasket(${indexSalads})">+</button>
//                 </div>
//             </div>
//         </div>
//     `
// }

// function getDrinksTemplate(indexDrinks) {
//     return `
//         <div class="mainsection content-section">
//             <div class="food-sorting">
//                 <div class="food-sorting2">
//                     <img class="food-img" src="${drinks[indexDrinks].img}" alt="">
//                     <div class="food-info">
//                         <p class="price">${drinks[indexDrinks].price} €</p>
//                         <h3 class="food-name">${drinks[indexDrinks].name}</h3>
//                     </div>
//                     </div>
//                 <div class="food-sorting3">
//                     <button type="button" class="food-button" id="basket${indexDrinks}" onclick="addToBasket(${indexDrinks})">+</button>
//                 </div>
//             </div>
//         </div>
//     `
// }