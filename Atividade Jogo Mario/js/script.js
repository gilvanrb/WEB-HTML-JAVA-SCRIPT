const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.getElementById('score');
let score = 0
let lastPipePassed = false;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {   
        mario.classList.remove('jump');
    }, 500);  
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft; 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png'; 
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'; 

        clearInterval(loop);
    } else if (pipePosition < 0 && !lastPipePassed) {
        // Mario passou com sucesso pelo cano (aumenta 10 pontos)
        score += 10;
        scoreDisplay.textContent = score;
        lastPipePassed = true; // Marca que passou pelo cano
    } else if (pipePosition > 120) {
        // Quando o cano voltar ao início, reseta a verificação para o próximo cano
        lastPipePassed = false;
    }
}, 10);

document.addEventListener("keydown", jump);

