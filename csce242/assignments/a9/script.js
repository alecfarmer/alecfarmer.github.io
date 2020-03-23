class Toy {
    constructor(name, price, age, rating, pic) {
        this.name = name;
        this.price = price;
        this.age = age;
        this.rating = rating;
        this.pic = pic;
    }

    get details() {
        return `${this.name} is a ${this.breed}`;
    }

    get item() {
        // Create Main Div
        let toySection = document.createElement("div");
        toySection.classList.add("container-fade");
        toySection.classList.add("flex");
        toySection.classList.add("flex-options");

        // Create image
        let image = document.createElement("img");
        image.src = `images/${this.pic}`
        image.classList.add("image-fade");
        toySection.append(image);

        // Create List Div
        let listDiv = document.createElement("div");
        listDiv.classList.add("overlay");
        toySection.append(listDiv);

        // Create toy information section
        let textSection = document.createElement("section");
        textSection.classList.add("text");
        listDiv.append(textSection);

        // Create title
        let h3Elem = document.createElement("h3");
        h3Elem.innerHTML = this.name;
        textSection.append(h3Elem);

        let priceElem = document.createElement("p");
        priceElem.innerHTML = `<strong>Price:</strong> $${this.price}`;
        textSection.append(priceElem);

        let ageElem = document.createElement("p");
        ageElem.innerHTML = `<strong>Age Range:</strong> ${this.age}`;
        textSection.append(ageElem);

        let ratingElem = document.createElement("p");
        ratingElem.innerHTML = `<strong>Rating:</strong> ${this.rating} Stars`;
        textSection.append(ratingElem);

        return toySection;
    }
}


// After the DOM has been loaded 
// After all the HTML elements have been rendered
window.onload = function() {
    let toys = [];
    toys.push(new Toy("American Girl Doll", 98.00, "5-7", 5, "AMG.jpg"));
    toys.push(new Toy("Doll House", 100.00, "6-8", 4, "toy_house.jpg"));
    toys.push(new Toy("Bycycle", 150.00, "9-10", "4.5", "bike.jpg"));
    toys.push(new Toy("Pogo Stick", 39.99, "7-12", 4, "pogo.jpg"));
    toys.push(new Toy("Tonka Truck", 50.00, "6-8", "3.8", "truck.jpg"));
    toys.push(new Toy("Wagon", 79.99, "4-9", 5, "wagon.jpg"));
    let toyListDiv = this.document.getElementById("toy-list");
    for(let i in toys) {
        toyListDiv.append(toys[i].item);
    }
}