class Category {
    constructor(name) {
        this.name = name;
    }
}

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
    categories = []
    constructor() {
        this.fetchAllProducts()
        this.fetchCategories()

    }
    fetchAllProducts() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => res.forEach(product => {
                this.renderProducts(new Product(product.id, product.title, product.price, product.image, product.description, product.category))
            }))
    }


    renderProducts(product) {
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
                    <span><button class="add-btn">Add Cart</button></span>
                </div>
           `
        document.querySelector('.products-wrapper').appendChild(productDiv)
    }
    fetchCategories() {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => json.forEach(el => {
                this.renderCategories(new Category(el))
            }))
    }
    renderCategories(category) {
        let categoryBtn = document.createElement('button')
        categoryBtn.className = 'category-btn'
        categoryBtn.dataset.id = category.name
        categoryBtn.innerHTML = `
            ${category.name}
           `
        document.querySelector('.categories-wrapper').appendChild(categoryBtn)
    }
}

function init() {
    const pr = new Products();

}
window.onload = init()