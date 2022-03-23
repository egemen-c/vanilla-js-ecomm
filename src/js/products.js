function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => {
            products.products = json.map(product => {
                return new Product(product)
            })
            products.setDomProducts()
        })
}

fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(json => {
        products.categories = json.map(product => {
            return new Category(product)
        })
        products.setDomCategories()
    })
class Product {
    properties = ['id', 'title', 'description', 'image', 'price', 'category']
    constructor(data) {
        this.properties.forEach(property => {
            this[property] = data[property]
        })
    }
}
class Category {
    constructor(name) {
        this.name = name
    }
}
class Products {
    constructor() {
        this.products = []
        this.categories = []
        this.categoryButtons = document.querySelectorAll('.category-btn')
        this.categoriesWrapper = document.querySelector('.categories-wrapper')
        this.productsWrapper = document.querySelector('.products-wrapper')
    }
    setDomProducts() {
        this.products.map(product => {
            let productDiv = document.createElement('div')
            productDiv.className = 'product'
            productDiv.innerHTML = `
            <div class="product-head">
                <img src="${product.image}" alt="">
            </div>
            <div class="product-body">
                <span class="tek-satir">${product.title}</span>
                <span class="iki-satir">${product.description}</span>
                <span>${product.price}$</span>
                <span><button class="add-btn">Add Cart</button></span>
            </div>
       `
            this.productsWrapper.appendChild(productDiv)
        })
    }
    setDomCategories() {
        this.categories.forEach(el => {
            let btn = document.createElement('button')
            btn.innerHTML = `${el.name}`
            btn.classList = "category-btn"
            btn.dataset.query = `${el.name}`
            this.categoriesWrapper.appendChild(btn)
        })
        let btn = document.createElement('button')
        btn.innerHTML = "All"
        btn.classList = "selected category-btn"
        btn.addEventListener('click', () => {
            fetchProducts()
        })
        this.categoriesWrapper.prepend(btn)

        this.setButtonsClickEvent()
    }
    setButtonsClickEvent() {
        let buttons = document.querySelectorAll('.category-btn')
        buttons.forEach(btn => {
            btn.addEventListener('click', (event) => {
                this.searchByCategory(event)
            })
        })
    }
    searchByCategory(event) {
        // clicked button border
        let btns = document.querySelectorAll('.category-btn')
        btns.forEach(btn => {
            btn.classList.remove('selected')
        })
        event.currentTarget.classList.add('selected') 

        //search category proccess
        let current = event.currentTarget.dataset.query
        let product = document.querySelectorAll('.product')
        product.forEach(el => {
            el.remove()
        })
        fetch(`https://fakestoreapi.com/products/category/${current}`)
            .then(response => response.json())
            .then(json => {
                products.products = json.map(product => {
                    return new Product(product)
                })
                products.setDomProducts()
            })
    }
}
const products = new Products()

window.onload = fetchProducts()