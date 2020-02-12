function artistDislpay() {
    // Gather all 3 pieces of information
    const artistName = document.getElementById("artist-name").value;
    const songName = document.getElementById("song-name").value;


    let message = document.getElementById("message");

    //validate data
    const firstError = isBlank(artistName, "error-artist-name");
    const secondError = isBlank(songName, "error-song-name");

    if(firstError || secondError) return;

    message.innerHTML = `You like ${songName} by ${artistName}`;
}

function isBlank(data, errorSpanId) {
    if(data.trim() == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }
    return false;
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = artistDislpay;
