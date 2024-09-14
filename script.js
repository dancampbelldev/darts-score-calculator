
let recordedScores = JSON.parse(localStorage.getItem('recordedScores')) || [];
let weeklyAverage = JSON.parse(localStorage.getItem('weeklyAverage')) || [];
let dailyScores = JSON.parse(localStorage.getItem('dailyScores')) || [];

console.log(recordedScores);

document.addEventListener('DOMContentLoaded', () => {
  if (dailyScores.length > 0) {
  graphDayScore();
  };
  recordScore();
});

const scoreInput = document.getElementById('score-input');
const scoreBtn = document.getElementById('scoreBtn');
const recordBtn = document.getElementById('recordBtn');
const clearBtn = document.getElementById('clear-data-button');
const averageDisplay = document.getElementById('score-display');
const recordedList = document.getElementById('recorded-list');
const weekScoreList = document.getElementById('week-score-list');
const dayGraph = document.getElementById('day-graph');
const clearYes = document.getElementById('clear-yes');
const clearNo = document.getElementById('clear-no');
const clearBox = document.getElementById('clear-data-box');

const dayOne = document.getElementById('dayOne');
const dayTwo = document.getElementById('dayTwo');
const dayThree = document.getElementById('dayThree');
const dayFour = document.getElementById('dayFour');
const dayFive = document.getElementById('dayFive');
const daySix = document.getElementById('daySix');
const daySeven = document.getElementById('daySeven');

let scoreArray = [];
let currentScore;
let currentWeekScore = '';

scoreBtn.addEventListener("click", () => {
  calcAverage();
});

recordBtn.addEventListener("click", () => {
  if (averageDisplay.innerText !== '') {
    recordedScores.push(Number(currentScore));
    graphDayScore();
    recordScore();
  };
});

clearBtn.addEventListener('click', () => {
  clearBox.style.display = 'block';
})

clearYes.addEventListener('click', () => {
  recordedScores = [];
  weeklyAverage = [];
  dailyScores = [];
  recordedList.innerHTML = '';
  graphDayScore();
  dayOne.innerText = '';
  dayTwo.innerText = '';
  dayThree.innerText = '';
  dayFour.innerText = '';
  dayFive.innerText = '';
  daySix.innerText = '';
  daySeven.innerText = '';
  saveScores();
  clearBox.style.display = 'none';
})

clearNo.addEventListener('click', () => {
  clearBox.style.display = 'none';

})
// Calculate average score

function calcAverage() {

  if (scoreInput.value >= 1 && scoreInput.value < 181) {
    if (scoreInput.value) {

      scoreArray.push(Number(scoreInput.value));

      const sum = scoreArray.reduce((acc, val) => {
        return acc + val;
      }, 0);

      const average = sum / scoreArray.length;
      averageDisplay.innerHTML = `${average.toFixed(2)} - <em>${scoreArray.length}<em>`;
      currentScore = average.toFixed(2);
      scoreInput.value = '';
    } else {
      return;
    }
  }
}

// Record scores and dynamically generate HTML

function recordScore() { 

  recordedScores.forEach(() => {
  
    dayOne.innerText = recordedScores[0] || '';
    dayTwo.innerText = recordedScores[1] || '';
    dayThree.innerText = recordedScores[2] || '';
    dayFour.innerText = recordedScores[3] || '';
    dayFive.innerText = recordedScores[4] || '';
    daySix.innerText = recordedScores[5] || '';
    daySeven.innerText = recordedScores[6] || '';

    const sum = recordedScores.reduce((acc, val) => {
      return acc + val
    }, 0);

    const average = sum / recordedScores.length;
    recordedList.innerHTML = average.toFixed(2);
    currentWeekScore = average.toFixed(2);

    if (recordedScores.length === 8) {
      dayOne.innerText = recordedScores[7];
      dayTwo.innerText = '';
      dayThree.innerText = '';
      dayFour.innerText = '';
      dayFive.innerText = '';
      daySix.innerText = '';
      daySeven.innerText = '';

      recordedScores = [Number(recordedScores[7])];
    }

  })

  if (recordedScores.length === 7 && averageDisplay.innerText !== '') {
    recordedList.innerHTML = currentWeekScore
    weeklyAverage.push(currentWeekScore);

    weekScoreList.innerHTML = '';
  };

  weekScoreList.innerHTML = '';

  weeklyAverage.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add('week-average-list')
    let list = weekScoreList;
    li.innerText = `Week ${weeklyAverage.indexOf(item) + 1} - ${item}`;
    list.appendChild(li);
  })

  averageDisplay.innerText = '';
  saveScores();
  scoreArray = [];
}

// Graph Daily Scores

function graphDayScore() {

  if (averageDisplay.innerText !== '') {
    dailyScores.push(Math.round(Number(currentScore)));
  }

  if (dailyScores.length > 20) {
    dailyScores.shift();
  }

  console.log(dailyScores);

  dayGraph.innerHTML = '';

  dailyScores.forEach((score) => { 

    let graphBar = document.createElement("div");
    graphBar.classList.add('day-graph-bar');
    graphBar.style.height = `${score}px`;

    dayGraph.appendChild(graphBar);

  });
}

function saveScores() {
  localStorage.setItem('recordedScores', JSON.stringify(recordedScores));
  localStorage.setItem('weeklyAverage', JSON.stringify(weeklyAverage));
  localStorage.setItem('dailyScores', JSON.stringify(dailyScores));
}

