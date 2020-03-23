class Child {
    constructor(firstName, lastName, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
    }

    get kids() {
        // Create TR elem
        let ulElem = document.createElement("tr");

        // Create table elements
        let tdElem = document.createElement("td");
        tdElem.innerHTML = `${this.firstName}`;
        ulElem.append(tdElem);

        let td2Elem = document.createElement("td");
        td2Elem.innerHTML = `${this.lastName}`;
        ulElem.append(td2Elem);

        let td3Elem = document.createElement("td");
        td3Elem.innerHTML = `${this.grade}`;
        ulElem.append(td3Elem);

        return ulElem;
    }

    get clickInfo() {
        let name = document.createElement("p");
        name.innerHTML = `${this.firstName}`;

        let grade = document.createElement("p");
        grade.innerHTML = `${this.grade}`;

        let comment = document.createElement("p");
        comment.innerHTML = `She is excellent`;
    }
}


// After the DOM has been loaded 
// After all the HTML elements have been rendered
window.onload = function() {
    let Children = [];
    Children.push(new Child("Amy", "Smith", 2));
    Children.push(new Child("Bobby", "White", 3));
    Children.push(new Child("Carl", "Carrelson", 1));
    Children.push(new Child("Dave", "Marks", 1));
    Children.push(new Child("Erin", "Young", 1));
    let tableList = this.document.getElementById("table-list");
    let tableSection = document.createElement("section");

        let infoSection = document.createElement("table");
        tableList.append(tableSection);
        tableSection.append(infoSection);

        // Create table
        let ulElem = document.createElement("tr");
        infoSection.append(ulElem);

        // Create table titles
        let liFirstElem = document.createElement("th");
        liFirstElem.innerHTML = `First Name`;
        infoSection.append(liFirstElem);

        let liLastElem = document.createElement("th");
        liLastElem.innerHTML = `Last Name`;
        infoSection.append(liLastElem);

        let liGradeElem = document.createElement("th");
        liGradeElem.innerHTML = `Grade`;
        infoSection.append(liGradeElem);

    for(let i in Children) {
        infoSection.append(Children[i].kids);
    }
}