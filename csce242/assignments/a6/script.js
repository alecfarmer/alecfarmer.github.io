function sortAges() {
    // Getting data
    const firstName = document.getElementById("txt-first-name").value;
    const firstAge = document.getElementById("txt-first-age").value;
    const secondName = document.getElementById("txt-second-name").value;
    const secondAge = document.getElementById("txt-second-age").value;
    const thirdName = document.getElementById("txt-third-name").value;
    const thirdAge = document.getElementById("txt-third-age").value;

    let result = document.getElementById("sorted-result");

    // Checking if input is empty
    const firstNameError = isBlank(firstName, "error-first-name");
    const firstAgeError = isBlank(firstAge, "error-first-age");
    const secondNameError = isBlank(secondName, "error-second-name");
    const secondAgeError = isBlank(secondAge, "error-second-age");
    const thirdNameError = isBlank(thirdName, "error-third-name");
    const thirdAgeError = isBlank(thirdAge, "error-third-age");

    if(firstNameError || firstAgeError || secondNameError || secondAgeError || thirdNameError || thirdAgeError) return;

    // Main function
    if(firstAge < secondAge) {
        if(secondAge < thirdAge) {
            result.innerHTML = `Oldest to youngest: ${thirdName}, ${secondName}, ${firstName}`;
            console.log(`beep`)
        } else if(secondAge > thirdAge) {
            result.innerHTML = `Oldest to youngest: ${secondName}, ${firstName}, ${thirdName}`;
            console.log(`cheap`)
        } else {
            `Oldest to youngest: Invalid Information`;
        }
    } else {
        `Oldest to youngest: Invalid Information`;
    }
}

function fundBar() {
    // Getting data
    const fundInput = document.getElementById("txt-fund-total").value;
    
    let disTotal = document.getElementById("display-total");

    // Clearing the classes
    disTotal.classList.remove("third-way", "half-way", "two-thirds-way", "full");

    // Checking if input is empty
    const firstError = isBlank(fundInput, "error-fund-total");

    if(firstError) return;

    // Main function
    if(fundInput >= 10000) {
        disTotal.classList.add("full");
    } else if(fundInput >=6001) {
        disTotal.classList.add("two-thirds-way")
    } else if(fundInput == 6000) {
        disTotal.classList.add("half-way");
    } else if(fundInput > 0) {
        disTotal.classList.add("third-way");
    }
}

function isBlank(data, errorSpanId) {
    if(data.trim() == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    } else {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.add("hidden");
    }
}

function toggleNav() {
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
}

const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;

const ageSort = document.getElementById("btn-compare");
ageSort.onclick = sortAges;

const fundCalulate = document.getElementById("btn-calculate");
fundCalulate.onclick = fundBar;