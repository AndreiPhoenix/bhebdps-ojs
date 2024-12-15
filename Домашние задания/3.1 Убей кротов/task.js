let score = 0; // Счетчик побед
let misses = 0; // Счетчик поражений
const maxScore = 10; // Максимальное количество побед
const maxMisses = 5; // Максимальное количество поражений
const holes = document.querySelectorAll('.hole'); // Получаем все лунки

function randomHole() {
    const index = Math.floor(Math.random() * holes.length);
    return holes[index];
}

function showMole() {
    const hole = randomHole();
    hole.classList.add('hole_has-mole');

    setTimeout(() => {
        hole.classList.remove('hole_has-mole');
    }, 1000); // Крот появляется на 1 секунду
}

holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            score++;
            hole.classList.remove('hole_has-mole'); // Убираем крота
            if (score === maxScore) {
                alert('Поздравляем! Вы победили!');
                resetGame();
            }
        } else {
            misses++;
            if (misses === maxMisses) {
                alert('Вы проиграли! Попробуйте снова.');
                resetGame();
            }
        }
        console.log(`Счет: ${score}, Пропуски: ${misses}`);
    });
});

function resetGame() {
    score = 0;
    misses = 0;
}

// Запускаем игру
setInterval(showMole, 1500); // Каждые 1.5 секунды появляется крот
