function onload() {
    getFromLocalStorage();
    renderFood();
}

function renderFood() {
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