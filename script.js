const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
let score = 0;

const iconCount = 2;

function initializeGame() {
  let targetIconIndex = Math.floor(Math.random() * iconCount);
  let targetIcon;

  function createIcons() {
    for (let i = 0; i < iconCount; i++) {
      const isTargetIcon = i === targetIconIndex;
      const icon = document.createElement('div');
      icon.classList.add('icon', isTargetIcon ? 'target-icon' : 'wrong-icon');
      gameContainer.appendChild(icon);

      icon.style.left = `${Math.random() * (gameContainer.clientWidth - 50)}px`;
      icon.style.top = `${Math.random() * (gameContainer.clientHeight - 50)}px`;

      icon.addEventListener('click', () => {
        if (isTargetIcon) {
          score++;
          scoreDisplay.textContent = score;
          icon.style.transform = 'scale(1.2)';
          setTimeout(() => {
            icon.style.transform = 'scale(1)';
          }, 200);

          // Remove old icons and create new ones
          clearIcons();
          targetIconIndex = Math.floor(Math.random() * iconCount);
          createIcons();
        } else {
          alert('You clicked the wrong icon. Game over! Your score: ' + score);
          location.reload(); // Reload the game to start over
        }
      });
    }
  }

  function clearIcons() {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => gameContainer.removeChild(icon));
  }

  createIcons();
}

initializeGame();
