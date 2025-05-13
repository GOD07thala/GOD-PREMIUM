
let timer = 60;
let interval;

function startTimer() {
  interval = setInterval(() => {
    document.getElementById('timer').innerText = 'Timer: ' + timer;
    timer--;

    if (timer < 0) {
      timer = 60;
      runPrediction();
    }
  }, 1000);
}

function runPrediction() {
  const colors = ['Red', 'Green', 'Yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById('predictedColor').innerText = randomColor;

  const isWin = Math.random() > 0.4; // simulate win/loss
  const history = document.getElementById('history');
  const newResult = document.createElement('div');
  newResult.className = "flex justify-between p-3 rounded-lg bg-opacity-50 bg-gray-800";
  newResult.innerHTML = `
    <div>Period #${Math.floor(1000 + Math.random() * 100)}</div>
    <div class="${isWin ? 'text-green-400' : 'text-red-400'} font-semibold">${isWin ? 'WIN' : 'LOSS'}</div>
  `;
  history.prepend(newResult);
}

window.onload = () => {
  runPrediction();
  startTimer();
};
