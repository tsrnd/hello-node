var listProductCart = [];
var $numberOfCart = document.getElementById('js-number-of-cart');
var $cartContainer = document.getElementById('js-cart-container');
var $productsContainer = document.getElementById('js-products-container');

var listProduct = [
  { id: 1, image: 'img/product.jpg', name: 'Name Product 1', price: 100 },
  { id: 2, image: 'img/product.jpg', name: 'Name Product 2', price: 200 },
  { id: 3, image: 'img/product.jpg', name: 'Name Product 3', price: 300 },
  { id: 4, image: 'img/product.jpg', name: 'Name Product 4', price: 400 },
  { id: 5, image: 'img/product.jpg', name: 'Name Product 5', price: 500 },
  { id: 6, image: 'img/product.jpg', name: 'Name Product 6', price: 600 }
];

function showListProduct() {
  var viewProduct = '';
  var lengthListProduct = listProduct.length;
  for (var i = 0; i < lengthListProduct; i++) {
    viewProduct += '<div class="row">'
    viewProduct += '<div class="four columns">'
    viewProduct += '<div class="card">'
    viewProduct += '<img src="' + listProduct[i].image + '" class="course-image u-full-width">'
    viewProduct += '<div class="info-card" id="cart">'
    viewProduct += '<h4>' + listProduct[i].name + '</h4>'
    viewProduct += '<img src="img/stars.png">'
    viewProduct += '<span class="u-pull-right ">' + listProduct[i].price + '</span></p>'
    viewProduct += '<button class="js-btn-buy-product u-full-width button-primary" data-id="' + listProduct[i].id + '">Add to Cart</button>'
    viewProduct += '</div>'
    viewProduct += '</div>'
    viewProduct += '</div>'
    viewProduct += '</div>'
  }
  $productsContainer.innerHTML = viewProduct;
  eventAddProduct();
}

showListProduct();

function eventAddProduct() {
  $cartContainer.addEventListener('click', showListProductCart);
  var btnBuyProduct = document.getElementsByClassName('js-btn-buy-product');
  var lengthProductBuy = btnBuyProduct.length; 
  for (var i = 0; i < lengthProductBuy; i++) {
    btnBuyProduct[i].addEventListener('click', addProductToCart);
  }
}

function addProductToCart() {
  var id = parseInt(this.getAttribute('data-id'));
  var indexProduct = listProductCart.findIndex(product => product.id === id);
  if (indexProduct !== -1) {
    listProductCart[indexProduct].quantity++;
  } else {
    var index = listProduct.findIndex(product => product.id === id);
    product = listProduct[index];
    product.quantity = 1;
    listProductCart.push(product);
  }
  $numberOfCart.innerHTML = listProductCart.length;
}

function showListProductCart() {
  var total = 0;
  var view = '';
  view += '<table id="cart-content" class="u-full-width">'
  view += '<thead>'
  view += '<tr>'
  view += '<th>Name</th>'
  view += '<th>Quantity</th>'
  view += '<th>Price</th>'
  view += '<th>Delete</th>'
  view += '<th></th>'
  view += '</tr>'
  view += '</thead>'
  view += '<tbody>'
  for (var i = 0; i < listProductCart.length; i++) {
    view += '<tr>'
    view += '<td>' + listProductCart[i].name + '</td>'
    view += '<td>' + listProductCart[i].quantity + '</td>'
    view += '<td>' + listProductCart[i].price + '</td>'
    view += "<td><button class='js-btn-delete-product u-full-width' data-id=" + listProductCart[i].id + " >X</button></td>"
    view += '</tr>';
    total = parseFloat(total) + parseFloat(listProductCart[i].price);
  }
  view += '<h2> Total: ' + total + ' </h2>'
  view += '</tbody>'
  view += '</table>'
  view += '<a onClick=backListProduct() class="button"> < Buy</a>'
  view += '<a class="button">Pay</a>'

  $productsContainer.innerHTML = view;
  eventDeleteProduct();
}

function eventDeleteProduct() {
  var $btnDeleteProduct = document.getElementsByClassName('js-btn-delete-product');
  for (var i = 0; i < $btnDeleteProduct.length; i++) {
    $btnDeleteProduct[i].addEventListener('click', function () {
      var id = parseInt(this.getAttribute('data-id'));
      deleteProduct(id);
    });
  }
}

function deleteProduct(id) {
  var lengthListProductCart = listProductCart.length; 
  for (var i = 0; i < lengthListProductCart; i++) {
    if (parseInt(listProductCart[i].id) === id) {
      listProductCart.splice(i, 1);
      break;
    }
  }
  $numberOfCart.innerHTML = listProductCart.length;
  showListProductCart();
}

function backListProduct() {
  showListProduct();
}