export const appSwitch = () => {
    const formCalendar = document.getElementById("datecalc")
    const formTimer = document.getElementById("timer")

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
}
