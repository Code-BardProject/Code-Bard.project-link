 
// js/script.js
// Toggle hamburger menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Modal functionality for projects
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('videoModal');
    if (modal) {
        const videoFrame = document.getElementById('videoFrame');
        const closeBtn = document.querySelector('.close-btn');
        const watchButtons = document.querySelectorAll('.watch-btn');

        watchButtons.forEach(button => {
            button.addEventListener('click', () => {
                const videoUrl = button.getAttribute('data-video');
                videoFrame.src = videoUrl;
                modal.style.display = 'flex';
                videoFrame.play(); // Автоматическое воспроизведение
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            videoFrame.pause(); // Остановка видео
            videoFrame.src = ''; // Сброс источника
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                videoFrame.pause(); // Остановка видео
                videoFrame.src = ''; // Сброс источника
            }
        });
    }
}); 
