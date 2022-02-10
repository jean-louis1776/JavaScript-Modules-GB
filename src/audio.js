import audioOne from "./assets/audio/1.mp3"
import audioTwo from "./assets/audio/2.mp3"
import audioThree from "./assets/audio/3.mp3"

let cards = document.querySelector(".cards")

let items = [
    { name: "Птички летом", src: audioOne },
    { name: "Ручеек в ущелье", src: audioTwo },
    { name: "Закат в лесу", src: audioThree },
]

items.forEach((item) => {
    var newItem = document.createElement("div")
    newItem.innerHTML = `<div class="card">
    <div class= "audioCard">
    <audio class="audio" src='${item.src}' controls> </audio>
    </div>
    <h4>${item.name}</h4>
    </div>`
    cards.insertAdjacentElement("beforeend", newItem)
})
