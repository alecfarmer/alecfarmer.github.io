let fill = 0;
let wMove = 0;
let rMove = 100;

function fundBar() {
    // Getting data
    const fundInput = document.getElementById("txt-fund-total").value;
    
    let disTotal = document.getElementById("display-total");

    // Checking if input is empty
    const firstError = isBlank(fundInput, "error-fund-total");

    if(firstError) return;

    /* Doing fancy calculations */

    let totalNum = (fundInput / 10000) * 100;

    disTotal.style.setProperty('--filling', totalNum + "%");
}

function walkMan() {
    const movePic = document.getElementById("moving-pic");
    const runPic = document.getElementById("running-pic");
    
    wMove += 2;
    movePic.style.setProperty('--moving', wMove + "px");

    if(wMove == 100) {
        movePic.classList.remove("walking-man");
        movePic.classList.add("hidden");
        runPic.classList.remove("hidden");
        runPic.classList.add("running-man");
    }
}

function runMan() {
    const runPic = document.getElementById("running-pic");

    rMove += 4;
    runPic.style.setProperty('--moving', rMove + "px");
}

function isBlank(data, errorSpanId) {
    if(data.trim() == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    } else {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.add("hidden");
    }
}

const fundCalulate = document.getElementById("btn-calculate");
fundCalulate.onclick = fundBar;

const moveClick = document.getElementById("moving-pic");
moveClick.onclick = walkMan;

const runClick = document.getElementById("running-pic");
runClick.onclick = runMan;