let label = document.querySelector(".label")
let correctNumBtn = document.querySelector("#correctNum");
let btn0 = document.querySelector("#btn0")
let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let resetBtn = document.querySelector("#reset")
let btns = document.querySelectorAll(".btns")

let arrBtns = [btn0, btn1, btn2];

let randNum = getRandomInt(100);
let randBtn = chooseRandomBtn(arrBtns);

randBtn.textContent = randNum

setRandomNums();

addBtnsEvents();

function win(state) {
    correctNumBtn.textContent = randNum;
    if (state) {
        label.textContent = "Correct!"
        label.style.color = "#00f719";

    } else {
        label.textContent = "Wrong!"
        label.style.color = "#c40202";
        // randBtn.style.backgroundColor = "#00f719";

    }
    resetBtn.style.cursor = "pointer"
}

function disable(state) {
    if (state) {
        for (const btn of btns) {
            btn.classList.add("btnsDisable");
            resetBtn.disabled = false;

        }
    } else {
        for (const btn of btns) {
            btn.classList.remove("btnsDisable");
        }
    }
}

function reset() {
    randNum = getRandomInt(100);
    randBtn = chooseRandomBtn(arrBtns);
    randBtn.textContent = randNum
    setRandomNums();
    addBtnsEvents();
    label.textContent = "Guess the right number..."
    label.style.color = "black";
    correctNumBtn.textContent = "?"
    for (const btn of btns) {
        if (btn.id == correctNumBtn.id) {
            btn.style.backgroundColor = "white"
            continue;
        }
        btn.style.backgroundColor = "yellow"
    }
    disable(false)
    resetBtn.disabled = true;
    resetBtn.style.cursor = "not-allowed"
}

resetBtn.addEventListener('click', reset);

function setRandomNums() {
    for (const btn of btns) {
        if (btn.id == randBtn.id || btn.id == "correctNum") {
            continue;
        }
        btn.textContent = getRandomInt(100);
    }
}

function chooseRandomBtn(arrBtns) {
    let randNumber = Math.floor(Math.random() * arrBtns.length);
    return arrBtns[randNumber];
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function addBtnsEvents() {
    for (const btn of btns) {
        if (btn.textContent == randNum) {
            btn.addEventListener('click', function () {
                btn.style.backgroundColor = "#00f719";
                win(true)
                disable(true);
            })
            continue;
        }
        btn.addEventListener('click', function () {
            btn.style.backgroundColor = "red";
            win(false)
            disable(true);
        })
    }
}