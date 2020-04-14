// James (Alec) Farmer
async function displayPlayers(){
    let response = await fetch('api/players/');
    let playersJSON = await response.json();
    let playersDiv = document.getElementById("player-list");
    playersDiv.innerHTML = "";

    for(i in playersJSON){
        let player = playersJSON[i];
        playersDiv.append(getPlayerInfo(player));
    }
}

function getPlayerInfo(player){
    let playerSection = document.createElement("section");
    playerSection.classList.add("player");

    let aTitle = document.createElement("a");
    aTitle.setAttribute("data-id", player.id);
    aTitle.href = "#";
    aTitle.onclick = showPlayerDetails;
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = player.name;
    aTitle.append(h3Elem);
    playerSection.append(aTitle);

    return playerSection;
}

async function showPlayerDetails(){
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/players/${id}`);

    if(response.status != 200){
        console.log("Error reciving player");
        return;
    }

    let player = await response.json();
    document.getElementById("player-id").textContent = player.id;
    document.getElementById("txt-name").value = player.name;
    document.getElementById("txt-batting-average").value = player.battingAverage;
    document.getElementById("txt-position").value = player.position;
    document.getElementById("txt-team").value = player.team;
}

async function addPlayer(){
    let playerName = document.getElementById("txt-add-name").value;
    let playerBattingAverage = document.getElementById("txt-add-batting-average").value;
    let playerPosition = document.getElementById("txt-add-position").value;
    let playerTeam = document.getElementById("txt-add-team").value;

    let player = {"name":playerName, "battingAverage":playerBattingAverage, "position":playerPosition, "team":playerTeam};
    
    let response = await fetch(`/api/players`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(player),
    });

    if(response.status != 200) {
        let span = document.getElementById("notifyType");
        let note = document.getElementById("note");
        note.classList.toggle("active");
        span.classList.toggle("failure");

        setTimeout(function(){
            note.classList.remove("active");
            span.classList.remove("failure");
        }, 3000);
        return;
    } 
    else {
        let span = document.getElementById("notifyType");
        let note = document.getElementById("note");
        note.classList.toggle("active");
        span.classList.toggle("success");

        setTimeout(function() {
            note.classList.remove("active");
            span.classList.remove("success");
        }, 3000);
    }

    let result = await response.json();
    console.log(result);
    displayPlayers();
}

async function editPlayer(){
    let playerId = document.getElementById("player-id").textContent;
    let playerName = document.getElementById("txt-name").value;
    let playerBattingAverage = document.getElementById("txt-batting-average").value;
    let playerPosition = document.getElementById("txt-position").value;
    let playerTeam = document.getElementById("txt-team").value;
    let player = {"name":playerName, "battingAverage":playerBattingAverage, "position":playerPosition, "team":playerTeam};

    let response = await fetch(`/api/players/${playerId}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body: JSON.stringify(player)
    });

    if(response.status != 200){
        let span = document.getElementById("notifyType");
        let note = document.getElementById("note");
        note.classList.toggle("active");
        span.classList.toggle("failure");

        setTimeout(function(){
            note.classList.remove("active");
            span.classList.remove("failure");
        }, 3000);
        return;
    }
    else {
        let span = document.getElementById("notifyType");
        let note = document.getElementById("note");
        note.classList.toggle("active");
        span.classList.toggle("success");

        setTimeout(function(){
            note.classList.remove("active");
            span.classList.remove("success");
        }, 3000);
    }

    let result = await response.json();
    console.log(result);
    displayPlayers();
}

async function deletePlayer(){
    let playerId = document.getElementById("player-id").textContent;
    
    let response = await fetch(`/api/players/${playerId}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        }
    });

    if(response.status != 200){
        let span = document.getElementById("notifyType");
        let note = document.getElementById("note");
        note.classList.toggle("active");
        span.classList.toggle("failure");

        setTimeout(function(){
            note.classList.remove("active");
            span.classList.remove("failure");
        }, 3000);
        return;
    }
    else {
        let span = document.getElementById("notifyType");
        let note = document.getElementById("note");
        note.classList.toggle("active");
        span.classList.toggle("success");

        setTimeout(function(){
            note.classList.remove("active");
            span.classList.remove("success");
        }, 3000);
    }

    let result = await response.json();
    console.log(result);
    displayPlayers();
}

window.onload = function(){
    this.displayPlayers();

    let addBtn = document.getElementById("btn-add-player");
    addBtn.onclick = addPlayer;

    let editBtn = document.getElementById("btn-edit-player");
    editBtn.onclick = editPlayer;

    let deleteBtn = document.getElementById("btn-delete-player");
    deleteBtn.onclick = deletePlayer;
}