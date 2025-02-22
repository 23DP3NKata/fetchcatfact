let images = [
    "/src/images/car2.jpg",
    "/src/images/car3.jpg",
    "/src/images/car4.jpg",
    "/src/images/car1.jpg"
];
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("image").src = images[currentIndex];
}


async function getCatFact() {
    try {
        let { fact } = await (await fetch("https://catfact.ninja/fact")).json();
        document.getElementById("cat-fact").innerText = fact;
    } catch {
        document.getElementById("cat-fact").innerText = "Loading failed";
    }
}
