class Product {
    #properties = ['id', 'title', 'description', 'image', 'price', 'category']
    constructor(data) {
        this.#properties.forEach(property => {
            this[property] = data[property]
        })
    }
}
class Products {
    constructor() {
        this.products = []
        this.fetchData()
    }
    fetchData() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => {
               json.map(product => {
                this.products.push(new Product(product))
                })
            })
            this.test();
    }
    test() {
        console.log(this.products);
        this.products.forEach(product => console.log(product))
    }
}
const products = new Products()