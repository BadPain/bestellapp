function toggleNav() {
    const mobileNav = document.getElementById("mobile-nav");
    mobileNav.classList.toggle("show");
}

function openBasket() {
    let mainContentArea = document.getElementById('content-container');
    let mainwarenkorb = document.getElementById('main-warenkorb');
    mainContentArea.classList.toggle('d_none');
    mainwarenkorb.classList.toggle('d_block');
}

function updateWarenkorb() {
    let totalItems = 0;
    let totalPrice = 0;

    for (let i = 0; i < basket.length; i++) {
        totalItems += basket[i].quantity;
        totalPrice += basket[i].price * basket[i].quantity;
    }
    const warenkorbElement = document.getElementById('section-warenkorb-resp');

    warenkorbElement.innerHTML = getUpdateWarenkorbTemplate(totalItems, totalPrice);
}