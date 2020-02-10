function showBoy() {
    console.log("Boy Function");

    let title = document.getElementById("title").innerHTML = ("Boy Stuff");
    let item1  = document.getElementById("item-1").innerHTML = ("Trucks");
    let item2  = document.getElementById("item-2").innerHTML = ("Trains");
    let item3  = document.getElementById("item-3").innerHTML = ("Tools");
}

function showGirl() {
    console.log("Girl Function");

    let title = document.getElementById("title").innerHTML = ("Girl Stuff");
    let item1  = document.getElementById("item-1").innerHTML = ("Dolls");
    let item2  = document.getElementById("item-2").innerHTML = ("Sparkles");
    let item3  = document.getElementById("item-3").innerHTML = ("Stuff");
}

function changeEmoji() {
    let emoji = document.getElementById("emoji");
    if(emoji.innerHTML == "😀") {
        emoji.innerHTML = ("😁")
    } else if (emoji.innerHTML == "😁") {
        emoji.innerHTML = "😅";
    } else if (emoji.innerHTML == "😅") {
        emoji.innerHTML = "😂";
    } else if (emoji.innerHTML == "😂") {
        emoji.innerHTML = ("😀")
    }
}

let buttonEmoji = document.getElementById("button-emoji");
buttonEmoji.onclick = changeEmoji;

let buttonBoy = document.getElementById("button-boy");
buttonBoy.onclick = showBoy;

let buttonGirl = document.getElementById("button-girl");
buttonGirl.onclick = showGirl;