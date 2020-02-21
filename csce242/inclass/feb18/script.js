function displayEmotion() {
    //gather all 3 pieces of information & write to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;
    
    let displayP = document.getElementById("ex1-result");
    let displayEmotion = document.getElementById("ex1-emotion");

    //clear all errors before

    //validate data
    const firstError = isBlank(firstName, "error-name");
    const secondError = isBlank(favColor, "error-fav-color");
    const thirdError = isBlank(emotion, "error-emotion");

    if(firstError || secondError || thirdError) return;

    //display results
    displayP.innerHTML = `Welcome ${firstName}!<br>You are ${emotion} today`;
    displayEmotion.innerHTML = `${getEmoji(emotion)}`;
    displayEmotion.classList.remove("red", "green", "yellow", "blue");
    displayEmotion.classList.add(favColor.toLowerCase());
}

function isBlank(data, errorSpanId){
    if(data.trim() == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }
}

function isValidNum(data, errorSpanId) {
    if(isNaN(data, errorSpanId)) {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }
    return false;
}

function getEmoji(emotion){
    const emoCI = emotion.toLowerCase();

    if(emoCI == "happy")
    {
        return ":)"
    }
    else if(emoCI == "sad"){
        return ":(";
    }
    else if(emoCI == "silly"){
        return ":p";
    }
    else if(emoCI == "angry"){
        return ">:|";
    }

    return "";
}

function displayCount() {
    let startNum = parseInt(document.getElementById("txt-start").value);
    let endNum = parseInt(document.getElementById("txt-end").value);

    //let displayNums = document.getElementById("count-results");

    // Clear both error spans
    document.getElementById("error-start").classList.add("hidden");
    document.getElementById("error-end").classList.add("hidden");

    // Check if number is blank
    const startError = isValidNum(startNum, "error-start");
    const endError = isValidNum(endNum, "error-end");

    if(startError || endError) return;

    // Check if first num is larger than second num
    if(startNum >= endNum) {
        displayNums.innerHTML = `End num must be larget than start num`;
        return;
    }
    /*
    // Count
    displayNums.innerHTML = `Counting:<ul>`;
    
    for(let i = startNum;i < endNum;i++) {
        displayNums.innerHTML += `<li>${i}</li>`;
    }

    displayNums.innerHTML += '<ul>All Done!!!';
    */

    let h3Elem = document.createElement("h3");
    h3Elem.textContent = `Counting:`;
    btnDisplayCount.after(h3Elem);

    let ulElem = document.createElement("ul");
    h3Elem.after(ulElem);

    for(let i = startNum;i <= endNum;i++) {
        let liElem = document.createElement("li");
        liElem.textContent = i;
        ulElem.append(liElem);
    }
}

function doStuff() {
    // Making elements
    let startElem = document.createElement("h3");
    let ulElm = document.createElement("ul");
    let endElem = document.createElement("h3");

    // Adding text contents
    startElem.textContent = `I Love Cookies`;
    endElem.textContent = `Cookie Time`;
    ulElm.classList.add("cookie-list");

    // Sorting data
    this.after(startElem);
    startElem.after(ulElm);
    ulElm.after(endElem);

    // Populate the num list
    for(let i = 5;i >= 1;i--) {
        let liElem = document.createElement("li");
        liElem.textContent = i;
        ulElm.append(liElem);
    }
}

function toggleNav() {
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;

const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;

const btnDisplayCount = document.getElementById("btn-count");
btnDisplayCount.onclick = displayCount;

const btnDoStuff = document.getElementById("btn-do-stuff");
btnDoStuff.onclick = doStuff;