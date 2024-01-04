const homeScore = document.getElementById("homeScore");
const homeAddOnePoint = document.getElementById("homeAddOnePoint");
const homeAddTwoPoints = document.getElementById("homeAddTwoPoints");
const homeAddThreePoints = document.getElementById("homeAddThreePoints");
const homeSubtractOnePoint = document.getElementById("homeSubtractOnePoint");

const awayScore = document.getElementById("awayScore");
const awayAddOnePoint = document.getElementById("awayAddOnePoint");
const awayAddTwoPoints = document.getElementById("awayAddTwoPoints");
const awayAddThreePoints = document.getElementById("awayAddThreePoints");
const awaySubtractOnePoint = document.getElementById("awaySubtractOnePoint");

// Home functions

homeAddOnePoint.addEventListener("click", function () {
    let homeCurrentScore = parseInt(homeScore.textContent);
    homeScore.textContent = homeCurrentScore + 1;
    homeSubtractOnePoint.disabled = false;
});

homeAddTwoPoints.addEventListener("click", function () {
    let homeCurrentScore = parseInt(homeScore.textContent);
    homeScore.textContent = homeCurrentScore + 2;
    homeSubtractOnePoint.disabled = false;
});

homeAddThreePoints.addEventListener("click", function () {
    let homeCurrentScore = parseInt(homeScore.textContent);
    homeScore.textContent = homeCurrentScore + 3;
    homeSubtractOnePoint.disabled = false;
});

homeSubtractOnePoint.addEventListener("click", function () {
    let homeCurrentScore = parseInt(homeScore.textContent);
    if (homeCurrentScore > 0) {
        homeScore.textContent = homeCurrentScore - 1;
    }
    if (homeCurrentScore === 1) {
        homeSubtractOnePoint.disabled = true;
    }
});

// Away functions

awayAddOnePoint.addEventListener("click", function () {
    let awayCurrentScore = parseInt(awayScore.textContent);
    awayScore.textContent = awayCurrentScore + 1;
    awaySubtractOnePoint.disabled = false;
});

awayAddTwoPoints.addEventListener("click", function () {
    let awayCurrentScore = parseInt(awayScore.textContent);
    awayScore.textContent = awayCurrentScore + 2;
    awaySubtractOnePoint.disabled = false;
});

awayAddThreePoints.addEventListener("click", function () {
    let awayCurrentScore = parseInt(awayScore.textContent);
    awayScore.textContent = awayCurrentScore + 3;
    awaySubtractOnePoint.disabled = false;
});

awaySubtractOnePoint.addEventListener("click", function () {
    let awayCurrentScore = parseInt(awayScore.textContent);
    if (awayCurrentScore > 0) {
        awayScore.textContent = awayCurrentScore - 1;
    }
    if (awayCurrentScore === 1) {
        awaySubtractOnePoint.disabled = true;
    }
});