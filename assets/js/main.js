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
const openProductDetail = () => {
    productDetail.classList.remove('inactive');
    hideElement(shoppingCartDetail);
}

let productList = []
productList.push({
    name: 'Candelabro',
    price: 120,
    description: 'Nisi do ullamco sit aute. Ex consectetur Lorem nisi fugiat. Dolore sunt officia ipsum minim fugiat exercitation occaecat eiusmod et veniam occaecat in laborum Lorem. Laboris laborum amet exercitation officia commodo voluptate elit laborum ea dolor.',
    img: 'https://images.pexels.com/photos/937526/pexels-photo-937526.jpeg?auto=compress&cs=tinysrgb&w=600'
})
productList.push({
    name: 'Sillón',
    price: 120,
    description: 'Nisi do ullamco sit aute. Ex consectetur Lorem nisi fugiat. Dolore sunt officia ipsum minim fugiat exercitation occaecat eiusmod et veniam occaecat in laborum Lorem. Laboris laborum amet exercitation officia commodo voluptate elit laborum ea dolor.',
    img: 'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=600'
})
productList.push({
    name: 'Cámara vintage',
    price: 94,
    description: 'Nisi do ullamco sit aute. Ex consectetur Lorem nisi fugiat. Dolore sunt officia ipsum minim fugiat exercitation occaecat eiusmod et veniam occaecat in laborum Lorem. Laboris laborum amet exercitation officia commodo voluptate elit laborum ea dolor.',
    img: 'https://images.pexels.com/photos/1327503/pexels-photo-1327503.jpeg?auto=compress&cs=tinysrgb&w=1600'
})
productList.push({
    name: 'Bicicleta',
    price: 60,
    description: 'Nisi do ullamco sit aute. Ex consectetur Lorem nisi fugiat. Dolore sunt officia ipsum minim fugiat exercitation occaecat eiusmod et veniam occaecat in laborum Lorem. Laboris laborum amet exercitation officia commodo voluptate elit laborum ea dolor.',
    img: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Globo Terráqueo',
    price: 35,
    description: 'Nisi do ullamco sit aute. Ex consectetur Lorem nisi fugiat. Dolore sunt officia ipsum minim fugiat exercitation occaecat eiusmod et veniam occaecat in laborum Lorem. Laboris laborum amet exercitation officia commodo voluptate elit laborum ea dolor.',
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

function createProductDetail (name, img, price, description) {
/*
    <div class="product-detail__close">
        <img src="assets/icons/icon_close.png" alt="Cerrar">
    </div>
    <img src="https://images.pexels.com/photos/937526/pexels-photo-937526.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Candelabro">
    <div class="product-detail__info">
        <p>$120,00</p>
        <p>Candelabro</p>
        <p>Et officia enim sit voluptate aliquip dolor velit adipisicing ad aute et elit duis reprehenderit. Fugiat excepteur mollit cillum aute quis reprehenderit dolor reprehenderit ullamco tempor laboris amet. Veniam labore fugiat fugiat labore sint ullamco pariatur aute cupidatat quis dolor est dolore eiusmod.</p>
        <button class="primary-button add-to-cart">Añadir al carrito</button>
    </div>
*/
    const productDetailClose = document.createElement('div');
    productDetailClose.classList.add('product-detail__close');
    const imgClose = document.createElement('img');
    imgClose.setAttribute('src', 'assets/icons/icon_close.png');
    imgClose.setAttribute('alt', 'Cerrar');
    productDetailClose.appendChild(imgClose);
    productDetailClose.addEventListener('click', () => {
        hideElement(productDetail);
    })

    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', img);
    imgProduct.setAttribute('alt', name);

    const productDetailInfo = document.createElement('div');
    productDetailInfo.classList.add('product-detail__info');
    const priceProduct = document.createElement('p');
    priceProduct.innerText = '$' + price;
    const nameProduct = document.createElement('p');
    nameProduct.innerText = name;
    const descriptionProduct = document.createElement('p');
    descriptionProduct.innerText = description;
    const addToCart = document.createElement('button');
    addToCart.classList.add('primary-button');
    addToCart.classList.add('add-to-cart');
    addToCart.innerText = "Añadir al carrito";
    productDetailInfo.appendChild(priceProduct);
    productDetailInfo.appendChild(nameProduct);
    productDetailInfo.appendChild(descriptionProduct);
    productDetailInfo.appendChild(addToCart);

    productDetailInfo.appendChild(nameProduct);
    productDetailInfo.appendChild(descriptionProduct);
    productDetailInfo.appendChild(addToCart);


    productDetail.appendChild(productDetailClose);
    productDetail.appendChild(imgProduct);
    productDetail.appendChild(productDetailInfo);
}


function renderProducts (arrayProducts) {
    for (product of arrayProducts) {
        createProductCard();
    }    
    createProductDetail(product.name, product.img, product.price, product.description);
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