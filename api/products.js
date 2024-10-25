import products from "./../data/products.json"

const productList = document.getElementById('product-list');

products.forEach((product) => {
    // <x-product name="Product A" price="100"></x-product>

    productList.appendChild("<a></a>")
});