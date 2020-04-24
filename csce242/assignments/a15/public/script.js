// James Alec Farmer
window.onload = function() {
    this.displayPlayers();

    // ADD BUTTON POP OUT
    let addExeBtn = document.getElementById("adding-pop");
    let buttonA = this.document.getElementById("btn-add-pop");
    let btn = this.document.getElementById("btn-add-player");
    // DISPLAY POP OUT
    buttonA.onclick = function() {
        addExeBtn.style.display = "block";
    }
    // ADD PLAYER / CLOSE POP OUT
    btn.onclick = function() {
        addPlayer();
        setTimeout(() => { addExeBtn.style.display = "none"; }, 800);
    }
    // CLOSE POP OUT
    window.onclick = function(event) {
        if(event.target == addExeBtn) {
            addExeBtn.style.display = "none";
        }
    }
    // END ADD POP OUT


    // START EDIT BUTTON POP OUT
    let editExeBtn = document.getElementById("edit-pop");
    /// --> Button found in js creation below \\\
    let btnEdit = document.getElementById("btn-edit-player");
    // EDIT PLAYER / CLOSE POP OUT
    btnEdit.onclick = function() {
        editPlayer();
        setTimeout(() => { editExeBtn.style.display = "none"; }, 800);
    }
    // CLOSE POP OUT
    window.onclick = function(event) {
        if(event.target == editExeBtn) {
            editExeBtn.style.display = "none";
        }
    }
    // END EDIT POP OUT


    // START DELETE POP OUT
    let deleteExeBtn = document.getElementById("delete-pop");
    /// --> Button found in js creation below \\\
    let btnDelete = document.getElementById("btn-delete-player");
    let btnNevermind = document.getElementById("btn-exit");
    btnDelete.onclick = function() {
        deletePlayer();
        setTimeout(() => { deleteExeBtn.style.display = "none"; }, 800);
    }
    // NEVERMIND CLOSE
    btnNevermind.onclick = function() {
        deleteExeBtn.style.display = "none";
    }
    // CLOSE POP OUT
    window.onclick = function(event) {
        if(event.target == deleteExeBtn) {
            deleteExeBtn.style.display = "none";
        }
    }
    // END DELETE POP OUT

}
async function displayPlayers() {
    let response = await fetch('api/players/');
    let playersJSON = await response.json();
    let playersDiv = document.getElementById("player-list");
    playersDiv.innerHTML = "";

    for(i in playersJSON) {
        let player = playersJSON[i];
        playersDiv.append(getPlayerInfo(player));
    }
}

function getPlayerInfo(player) {
    
    // MAIN SECTION
    let mainSection = document.createElement("section");
    mainSection.classList.add("container-fade");
    mainSection.classList.add("player");

    // TITLE
    let title = document.createElement("h2");
    title.textContent = `${player.name} - ${player.commitment}`;
    title.classList.add("playertexth2");
    mainSection.append(title);

    // REVIEWER
    let reviewer = document.createElement("h5");
    reviewer.textContent = `By ${player.reviewer}`;
    reviewer.classList.add("playertexth4");
    mainSection.append(reviewer);

    // INNER BUTTON DIV
    let buttonDiv = document.createElement("div");
    buttonDiv.classList.add("overlay");
    buttonDiv.classList.add("flex");
    mainSection.append(buttonDiv);

    // EDIT BUTTON
    let buttonEdit = document.createElement("button");
    buttonEdit.innerHTML = `Edit`;
    buttonEdit.classList.add("innerButtons");
    let editExeBtn = document.getElementById("edit-pop");
    buttonEdit.onclick = function() {
        showPlayerDetails(player);
        editExeBtn.style.display = "block";
    }
    buttonDiv.append(buttonEdit);

    // DELETE BUTTON
    let buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = `Delete`;
    buttonDelete.classList.add("innerButtons");
    let deleteExeBtn = document.getElementById("delete-pop");
    buttonDelete.onclick = function() {
        showPlayerDetails(player);
        deleteExeBtn.style.display = "block";
    }
    buttonDiv.append(buttonDelete);

    return mainSection;
}

async function showPlayerDetails(player) {
    let playerId = player._id
    let response = await fetch(`/api/players/${playerId}`);

    if(response.status != 200) {
        // DISPLAY ERROR
        console.log("Error reciving player!");
        return;
    }

    player = await response.json();
    document.getElementById("player-id").textContent = playerId;
    document.getElementById("txt-name").value = player.name;
    document.getElementById("txt-age").value = player.age;
    document.getElementById("txt-position").value = player.position;
    document.getElementById("txt-bt").value = player.batThrow;
    document.getElementById("txt-commit").value = player.commitment;
    document.getElementById("txt-gradyear").value = player.gradYear;
    document.getElementById("txt-natrank").value = player.nationRanking;
    document.getElementById("txt-staterank").value = player.stateRanking;
    document.getElementById("txt-rev").value = player.reviewer;
}

async function addPlayer() {
    let playerName = document.getElementById("txt-add-name").value;
    let playerAge = document.getElementById("txt-add-age").value;
    let playerPosition = document.getElementById("txt-add-position").value;
    let playerBatThrow = document.getElementById("txt-add-bt").value;
    let playerCommitment = document.getElementById("txt-add-commit").value;
    let playerGradYear = document.getElementById("txt-add-gradyear").value;
    let playerNatRank = document.getElementById("txt-add-natrank").value;
    let playerStateRank = document.getElementById("txt-add-staterank").value;
    let playerRev = document.getElementById("txt-add-rev").value;

    let player = {"name":playerName, "age":playerAge, "position":playerPosition, "batThrow":playerBatThrow, "commitment":playerCommitment,
        "gradYear":playerGradYear, "nationRanking":playerNatRank, "stateRanking":playerStateRank, "reviewer":playerRev};
    
    let response = await fetch('/api/players', {
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

async function editPlayer() {
    let playerId = document.getElementById("player-id").textContent;
    console.log(playerId);
    let playerName = document.getElementById("txt-name").value;
    let playerAge = document.getElementById("txt-age").value;
    let playerPosition = document.getElementById("txt-position").value;
    let playerBatThrow = document.getElementById("txt-bt").value;
    let playerCommitment = document.getElementById("txt-commit").value;
    let playerGradYear = document.getElementById("txt-gradyear").value;
    let playerNatRank = document.getElementById("txt-natrank").value;
    let playerStateRank = document.getElementById("txt-staterank").value;
    let playerRev = document.getElementById("txt-rev").value;

    let player = {"name":playerName, "age":playerAge, "position":playerPosition, "batThrow":playerBatThrow, "commitment":playerCommitment,
        "gradYear":playerGradYear, "nationRanking":playerNatRank, "stateRanking":playerStateRank, "reviewer":playerRev};

    let response = await fetch(`/api/players/${playerId}`, {
        method:'PUT',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body: JSON.stringify(player)
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

async function deletePlayer(){
    let playerId = document.getElementById("player-id").textContent;
    
    let response = await fetch(`/api/players/${playerId}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        }
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