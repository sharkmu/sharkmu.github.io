const popupWarning = document.querySelector('.popup-warning');
const popupClose = document.getElementById("popup-close");
window.onload = function() {
    if (!localStorage.getItem("devPopupShown")) 
    {
        popupWarning.style.display = "flex";
    }
    popupClose.addEventListener("click", function() 
    {
        localStorage.setItem("devPopupShown", "true");
        popupWarning.style.display = "none";
    });
    };


// --- easterEgg ---

let clickCounter = 0;

function easterEgg()
{
    if(clickCounter > 3)
    {
        clickCounter = 0;
        startConfetti();
    } 
    else 
    {
        clickCounter++;
    }
}

// --- easterEgg END ---


// --- CONFETTI by: ChatGPT ---

const colors = ["#f94144", "#f3722c", "#f8961e", "#f9844a", "#f9c74f", "#90be6d", "#43aa8b", "#577590"];
const numConfetti = 150;

function createConfettiPiece() 
{
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = confetti.style.height = Math.random() * 8 + 5 + "px";
    document.body.appendChild(confetti);

    let rotation = Math.random() * 360;
    let rotationSpeed = (Math.random() - 0.5) * 10;
    let fallSpeed = Math.random() * 3 + 2;
    let x = parseFloat(confetti.style.left);
    let y = -20;

    function fall() 
    {
        y += fallSpeed;
        rotation += rotationSpeed;
        confetti.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

        if (y < window.innerHeight + 20) 
        {
            requestAnimationFrame(fall);
        } 
        else 
        {
            confetti.remove();
        }
    }

fall();
}

function startConfetti() 
{
    for (let i = 0; i < numConfetti; i++) 
    {
        setTimeout(createConfettiPiece, i * 20);
    }
}

// --- Confetti END ---