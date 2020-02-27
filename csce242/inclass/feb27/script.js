let color = "red";

function array() {
    const toys = ["Drum", "Ball", "Car", "Bike"];
    let showToys = document.getElementById("show-toys");
    showToys.innerHTML = ``;
    let ulElem = document.createElement("ul");
    showToys.append(ulElem);
    // Loop thought and display toys as a ul, lu list
    for(let i in toys) {
        let liElem = document.createElement("li");
        liElem.textContent = toys[i];
        ulElem.append(liElem);

        if(i % 2) {
            liElem.classList.add("lightgray");
        } else {
            liElem.classList.add("darkgray");
        }
    }
}

function toggleToys() {
    let showToys = document.getElementById("show-toys");
    showToys.classList.toggle("hidden");
    showToys.style.backgroundColor = color;

    if(color == "red" && !showToys.classList.contains("hidden")) {
        color = "green";
    } else if(color == "green" && !showToys.classList.contains("hidden")) {
        color = "red";
    }

    
    
}
array();

setInterval(toggleToys, 2000);

/*const btnLoop = document.getElementById("btn-toys");
btnLoop.onclick = hide;*/