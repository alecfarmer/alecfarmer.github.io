class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get details() {
        return `${this.title} is a ${this.breed}`;
    }

    get item() {
        let dogSection = document.createElement("section");
        dogSection.classList.add("flex");

        // Create picture
        let imgElem = document.createElement("img");
        imgElem.src = `images/${this.pic}`
        imgElem.width = 100;
        dogSection.append(imgElem)
        imgElem.classList.add("img");

        let infoSection = document.createElement("section");
        dogSection.append(infoSection);

        // Create title
        let h3Elem = document.createElement("h3");
        h3Elem.innerHTML = this.title;
        infoSection.append(h3Elem);
        h3Elem.style.marginLeft = `25px`;

        // Create List
        let ulElem = document.createElement("ul");
        infoSection.append(ulElem);

        let liBreedElem = document.createElement("li");
        liBreedElem.innerHTML = `Breed: ${this.breed}`;
        ulElem.append(liBreedElem);

        let liColorElem = document.createElement("li");
        liColorElem.innerHTML = `Color: ${this.color}`;
        ulElem.append(liColorElem);

        let liAgeElem = document.createElement("li");
        liAgeElem.innerHTML = `Age: ${this.age}`;
        ulElem.append(liAgeElem);

        let liSizeElem = document.createElement("li");
        liSizeElem.innerHTML = `Size: ${this.size}`;
        ulElem.append(liSizeElem);

        return dogSection;
    }
}


// After the DOM has been loaded 
// After all the HTML elements have been rendered
window.onload = function() {
    let dogs = [];
    dogs.push(new Dog("Tipsy", "Yorkie", "Brown", 5, "small", "Tipsy.jpg"));
    dogs.push(new Dog("Tipsy", "Pit Bull", "White", 6, "medium", "pit-bull.jpg"));
    dogs.push(new Dog("Tipsy", "Golden Retriever", "Yellow", 7, "large", "golden-retriever.jpg"));
    let dogListDiv = this.document.getElementById("dog-list");
    for(let i in dogs) {
        dogListDiv.append(dogs[i].item);
    }
}