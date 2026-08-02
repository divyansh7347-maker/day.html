// Hide loader after 2 seconds
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2000);
};

const startBtn = document.getElementById("startBtn");
const giftSection = document.getElementById("giftSection");
const surpriseBtn = document.getElementById("surprise");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

startBtn.onclick = () => {
    giftSection.style.display = "block";
    giftSection.scrollIntoView({
        behavior: "smooth"
    });

    music.play().catch(() => {});
};

// Friendship Quotes
const quotes = [
    "A true friend is the greatest gift of life. 💛",
    "Friends make every moment special. 🌸",
    "Distance never separates real friends. ✨",
    "Thank you for being part of my journey. 😊",
    "Life is brighter with friends like you. ❤️",
    "Happy Friendship Day! 🫶"
];

let i = 0;

setInterval(() => {
    document.getElementById("quote").innerHTML = quotes[i];
    i++;
    if (i >= quotes.length) i = 0;
}, 2500);

// Music Button
musicBtn.onclick = () => {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "🔊";
    } else {
        music.pause();
        musicBtn.innerHTML = "🔇";
    }
};

// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = ["💖", "💗", "💛", "💜", "💕"][Math.floor(Math.random() * 5)];

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 250);

// Surprise Button
surpriseBtn.onclick = () => {

    // Confetti
    confetti({
        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 }
    });

    // Fireworks
    let duration = 3000;
    let end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 6,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 6,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();

    // Message
    setTimeout(() => {
        alert("🌸 Happy Friendship Day! 🌸\n\nThank you for being such an amazing friend. Wishing you endless happiness, success, and beautiful memories. 💛😊");
    }, 1000);
};