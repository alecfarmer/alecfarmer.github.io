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

function showSmile() {
    let faceDiv = document.getElementById("face-div").innerHTML = ("&#128533;");
}

function showFrown() {
    let faceDiv = document.getElementById("face-div").innerHTML = ("&#128512;");
}

function loopArray() {
    list = ["&#128512;","&#128513;","&#128518","&#128514"];
    list.forEach (element => {
        document.querySelector('#face-div').innerHTML = element;
        
    });

    /*
        smile has four different states & cycle though
    */
}

let buttonDiv = document.getElementById("face-div");
buttonDiv.onclick = loopArray;

let buttonBoy = document.getElementById("button-boy");
buttonBoy.onclick = showBoy;

let buttonGirl = document.getElementById("button-girl");
buttonGirl.onclick = showGirl;