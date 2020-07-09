const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  selectbody: document.querySelector('.js-body'),
  startitem: document.querySelector('button[data-action="start"]'),
  stopitem: document.querySelector('button[data-action="stop"]'),
};

refs.startitem.addEventListener('click', handleStartCLick);
refs.stopitem.addEventListener('click', handleStopCLick);

let intervalClick;

function handleStartCLick() {
  intervalClick = setInterval(() => {
    let randomnumber = randomIntegerFromInterval(0, colors.length);
    refs.selectbody.style.background = colors[randomnumber];
    refs.startitem.setAttribute('disabled', true);
  }, 1000);
}

function handleStopCLick() {
  clearInterval(intervalClick);

  refs.startitem.removeAttribute('disabled');
}