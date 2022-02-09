import { Howl } from "howler"

// INPUTS
const minutesInput = document.getElementById("minInput")
const secondsInput = document.getElementById("secInput")

// CONTROL BUTTONS
const startBtn = document.getElementById("start")
const pauseBtn = document.getElementById("pause")
const resetBtn = document.getElementById("reset")

// OUTPUTS
const minutesOutput = document.getElementById("mins")
const secondsOutput = document.getElementById("secs")

// ALARM
const alarm = new Howl({
    src: ["../audio/timer_out.mp3"],
})

let interval

startBtn.addEventListener("click", () => {
    minutesOutput.textContent = minutesInput.value
    secondsOutput.textContent = secondsInput.value

    let minutes = minutesOutput.textContent
    let seconds = secondsOutput.textContent

    interval = setInterval(() => {
        minutesOutput.textContent = minutes
        secondsOutput.textContent = --seconds

        if (minutes < 10) {
            minutesOutput.textContent = `0${minutes}`
        } else if (minutes < 1) {
            minutesOutput.textContent = `00`
        } else {
            minutesOutput.textContent = minutes
        }

        if (seconds < 10) {
            secondsOutput.textContent = `0${seconds}`
        } else {
            secondsOutput.textContent = seconds
        }
        if (seconds == 0) {
            seconds = 59
            --minutes
            if (minutes < 0) {
                clearInterval(interval)
                alarm.play()
            }
        }
    }, 1000)
})

pauseBtn.addEventListener("click", () => {
    clearInterval(interval)
})

resetBtn.addEventListener("click", () => {
    clearInterval(interval)
    minutesInput.value = null
    secondsInput.value = null
    minutesOutput.textContent = "00"
    secondsOutput.textContent = "00"
})
