async function showEmployees() {
    let response = await fetch('https://github.com/alecfarmer/alecfarmer.github.io/blob/master/csce242/json/sickness.json');
    let employeeJSON = await response.json();
    let employeesSection = document.getElementById("section");
    
    //loop through the movies
    for(i in employeeJSON) {
        let employee = employeeJSON[i];
        employeesSection.append(getmovieItems(employee));
    }
}

function getmovieItems(employee) {
    let employeeSection = document.createElement("section");
    employeeection.classList.add("movie");
    employeeSection.classList.add("flex");

    let innerSection = document.createElement("section");
    innerSection.classList.add("innerMovie");
    employeeSection.append(innerSection);

    /*movieSection.append(getMovieImage(movie));*/

    innerSection.append(getJobTitle(employee));
    innerSection.append(getEmployeeName(employee));
    innerSection.append(getEmployeeSalary(employee));
    innerSection.append(getEmployeeUserId(employee));
    innerSection.append(getEmployeeDaysWorking(employee));
    innerSection.append(getEmployeeRegion(employee));
    innerSection.append(getEmployeePhoneNumber(employee));
    innerSection.append(getEmployeeEmailAddress(employee));


    return employeeSection;
}
/*
function getMovieImage(movie) {
    let image = document.createElement("img");
    image.classList.add("movieImage");
    image.classList.add("zoom");
    image.src = `https://portiaportia.github.io/csce242/json/${movie.img}`;
    return image;
}
*/

function getJobTitle(employee) {
    let title = document.createElement("h3");
    title.innerText = employee.jobTitle;
    return title;
}

function getEmployeeName(employee) {
    let name = document.createElement("p");
    name.innerHTML += `<strong>Name</strong> ${employee.name}`;
    return name;
}

function getEmployeeSalary(employee) {
    let pElem = document.createElement("p");
    pElem.innerHTML += `<strong>Salary</strong> ${employee.salary}`;
    return pElem;
}

function getEmployeeUserId(employee) {
    let pElem = document.createElement("p");
    pElem.innerHTML += `<strong>User ID</strong> ${employee.userId}`;
    return pElem;
}

function getEmployeeDaysWorking(employee) {
    let pElem = document.createElement("p");
    pElem.innerHTML += `<strong>Days Working</strong> `;
    for(i in movie.actors) {
        director.innerHTML += `${employee.daysWorking[i]}, `;
    }
    return pElem;
}

function getEmployeeRegion(employee) {
    let pElem = document.createElement("p");
    pElem.innerHTML += `<strong>Director</strong> ${employee.region}`;
    return pElem;
}

function getEmployeePhoneNumber(employee) {
    let pElem = document.createElement("p");
    pElem.innerHTML += `<strong>Director</strong> ${employee.phoneNumber}`;
    return pElem;
}

function getEmployeeEmailAddress(employee) {
    let pElem = document.createElement("p");
    pElem.innerHTML += `<strong>Director</strong> ${employee.emailAddress}`;
    return pElem;
}

window.onload = function(){
    this.showEmployees();
}