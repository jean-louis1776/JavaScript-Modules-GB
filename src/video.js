import videoOne from "./assets/video/1.mp4"
import videoTwo from "./assets/video/2.mp4"

let cards = document.querySelector(".cards")

let items = [
    { name: "Never Gonne Give You Up", src: videoOne },
    { name: "Морской прибой", src: videoTwo },
]

items.forEach((item) => {
    var newItem = document.createElement("div")
    newItem.innerHTML = `<div class="card">
    <video id="player" width="100%" height="150px" autoplay="autoplay" controls>
    <source src="${item.src}" type="video/mp4">
   </video>
    <h4>${item.name}</h4>
    </div>`
    cards.insertAdjacentElement("beforeend", newItem)
})
