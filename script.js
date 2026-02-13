let pageStep = 0;

function handleKeyPress(event) {
    if (event.key === "Enter") checkPassword();
}

function checkPassword() {
    const pass = document.getElementById('passwordInput').value.toLowerCase();
    const lockSticker = document.getElementById('lockSticker');
    const errorMsg = document.getElementById('errorMsg');
    const successMsg = document.getElementById('successMsg');
    const lockScreen = document.getElementById('lockScreen');
    const mainContent = document.getElementById('mainContent');

    if (pass === "12152025") {
        errorMsg.style.display = "none";
        successMsg.style.display = "block";
        lockSticker.src = "https://media.tenor.com/T_6_tYv2570AAAAi/bubu-dudu-happy.gif"; 
        
        setTimeout(() => {
            lockScreen.style.opacity = "0";
            setTimeout(() => {
                lockScreen.style.display = "none";
                mainContent.classList.remove('hidden');
                setInterval(createHeart, 400);
            }, 600);
        }, 1000);
    } else {
        successMsg.style.display = "none";
        errorMsg.style.display = "block";
        lockSticker.src = "https://media.tenor.com/86pQ61XQYm0AAAAi/tom-and-jerry-tom.gif";
    }
}

document.getElementById('book').addEventListener('click', function() {
    pageStep++;
    if (pageStep === 1) this.classList.add('flip-1');
    else if (pageStep === 2) this.classList.add('flip-2');
    else if (pageStep === 3) this.classList.add('flip-3');
    else {
        this.classList.remove('flip-1', 'flip-2', 'flip-3');
        pageStep = 0;
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}