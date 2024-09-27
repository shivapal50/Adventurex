document.getElementById('sendBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Show the thank you popup
    const thankYouPopup = document.getElementById('thankYouPopup');
    thankYouPopup.style.display = 'block';

    // Animate popup
    thankYouPopup.classList.add('fade-in');

    // Hide the popup after 3 seconds
    setTimeout(function() {
        thankYouPopup.classList.remove('fade-in');
        thankYouPopup.style.display = 'none';
    }, 3000);
});

// Add fade-in animation using JS to CSS
const fadeInAnimation = `
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.fade-in {
    animation: fadeIn 0.5s ease-out;
}
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = fadeInAnimation;
document.head.appendChild(styleSheet);
