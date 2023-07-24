const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Интервал
let interval

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    // Отмена предыдущего интервала
    clearInterval(interval);

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds / 60) - hours * 60;

    seconds = seconds - hours * 3600 - minutes * 60;

    let secondsStr = (seconds > 9 ? seconds : ('0' + seconds));
    let minutesStr = minutes > 9 ? minutes : ('0' + minutes);
    let hoursStr = hours > 9 ? hours : ('0' + hours);

    timerEl.textContent = `${hoursStr}:${minutesStr}:${secondsStr}`;

    interval = setInterval(() => {
      console.log('int')
      if (seconds > 0)
        seconds--;
      else if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      } else
        clearInterval(interval);

      secondsStr = (seconds > 9 ? seconds : ('0' + seconds));
      minutesStr = minutes > 9 ? minutes : ('0' + minutes);
      hoursStr = hours > 9 ? hours : ('0' + hours);

      timerEl.textContent = `${hoursStr}:${minutesStr}:${secondsStr}`;
      
    }, 1000);

  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  let regChars = /[\D]/g;
  inputEl.value = inputEl.value.replace(regChars, '');
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
