export const timer = () => {
    const timerAlarm = document.querySelector("audio")
    const minuteSpan = document.getElementById("timeMin")
    const secondSpan = document.getElementById("timeSec")
    const focusTimeInput = document.getElementById("focusTime")
    const breakTimeInput = document.getElementById("breakTime")
    const startBtn = document.querySelector(".start")
    const pauseBtn = document.querySelector(".pause")
    const resetBtn = document.querySelector(".reset")
    const settingTimer = document.querySelector(".setting_form")

    localStorage.setItem("btn", "focus")

    let initial, totalsecs, perc, paused, mins, seconds

    focusTimeInput.value = localStorage.getItem("minuteTime")

    settingTimer.onsubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("focusTime", focusTimeInput.value)
        localStorage.setItem("breakTime", breakTimeInput.value)
    }

    resetBtn.addEventListener("click", () => {
        clearInterval(initial)
        minuteSpan.textContent = 0
        secondSpan.textContent = 0
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
            pauseBtn.textContent = "Возобновить"
            paused = true
        }
    })

    startBtn.addEventListener("click", () => {
        let btn = localStorage.getItem("btn")

        if (btn === "focus") {
            mins = +localStorage.getItem("focusTime") || 1
        } else {
            mins = +localStorage.getItem("breakTime") || 1
        }

        seconds = mins * 60
        totalsecs = mins * 60
        setTimeout(decremenT(), 60)
        paused = false
    })

    const decremenT = () => {
        minuteSpan.textContent = Math.floor(seconds / 60)
        secondSpan.textContent =
            seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`

        if (seconds > 0) {
            // perc = Math.ceil(((totalsecs - seconds) / totalsecs) * 100)
            seconds--
            initial = window.setTimeout("decremenT()", 1000)
        } else {
            mins = 0
            seconds = 0
            // timerAlarm.play()
            let btn = localStorage.getItem("btn")

            if (btn === "focus") {
                startBtn.textContent = "Новый круг"
                localStorage.setItem("btn", "break")
            } else {
                startBtn.textContent = "Старт"
                localStorage.setItem("btn", "focus")
            }
        }
    }
}
