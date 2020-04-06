async function showEmployees() {
    let response = await fetch('https://alecfarmer.github.io/csce242/json/employee.json');
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
    employeeSection.classList.add("movie");

    let titleSection = document.createElement("section");
    titleSection.classList.add("innerMovie");
    titleSection.classList.add("center");
    employeeSection.append(titleSection);

    let innerSection = document.createElement("section");
    innerSection.classList.add("innerMovie");
    innerSection.classList.add("hidden");
    innerSection.setAttribute("id", "textSection");
    employeeSection.append(innerSection);

    /*movieSection.append(getMovieImage(movie));*/

    titleSection.append(getJobTitle(employee));
    let button = document.createElement("button");
    button.setAttribute("id", "toggleButton");
    button.innerHTML = `Show Info`;
    button.classList.add("center");
    button.classList.add("tButton");
    button.innerHTML = 'Click me';
    button.onclick = function() {
    innerSection.classList.toggle("hidden");
    return false;
    };
    titleSection.append(button);

    innerSection.append(getEmployeeName(employee));
    innerSection.append(getEmployeeSalary(employee));
    innerSection.append(getEmployeeUserId(employee));
    innerSection.append(getEmployeeDaysWorking(employee));
    innerSection.append(getEmployeeRegion(employee));
    innerSection.append(getEmployeePhoneNumber(employee));
    innerSection.append(getEmployeeEmailAddress(employee));
    innerSection.append(getEmployeeImage(employee));

    return employeeSection;
}

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
    for(i in employee.daysWorking) {
        pElem.innerHTML += `${employee.daysWorking[i]}, `;
    }
    return pElem;
}

function getEmployeeRegion(employee) {
    let pElem = document.createElement("p");
    pElem.innerHTML += `<strong>region</strong> ${employee.region}`;
    return pElem;
}

function getEmployeePhoneNumber(employee) {
    let pElem = document.createElement("p");
    pElem.innerHTML += `<strong>Phone #</strong> ${employee.phoneNumber}`;
    return pElem;
}

function getEmployeeEmailAddress(employee) {
    let pElem = document.createElement("p");
    pElem.innerHTML += `<strong>Email</strong> ${employee.emailAddress}`;
    return pElem;
}

function getEmployeeImage(employee) {
    let image = document.createElement("img");
    image.classList.add("movieImage");
    image.src = `https://alecfarmer.github.io/csce242/json/${employee.employeePhoto}`;
    return image;
}

window.onload = function() {
    this.showEmployees();
}

let togbutton = document.getElementsByTagName("button");
let textSec = document.getElementById("textSection");
togbutton.onclick = console.log(`hi`);