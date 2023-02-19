const menuEmail = document.querySelector('.navbar__email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('.navbar__shopping-cart');
const shoppingCartDetail = document.querySelector('#shoppingCartDetail');
const productDetail = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailClose = document.querySelector('.product-detail__close');

const toggleElement = (element) => {
    element.classList.toggle('inactive');
}
const hideElement = (element) => {
    element.classList.add('inactive')
}
function openProductDetail() {
    productDetail.classList.remove('inactive');
    hideElement(shoppingCartDetail);
}

let productList = []
productList.push({
    name: 'Candelabro',
    price: 120,
    img: 'https://images.pexels.com/photos/937526/pexels-photo-937526.jpeg?auto=compress&cs=tinysrgb&w=600'
})
productList.push({
    name: 'Sillón',
    price: 120,
    img: 'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=600'
})
productList.push({
    name: 'Cámara vintage',
    price: 94,
    img: 'https://images.pexels.com/photos/1327503/pexels-photo-1327503.jpeg?auto=compress&cs=tinysrgb&w=1600'
})
productList.push({
    name: 'Bicicleta',
    price: 60,
    img: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Globo Terráqueo',
    price: 35,
    img: 'https://images.pexels.com/photos/7634594/pexels-photo-7634594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

function createProductCard () {
    /*
    <div class="product-card">
        <img src="https://images.pexels.com/photos/937526/pexels-photo-937526.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="product-card__img">
        <div class="product-card__info">
            <div>
                <p>$120,00</p>
                <p>Candelabro</p>
            </div>
            <figure>
                <img src="assets/icons/bt_add_to_cart.svg" alt="Añadir al carrito">
            </figure>
        </div>
    </div>
    */
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.classList.add('product-card__img');
    productImg.setAttribute('src', product.img);
    productImg.addEventListener('click', openProductDetail)

    const productCardInfo = document.createElement('div');
    productCardInfo.classList.add('product-card__info');

    const productCardInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    productCardInfoDiv.appendChild(productPrice); 
    productCardInfoDiv.appendChild(productName); 

    const productCardFigure = document.createElement('figure');
    const imgCart = document.createElement('img');
    imgCart.setAttribute('src', 'assets/icons/bt_add_to_cart.svg');
    productCardFigure.appendChild(imgCart); 

    productCardInfo.appendChild(productCardInfoDiv); 
    productCardInfo.appendChild(productCardFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productCardInfo);


    cardsContainer.appendChild(productCard);
}

function renderProducts (arrayProducts) {
    for (product of arrayProducts) {
        createProductCard();
    }    
}




renderProducts(productList);

//Abre o cierra MENÚ DESKTOP desde EMAIL:
menuEmail.addEventListener('click', () => {
    toggleElement(desktopMenu);
    hideElement(shoppingCartDetail);
});
//Abre o cierra MENÚ MOBILE desde BURGER-ICON:
burgerMenu.addEventListener('click', () => {
    toggleElement(mobileMenu);
    hideElement(shoppingCartDetail);
});
//Abre o cierra CARRITO:
cartMenu.addEventListener('click', () => {
    toggleElement(shoppingCartDetail);   
    hideElement(mobileMenu);
    hideElement(desktopMenu); 
    hideElement(productDetail);
})
//Cierra DETALLE DEL PRODUCTO desde la CRUZ:
productDetailClose.addEventListener('click', () => {
    hideElement(productDetail);
})