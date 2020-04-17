async function displayDesserts() {
    let response = await fetch('api/recipes/');
    let recipesJSON = await response.json();
    let recipesDiv = document.getElementById("dessert-list");
    recipesDiv.innerHTML = "";

    for(i in recipesJSON){
        let recipe = recipesJSON[i];
        recipesDiv.append(getRecipeItem(recipe));
    }
}

function getRecipeItem(recipe) {
    /*
    let recipeSection = document.createElement("section");
    recipeSection.classList.add("recipe");

    let aTitle = document.createElement("a");
    aTitle.setAttribute("data-id", recipe._id);
    aTitle.href = "#";
    aTitle.onclick = showRecipeDetails;
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = recipe.name;
    aTitle.append(h3Elem);
    recipeSection.append(aTitle);

    let abutton = document.createElement("button");
    recipeSection.append(abutton);
    */

    // Main Section
    let mainSection = document.createElement("section");
    mainSection.classList.add("container-fade");
    mainSection.classList.add("recipe");
    /*
    let aTitle = document.createElement("a");
    aTitle.setAttribute("data-id", recipe._id);
    aTitle.href = "#";
    aTitle.onclick = showRecipeDetails;
    */
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = recipe.name;
    mainSection.append(h3Elem);

   // Button Div
    let btnDiv = document.createElement("div");
    btnDiv.classList.add("overlay");
    btnDiv.classList.add("flex");
    mainSection.append(btnDiv);

    // Edit Button
    let editBtn = document.createElement("button");
    editBtn.innerHTML = `Edit`;
    editBtn.classList.add("adjBtn");
    editBtn.setAttribute("data-id", recipe._id);
    editBtn.id = `buttonEdit`
    editBtn.setAttribute("edit-id", editBtn.id);
    console.log(`${editBtn.id}`);
    btnDiv.append(editBtn);

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `Delete`;
    deleteBtn.classList.add("adjBtn");
    btnDiv.append(deleteBtn);



    return mainSection;
}

async function showRecipeDetails() {
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/recipes/${id}`);

    if(response.status != 200){
        //display an error
        console.log("Error reciving recipe");
        return;
    }

    let recipe = await response.json();
    document.getElementById("recipe-id").textContent = recipe._id;
    document.getElementById("txt-name").value = recipe.name;
    document.getElementById("txt-description").value = recipe.description;
}

async function addRecipe() {
    let recipeName = document.getElementById("txt-add-name").value;
    let recipeDescription = document.getElementById("txt-add-description").value;

    let recipe = {"name":recipeName, "description": recipeDescription};
    
    let response = await fetch('/api/recipes',{
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(recipe),
    });

    if(response.status != 200){
        console.log("ERROR posting data");
        return;
    }

    let result = await response.json();
    console.log(result);
    displayDesserts();
}

async function editRecipe() {
    let recipeId = document.getElementById("recipe-id").textContent;
    let recipeName = document.getElementById("txt-name").value;
    let recipeDescription = document.getElementById("txt-description").value;
    let recipe = {"name":recipeName, "description": recipeDescription};

    let response = await fetch(`/api/recipes/${recipeId}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body: JSON.stringify(recipe)
    });

    if(response.status != 200){
        console.log("Error updating recipe");
        return;
    }

    let result = await response.json();
    displayDesserts();
}

async function deleteRecipe() {
    let recipeId = document.getElementById("recipe-id").textContent;
    
    let response = await fetch(`/api/recipes/${recipeId}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        }
    });

    if(response.status != 200){
        console.log("Error deleting");
        return;
    }

    let result = await response.json();
    displayDesserts();
}

function editButtonPop() {
    let editBtn = document.getElementById("btn-edit-recipe");
    editBtn.onclick = editRecipe;

    let deleteBtn = document.getElementById("btn-delete-recipe");
    deleteBtn.onclick = deleteRecipe;

    // Edit Pop-out
    let editPop = document.getElementById("edit-pop");
    //let openEditBtn = getAttribute("editbtnopen");
    //let test = getAttribute("data-id");
    //let openEditBtn = document.getElementsByTagName("editbtnopen");
    //let openEditBtn = document.getElementById("edit-id");
    let test = document.getElementById("buttonEdit").getAttribute("id");

    let editbtnn = document.getElementById("btn-edit-recipe");

    test.onclick = function() {
        editPop.style.display = "block";
        console.log("test");
    }

    editbtnn.onclick = function() {
        editRecipe();
        setTimeout(() => { editPop.style.display = "none"; }, 800);
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

window.onload = function() {
    this.displayDesserts();
    this.editButtonPop();


    // Add Pop-out
    let modal = document.getElementById("myModal");
    let button = document.getElementById("open-pop");
    let btn = this.document.getElementById("btn-add-recipe");

    button.onclick = function() {
        modal.style.display = "block";
    }

    btn.onclick = function() {
        addRecipe();
        setTimeout(() => { modal.style.display = "none"; }, 800);
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}