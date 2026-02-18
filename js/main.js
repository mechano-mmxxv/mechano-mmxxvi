document.addEventListener('DOMContentLoaded', () => {

    // --- INTRO VIDEO LOGIC ---
    const introOverlay = document.getElementById('intro-overlay');
    const introVideo = document.getElementById('intro-video');
    const skipBtn = document.getElementById('skip-btn');

    // Check session storage
    if (sessionStorage.getItem('introPlayed') === 'true') {
        if (introOverlay) {
            introOverlay.style.display = 'none';
        }
    } else {
        if (introOverlay && introVideo) {
            // Ensure video plays
            introVideo.play().catch(error => {
                console.log("Autoplay prevented:", error);
                // Fallback: Show a play button or just skip
                introOverlay.style.display = 'none'; // Auto-skip if can't autoplay
            });

            // Video Ended Event
            introVideo.addEventListener('ended', () => {
                closeIntro();
            });

            // Skip Button Event
            if (skipBtn) {
                skipBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    closeIntro();
                });
            }
        }
    }

    function closeIntro() {
        if (introOverlay) {
            introOverlay.classList.add('fade-out');
            setTimeout(() => {
                introOverlay.style.display = 'none';
            }, 1000); // 1s for fade out
            sessionStorage.setItem('introPlayed', 'true');
            // Pause video just in case
            if (introVideo) introVideo.pause();
        }
    }

    // --- NAVIGATION HIGHLIGHT ---
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
            link.classList.add('text-secondary-color'); // Add active color class directly if needed
        }
    });
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- COUNTDOWN TIMER ---
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        // Set date to March 20, 2026
        const targetDate = new Date('March 5, 2026 00:00:00').getTime();
        
        const updateCountdown = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            
            if (distance < 0) {
                clearInterval(updateCountdown);
                countdownElement.innerHTML = "EVENT STARTED";
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').innerText = String(days).padStart(2, '0');
            document.getElementById('hours').innerText = String(hours).padStart(2, '0');
            document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
            document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
        }, 1000);
    }
});
