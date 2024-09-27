// Adding animation on sport click
const sportCards = document.querySelectorAll('.sport-card');

sportCards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease-in-out';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 300);
    });
});
