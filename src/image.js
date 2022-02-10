import imgOne from "./assets/images/1.jpg"
import imgTwo from "./assets/images/2.jpg"
import imgThree from "./assets/images/3.jpg"
import imgFour from "./assets/images/4.gif"

let cards = document.querySelector(".cards")

let items = [
    { name: "Мельница у реки", src: imgOne },
    { name: "Горы осенью", src: imgTwo },
    { name: "Деревня летом", src: imgThree },
    { name: "Анимированный котик", src: imgFour },
]

items.forEach((item) => {
    const newItem = document.createElement("div")
    newItem.innerHTML = `<div class="card">
    <img src="${item.src}">
    <h4>${item.name}</h4>
    </div>`
    cards.insertAdjacentElement("beforeend", newItem)
})
