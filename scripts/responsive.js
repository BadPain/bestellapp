function toggleNav() {
    const mobileNav = document.getElementById("mobile-nav");
    mobileNav.classList.toggle("show");
}

function closeBasket() {
    let overlayRef = document.getElementById('basket');
    let mainarea = document.getElementById('mainarea_id');
    overlayRef.style.display = "none";
    mainarea.classList.remove('d_none');
    document.getElementById('basket').innerHTML = "";
}


function openBasket() {
    currentIndex = basket;
    let overlayRef = document.getElementById('basket');
    let mainarea = document.getElementById('content-container');
    mainarea.classList.toggle('d_none');
    document.getElementById('basket').style.removeProperty('display');
    overlayRef.innerHTML +=
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

const isDesktop = window.matchMedia("(min-width: 1200px)");

if (isDesktop.matches) {
    console.log('viewpoint above 1200px');
}
