const el = document.querySelector(".clock")
const focusTimeInput = document.querySelector("#focusTime")
const pauseBtn = document.querySelector(".pause")
const clearBtn = document.querySelector("#clearStorage")
const bell = document.querySelector("audio")

const mindiv = document.querySelector(".mins")
const secdiv = document.querySelector(".secs")

const startBtn = document.querySelector(".start")
localStorage.setItem("btn", "focus")

let initial, paused, mins, seconds, totalsecs

const decremenT = () => {
    mindiv.textContent = Math.floor(seconds / 60)
    secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`

    if (seconds > 0) {
        seconds--
        initial = window.setTimeout("decremenT()", 1000)
    } else {
        mins = 0
        seconds = 0
        bell.play()
    }
}

focusTimeInput.value = localStorage.getItem("focusTime")

document.querySelector(".setting_form").addEventListener("submit", (e) => {
    e.preventDefault()
    localStorage.setItem("focusTime", focusTimeInput.value)
})

document.querySelector(".reset").addEventListener("click", () => {
    clearTimeout(initial)
    mindiv.textContent = "0"
    secdiv.textContent = "00"
})

pauseBtn.addEventListener("click", () => {
    if (paused === undefined) {
        return
    }
    if (paused) {
        paused = false
        initial = setTimeout("decremenT()", 60)
        pauseBtn.textContent = "Пауза"
    } else {
        clearTimeout(initial)
        pauseBtn.textContent = "Продолжить"
        paused = true
    }
})

startBtn.addEventListener("click", () => {
    mins = +localStorage.getItem("focusTime") || 1

    seconds = mins * 60
    totalsecs = mins * 60
    setTimeout(decremenT(), 60)
    paused = false
})

clearBtn.onclick = (e) => {
    e.preventDefault()
    localStorage.clear("focusTime")
    focusTimeInput.value = ""
}
