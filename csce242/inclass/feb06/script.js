function displayEmotion() {
    // Gather all 3 pieces of information
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;


    /*
     * let price = parseFloat(document.getElementById("text-price").value)
     * parseInt(...)
     * let tax = document.getElementById("tax-span").textContent;
     */
    let infop = document.getElementById("info");
    infop.innerHTML = `${firstName} your favorite color is ${favColor} and you are ${emotion}`;
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;
