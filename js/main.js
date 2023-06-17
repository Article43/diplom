let products = []; // объявление массива

products[0] = {
    name: "<b>ARIEL</b> капсулы POD's все в одном Color",
    link: "src/ariel.png",
    manufacturer: "Procter & Gamble",
    brand: "ARIEL",
    price: "400₽"
}
products[1] = {
    name: "<b>AOS</b> средство для мытья посуды Crystal",
    link: "src/aos.png",
    manufacturer: "Нефис Косметикс",
    brand: "AOS",
    price: "400₽"
}
products[2] = {
    name: "<b>SORTI</b> Ср-во для мытья посуды Апельсин+мята",
    link: "src/sorti.png",
    manufacturer: "Нефис Косметикс",
    brand: "SORTI",
    price: "400₽"
}

products[3] = {
    name: "<b>BIMAX</b> Порошок стиральный Автомат 100 пятен COMPACT",
    link: "src/bimax.png",
    manufacturer: "Нефис Косметикс",
    brand: "BIMAX",
    price: "400₽"
}

let idCounter = 0;


function deleteContent(id1, id2) { //Функция удаления элемента
    document.getElementById(id2).onclick = function () {
        document.getElementById(id1).remove();
    }

}

let quantity = 0;


function addProduct(name, link, manufacturer, brand, price) { //Функция добавление товара

    let productId = `product${idCounter}`
    let deleteId = `delete${idCounter}`



    let product = document.createElement('div');
    product.setAttribute("class", 'product');
    product.setAttribute('id', productId);

    let deleteButton = document.createElement('p');
    deleteButton.setAttribute("class", 'product__delete');
    deleteButton.innerHTML = 'Удалить';
    deleteButton.setAttribute('id', deleteId);

    let productImg = document.createElement('img');
    productImg.setAttribute("class", 'product__img');
    productImg.setAttribute('src', `${link}`);
    productImg.setAttribute('style', `height:194px;`);

    let productName = document.createElement('p');
    productName.setAttribute("class", 'product__name');
    productName.innerHTML = name;

    let productManufacturer = document.createElement('p');
    productManufacturer.setAttribute("class", 'product__manufacturer');
    productManufacturer.innerHTML = "<small>Производитель:</small> " + manufacturer;

    let productBrand = document.createElement('p');
    productBrand.setAttribute("class", 'product__brand');
    productBrand.innerHTML = "<small>Брэнд:</small> " + brand;

    let productBlock = document.createElement('div');
    productBlock.setAttribute("class", 'product__block');

    let productPrice = document.createElement('p');
    productPrice.setAttribute("class", 'product__price');
    productPrice.innerHTML = price;

    let productBuy = document.createElement('div');
    productBuy.setAttribute('class', 'product__buy');


    let productInCart = document.createElement('p');
    productInCart.setAttribute('class', 'product__inCart');
    productInCart.innerHTML = 'В КОРЗИНУ';

    let productCart = document.createElement('img');
    productCart.setAttribute('class', 'product__cart');
    productCart.setAttribute('src', 'src/ShopCartWhite.png');
    productCart.setAttribute('style', 'object-fit: none;');

    document.querySelector('.catalog').appendChild(product);
    product.appendChild(deleteButton);
    product.appendChild(productImg);
    product.appendChild(productName);
    product.appendChild(productManufacturer);
    product.appendChild(productBrand);
    product.appendChild(productBlock);
    productBlock.appendChild(productPrice);
    productBlock.appendChild(productBuy);
    productBuy.appendChild(productInCart);
    productBuy.appendChild(productCart);

    deleteContent(productId, deleteId);
    productBuy.onclick = function () {
        addInCart(name, link, manufacturer, brand, price);

    }

    idCounter++;
}

