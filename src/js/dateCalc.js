import getDateDiff from "./getDateDiff.js"
import { printError, printResult, resetResult } from "./printResult.js"

export const dateCalc = () => {
    const formCalendar = document.getElementById("datecalc")
    const resetButton = document.getElementById("reset_but")

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

    resetButton.onclick = (event) => {
        event.preventDefault()

        formCalendar.reset()
        resetResult()
    }
}
