let fill = 0;
let move = 0;

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

function moveMan() {
    const movePic = document.getElementById("moving-pic");

    move += 2;
    movePic.style.setProperty('--moving', move + "px");
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
moveClick.onclick = moveMan;