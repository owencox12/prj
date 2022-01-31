let burger = document.querySelector(".promo__header_burger")
burger.addEventListener("click", function(){
    burger.classList.toggle("promo__header_burger_active")
    document.querySelector(".promo__header_burger_list").classList.toggle("promo__header_burger_list_active")
    document.querySelector(".promo__header_logo").classList.toggle("promo__header_logo_active")
})

let header = document.querySelector(".pr")

window.addEventListener("scroll", function(){
    if (scrollY >= 70) {
        document.querySelector(".promo__header").classList.add("promo__header_active")
    } else {
        document.querySelector(".promo__header").classList.remove("promo__header_active")
    }
})

window.addEventListener("scroll", function(){
    if(scrollY >= 100) {
        document.querySelector(".arrow").classList.add("arrow__visible")
    } else {
        document.querySelector(".arrow").classList.remove("arrow__visible")
    }
})


let arrow = document.querySelector(".arrow")

arrow.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})