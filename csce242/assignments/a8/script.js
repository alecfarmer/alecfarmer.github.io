const quotes = [
    "”Forgive your enemies, but never forget their names.” - John F. Kennedy",
    "”If plan A fails, remember there are 25 more letters.” - Chris Guillebeau",
    "”If you always do what you’ve always done, you’ll always get what you’ve always got.” - Steven Hayes",
    "”You can tell the greatness of a man by what makes him angry.” - Abraham Lincoln",
    "”Everything has beauty, but not everyone sees it.” - Confucius"];

    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
function writeQuotes(quotes, i) {
    setInterval(function() {
        document.getElementById("quotes").innerHTML = quotes[i];
        i++;
        i %= quotes.length;
    }, 2000);
}

function showColors(i) {
    let showRain = document.getElementById("show-rainbow");
    showRain.innerHTML = ``;
    let divElem = document.createElement("div");
    showRain.append(divElem);
    let img = document.createElement("img");
    setInterval(function() {
        let paraElem = document.createElement("p");
        paraElem.classList.add("bar");
        paraElem.style.background = colors[i];
        divElem.append(paraElem);
        i++;
    },2000);
}

writeQuotes(quotes, 0);

const btn = document.getElementById("rainbow");
btn.onclick = showColors(0);