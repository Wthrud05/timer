const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')

const createTimerAnimator = () => {
  return (seconds) => {
    let timer = setInterval(() => {
      let hours = Math.floor(seconds / 60 / 60)
      let minutes = Math.floor(seconds / 60) % 60
      let secs = seconds % 60
      timerEl.textContent = `${hours} : ${minutes} : ${secs}`

      if (seconds <= 0) {
        clearInterval(timer)
        inputEl.removeAttribute('disabled')
        timerEl.textContent = 'hh:mm:ss'
      } else {
        inputEl.setAttribute('disabled', true)

        if (hours < 10) {
          hours = '0' + hours
        }

        if (minutes < 10) {
          minutes = '0' + minutes
        }

        if (secs < 10) {
          secs = '0' + secs
        }

        timerEl.textContent = `${hours} : ${minutes} : ${secs}`
      }
      --seconds
    }, 1000)
  }
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', (e) => {
  if (!Number(inputEl.value)) {
    inputEl.value = ''
  }
})

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value)

  animateTimer(seconds)

  inputEl.value = ''
})
