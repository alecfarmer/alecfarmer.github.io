function displayEmotion() {
    // Gather all 5 parts of input
    const firstName = document.getElementById("txt-first-name").value;
    const lastName = document.getElementById("txt-last-name").value;
    const productName = document.getElementById("txt-product-name").value;
    let productCount = document.getElementById("txt-product-count").value;
    let productPrice = document.getElementById("txt-product-price").value;

    // Math to calculate the total price
    let pAndC = parseFloat(productPrice)*parseFloat(productCount);
    let tax = pAndC*parseFloat(0.07);
    let price = pAndC+tax;

    // Printing the results into html
    let result = document.getElementById("result");
    result.innerHTML = `${firstName} ${lastName} ordered ${productCount} ${productName}(s)`;
    let resultTotal = document.getElementById("result-total");
    resultTotal.innerHTML = `Totaling: ${price}`
}

// Using a button to call the function
const btnDisplay = document.getElementById("btn-calculate");
btnDisplay.onclick = displayEmotion;