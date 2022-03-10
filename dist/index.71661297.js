let linkNames = [
    "Home",
    "Products",
    "About",
    "Contact", 
];
class Navigation {
    constructor(linkNames1){
        this.linkNames = linkNames1;
        this.linkItems = document.querySelectorAll('.nav-li');
    }
    init() {
        this.linkItems.forEach((element, index)=>{
            let a = document.createElement("a");
            a.setAttribute("href", "#");
            a.innerHTML = this.linkNames[index];
            element.append(a);
        });
    }
}
const nav = new Navigation(linkNames);
window.onload = nav.init();

//# sourceMappingURL=index.71661297.js.map
