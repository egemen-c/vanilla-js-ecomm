const slideItems = [{
        img: new URL('../assets/slider-img-1.jpg',
            import.meta.url),
        content: 'image 1'
    },
    {
        img: new URL('../assets/slider-img-2.jpg',
            import.meta.url),
        content: 'image 2'
    },
    {
        img: new URL('../assets/slider-img-3.jpg',
            import.meta.url),
        content: 'image 3'
    }
]

class Slider {
    constructor(slideItems) {
        this.slideItems = slideItems,
            this.currentSlide = 1;
        this.sliderDiv = document.querySelector('.slider-wrapper')

    }
    setAllSlides() {
        this.slideItems.forEach((element, index) => {
            let img = document.createElement('img')
            img.setAttribute('src', element.img)
            img.className = "slide"
            img.style.display = "none"
            if (index == 0) {
                img.style.display = "block"
            }
            this.sliderDiv.append(img)

        });
    }

    changeSlide() {
        let slides = document.querySelectorAll(".slide")
        let i;
        if (this.currentSlide > slides.length) {
            this.currentSlide = 1
        }
        if (this.currentSlide < 1) {
            this.currentSlide = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this.currentSlide - 1].style.display = "block";
    }
}

const slider = new Slider(slideItems);
slider.setAllSlides();

let next = document.querySelector('#nav-button-next')
let prev = document.querySelector('#nav-button-prev')
next.addEventListener('click', () => {
    slider.currentSlide++
    slider.changeSlide()
})
prev.addEventListener('click', () => {
    slider.currentSlide--
    slider.changeSlide()
})
