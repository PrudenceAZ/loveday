// Prénom depuis l'URL
const params = new URLSearchParams(window.location.search);
const prenom = params.get("prenom");
if (prenom) {
    document.getElementById("prenom").textContent = prenom;
}

// Bouton NON qui fuit
const noBtn = document.querySelector(".no");
noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
});

// Bouton YES → Galerie
document.querySelector(".yes").addEventListener("click", () => {
    document.querySelector(".bubble-container").style.display = "none";
    document.querySelector(".gallery").classList.remove("hidden");
});

// Coeurs animés
const hearts = document.querySelector(".hearts");
for (let i = 0; i < 25; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (25 + Math.random() * 25) + "px";
    heart.style.animationDuration = (6 + Math.random() * 6) + "s";
    hearts.appendChild(heart);
}
