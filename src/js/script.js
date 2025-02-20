let count = 0;
function increaseCounter() {
    count++;
    document.getElementById("counter").innerText = count;
}

async function getCatFact() {
    try {
        let response = await fetch("https://catfact.ninja/fact");
        let data = await response.json();
        document.getElementById("cat-fact").innerText = data.fact;
    } catch (error) {
        document.getElementById("cat-fact").innerText = "Loading failed";
    }
}
