// js/script.js
// Load navigation menu
function loadNav() {
    const path = window.location.pathname.includes('/container/') ? 'nav.html' : 'container/nav.html';
    fetch(path)
        .then(response => {
            if (!response.ok) throw new Error('Failed to load nav.html');
            return response.text();
        })
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading nav:', error));
}

// Toggle hamburger menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Modal functionality for projects
document.addEventListener('DOMContentLoaded', () => {
    loadNav();

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