function displayEmotion() {
    // Gather all 3 pieces of information
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;


    let welcome = document.getElementById("welcome");
    let disEmotion = document.getElementById("emotion");

    // clear all error before

    //validate data
    const firstError = isBlank(firstName, "error-name");
    const secondError = isBlank(favColor, "error-fav-color");
    const thirdError = isBlank(emotion, "error-emotion");

    if(firstError || secondError || thirdError) return;

    welcome.innerHTML = `Welcome ${firstName}!<br>You are ${emotion} today`;
    disEmotion.innerHTML = `${getEmoji(emotion)}`;
    disEmotion.classList.remove("red", "green", "blue", "yellow");
    disEmotion.classList.add(favColor.toLowerCase());
}

function isBlank(data, errorSpanId) {
    if(data.trim() == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }
    return false;
}

function getEmoji(emotion) {
    const emot = emotion.toLowerCase();

    if(emot == `happy`) {
        return `:)`;
    } else if(emot == `sad`) {
        return `:(`;
    } else if(emot == `silly`) {
        return `:P`;
    } else if(emot == `angry`) {
        return `>:|`;
    } else {
        return `I can't read you emotion...`;
    }
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;