function addProdRadio(name, link, manufacturer, brand, price, id) { //Функция создания карточки выбора товара

    let prodId = `${id}`

    let prod = document.createElement('input');
    prod.setAttribute("class", 'radio__radio');
    prod.setAttribute('id', prodId);
    prod.setAttribute('type', 'radio');
    prod.setAttribute('name', 'item');


    let container = document.createElement('div');
    container.setAttribute('class', 'radio')


    let prodImg = document.createElement('img');
    prodImg.setAttribute("class", 'radio__img');
    prodImg.setAttribute('src', `${link}`);
    prodImg.setAttribute('style', `height:194px;`);


    let prodName = document.createElement('p');
    prodName.setAttribute("class", 'radio__name');
    prodName.innerHTML = name;

    let prodManufacturer = document.createElement('p');
    prodManufacturer.setAttribute("class", 'radio__prodManufacturer');
    prodManufacturer.innerHTML = "<small>Производитель:</small> " + manufacturer;

    let prodBrand = document.createElement('p');
    prodBrand.setAttribute("class", 'radio__brand');
    prodBrand.innerHTML = "<small>Брэнд:</small> " + brand;

    let prodPrice = document.createElement('p');
    prodPrice.setAttribute("class", 'radio__price');
    prodPrice.innerHTML = "<small>Цена:</small> " + price;

    document.querySelector('.selectItem').appendChild(container);
    container.appendChild(prod);
    container.appendChild(prodImg);
    container.appendChild(prodName);
    container.appendChild(prodManufacturer);
    container.appendChild(prodBrand);
    container.appendChild(prodPrice);

    idCounter++;
}

let costCounter = 0; // Счетчик итоговой стоимости

function addInCart(name, img, manufacturer, brand, price) { // Функция для добавления товаров в корзину

    quantity++


    costCounter += Number(price.replace('₽', ''));

    let cost = document.querySelector('.nav__price');
    cost.innerHTML = "<small>Корзина</small> <br>" + costCounter + ' ₽';

    document.querySelector('.nav__shop-text').innerHTML = quantity;

    let productId = `cartProduct${quantity}`
    let deleteId = `cartDel${quantity}`


    let deleteButton = document.createElement('p');
    deleteButton.setAttribute("class", 'product__delete');
    deleteButton.innerHTML = 'Удалить';
    deleteButton.setAttribute('id', deleteId);
    deleteButton.setAttribute('style', 'display: block;');

    let cartProduct = document.createElement('div');
    cartProduct.setAttribute('class', 'cartProduct');
    cartProduct.setAttribute('id', productId);

    let newImg = document.createElement('img');
    newImg.setAttribute('class', 'cartProduct__img');
    newImg.setAttribute('src', img);

    let newName = document.createElement('p');
    newName.setAttribute('class', 'cartProduct__name');
    newName.innerHTML = name;

    let newManufacturer = document.createElement('p');
    newManufacturer.setAttribute('class', 'cartProduct__Manufacturer');
    newManufacturer.innerHTML = manufacturer;

    let newBrand = document.createElement('p');
    newBrand.setAttribute('class', 'cartProduct__Brand');
    newBrand.innerHTML = brand;

    let newPrice = document.createElement('p');
    newPrice.setAttribute('class', 'cartProduct__Price');
    newPrice.innerHTML = price;


    document.querySelector('.cartList').insertBefore(cartProduct, document.querySelector('.cartList').lastChild);
    cartProduct.appendChild(deleteButton);
    cartProduct.appendChild(newImg);
    cartProduct.appendChild(newName);
    cartProduct.appendChild(newManufacturer);
    cartProduct.appendChild(newBrand);
    cartProduct.appendChild(newPrice);
    deleteContent(productId, deleteId);

}

window.onload = function () { // Функция заполнения каталога и окна товаров при открытии сайта 
    for (let i = 0; i < products.length; i++) {
        addProduct(products[i].name, products[i].link,
            products[i].manufacturer, products[i].brand, products[i].price);

        addProdRadio(products[i].name, products[i].link,
            products[i].manufacturer, products[i].brand, products[i].price, i);


    }
}




let signInButton = document.querySelector('.SignIn__button');
let signOut = document.querySelector('.header__signOut')
let signIn = document.querySelector('.header__signIn')


signInButton.onclick = function () { // Функция для входа в админку

    let login = document.querySelector('.login');
    let password = document.querySelector('.password');
    if (login.reportValidity() && password.reportValidity()) {
        if (login.value == 'Admin123' && password.value == 'Admin123') {

            document.querySelector('.signIn__img').setAttribute('style', 'display: block; height: 30px; width: 30px; margin-top: 10px;');
            signOut.setAttribute('style', 'display: block;');
            signIn.setAttribute('style', 'display: none;');
            popupBg.classList.remove('active');
            popup.classList.remove('active');

            let deleteProd = document.querySelectorAll('.product__delete');
            for (let elem of deleteProd) {
                elem.setAttribute('style', 'display: block;');
            }

            document.querySelector('.addProduct').setAttribute('style', 'display: flex;');
            document.querySelector('.signIn__text').setAttribute('style', 'display: block;');

            return false;
        }
        else {

            login.setAttribute('style', 'border: 2px solid red;');
            password.setAttribute('style', 'border: 2px solid red;');

        }
    }
    else {

        login.reportValidity();
        password.reportValidity();
        return false;
    }
    return false;


}

