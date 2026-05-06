// 🔐 PASSWORD
function checkPassword() {
    let pass = document.getElementById("password").value;

    if (pass === "GSK") { // change this
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";

        startTyping();
        startConfetti();
    } else {
        alert("Wrong password 😜");
    }
}

// 💬 TYPING EFFECT
let message = "Happy Birthday Gsk 🎂❤️ Thank you for being such a great friend and hope it will be the same!";
let i = 0;

function startTyping() {
    function type() {
        if (i < message.length) {
            document.getElementById("typing").innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}

// 🎇 CONFETTI
function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let pieces = [];

    for (let i = 0; i < 100; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 2,
            speed: Math.random() * 3 + 2
        });
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pieces.forEach(p => {
            p.y += p.speed;
            if (p.y > canvas.height) p.y = 0;

            ctx.fillStyle = "hsl(" + Math.random()*360 + ",100%,50%)";
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });

        requestAnimationFrame(update);
    }

    update();
}

// 🎞️ SLIDER
let currentSlide = 0;
let slides = document.getElementsByClassName("slide");

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
}

function goToFinal() {
    window.location.href = "final.html";
}

// Auto slide
//setInterval(nextSlide, 3000);