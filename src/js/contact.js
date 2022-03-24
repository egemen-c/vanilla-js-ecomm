
class ContactDom {
    constructor() {
        this.buttons = document.querySelectorAll('#contact-button');
        this.formContainer = document.querySelector('.contact-form-container')
        this.mapContainer = document.querySelector('.maps-container')
    }

    test() {
        this.buttons.forEach((btn, index) => {
            btn.dataset.id = index
            btn.addEventListener('click', (event)=>{
                this.clickAction(event)
            })
        })
    }
    clickAction(event) {
        let current = event.currentTarget.dataset.id
        console.log(current);
        console.log(this.formContainer.style.display);
        if (current == 0) {
          this.formContainer.style.display = "grid"
          this.mapContainer.style.display = "none"
        }
        if (current == 1) {
            this.formContainer.style.display = "none"
          this.mapContainer.style.display = "block"
        }
    }
}

const contact = new ContactDom();
contact.test()