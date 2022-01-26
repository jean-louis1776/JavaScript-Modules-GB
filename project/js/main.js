import getDateDiff from "./getDateDiff.js"
import { printError, printResult } from "./printResult.js"

const formCalendar = document.getElementById("datecalc")
const formTimer = document.getElementById("timer")

formCalendar.onsubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const firstDate = formData.get("firstDate")
    const secondDate = formData.get("secondDate")

    if (!firstDate || !secondDate) {
        printError("Для расчёта промежутка необходимо заполнить оба поля")
    } else {
        const dateDiff = getDateDiff(firstDate, secondDate)
        printResult(dateDiff)
    }
}

const calcDateBut = document.getElementById("calc_but")
const timerBut = document.getElementById("timer_but")

timerBut.onclick = (e) => {
    e.preventDefault()

    formCalendar.classList.add("hidden")
    formTimer.classList.remove("hidden")
}

calcDateBut.onclick = (e) => {
    e.preventDefault()

    formTimer.classList.add("hidden")
    formCalendar.classList.remove("hidden")
}
