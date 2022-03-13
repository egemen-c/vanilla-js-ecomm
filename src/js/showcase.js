const images = [
    {
        img:new URL('../assets/showcase-img-1.jpg', import.meta.url),
        content:"All Products"
    },
    
    {
        img:new URL('../assets/showcase-img-2.jpg', import.meta.url),
        content:"See Shorts"
    },
    
    {
        img:new URL('../assets/showcase-img-3.jpg', import.meta.url),
        content:"See T-Shirts"
    }
]

class Showcase {
    constructor(img) {
        this.images = img  
        this.showcaseContainer = document.querySelectorAll('.showcase-img-container')
    }

    setDom(){
       this.showcaseContainer.forEach((el, index) => {
           el.innerHTML = `<img src="${this.images[index].img}" alt="${this.images[index].content}">
           <button class="btn-showcase">${this.images[index].content}</button>
           `
       })
    }
}

const showcase = new Showcase(images);
showcase.setDom();