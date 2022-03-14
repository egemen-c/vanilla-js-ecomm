let categories = fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())

class Product {
    constructor(id, name, price, image, description, category) {
        this.id = id
        this.name = name
        this.price = price
        this.image = new URL(image,
            import.meta.url)
        this.description = description
        this.category = category
    }
}

class Products {
    constructor() {
        this.allProducts = []
        this.fetchAllProducts()
    }
    fetchAllProducts() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => res.forEach(product => {
                this.renderProducts(new Product(product.id, product.title, product.price, product.image, product.description, product.category))
            }))
    }


    renderProducts(product) {
        console.log(product)
        let productDiv = document.createElement('div')
        productDiv.className = 'product'
        productDiv.innerHTML = `
                <div class="product-head">
                    <img src="${product.image}" alt="">
                </div>
                <div class="product-body">
                    <span class="tek-satir">${product.name}</span>
                    <span class="iki-satir">${product.description}</span>
                    <span>${product.price}$</span>
                </div>
           `
        document.querySelector('.products-wrapper').appendChild(productDiv)
    }
}

function init() {
    const pr = new Products();

}
window.onload = init()


/* const arr = []

function fetchall() {

} */

/* function ad() {
    arr.forEach(element => {
        console.log(element);
    })
}

console.log(typeof arr);
console.log(arr);
window.onload = fetchall()  */