signOut.onclick = function () { // Функция для выхода из админки


    document.querySelector('.signIn__img').setAttribute('style', 'display: none;');
    signIn.setAttribute('style', 'display: block;');
    signOut.setAttribute('style', 'display: none;')

    let deleteProd = document.querySelectorAll('.product__delete');
    for (let elem of deleteProd) {
        elem.setAttribute('style', 'display: none;');
    }

    document.querySelector('.addProduct').setAttribute('style', 'display: none;');
    document.querySelector('.signIn__text').setAttribute('style', 'display: none;');
    signOut.setAttribute('style', 'display: none;');

    return false;


}


let addProd = document.querySelector('.addProduct');

addProd.onclick = function () { //функция раскрытия диалогового окна

    document.getElementById('addItem').setAttribute('style', 'display: block;')
}

let addButton = document.createElement('button');
addButton.setAttribute('class', 'selectItem__button');
addButton.setAttribute('name', 'addButton');
addButton.setAttribute('type', 'button');
addButton.innerHTML = 'Добавить';
document.querySelector('.selectItem').appendChild(addButton);

addButton.onclick = function () { // Функция добавления товаров в каталог

    let radio = document.querySelectorAll('input[name="item"]')
    for (let i of radio) {
        if (i.checked) {
            let j = i.getAttribute('id');
            addProduct(products[j].name, products[j].link,
                products[j].manufacturer, products[j].brand, products[j].price);

            let deleteProd = document.querySelectorAll('.product__delete');
            for (let elem of deleteProd) {
                elem.setAttribute('style', 'display: block;');
            }

            let allProduct = querySelectorAll('.product');
            let id = allProduct.getAttribute('id');

            for (let i in allProduct) {

                i.querySelector('.product__buy').onclick = addInCart(products[j].name, products[j].link,
                    products[j].manufacturer, products[j].brand, products[j].price);
            }

            return;
        }

    }
    alert('Выберите товар для добавления')

}

let shopCart = document.querySelector('.nav__shop-cart');
shopCart.onclick = function () { // Функция раскрытия диалогового окна корзины

    document.getElementById('buy1').setAttribute('style', 'display:block;')
}



let orderButton = document.querySelector('.orderButton');
orderButton.onclick = function () { //Функция сокрытьия/раскрытия диалоговых окон

    document.getElementById('buy1').setAttribute('style', 'display:none;');
    document.getElementById('buy2').setAttribute('style', 'display:block;');
}

let congratulation = function () { //Функция создания уведомления об успешном оформление
    let alerm = document.createElement('div');
    alerm.setAttribute('class', 'alermContainer');
    alerm.setAttribute('id','Order')
    alerm.setAttribute('style','display: block;')

    let alermBox = document.createElement('div');
    alermBox.setAttribute('class', 'alermBox');

    let alermText = document.createElement('p');
    alermText.setAttribute('class', 'alermBox__text');
    alermText.innerHTML = 'Поздраляем! Вы успешно совершили заказ!<br> В ближайшее время мы свяжемся с вами для уточнения вопросов по заказу.'

    let deleteButton = document.createElement('img');
    deleteButton.setAttribute('class','alermClose');
    deleteButton.setAttribute('src','src/Close.png');
    deleteButton.setAttribute('onclick','document.getElementById("Order").setAttribute("style","display:none;")');
    deleteButton.setAttribute('style','height: 30px; width: 30px;');
    

    document.body.insertBefore(alerm, document.body.firstChild);
    alerm.appendChild(alermBox);
    alermBox.appendChild(deleteButton);
    alermBox.appendChild(alermText);

}


let closeOrder = document.querySelector('.Order__button'); 
closeOrder.onclick = function () { // функция отправки заказа и вывоба уведомления о удачном оформлении заказа
    if (document.querySelector('.Order__FIO').reportValidity() && document.querySelector('.Order__adress').reportValidity() &&
        document.querySelector('.Order__email').reportValidity() && document.querySelector('.Order__mobileNumber').reportValidity()) {
        document.getElementById('buy2').setAttribute('style', 'display:none;');
        congratulation();
        return false;
    }
    else {
        document.querySelector('.Order__FIO').reportValidity();
        document.querySelector('.Order__adress').reportValidity();
        document.querySelector('.Order__email').reportValidity();
        document.querySelector('.Order__mobileNumber').reportValidity();
        return false;

    }
}



